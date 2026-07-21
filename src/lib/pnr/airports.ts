// Base de datos de aeropuertos (códigos IATA)
// Datos de OpenFlights - https://openflights.org/data.html

export interface Airport {
  iata: string;
  name: string;
  city: string;
  country: string;
  timezone: string;
}

export const AIRPORTS: Record<string, Airport> = {
  // América del Sur
  'MVD': { iata: 'MVD', name: 'Carrasco International Airport', city: 'Montevideo', country: 'Uruguay', timezone: 'America/Montevideo' },
  'EZE': { iata: 'EZE', name: 'Ministro Pistarini International Airport', city: 'Buenos Aires', country: 'Argentina', timezone: 'America/Argentina/Buenos_Aires' },
  'AEP': { iata: 'AEP', name: 'Aeroparque Jorge Newbery', city: 'Buenos Aires', country: 'Argentina', timezone: 'America/Argentina/Buenos_Aires' },
  'GRU': { iata: 'GRU', name: 'São Paulo/Guarulhos International Airport', city: 'São Paulo', country: 'Brazil', timezone: 'America/Sao_Paulo' },
  'GIG': { iata: 'GIG', name: 'Rio de Janeiro–Galeão International Airport', city: 'Rio de Janeiro', country: 'Brazil', timezone: 'America/Sao_Paulo' },
  'BSB': { iata: 'BSB', name: 'Brasília International Airport', city: 'Brasília', country: 'Brazil', timezone: 'America/Sao_Paulo' },
  'SSA': { iata: 'SSA', name: 'Deputado Luís Eduardo Magalhães International Airport', city: 'Salvador', country: 'Brazil', timezone: 'America/Bahia' },
  'LIM': { iata: 'LIM', name: 'Jorge Chávez International Airport', city: 'Lima', country: 'Peru', timezone: 'America/Lima' },
  'SCL': { iata: 'SCL', name: 'Arturo Merino Benítez International Airport', city: 'Santiago', country: 'Chile', timezone: 'America/Santiago' },
  'BOG': { iata: 'BOG', name: 'El Dorado International Airport', city: 'Bogotá', country: 'Colombia', timezone: 'America/Bogota' },
  'CCS': { iata: 'CCS', name: 'Simón Bolívar International Airport', city: 'Caracas', country: 'Venezuela', timezone: 'America/Caracas' },
  'ASU': { iata: 'ASU', name: 'Silvio Pettirossi International Airport', city: 'Asunción', country: 'Paraguay', timezone: 'America/Asuncion' },
  'IGU': { iata: 'IGU', name: 'Cataratas del Iguazú International Airport', city: 'Puerto Iguazú', country: 'Argentina', timezone: 'America/Argentina/Buenos_Aires' },
  'ROS': { iata: 'ROS', name: 'Islas Malvinas International Airport', city: 'Rosario', country: 'Argentina', timezone: 'America/Argentina/Buenos_Aires' },
  'COR': { iata: 'COR', name: 'Ingeniero Aeronáutico Ambrosio L.V. Taravella International Airport', city: 'Córdoba', country: 'Argentina', timezone: 'America/Argentina/Cordoba' },
  'MDZ': { iata: 'MDZ', name: 'Governor Francisco Gabrielli International Airport', city: 'Mendoza', country: 'Argentina', timezone: 'America/Argentina/Mendoza' },
  'BRC': { iata: 'BRC', name: 'San Carlos de Bariloche Airport', city: 'San Carlos de Bariloche', country: 'Argentina', timezone: 'America/Argentina/Salta' },
  'USH': { iata: 'USH', name: 'Ushuaia – Malvinas Argentinas International Airport', city: 'Ushuaia', country: 'Argentina', timezone: 'America/Argentina/Ushuaia' },
  'PUJ': { iata: 'PUJ', name: 'Punta Cana International Airport', city: 'Punta Cana', country: 'Dominican Republic', timezone: 'America/Santo_Domingo' },
  'CUN': { iata: 'CUN', name: 'Cancún International Airport', city: 'Cancún', country: 'Mexico', timezone: 'America/Cancun' },
  'MEX': { iata: 'MEX', name: 'Mexico City International Airport', city: 'Mexico City', country: 'Mexico', timezone: 'America/Mexico_City' },
  'HAV': { iata: 'HAV', name: 'José Martí International Airport', city: 'Havana', country: 'Cuba', timezone: 'America/Havana' },
  'PTY': { iata: 'PTY', name: 'Tocumen International Airport', city: 'Panama City', country: 'Panama', timezone: 'America/Panama' },
  'SJO': { iata: 'SJO', name: 'Juan Santamaría International Airport', city: 'San José', country: 'Costa Rica', timezone: 'America/Costa_Rica' },
  
  // Europa
  'MAD': { iata: 'MAD', name: 'Adolfo Suárez Madrid–Barajas Airport', city: 'Madrid', country: 'Spain', timezone: 'Europe/Madrid' },
  'BCN': { iata: 'BCN', name: 'Barcelona–El Prat Airport', city: 'Barcelona', country: 'Spain', timezone: 'Europe/Madrid' },
  'CDG': { iata: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris', country: 'France', timezone: 'Europe/Paris' },
  'ORY': { iata: 'ORY', name: 'Orly Airport', city: 'Paris', country: 'France', timezone: 'Europe/Paris' },
  'LHR': { iata: 'LHR', name: 'Heathrow Airport', city: 'London', country: 'United Kingdom', timezone: 'Europe/London' },
  'LGW': { iata: 'LGW', name: 'Gatwick Airport', city: 'London', country: 'United Kingdom', timezone: 'Europe/London' },
  'FCO': { iata: 'FCO', name: 'Leonardo da Vinci–Fiumicino Airport', city: 'Rome', country: 'Italy', timezone: 'Europe/Rome' },
  'MXP': { iata: 'MXP', name: 'Milan Malpensa Airport', city: 'Milan', country: 'Italy', timezone: 'Europe/Rome' },
  'FRA': { iata: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt', country: 'Germany', timezone: 'Europe/Berlin' },
  'MUC': { iata: 'MUC', name: 'Munich Airport', city: 'Munich', country: 'Germany', timezone: 'Europe/Berlin' },
  'AMS': { iata: 'AMS', name: 'Amsterdam Airport Schiphol', city: 'Amsterdam', country: 'Netherlands', timezone: 'Europe/Amsterdam' },
  'LIS': { iata: 'LIS', name: 'Lisbon Airport', city: 'Lisbon', country: 'Portugal', timezone: 'Europe/Lisbon' },
  'ZUR': { iata: 'ZUR', name: 'Zürich Airport', city: 'Zürich', country: 'Switzerland', timezone: 'Europe/Zurich' },
  'VIE': { iata: 'VIE', name: 'Vienna International Airport', city: 'Vienna', country: 'Austria', timezone: 'Europe/Vienna' },
  'PRG': { iata: 'PRG', name: 'Václav Havel Airport Prague', city: 'Prague', country: 'Czech Republic', timezone: 'Europe/Prague' },
  'WAW': { iata: 'WAW', name: 'Warsaw Chopin Airport', city: 'Warsaw', country: 'Poland', timezone: 'Europe/Warsaw' },
  'ATH': { iata: 'ATH', name: 'Athens International Airport', city: 'Athens', country: 'Greece', timezone: 'Europe/Athens' },
  'IST': { iata: 'IST', name: 'Istanbul Airport', city: 'Istanbul', country: 'Turkey', timezone: 'Europe/Istanbul' },
  'DUB': { iata: 'DUB', name: 'Dublin Airport', city: 'Dublin', country: 'Ireland', timezone: 'Europe/Dublin' },
  'CPH': { iata: 'CPH', name: 'Copenhagen Airport', city: 'Copenhagen', country: 'Denmark', timezone: 'Europe/Copenhagen' },
  'OSL': { iata: 'OSL', name: 'Oslo Airport, Gardermoen', city: 'Oslo', country: 'Norway', timezone: 'Europe/Oslo' },
  'ARN': { iata: 'ARN', name: 'Stockholm Arlanda Airport', city: 'Stockholm', country: 'Sweden', timezone: 'Europe/Stockholm' },
  'HEL': { iata: 'HEL', name: 'Helsinki Airport', city: 'Helsinki', country: 'Finland', timezone: 'Europe/Helsinki' },
  
  // Estados Unidos y Canadá
  'JFK': { iata: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York', country: 'United States', timezone: 'America/New_York' },
  'EWR': { iata: 'EWR', name: 'Newark Liberty International Airport', city: 'New York', country: 'United States', timezone: 'America/New_York' },
  'LGA': { iata: 'LGA', name: 'LaGuardia Airport', city: 'New York', country: 'United States', timezone: 'America/New_York' },
  'MIA': { iata: 'MIA', name: 'Miami International Airport', city: 'Miami', country: 'United States', timezone: 'America/New_York' },
  'FLL': { iata: 'FLL', name: 'Fort Lauderdale–Hollywood International Airport', city: 'Fort Lauderdale', country: 'United States', timezone: 'America/New_York' },
  'MCO': { iata: 'MCO', name: 'Orlando International Airport', city: 'Orlando', country: 'United States', timezone: 'America/New_York' },
  'LAX': { iata: 'LAX', name: 'Los Angeles International Airport', city: 'Los Angeles', country: 'United States', timezone: 'America/Los_Angeles' },
  'SFO': { iata: 'SFO', name: 'San Francisco International Airport', city: 'San Francisco', country: 'United States', timezone: 'America/Los_Angeles' },
  'LAS': { iata: 'LAS', name: 'Harry Reid International Airport', city: 'Las Vegas', country: 'United States', timezone: 'America/Los_Angeles' },
  'ORD': { iata: 'ORD', name: 'O\'Hare International Airport', city: 'Chicago', country: 'United States', timezone: 'America/Chicago' },
  'DFW': { iata: 'DFW', name: 'Dallas/Fort Worth International Airport', city: 'Dallas', country: 'United States', timezone: 'America/Chicago' },
  'DEN': { iata: 'DEN', name: 'Denver International Airport', city: 'Denver', country: 'United States', timezone: 'America/Denver' },
  'SEA': { iata: 'SEA', name: 'Seattle–Tacoma International Airport', city: 'Seattle', country: 'United States', timezone: 'America/Los_Angeles' },
  'BOS': { iata: 'BOS', name: 'Logan International Airport', city: 'Boston', country: 'United States', timezone: 'America/New_York' },
  'ATL': { iata: 'ATL', name: 'Hartsfield–Jackson Atlanta International Airport', city: 'Atlanta', country: 'United States', timezone: 'America/New_York' },
  'IAH': { iata: 'IAH', name: 'George Bush Intercontinental Airport', city: 'Houston', country: 'United States', timezone: 'America/Chicago' },
  'PHL': { iata: 'PHL', name: 'Philadelphia International Airport', city: 'Philadelphia', country: 'United States', timezone: 'America/New_York' },
  'PHX': { iata: 'PHX', name: 'Phoenix Sky Harbor International Airport', city: 'Phoenix', country: 'United States', timezone: 'America/Phoenix' },
  'SAN': { iata: 'SAN', name: 'San Diego International Airport', city: 'San Diego', country: 'United States', timezone: 'America/Los_Angeles' },
  'YYZ': { iata: 'YYZ', name: 'Toronto Pearson International Airport', city: 'Toronto', country: 'Canada', timezone: 'America/Toronto' },
  'YUL': { iata: 'YUL', name: 'Montréal-Pierre Elliott Trudeau International Airport', city: 'Montreal', country: 'Canada', timezone: 'America/Toronto' },
  'YVR': { iata: 'YVR', name: 'Vancouver International Airport', city: 'Vancouver', country: 'Canada', timezone: 'America/Vancouver' },
  
  // Medio Oriente y Asia
  'DXB': { iata: 'DXB', name: 'Dubai International Airport', city: 'Dubai', country: 'United Arab Emirates', timezone: 'Asia/Dubai' },
  'AUH': { iata: 'AUH', name: 'Zayed International Airport', city: 'Abu Dhabi', country: 'United Arab Emirates', timezone: 'Asia/Dubai' },
  'DOH': { iata: 'DOH', name: 'Hamad International Airport', city: 'Doha', country: 'Qatar', timezone: 'Asia/Qatar' },
  'JED': { iata: 'JED', name: 'King Abdulaziz International Airport', city: 'Jeddah', country: 'Saudi Arabia', timezone: 'Asia/Riyadh' },
  'RUH': { iata: 'RUH', name: 'King Khalid International Airport', city: 'Riyadh', country: 'Saudi Arabia', timezone: 'Asia/Riyadh' },
  'TLV': { iata: 'TLV', name: 'Ben Gurion Airport', city: 'Tel Aviv', country: 'Israel', timezone: 'Asia/Jerusalem' },
  'BEY': { iata: 'BEY', name: 'Beirut–Rafic Hariri International Airport', city: 'Beirut', country: 'Lebanon', timezone: 'Asia/Beirut' },
  'AMM': { iata: 'AMM', name: 'Queen Alia International Airport', city: 'Amman', country: 'Jordan', timezone: 'Asia/Amman' },
  'CAI': { iata: 'CAI', name: 'Cairo International Airport', city: 'Cairo', country: 'Egypt', timezone: 'Africa/Cairo' },
  'NRT': { iata: 'NRT', name: 'Narita International Airport', city: 'Tokyo', country: 'Japan', timezone: 'Asia/Tokyo' },
  'HND': { iata: 'HND', name: 'Haneda Airport', city: 'Tokyo', country: 'Japan', timezone: 'Asia/Tokyo' },
  'ICN': { iata: 'ICN', name: 'Incheon International Airport', city: 'Seoul', country: 'South Korea', timezone: 'Asia/Seoul' },
  'PEK': { iata: 'PEK', name: 'Beijing Capital International Airport', city: 'Beijing', country: 'China', timezone: 'Asia/Shanghai' },
  'PVG': { iata: 'PVG', name: 'Shanghai Pudong International Airport', city: 'Shanghai', country: 'China', timezone: 'Asia/Shanghai' },
  'HKG': { iata: 'HKG', name: 'Hong Kong International Airport', city: 'Hong Kong', country: 'Hong Kong', timezone: 'Asia/Hong_Kong' },
  'SIN': { iata: 'SIN', name: 'Singapore Changi Airport', city: 'Singapore', country: 'Singapore', timezone: 'Asia/Singapore' },
  'BKK': { iata: 'BKK', name: 'Suvarnabhumi Airport', city: 'Bangkok', country: 'Thailand', timezone: 'Asia/Bangkok' },
  'KUL': { iata: 'KUL', name: 'Kuala Lumpur International Airport', city: 'Kuala Lumpur', country: 'Malaysia', timezone: 'Asia/Kuala_Lumpur' },
  'CGK': { iata: 'CGK', name: 'Soekarno–Hatta International Airport', city: 'Jakarta', country: 'Indonesia', timezone: 'Asia/Jakarta' },
  'DEL': { iata: 'DEL', name: 'Indira Gandhi International Airport', city: 'New Delhi', country: 'India', timezone: 'Asia/Kolkata' },
  'BOM': { iata: 'BOM', name: 'Chhatrapati Shivaji Maharaj International Airport', city: 'Mumbai', country: 'India', timezone: 'Asia/Kolkata' },
  'MAA': { iata: 'MAA', name: 'Chennai International Airport', city: 'Chennai', country: 'India', timezone: 'Asia/Kolkata' },
  'SYD': { iata: 'SYD', name: 'Sydney Kingsford Smith Airport', city: 'Sydney', country: 'Australia', timezone: 'Australia/Sydney' },
  'MEL': { iata: 'MEL', name: 'Melbourne Airport', city: 'Melbourne', country: 'Australia', timezone: 'Australia/Melbourne' },
  'AKL': { iata: 'AKL', name: 'Auckland Airport', city: 'Auckland', country: 'New Zealand', timezone: 'Pacific/Auckland' },
  
  // África
  'JNB': { iata: 'JNB', name: 'O. R. Tambo International Airport', city: 'Johannesburg', country: 'South Africa', timezone: 'Africa/Johannesburg' },
  'CPT': { iata: 'CPT', name: 'Cape Town International Airport', city: 'Cape Town', country: 'South Africa', timezone: 'Africa/Johannesburg' },
  'CMN': { iata: 'CMN', name: 'Mohammed V International Airport', city: 'Casablanca', country: 'Morocco', timezone: 'Africa/Casablanca' },
  'LOS': { iata: 'LOS', name: 'Murtala Muhammed International Airport', city: 'Lagos', country: 'Nigeria', timezone: 'Africa/Lagos' },
  'NBO': { iata: 'NBO', name: 'Jomo Kenyatta International Airport', city: 'Nairobi', country: 'Kenya', timezone: 'Africa/Nairobi' },
  'ADD': { iata: 'ADD', name: 'Addis Ababa Bole International Airport', city: 'Addis Ababa', country: 'Ethiopia', timezone: 'Africa/Addis_Ababa' },
};

// Helpers
export function getAirportByIATA(code: string): Airport | undefined {
  return AIRPORTS[code.toUpperCase()];
}

export function getAirportDisplay(code: string): string {
  const airport = getAirportByIATA(code);
  if (airport) {
    return `${airport.city} (${code})`;
  }
  return code;
}
