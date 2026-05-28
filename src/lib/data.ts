import type { LucideIcon } from "lucide-react";
import {
  Database,
  Code2,
  Bug,
  GitBranch,
  Braces,
  Server,
  Terminal,
  Sparkles,
} from "lucide-react";

export const personal = {
  name: "Lucas Quevedo",
  shortName: "Lucas",
  role: "Desarrollador Jr Python · QA Tester · Estudiante UTN",
  rotatingRoles: [
    "Desarrollador Jr Python",
    "QA Tester",
    "Estudiante UTN",
    "Aprendiendo Java",
    "Builder con IA",
  ],
  tagline:
    "Desarrollador Jr con foco en Python y FastAPI, formándome en Java. 13+ años de experiencia en QA industrial me dieron el pensamiento analítico para construir proyectos end-to-end con IA como copiloto.",
  location: "Luján, Buenos Aires, Argentina",
  phone: "+54 2323 612869",
  email: "l.m.quevedo@hotmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/lucasquevedo/",
    github: "https://github.com/L-Quevedo",
    cv: "/cv.pdf",
  },
};

export type Skill = {
  name: string;
  level: number;
  icon: LucideIcon;
  category: "Dev" | "Backend" | "Data" | "QA" | "Tools" | "IA";
  blurb: string;
};

export const skills: Skill[] = [
  {
    name: "Python",
    level: 80,
    icon: Code2,
    category: "Dev",
    blurb: "POO, scripting, FastAPI, pandas y Pytest. Stack principal.",
  },
  {
    name: "FastAPI",
    level: 75,
    icon: Server,
    category: "Backend",
    blurb: "Endpoints REST, integración con BD y diseño de arquitectura.",
  },
  {
    name: "SQL / MySQL",
    level: 75,
    icon: Database,
    category: "Data",
    blurb: "Consultas, joins, validación de datos y modelado relacional.",
  },
  {
    name: "Java",
    level: 35,
    icon: Braces,
    category: "Dev",
    blurb: "En formación activamente — segundo lenguaje en el camino.",
  },
  {
    name: "QA Testing",
    level: 90,
    icon: Bug,
    category: "QA",
    blurb: "STLC completo, casos de prueba, API Testing con Postman y Jira.",
  },
  {
    name: "JS · HTML · CSS",
    level: 65,
    icon: Braces,
    category: "Dev",
    blurb: "Landings responsive y proyectos web freelance para clientes locales.",
  },
  {
    name: "Git · Docker · Linux",
    level: 70,
    icon: GitBranch,
    category: "Tools",
    blurb: "Workflow profesional con ramas y PRs. Infra básica en Ubuntu.",
  },
  {
    name: "Desarrollo con IA",
    level: 90,
    icon: Sparkles,
    category: "IA",
    blurb: "Claude y ChatGPT a diario para construir, debuggear y automatizar.",
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  status?: string;
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    title: "PrecioYa — Comparador de precios de supermercados",
    description:
      "ETL en Python/pandas que procesa datos abiertos del gobierno (SEPA) y los carga en MySQL. Backend REST en FastAPI con búsqueda de productos. Diseñado para escalar a comparación de carritos entre cadenas.",
    tech: ["Python", "FastAPI", "pandas", "MySQL", "React Native"],
    image: "/projects/precioya.svg",
    github: "https://github.com/L-Quevedo",
    status: "En desarrollo",
    highlight: true,
  },
  {
    title: "Gestión de Datos de Países",
    description:
      "Aplicación de consola en Python para análisis de datos geográficos y demográficos cargados desde CSV. ABM, búsqueda con filtros, ordenamiento múltiple y estadísticas por continente.",
    tech: ["Python", "POO", "CSV", "UTN"],
    image: "/projects/paises.svg",
    github: "https://github.com/L-Quevedo",
  },
  {
    title: "Desarrollo Web Freelance",
    description:
      "Diseño y desarrollo de landing pages responsive para emprendimientos locales (indumentaria, técnicos, construcción, tecnología). Integraciones con WhatsApp Business y carrito de compras.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/projects/freelance.svg",
    demo: "#",
  },
  {
    title: "Análisis de datos en planta — Cartocor",
    description:
      "Dashboards en Excel avanzado con KPIs e indicadores de gestión que facilitaron decisiones operativas y redujeron el índice de reclamos de clientes.",
    tech: ["Excel", "KPIs", "Power BI"],
    image: "/projects/cartocor.svg",
  },
];

export type TrackItem = {
  type: "work" | "education" | "certification";
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
  tags: string[];
};

export const track: TrackItem[] = [
  {
    type: "education",
    role: "Tecnicatura Universitaria en Programación",
    company: "Universidad Tecnológica Nacional (UTN)",
    period: "Mar 2025 — Actualidad",
    location: "A distancia",
    bullets: [
      "Primer año finalizado. Construcción de proyectos reales como parte del cursado.",
      "Stack visto: Python, Git & GitHub, Docker, Bash, Linux, redes básicas, Jira.",
      "Metodologías ágiles (Scrum / Kanban) aplicadas en trabajos prácticos.",
    ],
    tags: ["Python", "Git", "Docker", "Linux", "Scrum"],
  },
  {
    type: "certification",
    role: "Desarrollo con IA: de 0 a Producción",
    company: "BIG School",
    period: "Finalizado Mar 2026",
    bullets: [
      "Desarrollo de software asistido por IA con Claude y ChatGPT.",
      "Prompting aplicado a desarrollo, debugging y automatización.",
      "Construcción de proyectos end-to-end usando IA como copiloto.",
    ],
    tags: ["Claude", "ChatGPT", "Prompting", "Automatización"],
  },
  {
    type: "certification",
    role: "QA Tester Manual",
    company: "Coderhouse",
    period: "Finalizado Feb 2026",
    bullets: [
      "STLC completo y diseño de casos de prueba.",
      "Reporte de bugs en Jira y trazabilidad de defectos.",
      "API Testing con Postman y consultas SQL para validación de datos.",
    ],
    tags: ["STLC", "Postman", "Jira", "SQL"],
  },
  {
    type: "work",
    role: "Analista de Calidad",
    company: "Cartocor S.A.",
    period: "Sep 2012 — Presente",
    location: "Luján, Buenos Aires",
    bullets: [
      "Control de calidad de producto terminado: verificación de especificaciones, detección de no conformidades y análisis de causa raíz.",
      "Inspección y validación de materias primas al ingreso, asegurando cumplimiento de estándares.",
      "Análisis de datos con Excel avanzado: KPIs, dashboards e indicadores de gestión.",
      "Implementación de mejoras basadas en datos históricos que redujeron el índice de reclamos.",
    ],
    tags: ["QA", "Excel", "KPIs", "Causa raíz", "13+ años"],
  },
];

export const stats = [
  { label: "Años en QA industrial", value: 13, suffix: "+" },
  { label: "Lenguajes en uso", value: 4, suffix: "" },
  { label: "Proyectos end-to-end", value: 6, suffix: "+" },
  { label: "Curiosidad por aprender", value: 100, suffix: "%" },
];
