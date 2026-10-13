import React, { useState } from 'react';
import { 
  Compass, 
  Calendar, 
  Clock, 
  DollarSign, 
  Check, 
  Copy, 
  Printer, 
  Share2, 
  Sparkles, 
  MapPin, 
  ChevronRight,
  ShieldAlert,
  Car
} from 'lucide-react';
import { itineraries } from '../../data/itineraries';
import { destinations } from '../../data/destinations';

interface TripPlannerProps {
  onSelectDestination?: (slug: string) => void;
}

export const TripPlanner: React.FC<TripPlannerProps> = ({ onSelectDestination }) => {
  const [duration, setDuration] = useState<number>(5);
  const [pace, setPace] = useState<'Relaxed' | 'Balanced' | 'Active'>('Balanced');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'nature',
    'wildlife',
    'food'
  ]);
  const [budgetTier, setBudgetTier] = useState<'budget' | 'comfort' | 'luxury'>('comfort');
  const [copied, setCopied] = useState(false);

  const interestOptions = [
    { id: 'nature', label: 'Tea Gardens & Forests', icon: '🍃' },
    { id: 'wildlife', label: 'Sundarbans & Tigers', icon: '🐅' },
    { id: 'hills', label: 'Sajek Clouds & Hills', icon: '⛰️' },
    { id: 'heritage', label: 'Mughal & Ancient Bengal', icon: '🕌' },
    { id: 'food', label: 'Culinary & Hilsa Feast', icon: '🍲' },
    { id: 'beaches', label: 'Bay of Bengal & Coral', icon: '🌊' },
  ];

  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      if (selectedInterests.length > 1) {
        setSelectedInterests(selectedInterests.filter((item) => item !== id));
      }
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  const matchingItinerary = itineraries.find((it) => it.durationDays === duration) || itineraries[1];

  const costEstimates = {
    budget: Math.round(duration * 40),
    comfort: Math.round(duration * 95),
    luxury: Math.round(duration * 190),
  };

  const handleCopyItinerary = () => {
    const text = `DISCOVER BANGLADESH — CUSTOM ITINERARY
Duration: ${duration} Days | Pace: ${pace} | Budget Tier: ${budgetTier.toUpperCase()}
Interests: ${selectedInterests.join(', ')}

Highlights:
${matchingItinerary.highlights.map((h) => `- ${h}`).join('\n')}

Daily Plan:
${matchingItinerary.days.map((d) => `Day ${d.day}: ${d.title} (${d.location})\nActivities: ${d.activities.join('; ')}\nTips: ${d.travelTips}\n`).join('\n')}

Estimated Cost: ~$${costEstimates[budgetTier]} USD (Excludes international flights).
Generated at Discover Bangladesh: A Land of Rivers, Stories & Wonders.`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-10">
      <div className="max-w-3xl mb-8">
        <span className="text-xs uppercase tracking-widest text-[#D97706] font-bold block mb-1">
          Interactive Journey Architect
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A]">
          Plan Your Journey in Bangladesh
        </h2>
        <p className="text-sm text-slate-600 mt-2 font-light leading-relaxed">
          Customize your journey by duration, preferred travel pace, and passions. Our planning engine generates an actionable day-by-day itinerary with realistic travel logistics and budget estimates.
        </p>
      </div>

      {/* Selector Controls Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-slate-50 rounded-xl border border-slate-200 mb-10">
        {/* 1. Trip Duration */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
            1. Trip Duration
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {[3, 5, 7, 10].map((days) => (
              <button
                key={days}
                type="button"
                onClick={() => setDuration(days)}
                className={`py-2 px-3 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  duration === days
                    ? 'bg-[#0F172A] text-white shadow'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {days} Days
              </button>
            ))}
          </div>
        </div>

        {/* 2. Travel Pace */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
            2. Travel Pace
          </label>
          <div className="flex flex-col gap-1.5">
            {(['Relaxed', 'Balanced', 'Active'] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPace(p)}
                className={`py-1.5 px-3 text-xs font-semibold rounded-lg text-left transition-all cursor-pointer flex items-center justify-between ${
                  pace === p
                    ? 'bg-[#0F172A] text-white shadow'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <span>{p}</span>
                {pace === p && <Check className="w-3.5 h-3.5 text-[#F59E0B]" />}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Budget Range */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
            3. Budget Comfort
          </label>
          <div className="flex flex-col gap-1.5">
            {[
              { id: 'budget', label: 'Backpacker / Budget', desc: 'Trains & Local Guesthouses' },
              { id: 'comfort', label: 'Mid-Tier Comfort', desc: 'AC Car & 3-4★ Boutique' },
              { id: 'luxury', label: 'Premium / Luxury', desc: 'Chauffeured & 5★ Resorts' },
            ].map((tier) => (
              <button
                key={tier.id}
                type="button"
                onClick={() => setBudgetTier(tier.id as any)}
                className={`py-1.5 px-2.5 text-xs rounded-lg text-left transition-all cursor-pointer ${
                  budgetTier === tier.id
                    ? 'bg-[#0F172A] text-white shadow font-semibold'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{tier.label}</span>
                  {budgetTier === tier.id && <Check className="w-3.5 h-3.5 text-[#F59E0B]" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 4. Passions & Interests */}
        <div className="lg:col-span-1">
          <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
            4. Your Interests
          </label>
          <div className="grid grid-cols-1 gap-1.5 max-h-36 overflow-y-auto pr-1">
            {interestOptions.map((item) => {
              const active = selectedInterests.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleInterest(item.id)}
                  className={`py-1 px-2.5 text-[11px] rounded-lg text-left transition-all cursor-pointer flex items-center justify-between ${
                    active
                      ? 'bg-[#1E293B] text-white font-medium'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <span>{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </span>
                  {active && <Check className="w-3 h-3 text-[#F59E0B] shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Generated Itinerary Output Display */}
      <div className="border border-slate-300 rounded-xl bg-white shadow-sm overflow-hidden" id="printable-itinerary">
        {/* Itinerary Header Banner */}
        <div className="p-6 bg-[#0F172A] text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F59E0B] font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Recommended Route</span>
            </div>
            <h3 className="font-serif text-2xl font-bold mt-1">
              {matchingItinerary.title}
            </h3>
            <p className="text-xs text-stone-300 mt-1 font-light max-w-xl">
              {matchingItinerary.summary}
            </p>
          </div>

          {/* Action Toolbar: Copy & Print */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyItinerary}
              className="py-2 px-3 bg-white/10 hover:bg-white/20 active:scale-95 text-xs text-white font-medium rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Plan'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="py-2 px-3 bg-[#F59E0B] hover:bg-[#D97706] active:scale-95 text-xs text-[#090D16] font-bold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Export PDF</span>
            </button>
          </div>
        </div>

        {/* Quick Highlights & Estimated Budget Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border-b border-slate-200 bg-slate-50 p-4 text-xs">
          <div className="py-2 sm:py-0 px-2">
            <span className="text-slate-500 uppercase tracking-wider text-[10px] block">
              Estimated Total Cost (Per Person)
            </span>
            <span className="text-base font-serif font-bold text-[#0F172A]">
              ~${costEstimates[budgetTier]} USD
            </span>
            <span className="text-[10px] text-slate-500 block">
              Includes accommodations, domestic transport & meals
            </span>
          </div>

          <div className="py-2 sm:py-0 px-2">
            <span className="text-slate-500 uppercase tracking-wider text-[10px] block">
              Pace & Style
            </span>
            <span className="text-sm font-semibold text-slate-800">
              {pace} · {duration} Days
            </span>
            <span className="text-[10px] text-slate-500 block">
              Optimized travel legs with realistic road times
            </span>
          </div>

          <div className="py-2 sm:py-0 px-2">
            <span className="text-slate-500 uppercase tracking-wider text-[10px] block">
              Transport Formula
            </span>
            <span className="text-xs text-slate-700 font-medium line-clamp-2">
              {matchingItinerary.transportOverview}
            </span>
          </div>
        </div>

        {/* Day-by-Day Journey Timeline */}
        <div className="p-6 divide-y divide-slate-200">
          {matchingItinerary.days.map((day) => (
            <div key={day.day} className="py-5 first:pt-2 last:pb-2">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    0{day.day}
                  </span>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#0F172A]">
                      {day.title}
                    </h4>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#F59E0B]" />
                      <span>{day.location}</span>
                    </span>
                  </div>
                </div>

                <div className="text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 md:text-right">
                  <span className="text-slate-400 text-[10px] uppercase block">Stay:</span>
                  <span className="font-medium text-slate-800">{day.recommendedStay}</span>
                </div>
              </div>

              {/* Day Activities */}
              <div className="mt-3 pl-11">
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {day.activities.map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#0284C7] font-bold">✓</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>

                {/* Practical Tip */}
                <div className="mt-3 text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-200 flex items-start gap-2">
                  <span className="font-semibold text-[#D97706] uppercase tracking-wider shrink-0">
                    Travel Tip:
                  </span>
                  <span>{day.travelTips}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency & Disclaimer Box */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
          <p className="font-light leading-relaxed">
            <strong>Important note for travelers:</strong> All suggested schedules and cost calculations are realistic planning estimates. Actual travel times vary based on monsoon weather, river ferry connections, and highway conditions. Discover Bangladesh does not sell commercial bookings directly; we provide curated independent travel blueprints.
          </p>
        </div>
      </div>
    </div>
  );
};
