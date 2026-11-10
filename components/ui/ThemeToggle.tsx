"use client";

import { useRouter } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

const THEME_KEY = "theme";

let storeTheme: "light" | "dark" = "light";
let storeReady = false;
const subs = new Set<() => void>();

function emit() {
  for (const fn of subs) fn();
}

function subscribe(cb: () => void) {
  subs.add(cb);
  return () => subs.delete(cb);
}

function getTheme() {
  return storeTheme;
}

function getReady() {
  return storeReady;
}

function getServerTheme() {
  return "light" as const;
}

function getServerReady() {
  return false;
}

function apply(next: "light" | "dark") {
  storeTheme = next;
  document.documentElement.classList.toggle("dark", next === "dark");
  emit();
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const router = useRouter();
  const ready = useSyncExternalStore(subscribe, getReady, getServerReady);
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY) as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");

    apply(initial);

    storeReady = true;
    emit();
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    localStorage.setItem(THEME_KEY, next);
    apply(next);
    router.refresh();
  };

  if (!ready) {
    return (
      <span className={`flex h-8 w-8 items-center justify-center ${className}`} />
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "light" ? "Passer en mode sombre" : "Passer en mode clair"}
      className={`flex h-8 w-8 items-center justify-center rounded-[4px] border border-line text-muted transition-colors hover:text-text ${className}`}
    >
      {theme === "light" ? (
        <MoonIcon className="h-4 w-4" />
      ) : (
        <SunIcon className="h-4 w-4" />
      )}
    </button>
  );
}
