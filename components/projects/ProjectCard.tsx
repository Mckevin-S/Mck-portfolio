import React from "react";
import TerminalWindow from "../ui/TerminalWindow";
import { ArrowUpRightIcon } from "../ui/icons";
import { getDictionary } from "../../lib/dictionary";
import type { Lang } from "../../types/lang";
import type { Project } from "../../types/project";

export default function ProjectCard({
  project,
  lang,
}: {
  project: Project;
  lang: Lang;
}) {
  const dict = getDictionary(lang);
  const file = `${project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}.${project.lang}`;

  return (
    <TerminalWindow title={file} className="card-hover flex h-full flex-col">
      <div className="flex flex-1 flex-col">
        <h3 className="font-display text-xl font-semibold">{project.title}</h3>
        <p className="mt-1 font-mono text-xs text-primary">{project.subtitle}</p>

        <p className="mt-4 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-5 space-y-1.5">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2 font-mono text-xs text-muted"
            >
              <span className="text-secondary">+</span>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-6 border-t border-line pt-4">
          <a
            href={project.demo}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-primary transition-colors hover:text-primary-dim"
          >
            {dict.projects.demo} <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-primary"
          >
            {dict.projects.source} <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </TerminalWindow>
  );
}
