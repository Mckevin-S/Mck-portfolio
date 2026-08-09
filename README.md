# Portfolio

Ce dépôt contient un starter Next.js et j'ai complété l'arborescence du portfolio avec des composants et pages de base.

Architecture ajoutée automatiquement:

portfolio/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── experience/page.tsx
│   ├── projects/page.tsx
│   ├── projects/[slug]/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   └── projects/
│       ├── ProjectCard.tsx
│       └── ProjectGrid.tsx
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
├── types/
│   ├── project.ts
│   ├── skill.ts
│   └── experience.ts
├── hooks/
│   ├── useScroll.ts
│   └── useMediaQuery.ts
├── lib/
│   └── utils.ts
├── app/api/contact/route.ts

Fichiers créés automatiquement: composants de base, pages, données d'exemple, types et hooks.

Prochaines étapes proposées:

- Personnaliser le contenu et le style dans `components/`.
- Ajouter vos projets réels dans `data/projects.ts` et images dans `public/images/`.
- Compléter `app/layout.tsx` ou `globals.css` pour le thème visuel.
- Tester l'API contact et connecter un service d'envoi d'e-mails si nécessaire.

Commandes utiles:

```bash
npm install
npm run dev
```

J'ai ajouté `.env.example` et des placeholders dans `public/`.

Souhaitez-vous que je fasse un commit Git avec ces changements maintenant ?

