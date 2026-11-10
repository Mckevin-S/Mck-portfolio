"use client";

import { useLang } from "../../lib/language-context";
import { LANGS } from "../../lib/i18n";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center overflow-hidden rounded-[4px] border border-line font-mono text-xs ${className}`}
    >
      {LANGS.map((language) => (
        <button
          key={language}
          type="button"
          onClick={() => setLang(language)}
          aria-pressed={lang === language}
          className={`px-2.5 py-1.5 uppercase transition-colors ${
            lang === language
              ? "bg-primary text-on-primary"
              : "text-muted hover:text-text"
          }`}
        >
          {language}
        </button>
      ))}
    </div>
  );
}
