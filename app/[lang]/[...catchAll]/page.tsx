import { notFound } from "next/navigation";

/* Catch-all leaf so /[lang]/whatever actually renders inside the resolved
   [lang] layout tree before Next determines there's no matching content —
   without this, Next.js can't match any page for an arbitrary sub-path
   under [lang] and falls through straight to the root app/not-found.tsx
   instead of the locale-aware app/[lang]/not-found.tsx. Calling notFound()
   here is what makes the nested not-found.tsx boundary trigger. */
export default function CatchAll() {
  notFound();
}
