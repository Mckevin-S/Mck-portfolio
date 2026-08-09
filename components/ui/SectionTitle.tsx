import React from "react";

type SectionTitleProps = {
  index: string;
  label: string;
  title: string;
};

export default function SectionTitle({ index, label, title }: SectionTitleProps) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 font-mono text-sm">
        <span className="text-primary">{index}.</span>
        <span className="uppercase tracking-[0.25em] text-muted">{label}</span>
        <span className="h-px flex-1 bg-gradient-to-r from-line-strong to-transparent" />
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
