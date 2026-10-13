import React, { useState } from 'react';
import { itineraries } from '../data/itineraries';
import { TripPlanner } from '../components/planner/TripPlanner';
import { Calendar, Clock, MapPin, Sparkles, Check, ChevronRight, DollarSign, Car } from 'lucide-react';

interface ItinerariesPageProps {
  onNavigate: (path: string) => void;
}

export const ItinerariesPage: React.FC<ItinerariesPageProps> = ({ onNavigate }) => {
  const [selectedItineraryId, setSelectedItineraryId] = useState<string>(itineraries[1].id); // 5 days default
  const activeItinerary = itineraries.find((it) => it.id === selectedItineraryId) || itineraries[0];

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-20">
      {/* Banner */}
      <div className="bg-[#0F2F24] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C59B27] font-semibold mb-2">
            <Calendar className="w-4 h-4 text-[#C59B27]" />
            <span>Curated Journeys & Blueprints</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Suggested Bangladesh Itineraries
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-300 max-w-2xl font-light leading-relaxed">
            Thoughtfully planned, realistic journeys tested by international travelers. From 3-day express highlights to 10-day grand odysseys across rivers, tea estates, cloud valleys, and mangroves.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {/* Curated Itinerary Selector Tabs */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-bold text-[#0F2F24]">
              Choose Your Duration
            </h2>
            <span className="text-xs text-stone-500">
              Realistic travel times accounting for delta transit
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {itineraries.map((it) => (
              <button
                key={it.id}
                onClick={() => setSelectedItineraryId(it.id)}
                className={`p-4 rounded-xl text-left transition-all cursor-pointer border ${
                  selectedItineraryId === it.id
                    ? 'bg-[#0F2F24] text-white border-[#0F2F24] shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-50 border-stone-200'
                }`}
              >
                <span className="text-xs font-mono font-bold text-[#C59B27] block">
                  {it.durationDays} Days / {it.durationDays - 1} Nights
                </span>
                <h3 className="font-serif text-base font-bold truncate mt-1">
                  {it.title}
                </h3>
                <span className="text-[11px] opacity-70 block mt-1">
                  Pace: {it.pace}
                </span>
              </button>
            ))}
          </div>

          {/* Active Curated Plan Detail Card */}
          <div className="mt-8 bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="p-6 sm:p-8 bg-stone-50 border-b border-stone-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wider mb-1">
                    <span className="font-bold text-[#0D5C58]">{activeItinerary.durationDays} Days</span>
                    <span>·</span>
                    <span>Pace: {activeItinerary.pace}</span>
                    <span>·</span>
                    <span>Target: {activeItinerary.targetAudience.split(',')[0]}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2F24]">
                    {activeItinerary.title}
                  </h3>
                  <p className="text-sm text-stone-600 mt-2 font-light max-w-2xl">
                    {activeItinerary.summary}
                  </p>
                </div>

                {/* Route ribbon */}
                <div className="p-4 bg-white rounded-xl border border-stone-200 text-xs shrink-0 max-w-sm">
                  <span className="text-[10px] text-stone-400 uppercase font-semibold block mb-1">
                    Route Chain:
                  </span>
                  <div className="font-medium text-stone-800 leading-relaxed">
                    {activeItinerary.route.join(' ➔ ')}
                  </div>
                </div>
              </div>

              {/* Budget Estimator Banner */}
              <div className="mt-6 pt-4 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3 bg-white rounded-lg border border-stone-200">
                  <span className="text-stone-400 uppercase text-[10px] block">Backpacker Budget</span>
                  <span className="text-base font-serif font-bold text-[#0F2F24]">
                    ~${activeItinerary.budgetEstimateUSD.backpacker} USD
                  </span>
                  <span className="text-[10px] text-stone-500 block">Hostels & 2nd class trains</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-stone-200">
                  <span className="text-stone-400 uppercase text-[10px] block">Mid-Tier Comfort</span>
                  <span className="text-base font-serif font-bold text-[#0F2F24]">
                    ~${activeItinerary.budgetEstimateUSD.comfort} USD
                  </span>
                  <span className="text-[10px] text-stone-500 block">3-4★ Boutique & AC transit</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-stone-200">
                  <span className="text-stone-400 uppercase text-[10px] block">Premium / Private Tour</span>
                  <span className="text-base font-serif font-bold text-[#0F2F24]">
                    ~${activeItinerary.budgetEstimateUSD.luxury} USD
                  </span>
                  <span className="text-[10px] text-stone-500 block">5★ Resorts & Chauffeured SUV</span>
                </div>
              </div>
            </div>

            {/* Day by Day Breakdown */}
            <div className="p-6 sm:p-8 divide-y divide-stone-200">
              {activeItinerary.days.map((day) => (
                <div key={day.day} className="py-6 first:pt-2 last:pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#133E32] text-white flex items-center justify-center font-bold text-xs shrink-0">
                        {day.day}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-[#0F2F24]">
                        {day.title}
                      </h4>
                    </div>
                    <span className="text-xs text-stone-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
                      <span>{day.location}</span>
                    </span>
                  </div>

                  <div className="pl-11 space-y-3">
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      {day.activities.map((act, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#0D5C58] font-bold">✓</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-4 text-xs text-stone-600 pt-2">
                      <div className="bg-stone-50 px-3 py-1.5 rounded border border-stone-200">
                        <strong className="text-stone-800">Stay: </strong>
                        <span>{day.recommendedStay}</span>
                      </div>
                      <div className="bg-[#FAF8F5] px-3 py-1.5 rounded border border-[#C59B27]/30 text-stone-700">
                        <strong className="text-[#0D5C58]">Tip: </strong>
                        <span>{day.travelTips}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Embedded Interactive Trip Planner Engine */}
        <section className="pt-6">
          <TripPlanner onSelectDestination={(slug) => onNavigate(`/destinations/${slug}`)} />
        </section>
      </div>
    </div>
  );
};
