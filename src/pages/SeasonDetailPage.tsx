import React from 'react';
import { Season } from '../types';
import { seasons } from '../data/seasons';
import { Calendar, ArrowLeft, ArrowRight, Sun, CloudRain, Utensils, MapPin, Sparkles, Shirt } from 'lucide-react';

interface SeasonDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const SeasonDetailPage: React.FC<SeasonDetailPageProps> = ({ slug, onNavigate }) => {
  const season = seasons.find((s) => s.slug === slug) || seasons[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Hero */}
      <div className="relative min-h-[50vh] flex items-end bg-[#060A12] text-white overflow-hidden">
        <img
          src={season.image}
          alt={season.name}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060A12] via-[#090D16]/70 to-black/35" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32 w-full">
          <button
            onClick={() => onNavigate('/seasons')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-200 hover:text-white mb-6 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Six Seasons</span>
          </button>

          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F59E0B] font-semibold mb-2">
            <span>{season.transliteration}</span>
            <span>·</span>
            <span>{season.monthsBengali}</span>
            <span>·</span>
            <span>{season.monthsEnglish}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-2">
            {season.name} · {season.bengaliName}
          </h1>

          <p className="max-w-2xl text-sm sm:text-base text-stone-200 font-light leading-relaxed">
            {season.description}
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Atmosphere & Weather Overview */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-xs uppercase tracking-widest text-[#D97706] font-bold block mb-1">
                Climate & Sensory Atmosphere
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#0F172A] mb-3">
                Weather & Atmosphere
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed font-light mb-6">
                {season.atmosphere}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block">Temperature Range</span>
                  <span className="font-semibold text-slate-800 text-sm">{season.weatherOverview.tempRange}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block">Precipitation</span>
                  <span className="font-semibold text-slate-800 text-sm">{season.weatherOverview.rainfall}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block">Relative Humidity</span>
                  <span className="font-semibold text-slate-800 text-sm">{season.weatherOverview.humidity}</span>
                </div>
              </div>
            </section>

            {/* Recommended Experiences */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-xs uppercase tracking-widest text-[#D97706] font-bold block mb-1">
                Seasonal Bucket List
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#0F172A] mb-4">
                Recommended Experiences in {season.name}
              </h2>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {season.recommendedExperiences.map((exp, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="w-5 h-5 rounded-full bg-[#0F172A] text-white flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="font-light">{exp}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Seasonal Flavors & Festivals */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D97706] font-bold mb-2">
                    <Utensils className="w-4 h-4 text-[#F59E0B]" />
                    <span>Seasonal Flavors & Delicacies</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700 font-light">
                    {season.seasonalFlavors.map((flavor, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#F59E0B] font-bold">·</span>
                        <span>{flavor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D97706] font-bold mb-2">
                    <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                    <span>Cultural Festivals & Celebrations</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700 font-light">
                    {season.culturalFestivals.map((fest, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#F59E0B] font-bold">·</span>
                        <span>{fest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Clothing Advice */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D97706] font-bold mb-2">
                <Shirt className="w-4 h-4 text-[#F59E0B]" />
                <span>What to Pack</span>
              </div>
              <h4 className="font-serif text-base font-bold text-[#0F172A] mb-2">
                Clothing Advice
              </h4>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                {season.clothingAdvice}
              </p>
            </div>

            {/* Recommended Destinations in this Season */}
            <div className="bg-[#0F172A] text-white p-6 rounded-2xl border border-white/10 shadow-lg">
              <span className="text-xs uppercase tracking-widest text-[#F59E0B] font-semibold block mb-2">
                Where to Go
              </span>
              <h4 className="font-serif text-xl font-bold mb-4">
                Top Destinations for {season.name}
              </h4>
              <ul className="space-y-2 text-xs text-stone-200 mb-6">
                {season.topDestinations.map((dest, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#F59E0B] font-bold">✓</span>
                    <span>{dest}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate('/itineraries')}
                className="w-full py-2.5 bg-[#F59E0B] hover:bg-[#D97706] text-[#090D16] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Plan a {season.name} Itinerary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
