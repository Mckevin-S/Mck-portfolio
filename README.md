# Portfolio

arborescence du portfolio 

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


Commandes utiles:

```bash
npm install
npm run dev
```



