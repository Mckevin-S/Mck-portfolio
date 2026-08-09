# Portfolio — Mckevin Kamguem

Portfolio one-page construit avec **Next.js 16**, **React 19** et **Tailwind CSS v4**, sur un design system maison « Kinetic Syntax » (dark mode, glassmorphisme, accents cyan/émeraude). **Bilingue FR/EN** (cookie `lang`, switch dans la navbar), fond animé réactif (souris + scroll), salutation bonjour/bonsoir selon l'heure, téléchargement du CV et icônes réseaux.

## Démarrer

```bash
npm install
npm run dev
```

## Commandes utiles

```bash
npm run dev      # développement (http://localhost:3000)
npm run build    # build de production
npm run start    # serveur de production
npm run lint     # lint ESLint
```

## Structure

```
app/
  layout.tsx              # layout racine (fonts, metadata, nav, footer, fond, langue)
  page.tsx                # page unique : assemble les 6 sections
  globals.css             # design tokens + effets (thème Tailwind v4)
  api/contact/route.ts    # endpoint POST de contact
  api/locale/route.ts     # endpoint de changement de langue (cookie)
components/
  layout/                 # Navbar (glass + scroll spy), MobileMenu, Footer, LanguageToggle
  sections/               # Hero, About, Skills, Experience, Projects, Contact
  projects/               # ProjectCard (style terminal), ProjectGrid
  contact/                # ContactForm (client)
  ui/                     # Button, Badge, Container, SectionTitle, TerminalWindow, TimeGreeting, icons
data/                     # contenu bilingue (fr/en) : profile, skills, projects, experience, social
lib/                      # i18n, dictionnaire fr/en, constantes, navigation
types/                    # types TypeScript associés
```

## Personnalisation

Tout le contenu est centralisé dans `data/` (chaque fichier exporte `fr` et `en`) :

- `profile.ts` — nom, rôle, bio, email, stats
- `skills.ts` — compétences par groupe
- `projects.ts` — projets (stack, liens démo/source)
- `experience.ts` — parcours professionnel
- `social.ts` — liens GitHub / LinkedIn / email

Autres à personnaliser :

- `public/cv/cv.pdf` — ton CV (bouton « Télécharger mon CV »)
- `public/mckfolio.png` — ta photo (avatar du Hero)
- `lib/dictionary.ts` — tous les libellés d'interface FR/EN
- `app/api/contact/route.ts` — connecter ton service d'envoi d'emails (Resend, SendGrid, etc.)

> Le formulaire de contact appelle `/api/contact`.
