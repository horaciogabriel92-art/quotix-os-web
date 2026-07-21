import React, { useState } from 'react';
import { parseAmadeusPNR, isValidAmadeusText, type ParseResult } from '../../lib/pnr/amadeus-parser';
import PnrResults from './PnrResults';
import { Plane, AlertCircle, Loader2, Wand2 } from 'lucide-react';

const SAMPLE_PNR = `RP/ABC12345/ABC12345            EK/RM  26SEP26/1852Z   2B82OU
 1.GONZALEZ/MARIA MS
 2.PEREZ/JUAN MR
 1 UX  46 Z 17OCT 6 MVDMAD HK1  1220 0510+1  E 0 789
 2 UX  45 Z 02NOV 2 MADMVD HK1  2345 0825+1  E 0 789`;

export default function PnrConverterTool() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<ParseResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConvert = () => {
    setError(null);
    setResult(null);

    if (!text.trim()) {
      setError('Pegá el código PNR de Amadeus para comenzar.');
      return;
    }

    if (!isValidAmadeusText(text)) {
      setError('El texto no parece ser un PNR de Amadeus válido. Verificá que incluya segmentos de vuelo con fechas, aeropuertos y códigos de estado (HK, DK, etc.).');
      return;
    }

    setIsLoading(true);

    // Simular pequeña demora para feedback visual (parse es instantáneo)
    setTimeout(() => {
      const parsed = parseAmadeusPNR(text);
      setIsLoading(false);

      if (!parsed.success || parsed.flights.length === 0) {
        setError(parsed.errors.join(' ') || 'No se pudieron encontrar vuelos válidos en el PNR.');
        return;
      }

      setResult(parsed);
    }, 300);
  };

  const loadSample = () => {
    setText(SAMPLE_PNR);
    setResult(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <label htmlFor="pnr-input" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <Plane className="w-4 h-4 text-magenta" />
            Pegá el PNR de Amadeus
          </label>
          <button
            onClick={loadSample}
            type="button"
            className="text-xs font-medium text-slate-500 hover:text-magenta flex items-center gap-1"
          >
            <Wand2 className="w-3 h-3" />
            Ver ejemplo
          </button>
        </div>

        <textarea
          id="pnr-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={`Ejemplo:
RP/ABC12345/ABC12345
 1.GONZALEZ/MARIA MS
 1 UX  46 Z 17OCT 6 MVDMAD HK1  1220 0510+1  E 0 789`}
          className="w-full h-48 p-4 text-sm font-mono bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-magenta/20 focus:border-magenta outline-none resize-y text-slate-700"
        />

        <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={handleConvert}
            disabled={isLoading}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-magenta hover:bg-magenta-500 text-white font-semibold rounded-full transition-colors disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Decodificando...
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4" />
                Convertir PNR
              </>
            )}
          </button>
          <span className="text-xs text-slate-400 text-center sm:text-left">
            Gratis, sin registro y 100% privado: no guardamos tu PNR.
          </span>
        </div>

        {error && (
          <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}
      </div>

      {result && result.flights.length > 0 && (
        <PnrResults flights={result.flights} />
      )}
    </div>
  );
}
