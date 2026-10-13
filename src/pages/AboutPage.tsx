import React from 'react';
import { Compass, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-20">
      <div className="bg-[#0F2F24] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C59B27] font-semibold mb-2">
            <Compass className="w-4 h-4 text-[#C59B27]" />
            <span>Mission & Philosophy</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            About Discover Bangladesh
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-300 max-w-2xl font-light leading-relaxed">
            "A Land of Rivers, Stories & Wonders." An independent, high-fidelity cultural publication and destination planning platform created to introduce Bangladesh to the world.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4 text-stone-700 leading-relaxed font-light text-sm sm:text-base">
          <h2 className="font-serif text-2xl font-bold text-[#0F2F24]">
            Our Purpose
          </h2>
          <p>
            For too long, international travelers have overlooked Bangladesh or associated it merely with industrial headlines. Yet within its borders lies the largest active river delta on earth, the world's largest mangrove forest, the longest natural sea beach, 400-year-old Mughal architectural marvels, ancient Buddhist universities, and six distinct seasonal rhythms.
          </p>
          <p>
            <strong>Discover Bangladesh</strong> was founded to provide international tourists, digital nomads, nature photographers, and cultural travelers with an authentic, production-grade guide and planning platform that respects the real geography, gastronomy, and cultural dignity of the Bengal delta.
          </p>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#0F2F24]">
            Core Editorial Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700 pt-2">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <strong className="text-[#0F2F24] text-sm block mb-1">Zero Fabricated Facts</strong>
              We do not invent transport timetables, fake prices, or generic AI claims. All travel notes, seasons, and logistics are grounded in actual Bangladeshi travel realities.
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <strong className="text-[#0F2F24] text-sm block mb-1">Responsible Wildlife Tourism</strong>
              We strictly enforce Forest Department ethical rules. We never encourage approaching or disturbing wild animals, and support community-led conservation in the Sundarbans.
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <strong className="text-[#0F2F24] text-sm block mb-1">Cultural Dignity & Hospitality</strong>
              We celebrate Bengal's ancient traditions of hospitality, indigenous hill communities, master Jamdani weavers, and local food heritage with reverence.
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <strong className="text-[#0F2F24] text-sm block mb-1">Practical Ground Guidance</strong>
              We provide realistic road transit estimates, verified official government visa portals, emergency contacts (999), and safety advice.
            </div>
          </div>
        </section>

        <div className="p-8 bg-[#0F2F24] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl font-bold">Start Your Journey Today</h3>
            <p className="text-xs text-stone-300 font-light mt-1">
              Explore our curated itineraries or build your custom travel blueprint.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/itineraries')}
            className="py-3 px-6 bg-[#C59B27] hover:bg-[#D4AF37] text-[#0F2F24] rounded-lg text-xs font-bold uppercase tracking-wider shrink-0 transition-colors cursor-pointer"
          >
            Plan Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};
