import React from 'react';

interface AdSlotProps {
  slotId?: string;
  className?: string;
  label?: string;
}

/**
 * Espacio reservado para Google AdSense.
 * No incluye el script de AdSense hasta que el sitio sea aprobado.
 * Para activar: agregar el script de AdSense en MainLayout y descomentar el data-ad-slot.
 */
export default function AdSlot({ slotId, className = '', label = 'Publicidad' }: AdSlotProps) {
  return (
    <div className={`bg-slate-50 border border-dashed border-slate-300 rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-[120px] ${className}`}>
      <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">{label}</span>
      {slotId && (
        <span className="text-[10px] text-slate-300 mt-1 font-mono">AdSense slot: {slotId}</span>
      )}
      {/*
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4292635932921618"
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      */}
    </div>
  );
}
