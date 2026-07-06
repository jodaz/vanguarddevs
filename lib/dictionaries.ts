import type { Locale } from "./i18n";

export interface CaseItem {
  name: string;
  tag: string;
  body: string;
  url: string;
}

export interface PackageItem {
  title: string;
  featured?: boolean;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  nav: {
    cases: string;
    process: string;
    about: string;
    cta: string;
    ariaMain: string;
    ariaLang: string;
  };
  hero: {
    ariaLabel: string;
    kicker: string;
    region: string;
    headlineStart: string;
    headlineAccent: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  cases: {
    heading: string;
    secLabel: string;
    items: CaseItem[];
  };
  process: {
    heading: string;
    secLabel: string;
    steps: { num: string; title: string; body: string }[];
    packagesIntro: string;
    packages: PackageItem[];
  };
  about: {
    heading: string;
    secLabel: string;
    photoLabel: string;
    bio: string;
  };
  contact: {
    heading: string;
    secLabel: string;
    cta: string;
    linkedinLabel: string;
  };
  footer: {
    tagline: string;
  };
}

const es: Dictionary = {
  meta: {
    title: "VanguardDevs — Desarrollo de MVPs y SaaS",
    description:
      "Estudio boutique de desarrollo de producto: MVPs y SaaS de punta a punta para founders y empresas de USA y LATAM. Trabajas directamente con quien construye tu producto, sin intermediarios.",
    ogAlt: "VanguardDevs — Desarrollo de MVPs y SaaS",
  },
  nav: {
    cases: "Proyectos",
    process: "Cómo funciona",
    about: "Fundador",
    cta: "Agenda una llamada",
    ariaMain: "Principal",
    ariaLang: "Idioma / Language",
  },
  hero: {
    ariaLabel: "Introducción",
    kicker: "VanguardDevs — Estudio de producto",
    region: "USA ▶ LATAM",
    headlineStart:
      "Tu idea convertida en un producto funcionando y en manos de usuarios reales —",
    headlineAccent: "en semanas, no meses.",
    sub: "VanguardDevs es un estudio de producto: MVPs y SaaS de punta a punta, con un solo interlocutor. Un estudio que ha lanzado sus propios SaaS y construye productos para founders de USA y LATAM.",
    ctaPrimary: "Agenda una llamada",
    ctaSecondary: "Ver proyectos",
    scroll: "Baja — Sec.01 / Proyectos",
  },
  cases: {
    heading: "Casos de estudio",
    secLabel: "Sec.01 / Proyectos",
    items: [
      {
        name: "ZonaCrono",
        tag: "Producto propio de VanguardDevs",
        body: "Los organizadores de eventos deportivos gestionaban inscripciones por WhatsApp y planillas: caos, errores y horas perdidas. La solución: una plataforma donde los participantes se inscriben y pagan online. Hoy está en producción con organizadores activos procesando inscripciones reales.",
        url: "https://zonacrono.com",
      },
      {
        name: "SimpleShop",
        tag: "Work in progress",
        body: "Plataforma para organizar ventas por WhatsApp para pequeños emprendedores.",
        url: "https://simpleshop.xyz",
      },
    ],
  },
  process: {
    heading: "Cómo funciona",
    secLabel: "Sec.02 / Proceso",
    steps: [
      {
        num: "01",
        title: "Reconocimiento",
        body: "Cuenta tu idea una sola vez. Recibe un mapa de tu negocio, tu stack y tus restricciones antes de cualquier propuesta. Sin pitch decks — hallazgos.",
      },
      {
        num: "02",
        title: "Plano",
        body: "Aprueba un plan, no una promesa: alcance fijo, cronograma real y la arquitectura exacta que se va a construir. Sabes qué recibes y cuándo, antes de pagar.",
      },
      {
        num: "03",
        title: "Construcción",
        body: "Usa tu producto desde la primera semana. Entregas que puedes tocar y probar, no reportes de estatus. Revisas cada avance con quien lo construye.",
      },
      {
        num: "04",
        title: "Avance",
        body: "Lanza, mide, endurece. El go-live no es una despedida: soporte e iteración son parte del trabajo, no un extra.",
      },
    ],
    packagesIntro: "Paquetes con resultado definido, no horas.",
    packages: [
      {
        title:
          "MVP funcional en 4-6 semanas — desde $[PLACEHOLDER]: diseño, desarrollo, despliegue y 30 días de soporte.",
      },
      {
        title: "Landing page / sitio de producto — desde $[PLACEHOLDER]",
      },
      {
        title:
          "Iteración continua — desde $[PLACEHOLDER]/mes: mejoras, soporte y nuevas funcionalidades para tu producto en marcha.",
        featured: true,
      },
    ],
  },
  about: {
    heading: "Sobre el fundador",
    secLabel: "Sec.03 / Fundador",
    photoLabel: "[PLACEHOLDER: Foto de Jesus O.]",
    bio: "Jesus O. es el fundador de VanguardDevs, estudio de producto especializado en MVPs y SaaS. A diferencia de una agencia tradicional, trabajas directamente con él — quien diseña la solución es quien la construye. Ha lanzado sus propios productos (ZonaCrono, plataforma de inscripciones deportivas con clientes activos) y desarrolla software para empresas y founders de USA y LATAM. Su enfoque: lanzar rápido, validar con usuarios reales, iterar.",
  },
  contact: {
    heading: "Contacto",
    secLabel: "Sec.04 / Contacto",
    cta: "Agenda una llamada",
    linkedinLabel: "LinkedIn — [PLACEHOLDER]",
  },
  footer: {
    tagline: "vanguards.dev — Estudio de producto: MVPs y SaaS",
  },
};

const en: Dictionary = {
  meta: {
    title: "VanguardDevs — MVP & SaaS Development Studio",
    description:
      "Boutique product development studio: end-to-end MVPs and SaaS for founders and companies in the USA and LATAM. You work directly with the person who builds your product — no middlemen.",
    ogAlt: "VanguardDevs — MVP & SaaS Development Studio",
  },
  nav: {
    cases: "Projects",
    process: "How it works",
    about: "Founder",
    cta: "Book a call",
    ariaMain: "Main",
    ariaLang: "Idioma / Language",
  },
  hero: {
    ariaLabel: "Intro",
    kicker: "VanguardDevs — Product studio",
    region: "USA ▶ LATAM",
    headlineStart:
      "Your idea turned into a working product in the hands of real users —",
    headlineAccent: "in weeks, not months.",
    sub: "VanguardDevs is a product studio: end-to-end MVPs and SaaS, with a single point of contact. A studio that has launched its own SaaS products and builds for founders in the USA and LATAM.",
    ctaPrimary: "Book a call",
    ctaSecondary: "See projects",
    scroll: "Scroll — Sec.01 / Projects",
  },
  cases: {
    heading: "Case studies",
    secLabel: "Sec.01 / Projects",
    items: [
      {
        name: "ZonaCrono",
        tag: "VanguardDevs' own product",
        body: "Sports event organizers managed registrations through WhatsApp and spreadsheets: chaos, errors and lost hours. The solution: a platform where participants register and pay online. Today it is in production with active organizers processing real registrations.",
        url: "https://zonacrono.com",
      },
      {
        name: "SimpleShop",
        tag: "Work in progress",
        body: "A platform that helps small entrepreneurs organize their WhatsApp sales.",
        url: "https://simpleshop.xyz",
      },
    ],
  },
  process: {
    heading: "How it works",
    secLabel: "Sec.02 / Process",
    steps: [
      {
        num: "01",
        title: "Recon",
        body: "Tell your idea once. Get a map of your business, your stack and your constraints before any proposal. No pitch decks — findings.",
      },
      {
        num: "02",
        title: "Blueprint",
        body: "Approve a plan, not a promise: fixed scope, a real timeline and the exact architecture that will be built. You know what you get and when, before you pay.",
      },
      {
        num: "03",
        title: "Build",
        body: "Use your product from week one. Deliverables you can touch and try, not status reports. You review every increment with the person who builds it.",
      },
      {
        num: "04",
        title: "Advance",
        body: "Launch, measure, harden. Go-live is not a goodbye: support and iteration are part of the job, not an extra.",
      },
    ],
    packagesIntro: "Packages with a defined outcome, not hours.",
    packages: [
      {
        title:
          "Functional MVP in 4-6 weeks — from $[PLACEHOLDER]: design, development, deployment and 30 days of support.",
      },
      {
        title: "Landing page / product site — from $[PLACEHOLDER]",
      },
      {
        title:
          "Continuous iteration — from $[PLACEHOLDER]/month: improvements, support and new features for your live product.",
        featured: true,
      },
    ],
  },
  about: {
    heading: "About the founder",
    secLabel: "Sec.03 / Founder",
    photoLabel: "[PLACEHOLDER: Photo of Jesus O.]",
    bio: "Jesus O. is the founder of VanguardDevs, a product studio specialized in MVPs and SaaS. Unlike a traditional agency, you work directly with him — the person who designs the solution is the one who builds it. He has launched his own products (ZonaCrono, a sports registration platform with active customers) and builds software for companies and founders in the USA and LATAM. His approach: launch fast, validate with real users, iterate.",
  },
  contact: {
    heading: "Contact",
    secLabel: "Sec.04 / Contact",
    cta: "Book a call",
    linkedinLabel: "LinkedIn — [PLACEHOLDER]",
  },
  footer: {
    tagline: "vanguards.dev — Product studio: MVPs & SaaS",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
