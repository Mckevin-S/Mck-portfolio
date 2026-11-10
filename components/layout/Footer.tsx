"use client";

import React from "react";
import { profile } from "../../data/profile";
import { social } from "../../data/social";
import { useLang } from "../../lib/language-context";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../ui/icons";

export default function Footer() {
  const { lang, dict } = useLang();

  return (
    <footer className="relative z-10 border-t border-line py-10">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        {/* Top row */}
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
          <p className="max-w-full break-words font-mono text-xs text-muted">
            © {new Date().getFullYear()} {profile[lang].name} —{" "}
            {dict.footer.builtWith}{" "}
            <span className="text-primary">Next.js & Tailwind CSS</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 font-mono text-xs text-muted md:justify-end">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <GitHubIcon className="h-4 w-4" />
              {dict.footer.github}
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <LinkedInIcon className="h-4 w-4" />
              {dict.footer.linkedin}
            </a>
            <a
              href={`mailto:${social.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <MailIcon className="h-4 w-4" />
              {dict.footer.email}
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-line/50 pt-5 md:flex-row">
          <p className="text-center font-mono text-[10px] text-muted/60 md:text-left">
            {dict.footer.rights}
          </p>
          <a
            href="#home"
            className="font-mono text-[10px] text-muted/60 transition-colors hover:text-primary"
          >
            ↑ {dict.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
