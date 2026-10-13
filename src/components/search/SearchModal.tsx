import React, { useState, useMemo } from 'react';
import { Search, X, MapPin, Calendar, Utensils, BookOpen, ArrowRight } from 'lucide-react';
import { destinations } from '../../data/destinations';
import { seasons } from '../../data/seasons';
import { foods } from '../../data/foods';
import { articles } from '../../data/articles';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return { destinations: [], foods: [], seasons: [], articles: [] };
    const q = query.toLowerCase();

    return {
      destinations: destinations.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.bengaliName.includes(q) ||
          d.region.toLowerCase().includes(q) ||
          d.shortDescription.toLowerCase().includes(q)
      ),
      foods: foods.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.bengaliName.includes(q) ||
          f.flavorProfile.toLowerCase().includes(q)
      ),
      seasons: seasons.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.bengaliName.includes(q) ||
          s.transliteration.toLowerCase().includes(q)
      ),
      articles: articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      ),
    };
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (path: string) => {
    onNavigate(path);
    onClose();
  };

  const totalResults =
    results.destinations.length +
    results.foods.length +
    results.seasons.length +
    results.articles.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search places, seasons, traditional foods, or stories..."
            className="w-full text-sm text-stone-800 placeholder-stone-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-600 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold text-stone-500 hover:text-stone-800 px-2 py-1 bg-stone-100 rounded"
          >
            Esc
          </button>
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto p-4 space-y-6">
          {!query.trim() ? (
            <div className="text-center py-10 text-stone-400 text-xs">
              <p>Type to search across Bangladesh destinations, foods, and travel guides.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['Sundarbans', 'Sajek', 'Hilsa', 'Monsoon', 'Old Dhaka', 'Visa'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded text-xs"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-10 text-stone-500 text-xs">
              No results found for "{query}". Try checking your spelling or searching by region.
            </div>
          ) : (
            <>
              {/* Destinations */}
              {results.destinations.length > 0 && (
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#0D5C58] tracking-wider block mb-2">
                    Destinations ({results.destinations.length})
                  </span>
                  <div className="space-y-1.5">
                    {results.destinations.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => handleSelect(`/destinations/${d.slug}`)}
                        className="w-full text-left p-2.5 hover:bg-stone-50 rounded-lg flex items-center justify-between group transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <MapPin className="w-4 h-4 text-[#C59B27] shrink-0" />
                          <div>
                            <span className="text-xs font-bold text-stone-800 group-hover:text-[#0D5C58]">
                              {d.name}
                            </span>
                            <span className="text-[11px] text-stone-400 block">
                              {d.region} · {d.bengaliName}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-[#0D5C58]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Foods */}
              {results.foods.length > 0 && (
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#0D5C58] tracking-wider block mb-2">
                    Gastronomy ({results.foods.length})
                  </span>
                  <div className="space-y-1.5">
                    {results.foods.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => handleSelect(`/food/${f.slug}`)}
                        className="w-full text-left p-2.5 hover:bg-stone-50 rounded-lg flex items-center justify-between group transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <Utensils className="w-4 h-4 text-[#C59B27] shrink-0" />
                          <div>
                            <span className="text-xs font-bold text-stone-800 group-hover:text-[#0D5C58]">
                              {f.name}
                            </span>
                            <span className="text-[11px] text-stone-400 block">
                              {f.region} · {f.bengaliName}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-[#0D5C58]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Seasons */}
              {results.seasons.length > 0 && (
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#0D5C58] tracking-wider block mb-2">
                    Six Seasons ({results.seasons.length})
                  </span>
                  <div className="space-y-1.5">
                    {results.seasons.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleSelect(`/seasons/${s.slug}`)}
                        className="w-full text-left p-2.5 hover:bg-stone-50 rounded-lg flex items-center justify-between group transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <Calendar className="w-4 h-4 text-[#C59B27] shrink-0" />
                          <div>
                            <span className="text-xs font-bold text-stone-800 group-hover:text-[#0D5C58]">
                              {s.name} ({s.bengaliName})
                            </span>
                            <span className="text-[11px] text-stone-400 block">
                              {s.monthsEnglish}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-[#0D5C58]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles */}
              {results.articles.length > 0 && (
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#0D5C58] tracking-wider block mb-2">
                    Stories & Guides ({results.articles.length})
                  </span>
                  <div className="space-y-1.5">
                    {results.articles.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => handleSelect(`/blog/${a.slug}`)}
                        className="w-full text-left p-2.5 hover:bg-stone-50 rounded-lg flex items-center justify-between group transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <BookOpen className="w-4 h-4 text-[#C59B27] shrink-0" />
                          <div>
                            <span className="text-xs font-bold text-stone-800 group-hover:text-[#0D5C58] line-clamp-1">
                              {a.title}
                            </span>
                            <span className="text-[11px] text-stone-400 block">
                              {a.category} · {a.readTime}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-[#0D5C58]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
