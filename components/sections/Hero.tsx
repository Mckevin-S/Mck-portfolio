"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import TerminalWindow from "../ui/TerminalWindow";
import TimeGreeting from "../ui/TimeGreeting";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ArrowDownIcon,
  CopyIcon,
  CheckIcon,
} from "../ui/icons";
import { profile } from "../../data/profile";
import { social } from "../../data/social";
import { CV_PATH, AVATAR_PATH } from "../../lib/constants";
import { useLang } from "../../lib/language-context";

function CodeLine({
  num,
  children,
}: {
  num?: number;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      {num !== undefined && (
        <span className="w-5 shrink-0 select-none text-right font-mono text-[11px] text-slate-500/70">
          {num}
        </span>
      )}
      <div className="flex-1 whitespace-pre">{children}</div>
    </div>
  );
}

export default function Hero() {
  const { lang, dict } = useLang();
  const data = profile[lang];

  const [activeTab, setActiveTab] = useState<"profile.ts" | "stack.sh">(
    "profile.ts"
  );
  const [copied, setCopied] = useState(false);

  const profileText = `const engineer = {
  name: "${data.name}",
  role: "${data.role}",
  location: "${data.location}",
  status: "${data.availability}",
  stack: ["Java (Spring Boot)", "React / Next.js", "Python (FastAPI)", "Docker"],
  architecture: ["Clean Architecture", "REST & WebSockets", "CI/CD & IaC"],
  focus: [${dict.hero.codeFocus.map((f) => `"${f}"`).join(", ")}],
  availableForInternship: true,
};
${dict.hero.codeStatus}`;

  const stackText = `$ mck --profile
● Candidate: ${data.name}
● Role:      ${data.role}
● Search:    Stage 6 mois (Février 2027) 
● Location:  France 🇫🇷 (Mobilité France / Remote)
● Backend:   Java 21 (Spring Boot), PHP (Laravel), Python (FastAPI)
● Frontend:  React 19, Next.js, Vite, Tailwind CSS v4, Flutter
● Cloud/IaC: Docker, PostgreSQL, MySQL, Redis, Terraform, Ansible
● Status:    Ready for interviews ✨`;

  const handleCopy = () => {
    const textToCopy = activeTab === "profile.ts" ? profileText : stackText;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center scroll-mt-20 pt-28 pb-16 md:pt-32"
    >
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-4 md:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div>
          {/* Internship Highlight Pill */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 font-mono text-xs text-secondary shadow-sm shadow-secondary/10 backdrop-blur-sm transition-all hover:border-secondary/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            <span className="font-semibold tracking-wide">
              {dict.hero.internshipBadge}
            </span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-primary/40 shadow-lg shadow-primary/10 transition-transform duration-300 hover:scale-105 md:h-24 md:w-24">
              <Image
                src={AVATAR_PATH}
                alt={`Portrait de ${data.name}`}
                fill
                sizes="96px"
                priority
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-mono text-xs font-medium text-primary">
                <span className="text-muted">{"//"}</span>{" "}
                <TimeGreeting />, {dict.hero.greetingSuffix}
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-text md:text-3xl">
                {data.firstName}{" "}
                <span className="bg-gradient-to-r from-primary to-primary-dim bg-clip-text text-transparent">
                  {data.name.replace(data.firstName, "").trim()}
                </span>
              </h2>
            </div>
          </div>

          <h1 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl lg:text-[54px] lg:leading-[1.12]">
            <span className="text-text">{data.role}</span>
            <span className="block mt-2 text-xl font-medium text-muted md:text-2xl">
              Backend, Frontend & Architecture Cloud
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {data.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button href="#projects" className="shadow-lg shadow-primary/20">
              {dict.hero.viewProjects} <ArrowDownIcon className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="ghost">
              {dict.hero.contact}
            </Button>
            <Button
              href={CV_PATH}
              variant="ghost"
              download="CV_Mckevin_Kamguem.pdf"
            >
              {dict.hero.downloadCv}
            </Button>
          </div>

          <div className="mt-9 flex items-center gap-5 border-t border-line/60 pt-6">
            <span className="font-mono text-xs text-muted">
              {data.location} · {dict.hero.internshipShort}
            </span>
            <div className="ml-auto flex items-center gap-4">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted transition-colors hover:text-primary"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted transition-colors hover:text-primary"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${social.email}`}
                aria-label="Email"
                className="text-muted transition-colors hover:text-primary"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <TerminalWindow
            title={
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setActiveTab("profile.ts")}
                  className={`rounded px-2.5 py-1 font-mono text-xs transition-colors cursor-pointer ${activeTab === "profile.ts"
                      ? "bg-primary/20 text-primary font-semibold"
                      : "text-muted hover:text-slate-200"
                    }`}
                >
                  profile.ts
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("stack.sh")}
                  className={`rounded px-2.5 py-1 font-mono text-xs transition-colors cursor-pointer ${activeTab === "stack.sh"
                      ? "bg-primary/20 text-primary font-semibold"
                      : "text-muted hover:text-slate-200"
                    }`}
                >
                  stack.sh
                </button>
              </div>
            }
            headerRight={
              <button
                type="button"
                onClick={handleCopy}
                aria-label={copied ? dict.hero.copiedCode : dict.hero.copyCode}
                className="flex items-center gap-1.5 rounded border border-slate-700/70 bg-slate-800/80 px-2.5 py-1 font-mono text-[11px] text-slate-300 transition-colors hover:border-primary/50 hover:text-primary cursor-pointer"
              >
                {copied ? (
                  <>
                    <CheckIcon className="h-3.5 w-3.5 text-secondary" />
                    <span className="text-secondary font-semibold">
                      {dict.hero.copiedCode}
                    </span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="h-3.5 w-3.5" />
                    <span>{dict.hero.copyCode}</span>
                  </>
                )}
              </button>
            }
            dark
            className="shadow-2xl shadow-black/40 ring-1 ring-white/10"
          >
            {activeTab === "profile.ts" ? (
              <div className="overflow-x-auto font-mono text-[13px] leading-7">
                <CodeLine num={1}>
                  <span className="text-tertiary">const</span>{" "}
                  <span className="text-primary font-semibold">engineer</span>{" "}
                  <span className="text-slate-400">=</span>{" "}
                  <span className="text-slate-200">{"{"}</span>
                </CodeLine>
                <CodeLine num={2}>
                  {"  "}
                  <span className="text-primary">name</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-secondary">&quot;{data.name}&quot;</span>
                  <span className="text-slate-400">,</span>
                </CodeLine>
                <CodeLine num={3}>
                  {"  "}
                  <span className="text-primary">role</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-secondary">&quot;{data.role}&quot;</span>
                  <span className="text-slate-400">,</span>
                </CodeLine>
                <CodeLine num={4}>
                  {"  "}
                  <span className="text-primary">target</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-tertiary">&quot;Stage 6 mois · Fév. 2027&quot;</span>
                  <span className="text-slate-400">,</span>
                </CodeLine>
                <CodeLine num={5}>
                  {"  "}
                  <span className="text-primary">stack</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-slate-200">[</span>
                  <span className="text-secondary">&quot;Spring Boot&quot;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-secondary">&quot;Next.js&quot;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-secondary">&quot;FastAPI&quot;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-secondary">&quot;Docker&quot;</span>
                  <span className="text-slate-200">]</span>
                  <span className="text-slate-400">,</span>
                </CodeLine>
                <CodeLine num={6}>
                  {"  "}
                  <span className="text-primary">architecture</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-slate-200">[</span>
                  <span className="text-secondary">&quot;Clean Architecture&quot;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-secondary">&quot;CI/CD&quot;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-secondary">&quot;IaC&quot;</span>
                  <span className="text-slate-200">]</span>
                  <span className="text-slate-400">,</span>
                </CodeLine>
                <CodeLine num={7}>
                  {"  "}
                  <span className="text-primary">openForInterviews</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-tertiary font-semibold">true</span>
                  <span className="text-slate-400">,</span>
                </CodeLine>
                <CodeLine num={8}>
                  <span className="text-slate-200">{"};"}</span>
                </CodeLine>
                <CodeLine num={9}>
                  <span className="text-slate-400">{dict.hero.codeStatus}</span>
                  <span className="animate-caret text-primary">▍</span>
                </CodeLine>
              </div>
            ) : (
              <div className="overflow-x-auto font-mono text-[13px] leading-7">
                <CodeLine num={1}>
                  <span className="text-primary">$</span>{" "}
                  <span className="text-slate-100 font-medium">mck --profile</span>
                </CodeLine>
                <CodeLine num={2}>
                  <span className="text-slate-400">● Profil:    </span>
                  <span className="text-secondary font-semibold">{data.name}</span>
                </CodeLine>
                <CodeLine num={3}>
                  <span className="text-slate-400">● Objectif:  </span>
                  <span className="text-tertiary font-semibold">Stage 6 mois (Février 2027) </span>
                </CodeLine>
                <CodeLine num={4}>
                  <span className="text-slate-400">● Mobilité:  </span>
                  <span className="text-slate-200">France (présentiel / hybride) & Remote</span>
                </CodeLine>
                <CodeLine num={5}>
                  <span className="text-slate-400">● Backend:   </span>
                  <span className="text-slate-200">Java 21 (Spring Boot), PHP (Laravel), Python</span>
                </CodeLine>
                <CodeLine num={6}>
                  <span className="text-slate-400">● Frontend:  </span>
                  <span className="text-slate-200">React 19, Next.js, Vite, Tailwind v4, Flutter</span>
                </CodeLine>
                <CodeLine num={7}>
                  <span className="text-slate-400">● Cloud/IaC: </span>
                  <span className="text-slate-200">Docker, PostgreSQL, Terraform, Ansible, CI/CD</span>
                </CodeLine>
                <CodeLine num={8}>
                  <span className="text-primary">$</span>{" "}
                  <span className="text-slate-300">prêt à échanger</span>
                  <span className="animate-caret text-primary">▍</span>
                </CodeLine>
              </div>
            )}
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
