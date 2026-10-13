import React from 'react';
import { Destination } from '../types';
import { destinations } from '../data/destinations';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Compass, 
  ArrowLeft, 
  ShieldCheck, 
  Plane, 
  Bus, 
  Train, 
  Ship, 
  Utensils, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface DestinationDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({ slug, onNavigate }) => {
  const destination = destinations.find((d) => d.slug === slug) || destinations[0];

  const relatedList = destinations.filter((d) =>
    destination.relatedDestinations.includes(d.slug)
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* 1. Cinematic Hero Presentation */}
      <div className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end bg-[#060A12] text-white overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060A12] via-[#090D16]/70 to-black/35" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32 w-full">
          {/* Breadcrumb back button */}
          <button
            onClick={() => onNavigate('/destinations')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-200 hover:text-white mb-6 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Destinations</span>
          </button>

          <div className="flex flex-wrap items-center gap-3 text-xs text-[#F59E0B] font-semibold uppercase tracking-widest mb-2">
            <span>{destination.division} Division</span>
            <span>·</span>
            <span>{destination.region}</span>
            <span>·</span>
            <span className="capitalize">{destination.category}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2">
            {destination.name}
          </h1>

          <div className="text-xl sm:text-2xl text-[#F59E0B] font-medium mb-6">
            {destination.bengaliName}
          </div>

          <p className="max-w-3xl text-sm sm:text-base text-stone-200 font-light leading-relaxed">
            {destination.shortDescription}
          </p>

          {/* Key Facts Ribbon */}
          <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-stone-400 uppercase text-[10px] block">Best Time to Visit</span>
              <span className="font-medium text-white">{destination.bestTimeToVisit.split('(')[0]}</span>
            </div>
            <div>
              <span className="text-stone-400 uppercase text-[10px] block">Suggested Duration</span>
              <span className="font-medium text-white">{destination.recommendedDuration}</span>
            </div>
            <div>
              <span className="text-stone-400 uppercase text-[10px] block">Coordinates</span>
              <span className="font-mono text-white text-[11px]">{destination.coordinates.lat.toFixed(4)}°N, {destination.coordinates.lng.toFixed(4)}°E</span>
            </div>
            <div>
              <span className="text-stone-400 uppercase text-[10px] block">Primary Focus</span>
              <span className="font-medium text-white capitalize">{destination.category} Exploration</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Reading Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview Narrative */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
              <span className="text-xs uppercase tracking-widest text-[#D97706] font-bold block mb-1">
                Overview & History
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">
                About {destination.name}
              </h2>
              <p className="text-stone-700 leading-relaxed font-light text-base">
                {destination.fullDescription}
              </p>

              {/* Why Visit */}
              <div className="mt-8 pt-6 border-t border-stone-100">
                <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-4">
                  Why Visit {destination.name}
                </h3>
                <ul className="space-y-2.5 text-sm text-stone-700">
                  {destination.whyVisit.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#133E32] text-white flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                        ✓
                      </span>
                      <span className="font-light">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Main Attractions */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
              <span className="text-xs uppercase tracking-widest text-[#D97706] font-bold block mb-1">
                Key Sights
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-6">
                Attractions & Landmarks
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {destination.mainAttractions.map((att, idx) => (
                  <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <span className="text-xs font-mono text-[#C59B27] font-bold block mb-1">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-base font-bold text-[#0F172A] mb-2">
                      {att.title}
                    </h3>
                    <p className="text-xs text-stone-600 font-light leading-relaxed">
                      {att.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Activities & Experiences */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
              <span className="text-xs uppercase tracking-widest text-[#D97706] font-bold block mb-1">
                Experiences
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">
                Recommended Activities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.activities.map((act, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-stone-200/80 text-xs text-stone-700">
                    <Sparkles className="w-4 h-4 text-[#C59B27] shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Get There */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
              <span className="text-xs uppercase tracking-widest text-[#D97706] font-bold block mb-1">
                Transit Logistics
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">
                How to Get There
              </h2>

              <div className="space-y-4">
                {destination.howToGetThere.byAir && (
                  <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <Plane className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs font-bold text-[#0F172A] uppercase block">
                        By Air (Domestic Flights)
                      </strong>
                      <p className="text-xs text-stone-600 font-light mt-1">
                        {destination.howToGetThere.byAir}
                      </p>
                    </div>
                  </div>
                )}

                {destination.howToGetThere.byRoad && (
                  <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <Bus className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs font-bold text-[#0F172A] uppercase block">
                        By Road (VIP Bus / Private Chauffeured Vehicle)
                      </strong>
                      <p className="text-xs text-stone-600 font-light mt-1">
                        {destination.howToGetThere.byRoad}
                      </p>
                    </div>
                  </div>
                )}

                {destination.howToGetThere.byTrain && (
                  <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <Train className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs font-bold text-[#0F172A] uppercase block">
                        By Train (Bangladesh Railway)
                      </strong>
                      <p className="text-xs text-stone-600 font-light mt-1">
                        {destination.howToGetThere.byTrain}
                      </p>
                    </div>
                  </div>
                )}

                {destination.howToGetThere.byWater && (
                  <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <Ship className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs font-bold text-[#0F172A] uppercase block">
                        By Water (River Cruiser / Ferry Launch)
                      </strong>
                      <p className="text-xs text-stone-600 font-light mt-1">
                        {destination.howToGetThere.byWater}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Local Gastronomy */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D97706] font-bold mb-1">
                <Utensils className="w-4 h-4 text-[#C59B27]" />
                <span>Culinary Recommendations</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#0F172A] mb-4">
                What to Eat in {destination.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.localFoods.map((food, idx) => (
                  <div key={idx} className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-700">
                    <strong className="text-[#0F172A] block mb-0.5">· {food}</strong>
                  </div>
                ))}
              </div>
            </section>

            {/* Responsible Travel & Safety */}
            <section className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#C59B27]/40 shadow-sm">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#0F172A] font-bold mb-2">
                <ShieldCheck className="w-5 h-5 text-[#C59B27]" />
                <span>Responsible Travel & Visitor Guidance</span>
              </div>
              <h2 className="font-serif text-xl font-bold text-[#0F172A] mb-4">
                Important Safety & Cultural Etiquette
              </h2>
              <ul className="space-y-2 text-xs text-stone-700 font-light">
                {destination.safetyResponsibleTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#C59B27] font-bold">⚠️</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Action Card: Plan This Destination */}
            <div className="bg-[#0F2F24] text-white p-6 rounded-2xl border border-white/10 shadow-lg">
              <span className="text-xs uppercase tracking-widest text-[#C59B27] font-semibold block mb-1">
                Plan Your Visit
              </span>
              <h3 className="font-serif text-xl font-bold mb-3">
                Ready to explore {destination.name}?
              </h3>
              <p className="text-xs text-stone-300 font-light leading-relaxed mb-6">
                Use our interactive itinerary planner to build a custom multi-day journey including {destination.name} and neighboring highlights.
              </p>
              <button
                onClick={() => onNavigate('/itineraries')}
                className="w-full py-3 bg-[#C59B27] hover:bg-[#D4AF37] text-[#0F172A] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center"
              >
                Open Trip Planner
              </button>
            </div>

            {/* Seasonal Advice Box */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D97706] font-bold mb-2">
                <Calendar className="w-4 h-4 text-[#C59B27]" />
                <span>Seasonal Advisory</span>
              </div>
              <h4 className="font-serif text-base font-bold text-[#0F172A] mb-2">
                When to Go
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed mb-4">
                {destination.seasonalAdvice}
              </p>
              <button
                onClick={() => onNavigate('/seasons')}
                className="text-xs font-semibold text-[#D97706] hover:underline"
              >
                Learn about Bangladesh's Six Seasons →
              </button>
            </div>

            {/* Related Destinations */}
            {relatedList.length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h4 className="font-serif text-base font-bold text-[#0F172A] mb-4">
                  Related Destinations
                </h4>
                <div className="space-y-4">
                  {relatedList.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => onNavigate(`/destinations/${rel.slug}`)}
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-stone-900">
                        <img
                          src={rel.image}
                          alt={rel.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-serif text-xs font-bold text-[#0F172A] group-hover:text-[#D97706] truncate">
                          {rel.name}
                        </h5>
                        <span className="text-[10px] text-stone-500 block truncate">
                          {rel.region}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#D97706] shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
