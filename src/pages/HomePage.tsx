import React, { useState } from 'react';
import { 
  Compass, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Utensils, 
  Feather, 
  BookOpen, 
  ShieldCheck, 
  ChevronRight, 
  Clock, 
  Search,
  Sparkles,
  Waves,
  Play,
  Film,
  X,
  ExternalLink
} from 'lucide-react';
import { destinations } from '../data/destinations';
import { seasons } from '../data/seasons';
import { foods } from '../data/foods';
import { wildlifeAnimals } from '../data/wildlife';
import { itineraries } from '../data/itineraries';
import { articles } from '../data/articles';
import { InteractiveBangladeshMap } from '../components/map/InteractiveBangladeshMap';
import { RiverStoryScroll } from '../components/river/RiverStoryScroll';
import { TripPlanner } from '../components/planner/TripPlanner';
import { CinematicVideoSection, videoList } from '../components/video/CinematicVideoSection';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSeasonTab, setActiveSeasonTab] = useState(seasons[1].id); // Monsoon/Barsha or Sheet/Winter
  const [destinationFilter, setDestinationFilter] = useState<string>('all');
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);

  const filteredDestinations = destinations
    .filter((d) => {
      if (destinationFilter === 'all') return true;
      return d.category === destinationFilter;
    })
    .slice(0, 6);

  const activeSeason = seasons.find((s) => s.id === activeSeasonTab) || seasons[0];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate(`/destinations?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Cinematic Hero Section with Ambient Motion */}
      <section className="relative min-h-[96vh] flex items-center justify-center text-white overflow-hidden bg-[#060A12]">
        {/* Full-bleed background cinematic image - Instant 0ms Load */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg"
            alt="Cinematic aerial view of the Bangladesh river delta at sunrise with a traditional boat"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Measured multi-layer contrast scrim in deep midnight navy & obsidian */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060A12] via-[#090D16]/75 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060A12]/85 via-transparent to-[#060A12]/60" />
        </div>

        {/* Ambient Warm Golden Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.12)_0%,_rgba(6,10,18,0)_70%)] pointer-events-none" />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Top Kicker */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF8F5] text-xs font-medium uppercase tracking-widest mb-6 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Discover Bangladesh · A Land of Rivers, Stories & Wonders</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white text-balance leading-[1.1] mb-6 drop-shadow-md">
            A Land of Rivers, Stories & Wonders
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-stone-200 font-light leading-relaxed mb-10 text-balance">
            From the mist-covered hilltops of Sajek and ancient tidal mangrove labyrinths to vibrant Mughal streets and the world's longest natural sea beach. Find your journey. Discover the extraordinary.
          </p>

          {/* Search Bar Affordance */}
          <div className="max-w-xl mx-auto mb-10">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations (e.g. Sundarbans, Sajek, Hilsa, Sreemangal)..."
                className="w-full pl-11 pr-28 py-3.5 bg-white/95 text-slate-900 rounded-xl text-sm placeholder-slate-500 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 pointer-events-none" />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold rounded-lg uppercase tracking-wider transition-colors cursor-pointer"
              >
                Search
              </button>
            </form>
          </div>

          {/* CTA Buttons + Video Trailer Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/destinations')}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#F59E0B] hover:bg-[#D97706] active:scale-95 text-[#090D16] text-xs font-bold uppercase tracking-wider rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Watch 4K Film Button */}
            <button
              onClick={() => setTrailerModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 active:scale-95 text-white text-xs font-semibold uppercase tracking-wider rounded-xl border border-white/25 backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <div className="w-5 h-5 rounded-full bg-[#F59E0B] text-[#090D16] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>Watch 4K Trailer</span>
            </button>

            <button
              onClick={() => onNavigate('/itineraries')}
              className="w-full sm:w-auto px-6 py-3.5 bg-transparent hover:bg-white/10 text-stone-200 text-xs font-medium uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Plan Journey</span>
              <Calendar className="w-4 h-4 text-[#F59E0B]" />
            </button>
          </div>

          {/* Trust Strip */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div>
              <span className="block font-serif text-2xl font-bold text-[#F59E0B]">700+</span>
              <span className="text-xs text-stone-300">Living delta rivers & wetlands</span>
            </div>
            <div>
              <span className="block font-serif text-2xl font-bold text-[#F59E0B]">6 Seasons</span>
              <span className="text-xs text-stone-300">Traditional Bengali climate rhythm</span>
            </div>
            <div>
              <span className="block font-serif text-2xl font-bold text-[#F59E0B]">120 km</span>
              <span className="text-xs text-stone-300">World's longest natural sea beach</span>
            </div>
            <div>
              <span className="block font-serif text-2xl font-bold text-[#F59E0B]">UNESCO</span>
              <span className="text-xs text-stone-300">Sundarbans, Bagerhat & Paharpur</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SIGNATURE CINEMATIC VIDEO SECTION (Requested by User) */}
      <CinematicVideoSection
        onNavigateDestination={(slug) => onNavigate(`/destinations/${slug}`)}
      />

      {/* 3. Interactive Cartographic Map of Bangladesh */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="interactive-map">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#D97706] font-bold block mb-1">
            Geographic Navigation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Chart Your Course Across Bangladesh
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-light">
            Interact with our cartographic system to discover tourist hotspots, trace the paths of the Padma, Jamuna, and Meghna rivers, and preview regional highlights.
          </p>
        </div>

        <InteractiveBangladeshMap
          onSelectDestination={(slug) => onNavigate(`/destinations/${slug}`)}
        />
      </section>

      {/* 3.5. Curated Expeditions & Travel Journeys (Inspired by explore-bengal-bound.base44.app) */}
      <section className="py-20 bg-[#090D16] text-[#FAF8F5] relative overflow-hidden border-t border-b border-white/10" id="curated-expeditions">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.06)_0%,_rgba(9,13,22,0)_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#F59E0B] font-semibold mb-2">
                <Compass className="w-4 h-4 text-[#F59E0B]" />
                <span>Curated Expeditions · Bengal Bound Edition</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Signature Travel Expeditions
              </h2>
              <p className="mt-3 text-sm sm:text-base text-stone-300 max-w-2xl font-light leading-relaxed">
                Handcrafted itineraries designed for discerning international travelers. From silent mangrove riverboats to high mountain cloud cottages.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/itineraries')}
              className="px-5 py-2.5 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A0E1A] text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>Explore All 4 Itineraries</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'exp-sundarbans',
                title: 'Sundarbans Tiger & Mangrove Safari',
                bengali: 'সুন্দরবন রোমাঞ্চ অভিযান',
                duration: '3 Days / 2 Nights',
                style: 'Wild Expedition',
                destSlug: 'sundarbans',
                image: '/src/assets/images/sundarbans_mangrove_wildlife_1791862156168.jpg',
                priceEst: '$280 - $450',
                highlights: [
                  'Private cabin aboard tidal cruiser',
                  'Dawn canoe exploration through narrow creeks',
                  'Kotka wildlife watchtower & deer beach'
                ]
              },
              {
                id: 'exp-sajek',
                title: 'Kingdom in the Clouds: Sajek Valley',
                bengali: 'মেঘের রাজ্য সাজেক উপত্যকা',
                duration: '3 Days / 2 Nights',
                style: 'Highland Escapes',
                destSlug: 'sajek-valley',
                image: '/src/assets/images/sajek_valley_clouds_1791862156009.jpg',
                priceEst: '$190 - $320',
                highlights: [
                  'Overnight wooden eco-cottage on mountain ridge',
                  'Sunrise above the white cloud blanket at Konglak',
                  'Indigenous Chakma & Lushei cultural hospitality'
                ]
              },
              {
                id: 'exp-sreemangal',
                title: 'Tea Country & Rainforest Trails',
                bengali: 'শ্রীমঙ্গল চা বাগান ও বৃষ্টিবন',
                duration: '3 Days / 2 Nights',
                style: 'Nature & Relax',
                destSlug: 'sreemangal',
                image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
                priceEst: '$180 - $290',
                highlights: [
                  'Colonial tea garden estate bungalow stay',
                  'Gibbon tracking in Lawachara primary rainforest',
                  'Authentic Seven-Color Tea & tribal pottery village'
                ]
              },
              {
                id: 'exp-haor',
                title: 'Tanguar Haor Inland Sea Houseboat',
                bengali: 'টাঙ্গুয়ার হাওর জলবিলাস',
                duration: '2 Days / 1 Night',
                style: 'River Odyssey',
                destSlug: 'tanguar-haor',
                image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
                priceEst: '$160 - $260',
                highlights: [
                  'Luxury traditional wooden houseboat with top deck',
                  'Jadukata River transparent emerald water cruise',
                  'Shimul Bagan tree garden and Meghalaya mountain views'
                ]
              },
              {
                id: 'exp-heritage',
                title: '400 Years of Living Mughal Heritage',
                bengali: 'মুঘল ঢাকা ও পানাম নগর ঐতিহ্য',
                duration: '2 Days / 1 Night',
                style: 'Culture & History',
                destSlug: 'old-dhaka',
                image: '/src/assets/images/old_dhaka_heritage_culture_1791862157173.jpg',
                priceEst: '$120 - $210',
                highlights: [
                  'Lalbagh Fort & 17th-century Ahsan Manzil palace',
                  'Ghost city of Panam Nagar in ancient Sonargaon',
                  'Kacchi Biryani food walk and brass artisan quarters'
                ]
              },
              {
                id: 'exp-coastal',
                title: 'Coral Island & Marine Horizon',
                bengali: 'কক্সবাজার ও সেন্টমার্টিন সৈকত',
                duration: '4 Days / 3 Nights',
                style: 'Coastal Wonders',
                destSlug: 'coxs-bazar',
                image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
                priceEst: '$260 - $420',
                highlights: [
                  'Marine Drive coastal route with cliffs & waves',
                  'Ferry to Saint Martin’s Coral Island & Chera Dwip',
                  'Fresh lobster, red crab & green coconut feasts'
                ]
              }
            ].map((exp) => (
              <div
                key={exp.id}
                className="bg-[#0D1424] rounded-2xl border border-white/10 hover:border-[#F59E0B]/60 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1424] via-black/30 to-transparent" />

                    <div className="absolute top-3 left-3 bg-[#0A0E1A]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-[#F59E0B] font-semibold border border-white/10">
                      {exp.style}
                    </div>

                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[11px] text-white font-medium">
                      {exp.duration}
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[10px] text-[#F59E0B] font-semibold block uppercase tracking-wider">
                        {exp.bengali}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#F59E0B] transition-colors leading-snug">
                        {exp.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="space-y-2 mb-5">
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-stone-300 font-light">
                          <span className="text-[#F59E0B] font-bold">✓</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-[10px] uppercase text-stone-400 block">Est. Budget</span>
                        <span className="font-serif text-sm font-bold text-[#F59E0B]">{exp.priceEst}</span>
                      </div>
                      <span className="text-[10px] text-stone-400">All-Inclusive Guide</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => onNavigate(`/destinations/${exp.destSlug}`)}
                    className="flex-1 py-2.5 bg-white/5 hover:bg-white/15 text-stone-200 hover:text-white rounded-xl text-xs font-semibold border border-white/15 transition-all cursor-pointer text-center"
                  >
                    View Guide
                  </button>
                  <button
                    onClick={() => onNavigate('/itineraries')}
                    className="flex-1 py-2.5 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A0E1A] rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow cursor-pointer text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Plan Trip</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Six Seasons of Bangladesh (Shoro Ritu) */}
      <section className="py-20 bg-slate-100/80 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D97706] font-bold block mb-1">
                Shoro Ritu · Seasonal Harmony
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
                The Six Seasons of Bangladesh
              </h2>
              <p className="text-sm text-slate-600 mt-2 font-light max-w-2xl">
                Unlike countries with four seasons, Bangladesh lives by a traditional calendar of six distinct two-month seasons. Each brings its own colors, fruits, festivals, and travel pleasures.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/seasons')}
              className="text-xs font-semibold uppercase tracking-wider text-[#D97706] hover:text-[#0F172A] flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>View Full Seasonal Guide</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Season Segmented Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {seasons.map((season) => (
              <button
                key={season.id}
                onClick={() => setActiveSeasonTab(season.id)}
                className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                  activeSeasonTab === season.id
                    ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                }`}
              >
                <div className="text-[10px] text-[#F59E0B] font-semibold uppercase tracking-wider">
                  {season.bengaliName}
                </div>
                <div className="font-serif text-sm font-bold truncate mt-0.5">
                  {season.name}
                </div>
                <div className="text-[11px] opacity-70 truncate mt-0.5">
                  {season.transliteration}
                </div>
              </button>
            ))}
          </div>

          {/* Active Season Highlight Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src={activeSeason.image}
                alt={activeSeason.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                <span className="text-xs uppercase tracking-widest text-[#F59E0B] font-semibold">
                  {activeSeason.monthsEnglish}
                </span>
                <h3 className="font-serif text-xl font-bold">{activeSeason.name}</h3>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="hidden lg:flex items-center gap-3 text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-[#D97706] uppercase tracking-wider">
                    {activeSeason.transliteration}
                  </span>
                  <span>·</span>
                  <span>{activeSeason.monthsBengali}</span>
                  <span>·</span>
                  <span>{activeSeason.monthsEnglish}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
                  {activeSeason.name} ({activeSeason.bengaliName})
                </h3>

                <p className="mt-3 text-sm text-slate-700 leading-relaxed font-light">
                  {activeSeason.description}
                </p>

                {/* Weather details */}
                <div className="mt-5 grid grid-cols-3 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">Temp Range</span>
                    <span className="font-semibold text-slate-800">{activeSeason.weatherOverview.tempRange}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">Rainfall</span>
                    <span className="font-semibold text-slate-800">{activeSeason.weatherOverview.rainfall.split(';')[0]}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">Humidity</span>
                    <span className="font-semibold text-slate-800">{activeSeason.weatherOverview.humidity}</span>
                  </div>
                </div>

                {/* Recommended Experiences */}
                <div className="mt-5">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                    Signature Experiences in This Season:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {activeSeason.recommendedExperiences.slice(0, 3).map((exp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#D97706] font-bold">✓</span>
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  <span>Top Destinations: </span>
                  <span className="font-medium text-slate-800">{activeSeason.topDestinations.join(', ')}</span>
                </div>
                <button
                  onClick={() => onNavigate(`/seasons/${activeSeason.slug}`)}
                  className="py-2 px-4 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Discover {activeSeason.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Destination Discovery Gallery */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D97706] font-bold block mb-1">
              Top Travel Destinations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
              Where Journeys Begin
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-light max-w-2xl">
              From the UNESCO tiger mangroves of the southwest to the mist-covered valleys of the east and ancient Buddhist universities in the north.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/destinations')}
            className="text-xs font-semibold uppercase tracking-wider text-[#D97706] hover:text-[#0F172A] flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <span>View All Destinations</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {[
            { id: 'all', label: 'All Wonders' },
            { id: 'wildlife', label: 'Wildlife & Mangroves' },
            { id: 'hills', label: 'Hills & Cloud Valleys' },
            { id: 'nature', label: 'Tea Country' },
            { id: 'heritage', label: 'Heritage & Mughal' },
            { id: 'beaches', label: 'Coastal Beaches' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setDestinationFilter(cat.id)}
              className={`py-1.5 px-3.5 text-xs rounded-full font-medium whitespace-nowrap transition-colors cursor-pointer ${
                destinationFilter === cat.id
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => onNavigate(`/destinations/${dest.slug}`)}
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={dest.image}
                  alt={dest.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                
                {/* Quiet unboxed text kicker on image */}
                <div className="absolute top-3 left-3 text-[11px] font-medium text-white/90 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded">
                  {dest.region}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] text-[#F59E0B] font-semibold uppercase tracking-wider block">
                    {dest.bengaliName}
                  </span>
                  <h3 className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-[#F59E0B] transition-colors">
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-600 leading-relaxed font-light line-clamp-3 mb-4">
                    {dest.shortDescription}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-slate-500 pt-3 border-t border-slate-100">
                    <span className="capitalize">{dest.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{dest.recommendedDuration}</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{dest.bestTimeToVisit.split('(')[0]}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between text-xs font-semibold text-[#D97706] group-hover:text-[#0F172A] transition-colors">
                  <span>View Destination Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Riverine Storytelling Section */}
      <RiverStoryScroll
        onNavigateDestination={(slug) => onNavigate(`/destinations/${slug}`)}
      />

      {/* 7. Taste of Bangladesh & Signature Hilsa Feature */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D97706] font-bold block mb-1">
              Bengal Gastronomy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
              A Taste of Bangladesh
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-light max-w-2xl">
              Rich with cold-pressed mustard oil, sweet delta river fish, aromatic slow-steamed biryanis, and roadside clay pot curds.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/food')}
            className="text-xs font-semibold uppercase tracking-wider text-[#D97706] hover:text-[#0F172A] flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <span>Explore All Traditional Foods</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Featured Special: The Hilsa Fish Monograph Card */}
        <div className="bg-[#0B1120] text-white rounded-2xl overflow-hidden shadow-2xl mb-12 border border-white/10 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
            <img
              src="/src/assets/images/hilsa_fish_culinary_1791862157523.jpg"
              alt="Authentic Bangladeshi Shorshe Ilish mustard fish curry"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-xs text-white/90">
              Shorshe Ilish (Mustard Hilsa Curry) — The crown jewel of Bengal
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F59E0B] font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Special Editorial Feature · National Fish of Bangladesh</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                The Silver Monarch: The Story of Bangladeshi Hilsa
              </h3>

              <p className="text-xs text-[#F59E0B] font-medium mt-1">
                Padma & Meghna Deltas · Tenualosa ilisha · Shorshe Ilish Heritage
              </p>

              <p className="mt-4 text-sm text-stone-200 leading-relaxed font-light">
                To understand Bengal, one must understand Hilsa (Ilish). Swimming against the currents of the Padma and Meghna rivers, this silver anadromous fish develops a tender, omega-rich texture and sweet flavor celebrated in medieval poetry and modern banquets.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-300">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <strong className="text-white block mb-1">Traditional Preparation:</strong>
                  Steamed in freshly ground stone-milled yellow mustard paste, cold-pressed virgin mustard oil, and green chillies.
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <strong className="text-white block mb-1">Monsoon Tradition:</strong>
                  Enjoyed alongside piping-hot Bhuna Khichuri and Begun Bhaja (fried eggplant) on rainy afternoons.
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-stone-400 font-light">
                Includes sustainable fishing calendar & authentic recipe heritage.
              </span>
              <button
                onClick={() => onNavigate('/food/shorshe-ilish')}
                className="py-2.5 px-5 bg-[#F59E0B] hover:bg-[#D97706] text-[#090D16] rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Read The Hilsa Fish Monograph
              </button>
            </div>
          </div>
        </div>

        {/* 3 Secondary Food Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {foods.filter((f) => !f.isSpecialFeature).slice(0, 3).map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between cursor-pointer"
              onClick={() => onNavigate(`/food/${food.slug}`)}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-[#D97706]">{food.region}</span>
                  <span>{food.bengaliName}</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0F172A] mb-2">
                  {food.name}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2 font-light leading-relaxed mb-3">
                  {food.flavorProfile}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#D97706]">
                <span>Discover Dish</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Wildlife & Sundarbans Spotlight */}
      <section className="py-20 bg-[#090D16] text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-[#F59E0B] font-semibold block mb-2">
                Biodiversity Frontier
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Wild Bengal: The Mangrove & Rainforest Realm
              </h2>
              <p className="mt-4 text-sm sm:text-base text-stone-300 font-light leading-relaxed">
                Bangladesh shelters one of the planet's greatest natural treasures: the UNESCO Sundarbans Mangrove Forest, where Royal Bengal tigers swim tidal channels and spotted deer graze alongside mudflats. In the northeastern rainforests, endangered Hoolock gibbons call from towering canopies.
              </p>

              <div className="mt-6 space-y-3">
                {wildlifeAnimals.slice(0, 3).map((animal) => (
                  <div key={animal.id} className="p-3 bg-white/5 rounded-lg border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-sm font-serif font-bold text-white block">
                        {animal.name} ({animal.bengaliName})
                      </span>
                      <span className="text-xs text-stone-400 font-mono italic">
                        {animal.scientificName}
                      </span>
                    </div>
                    <span className="text-xs text-[#F59E0B] font-semibold">{animal.status}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  onClick={() => onNavigate('/wildlife')}
                  className="py-3 px-6 bg-[#F59E0B] hover:bg-[#D97706] text-[#090D16] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Wildlife & Sanctuaries</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl aspect-[16/10]">
                <img
                  src="/src/assets/images/sundarbans_mangrove_wildlife_1791862156168.jpg"
                  alt="Silent boat cruising through tidal waterways of the Sundarbans mangrove forest"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs text-[#F59E0B] uppercase tracking-widest font-semibold block">
                    UNESCO World Heritage
                  </span>
                  <h3 className="font-serif text-2xl font-bold mt-1">
                    The Sundarbans Mangrove Reserve
                  </h3>
                  <p className="text-xs text-stone-200 mt-1 max-w-lg font-light leading-relaxed">
                    Over 10,000 square kilometers of breathing pneumatophore roots, tidal river creeks, and the world's only mangrove-adapted tiger population.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Interactive Journey Architect Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="plan-trip">
        <TripPlanner
          onSelectDestination={(slug) => onNavigate(`/destinations/${slug}`)}
        />
      </section>

      {/* 10. Travel Stories & Editorial Magazine */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D97706] font-bold block mb-1">
                The Bengal Chronicle
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
                Travel Stories & Field Notes
              </h2>
              <p className="text-sm text-slate-600 mt-2 font-light max-w-2xl">
                In-depth essays, responsible travel guidelines, photography journals, and cultural dispatches written for international travelers.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/blog')}
              className="text-xs font-semibold uppercase tracking-wider text-[#D97706] hover:text-[#0F172A] flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>View All Articles</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
                onClick={() => onNavigate(`/blog/${article.slug}`)}
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] uppercase font-semibold px-2.5 py-1 rounded backdrop-blur-sm">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span>{article.author.name}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#0F172A] group-hover:text-[#D97706] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed font-light line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-semibold text-[#D97706]">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Practical Travel Essentials Quick Strip */}
      <section className="py-16 bg-[#0B1120] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/15">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#F59E0B] font-semibold block">
                Traveler Essentials
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                Planning Your First Trip to Bangladesh?
              </h3>
            </div>
            <button
              onClick={() => onNavigate('/travel-guide')}
              className="py-2.5 px-5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg uppercase tracking-wider transition-colors cursor-pointer shrink-0"
            >
              View Complete Visa & Entry Guide
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 text-xs">
            <div className="space-y-1">
              <span className="text-[#F59E0B] font-semibold uppercase tracking-wider block">
                Visa on Arrival
              </span>
              <p className="text-stone-300 font-light leading-relaxed">
                Available for US, EU, UK, Canada, Australia, and 30+ nationalities at Dhaka & Chattogram airports.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[#F59E0B] font-semibold uppercase tracking-wider block">
                Currency & Cash
              </span>
              <p className="text-stone-300 font-light leading-relaxed">
                Bangladeshi Taka (BDT, ৳). Carry cash for local street markets, boats, and rickshaws.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[#F59E0B] font-semibold uppercase tracking-wider block">
                Best Traveling Months
              </span>
              <p className="text-stone-300 font-light leading-relaxed">
                November to March offers pleasant dry weather (15°C–25°C). Monsoon brings lush haors and floating markets.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[#F59E0B] font-semibold uppercase tracking-wider block">
                Safety & Emergency
              </span>
              <p className="text-stone-300 font-light leading-relaxed">
                Dial 999 for National Emergency Service. Dedicated Tourist Police Hotline: +880 1320 001299.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Trailer Modal */}
      {trailerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#0B1120] rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
            <div className="p-4 bg-[#0F172A] border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#F59E0B] uppercase tracking-wider font-semibold block">
                  Official Travel Trailer · 4K UHD
                </span>
                <h3 className="font-serif text-lg font-bold text-white">
                  Discover Bangladesh: A Land of Rivers, Stories & Wonders
                </h3>
              </div>
              <button
                onClick={() => setTrailerModalOpen(false)}
                className="p-2 text-stone-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video bg-black flex items-center justify-center">
              <iframe
                src="https://www.youtube-nocookie.com/embed/QNUSIOMb6vI?autoplay=1&rel=0&modestbranding=1"
                title="Beautiful Bangladesh - Land of Stories (Official 4K)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            <div className="p-4 bg-[#0F172A] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-300">
              <span>Official Tourism Board 4K Film: Beautiful Bangladesh — Land of Stories</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.youtube.com/watch?v=QNUSIOMb6vI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center gap-1.5 text-[11px]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open on YouTube</span>
                </a>
                <button
                  onClick={() => setTrailerModalOpen(false)}
                  className="px-4 py-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#090D16] font-bold rounded-lg uppercase tracking-wider text-[11px] transition-colors cursor-pointer"
                >
                  Close Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
