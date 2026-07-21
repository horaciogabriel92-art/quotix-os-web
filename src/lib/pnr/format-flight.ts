import type { ParsedFlight } from './amadeus-parser';
import { formatDuration } from './amadeus-parser';
import { getAirportByIATA } from './airports';
import { getAirlineByIATA } from './airlines';

function formatTime12h(time24: string): string {
  const [h, m] = time24.split(':').map(Number);
  const ampm = h >= 12 ? 'p. m.' : 'a. m.';
  const hour12 = h % 12 || 12;
  return `${hour12}:${m.toString().padStart(2, '0')} ${ampm}`;
}

function formatDayAndDate(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00`);
  const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'set', 'oct', 'nov', 'dic'];
  return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
}

export function formatFlightToText(flight: ParsedFlight): string {
  const airline = getAirlineByIATA(flight.aerolinea_codigo);
  const origin = getAirportByIATA(flight.origen_codigo);
  const destination = getAirportByIATA(flight.destino_codigo);
  const duration = flight.hora_salida && flight.hora_llegada
    ? formatDuration(
        ((new Date(`${flight.fecha_llegada}T${flight.hora_llegada}:00`).getTime() -
          new Date(`${flight.fecha_salida}T${flight.hora_salida}:00`).getTime()) /
          60000)
      )
    : '';

  const lines: string[] = [
    `${formatDayAndDate(flight.fecha_salida)} · ${airline?.name || flight.aerolinea_codigo} ${flight.numero_vuelo}`,
    `Salida: ${formatTime12h(flight.hora_salida)} · ${origin?.city || flight.origen_codigo} (${flight.origen_codigo}) · ${origin?.name || ''}`,
    `Llegada: ${formatTime12h(flight.hora_llegada)} · ${destination?.city || flight.destino_codigo} (${flight.destino_codigo}) · ${destination?.name || ''}${flight.dias_adicionales ? ` (+${flight.dias_adicionales} día${flight.dias_adicionales > 1 ? 's' : ''})` : ''}`,
  ];

  if (duration) lines.push(`Duración: ${duration}`);
  if (flight.clase_codigo) lines.push(`Clase: ${flight.clase_codigo}`);
  if (flight.aeronave) lines.push(`Aeronave: ${flight.aeronave}`);

  return lines.join('\n');
}

export function formatAllFlightsToText(flights: ParsedFlight[]): string {
  if (flights.length === 0) return '';
  return flights.map((f, i) => `Vuelo ${i + 1}:\n${formatFlightToText(f)}`).join('\n\n');
}
