import React, { useState } from 'react';
import { Calendar, Loader2, Check, Send } from 'lucide-react';

const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:3001/api';

export default function DemoRequestForm() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    whatsapp: '',
    fecha_preferida: '',
    hora_preferida: '',
    comentarios: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/public/demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al enviar');
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Error al enviar la solicitud');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Solicitud enviada!</h3>
        <p className="text-slate-600">Nos contactaremos por WhatsApp a la brevedad para confirmar fecha y hora.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto not-prose">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Nombre completo</label>
          <input
            required
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            placeholder="Ej: Laura Fernández"
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-magenta"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="laura@agencia.com"
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-magenta"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp</label>
        <input
          required
          value={form.whatsapp}
          onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
          placeholder="Ej: +598 99 123 456"
          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-magenta"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Fecha preferida</label>
          <input
            required
            type="date"
            value={form.fecha_preferida}
            onChange={(e) => setForm({ ...form, fecha_preferida: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-magenta"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Hora preferida</label>
          <input
            required
            type="time"
            value={form.hora_preferida}
            onChange={(e) => setForm({ ...form, hora_preferida: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-magenta"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">¿Qué te gustaría ver?</label>
        <textarea
          value={form.comentarios}
          onChange={(e) => setForm({ ...form, comentarios: e.target.value })}
          placeholder="Contanos sobre tu agencia y qué funcionalidad te interesa más."
          rows={3}
          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-magenta resize-none"
        />
      </div>
      {error && <p className="text-sm text-red-500 text-center">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-magenta hover:bg-magenta-500 disabled:opacity-60 text-white font-semibold rounded-full transition-colors text-lg"
      >
        {loading ? <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</> : <><Calendar className="w-5 h-5" /> Agendar demo gratuita</>}
      </button>
      <p className="text-xs text-center text-slate-500">Un asesor se contactará por WhatsApp para confirmar la videollamada.</p>
    </form>
  );
}
