"use client";

import React from "react";
import { useLang } from "../../lib/language-context";
import { LANGS } from "../../lib/i18n";

export default function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`relative inline-flex items-center rounded-full border border-line bg-surface/80 p-0.5 shadow-sm backdrop-blur-sm ${className}`}
    >
      {LANGS.map((language) => {
        const isActive = lang === language;
        return (
          <button
            key={language}
            type="button"
            onClick={() => setLang(language)}
            aria-pressed={isActive}
            className={`relative z-10 flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-[11px] font-medium transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-primary text-on-primary font-bold shadow-sm"
                : "text-muted hover:text-text"
            }`}
          >
            <span>{language.toUpperCase()}</span>
          </button>
        );
      })}
    </div>
  );
}
