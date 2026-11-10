"use client";

import Link from "next/link";
import React from "react";
import { navItems } from "../../lib/navigation";
import { useLang } from "../../lib/language-context";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "../ui/ThemeToggle";

type MobileMenuProps = {
  open: boolean;
  active: string;
  onClose: () => void;
};

export default function MobileMenu({ open, active, onClose }: MobileMenuProps) {
  const { dict } = useLang();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="border border-line bg-background rounded-lg p-2 shadow-lg absolute inset-x-3 top-20">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            {dict.nav.navigation}
          </span>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-[4px] border border-line font-mono text-sm text-text"
            aria-label={dict.nav.closeMenu}
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <ul className="flex flex-col">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
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
