import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { type Lang, getTranslations } from './i18n';

interface CopyResultButtonProps {
  text: string;
  lang?: Lang;
}

export default function CopyResultButton({ text, lang = 'es' }: CopyResultButtonProps) {
  const t = getTranslations(lang);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      disabled={!text}
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-600" />
          <span className="text-green-600">{t.copiedButton}</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          {t.copyButton}
        </>
      )}
    </button>
  );
}
