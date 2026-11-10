import type { Lang } from "../types/lang";

const fr = {
  nav: {
    links: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contact",
    },
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    navigation: "Navigation",
    changeLanguage: "Changer de langue",
  },
  hero: {
    greetingSuffix: "moi c'est",
    internshipBadge: "À la recherche d'un stage de 6 mois dès février 2027",
    internshipShort: "Stage 6 mois · Fév. 2027",
    viewProjects: "Voir mes projets",
    contact: "Me contacter",
    downloadCv: "Télécharger mon CV",
    codeFocus: ["clean architecture", "haute performance", "scalabilité & cloud"],
    codeStatus: "// statut : prêt pour stage de 6 mois (Fév. 2027)",
    copyCode: "Copier",
    copiedCode: "Copié !",
  },
  about: {
    label: "À propos",
    title: "Parcours & Vision d'ingénierie",
    internshipCallout:
      "Actuellement à la recherche d'un stage de 6 mois à partir de février 2027 au sein d'une équipe d'ingénierie logicielle stimulante.",
    extra:
      "Convaincu que l'excellence technique est un levier direct de valeur produit, j'accorde une attention méticuleuse à la robustesse du backend, à la fluidité de l'interface et à l'automatisation des déploiements. Mon objectif : créer des logiciels résilients, maintenables et évolutifs.",
    techStackLabel: "Technologies & Écosystème",
  },
  skills: {
    label: "Compétences",
    title: "Boîte à outils & Expertises",
  },
  experience: {
    label: "Parcours",
    title: "Expérience professionnelle",
  },
  projects: {
    label: "Projets",
    title: "Réalisations sélectionnées",
    demo: "Démo",
    source: "Code Source",
    filterAll: "Tous",
    categories: {
      all: "Tous",
      fullstack: "Full-Stack",
      backend: "Backend & Web",
      data: "Data & BI",
      devops: "Cloud & DevOps",
    },
  },
  contact: {
    label: "Contact",
    title: "Travaillons ensemble",
    heading: "Une opportunité ou un projet ? Parlons-en.",
    internshipNotice:
      "Disponible pour un stage de 6 mois à partir de février 2027 (présentiel, hybride ou full-remote).",
    text: "Que ce soit pour une proposition de stage, la conception d'un produit ambitieux ou un simple échange technique, ma boîte de réception est toujours ouverte. Je réponds généralement sous 24 heures.",
    replyTime: "réponse garantie < 24h",
  },
  form: {
    name: "Nom complet",
    email: "Adresse email",
    message: "Votre message",
    namePlaceholder: "Ex: Thomas Laurent",
    emailPlaceholder: "thomas@entreprise.com",
    messagePlaceholder: "Présentez brièvement l'opportunité ou votre projet...",
    submit: "Envoyer le message",
    sending: "Envoi en cours…",
    requiredError: "Merci de renseigner votre nom et votre message.",
    emailError: "Veuillez saisir une adresse email valide.",
    genericError:
      "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou m'écrire directement par email.",
    successTitle: "✓ Message transmis avec succès",
    successText: "Merci pour votre message ! Je vous répondrai sous 24 heures.",
    sendAnother: "Envoyer un autre message",
    autoReset: "Retour automatique dans",
  },
  footer: {
    builtWith: "Conçu & développé par",
    backToTop: "Retour en haut",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    rights: "Tous droits réservés",
  },
};

const en: typeof fr = {
  nav: {
    links: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    openMenu: "Open menu",
    closeMenu: "Close menu",
    navigation: "Navigation",
    changeLanguage: "Change language",
  },
  hero: {
    greetingSuffix: "I'm",
    internshipBadge: "Seeking a 6-month internship starting February 2027",
    internshipShort: "6-Month Internship · Feb 2027",
    viewProjects: "View Projects",
    contact: "Get in Touch",
    downloadCv: "Download CV",
    codeFocus: ["clean architecture", "high performance", "scalability & cloud"],
    codeStatus: "// status: open for 6-month internship (Feb 2027)",
    copyCode: "Copy",
    copiedCode: "Copied!",
  },
  about: {
    label: "About",
    title: "Engineering Background & Vision",
    internshipCallout:
      "Currently seeking a 6-month software engineering internship starting February 2027 within an ambitious, high-impact team.",
    extra:
      "Driven by the conviction that technical excellence directly accelerates product success, I pay meticulous attention to backend resilience, interface smoothness, and automated deployment pipelines. My goal: building maintainable, high-throughput systems that scale gracefully.",
    techStackLabel: "Core Technologies & Ecosystem",
  },
  skills: {
    label: "Skills",
    title: "Toolbox & Technical Domains",
  },
  experience: {
    label: "Career",
    title: "Professional Experience",
  },
  projects: {
    label: "Projects",
    title: "Featured Engineering Work",
    demo: "Live Demo",
    source: "Source Code",
    filterAll: "All",
    categories: {
      all: "All",
      fullstack: "Full-Stack",
      backend: "Backend & Web",
      data: "Data & BI",
      devops: "Cloud & DevOps",
    },
  },
  contact: {
    label: "Contact",
    title: "Let's Connect",
    heading: "An opportunity or project in mind? Let's talk.",
    internshipNotice:
      "Open to a 6-month internship starting February 2027 (on-site in France, hybrid, or full-remote).",
    text: "Whether you have an internship opportunity, an ambitious application to build, or a technical conversation to initiate, my inbox is always open. I typically reply within 24 hours.",
    replyTime: "guaranteed reply < 24h",
  },
  form: {
    name: "Full Name",
    email: "Email Address",
    message: "Message",
    namePlaceholder: "e.g. Alex Morgan",
    emailPlaceholder: "alex@company.com",
    messagePlaceholder: "Tell me about the internship opportunity or project...",
    submit: "Send Message",
    sending: "Sending message…",
    requiredError: "Please fill in both your name and message.",
    emailError: "Please enter a valid email address.",
    genericError:
      "Something went wrong while sending. Please try again or reach out directly via email.",
    successTitle: "✓ Message sent successfully",
    successText: "Thank you for reaching out! I will get back to you within 24 hours.",
    sendAnother: "Send another message",
    autoReset: "Resetting form in",
  },
  footer: {
    builtWith: "Designed & engineered by",
    backToTop: "Back to top",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    rights: "All rights reserved",
  },
};

export type Dictionary = typeof fr;

export function getDictionary(lang: Lang): Dictionary {
  return lang === "fr" ? fr : en;
}
