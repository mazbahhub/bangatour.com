import React from 'react';
import { FoodItem } from '../types';
import { foods } from '../data/foods';
import { Utensils, ArrowLeft, ArrowRight, ShieldCheck, Sparkles, AlertCircle, Heart } from 'lucide-react';

interface FoodDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const FoodDetailPage: React.FC<FoodDetailPageProps> = ({ slug, onNavigate }) => {
  const food = foods.find((f) => f.slug === slug) || foods[0];
  const isHilsa = food.slug === 'shorshe-ilish';

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      {/* Hero */}
      <div className="relative min-h-[50vh] flex items-end bg-[#071912] text-white overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091D16] via-[#091D16]/65 to-black/35" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32 w-full">
          <button
            onClick={() => onNavigate('/food')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]/80 hover:text-white mb-6 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Bengal Gastronomy</span>
          </button>

          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C59B27] font-semibold mb-2">
            <span>{food.region}</span>
            <span>·</span>
            <span>{food.bengaliName}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-2">
            {food.name}
          </h1>

          <p className="max-w-2xl text-sm sm:text-base text-stone-200 font-light leading-relaxed">
            {food.flavorProfile}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Reading Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Cultural Significance & Heritage */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
              <span className="text-xs uppercase tracking-widest text-[#0D5C58] font-bold block mb-1">
                Heritage & Folklore
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#0F2F24] mb-3">
                Cultural Significance
              </h2>
              <p className="text-stone-700 leading-relaxed font-light text-base">
                {food.culturalSignificance}
              </p>
            </section>

            {/* Preparation & Alchemy */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
              <span className="text-xs uppercase tracking-widest text-[#0D5C58] font-bold block mb-1">
                The Culinary Technique
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#0F2F24] mb-3">
                Traditional Preparation & Cooking
              </h2>
              <p className="text-stone-700 leading-relaxed font-light text-sm mb-6">
                {food.preparationStyle}
              </p>

              <h3 className="font-serif text-base font-bold text-[#0F2F24] mb-3">
                Key Authentic Ingredients:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {food.keyIngredients.map((ing, idx) => (
                  <div key={idx} className="p-2.5 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D5C58]" />
                    <span>{ing}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* In-depth Special Section for Hilsa */}
            {isHilsa && (
              <section className="bg-[#0F2F24] text-white p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C59B27] font-semibold block mb-1">
                    Special In-Depth Monograph
                  </span>
                  <h3 className="font-serif text-2xl font-bold">
                    The Padma vs. Meghna River Nuance
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed mt-2">
                    In Bangladesh’s bustling fish markets, connoisseurs immediately distinguish between the catch of the Padma and Meghna rivers. The Padma’s specific riverbed silt, sweet freshwater currents, and plankton yield fish with an extraordinarily soft, melt-in-the-mouth texture and sweet grassy aroma. Meghna Hilsa, while broader and firmer, provides a robust umami favored for hearty slow braises.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/15">
                  <h4 className="font-serif text-lg font-bold text-[#C59B27] mb-2">
                    Monsoon Ritual: Khichuri & Begun Bhaja Pairing
                  </h4>
                  <p className="text-xs text-stone-200 font-light leading-relaxed">
                    No monsoon downpour in Bangladesh is celebrated without "Barshar Khichuri"—steaming spiced rice and roasted moong lentils cooked with ginger, cumin, and whole spices, flanked by crispy pan-fried Hilsa, golden fried eggplant fritters, and tangy mustard oil dips.
                  </p>
                </div>

                <div className="p-4 bg-[#091D16] rounded-xl border border-[#C59B27]/40 text-xs text-stone-200 space-y-2">
                  <div className="flex items-center gap-2 text-[#C59B27] font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Responsible Sourcing & National Conservation Bans</span>
                  </div>
                  <p className="font-light leading-relaxed">
                    Bangladesh accounts for over 75% of global Hilsa supply. To protect the species:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 font-light">
                    <li><strong>October 22-Day Breeding Ban:</strong> All Hilsa fishing is legally suspended across river sanctuaries during the peak spawning full moon.</li>
                    <li><strong>Jatka Protection (March–April):</strong> Juvenile Hilsa (under 25 cm, called Jatka) are strictly protected to allow them to mature into open waters.</li>
                  </ul>
                  <p className="font-light">
                    As an ethical traveler, respect these annual windows by enjoying alternative sustainable delta river fish during official bans.
                  </p>
                </div>

                {/* FAQ for Hilsa */}
                <div className="pt-6 border-t border-white/15">
                  <h4 className="font-serif text-lg font-bold mb-4">
                    Frequently Asked Questions about Hilsa
                  </h4>
                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                      <strong className="text-white block mb-0.5">Q: Does Hilsa have many bones?</strong>
                      <span className="text-stone-300 font-light">
                        Yes, Hilsa is famous for fine intramuscular Y-bones. Bengalis learn the delicate art of separating bones using thumb and forefinger while eating with rice. Dedicated boneless Hilsa fillet preparations are also available at high-end dining establishments.
                      </span>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                      <strong className="text-white block mb-0.5">Q: Where is the best place to eat authentic Shorshe Ilish?</strong>
                      <span className="text-stone-300 font-light">
                        The riverbanks of Mawa Ghat overlooking the Padma Bridge, heritage dining rooms in Old Dhaka, or during the monsoon harvest across riverside towns.
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Where to Try */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
              <span className="text-xs uppercase tracking-wider text-[#0D5C58] font-bold block mb-1">
                Gastronomy Locator
              </span>
              <h4 className="font-serif text-base font-bold text-[#0F2F24] mb-2">
                Where to Taste {food.name}
              </h4>
              <p className="text-xs text-stone-700 font-light leading-relaxed mb-4">
                {food.whereToTry}
              </p>
            </div>

            {/* Dietary Information */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
              <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block mb-1">
                Dietary Considerations
              </span>
              <h4 className="font-serif text-base font-bold text-[#0F2F24] mb-2">
                Allergens & Notes
              </h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {food.dietaryNotes}
              </p>
            </div>

            {/* Back to All Foods */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200">
              <h4 className="font-serif text-base font-bold text-[#0F2F24] mb-2">
                Explore More Dishes
              </h4>
              <p className="text-xs text-stone-600 font-light mb-4">
                Discover Kacchi Biryani, Bhorta feasts, Bogura Doi, and winter pithas.
              </p>
              <button
                onClick={() => onNavigate('/food')}
                className="w-full py-2.5 bg-[#0F2F24] hover:bg-[#133E32] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                View Full Food Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
