"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { navItems } from "../../lib/navigation";
import { useLang } from "../../lib/language-context";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "../ui/ThemeToggle";

type MobileMenuProps = {
  open: boolean;
  active: string;
  onClose: (restoreFocus?: boolean) => void;
};

export default function MobileMenu({ open, active, onClose }: MobileMenuProps) {
  const { dict } = useLang();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;

      const focusableElements = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements?.length) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label={dict.nav.navigation}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => onClose()}
        aria-hidden="true"
      />
      <div
        ref={menuRef}
        className="absolute inset-x-3 top-[calc(4rem+env(safe-area-inset-top))] max-h-[calc(100dvh-5.5rem-env(safe-area-inset-top))] overflow-y-auto overscroll-contain rounded-xl border border-line bg-background p-2 shadow-2xl"
      >
        <div className="flex items-center justify-between px-4 py-3">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            {dict.nav.navigation}
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line font-mono text-sm text-text"
            aria-label={dict.nav.closeMenu}
            onClick={() => onClose()}
          >
            ✕
          </button>
        </div>
        <ul className="flex flex-col">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => onClose(false)}
                className={`flex items-center gap-3 rounded-md px-4 py-3 font-mono text-sm transition-colors ${
                  active === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-text hover:bg-surface-raised"
                }`}
              >
                <span className="text-primary/60">{item.index}.</span>
                {dict.nav.links[item.key]}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-2 border-t border-line px-4 py-3 flex items-center justify-between">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
