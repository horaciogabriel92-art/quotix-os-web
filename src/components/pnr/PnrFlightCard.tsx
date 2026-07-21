import React from 'react';
import { getAirlineByIATA, getAirlineLogoUrl } from '../../lib/pnr/airlines';
import { getAirportByIATA } from '../../lib/pnr/airports';
import type { ParsedFlight } from '../../lib/pnr/amadeus-parser';
import { formatDuration } from '../../lib/pnr/amadeus-parser';
import { type Lang, getTranslations } from './i18n';

interface PnrFlightCardProps {
  flight: ParsedFlight;
  index: number;
  showLogo: boolean;
  showClass: boolean;
  showAircraft: boolean;
  showDuration: boolean;
  lang?: Lang;
}

export default function PnrFlightCard({
  flight,
  index,
  showLogo,
  showClass,
  showAircraft,
  showDuration,
  lang = 'es',
}: PnrFlightCardProps) {
  const t = getTranslations(lang);
  const airline = getAirlineByIATA(flight.aerolinea_codigo);
  const origin = getAirportByIATA(flight.origen_codigo);
  const destination = getAirportByIATA(flight.destino_codigo);
  const logoUrl = getAirlineLogoUrl(flight.aerolinea_codigo);

  const departureDate = new Date(`${flight.fecha_salida}T00:00:00`);
  const arrivalDate = new Date(`${flight.fecha_llegada}T00:00:00`);
  const daysDiff = Math.round((arrivalDate.getTime() - departureDate.getTime()) / (1000 * 60 * 60 * 24));

  const [depHours, depMinutes] = flight.hora_salida.split(':').map(Number);
  const [arrHours, arrMinutes] = flight.hora_llegada.split(':').map(Number);
  let depTotal = depHours * 60 + depMinutes;
  let arrTotal = arrHours * 60 + arrMinutes;
  if (daysDiff > 0) arrTotal += daysDiff * 24 * 60;
  const durationMinutes = arrTotal - depTotal;
  const durationText = durationMinutes > 0 ? formatDuration(durationMinutes) : '';

  const formatTime12h = (time24: string) => {
    const [h, m] = time24.split(':').map(Number);
    const ampm = h >= 12 ? t.timePm : t.timeAm;
    const hour12 = h % 12 || 12;
    return `${hour12}:${m.toString().padStart(2, '0')} ${ampm}`;
  };

  const formatDay = (isoDate: string) => {
    const date = new Date(`${isoDate}T00:00:00`);
    return `${t.days[date.getDay()]}, ${date.getDate()} ${t.months[date.getMonth()]}`;
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
      <div className="flex items-start gap-4">
        {showLogo && (
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-50 p-1 flex items-center justify-center">
            <img
              src={logoUrl}
              alt={airline?.name || flight.aerolinea_codigo}
              className="max-w-full max-h-full object-contain"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
            <span className="font-semibold text-slate-900">
              {airline?.name || flight.aerolinea_codigo} {flight.numero_vuelo}
            </span>
            {showClass && flight.clase_codigo && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                {t.classLabel} {flight.clase_codigo}
              </span>
            )}
            {showAircraft && flight.aeronave && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                {flight.aeronave}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
            {/* Origen */}
            <div className="text-left">
              <div className="text-2xl font-bold text-slate-900">{formatTime12h(flight.hora_salida)}</div>
              <div className="text-sm font-medium text-slate-700">{origin?.city || flight.origen_codigo}</div>
              <div className="text-xs text-slate-500">{origin?.name || flight.origen_codigo} ({flight.origen_codigo})</div>
              <div className="text-xs text-slate-400 mt-1">{formatDay(flight.fecha_salida)}</div>
            </div>

            {/* Duración */}
            <div className="flex flex-col items-center text-slate-400">
              {showDuration && durationText && (
                <span className="text-xs font-medium mb-1">{durationText}</span>
              )}
              <div className="w-24 h-px bg-slate-300 relative">
                <div className="absolute right-0 -top-1 w-2 h-2 border-t border-r border-slate-300 rotate-45"></div>
              </div>
              {daysDiff > 0 && (
                <span className="text-xs mt-1 text-amber-600 font-medium">
                  +{daysDiff} {daysDiff === 1 ? t.daySingular : t.dayPlural}
                </span>
              )}
            </div>

            {/* Destino */}
            <div className="text-left md:text-right">
              <div className="text-2xl font-bold text-slate-900">{formatTime12h(flight.hora_llegada)}</div>
              <div className="text-sm font-medium text-slate-700">{destination?.city || flight.destino_codigo}</div>
              <div className="text-xs text-slate-500">{destination?.name || flight.destino_codigo} ({flight.destino_codigo})</div>
              <div className="text-xs text-slate-400 mt-1">{formatDay(flight.fecha_llegada)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
