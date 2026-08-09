"use client";

import { useRouter } from "next/navigation";
import { LANGS } from "../../lib/i18n";
import type { Lang } from "../../types/lang";

export default function LanguageToggle({
  lang,
  className = "",
}: {
  lang: Lang;
  className?: string;
}) {
  const router = useRouter();

  const switchTo = async (next: Lang) => {
    if (next === lang) return;
    await fetch("/api/locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lang: next }),
    });
    router.refresh();
  };

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
          onClick={() => switchTo(language)}
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
