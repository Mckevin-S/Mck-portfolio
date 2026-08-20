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

        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-px bg-line md:left-1/2 md:-translate-x-1/2" />

          {entries.map((item, index) => {
            const left = index % 2 === 0;
            return (
              <div
                key={`${item.company}-${item.period}`}
                className={`relative pb-12 last:pb-0 md:w-1/2 md:pb-16 ${
                  left ? "md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                <span
                  className={`absolute left-[-5px] top-1 flex h-3 w-3 items-center justify-center md:left-auto ${
                    left ? "md:right-[-5px]" : "md:left-[-5px]"
                  }`}
                >
                  <span className="absolute h-full w-full animate-ping rounded-full bg-secondary opacity-40" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-secondary" />
                </span>

                <div className={left ? "md:text-right" : ""}>
                  <p className="font-mono text-sm text-secondary">
                    {item.period}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold md:text-2xl">
                    {item.role}{" "}
                    <span className="text-muted">- {item.company}</span>
                  </h3>
                </div>

                <ul
                  className={`mt-4 max-w-[680px] space-y-2.5 ${
                    left ? "md:ml-auto" : ""
                  }`}
                >
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className={`flex gap-3 text-base leading-relaxed text-muted ${
                        left ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="font-mono text-sm text-primary">
                        -&gt;
                      </span>
                      <span className="text-left">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
