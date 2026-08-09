import type { Lang } from "../types/lang";
import type { SkillGroup } from "../types/skill";

export const skillGroups: Record<Lang, SkillGroup[]> = {
  fr: [
    {
      label: "Frontend",
      symbol: "◉",
      skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML/CSS"],
    },
    {
      label: "Backend",
      symbol: "◇",
      skills: ["Node.js", "PostgreSQL", "REST APIs", "Prisma"],
    },
    {
      label: "Outils & workflow",
      symbol: "◆",
      skills: ["Git", "Docker", "Vercel", "Figma", "Vitest"],
    },
  ],
  en: [
    {
      label: "Frontend",
      symbol: "◉",
      skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML/CSS"],
    },
    {
      label: "Backend",
      symbol: "◇",
      skills: ["Node.js", "PostgreSQL", "REST APIs", "Prisma"],
    },
    {
      label: "Tools & workflow",
      symbol: "◆",
      skills: ["Git", "Docker", "Vercel", "Figma", "Vitest"],
    },
  ],
};
