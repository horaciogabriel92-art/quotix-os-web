import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 50);
}

export default function BlogTOC() {
  const [items, setItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const article = document.querySelector('.article-content');
    if (!article) return;

    const headings = Array.from(article.querySelectorAll('h2'));
    const tocItems: TOCItem[] = [];

    headings.forEach((heading) => {
      const text = heading.textContent?.trim() || '';
      const id = slugify(text);
      heading.id = id;
      tocItems.push({ id, text });
    });

    setItems(tocItems);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).map((e) => e.target.id);
        if (visible.length > 0) {
          setActiveId(visible[0]);
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Desktop TOC */}
      <div className="hidden lg:block">
        {items.length === 0 ? (
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 bg-slate-200 rounded animate-pulse w-full" />
            ))}
          </div>
        ) : (
          <nav aria-label="Tabla de contenidos">
            <ul className="space-y-1 border-l-2 border-slate-200">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`w-full text-left text-sm leading-snug py-1.5 pl-4 pr-2 rounded-r-lg transition-all flex items-start gap-2 ${
                      activeId === item.id
                        ? 'bg-magenta/10 text-magenta font-semibold border-l-2 border-magenta -ml-0.5'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <ChevronRight className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${activeId === item.id ? 'text-magenta' : 'text-slate-400'}`} />
                    <span className="line-clamp-2">{item.text}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Mobile TOC */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between gap-2 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
        >
          <span className="flex items-center gap-2">
            <span className="text-magenta">▸</span>
            Contenido
          </span>
          <span className="text-slate-400">{isOpen ? '▲' : '▼'}</span>
        </button>
        {isOpen && (
          <nav aria-label="Tabla de contenidos" className="mt-2 bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className="w-full text-left text-sm text-slate-600 hover:text-magenta py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
