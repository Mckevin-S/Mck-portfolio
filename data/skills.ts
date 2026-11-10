import type { Lang } from "../types/lang";
import type { SkillGroup } from "../types/skill";

export const skillGroups: Record<Lang, SkillGroup[]> = {
  fr: [
    {
      label: "Backend & Architecture",
      symbol: "◇",
      skills: [
        "Spring Boot (Java)",
        "Laravel (PHP)",
        "Python (FastAPI)",
        "Node.js",
        "REST API & WebSockets",
        "Sécurité JWT & RBAC",
      ],
    },
    {
      label: "Frontend & Mobile",
      symbol: "◉",
      skills: [
        "Next.js / React",
        "Angular",
        "Flutter (Mobile)",
        "TypeScript",
        "Tailwind CSS",
        "HTML / CSS",
      ],
    },
    {
      label: "Data & Big Data",
      symbol: "✦",
      skills: [
        "Apache Spark",
        "Hadoop (HDFS / MapReduce)",
        "Kafka & Flink (Streaming)",
        "Pipelines ETL / ELT",
        "Power BI",
        "MLOps",
      ],
    },
    {
      label: "Cloud, DevOps & IaC",
      symbol: "◆",
      skills: [
        "IaC avec Terraform & Ansible",
        "Docker Conteneurisation",
        "CI/CD (GitHub Actions)",
        "Linux / Bash Shell",
        "AWS & Cloud",
      ],
    },
    {
      label: "Bases de Données & Modélisation",
      symbol: "✧",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Modélisation UML / Merise",
      ],
    },
    {
      label: "Qualité & Méthodes",
      symbol: "▣",
      skills: [
        "Git / GitHub",
        "SonarQube & Qualité Code",
        "Prometheus & Monitoring",
        "Tests unitaires & Intégration",
        "Méthodologie Agile / Scrum",
      ],
    },
  ],
  en: [
    {
      label: "Backend & Architecture",
      symbol: "◇",
      skills: [
        "Spring Boot (Java)",
        "Laravel (PHP)",
        "Python (FastAPI)",
        "Node.js",
        "REST API & WebSockets",
        "JWT Security & RBAC",
      ],
    },
    {
      label: "Frontend & Mobile",
      symbol: "◉",
      skills: [
        "Next.js / React",
        "Angular",
        "Flutter (Mobile)",
        "TypeScript",
        "Tailwind CSS",
        "HTML / CSS",
      ],
    },
    {
      label: "Data & Big Data",
      symbol: "✦",
      skills: [
        "Apache Spark",
        "Hadoop (HDFS / MapReduce)",
        "Kafka & Flink (Streaming)",
        "ETL / ELT Pipelines",
        "Power BI",
        "MLOps",
      ],
    },
    {
      label: "Cloud, DevOps & IaC",
      symbol: "◆",
      skills: [
        "IaC with Terraform & Ansible",
        "Docker Containerization",
        "CI/CD (GitHub Actions)",
        "Linux / Bash Shell",
        "AWS & Cloud",
      ],
    },
    {
      label: "Databases & Modeling",
      symbol: "✧",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "UML / Merise Modeling",
      ],
    },
    {
      label: "Quality & Methodology",
      symbol: "▣",
      skills: [
        "Git / GitHub",
        "SonarQube & Code Quality",
        "Prometheus & Monitoring",
        "Unit & Integration Testing",
        "Agile / Scrum Methodology",
      ],
    },
  ],
};
