/**
 * Mapa de URLs alternativas por idioma para hreflang y sitemap multilingüe.
 * Clave: path base en español (sin locale).
 * Valor: objeto { es, en, pt } con los paths completos.
 */
export const i18nAlternates = {
  '/': { es: '/', en: '/en', pt: '/pt' },
  '/pnr-converter': { es: '/pnr-converter', en: '/en/pnr-converter', pt: '/pt/pnr-converter' },
  '/blog': { es: '/blog', en: '/en/blog', pt: '/pt/blog' },
  '/blog/que-es-pnr': { es: '/blog/que-es-pnr', en: '/en/blog/what-is-pnr', pt: '/pt/blog/o-que-e-pnr' },
  '/blog/como-leer-pnr-amadeus': { es: '/blog/como-leer-pnr-amadeus', en: '/en/blog/how-to-read-amadeus-pnr', pt: '/pt/blog/como-ler-pnr-amadeus' },
  '/blog/convertir-pnr-pdf': { es: '/blog/convertir-pnr-pdf', en: '/en/blog/convert-pnr-to-pdf', pt: '/pt/blog/converter-pnr-pdf' },
  '/blog/calcular-comisiones-pnr': { es: '/blog/calcular-comisiones-pnr', en: '/en/blog/calculate-commissions-pnr', pt: '/pt/blog/calcular-comissoes-pnr' },
  '/blog/mejores-software-agencias-viajes': { es: '/blog/mejores-software-agencias-viajes', en: '/en/blog/best-travel-agency-software', pt: '/pt/blog/melhores-software-agencias-viagem' },
  '/blog/pnr-converter-vs-quotix': { es: '/blog/pnr-converter-vs-quotix', en: '/en/blog/pnr-converter-vs-quotix', pt: '/pt/blog/pnr-converter-vs-quotix' },
};

export const locales = ['es', 'en', 'pt'];
export const defaultLocale = 'es';

export function getLocaleFromPath(path) {
  if (path.startsWith('/en/') || path === '/en') return 'en';
  if (path.startsWith('/pt/') || path === '/pt') return 'pt';
  return 'es';
}

export function getBasePath(path) {
  let base = path;
  if (base.startsWith('/en/')) base = base.slice(3);
  else if (base.startsWith('/pt/')) base = base.slice(3);
  else if (base === '/en' || base === '/en/') base = '/';
  else if (base === '/pt' || base === '/pt/') base = '/';
  base = base.replace(/\/$/, '') || '/';
  return base;
}

export function getAlternates(path) {
  const base = getBasePath(path);
  return i18nAlternates[base] || null;
}

export function getOgLocale(locale) {
  const map = {
    es: 'es_ES',
    en: 'en_US',
    pt: 'pt_BR',
  };
  return map[locale] || 'es_ES';
}
