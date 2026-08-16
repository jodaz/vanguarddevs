import { GoogleGenAI } from "@google/genai";
import { systemPrompt } from "@/lib/chat-prompt";
import { isLocale } from "@/lib/i18n";

export const runtime = "nodejs";
export const maxDuration = 30;

// Owner confirms/changes; one constant on purpose.
const GEMINI_MODEL = "gemini-2.5-flash";

// Public endpoint: the key is exposed to abuse, so cap everything.
const MAX_MESSAGES = 20;
const MAX_CHARS = 1000;
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

// ponytail: per-instance map, resets on cold start; swap for @upstash/ratelimit when traffic justifies
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  // Browsers always send Origin on cross-site POST; a foreign one is a script
  // farming the key. Absent Origin (curl) is allowed. Same-origin is judged
  // against the request's own host, not siteUrl: prod serves www., previews
  // serve *.vercel.app, and a hard-coded origin 403'd all of them.
  const origin = req.headers.get("origin");
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  if (origin && process.env.NODE_ENV === "production") {
    let originHost = "";
    try {
      originHost = new URL(origin).host;
    } catch {}
    if (originHost !== host) return new Response(null, { status: 403 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) return new Response(null, { status: 429 });

  let lang: unknown;
  let messages: ChatMessage[];
  try {
    ({ lang, messages } = await req.json());
  } catch {
    return new Response(null, { status: 400 });
  }

  // Never trust the client.
  if (
    typeof lang !== "string" ||
    !isLocale(lang) ||
    !Array.isArray(messages) ||
    messages.length === 0 ||
    messages.length > MAX_MESSAGES ||
    messages.some(
      (m) =>
        !m ||
        (m.role !== "user" && m.role !== "assistant") ||
        typeof m.content !== "string" ||
        m.content.length > MAX_CHARS,
    )
  ) {
    return new Response(null, { status: 400 });
  }

  // Gemini wants the first turn to be a user turn.
  while (messages.length && messages[0].role !== "user") messages.shift();
  if (!messages.length) return new Response(null, { status: 400 });

  const ai = new GoogleGenAI({}); // reads GEMINI_API_KEY
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const run = await ai.models.generateContentStream({
          model: GEMINI_MODEL,
          contents: messages.map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }],
          })),
          config: { systemInstruction: systemPrompt(lang), maxOutputTokens: 512 },
        });
        for await (const chunk of run) {
          if (chunk.text) controller.enqueue(encoder.encode(chunk.text));
        }
      } catch (err) {
        // No in-stream fallback text: an empty body is the failure signal and
        // the client shows dict.chat.error in the visitor's language.
        console.error("[chat]", err);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Accel-Buffering": "no",
    },
  });
}
