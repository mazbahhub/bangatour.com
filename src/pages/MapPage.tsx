import React from 'react';
import { InteractiveBangladeshMap } from '../components/map/InteractiveBangladeshMap';
import { Compass, Waves, MapPin, ArrowLeft } from 'lucide-react';

interface MapPageProps {
  onNavigate: (path: string) => void;
}

export const MapPage: React.FC<MapPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#071912] pt-24 pb-20 text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white mb-4 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C59B27] font-semibold mb-1">
              <Compass className="w-4 h-4 text-[#C59B27]" />
              <span>Full Geographic Explorer</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Cartographic Map of Bangladesh
            </h1>
            <p className="mt-2 text-sm text-white/70 max-w-2xl font-light">
              Explore Bangladesh's geographic outline, major delta river corridors (Padma, Jamuna, Meghna), administrative divisions, and tourist destinations.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/itineraries')}
            className="py-2.5 px-5 bg-[#C59B27] hover:bg-[#D4AF37] text-[#0F2F24] rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
          >
            Open Trip Planner
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveBangladeshMap
          onSelectDestination={(slug) => onNavigate(`/destinations/${slug}`)}
        />
      </div>
    </div>
  );
};
