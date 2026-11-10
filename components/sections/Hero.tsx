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
import { getDictionary } from "../../lib/dictionary";
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
        <span className="w-4 shrink-0 select-none text-right font-mono text-[11px] text-slate-600">
          {num}
        </span>
      )}
      <div className="flex-1 whitespace-pre">{children}</div>
    </div>
  );
}

export default function Hero() {
  const { lang } = useLang();
  const dict = getDictionary(lang);
  const data = profile[lang];

  const [activeTab, setActiveTab] = useState<"profile.ts" | "stack.sh">(
    "profile.ts"
  );
  const [copied, setCopied] = useState(false);

  const profileText = `const engineer = {
  name: "${data.name}",
  role: "${data.role}",
  location: "${data.location}",
  stack: ["Spring Boot", "React", "Next.js", "Python", "Docker"],
  architecture: ["REST APIs", "Microservices", "CI/CD", "IaC"],
  focus: [${dict.hero.codeFocus.map((f) => `"${f}"`).join(", ")}],
  available: true,
};
${dict.hero.codeStatus}`;

  const stackText = `$ mck --overview
● Role:     ${data.role}
● Location: France 🇫🇷
● Backend:  Java 21 (Spring Boot), PHP (Laravel), Python (FastAPI)
● Frontend: React, Next.js, Vite, Tailwind CSS
● Cloud:    Docker, PostgreSQL, MySQL, Redis, Terraform
● Status:   Available for opportunities ✨`;

  const handleCopy = () => {
    const textToCopy = activeTab === "profile.ts" ? profileText : stackText;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center scroll-mt-20 pt-24 pb-16"
    >
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-14 px-4 md:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div>
          <div className="relative mb-8 h-24 w-24 overflow-hidden rounded-full ring-2 ring-primary/30 shadow-md md:h-28 md:w-28">
            <Image
              src={AVATAR_PATH}
              alt={`Portrait de ${data.name}`}
              fill
              sizes="112px"
              priority
              className="object-cover"
            />
          </div>

          <p className="font-mono text-sm text-primary">
            <span className="text-muted">{"//"}</span>{" "}
            <TimeGreeting />, {dict.hero.greetingSuffix}
          </p>

          <h1 className="mt-4 font-display text-[40px] leading-[1.1] font-bold tracking-tight md:text-6xl lg:text-[64px]">
            <span className="text-text">{data.firstName}</span>{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dim bg-clip-text text-transparent">
              {data.name.replace(data.firstName, "").trim()}
            </span>
            <span className="block mt-3 text-2xl font-semibold text-muted md:text-3xl lg:text-4xl">
              {data.role}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {data.intro}
          </p>

          <div className="mt-7 flex items-center gap-3 font-mono text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
            </span>
            <span className="text-secondary">{data.availability}</span>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#projects">
              {dict.hero.viewProjects} <ArrowDownIcon className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="ghost">
              {dict.hero.contact}
            </Button>
            <Button href={CV_PATH} variant="ghost" download="CV_Mckevin_Kamguem.pdf">
              {dict.hero.downloadCv}
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-5">
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

        <div>
          <TerminalWindow
            title={
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("profile.ts")}
                  className={`rounded px-2 py-0.5 font-mono text-xs transition-colors ${
                    activeTab === "profile.ts"
                      ? "bg-primary/20 text-primary font-semibold"
                      : "text-muted hover:text-slate-300"
                  }`}
                >
                  profile.ts
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("stack.sh")}
                  className={`rounded px-2 py-0.5 font-mono text-xs transition-colors ${
                    activeTab === "stack.sh"
                      ? "bg-primary/20 text-primary font-semibold"
                      : "text-muted hover:text-slate-300"
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
                className="flex items-center gap-1.5 rounded border border-slate-700/60 bg-slate-800/80 px-2 py-1 font-mono text-[11px] text-slate-300 transition-colors hover:border-primary/50 hover:text-primary"
              >
                {copied ? (
                  <>
                    <CheckIcon className="h-3 w-3 text-secondary" />
                    <span className="text-secondary">{dict.hero.copiedCode}</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="h-3 w-3" />
                    <span>{dict.hero.copyCode}</span>
                  </>
                )}
              </button>
            }
            dark
          >
            {activeTab === "profile.ts" ? (
              <div className="overflow-x-auto font-mono text-[13px] leading-7">
                <CodeLine num={1}>
                  <span className="text-tertiary">const</span>{" "}
                  <span className="text-primary">engineer</span>{" "}
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
                  <span className="text-primary">location</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-secondary">&quot;{data.location}&quot;</span>
                  <span className="text-slate-400">,</span>
                </CodeLine>
                <CodeLine num={5}>
                  {"  "}
                  <span className="text-primary">stack</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-slate-200">[</span>
                  <span className="text-secondary">&quot;Spring Boot&quot;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-secondary">&quot;React / Next.js&quot;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-secondary">&quot;Python&quot;</span>
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
                  <span className="text-secondary">&quot;REST APIs&quot;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-secondary">&quot;CI/CD&quot;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-secondary">&quot;IaC&quot;</span>
                  <span className="text-slate-200">]</span>
                  <span className="text-slate-400">,</span>
                </CodeLine>
                <CodeLine num={7}>
                  {"  "}
                  <span className="text-primary">focus</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-slate-200">[</span>
                  {dict.hero.codeFocus.map((item, i) => (
                    <span key={item}>
                      <span className="text-secondary">&quot;{item}&quot;</span>
                      {i < dict.hero.codeFocus.length - 1 && (
                        <span className="text-slate-400">, </span>
                      )}
                    </span>
                  ))}
                  <span className="text-slate-200">]</span>
                  <span className="text-slate-400">,</span>
                </CodeLine>
                <CodeLine num={8}>
                  {"  "}
                  <span className="text-primary">available</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-tertiary">true</span>
                  <span className="text-slate-400">,</span>
                </CodeLine>
                <CodeLine num={9}>
                  <span className="text-slate-200">{"};"}</span>
                </CodeLine>
                <CodeLine num={10}>
                  <span className="text-slate-400">{dict.hero.codeStatus}</span>
                  <span className="animate-caret text-primary">▍</span>
                </CodeLine>
              </div>
            ) : (
              <div className="overflow-x-auto font-mono text-[13px] leading-7">
                <CodeLine num={1}>
                  <span className="text-primary">$</span>{" "}
                  <span className="text-slate-200">mck --overview</span>
                </CodeLine>
                <CodeLine num={2}>
                  <span className="text-slate-400">● Role:     </span>
                  <span className="text-secondary font-medium">{data.role}</span>
                </CodeLine>
                <CodeLine num={3}>
                  <span className="text-slate-400">● Location: </span>
                  <span className="text-slate-200">{data.location} 🇫🇷</span>
                </CodeLine>
                <CodeLine num={4}>
                  <span className="text-slate-400">● Backend:  </span>
                  <span className="text-slate-200">
                    Java 21 (Spring Boot), PHP (Laravel), Python (FastAPI)
                  </span>
                </CodeLine>
                <CodeLine num={5}>
                  <span className="text-slate-400">● Frontend: </span>
                  <span className="text-slate-200">
                    React 19, Next.js, Vite, Tailwind CSS v4
                  </span>
                </CodeLine>
                <CodeLine num={6}>
                  <span className="text-slate-400">● Data & Cloud: </span>
                  <span className="text-slate-200">
                    Docker, PostgreSQL, MySQL, Redis, Terraform
                  </span>
                </CodeLine>
                <CodeLine num={7}>
                  <span className="text-slate-400">● Status:   </span>
                  <span className="text-secondary font-semibold">
                    {data.availability} ✨
                  </span>
                </CodeLine>
                <CodeLine num={8}>
                  <span className="text-primary">$</span>{" "}
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
