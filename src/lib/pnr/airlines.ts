// Aerolíneas principales para el PNR Converter

export interface Airline {
  iata: string;
  name: string;
  country: string;
}

export const AIRLINES: Record<string, Airline> = {
  'UX': { iata: 'UX', name: 'Air Europa', country: 'Spain' },
  'AR': { iata: 'AR', name: 'Aerolíneas Argentinas', country: 'Argentina' },
  'LA': { iata: 'LA', name: 'LATAM Airlines', country: 'Chile' },
  'G3': { iata: 'G3', name: 'GOL Linhas Aéreas', country: 'Brazil' },
  'AD': { iata: 'AD', name: 'Azul Brazilian Airlines', country: 'Brazil' },
  'JJ': { iata: 'JJ', name: 'LATAM Airlines Brasil', country: 'Brazil' },
  'CM': { iata: 'CM', name: 'Copa Airlines', country: 'Panama' },
  'AV': { iata: 'AV', name: 'Avianca', country: 'Colombia' },
  'IB': { iata: 'IB', name: 'Iberia', country: 'Spain' },
  'AF': { iata: 'AF', name: 'Air France', country: 'France' },
  'KL': { iata: 'KL', name: 'KLM Royal Dutch Airlines', country: 'Netherlands' },
  'LH': { iata: 'LH', name: 'Lufthansa', country: 'Germany' },
  'BA': { iata: 'BA', name: 'British Airways', country: 'United Kingdom' },
  'AA': { iata: 'AA', name: 'American Airlines', country: 'United States' },
  'DL': { iata: 'DL', name: 'Delta Air Lines', country: 'United States' },
  'UA': { iata: 'UA', name: 'United Airlines', country: 'United States' },
  'AC': { iata: 'AC', name: 'Air Canada', country: 'Canada' },
  'TK': { iata: 'TK', name: 'Turkish Airlines', country: 'Turkey' },
  'EK': { iata: 'EK', name: 'Emirates', country: 'United Arab Emirates' },
  'QR': { iata: 'QR', name: 'Qatar Airways', country: 'Qatar' },
  'ET': { iata: 'ET', name: 'Ethiopian Airlines', country: 'Ethiopia' },
  'SA': { iata: 'SA', name: 'South African Airways', country: 'South Africa' },
  'TP': { iata: 'TP', name: 'TAP Air Portugal', country: 'Portugal' },
  'AZ': { iata: 'AZ', name: 'ITA Airways', country: 'Italy' },
  'LX': { iata: 'LX', name: 'Swiss International Air Lines', country: 'Switzerland' },
  'OS': { iata: 'OS', name: 'Austrian Airlines', country: 'Austria' },
  'SN': { iata: 'SN', name: 'Brussels Airlines', country: 'Belgium' },
  'SK': { iata: 'SK', name: 'Scandinavian Airlines', country: 'Sweden' },
  'AY': { iata: 'AY', name: 'Finnair', country: 'Finland' },
  'EI': { iata: 'EI', name: 'Aer Lingus', country: 'Ireland' },
  'VS': { iata: 'VS', name: 'Virgin Atlantic', country: 'United Kingdom' },
  'SQ': { iata: 'SQ', name: 'Singapore Airlines', country: 'Singapore' },
  'CX': { iata: 'CX', name: 'Cathay Pacific', country: 'Hong Kong' },
  'JL': { iata: 'JL', name: 'Japan Airlines', country: 'Japan' },
  'NH': { iata: 'NH', name: 'All Nippon Airways', country: 'Japan' },
  'QF': { iata: 'QF', name: 'Qantas', country: 'Australia' },
  'NZ': { iata: 'NZ', name: 'Air New Zealand', country: 'New Zealand' },
  'WS': { iata: 'WS', name: 'WestJet', country: 'Canada' },
  'TS': { iata: 'TS', name: 'Air Transat', country: 'Canada' },
  'AM': { iata: 'AM', name: 'Aeroméxico', country: 'Mexico' },
  '4O': { iata: '4O', name: 'Interjet', country: 'Mexico' },
  'VB': { iata: 'VB', name: 'VivaAerobus', country: 'Mexico' },
  'Y4': { iata: 'Y4', name: 'Volaris', country: 'Mexico' },
  'DM': { iata: 'DM', name: 'Maersk Air', country: 'Denmark' },
  'DY': { iata: 'DY', name: 'Norwegian', country: 'Norway' },
  'FI': { iata: 'FI', name: 'Icelandair', country: 'Iceland' },
  'LO': { iata: 'LO', name: 'LOT Polish Airlines', country: 'Poland' },
  'OK': { iata: 'OK', name: 'Czech Airlines', country: 'Czech Republic' },
  'RO': { iata: 'RO', name: 'Tarom', country: 'Romania' },
  'JU': { iata: 'JU', name: 'Air Serbia', country: 'Serbia' },
  'OU': { iata: 'OU', name: 'Croatia Airlines', country: 'Croatia' },
  'FB': { iata: 'FB', name: 'Bulgaria Air', country: 'Bulgaria' },
  'CY': { iata: 'CY', name: 'Cyprus Airways', country: 'Cyprus' },
  'ME': { iata: 'ME', name: 'Middle East Airlines', country: 'Lebanon' },
  'RJ': { iata: 'RJ', name: 'Royal Jordanian', country: 'Jordan' },
  'KU': { iata: 'KU', name: 'Kuwait Airways', country: 'Kuwait' },
  'GF': { iata: 'GF', name: 'Gulf Air', country: 'Bahrain' },
  'WY': { iata: 'WY', name: 'Oman Air', country: 'Oman' },
  'SV': { iata: 'SV', name: 'Saudia', country: 'Saudi Arabia' },
  'MS': { iata: 'MS', name: 'EgyptAir', country: 'Egypt' },
  'AT': { iata: 'AT', name: 'Royal Air Maroc', country: 'Morocco' },
  'MN': { iata: 'MN', name: 'South African Airways', country: 'South Africa' },
  'KP': { iata: 'KP', name: 'ASKY Airlines', country: 'Togo' },
  'SW': { iata: 'SW', name: 'Air Namibia', country: 'Namibia' },
  'QM': { iata: 'QM', name: 'Air Malawi', country: 'Malawi' },
  'UM': { iata: 'UM', name: 'Air Zimbabwe', country: 'Zimbabwe' },
  'BP': { iata: 'BP', name: 'Air Botswana', country: 'Botswana' },
  'PZ': { iata: 'PZ', name: 'LATAM Airlines Paraguay', country: 'Paraguay' },
  'Z8': { iata: 'Z8', name: 'Amaszonas', country: 'Bolivia' },
  'OB': { iata: 'OB', name: 'Boliviana de Aviación', country: 'Bolivia' },
  'H2': { iata: 'H2', name: 'Sky Airline', country: 'Chile' },
  'JA': { iata: 'JA', name: 'JetSMART', country: 'Chile' },
  'A8': { iata: 'A8', name: 'Aerolíneas Argentinas', country: 'Argentina' },
  'WJ': { iata: 'WJ', name: 'JetSmart Argentina', country: 'Argentina' },
};

export function getAirlineByIATA(code: string): Airline | undefined {
  return AIRLINES[code.toUpperCase()];
}

export function getAirlineDisplay(code: string): string {
  const airline = getAirlineByIATA(code);
  if (airline) {
    return `${airline.name} (${code})`;
  }
  return code;
}

export function getAirlineLogoUrl(code: string): string {
  return `/airlines/${code.toUpperCase()}.png`;
}
