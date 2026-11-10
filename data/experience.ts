import type { Lang } from "../types/lang";
import type { Experience } from "../types/experience";

export const experience: Record<Lang, Experience[]> = {
  fr: [
    {
      role: "Développeur Mobile (full-remote)",
      company: "Freelance",
      period: "Avril 2026 — Juin 2026",
      points: [
        "Développement des interfaces responsives en intégrant des maquettes Figma.",
        "Collaboration avec designers et chefs de projet sur des livraisons itératives.",
      ],
      technologies: ["React Native", "NestJS", "Prisma", "MongoDB"],
    },
    {
      role: "Développeur full-stack (stage)",
      company: "Intek Cameroon",
      period: "Juin 2025 — Août 2025",
      points: [
        "Conception, développement et déploiement sur serveur d'une application web full-stack de gestion des ventes d'équipement.",
        "Mise en place de tests automatisés, revue de code et CI/CD.",
      ],
      technologies: ["Laravel", "Blade", "Bootstrap", "MySQL", "GitHub Actions"],
    },
    {
      role: "Développeur full-stack (stage)",
      company: "Uni2Grow Cameroon",
      period: "Juillet 2023 — Septembre 2023",
      points: [
        "Développement d'une application web de gestion des congés et contrats de l'entreprise.",
        "Collaboration avec une équipe de développeurs.",
      ],
      technologies: ["PHP", "Bootstrap", "MySQL", "Git"],
    },
    {
      role: "Développeur (stage)",
      company: "Uni2Grow Cameroon",
      period: "Juillet 2022 — Septembre 2022",
      points: [
        "Développement d'interfaces responsives.",
        "Collaboration avec designers et chefs de projet sur des livraisons itératives.",
      ],
      technologies: ["PHP", "Bootstrap", "MySQL"],
    },
  ],
  en: [
    {
      role: "Mobile Developer (full-remote)",
      company: "Freelance",
      period: "April 2026 — June 2026",
      points: [
        "Development of responsive interfaces integrating Figma mockups.",
        "Collaboration with designers and project managers on iterative deliveries.",
      ],
      technologies: ["React Native", "NestJS", "Prisma", "MongoDB"],
    },
    {
      role: "Full-stack Developer (internship)",
      company: "Intek Cameroon",
      period: "June 2025 — August 2025",
      points: [
        "Design, development and server deployment of a full-stack web application for equipment sales management.",
        "Implementation of automated tests, code review and CI/CD.",
      ],
      technologies: ["Laravel", "Blade", "Bootstrap", "MySQL", "GitHub Actions"],
    },
    {
      role: "Full-stack Developer (internship)",
      company: "Uni2Grow Cameroon",
      period: "July 2023 — September 2023",
      points: [
        "Development of a web application for managing company leave and contracts.",
        "Collaboration with a team of developers.",
      ],
      technologies: ["PHP", "Bootstrap", "MySQL", "Git"],
    },
    {
      role: "Developer (internship)",
      company: "Uni2Grow Cameroon",
      period: "July 2022 — September 2022",
      points: [
        "Development of responsive interfaces.",
        "Collaboration with designers and project managers on iterative deliveries.",
      ],
      technologies: ["PHP", "Bootstrap", "MySQL"],
    },
  ],
};
