export type Lang = 'es' | 'en' | 'pt';

export interface Translations {
  // PnrConverterTool
  inputLabel: string;
  loadSample: string;
  placeholder: string;
  convertButton: string;
  decoding: string;
  privacyNote: string;
  errorEmpty: string;
  errorInvalid: string;
  errorNoFlights: string;

  // PnrResults
  optionsToggleShow: string;
  optionsToggleHide: string;
  toggleLogo: string;
  toggleDuration: string;
  toggleClass: string;
  toggleAircraft: string;
  itineraryTitle: string;
  flightSingular: string;
  flightPlural: string;
  copyNote: string;

  // PnrFlightCard
  classLabel: string;
  daySingular: string;
  dayPlural: string;
  timeAm: string;
  timePm: string;
  days: string[];
  months: string[];

  // TrialCTA
  trialEyebrow: string;
  trialTitle: string;
  trialDescription: string;
  trialCta: string;

  // CopyResultButton
  copyButton: string;
  copiedButton: string;

  // AdSlot
  adLabel: string;
}

export const translations: Record<Lang, Translations> = {
  es: {
    inputLabel: 'Pegá el PNR de Amadeus',
    loadSample: 'Ver ejemplo',
    placeholder: `Ejemplo:
RP/ABC12345/ABC12345
 1.GONZALEZ/MARIA MS
 2.PEREZ/JUAN MR
 1 UX  46 Z 17OCT 6 MVDMAD HK1  1220 0510+1  E 0 789
 2 UX  45 Z 02NOV 2 MADMVD HK1  2345 0825+1  E 0 789`,
    convertButton: 'Convertir PNR',
    decoding: 'Decodificando...',
    privacyNote: 'Gratis, sin registro y 100% privado: no guardamos tu PNR.',
    errorEmpty: 'Pegá el código PNR de Amadeus para comenzar.',
    errorInvalid:
      'El texto no parece ser un PNR de Amadeus válido. Verificá que incluya segmentos de vuelo con fechas, aeropuertos y códigos de estado (HK, DK, etc.).',
    errorNoFlights: 'No se pudieron encontrar vuelos válidos en el PNR.',
    optionsToggleShow: 'Opciones de visualización',
    optionsToggleHide: 'Ocultar opciones',
    toggleLogo: 'Mostrar logo',
    toggleDuration: 'Mostrar duración',
    toggleClass: 'Mostrar clase',
    toggleAircraft: 'Mostrar aeronave',
    itineraryTitle: 'Itinerario',
    flightSingular: 'vuelo',
    flightPlural: 'vuelos',
    copyNote: 'Formato visual para compartir o capturar pantalla.',
    classLabel: 'Clase',
    daySingular: 'día',
    dayPlural: 'días',
    timeAm: 'a. m.',
    timePm: 'p. m.',
    days: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    months: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    trialEyebrow: '¿Cotizás viajes?',
    trialTitle: 'Convertí este PNR en una cotización PDF profesional',
    trialDescription:
      'Probá Quotix gratis por 7 días. Pegá tu PNR, agregá hoteles, traslados y seguros, y enviale a tu cliente un PDF visual en segundos.',
    trialCta: 'Probar gratis 7 días',
    copyButton: 'Copiar resultado',
    copiedButton: 'Copiado',
    adLabel: 'Publicidad',
  },
  en: {
    inputLabel: 'Paste the Amadeus PNR',
    loadSample: 'See example',
    placeholder: `Example:
RP/ABC12345/ABC12345
 1.GONZALEZ/MARIA MS
 2.PEREZ/JUAN MR
 1 UX  46 Z 17OCT 6 MVDMAD HK1  1220 0510+1  E 0 789
 2 UX  45 Z 02NOV 2 MADMVD HK1  2345 0825+1  E 0 789`,
    convertButton: 'Convert PNR',
    decoding: 'Decoding...',
    privacyNote: 'Free, no signup, 100% private: we do not store your PNR.',
    errorEmpty: 'Paste the Amadeus PNR code to start.',
    errorInvalid:
      'The text does not appear to be a valid Amadeus PNR. Make sure it includes flight segments with dates, airports and status codes (HK, DK, etc.).',
    errorNoFlights: 'No valid flights were found in the PNR.',
    optionsToggleShow: 'Display options',
    optionsToggleHide: 'Hide options',
    toggleLogo: 'Show logo',
    toggleDuration: 'Show duration',
    toggleClass: 'Show class',
    toggleAircraft: 'Show aircraft',
    itineraryTitle: 'Itinerary',
    flightSingular: 'flight',
    flightPlural: 'flights',
    copyNote: 'Visual format to share or screenshot.',
    classLabel: 'Class',
    daySingular: 'day',
    dayPlural: 'days',
    timeAm: 'am',
    timePm: 'pm',
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    trialEyebrow: 'Do you quote trips?',
    trialTitle: 'Convert this PNR into a professional PDF quote',
    trialDescription:
      'Try Quotix free for 7 days. Paste your PNR, add hotels, transfers and insurance, and send your client a visual PDF in seconds.',
    trialCta: 'Try free for 7 days',
    copyButton: 'Copy result',
    copiedButton: 'Copied',
    adLabel: 'Advertisement',
  },
  pt: {
    inputLabel: 'Cole o PNR da Amadeus',
    loadSample: 'Ver exemplo',
    placeholder: `Exemplo:
RP/ABC12345/ABC12345
 1.GONZALEZ/MARIA MS
 2.PEREZ/JUAN MR
 1 UX  46 Z 17OCT 6 MVDMAD HK1  1220 0510+1  E 0 789
 2 UX  45 Z 02NOV 2 MADMVD HK1  2345 0825+1  E 0 789`,
    convertButton: 'Converter PNR',
    decoding: 'Decodificando...',
    privacyNote: 'Grátis, sem cadastro e 100% privado: não guardamos seu PNR.',
    errorEmpty: 'Cole o código PNR da Amadeus para começar.',
    errorInvalid:
      'O texto não parece ser um PNR válido da Amadeus. Verifique que inclua segmentos de voo com datas, aeroportos e códigos de status (HK, DK, etc.).',
    errorNoFlights: 'Não foi possível encontrar voos válidos no PNR.',
    optionsToggleShow: 'Opções de visualização',
    optionsToggleHide: 'Ocultar opções',
    toggleLogo: 'Mostrar logo',
    toggleDuration: 'Mostrar duração',
    toggleClass: 'Mostrar classe',
    toggleAircraft: 'Mostrar aeronave',
    itineraryTitle: 'Itinerário',
    flightSingular: 'voo',
    flightPlural: 'voos',
    copyNote: 'Formato visual para compartilhar ou capturar tela.',
    classLabel: 'Classe',
    daySingular: 'dia',
    dayPlural: 'dias',
    timeAm: 'a.m.',
    timePm: 'p.m.',
    days: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
    months: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
    trialEyebrow: 'Cota viagens?',
    trialTitle: 'Converta este PNR em um orçamento PDF profissional',
    trialDescription:
      'Experimente o Quotix grátis por 7 dias. Cole seu PNR, adicione hotéis, traslados e seguros, e envie ao seu cliente um PDF visual em segundos.',
    trialCta: 'Experimente grátis 7 dias',
    copyButton: 'Copiar resultado',
    copiedButton: 'Copiado',
    adLabel: 'Publicidade',
  },
};

export function getTranslations(lang: Lang): Translations {
  return translations[lang] ?? translations.es;
}
