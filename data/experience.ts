import type { Lang } from "../types/lang";
import type { Experience } from "../types/experience";

export const experience: Record<Lang, Experience[]> = {
  fr: [
    {
      role: "Concepteur développeur logiciel",
      company: "Entreprise de démonstration",
      period: "2023 — Aujourd'hui",
      points: [
        "Conception et développement d'applications web full-stack en React, Next.js et Node.js.",
        "Architecture de bases de données PostgreSQL et optimisation des requêtes critiques.",
        "Mise en place de tests automatisés, revue de code et CI/CD.",
      ],
    },
    {
      role: "Développeur web junior",
      company: "Agence de démonstration",
      period: "2021 — 2023",
      points: [
        "Développement de sites et interfaces responsives en intégrant des maquettes Figma.",
        "Collaboration avec designers et chefs de projet sur des livraisons itératives.",
      ],
    },
  ],
  en: [
    {
      role: "Software Designer & Developer",
      company: "Demo company",
      period: "2023 — Present",
      points: [
        "Design and development of full-stack web applications with React, Next.js and Node.js.",
        "Database architecture with PostgreSQL and optimization of critical queries.",
        "Setting up automated tests, code review and CI/CD.",
      ],
    },
    {
      role: "Junior Web Developer",
      company: "Demo agency",
      period: "2021 — 2023",
      points: [
        "Development of responsive websites and interfaces from Figma mockups.",
        "Collaboration with designers and project managers on iterative deliveries.",
      ],
    },
  ],
};
