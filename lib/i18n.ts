import type { Lang } from "../types/lang";

export const LANGS: Lang[] = ["fr", "en"];
export const DEFAULT_LANG: Lang = "fr";
export const LANG_COOKIE = "lang";

export function isLang(value: string | undefined): value is Lang {
  return value === "fr" || value === "en";
}

export function getLang(value: string | undefined): Lang {
  return isLang(value) ? value : DEFAULT_LANG;
}
