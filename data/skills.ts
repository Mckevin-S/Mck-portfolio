import type { Lang } from "../types/lang";
import type { SkillGroup } from "../types/skill";

export const skillGroups: Record<Lang, SkillGroup[]> = {
  fr: [
    {
      label: "Frontend",
      symbol: "◉",
      skills: ["React.js", "Angular", "HTML/CSS", "Next.js"],
    },
    {
      label: "Backend",
      symbol: "◇",
      skills: ["Spring Boot", "Node.js", "Laravel", "Python"],
    },
    {
      label: "Mobile",
      symbol: "▣",
      skills: ["React Native", "Flutter"],
    },
    {
      label: "Outils",
      symbol: "◆",
      skills: ["Docker", "Git", "Figma", "AWS", "Vercel"],
    },
    {
      label: "Données",
      symbol: "✧",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Prisma"],
    },
  ],
  en: [
    {
      label: "Frontend",
      symbol: "◉",
      skills: ["React.js", "Angular", "HTML/CSS", "Next.js"],
    },
    {
      label: "Backend",
      symbol: "◇",
      skills: ["Spring Boot", "Node.js", "Laravel", "Python"],
    },
    {
      label: "Mobile",
      symbol: "▣",
      skills: ["React Native", "Flutter"],
    },
    {
      label: "Tools",
      symbol: "◆",
      skills: ["Docker", "Git", "Figma", "AWS", "Vercel"],
    },
    {
      label: "Data",
      symbol: "✧",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Prisma"],
    },
  ],
};
