import type { Locale } from "./i18n";

export interface CaseItem {
  name: string;
  tag: string;
  body: string;
  /** Empty string for anonymized or unreleased work — Cases.tsx skips the link when url is "". */
  url: string;
  testimonial?: { quote: string; by: string };
}

export interface IndustryItem {
  name: string;
  body: string;
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
    industries: string;
    process: string;
    cta: string;
    ariaMain: string;
    ariaLang: string;
    menuLabel: string;
  };
  hero: {
    ariaLabel: string;
    headlineStart: string;
    headlineAccent: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  cases: {
    heading: string;
    items: CaseItem[];
  };
  industries: {
    heading: string;
    intro: string;
    items: IndustryItem[];
  };
  process: {
    heading: string;
    steps: { title: string; body: string }[];
    packagesIntro: string;
    venezuelaIntro: string;
    venezuelaCta: string;
    packages: PackageItem[];
  };
  /* Rendered only by /[lang]/jodaz — the landing page no longer has an
     About section, but the profile page still uses this copy. */
  about: {
    photoLabel: string;
    bio: string;
  };
  /* /[lang]/jodaz — the founder profile page. Body copy is deliberately NOT
     duplicated here: the page renders `about.bio` and `about.photoLabel`, so
     the introduction stays defined in exactly one place. */
  profile: {
    meta: { title: string; description: string };
    name: string;
    role: string;
    back: string;
    socialGithub: string;
    socialLinkedin: string;
    themeLabel: string;
    themeLight: string;
    themeDark: string;
  };
  contact: {
    heading: string;
    secLabel: string;
    cta: string;
    /** Booking/Calendly label. Rendered only on /en; /es keeps WhatsApp as primary CTA.
        The ES string exists purely for Dictionary type parity. */
    bookingCta: string;
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
  /* Landing-page chat widget (components/ChatWidget.tsx). Only UI chrome lives
     here — what the bot *knows* is derived from this same dictionary in
     lib/chat-prompt.ts, never typed by hand. */
  chat: {
    title: string;
    subtitle: string;
    greeting: string;
    suggestions: string[];
    placeholder: string;
    send: string;
    open: string;
    close: string;
    disclaimer: string;
    talkToHuman: string;
    error: string;
    rateLimited: string;
  };
}

const es: Dictionary = {
  meta: {
    title: "VanguardDevs — MVPs fintech, insurtech y SaaS multi-tenant",
    description:
      "Estudio boutique de producto: MVPs, SaaS multi-tenant e infraestructura embebida para fintech, insurtech y lending. Ledgers que cuadran. USA, UK y LATAM.",
    ogAlt: "VanguardDevs — MVPs fintech, insurtech y SaaS multi-tenant",
  },
  nav: {
    cases: "Proyectos",
    industries: "Industrias",
    process: "La hoja de ruta",
    cta: "Empieza ahora",
    ariaMain: "Principal",
    ariaLang: "Idioma / Language",
    menuLabel: "Menú",
  },
  hero: {
    ariaLabel: "Introducción",
    headlineStart:
      "Tu idea convertida en un producto funcionando y en manos de usuarios reales —",
    headlineAccent: "en semanas, no meses.",
    sub: "Estudio de producto para fintech, insurtech y lending: MVPs, SaaS multi-tenant e infraestructura embebida (widgets, SDKs y APIs para partners). Sistemas donde el dinero debe cuadrar —ledgers, conciliación, redenciones, integraciones de pago— en remoto con clientes de USA, UK y LATAM.",
    ctaPrimary: "Empieza ahora",
    ctaSecondary: "Ver proyectos",
  },
  cases: {
    heading: "Casos de estudio",
    items: [
      {
        name: "Insurtech · Reino Unido",
        tag: "Anonimizado — sector seguros, UK",
        body: "Las aseguradoras perdían clientes en la renovación, sin herramientas de retención en su propio portal. Decisiones técnicas: retención embebida como widget, integrada vía API con los sistemas del partner, sin migrar nada. Resultado: en producción dentro de portales de aseguradoras del Reino Unido.",
        // url vacío: caso anonimizado sin URL pública. Cases.tsx omite el enlace cuando url === "".
        url: "",
        testimonial: { quote: "[PLACEHOLDER]", by: "[PLACEHOLDER]" },
      },
      {
        name: "Plataforma de cashback multi-tenant",
        tag: "Anonimizado — fintech, multi-marca",
        body: "Varias marcas querían ofrecer cashback sin construir cada una su infraestructura ni mezclar sus datos. Decisiones técnicas: widget embebible y API para partners sobre un ledger de doble entrada, con aislamiento multi-tenant en la base de datos vía Row Level Security, no en la capa de aplicación. Resultado: cada marca opera aislada y los saldos cuadran contra el proveedor externo.",
        // url vacío: caso anonimizado sin URL pública. Cases.tsx omite el enlace cuando url === "".
        url: "",
        testimonial: { quote: "[PLACEHOLDER]", by: "[PLACEHOLDER]" },
      },
      {
        name: "ZonaCrono",
        tag: "Producto propio — inscripciones deportivas",
        body: "Los organizadores gestionaban inscripciones por WhatsApp y planillas: caos, errores y horas perdidas. Decisiones técnicas: inscripción y pago online, con reserva atómica de cupos en el checkout para cerrar la condición de carrera que vendía más plazas de las disponibles. Resultado: en producción, con organizadores que pagan por usarlo.",
        url: "https://zonacrono.com",
      },
      {
        name: "Akomo",
        tag: "Datos de tipo de cambio — Venezuela",
        body: "Venezuela opera con dos tasas de cambio a la vez, sin una fuente única que registre ambas en el tiempo. Decisiones técnicas: el bolívar (VES) frente a USD, EUR y USDT desde el BCV y Binance P2P, sobre un log append-only: cada sync agrega una fila, ninguna se actualiza. Resultado: todo lo demás es una superficie sobre ese log — ese es el foso.",
        // url vacío: aún sin URL pública. Cases.tsx omite el enlace cuando url === "".
        url: "",
      },
    ],
  },
  industries: {
    heading: "Industrias",
    intro: "Producto y arquitectura para sectores donde el dinero debe cuadrar.",
    items: [
      {
        name: "Fintech",
        body: "Plataforma de cashback multi-tenant con ledger de doble entrada, API para partners y redención contra un proveedor externo.",
      },
      {
        name: "Insurtech",
        body: "Plataforma de retención embebida dentro de los portales de aseguradoras del Reino Unido.",
      },
      {
        name: "Lending",
        body: "[PLACEHOLDER]",
      },
    ],
  },
  process: {
    heading: "La hoja de ruta",
    steps: [
      {
        title: "Reconocimiento",
        body: "Cuenta tu idea una sola vez. Recibe un mapa de tu negocio, tu stack y tus restricciones antes de cualquier propuesta. Sin pitch decks — hallazgos.",
      },
      {
        title: "Plano",
        body: "Aprueba un plan, no una promesa: alcance fijo, cronograma real y la arquitectura exacta que se va a construir. Sabes qué recibes y cuándo, antes de pagar.",
      },
      {
        title: "Construcción",
        body: "Usa tu producto desde la primera semana. Entregas que puedes tocar y probar, no reportes de estatus. Revisas cada avance con quien lo construye.",
      },
      {
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
        price: "desde $4.000-5.000",
        body: "Tu idea convertida en producto real en 4-6 semanas: diseño, desarrollo, despliegue, integraciones de pago o de terceros y 30 días de soporte. Alcance fijo, fecha de lanzamiento clara y trato directo con quien lo construye.",
      },
      {
        title: "Landing page / sitio de producto / Ecommerce",
        price: "desde $[PLACEHOLDER]",
        body: "Una página diseñada para convertir: presenta tu producto, capta usuarios o valida tu idea antes de construirla. Diseño a medida, analítica y despliegue incluidos. Lista y publicada en días, no meses.",
      },
      {
        title: "Iteración continua",
        price: "desde $[PLACEHOLDER]/mes",
        body: "Tu producto no se detiene después del lanzamiento: mejoras, soporte y nuevas funcionalidades cada mes, con horas de dedicación garantizadas y prioridad en la agenda.",
      },
    ],
  },
  about: {
    photoLabel: "Jesus O., fundador de VanguardDevs",
    bio: "Jesus O. es el fundador de VanguardDevs, estudio de producto especializado en MVPs y SaaS. Ocho años como desarrollador full-stack, con foco en fintech e insurtech, trabajando en remoto para clientes del Reino Unido, Estados Unidos y LATAM desde Venezuela. A diferencia de una agencia tradicional, trabajas directamente con él — quien diseña la solución es quien la construye. Tiene producto propio en producción y con clientes que pagan (ZonaCrono, plataforma de inscripciones deportivas). Su enfoque: lanzar rápido, validar con usuarios reales, iterar.",
  },
  profile: {
    meta: {
      title: "Jesus Ordosgoitty — Fundador de VanguardDevs",
      description:
        "Jesus Ordosgoitty, desarrollador full-stack y fundador de VanguardDevs. Ocho años construyendo producto en fintech e insurtech para clientes de Reino Unido, Estados Unidos y LATAM.",
    },
    name: "Jesus Ordosgoitty",
    role: "Fundador de VanguardDevs · Desarrollador full-stack",
    back: "Volver a VanguardDevs",
    socialGithub: "GitHub",
    socialLinkedin: "LinkedIn",
    themeLabel: "Tema",
    themeLight: "Claro",
    themeDark: "Oscuro",
  },
  contact: {
    heading: "Contacto",
    secLabel: "Contacto",
    cta: "Empieza ahora",
    // Solo se renderiza en /en; en /es el CTA primario sigue siendo WhatsApp.
    bookingCta: "Agenda una llamada",
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
  /* DRAFT — UI copy taken from the owner's widget/ drop, adjusted only for the
     impersonal-voice and real-name rules; pending owner review. */
  chat: {
    title: "VanguardDevs",
    subtitle: "Asistente · respuestas en segundos",
    greeting:
      "Hola 👋 Pregunta por los paquetes, el proceso o los tiempos de entrega.",
    suggestions: [
      "¿Cuánto cuesta un MVP?",
      "¿En cuánto tiempo se entrega?",
      "¿Cómo es el proceso?",
    ],
    placeholder: "Escribe tu pregunta",
    send: "Enviar mensaje",
    open: "Abrir chat",
    close: "Cerrar chat",
    disclaimer: "Respuestas generadas por IA.",
    talkToHuman: "Hablar con Jesus O.",
    error: "No hay respuesta disponible ahora mismo. Escribe por WhatsApp.",
    rateLimited: "Demasiados mensajes. Espera un momento.",
  },
};

const en: Dictionary = {
  meta: {
    title: "VanguardDevs — Fintech, insurtech & multi-tenant SaaS MVPs",
    description:
      "Boutique product studio: MVPs, multi-tenant SaaS and embedded infrastructure for fintech, insurtech and lending. Ledgers that balance. USA, UK and LATAM.",
    ogAlt: "VanguardDevs — Fintech, insurtech & multi-tenant SaaS MVPs",
  },
  nav: {
    cases: "Projects",
    industries: "Industries",
    process: "The roadmap",
    cta: "Start now",
    ariaMain: "Main",
    ariaLang: "Idioma / Language",
    menuLabel: "Menu",
  },
  hero: {
    ariaLabel: "Intro",
    headlineStart:
      "Your idea turned into a working product in the hands of real users —",
    headlineAccent: "in weeks, not months.",
    sub: "A product studio for fintech, insurtech and lending: MVPs, multi-tenant SaaS and embedded infrastructure — widgets, SDKs and partner APIs. Built for systems where the money has to balance: ledgers, reconciliation, redemptions, payment integrations. Remote, with clients in the USA, UK and LATAM.",
    ctaPrimary: "Start now",
    ctaSecondary: "See projects",
  },
  cases: {
    heading: "Case studies",
    items: [
      {
        name: "Insurtech · United Kingdom",
        tag: "Anonymized — insurance sector, UK",
        body: "Insurers were losing customers at renewal, with no retention tooling inside their own portal. Technical decisions: retention embedded as a widget and wired to the partner's systems through an API, with nothing to migrate. Result: running in production inside UK insurer portals.",
        // Empty url: anonymized case with no public URL. Cases.tsx skips the link when url === "".
        url: "",
        testimonial: { quote: "[PLACEHOLDER]", by: "[PLACEHOLDER]" },
      },
      {
        name: "Multi-tenant cashback platform",
        tag: "Anonymized — fintech, multi-brand",
        body: "Several brands wanted to offer cashback without each building the infrastructure, and without their data ever mixing. Technical decisions: an embeddable widget and a partner API over a double-entry ledger, with multi-tenant isolation enforced in the database through Row Level Security rather than in application code. Result: every brand runs isolated, and balances reconcile against the external provider.",
        // Empty url: anonymized case with no public URL. Cases.tsx skips the link when url === "".
        url: "",
        testimonial: { quote: "[PLACEHOLDER]", by: "[PLACEHOLDER]" },
      },
      {
        name: "ZonaCrono",
        tag: "Own product — race registration",
        body: "Organizers ran registrations through WhatsApp and spreadsheets: chaos, errors and lost hours. Technical decisions: online registration and payment, with atomic slot reservation at checkout to close the race condition that oversold places when several people paid at once. Result: in production, with paying organizers.",
        url: "https://zonacrono.com",
      },
      {
        name: "Akomo",
        tag: "Exchange-rate data — Venezuela",
        body: "Venezuela runs on two exchange rates at once, with no single source recording both over time. Technical decisions: the bolívar (VES) against USD, EUR and USDT from the central bank (BCV) and Binance P2P, on an append-only log — every sync appends a row, none are updated. Result: everything else is a surface over that log, and the log is the moat.",
        // Empty url: no public URL yet. Cases.tsx skips the link when url === "".
        url: "",
      },
    ],
  },
  industries: {
    heading: "Industries",
    intro: "Product and architecture for sectors where the money has to balance.",
    items: [
      {
        name: "Fintech",
        body: "A multi-tenant cashback platform with a double-entry ledger, a partner API and redemption against an external provider.",
      },
      {
        name: "Insurtech",
        body: "A retention platform embedded inside UK insurer portals.",
      },
      {
        name: "Lending",
        body: "[PLACEHOLDER]",
      },
    ],
  },
  process: {
    heading: "The roadmap",
    steps: [
      {
        title: "Recon",
        body: "Walk through the idea once. Get a map of your business, your stack and your constraints before any proposal. No pitch decks — findings.",
      },
      {
        title: "Blueprint",
        body: "Approve a plan, not a promise: fixed scope, a real timeline and the exact architecture that will be built. You know what you get and when, before you pay.",
      },
      {
        title: "Build",
        body: "Use your product from week one. Deliverables you can click through, not status reports. You review every increment with the person who builds it.",
      },
      {
        title: "Launch",
        body: "Launch, measure, harden. Go-live is not a goodbye: support and iteration are part of the job, not an extra.",
      },
    ],
    packagesIntro: "Packages with a defined outcome, not hours.",
    venezuelaIntro: "Are you from Venezuela 🇻🇪?",
    venezuelaCta: "Ask about a special price for you",
    packages: [
      {
        title: "Functional MVP",
        price: "from $4,000-5,000",
        body: "Your idea turned into a real product in 4-6 weeks: design, development, deployment, payment or third-party integrations, and 30 days of support. Fixed scope, a clear launch date, and you deal directly with the person who builds it.",
      },
      {
        title: "Landing page / product site / Ecommerce",
        price: "from $[PLACEHOLDER]",
        body: "A page designed to convert: showcase your product, capture users, or validate your idea before you build it. Custom design, analytics, and deployment included. Live and published in days, not months.",
      },
      {
        title: "Ongoing iteration",
        price: "from $[PLACEHOLDER]/mo",
        body: "Your product doesn't stop after launch: improvements, support, and new features every month, with guaranteed dedicated hours and priority scheduling.",
      },
    ],
  },
  about: {
    photoLabel: "Jesus O., founder of VanguardDevs",
    bio: "Jesus O. is the founder of VanguardDevs, a product studio specialized in MVPs and SaaS. Eight years as a full-stack developer, focused on fintech and insurtech, working remotely for clients in the UK, the USA and LATAM from Venezuela. Unlike a traditional agency, you work directly with him — the person who designs the solution is the one who builds it. He runs his own product in production with paying customers (ZonaCrono, a sports registration platform). His approach: launch fast, validate with real users, iterate.",
  },
  profile: {
    meta: {
      title: "Jesus Ordosgoitty — Founder of VanguardDevs",
      description:
        "Jesus Ordosgoitty, full-stack developer and founder of VanguardDevs. Eight years building product in fintech and insurtech for clients in the UK, the USA and LATAM.",
    },
    name: "Jesus Ordosgoitty",
    role: "Founder of VanguardDevs · Full-stack developer",
    back: "Back to VanguardDevs",
    socialGithub: "GitHub",
    socialLinkedin: "LinkedIn",
    themeLabel: "Theme",
    themeLight: "Light",
    themeDark: "Dark",
  },
  contact: {
    heading: "Contact",
    secLabel: "Contact",
    cta: "Start now",
    // Rendered on /en only — the booking link is the primary CTA here; /es keeps WhatsApp.
    bookingCta: "Book a call",
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
  /* DRAFT — English rewrite of the ES chat chrome; pending owner review. */
  chat: {
    title: "VanguardDevs",
    subtitle: "Assistant · answers in seconds",
    greeting: "Hi 👋 Ask about packages, the process or delivery times.",
    suggestions: [
      "How much does an MVP cost?",
      "How long does delivery take?",
      "What does the process look like?",
    ],
    placeholder: "Type your question",
    send: "Send message",
    open: "Open chat",
    close: "Close chat",
    disclaimer: "AI-generated answers.",
    talkToHuman: "Talk to Jesus O.",
    error: "No answer available right now. Reach out on WhatsApp.",
    rateLimited: "Too many messages. Give it a moment.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
