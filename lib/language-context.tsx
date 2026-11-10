"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Lang } from "../types/lang";
import { getDictionary, type Dictionary } from "./dictionary";
import { isLang, LANG_COOKIE } from "./i18n";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  dict: Dictionary;
};

const defaultDict = getDictionary("fr");

const LanguageContext = createContext<LanguageContextValue>({
  lang: "fr",
  setLang: () => {},
  toggleLang: () => {},
  dict: defaultDict,
});

export function useLang() {
  return useContext(LanguageContext);
}

export function LanguageProvider({
  initialLang,
  children,
}: {
  initialLang: Lang;
  children: ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  // Synchronize on mount if localStorage has an explicit user preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem("portfolio_lang");
      if (isLang(stored) && stored !== initialLang) {
        setLangState(stored);
        document.documentElement.lang = stored;
      } else {
        document.documentElement.lang = initialLang;
      }
    } catch {
      // Ignore if localStorage unavailable
    }
  }, [initialLang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      document.documentElement.lang = next;
      localStorage.setItem("portfolio_lang", next);
      document.cookie = `${LANG_COOKIE}=${next};path=/;max-age=31536000;samesite=lax`;
    } catch {
      // Ignore storage errors
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "fr" ? "en" : "fr");
  }, [lang, setLang]);

  const dict = useMemo(() => getDictionary(lang), [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      dict,
    }),
    [lang, setLang, toggleLang, dict]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
