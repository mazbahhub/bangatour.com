import React, { useState } from 'react';
import { Waves, ArrowRight, Compass, Droplets } from 'lucide-react';

interface RiverStoryScrollProps {
  onNavigateDestination?: (slug: string) => void;
}

export const RiverStoryScroll: React.FC<RiverStoryScrollProps> = ({ onNavigateDestination }) => {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      id: 'highlands',
      number: '01',
      title: 'Foothill Currents & Floating Swamps',
      river: 'Surma & Jadukata Rivers (Northeast)',
      region: 'Sylhet & Sunamganj Foothills',
      description: 'Nourished by the heaviest rainfall on earth in the Meghalaya hills across the border, crystal mountain waters rush into Bangladesh, transforming valleys into the vast inland sea of Tanguar Haor and nourishing the flooded freshwater forests of Ratargul.',
      destinations: [
        { name: 'Tanguar Haor', slug: 'tanguar-haor' },
        { name: 'Ratargul Swamp Forest', slug: 'ratargul-swamp' },
      ],
      quote: '"The rivers do not merely cross Bangladesh; they breathe life into its soil, turning water into our oldest highway."'
    },
    {
      id: 'confluence',
      number: '02',
      title: 'The Great Confluence: Padma & Jamuna',
      river: 'Padma (Ganges) & Jamuna (Brahmaputra)',
      region: 'Central Delta & Greater Dhaka',
      description: 'The Himalayas meet the Tibetan plateau in Bangladesh. The mighty Jamuna unites with the holy Padma at Goalondo to form a river so vast that opposite banks are often invisible through the mist. Along their banks, 400-year-old Mughal trade flourished in Old Dhaka.',
      destinations: [
        { name: 'Old Dhaka & Sadarghat', slug: 'old-dhaka' },
        { name: 'Sonargaon Ancient Capital', slug: 'sonargaon' },
      ],
      quote: '"Padma’s silver-scaled Hilsa carries the taste of sweet silt, celebrated in medieval poetry as the river’s supreme gift."'
    },
    {
      id: 'backwaters',
      number: '03',
      title: 'The Venice of Bengal: Floating Backwaters',
      river: 'Kirtankhola & Sandha Tidal Canals',
      region: 'Barishal & Jhalakathi Delta',
      description: 'Here, roads dissolve into hundreds of crisscrossing tidal canals. For over two centuries, farmers have loaded wooden canoes with crisp guavas, floating rice, and river fish, trading boat-to-boat at the dawn floating markets of Bhimruli and Kuriana.',
      destinations: [
        { name: 'Barishal Backwaters', slug: 'barishal-backwaters' },
        { name: 'Kuakata Coastal Horizon', slug: 'kuakata' },
      ],
      quote: '"Generations of delta farmers have lived with the rhythm of ebb and flow, where every home has a boat moored at the front porch."'
    },
    {
      id: 'mangroves',
      number: '04',
      title: 'The Realm of the Tiger & The Bay of Bengal',
      river: 'Passur, Shibsa & Meghna Delta Estuary',
      region: 'Sundarbans UNESCO World Heritage Reserve',
      description: 'Where the delta surrenders to the vast Indian Ocean, the waters turn brackish and tidal. Over ten thousand square kilometers of mangrove canopy, breathing pneumatophore roots, and tidal mudflats shelter the Royal Bengal tiger and Ganges river dolphins.',
      destinations: [
        { name: 'Sundarbans Mangrove Forest', slug: 'sundarbans' },
        { name: 'Bagerhat Sixty Dome City', slug: 'bagerhat' },
      ],
      quote: '"Twice a day, the tides conceal and reveal an entire wilderness. A landscape where the tiger rules and the waters never sleep."'
    }
  ];

  return (
    <section className="py-24 bg-[#070B14] text-[#FAF8F5] relative overflow-hidden">
      {/* Background flowing river SVG pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path
            d="M-100 200 C 300 150, 400 400, 700 300 C 1000 200, 1100 600, 1300 550"
            stroke="#38BDF8"
            strokeWidth="80"
            strokeLinecap="round"
          />
          <path
            d="M-50 450 C 250 400, 450 650, 800 500 C 1050 400, 1150 750, 1300 700"
            stroke="#F59E0B"
            strokeWidth="50"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F59E0B] font-semibold mb-2">
            <Waves className="w-4 h-4 text-[#F59E0B]" />
            <span>The Riverine Odyssey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Born of Rivers: The Story of Bengal
          </h2>
          <p className="text-sm sm:text-base text-stone-300 mt-3 font-light leading-relaxed">
            With more than 700 rivers weaving across the landscape, Bangladesh is the largest active river delta on Earth. Follow the waters as they flow from the northern hills to the mangrove heartland of the Sundarbans.
          </p>
        </div>

        {/* Interactive Chapters Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Chapter Selector Rail (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {chapters.map((ch, idx) => {
              const isActive = activeChapter === idx;
              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveChapter(idx)}
                  className={`p-5 rounded-xl text-left transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#111C33] border-[#F59E0B] shadow-xl translate-x-1'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 text-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono tracking-widest text-[#F59E0B] font-bold">
                      {ch.number}
                    </span>
                    <span className="text-[11px] text-stone-400">{ch.region}</span>
                  </div>
                  <h3 className={`font-serif text-lg font-bold ${isActive ? 'text-white' : 'text-stone-200'}`}>
                    {ch.title}
                  </h3>
                  <div className="text-xs text-[#38BDF8] flex items-center gap-1.5 mt-1 font-light">
                    <Droplets className="w-3 h-3 text-[#F59E0B]" />
                    <span>{ch.river}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Chapter Visual Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#0E172A] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-xs font-mono text-[#F59E0B] tracking-wider uppercase block">
                  Chapter {chapters[activeChapter].number} · Geographic Feature
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  {chapters[activeChapter].title}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#1E293B] border border-[#F59E0B]/40 flex items-center justify-center text-[#F59E0B]">
                <Compass className="w-5 h-5" />
              </div>
            </div>

            <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-light mb-6">
              {chapters[activeChapter].description}
            </p>

            {/* Editorial quote */}
            <div className="p-4 bg-[#070B14] border-l-2 border-[#F59E0B] rounded-r-lg my-6 italic font-serif text-sm text-stone-200 leading-relaxed">
              {chapters[activeChapter].quote}
            </div>

            {/* Connected Destination Shortcuts */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-[11px] uppercase tracking-wider text-stone-400 block mb-3 font-semibold">
                Explore Destinations Along This River Network:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {chapters[activeChapter].destinations.map((dest) => (
                  <button
                    key={dest.slug}
                    onClick={() => onNavigateDestination && onNavigateDestination(dest.slug)}
                    className="px-4 py-2 bg-white/10 hover:bg-[#F59E0B] hover:text-[#090D16] text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>{dest.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
