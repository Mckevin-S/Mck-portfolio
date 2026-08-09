import type { Lang } from "../types/lang";
import type { Profile } from "../types/profile";

export const profile: Record<Lang, Profile> = {
  fr: {
    name: "Mckevin Kamguem",
    firstName: "Mckevin",
    role: "Concepteur développeur logiciel",
    intro:
      "Je conçois et développe des applications web performantes, accessibles et évolutives — de l'interface jusqu'aux données.",
    bio: "Développeur passionné par la conception de produits web soignés et robustes. Je transforme des problèmes complexes en solutions simples et élégantes, en veillant à chaque détail : performances, accessibilité, expérience utilisateur. Mon approche mêle exigence technique et sens du produit, avec une stack moderne centrée sur React, Next.js, Node.js et PostgreSQL.",
    location: "France",
    availability: "Disponible pour de nouvelles opportunités",
    email: "bonjour@mckevin.dev",
    stats: [
      { label: "Années d'expérience", value: "3+" },
      { label: "Projets livrés", value: "12+" },
      { label: "Technologies maîtrisées", value: "8" },
      { label: "Temps de réponse", value: "<24h" },
    ],
  },
  en: {
    name: "Mckevin Kamguem",
    firstName: "Mckevin",
    role: "Software Designer & Developer",
    intro:
      "I design and build performant, accessible and scalable web applications — from the interface down to the data.",
    bio: "Developer passionate about crafting polished, robust web products. I turn complex problems into simple, elegant solutions, caring about every detail: performance, accessibility, user experience. My approach blends technical rigor with product sense, using a modern stack centered on React, Next.js, Node.js and PostgreSQL.",
    location: "France",
    availability: "Available for new opportunities",
    email: "bonjour@mckevin.dev",
    stats: [
      { label: "Years of experience", value: "3+" },
      { label: "Projects shipped", value: "12+" },
      { label: "Technologies mastered", value: "8" },
      { label: "Response time", value: "<24h" },
    ],
  },
};
