"use client";

import React from "react";
import { profile } from "../../data/profile";
import { social } from "../../data/social";
import { getDictionary } from "../../lib/dictionary";
import { useLang } from "../../lib/language-context";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../ui/icons";

export default function Footer() {
  const { lang } = useLang();
  const dict = getDictionary(lang);

  return (
    <footer className="relative z-10 border-t border-line py-10">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-5 px-4 md:flex-row md:justify-between md:px-6">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile[lang].name} —{" "}
          {dict.footer.builtWith}{" "}
          <span className="text-primary">Next.js</span>
        </p>
        <div className="flex items-center gap-6 font-mono text-xs text-muted">
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
    </footer>
  );
}
