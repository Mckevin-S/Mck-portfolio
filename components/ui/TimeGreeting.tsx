"use client";

import { useSyncExternalStore } from "react";
import { useLang } from "../../lib/language-context";

const subscribe = () => () => {};

function getGreeting(lang: string): string {
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

export default function TimeGreeting() {
  const { lang } = useLang();
  const word = useSyncExternalStore(
    subscribe,
    () => getGreeting(lang),
    () => "Bonjour"
  );
  return <>{word}</>;
}
