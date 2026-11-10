"use client";

import React from "react";
import TerminalWindow from "../ui/TerminalWindow";
import { ArrowUpRightIcon } from "../ui/icons";
import { useLang } from "../../lib/language-context";
import type { Project } from "../../types/project";

export default function ProjectCard({ project }: { project: Project }) {
  const { dict } = useLang();
  const file = `${project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}.${project.lang}`;

  return (
    <TerminalWindow
      title={file}
      className="card-hover flex h-full w-full flex-col shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
    >
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight text-text">
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-xs font-medium text-primary">
              {project.subtitle}
            </p>
          </div>
          <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary">
            {dict.projects.categories[project.category]}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-5 space-y-1.5 border-t border-line/50 pt-4">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-center gap-2 font-mono text-xs text-muted"
            >
              <span className="text-secondary font-bold">+</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-surface-raised px-2.5 py-1 font-mono text-[11px] text-muted transition-colors hover:border-primary/40 hover:text-text"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-6 border-t border-line pt-4 mt-auto">
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-primary transition-colors hover:text-primary-dim"
            >
              <span>{dict.projects.demo}</span>
              <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-1.5 font-mono text-xs transition-colors ${
                project.demo && project.demo !== "#"
                  ? "text-muted hover:text-primary"
                  : "font-semibold text-primary hover:text-primary-dim"
              }`}
            >
              <span>{dict.projects.source}</span>
              <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </TerminalWindow>
  );
}
