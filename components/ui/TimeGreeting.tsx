"use client";

import { useSyncExternalStore } from "react";
import type { Lang } from "../../types/lang";

const subscribe = () => () => {};

function getGreeting(lang: Lang): string {
  const hour = new Date().getHours();
  const evening = hour >= 18 || hour < 5;
  return evening
    ? lang === "fr"
      ? "Bonsoir"
      : "Good evening"
    : lang === "fr"
      ? "Bonjour"
      : "Hello";
}

export default function TimeGreeting({ lang }: { lang: Lang }) {
  const word = useSyncExternalStore(
    subscribe,
    () => getGreeting(lang),
    () => (lang === "fr" ? "Bonjour" : "Hello")
  );
  return <>{word}</>;
}
