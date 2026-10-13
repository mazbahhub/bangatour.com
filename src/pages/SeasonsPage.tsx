import React from 'react';
import { Season } from '../types';
import { seasons } from '../data/seasons';
import { Calendar, ArrowRight, CloudRain, Sun, Wind, Sparkles } from 'lucide-react';

interface SeasonsPageProps {
  onNavigate: (path: string) => void;
}

export const SeasonsPage: React.FC<SeasonsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-20">
      {/* Banner */}
      <div className="bg-[#090D16] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#F59E0B] font-semibold mb-2">
            <Calendar className="w-4 h-4 text-[#F59E0B]" />
            <span>Shoro Ritu · The Sixfold Symphony</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            The Six Seasons of Bangladesh
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-300 max-w-2xl font-light leading-relaxed">
            While much of the world counts four seasons, Bengal celebrates six distinct two-month rhythms of nature. From golden mango summers and torrential poetic monsoons to dewy harvest autumns and sweet pitha winters.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seasons.map((season, index) => (
            <div
              key={season.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => onNavigate(`/seasons/${season.slug}`)}
            >
              {/* Image banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={season.image}
                  alt={season.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                <div className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest text-[#F59E0B] bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                  Season 0{index + 1}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-serif text-2xl font-bold">
                      {season.name}
                    </h3>
                    <span className="text-sm font-medium text-[#F59E0B]">
                      {season.bengaliName} ({season.transliteration})
                    </span>
                  </div>
                  <span className="text-[11px] text-stone-300 block font-light">
                    {season.monthsBengali} · {season.monthsEnglish}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-600 font-light leading-relaxed mb-4">
                    {season.description}
                  </p>

                  {/* Weather snapshot */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 mb-4 text-xs space-y-1">
                    <div className="flex justify-between text-slate-600">
                      <span className="text-[10px] uppercase text-slate-400">Temperatures:</span>
                      <span className="font-semibold text-slate-800">{season.weatherOverview.tempRange}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span className="text-[10px] uppercase text-slate-400">Atmosphere:</span>
                      <span className="text-slate-700 truncate max-w-[180px]">{season.atmosphere.split(',')[0]}</span>
                    </div>
                  </div>

                  {/* Recommended Experiences */}
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                      Must-Do Experience:
                    </span>
                    <p className="text-xs text-slate-700 font-medium">
                      {season.recommendedExperiences[0]}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#D97706] group-hover:text-[#0F172A]">
                  <span>Discover This Season</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
