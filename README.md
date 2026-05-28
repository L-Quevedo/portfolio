# Portfolio · Lautaro Quevedo

Portfolio personal premium construido con **Next.js 16 (App Router) + TypeScript + Tailwind v4 + Framer Motion**. Diseño minimalista oscuro con acentos neon, animaciones suaves, cursor interactivo, fondo dinámico y reveal on scroll.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, React 19)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## Estructura

```
src/
├── app/
│   ├── globals.css        # design tokens + utilidades premium
│   ├── layout.tsx         # metadata SEO, fuentes, root layout
│   └── page.tsx           # composición de secciones
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Stats.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── CV.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── AnimatedBackground.tsx
│       ├── CustomCursor.tsx
│       ├── MagneticButton.tsx
│       ├── Reveal.tsx
│       └── SectionHeading.tsx
└── lib/
    ├── data.ts            # contenido mock (personal, skills, proyectos, exp.)
    └── utils.ts
public/
├── projects/*.svg         # previews de proyectos (reemplazables)
└── cv.pdf                 # reemplazar por tu CV real
```

## Desarrollo

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Build de producción

```bash
npm run build
npm run start
```

## Personalización

Toda la información personal vive en [`src/lib/data.ts`](src/lib/data.ts):

- `personal` → nombre, rol, email, redes
- `skills` → stack con nivel, categoría y descripción
- `projects` → proyectos del portfolio
- `experience` → timeline laboral
- `stats` → métricas animadas

Los **colores y tipografía** del tema están en [`src/app/globals.css`](src/app/globals.css), bloque `@theme`. Cambiá `--color-accent`, `--color-accent-2`, `--color-accent-3` para repintar todo el sitio.

### CV

Colocá tu archivo `cv.pdf` en `/public/cv.pdf`. El botón de descarga lo sirve desde ahí.

### Imágenes de proyectos

Los previews en `/public/projects/*.svg` son placeholders. Reemplazalos por capturas reales (PNG/JPG/WEBP de 800×500) y actualizá la ruta en `data.ts`.

## Deploy en Vercel

1. Subí el repo a GitHub.
2. En [vercel.com/new](https://vercel.com/new) importá el repo.
3. Vercel detecta Next.js automáticamente — dejá los defaults.
4. Click en **Deploy**. Listo.

Para dominio custom: Project → Settings → Domains → agregá tu dominio y apuntá el DNS.

## Performance & accesibilidad

- Imágenes optimizadas vía SVG vectorial.
- `prefers-reduced-motion` respetado: animaciones se reducen automáticamente.
- Colores con contraste AA en texto principal.
- Estructura semántica con `<section>`, `<header>`, `<footer>`, `<main>`, `<nav>`.

## Licencia

MIT — usalo como base para tu propio portfolio.
