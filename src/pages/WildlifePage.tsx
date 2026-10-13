import React from 'react';
import { wildlifeAnimals } from '../data/wildlife';
import { Feather, ShieldCheck, AlertTriangle, Eye, Compass, ArrowRight } from 'lucide-react';

interface WildlifePageProps {
  onNavigate: (path: string) => void;
}

export const WildlifePage: React.FC<WildlifePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-20">
      {/* Banner */}
      <div className="bg-[#0A2019] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C59B27] font-semibold mb-2">
            <Feather className="w-4 h-4 text-[#C59B27]" />
            <span>Natural Heritage & Conservation</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Wildlife of Bangladesh
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-300 max-w-2xl font-light leading-relaxed">
            From the world’s only mangrove-adapted Royal Bengal tigers in the Sundarbans to singing Western Hoolock gibbons in northeastern rainforests and hundreds of thousands of winter migratory waterfowl across wetland haors.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-14">
        {/* Sundarbans Mangrove Spotlight Card */}
        <div className="bg-[#0F2F24] text-white rounded-2xl overflow-hidden shadow-xl border border-white/10 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-full">
            <img
              src="/src/assets/images/sundarbans_mangrove_wildlife_1791862156168.jpg"
              alt="Sundarbans tidal mangrove forest sanctuary"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-xs text-white/90">
              The Sundarbans: 10,000 km² tidal mangrove biome shared between Bangladesh and India
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C59B27] font-semibold block mb-1">
                UNESCO World Heritage Sanctuary
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold">
                The Realm of the Royal Bengal Tiger
              </h2>
              <p className="mt-4 text-sm text-stone-200 leading-relaxed font-light">
                The Sundarbans represents the world's largest contiguous tidal halophytic mangrove forest. Here, tigers have developed singular biological adaptations: drinking brackish water, swimming across kilometer-wide river currents, and preying upon spotted deer and wild boars along tidal mudflats.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                  <span>Apex Sanctuary: Kotka, Kochikhali, and Hiron Point wildlife reserves.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                  <span>Coexisting Fauna: Spotted deer, estuarine crocodiles, and Asian small-clawed otters.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                  <span>Cetacean Sanctuary: Ganges river dolphins and Irrawaddy river dolphins.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => onNavigate('/destinations/sundarbans')}
                className="py-2.5 px-5 bg-[#C59B27] hover:bg-[#D4AF37] text-[#0F2F24] rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>Read Sundarbans Destination Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Wildlife Catalog Grid */}
        <div>
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#0D5C58] font-bold block mb-1">
              Species Directory
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F2F24]">
              Iconic Animals of the Bengal Delta
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wildlifeAnimals.map((animal) => (
              <div
                key={animal.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                    <img
                      src={animal.image}
                      alt={animal.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] uppercase font-semibold px-2 py-0.5 rounded backdrop-blur-sm">
                      {animal.category}
                    </div>

                    <div className="absolute top-3 right-3 bg-[#C59B27] text-[#0F2F24] text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      {animal.status}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] text-[#C59B27] font-semibold block">
                        {animal.bengaliName}
                      </span>
                      <h3 className="font-serif text-xl font-bold">
                        {animal.name}
                      </h3>
                      <span className="text-[10px] text-stone-300 font-mono italic block">
                        {animal.scientificName}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    <p className="text-xs text-stone-600 font-light leading-relaxed">
                      {animal.description}
                    </p>

                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-2">
                      <div>
                        <span className="text-[10px] uppercase text-stone-400 font-bold block">Habitat</span>
                        <span className="text-stone-700">{animal.habitat}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-stone-400 font-bold block">Where to Spot</span>
                        <span className="text-stone-700">{animal.whereToSpot}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Responsible Travel Rule */}
                <div className="p-4 bg-[#FAF8F5] border-t border-stone-200 text-[11px] text-stone-600 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0D5C58] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-800">Ethical Rule: </strong>
                    <span className="font-light">{animal.responsibleTravelRule}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Responsible Wildlife Code of Conduct */}
        <section className="bg-[#FAF8F5] border border-[#C59B27]/40 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#0F2F24] font-bold mb-2">
            <ShieldCheck className="w-5 h-5 text-[#C59B27]" />
            <span>Forest Department Conservation Code</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#0F2F24] mb-4">
            Ethical Wildlife Observation in Bangladesh
          </h3>
          <p className="text-sm text-stone-700 font-light leading-relaxed mb-6">
            Bangladesh's protected forests and wetlands are fragile ecosystems. International visitors are urged to follow these non-negotiable principles:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700">
            <div className="p-4 bg-white rounded-xl border border-stone-200">
              <strong className="text-[#0F2F24] block mb-1">1. Silence on Waterways:</strong>
              When entering narrow creek channels on wooden dinghies, avoid speaking, engine revving, or tapping gunwales. Silence ensures animals are not alarmed while feeding.
            </div>
            <div className="p-4 bg-white rounded-xl border border-stone-200">
              <strong className="text-[#0F2F24] block mb-1">2. Zero Food Interaction:</strong>
              Never offer food to monkeys, deer, or birds. Feeding wild animals habituates them to human food, disrupts migration, and causes dangerous aggression.
            </div>
            <div className="p-4 bg-white rounded-xl border border-stone-200">
              <strong className="text-[#0F2F24] block mb-1">3. Armed Ranger Protocol:</strong>
              In the Sundarbans, always remain within visual range of your designated Forest Department guard. Tigers are silent ambush predators.
            </div>
            <div className="p-4 bg-white rounded-xl border border-stone-200">
              <strong className="text-[#0F2F24] block mb-1">4. Zero Plastic Discharge:</strong>
              Strictly retain all plastic wrappers, bottles, and batteries aboard vessels for disposal at authorized mainland facilities.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
