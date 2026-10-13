import React from 'react';
import { FoodItem } from '../types';
import { foods } from '../data/foods';
import { Utensils, Sparkles, ArrowRight, Compass } from 'lucide-react';

interface FoodPageProps {
  onNavigate: (path: string) => void;
}

export const FoodPage: React.FC<FoodPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-20">
      {/* Header Banner */}
      <div className="bg-[#0F2F24] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C59B27] font-semibold mb-2">
            <Utensils className="w-4 h-4 text-[#C59B27]" />
            <span>Bangladeshi Culinary Heritage</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            A Taste of Bengal
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-300 max-w-2xl font-light leading-relaxed">
            From the silver monarch Hilsa (Ilish) simmered in stone-ground mustard paste to 400-year-old Mughal slow-steamed Kacchi Biryani, fiery regional bhortas, and caramelized clay pot curd.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Special Feature: The Hilsa Monograph Banner */}
        <div className="bg-[#123B2F] text-white rounded-2xl overflow-hidden shadow-xl mb-14 border border-white/10 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
            <img
              src="/src/assets/images/hilsa_fish_culinary_1791862157523.jpg"
              alt="Bangladeshi Shorshe Ilish mustard hilsa curry"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-xs text-white/90">
              Shorshe Ilish (Mustard Hilsa Curry) served with hot fragrant rice
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C59B27] font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Special In-Depth Monograph</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                The Silver Monarch: The Complete Guide to Bangladeshi Hilsa
              </h2>
              <p className="mt-3 text-sm text-stone-200 leading-relaxed font-light">
                Discover why the anadromous Hilsa fish (Tenualosa ilisha) is revered as the undisputed national fish and gastronomic crown of Bangladesh. Explore the Padma vs. Meghna debate, the secret stone-ground mustard emulsion, monsoon pairing with khichuri, and vital government conservation bans.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-stone-300 font-light">
                7 min comprehensive culinary history & responsible sourcing guide
              </span>
              <button
                onClick={() => onNavigate('/food/shorshe-ilish')}
                className="py-2.5 px-5 bg-[#C59B27] hover:bg-[#D4AF37] text-[#0F2F24] rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Read The Hilsa Feature
              </button>
            </div>
          </div>
        </div>

        {/* Food Directory Cards */}
        <h3 className="font-serif text-2xl font-bold text-[#0F2F24] mb-6">
          Authentic Regional Specialties
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foods.map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => onNavigate(`/food/${food.slug}`)}
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                  <img
                    src={food.image}
                    alt={food.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-black/50 text-white text-[10px] uppercase font-semibold px-2 py-0.5 rounded backdrop-blur-sm">
                    {food.region}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] text-[#C59B27] font-semibold block">
                      {food.bengaliName}
                    </span>
                    <h4 className="font-serif text-lg font-bold">
                      {food.name}
                    </h4>
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-3">
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block">
                      Flavor Profile:
                    </span>
                    <p className="text-xs text-stone-700 font-medium">
                      {food.flavorProfile}
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 font-light leading-relaxed line-clamp-3 mb-4">
                    {food.culturalSignificance}
                  </p>

                  <div className="text-[11px] text-stone-500 pt-3 border-t border-stone-100">
                    <span className="font-semibold text-stone-700">Where to try: </span>
                    <span className="truncate">{food.whereToTry}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between text-xs font-semibold text-[#0D5C58] group-hover:text-[#0F2F24]">
                <span>View Recipe & Heritage</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
