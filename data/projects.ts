import type { Lang } from "../types/lang";
import type { Project } from "../types/project";

export const projects: Record<Lang, Project[]> = {
  fr: [
    {
      slug: "Event Manager",
      title: "Event Manager",
      subtitle: "getion d'événements en temps réel",
      description:
        "Plateforme de visualisation et de gestion des differents evenement métier avec métriques en temps réel, filtres avancés et export de rapports. Tableaux de bord performants et accessibles, alimentés par une API typée de bout en bout.",
      stack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
      highlights: ["Recharts", "Server Actions", "SSR + streaming", "Dark mode"],
      demo: "#",
      source: "#",
      lang: "tsx",
    },
    {
      slug: "inventory-api",
      title: "Inventory API",
      subtitle: "API de gestion de stock",
      description:
        "API REST modulaire pour la gestion d'inventaire multi-entrepôts : authentification, validation stricte, tests et documentation OpenAPI. Conteneurisée pour un déploiement reproductible.",
      stack: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "OpenAPI"],
      highlights: ["JWT + RBAC", "Tests unitaires", "Swagger UI", "CI/CD"],
      demo: "#",
      source: "#",
      lang: "ts",
    },
    {
      slug: "kinetic-portfolio",
      title: "Kinetic Portfolio",
      subtitle: "Ce site — design system sur mesure",
      description:
        "Portfolio one-page construit sur un design system maison « Kinetic Syntax » : thème Tailwind custom, glassmorphisme, typographies Geist / Inter / JetBrains Mono et interactions soignées.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
      highlights: ["Design system", "Glassmorphism", "100/100 Lighthouse", "SEO"],
      demo: "#",
      source: "#",
      lang: "tsx",
    },
  ],
  en: [
    {
      slug: "analytics-dashboard",
      title: "Analytics Dashboard",
      subtitle: "Real-time dashboard",
      description:
        "Business data visualization platform with real-time metrics, advanced filters and report export. Performant and accessible dashboards, powered by a fully typed API from end to end.",
      stack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
      highlights: ["Recharts", "Server Actions", "SSR + streaming", "Dark mode"],
      demo: "#",
      source: "#",
      lang: "tsx",
    },
    {
      slug: "inventory-api",
      title: "Inventory API",
      subtitle: "Stock management API",
      description:
        "Modular REST API for multi-warehouse inventory management: authentication, strict validation, tests and OpenAPI documentation. Containerized for reproducible deployment.",
      stack: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "OpenAPI"],
      highlights: ["JWT + RBAC", "Unit tests", "Swagger UI", "CI/CD"],
      demo: "#",
      source: "#",
      lang: "ts",
    },
    {
      slug: "kinetic-portfolio",
      title: "Kinetic Portfolio",
      subtitle: "This site — bespoke design system",
      description:
        "One-page portfolio built on a custom 'Kinetic Syntax' design system: custom Tailwind theme, glassmorphism, Geist / Inter / JetBrains Mono typography and polished interactions.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
      highlights: ["Design system", "Glassmorphism", "100/100 Lighthouse", "SEO"],
      demo: "#",
      source: "#",
      lang: "tsx",
    },
  ],
};
