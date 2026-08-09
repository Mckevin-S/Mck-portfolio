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
    viewProjects: "Voir mes projets",
    contact: "Me contacter",
    downloadCv: "Télécharger mon CV",
    codeFocus: ["web performant", "UX", "clean code"],
    codeStatus: "// état: prêt à coder",
  },
  about: {
    label: "À propos",
    title: "Qui je suis",
    extra:
      "Convaincu que la qualité technique sert le produit, j'accorde une attention particulière aux performances, à l'accessibilité et à la lisibilité du code — des fondations qui rendent les applications durables et agréables à maintenir.",
  },
  skills: {
    label: "Compétences",
    title: "Ma boîte à outils",
  },
  experience: {
    label: "Parcours",
    title: "Expérience professionnelle",
  },
  projects: {
    label: "Projets",
    title: "Projets sélectionnés",
    demo: "Démo",
    source: "Source",
  },
  contact: {
    label: "Contact",
    title: "Travaillons ensemble",
    heading: "Un projet en tête ? Parlons-en.",
    text: "Que ce soit une application à concevoir, un produit à faire évoluer ou une simple question technique, mon inbox est toujours ouvert. Je réponds généralement sous 24 heures.",
    replyTime: "réponse < 24h",
  },
  form: {
    name: "Nom",
    email: "Email",
    message: "Message",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "vous@exemple.com",
    messagePlaceholder: "Décrivez votre projet en quelques lignes…",
    submit: "Envoyer le message",
    sending: "Envoi…",
    requiredError: "Merci de remplir tous les champs requis.",
    emailError: "Adresse email invalide.",
    genericError:
      "Une erreur est survenue. Réessayez ou écrivez-moi directement par email.",
    successTitle: "✓ Message envoyé",
    successText: "Merci pour votre message. Je vous réponds sous 24 heures.",
    sendAnother: "Envoyer un autre message",
  },
  footer: {
    builtWith: "Conçu & développé avec",
    backToTop: "Retour en haut",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
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
    viewProjects: "View my projects",
    contact: "Get in touch",
    downloadCv: "Download my CV",
    codeFocus: ["performant web", "UX", "clean code"],
    codeStatus: "// status: ready to code",
  },
  about: {
    label: "About",
    title: "Who I am",
    extra:
      "Convinced that technical quality serves the product, I pay close attention to performance, accessibility and code readability — foundations that make applications durable and pleasant to maintain.",
  },
  skills: {
    label: "Skills",
    title: "My toolbox",
  },
  experience: {
    label: "Career",
    title: "Professional experience",
  },
  projects: {
    label: "Projects",
    title: "Selected projects",
    demo: "Demo",
    source: "Source",
  },
  contact: {
    label: "Contact",
    title: "Let's work together",
    heading: "Have a project in mind? Let's talk.",
    text: "Whether it's an application to build, a product to evolve, or just a technical question, my inbox is always open. I usually reply within 24 hours.",
    replyTime: "reply < 24h",
  },
  form: {
    name: "Name",
    email: "Email",
    message: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@example.com",
    messagePlaceholder: "Describe your project in a few lines…",
    submit: "Send message",
    sending: "Sending…",
    requiredError: "Please fill in all required fields.",
    emailError: "Invalid email address.",
    genericError:
      "Something went wrong. Please try again or email me directly.",
    successTitle: "✓ Message sent",
    successText: "Thanks for your message. I'll reply within 24 hours.",
    sendAnother: "Send another message",
  },
  footer: {
    builtWith: "Designed & built with",
    backToTop: "Back to top",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
  },
};

export type Dictionary = typeof fr;

export function getDictionary(lang: Lang): Dictionary {
  return lang === "fr" ? fr : en;
}
