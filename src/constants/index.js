import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6"; 
export const servicesData = [
  {
    title: "Full-Stack Development",
    description:
      "I design and ship end-to-end web products—aligning business requirements with clean architecture, precise UI/UX, efficient APIs, and production-grade quality.",
    items: [
      {
        title: "Product Architecture",
        description:
          "(Domain modeling, API contracts, modular boundaries, stack decisions driven by business needs)",
      },
      {
        title: "Frontend Engineering",
        description:
          "(React/Vue + TypeScript, predictable state, responsive layouts, smooth animations with GSAP/Framer Motion)",
      },
      {
        title: "Backend & APIs",
        description:
          "(Node.js/Express, Auth & RBAC, REST/GraphQL, payments/licensing integrations, file service & messaging)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Predictable, secure deployments. I set up CI/CD, automate infrastructure, and add observability so apps stay stable 24/7 on VPS or cloud—and scale without drama.",
    items: [
      {
        title: "CI/CD Pipelines",
        description:
          "(GitHub Actions, automated build & tests, versioning, zero-downtime deploys, fast rollbacks)",
      },
      {
        title: "Infrastructure & Runtime",
        description:
          "(Linux/Nginx, SSL, Docker/Compose, domains & subdomains, caching, SSR/Edge when it makes sense)",
      },
      {
        title: "Observability",
        description:
          "(Prometheus/Grafana, structured logging, alerting, basic tracing for rapid incident response)",
      },
    ],
  },
  {
    title: "Security & Performance",
    description:
      "Security and speed together. I harden apps from code to server config while removing bottlenecks so the experience stays fast and safe as usage grows.",
    items: [
      {
        title: "Application Hardening",
        description:
          "(Input validation, rate limiting, XSS/SQLi protection, OAuth/JWT, secret management & dependency audits)",
      },
      {
        title: "Performance Engineering",
        description:
          "(Query/API profiling, indexing & caching, bundle optimization, realistic Lighthouse 90+ targets)",
      },
      {
        title: "Quality Assurance",
        description:
          "(Unit & integration tests, pragmatic e2e, architectural reviews & targeted refactors without blocking releases)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "Clear interfaces drive adoption. I build responsive, interactive web apps and mobile prototypes (React Native/Flutter) to validate ideas quickly and ship with confidence.",
    items: [
      {
        title: "Rich Web Interfaces",
        description:
          "(Precise UI/UX, accessibility, micro-interactions, intuitive navigation patterns)",
      },
      {
        title: "Progressive Web Apps",
        description:
          "(Offline mode, push notifications, smart caching strategies, installable experience)",
      },
      {
        title: "Mobile Prototypes",
        description:
          "(React Native/Flutter single codebase for fast validation, smooth handoff to production)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "E-commerce Isoneday Studio Brand",
    description:
      "Designed and built the platform from scratch (Next.js, Node/Express, PostgreSQL) to production-ready: modular architecture, secure checkout (Midtrans), real-time chat (Socket.io), bot protection (Arcjet), observability (Docker + Prometheus), and automated tests (Jest).",
    impact: "faster launch, fewer transaction errors, better ops visibility, and a shopping flow that remains stable under real traffic.",
    href: "",
    image: "/assets/projects/isoneday1.png",
    bgImage: "/assets/backgrounds/bgproject.webp",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Express" },
      { id: 5, name: "Tailwind CSS" },
      { id: 6, name: "PostgreSQL" },
      { id: 7, name: "Docker" },
      { id: 8, name: "Socket.io" },
      { id: 9, name: "Github" },

    ],
  },
  {
    id: 2,
    name: "POS Ferdila Garage",
    description:
      "Digitized cashier and operations (Next.js/React, Node/Express, PostgreSQL) with role-based access and an analytics dashboard delivering real-time insights on revenue, inventory, and mechanic fees.",
    impact:"shorter checkout time, major drop in input/change errors, and quicker daily decisions via precise metrics and filters.",
    href: "",
    image: "/assets/projects/posbengkel1.png",
    bgImage: "/assets/backgrounds/bgproject.webp",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Express" },
      { id: 5, name: "Tailwind CSS" },
      { id: 6, name: "PostgreSQL" },
      { id: 7, name: "Github" },
    ],
  },
  {
    id: 3,
    name: "SkillStory Landing Page",
    description:
      "Modernized end-to-end UI/UX (Nuxt) and restructured CMS (Strapi) with new collection types (auto-grid TikTok embeds, Gallery, Client Logos, Running Schedule) and a clean content API; deployed on VPS.",
    impact: "content goes live faster without a dev loop, brand credibility is elevated, and the content foundation is ready to scale for future campaigns.",
    href: "",
    image: "/assets/projects/skillstory1.png",
    bgImage: "/assets/backgrounds/bgproject.webp",
    frameworks: [
      { id: 1, name: "Nuxt" },
      { id: 2, name: "CMS Strapi" },
      { id: 3, name: "PostgreSQL" },
      { id: 4, name: "TailwindCSS" },
      { id: 5, name: "Gitlab" },
    ],
  },
  {
    id: 4,
    name: "Kesflo Management System Skillstory",
    description:
      "Joined an existing product as a troubleshooter: closed critical bugs (auth, transaction filters, auto-refresh), hardened Email Verification via SMTP & Google OAuth, and designed safe-delete for categories (reassign/cascade) to preserve data integrity.",
    impact:"fewer operational incidents, smoother onboarding, and lighter support load as critical edge cases are addressed.",
    href: "",
    image: "/assets/projects/kesflo.png",
    bgImage: "/assets/backgrounds/bgproject.webp",
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express" },
      { id: 4, name: "TailwindCSS" },
      { id: 5, name: "Gitlab" },
    ],
  },
  {
    id: 5,
    name: "Disney Film Clone",
    description:
      "Showcased modern React UI (Vite + Tailwind) using TMDB data: category browsing, concise details, and a lightweight watchlist.",
    impact : "demonstrates component craftsmanship, clean state management, plus responsiveness and accessibility that translate directly to production apps.",
    href: "",
    image: "/assets/projects/disneyfilm.png",
    bgImage: "/assets/backgrounds/bgproject.webp",
    frameworks: [
      { id: 1, name: "Vite" },
      { id: 2, name: "React" },
      { id: 3, name: "TMDB API" },
      { id: 4, name: "TailwindCSS" },
      { id: 5, name: "Github" },

    ],
  },
  {
    id: 6,
    name: "Gradient Tailwind / css Generator",
    description:
      "Built a gradient generator with live preview, dual Color 1/Color 2 pickers, a randomizer, and instant export to both plain CSS and Tailwind utility classes (one-click copy). Implemented with React + Tailwind, with clean formatting for consistent snippets.",
      impact: "accelerates designer–developer workflow, reduces handoff errors, ensures consistent styling tokens, and cuts gradient setup time from minutes to seconds.",
    href: "",
    image: "/assets/projects/gradient.png",
    bgImage: "/assets/backgrounds/bgproject.webp",
    frameworks: [
      { id: 1, name: "Vite" },
      { id: 2, name: "React" },
      { id: 3, name: "TailwindCSS" },
      { id: 4, name: "Github" },

    ],
  },
    {
    id: 7,
    name: "Weather App",
    description:
      "Turned OpenWeatherMap into immediate user value: auto-detect location, city search, detailed metrics, and hourly forecasts with a responsive UI (Vite/React/Tailwind).",
      impact:"instant usefulness right after location permission; clean component architecture easy to extend for advanced features.",
    href: "",
    image: "/assets/projects/weather.png",
    bgImage: "/assets/backgrounds/bgproject.webp",
    frameworks: [
      { id: 1, name: "Vite" },
      { id: 2, name: "React" },
      { id: 3, name: "TailwindCSS" },
      { id: 4, name: "Open Weather Map API" },
      { id: 3, name: "Github" },

    ],
  },
      {
    id: 8,
    name: "Expense Income Tracker",
    description:
      "Defined a clear front-end architecture (Vite/React/Tailwind, LocalStorage) for transaction inputs, monthly filters, daily/history views with calendar, and concise stats.",
      impact: "users grasp cashflow instantly without a backend; showcases data modeling, friendly filtering UX, and reliable local persistence.",
    href: "",
    image: "/assets/projects/moneymanagement.png",
    bgImage: "/assets/backgrounds/bgproject.webp",
    frameworks: [
      { id: 1, name: "Vite" },
      { id: 2, name: "React" },
      { id: 3, name: "TailwindCSS" },
      { id: 4, name: "LocalStorage" },
      { id: 3, name: "Github" },

    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/erickdeoalamsyah/", Icon: FaInstagram },
  { name: "LinkedIn", href: "https://id.linkedin.com/in/ericdeoalamsyah", Icon: FaLinkedinIn },
  { name: "GitHub", href: "https://github.com/erickdeoalamsyah", Icon: FaGithub },
];
