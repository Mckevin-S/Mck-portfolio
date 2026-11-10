"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { navItems } from "../../lib/navigation";
import { useLang } from "../../lib/language-context";
import MobileMenu from "./MobileMenu";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const { dict } = useLang();
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const pos = window.scrollY + window.innerHeight * 0.35;
      let current = "#home";
      for (const item of navItems) {
        const el = document.querySelector<HTMLElement>(item.href);
        if (el && el.offsetTop <= pos) current = item.href;
      }
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        current = "#contact";
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled ? "border-line bg-background/80 backdrop-blur-md" : "border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-4 md:px-6">
          <Link
            href="#home"
            className="font-mono text-sm font-semibold text-primary"
            aria-label={dict.nav.links.home}
          >
            Mck<span className="text-muted">@dev:~$</span>
          </Link>

          <ul className="hidden items-center gap-4 xl:gap-6 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-mono text-xs tracking-wide transition-colors ${
                    active === item.href
                      ? "text-primary"
                      : "text-muted hover:text-text"
                  }`}
                >
                  <span className="text-primary/60">{item.index}.</span>{" "}
                  {dict.nav.links[item.key]}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 lg:flex">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            <button
              ref={menuButtonRef}
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-[4px] border border-line font-mono text-sm text-text lg:hidden"
              aria-label={dict.nav.openMenu}
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              ≡
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={open}
        active={active}
        onClose={closeMenu}
      />
    </>
  );
}
