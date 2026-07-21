import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { type Lang, getTranslations } from './i18n';

interface TrialCTAProps {
  lang?: Lang;
}

export default function TrialCTA({ lang = 'es' }: TrialCTAProps) {
  const t = getTranslations(lang);

  return (
    <div className="bg-gradient-to-br from-navy to-navy-800 rounded-2xl p-6 md:p-8 text-white">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-magenta-400" />
            <span className="text-sm font-semibold text-magenta-400 uppercase tracking-wide">{t.trialEyebrow}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">{t.trialTitle}</h3>
          <p className="text-slate-300 body-sm md:body-md">{t.trialDescription}</p>
        </div>
        <a
          href="/precios"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-magenta hover:bg-magenta-500 text-white font-semibold rounded-full transition-colors whitespace-nowrap"
        >
          {t.trialCta}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
