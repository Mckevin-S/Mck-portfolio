import type { Lang } from "../types/lang";
import type { Experience } from "../types/experience";

export const experience: Record<Lang, Experience[]> = {
  fr: [
    {
      role: "Développeur Mobile (full-remote)",
      company: "Freelance",
      period: "Avril 2026 - Juin 2026",
      points: [
        "Développement des interfaces responsives en intégrant des maquettes Figma.",
        "Collaboration avec designers et chefs de projet sur des livraisons itératives.",
        "Technologies: ReactNative, NestJS, Prisma ORM, MogoDB",
      ],
    },
    {
      role: "Developpeur full-stack (stage)",
      company: "Intek Cameroon",
      period: "Juin 2025 - Août 2025",
      points: [
        "Conception, développementet deploiment sur serveur d'une applications web full-stack de gestion des ventes d'equipement",
        "Mise en place de tests automatisés, revue de code et CI/CD.",
        "Technologies: Laravel, blade, bootstrap, MySQL, GitHub Actions",
      ],
    },
    {
      role: "Développeur full-stack (stage)",
      company: "Uni2Grow cameroun",
      period: "juillet 2023 - Septembre 2023",
      points: [
        "Développement d'une application web de gestion conges et contract de l'entreprise",
        "Collaboration avec une equipes de developpeur.",
        "Technologies: php, bootstrap, MySQL, Git",
      ],
    },
    {
      role: "Développeur (stage)",
      company: "Uni2Grow cameroun",
      period: "juillet 2022 - Septembre 2022",
      points: [
        "Développement d'interfaces responsives.",
        "Collaboration avec designers et chefs de projet sur des livraisons itératives.",
      ],
    },
  ],
  en: [
    {
      role: "Mobile Developer (full-remote)",
      company: "Freelance",
      period: "April 2026 - June 2026",
      points: [
        "Development of responsive interfaces integrating Figma mockups.",
        "Collaboration with designers and project managers on iterative deliveries.",
        "Technologies: React Native, NestJS, Prisma ORM, MongoDB",
      ],
    },
    {
      role: "Full-stack Developer (internship)",
      company: "Intek Cameroon",
      period: "June 2025 - August 2025",
      points: [
        "Design, development and server deployment of a full-stack web application for equipment sales management.",
        "Implementation of automated tests, code review and CI/CD.",
        "Technologies: Laravel, Blade, Bootstrap, MySQL, GitHub Actions",
      ],
    },
    {
      role: "Full-stack Developer (internship)",
      company: "Uni2Grow Cameroon",
      period: "July 2023 - September 2023",
      points: [
        "Development of a web application for managing company leave and contracts.",
        "Collaboration with a team of developers.",
        "Technologies: PHP, Bootstrap, MySQL, Git",
      ],
    },
    {
      role: "Developer (internship)",
      company: "Uni2Grow Cameroon",
      period: "July 2022 - September 2022",
      points: [
        "Development of responsive interfaces.",
        "Collaboration with designers and project managers on iterative deliveries.",
      ],
    },
  ],
};
