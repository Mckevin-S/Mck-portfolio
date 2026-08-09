import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { experience } from "../../data/experience";
import { getDictionary } from "../../lib/dictionary";
import type { Lang } from "../../types/lang";

export default function Experience({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const entries = experience[lang];

  return (
    <section
      id="experience"
      className="relative z-10 scroll-mt-24 py-20 md:py-[120px]"
    >
      <Container>
        <SectionTitle
          index="03"
          label={dict.experience.label}
          title={dict.experience.title}
        />

        <div className="relative ml-2 border-l border-line pl-8 md:ml-4 md:pl-12">
          {entries.map((item) => (
            <div
              key={`${item.company}-${item.period}`}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[41px] top-1 flex h-3 w-3 items-center justify-center md:-left-[57px]">
                <span className="absolute h-full w-full animate-ping rounded-full bg-secondary opacity-40" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-secondary" />
              </span>

              <p className="font-mono text-sm text-secondary">{item.period}</p>
              <h3 className="mt-2 font-display text-xl font-semibold md:text-2xl">
                {item.role} <span className="text-muted">— {item.company}</span>
              </h3>

              <ul className="mt-4 max-w-[680px] space-y-2.5">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-base leading-relaxed text-muted"
                  >
                    <span className="font-mono text-sm text-primary">-&gt;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
