export interface Plan {
  slug: string;
  nombre: string;
  max_users: number | null;
  max_cotizaciones_por_mes: number | null;
  max_paquetes: number | null;
  permite_dominio_propio: boolean;
  precio_mensual_usd: number;
  precio_usuario_extra_usd: number;
  destacado?: boolean;
}

export const plans: Plan[] = [
  {
    slug: "free",
    nombre: "Free",
    max_users: 1,
    max_cotizaciones_por_mes: 10,
    max_paquetes: 1,
    permite_dominio_propio: false,
    precio_mensual_usd: 0,
    precio_usuario_extra_usd: 0
  },
  {
    slug: "freelance",
    nombre: "Freelance",
    max_users: 1,
    max_cotizaciones_por_mes: 50,
    max_paquetes: 5,
    permite_dominio_propio: false,
    precio_mensual_usd: 29,
    precio_usuario_extra_usd: 0
  },
  {
    slug: "pro-agencia",
    nombre: "Pro Agencia",
    max_users: 2,
    max_cotizaciones_por_mes: 200,
    max_paquetes: 10,
    permite_dominio_propio: true,
    precio_mensual_usd: 49,
    precio_usuario_extra_usd: 10,
    destacado: true
  },
  {
    slug: "pro-ilimitado",
    nombre: "Pro Ilimitado",
    max_users: 2,
    max_cotizaciones_por_mes: null,
    max_paquetes: null,
    permite_dominio_propio: true,
    precio_mensual_usd: 79,
    precio_usuario_extra_usd: 10
  }
];
