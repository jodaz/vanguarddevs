import type { Locale } from "./i18n";

export interface CaseItem {
  name: string;
  tag: string;
  body: string;
  url: string;
}

export interface PackageItem {
  title: string;
  price: string;
  body: string;
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
    cta: string;
    ariaMain: string;
    ariaLang: string;
    menuLabel: string;
  };
  hero: {
    ariaLabel: string;
    region: string;
    headlineStart: string;
    headlineAccent: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
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
    venezuelaIntro: string;
    venezuelaCta: string;
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
    socialLinkedin: string;
    socialInstagram: string;
  };
  footer: {
    tagline: string;
    credit: string;
    privacyLink: string;
    cookieSettings: string;
  };
  cookieBanner: {
    message: string;
    accept: string;
    reject: string;
    policyLinkLabel: string;
  };
  privacy: {
    meta: {
      title: string;
      description: string;
    };
    title: string;
    sections: { heading: string; body: string }[];
  };
  notFound: {
    badge: string;
    stackLine1: string;
    stackLine2: string;
    cta: string;
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
    process: "La hoja de ruta",
    cta: "Empieza ahora",
    ariaMain: "Principal",
    ariaLang: "Idioma / Language",
    menuLabel: "Menú",
  },
  hero: {
    ariaLabel: "Introducción",
    region: "USA ▶ LATAM",
    headlineStart:
      "Tu idea convertida en un producto funcionando y en manos de usuarios reales —",
    headlineAccent: "en semanas, no meses.",
    sub: "VanguardDevs es un estudio de producto: MVPs y SaaS de punta a punta, con un solo interlocutor. Un estudio que ha lanzado sus propios SaaS y construye productos para founders de USA y LATAM.",
    ctaPrimary: "Empieza ahora",
    ctaSecondary: "Ver proyectos",
  },
  cases: {
    heading: "Casos de estudio",
    secLabel: "Proyectos",
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
    heading: "La hoja de ruta",
    secLabel: "Proceso",
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
    venezuelaIntro: "¿Eres de Venezuela 🇻🇪?",
    venezuelaCta: "Pregunta por un precio especial para ti",
    packages: [
      {
        title: "MVP funcional",
        price: "desde $1,000",
        body: "Tu idea convertida en producto real en 4-6 semanas: diseño, desarrollo, despliegue y 30 días de soporte. Alcance fijo, fecha de lanzamiento clara y trato directo con quien lo construye.",
      },
      {
        title: "Landing page / sitio de producto / Ecommerce",
        price: "desde $300",
        body: "Una página diseñada para convertir: presenta tu producto, capta usuarios o valida tu idea antes de construirla. Lista y publicada en días, no meses.",
      },
      {
        title: "Iteración continua",
        price: "precios acordados",
        body: "Tu producto no se detiene después del lanzamiento: mejoras, soporte y nuevas funcionalidades cada mes, con horas de dedicación garantizadas y prioridad en la agenda.",
      },
    ],
  },
  about: {
    heading: "Sobre el fundador",
    secLabel: "Fundador",
    photoLabel: "Jesus O., fundador de VanguardDevs",
    bio: "Jesus O. es el fundador de VanguardDevs, estudio de producto especializado en MVPs y SaaS. A diferencia de una agencia tradicional, trabajas directamente con él — quien diseña la solución es quien la construye. Ha lanzado sus propios productos (ZonaCrono, plataforma de inscripciones deportivas con clientes activos) y desarrolla software para empresas y founders de USA y LATAM. Su enfoque: lanzar rápido, validar con usuarios reales, iterar.",
  },
  contact: {
    heading: "Contacto",
    secLabel: "Contacto",
    cta: "Empieza ahora",
    socialLinkedin: "LinkedIn",
    socialInstagram: "Instagram",
  },
  footer: {
    tagline: "vanguarddevs.com",
    credit: "Diseñado por",
    privacyLink: "Privacidad",
    cookieSettings: "Cookies",
  },
  cookieBanner: {
    message:
      "Este sitio usa una cookie de analítica opcional (Google Analytics) solo si la aceptas.",
    accept: "Aceptar",
    reject: "Rechazar",
    policyLinkLabel: "Política de privacidad",
  },
  /* DRAFT — pending owner/legal review, not verbatim owner-supplied copy.
     Describes the site's actual, current data practices (no forms, optional
     GA4 gated by consent, no other collection) in the required impersonal
     voice. See docs/plans/analytics-cookie-consent.md. */
  privacy: {
    meta: {
      title: "Política de privacidad — VanguardDevs",
      description:
        "Cómo vanguarddevs.com usa cookies de analítica opcionales y por qué no recopila datos personales a través de formularios.",
    },
    title: "Política de privacidad",
    sections: [
      {
        heading: "Alcance",
        body: "Esta política describe qué datos recopila el sitio vanguarddevs.com y cómo los usa. El sitio no tiene formularios: todo contacto ocurre a través de enlaces externos (WhatsApp, correo, LinkedIn, Instagram), cada uno regido por la política de privacidad de su propio proveedor.",
      },
      {
        heading: "Cookies y analítica",
        body: "El sitio guarda una cookie técnica (vg_consent) para recordar, por unos 180 días, si aceptaste o rechazaste las cookies de analítica. Al aceptar, se activa Google Analytics 4 para registrar visitas de página; al rechazar, ningún script de analítica se carga y no se establece ninguna cookie adicional.",
      },
      {
        heading: "Datos que no se recopilan",
        body: "Más allá de la cookie de consentimiento y, si aceptaste, las cookies de Google Analytics 4, el sitio no recopila datos personales: no hay formularios, cuentas de usuario ni almacenamiento de información enviada por quienes lo visitan.",
      },
      {
        heading: "Proveedores externos",
        body: "Cuando las cookies de analítica están activas, Google LLC procesa datos de uso agregados como proveedor de Google Analytics 4, bajo su propia política de privacidad. Los enlaces de contacto (WhatsApp, LinkedIn, Instagram) llevan a servicios de terceros ajenos a esta política.",
      },
      {
        heading: "Tus derechos",
        body: "VanguardDevs opera bajo la jurisdicción de la República Bolivariana de Venezuela. De acuerdo con el artículo 28 de la Constitución de la República Bolivariana de Venezuela, quienes visitan el sitio tienen derecho de hábeas data: acceder a la información que se recopile sobre sí mismos, conocer la finalidad y el uso que se le da, y solicitar su corrección, actualización o eliminación cuando sea inexacta o afecte ilegítimamente sus derechos.",
      },
      {
        heading: "Cambios a esta política",
        body: "Esta política puede actualizarse para reflejar cambios en las prácticas del sitio. Última actualización: 6 de julio de 2026.",
      },
      {
        heading: "Contacto",
        body: "Para consultas sobre esta política, contacta a VanguardDevs por cualquiera de los canales listados en la sección de contacto del sitio.",
      },
    ],
  },
  notFound: {
    badge: "ERR_RUTA_NO_COMPILA",
    stackLine1: "at resolve(esta/ruta) — ausente del árbol de rutas",
    stackLine2: "at build(vanguarddevs.com) — nunca llegó a producción",
    cta: "Volver al inicio",
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
    process: "The roadmap",
    cta: "Start now",
    ariaMain: "Main",
    ariaLang: "Idioma / Language",
    menuLabel: "Menu",
  },
  hero: {
    ariaLabel: "Intro",
    region: "USA ▶ LATAM",
    headlineStart:
      "Your idea turned into a working product in the hands of real users —",
    headlineAccent: "in weeks, not months.",
    sub: "VanguardDevs is a product studio: end-to-end MVPs and SaaS, with a single point of contact. A studio that has launched its own SaaS products and builds for founders in the USA and LATAM.",
    ctaPrimary: "Start now",
    ctaSecondary: "See projects",
  },
  cases: {
    heading: "Case studies",
    secLabel: "Projects",
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
    heading: "The roadmap",
    secLabel: "Process",
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
    venezuelaIntro: "Are you from Venezuela 🇻🇪?",
    venezuelaCta: "Ask about a special price for you",
    packages: [
      {
        title: "Functional MVP",
        price: "from $1,000",
        body: "Your idea turned into a real product in 4-6 weeks: design, development, deployment, and 30 days of support. Fixed scope, a clear launch date, and direct dealings with whoever builds it.",
      },
      {
        title: "Landing page / product site / Ecommerce",
        price: "from $300",
        body: "A page designed to convert: showcase your product, capture users, or validate your idea before you build it. Live and published in days, not months.",
      },
      {
        title: "Ongoing iteration",
        price: "pricing by agreement",
        body: "Your product doesn't stop after launch: improvements, support, and new features every month, with guaranteed dedicated hours and priority on the schedule.",
      },
    ],
  },
  about: {
    heading: "About the founder",
    secLabel: "Founder",
    photoLabel: "Jesus O., founder of VanguardDevs",
    bio: "Jesus O. is the founder of VanguardDevs, a product studio specialized in MVPs and SaaS. Unlike a traditional agency, you work directly with him — the person who designs the solution is the one who builds it. He has launched his own products (ZonaCrono, a sports registration platform with active customers) and builds software for companies and founders in the USA and LATAM. His approach: launch fast, validate with real users, iterate.",
  },
  contact: {
    heading: "Contact",
    secLabel: "Contact",
    cta: "Start now",
    socialLinkedin: "LinkedIn",
    socialInstagram: "Instagram",
  },
  footer: {
    tagline: "vanguarddevs.com",
    credit: "Designed by",
    privacyLink: "Privacy",
    cookieSettings: "Cookies",
  },
  cookieBanner: {
    message:
      "This site uses an optional analytics cookie (Google Analytics) only if you accept it.",
    accept: "Accept",
    reject: "Reject",
    policyLinkLabel: "Privacy policy",
  },
  /* DRAFT — pending owner/legal review, not verbatim owner-supplied copy.
     Describes the site's actual, current data practices (no forms, optional
     GA4 gated by consent, no other collection) in the required impersonal
     voice. See docs/plans/analytics-cookie-consent.md. */
  privacy: {
    meta: {
      title: "Privacy policy — VanguardDevs",
      description:
        "How vanguarddevs.com uses optional analytics cookies and why it doesn't collect personal data through forms.",
    },
    title: "Privacy policy",
    sections: [
      {
        heading: "Scope",
        body: "This policy describes what data the vanguarddevs.com site collects and how it is used. The site has no forms: all contact happens through external links (WhatsApp, email, LinkedIn, Instagram), each governed by its own provider's privacy policy.",
      },
      {
        heading: "Cookies and analytics",
        body: "The site stores a technical cookie (vg_consent) to remember, for about 180 days, whether analytics cookies were accepted or rejected. Accepting activates Google Analytics 4 to record pageviews; rejecting means no analytics script loads and no additional cookie is set.",
      },
      {
        heading: "Data not collected",
        body: "Beyond the consent cookie and, if accepted, the Google Analytics 4 cookies, the site does not collect personal data: there are no forms, user accounts, or storage of information submitted by visitors.",
      },
      {
        heading: "Third-party providers",
        body: "When analytics cookies are active, Google LLC processes aggregated usage data as the Google Analytics 4 provider, under its own privacy policy. The contact links (WhatsApp, LinkedIn, Instagram) lead to third-party services outside the scope of this policy.",
      },
      {
        heading: "Your rights",
        body: "VanguardDevs operates under the jurisdiction of the Bolivarian Republic of Venezuela. Under Article 28 of the Constitution of the Bolivarian Republic of Venezuela, visitors have habeas data rights: to access information collected about themselves, to know its purpose and use, and to request its correction, update, or deletion when it is inaccurate or unlawfully affects their rights.",
      },
      {
        heading: "Changes to this policy",
        body: "This policy may be updated to reflect changes in the site's practices. Last updated: July 6, 2026.",
      },
      {
        heading: "Contact",
        body: "For questions about this policy, contact VanguardDevs through any of the channels listed in the site's contact section.",
      },
    ],
  },
  notFound: {
    badge: "ERR_ROUTE_NOT_COMPILED",
    stackLine1: "at resolve(this/path) — missing from the route tree",
    stackLine2: "at build(vanguarddevs.com) — never shipped to production",
    cta: "Back to homepage",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
