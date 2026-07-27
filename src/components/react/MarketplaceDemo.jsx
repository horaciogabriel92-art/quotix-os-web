import React, { useState } from 'react';
import { LayoutGrid, Newspaper, List, MapPin, Star, Heart, ArrowRight, Search, X, Send, Loader2, Check, Eye } from 'lucide-react';

const packagesDemo = [
  {
    id: 'demo-eur',
    title: 'Europa Mágica',
    destination: 'Madrid y París',
    duration: '12 días',
    description: 'Circuito por Madrid y París con hoteles céntricos, traslados y excursiones guiadas.',
    price: 2890,
    currency: 'USD',
    category: ['europa'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'demo-car',
    title: 'Riviera Maya Todo Incluido',
    destination: 'Cancún, México',
    duration: '8 días',
    description: 'Resort 5 estrellas todo incluido con playas privadas, cenotes y ruinas mayas.',
    price: 1890,
    currency: 'USD',
    category: ['playa'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1552074291-ad4df87b13ce?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'demo-pat',
    title: 'Patagonia Extrema',
    destination: 'El Calafate, Argentina',
    duration: '7 días',
    description: 'Trekking en el Perito Moreno, navegación por glaciares y estancias patagónicas.',
    price: 1450,
    currency: 'USD',
    category: ['aventura'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1518182170546-0766aa6f31e6?auto=format&fit=crop&w=800&q=80',
  },
];

const categories = [
  { slug: 'all', label: 'Todos' },
  { slug: 'europa', label: 'Europa' },
  { slug: 'playa', label: 'Playa' },
  { slug: 'aventura', label: 'Aventura' },
];

const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:3001/api';

export default function MarketplaceDemo() {
  const [activeStyle, setActiveStyle] = useState('grid');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = activeFilter === 'all'
    ? packagesDemo
    : packagesDemo.filter((p) => p.category.includes(activeFilter));

  return (
    <div className="marketplace-demo not-prose">
      {/* Style selector */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-slate-100 rounded-xl p-1 gap-1">
          {[
            { id: 'grid', label: 'Estilo Grid', icon: LayoutGrid },
            { id: 'magazine', label: 'Magazine', icon: Newspaper },
            { id: 'list', label: 'Lista', icon: List },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveStyle(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeStyle === id ? 'bg-white text-magenta shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Demo notice */}
      <div className="mb-8 bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
          <Eye className="w-4 h-4" />
        </div>
        <div>
          <div className="font-semibold text-indigo-900 text-sm">Esto es una vista previa del cotizador de Quotix</div>
          <p className="text-indigo-700 text-sm mt-0.5 leading-relaxed">
            Los clientes de tu agencia verán tus paquetes reales con fotos propias, precios actualizados y tu marca. Hacé clic en <strong>Cotizar</strong> para ver cómo el visitante deja sus datos y genera un lead en el CRM.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveFilter(cat.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              activeFilter === cat.slug
                ? 'bg-magenta text-white border-magenta'
                : 'bg-white text-slate-600 border-slate-200 hover:border-magenta'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Demos */}
      <div className="transition-all duration-300">
        {activeStyle === 'grid' && <GridDemo packages={filtered} onSelect={setSelected} />}
        {activeStyle === 'magazine' && <MagazineDemo packages={filtered} onSelect={setSelected} />}
        {activeStyle === 'list' && <ListDemo packages={filtered} onSelect={setSelected} />}
      </div>

      <p className="text-center text-sm text-slate-500 mt-6">
        Estos son ejemplos visuales. En tu cuenta podés subir fotos reales, editar textos y elegir colores de marca.
      </p>

      {selected && <LeadModal pkg={selected} onClose={() => setSelected(null)} apiUrl={API_URL} />}
    </div>
  );
}

function GridDemo({ packages, onSelect }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <div
          key={pkg.id}
          className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
        >
          <div className="relative h-52 overflow-hidden">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
            {pkg.featured && (
              <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-semibold z-10">
                <Star className="w-3 h-3" /> Destacado
              </span>
            )}
            <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors z-10">
              <Heart className="w-4 h-4" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10">
              <div className="flex items-center gap-1 text-xs font-medium text-white/90 mb-1">
                <MapPin className="w-3 h-3" /> {pkg.destination}
              </div>
              <h3 className="text-2xl font-bold leading-tight drop-shadow-sm">{pkg.title}</h3>
            </div>
          </div>
          <div className="p-5 flex flex-col flex-1">
            <p className="text-slate-600 text-sm mb-4 flex-1">{pkg.description}</p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">Desde</div>
                <div className="text-2xl font-black text-slate-900">
                  ${pkg.price.toLocaleString()} <span className="text-sm font-medium text-slate-500">{pkg.currency}</span>
                </div>
              </div>
              <button
                onClick={() => onSelect(pkg)}
                className="inline-flex items-center gap-1 px-4 py-2 bg-magenta hover:bg-magenta-500 text-white text-sm font-semibold rounded-full transition-colors"
              >
                Cotizar <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MagazineDemo({ packages, onSelect }) {
  const [search, setSearch] = useState('');
  const featured = packages.find((p) => p.featured) || packages[0];
  const rest = packages.filter((p) => p.id !== featured.id);

  return (
    <div className="grid lg:grid-cols-12 gap-6">
      <aside className="lg:col-span-3 space-y-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar destino..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-magenta"
            />
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-1">
          {categories.map((cat) => (
            <div
              key={cat.slug}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                cat.slug === 'all' ? 'bg-magenta/10 text-magenta font-semibold' : 'text-slate-600'
              }`}
            >
              {cat.label}
              <span className="text-xs text-slate-400">
                {cat.slug === 'all' ? packages.length : packages.filter((p) => p.category.includes(cat.slug)).length}
              </span>
            </div>
          ))}
        </div>
      </aside>

      <div className="lg:col-span-9">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden min-h-[280px] flex flex-col justify-end">
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-slate-900 text-xs font-bold z-10">Destacado</div>
            <div className="relative z-10 p-6 text-white">
              <div className="text-xs font-medium text-white/90 mb-1">{featured.destination}</div>
              <h3 className="text-2xl font-bold mb-2 drop-shadow-sm">{featured.title}</h3>
              <p className="text-sm text-white/90 line-clamp-2 mb-4">{featured.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black drop-shadow-sm">${featured.price.toLocaleString()} {featured.currency}</span>
                <button
                  onClick={() => onSelect(featured)}
                  className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-bold hover:bg-slate-100 transition-colors"
                >
                  Cotizar
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {rest.slice(0, 2).map((pkg) => (
              <div key={pkg.id} className="bg-white border border-slate-200 rounded-2xl p-4 flex gap-4 items-center hover:-translate-y-0.5 transition-transform">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-20 h-20 rounded-xl flex-shrink-0 object-cover"
                  loading="lazy"
                />
                <div className="flex-1">
                  <div className="text-xs text-magenta font-bold uppercase tracking-wide mb-1">{pkg.destination}</div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">{pkg.title}</h4>
                  <p className="text-xs text-slate-500 mb-2">{pkg.duration}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-slate-900">${pkg.price.toLocaleString()}</span>
                    <button onClick={() => onSelect(pkg)} className="text-magenta text-sm font-bold hover:underline">Cotizar →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ListDemo({ packages, onSelect }) {
  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {packages.map((pkg) => (
        <div key={pkg.id} className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row gap-5 items-center shadow-sm hover:shadow-md transition-shadow">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full sm:w-40 h-28 rounded-xl flex-shrink-0 object-cover"
            loading="lazy"
          />
          <div className="flex-1 text-center sm:text-left">
            <div className="text-xs text-magenta font-bold uppercase tracking-wide mb-1">{pkg.destination} · {pkg.duration}</div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">{pkg.title}</h4>
            <p className="text-sm text-slate-600">{pkg.description}</p>
          </div>
          <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 sm:gap-1 min-w-[140px]">
            <div className="text-2xl font-black text-slate-900">${pkg.price.toLocaleString()}</div>
            <button
              onClick={() => onSelect(pkg)}
              className="inline-flex items-center gap-1 px-5 py-2 bg-magenta hover:bg-magenta-500 text-white text-sm font-semibold rounded-full transition-colors"
            >
              Cotizar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function LeadModal({ pkg, onClose, apiUrl }) {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    num_pasajeros: 2,
    tipo_habitacion: 'doble',
    fecha_salida: '',
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
      const res = await fetch(`${apiUrl}/public/landing/demo/cotizar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paquete_id: pkg.id,
          ...form,
          comentarios: `Interesado en ${pkg.title}. ${form.comentarios}`,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al enviar');
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Error al enviar la cotización');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-gradient-to-r from-magenta to-magenta-500 p-6 text-white">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs font-medium opacity-90 mb-1">Cotizar paquete</div>
              <h3 className="text-2xl font-bold">{pkg.title}</h3>
              <p className="text-sm opacity-90">{pkg.destination} · Desde ${pkg.price.toLocaleString()} {pkg.currency}</p>
            </div>
            <button onClick={onClose} className="text-white/80 hover:text-white"><X className="w-5 h-5" /></button>
          </div>
        </div>
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">¡Cotización enviada!</h4>
              <p className="text-slate-600 mb-6">Un asesor se contactará por email o WhatsApp para confirmar disponibilidad.</p>
              <button onClick={onClose} className="px-6 py-2 bg-magenta hover:bg-magenta-500 text-white rounded-full font-semibold">Entendido</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-slate-500 mb-4">Completá tus datos. El lead llega al CRM de la agencia con el paquete seleccionado.</p>
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="Nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-magenta text-sm" />
                <input required placeholder="Apellido" value={form.apellido} onChange={(e) => setForm({ ...form, apellido: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-magenta text-sm" />
              </div>
              <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-magenta text-sm" />
              <input placeholder="WhatsApp / Teléfono" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-magenta text-sm" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Pasajeros</label>
                  <select value={form.num_pasajeros} onChange={(e) => setForm({ ...form, num_pasajeros: Number(e.target.value) })} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-magenta text-sm">
                    {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'pasajero' : 'pasajeros'}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Habitación</label>
                  <select value={form.tipo_habitacion} onChange={(e) => setForm({ ...form, tipo_habitacion: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-magenta text-sm">
                    <option value="doble">Doble</option>
                    <option value="triple">Triple</option>
                    <option value="cuadruple">Cuádruple</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Fecha de salida preferida</label>
                <input type="date" value={form.fecha_salida} onChange={(e) => setForm({ ...form, fecha_salida: e.target.value })} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-magenta text-sm" />
              </div>
              <textarea placeholder="¿Alguna consulta especial?" value={form.comentarios} onChange={(e) => setForm({ ...form, comentarios: e.target.value })} rows={3} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-magenta text-sm resize-none" />
              {error && <p className="text-sm text-red-500">{error}</p>}
              <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-magenta hover:bg-magenta-500 disabled:opacity-60 text-white font-semibold rounded-full transition-colors">
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</> : <><Send className="w-4 h-4" /> Enviar cotización</>}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
