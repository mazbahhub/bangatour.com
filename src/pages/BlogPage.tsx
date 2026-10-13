import React, { useState } from 'react';
import { BlogPost } from '../types';
import { articles } from '../data/articles';
import { BookOpen, ArrowRight, Search, Clock, Calendar, Compass } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const categories = [
    'all',
    'Destinations',
    'Culture & Heritage',
    'Wildlife & Nature',
    'Food & Culinary',
    'Travel Essentials',
  ];

  const filtered = articles.filter((art) => {
    const matchCat = selectedCategory === 'all' || art.category === selectedCategory;
    const matchSearch =
      art.title.toLowerCase().includes(search.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-20">
      {/* Banner */}
      <div className="bg-[#0F2F24] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C59B27] font-semibold mb-2">
            <BookOpen className="w-4 h-4 text-[#C59B27]" />
            <span>The Bengal Chronicle · Travel Stories & Field Notes</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Travel Stories & Editorial Magazine
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-300 max-w-2xl font-light leading-relaxed">
            In-depth narrative essays, culinary monographs, ethical wildlife observation guides, and cultural field notes written for discerning global travelers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-1.5 px-3.5 text-xs rounded-full font-medium whitespace-nowrap transition-colors cursor-pointer capitalize ${
                  selectedCategory === cat
                    ? 'bg-[#0F2F24] text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat === 'all' ? 'All Stories' : cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search stories..."
              className="w-full pl-9 pr-3 py-2 bg-white border border-stone-200 rounded-lg text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#0D5C58]"
            />
          </div>
        </div>

        {/* Featured Lead Story (First in list) */}
        {filtered.length > 0 && selectedCategory === 'all' && !search && (
          <div
            className="mb-12 bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 cursor-pointer group"
            onClick={() => onNavigate(`/blog/${filtered[0].slug}`)}
          >
            <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-full overflow-hidden bg-stone-900">
              <img
                src={filtered[0].image}
                alt={filtered[0].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded backdrop-blur-sm">
                Featured Cover Story · {filtered[0].category}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                  <span>{filtered[0].author.name}</span>
                  <span>·</span>
                  <span>{filtered[0].readTime}</span>
                  <span>·</span>
                  <span>{filtered[0].publishDate}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2F24] group-hover:text-[#0D5C58] transition-colors leading-snug">
                  {filtered[0].title}
                </h2>

                <p className="mt-4 text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {filtered[0].excerpt}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0D5C58]">
                <span>Read Full Essay</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        )}

        {/* Grid of Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedCategory === 'all' && !search ? filtered.slice(1) : filtered).map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
              onClick={() => onNavigate(`/blog/${article.slug}`)}
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-stone-900 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] uppercase font-semibold px-2.5 py-1 rounded backdrop-blur-sm">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                    <span>{article.author.name}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#0F2F24] group-hover:text-[#0D5C58] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-xs text-stone-600 leading-relaxed font-light line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-semibold text-[#0D5C58]">
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
