"use client";

import { useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons/ThemeIcons";
import type { Dictionary } from "@/lib/dictionaries";

/* Third (and last) client component on the site, after DotField and
   ConsentBanner: a theme switch needs state, and there is no CSS-only
   equivalent that also lets the visitor override the choice.

   The theme is scoped to this wrapper rather than <html> on purpose. Only
   /[lang]/jodaz has dark tokens defined and QA'd, so keeping the attribute
   local means it can never leak a never-designed dark rendering onto the
   marketing pages. It also needs no persistence, no localStorage read, and
   therefore no blocking inline script to avoid a flash of the wrong theme.

   ponytail: session-only, resets on navigation. Persist to localStorage
   (plus an inline pre-paint script) only if the site goes dark site-wide. */
export default function ProfileTheme({
  dict,
  bar,
  children,
}: {
  dict: Dictionary;
  bar: React.ReactNode;
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div className="profile" data-theme={theme}>
      <div className="profile-bar">
        {bar}
        <div
          className="theme-toggle"
          role="group"
          aria-label={dict.profile.themeLabel}
        >
          <button
            type="button"
            aria-pressed={theme === "light"}
            onClick={() => setTheme("light")}
          >
            <SunIcon aria-hidden="true" />
            {dict.profile.themeLight}
          </button>
          <button
            type="button"
            aria-pressed={theme === "dark"}
            onClick={() => setTheme("dark")}
          >
            <MoonIcon aria-hidden="true" />
            {dict.profile.themeDark}
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}
