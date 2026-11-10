import type { Lang } from "../types/lang";
import type { Project } from "../types/project";

export const projects: Record<Lang, Project[]> = {
  fr: [
    {
      slug: "gusto-restaurant-manager",
      title: "Gusto Restaurant Manager",
      subtitle: "Système de gestion de restaurant & temps réel",
      category: "fullstack",
      description:
        "Solution complète de gestion pour la restauration : authentification sécurisée 2FA par SMS, prise de commandes et synchronisation cuisine/salle en temps réel via WebSockets, gestion des stocks d'ingrédients, disponibilité des tables et tableau de bord analytique.",
      stack: ["Java 21", "Spring Boot", "React", "MySQL", "Docker", "WebSocket", "Prometheus"],
      highlights: [
        "Authentification 2FA SMS & RBAC",
        "Synchronisation WebSockets temps réel",
        "Métriques & Monitoring Prometheus",
        "Documentation interactive Swagger OpenAPI",
      ],
      source: "https://github.com/Mckevin-S/restaurant_manager",
      lang: "java",
    },
    {
      slug: "crowdfunding-platform",
      title: "Crowdfunding Platform",
      subtitle: "Plateforme de collecte de fonds & scoring IA",
      category: "fullstack",
      description:
        "Plateforme full-stack de financement participatif et d'investissement : gestion des campagnes avec jalons financiers, paliers de contreparties pour contributeurs, vérification documentaire KYC des porteurs de projet et module d'analyse prédictive IA.",
      stack: ["Spring Boot", "React", "Tailwind CSS", "MySQL", "Hibernate", "Docker"],
      highlights: [
        "Analyse prédictive & scoring de risque IA",
        "Vérification d'identité KYC",
        "Gestion des paliers de financement & récompenses",
        "Architecture découplée API REST & Frontend",
      ],
      source: "https://github.com/Mckevin-S/crowdfunding",
      lang: "tsx",
    },
    {
      slug: "event-manager",
      title: "Event Manager",
      subtitle: "Gestion d'événements 100% conteneurisée",
      category: "backend",
      description:
        "Application web de planification et gestion d'événements métier : cycle de vie des réservations, inscription et suivi des participants, notifications email via Mailhog et environnement complet multi-services orchestré avec Docker Compose.",
      stack: ["Laravel", "PHP", "Blade", "MySQL", "Docker Compose", "Nginx"],
      highlights: [
        "Infrastructure Docker complète (5 conteneurs)",
        "Seeders et migrations de données automatisés",
        "Nginx reverse proxy & isolation réseau",
        "Capture locale des emails via Mailhog",
      ],
      source: "https://github.com/Mckevin-S/Gestion-evenement",
      lang: "php",
    },
    {
      slug: "digitrans-bi",
      title: "Digitrans BI",
      subtitle: "Dashboard Business Intelligence & Analytics",
      category: "data",
      description:
        "Plateforme décisionnelle d'analyse de données d'activité pour entreprise : API performante avec agrégation de métriques, interface utilisateur avec visualisation graphique interactive (Recharts), architecture offline-first et intégration PostgreSQL/Redis.",
      stack: ["Python", "FastAPI", "React", "PostgreSQL", "Redis", "Docker", "Recharts"],
      highlights: [
        "Tableaux de bord KPI & graphiques Recharts",
        "Mise en cache offline-first sur le frontend",
        "Documentation API automatique OpenAPI",
        "Suite de tests automatisés Pytest",
      ],
      source: "https://github.com/Mckevin-S/digitrans-cm-bi",
      lang: "py",
    },
    {
      slug: "terraform-deployer",
      title: "Terraform Deployer",
      subtitle: "Infrastructure as Code & Automatisation Cloud",
      category: "devops",
      description:
        "Suite d'automatisation d'infrastructure cloud modulaire et reproductible : modules Terraform réutilisables, isolation stricte par environnements (dev, staging, prod), playbooks Ansible pour la configuration serveur et intégration CI/CD.",
      stack: ["Terraform", "HCL", "Ansible", "CI/CD", "Docker", "AWS"],
      highlights: [
        "Modules Terraform déclaratifs & réutilisables",
        "Provisionnement automatisé par playbooks Ansible",
        "Gestion multi-environnements isolés",
        "Pipelines d'automatisation et de validation",
      ],
      source: "https://github.com/Mckevin-S/terraform-deployer",
      lang: "tf",
    },
  ],
  en: [
    {
      slug: "gusto-restaurant-manager",
      title: "Gusto Restaurant Manager",
      subtitle: "Restaurant management & real-time ordering system",
      category: "fullstack",
      description:
        "Full-featured restaurant management solution: SMS-based 2FA authentication, live order tracking and kitchen/floor synchronization via WebSockets, ingredient inventory tracking, table zone availability and analytical performance dashboard.",
      stack: ["Java 21", "Spring Boot", "React", "MySQL", "Docker", "WebSocket", "Prometheus"],
      highlights: [
        "SMS 2FA Authentication & RBAC",
        "Real-time WebSockets synchronization",
        "Prometheus metrics & monitoring",
        "Interactive Swagger OpenAPI documentation",
      ],
      source: "https://github.com/Mckevin-S/restaurant_manager",
      lang: "java",
    },
    {
      slug: "crowdfunding-platform",
      title: "Crowdfunding Platform",
      subtitle: "Fundraising & investment platform with AI scoring",
      category: "fullstack",
      description:
        "Full-stack crowdfunding and fundraising platform: campaign milestones with funding progress, backer reward tiers, KYC document verification for project creators, and AI-driven success and risk evaluation models.",
      stack: ["Spring Boot", "React", "Tailwind CSS", "MySQL", "Hibernate", "Docker"],
      highlights: [
        "AI-driven risk & success scoring",
        "KYC document verification pipeline",
        "Financial milestone & contribution tracking",
        "Decoupled REST API & responsive frontend",
      ],
      source: "https://github.com/Mckevin-S/crowdfunding",
      lang: "tsx",
    },
    {
      slug: "event-manager",
      title: "Event Manager",
      subtitle: "100% containerized event management application",
      category: "backend",
      description:
        "Web application for planning and managing corporate events: full booking lifecycle, attendee registration and tracking, email notification pipeline with Mailhog, and isolated multi-service Docker Compose environment.",
      stack: ["Laravel", "PHP", "Blade", "MySQL", "Docker Compose", "Nginx"],
      highlights: [
        "Full 5-container Docker Compose infrastructure",
        "Automated database migrations and seeders",
        "Nginx reverse proxy with network isolation",
        "Local email testing and capture via Mailhog",
      ],
      source: "https://github.com/Mckevin-S/Gestion-evenement",
      lang: "php",
    },
    {
      slug: "digitrans-bi",
      title: "Digitrans BI",
      subtitle: "Business Intelligence & analytics dashboard",
      category: "data",
      description:
        "Business intelligence and decision-support platform: high-performance FastAPI service with data aggregation, interactive React dashboard with Recharts visualizations, offline-first local caching, and PostgreSQL/Redis orchestration.",
      stack: ["Python", "FastAPI", "React", "PostgreSQL", "Redis", "Docker", "Recharts"],
      highlights: [
        "KPI dashboards & dynamic Recharts graphics",
        "Offline-first client-side caching",
        "Automated OpenAPI documentation",
        "Automated Pytest verification suite",
      ],
      source: "https://github.com/Mckevin-S/digitrans-cm-bi",
      lang: "py",
    },
    {
      slug: "terraform-deployer",
      title: "Terraform Deployer",
      subtitle: "Infrastructure as Code & Cloud automation",
      category: "devops",
      description:
        "Modular and reproducible cloud infrastructure automation suite: reusable Terraform modules, strict isolation across environments (dev, staging, prod), Ansible configuration playbooks, and CI/CD pipelines.",
      stack: ["Terraform", "HCL", "Ansible", "CI/CD", "Docker", "AWS"],
      highlights: [
        "Declarative, reusable Terraform modules",
        "Automated server configuration via Ansible",
        "Multi-environment lifecycle management",
        "CI/CD continuous delivery pipelines",
      ],
      source: "https://github.com/Mckevin-S/terraform-deployer",
      lang: "tf",
    },
  ],
};
