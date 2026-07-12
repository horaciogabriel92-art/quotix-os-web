export interface Plan {
  slug: string;
  nombre: string;
  subtitulo: string;
  precio_mensual_usd: number;
  precio_usuario_extra_usd: number;
  max_users: number | null;
  max_cotizaciones_por_mes: number | null;
  max_paquetes: number | null;
  permite_dominio_propio: boolean;
  destacado?: boolean;
  icono: string;
  cta: string;
  features: Feature[];
}

export interface Feature {
  text: string;
  incluido: boolean;
}

const featuresBase: Feature[] = [
  { text: "Cotizaciones en PDF en minutos", incluido: true },
  { text: "CRM para agentes de viajes", incluido: true },
  { text: "Kanban de cotizaciones", incluido: true }
];

export const plans: Plan[] = [
  {
    slug: "freelance",
    nombre: "Freelance",
    subtitulo: "Para agentes independientes",
    precio_mensual_usd: 29,
    precio_usuario_extra_usd: 0,
    max_users: 1,
    max_cotizaciones_por_mes: 50,
    max_paquetes: 5,
    permite_dominio_propio: false,
    icono: "🧳",
    cta: "Probar gratis 7 días",
    features: [
      ...featuresBase,
      { text: "1 usuario", incluido: true },
      { text: "50 cotizaciones / mes", incluido: true },
      { text: "5 paquetes", incluido: true },
      { text: "Subdominio .travel.quotixos.com", incluido: true },
      { text: "Emails automáticos", incluido: true },
      { text: "Dominio propio", incluido: false },
      { text: "Soporte prioritario", incluido: false },
      { text: "Integración Amadeus / PNR", incluido: false },
      { text: "Control de comisiones avanzado", incluido: false },
      { text: "Vouchers y documentos de viaje", incluido: false },
      { text: "Reportes", incluido: false }
    ]
  },
  {
    slug: "pro-agencia",
    nombre: "Pro Agencia",
    subtitulo: "Para agencias en crecimiento",
    precio_mensual_usd: 49,
    precio_usuario_extra_usd: 10,
    max_users: 2,
    max_cotizaciones_por_mes: 200,
    max_paquetes: 10,
    permite_dominio_propio: true,
    destacado: true,
    icono: "🚀",
    cta: "Probar gratis 7 días",
    features: [
      ...featuresBase,
      { text: "2 usuarios incluidos", incluido: true },
      { text: "200 cotizaciones / mes", incluido: true },
      { text: "10 paquetes", incluido: true },
      { text: "Dominio propio incluido", incluido: true },
      { text: "Emails automáticos", incluido: true },
      { text: "Soporte prioritario", incluido: true },
      { text: "Integración Amadeus / PNR", incluido: true },
      { text: "Reportes", incluido: true },
      { text: "+$10 / mes por usuario extra", incluido: true },
      { text: "Control de comisiones avanzado", incluido: false },
      { text: "Vouchers y documentos de viaje", incluido: false }
    ]
  },
  {
    slug: "pro-ilimitado",
    nombre: "Pro Ilimitado",
    subtitulo: "Para agencias que venden en serio",
    precio_mensual_usd: 79,
    precio_usuario_extra_usd: 10,
    max_users: 2,
    max_cotizaciones_por_mes: null,
    max_paquetes: null,
    permite_dominio_propio: true,
    icono: "👑",
    cta: "Probar gratis 7 días",
    features: [
      ...featuresBase,
      { text: "2 usuarios incluidos", incluido: true },
      { text: "Cotizaciones ilimitadas", incluido: true },
      { text: "Paquetes ilimitados", incluido: true },
      { text: "Dominio propio incluido", incluido: true },
      { text: "Emails automáticos", incluido: true },
      { text: "Soporte prioritario", incluido: true },
      { text: "Integración Amadeus / PNR", incluido: true },
      { text: "Control de comisiones avanzado", incluido: true },
      { text: "Vouchers y documentos de viaje", incluido: true },
      { text: "Reportes", incluido: true },
      { text: "+$10 / mes por usuario extra", incluido: true }
    ]
  },
  {
    slug: "free",
    nombre: "Free",
    subtitulo: "Para probar sin compromiso",
    precio_mensual_usd: 0,
    precio_usuario_extra_usd: 0,
    max_users: 1,
    max_cotizaciones_por_mes: 10,
    max_paquetes: 1,
    permite_dominio_propio: false,
    icono: "",
    cta: "Empezar gratis",
    features: [
      ...featuresBase,
      { text: "1 usuario", incluido: true },
      { text: "10 cotizaciones / mes", incluido: true },
      { text: "1 paquete", incluido: true },
      { text: "Subdominio .travel.quotixos.com", incluido: true },
      { text: "Emails automáticos", incluido: false },
      { text: "Dominio propio", incluido: false },
      { text: "Soporte prioritario", incluido: false },
      { text: "Integración Amadeus / PNR", incluido: false },
      { text: "Control de comisiones avanzado", incluido: false },
      { text: "Vouchers y documentos de viaje", incluido: false },
      { text: "Reportes", incluido: false }
    ]
  }
];
