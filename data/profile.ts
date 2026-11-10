import type { Lang } from "../types/lang";
import type { Profile } from "../types/profile";

export const profile: Record<Lang, Profile> = {
  fr: {
    name: "Mckevin Kamguem",
    firstName: "Mckevin",
    role: "Ingénieur logiciel",
    intro:
      "Je conçois, développe et déploie des solutions logicielles complètes, robustes et hautement scalables. De l'analyse d'architecture au Cloud et DevOps, je transforme des problématiques complexes en produits performants et maintenables.",
    bio: "Ingénieur logiciel passionné par l'architecture distribuée, les systèmes performants et le clean code. Spécialisé sur l'écosystème Java (Spring Boot), TypeScript (React / Next.js), Python et les pratiques modernes Cloud & DevOps (Docker, Kubernetes, Terraform, CI/CD). Rigoureux, autonome et orienté produit, j'accorde une attention méticuleuse à l'accessibilité, à la résilience et à l'expérience utilisateur.",
    location: "France",
    email: "kamguemmckevin@gmail.com",
    stats: [
      { label: "Années d'expérience", value: "3+" },
    ],
  },
  en: {
    name: "Mckevin Kamguem",
    firstName: "Mckevin",
    role: "Software Engineer",
    intro:
      "I architect, build, and deploy robust, high-performance, and scalable software solutions. From system architecture to Cloud & DevOps pipelines, I turn complex business challenges into resilient, maintainable products.",
    bio: "Software Engineer passionate about distributed systems, software craftsmanship, and clean architecture. Specialized in Java (Spring Boot), TypeScript (React / Next.js), Python, and modern Cloud & DevOps tooling (Docker, Kubernetes, Terraform, CI/CD). Rigorous, autonomous, and product-focused, I maintain relentless attention to reliability, speed, and exceptional developer & user experience.",
    location: "France",
    email: "kamguemmckevin@gmail.com",
    stats: [
      { label: "Years of experience", value: "3+" },
    ],
  },
};
