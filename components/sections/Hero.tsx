import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import TerminalWindow from "../ui/TerminalWindow";
import TimeGreeting from "../ui/TimeGreeting";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ArrowDownIcon,
} from "../ui/icons";
import { profile } from "../../data/profile";
import { social } from "../../data/social";
import { getDictionary } from "../../lib/dictionary";
import { CV_PATH, AVATAR_PATH } from "../../lib/constants";
import type { Lang } from "../../types/lang";

function CodeLine({ children }: { children: React.ReactNode }) {
  return <div className="whitespace-pre">{children}</div>;
}

export default function Hero({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const data = profile[lang];

  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center scroll-mt-20 pt-24 pb-16"
    >
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-14 px-4 md:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div>
          <div className="relative mb-8 h-24 w-24 overflow-hidden rounded-full ring-2 ring-primary/40 shadow-[0_0_40px_rgba(0,245,255,0.3)] md:h-28 md:w-28">
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
            <TimeGreeting lang={lang} />, {dict.hero.greetingSuffix}
          </p>

          <h1 className="mt-4 font-display text-[40px] leading-[1.1] font-bold tracking-tight md:text-6xl lg:text-[64px]">
            <span className="text-text">{data.firstName}</span>{" "}
            <span className="bg-gradient-to-r from-primary via-primary-dim to-secondary bg-clip-text text-transparent text-glow-primary">
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
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-70" />
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
            <Button href={CV_PATH} variant="ghost" download>
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

        <div className="animate-float-slow">
          <TerminalWindow title="profile.ts">
            <div className="overflow-x-auto font-mono text-[13px] leading-7">
              <CodeLine>
                <span className="text-tertiary">const</span>{" "}
                <span className="text-primary">dev</span>{" "}
                <span className="text-muted">=</span>{" "}
                <span className="text-text">{"{"}</span>
              </CodeLine>
              <CodeLine>
                {"  "}
                <span className="text-primary">name</span>
                <span className="text-muted">:</span>{" "}
                <span className="text-secondary">&quot;{data.name}&quot;</span>
                <span className="text-muted">,</span>
              </CodeLine>
              <CodeLine>
                {"  "}
                <span className="text-primary">role</span>
                <span className="text-muted">:</span>{" "}
                <span className="text-secondary">&quot;{data.role}&quot;</span>
                <span className="text-muted">,</span>
              </CodeLine>
              <CodeLine>
                {"  "}
                <span className="text-primary">stack</span>
                <span className="text-muted">:</span>{" "}
                <span className="text-text">[</span>
                <span className="text-secondary">&quot;React&quot;</span>
                <span className="text-muted">,</span>{" "}
                <span className="text-secondary">&quot;Next.js&quot;</span>
                <span className="text-muted">,</span>{" "}
                <span className="text-secondary">&quot;Node.js&quot;</span>
                <span className="text-text">]</span>
                <span className="text-muted">,</span>
              </CodeLine>
              <CodeLine>
                {"  "}
                <span className="text-primary">focus</span>
                <span className="text-muted">:</span>{" "}
                <span className="text-text">[</span>
                {dict.hero.codeFocus.map((item, i) => (
                  <span key={item}>
                    <span className="text-secondary">&quot;{item}&quot;</span>
                    {i < dict.hero.codeFocus.length - 1 && (
                      <span className="text-muted">, </span>
                    )}
                  </span>
                ))}
                <span className="text-text">]</span>
                <span className="text-muted">,</span>
              </CodeLine>
              <CodeLine>
                {"  "}
                <span className="text-primary">available</span>
                <span className="text-muted">:</span>{" "}
                <span className="text-tertiary">true</span>
                <span className="text-muted">,</span>
              </CodeLine>
              <CodeLine>
                <span className="text-text">{"};"}</span>
              </CodeLine>
              <CodeLine>
                <span className="text-muted">{dict.hero.codeStatus}</span>
                <span className="animate-caret text-primary">▍</span>
              </CodeLine>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
