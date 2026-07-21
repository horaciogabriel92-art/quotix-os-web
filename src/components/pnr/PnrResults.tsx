import React, { useState, useMemo } from 'react';
import PnrFlightCard from './PnrFlightCard';
import CopyResultButton from './CopyResultButton';
import TrialCTA from './TrialCTA';
import AdSlot from './AdSlot';
import type { ParsedFlight } from '../../lib/pnr/amadeus-parser';
import { formatAllFlightsToText } from '../../lib/pnr/format-flight';
import { Plane, Eye, EyeOff, Settings2 } from 'lucide-react';

interface PnrResultsProps {
  flights: ParsedFlight[];
}

export default function PnrResults({ flights }: PnrResultsProps) {
  const [showLogo, setShowLogo] = useState(true);
  const [showClass, setShowClass] = useState(true);
  const [showAircraft, setShowAircraft] = useState(true);
  const [showDuration, setShowDuration] = useState(true);
  const [showOptions, setShowOptions] = useState(false);

  const copyText = useMemo(() => formatAllFlightsToText(flights), [flights]);

  return (
    <div className="space-y-6">
      {/* Opciones de visualización */}
      <div className="bg-white border border-slate-200 rounded-xl p-4">
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
        >
          <Settings2 className="w-4 h-4" />
          {showOptions ? 'Ocultar opciones' : 'Opciones de visualización'}
        </button>

        {showOptions && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <Toggle label="Mostrar logo" checked={showLogo} onChange={setShowLogo} />
            <Toggle label="Mostrar duración" checked={showDuration} onChange={setShowDuration} />
            <Toggle label="Mostrar clase" checked={showClass} onChange={setShowClass} />
            <Toggle label="Mostrar aeronave" checked={showAircraft} onChange={setShowAircraft} />
          </div>
        )}
      </div>

      {/* Ad slot superior */}
      <AdSlot slotId="pnr-converter-top" label="Publicidad" />

      {/* Lista de vuelos */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-slate-700">
          <Plane className="w-5 h-5" />
          <h3 className="font-semibold">Itinerario ({flights.length} vuelo{flights.length > 1 ? 's' : ''})</h3>
        </div>
        {flights.map((flight, index) => (
          <PnrFlightCard
            key={index}
            flight={flight}
            index={index}
            showLogo={showLogo}
            showClass={showClass}
            showAircraft={showAircraft}
            showDuration={showDuration}
          />
        ))}
      </div>

      {/* Acciones */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <CopyResultButton text={copyText} />
        <span className="text-xs text-slate-400">Formato visual para compartir o capturar pantalla.</span>
      </div>

      {/* Ad slot inferior */}
      <AdSlot slotId="pnr-converter-bottom" label="Publicidad" />

      {/* CTA Trial */}
      <TrialCTA />
    </div>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg border transition-colors ${
        checked
          ? 'bg-magenta/10 border-magenta text-magenta'
          : 'bg-slate-50 border-slate-200 text-slate-500'
      }`}
    >
      {checked ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
      {label}
    </button>
  );
}
