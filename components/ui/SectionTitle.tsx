import React from "react";

type SectionTitleProps = {
  index: string;
  label: string;
  title: string;
};

export default function SectionTitle({ index, label, title }: SectionTitleProps) {
  return (
    <div className="mb-10 sm:mb-12 md:mb-16">
      <div className="flex min-w-0 items-center gap-2 font-mono text-[11px] sm:gap-3 sm:text-sm">
        <span className="shrink-0 text-primary">{index}.</span>
        <span className="min-w-0 break-words uppercase tracking-[0.16em] text-muted sm:tracking-[0.25em]">
          {label}
        </span>
        <span className="h-px min-w-4 flex-1 bg-gradient-to-r from-line-strong to-transparent" />
      </div>
      <h2 className="mt-3 font-display text-[clamp(1.65rem,6vw,2.25rem)] font-bold leading-tight tracking-tight sm:mt-4 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
