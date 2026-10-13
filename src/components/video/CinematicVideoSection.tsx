import React, { useState } from 'react';
import { 
  Play, 
  Maximize2, 
  Sparkles, 
  Film, 
  Compass, 
  ChevronRight, 
  X,
  ExternalLink,
  Clock,
  Eye,
  MapPin,
  Flame,
  ArrowRight
} from 'lucide-react';

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  bengaliTitle: string;
  location: string;
  region: string;
  duration: string;
  category: 'aerial' | 'wildlife' | 'culture' | 'rivers' | 'official';
  thumbnail: string;
  views: string;
  description: string;
  highlights: string[];
  destinationSlug?: string;
}

export interface VideoReel {
  id: string;
  youtubeId: string;
  title: string;
  location: string;
  duration: string;
  views: string;
  thumbnail: string;
  tag: string;
}

export const videoList: VideoItem[] = [
  {
    id: 'beautiful-bangladesh-official',
    youtubeId: 'QNUSIOMb6vI',
    title: 'Beautiful Bangladesh: Land of Stories',
    bengaliTitle: 'বিউটিফুল বাংলাদেশ · গল্পের দেশ',
    location: 'Nationwide Delta Journey',
    region: 'Bangladesh',
    duration: '03:40',
    category: 'official',
    views: '1.2M',
    thumbnail: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    description: 'The award-winning official visual showcase by the Bangladesh Tourism Board directed by Amitabh Reza. A cinematic journey through the rivers, ancient mosques, coral shores, and warm people of Bengal.',
    highlights: ['Sundarbans tiger rivers', 'Paharpur Somapura Mahavihara', 'Sixty Dome Mosque & Cox’s Bazar', 'Warm Bengali smiles']
  },
  {
    id: 'sajek-clouds-drone',
    youtubeId: 'WF9HC8SSjZc',
    title: 'Sajek Valley: The Kingdom in the Clouds',
    bengaliTitle: 'সাজেক ভ্যালি · মেঘের রাজ্য',
    location: 'Sajek Valley, Rangamati',
    region: 'Chittagong Hill Tracts',
    duration: '04:12',
    category: 'aerial',
    views: '450K',
    destinationSlug: 'sajek-valley',
    thumbnail: '/src/assets/images/sajek_valley_clouds_1791862156009.jpg',
    description: '4K cinematic drone flight gliding above an endless ocean of white morning clouds floating across the green ridges and wooden eco-resorts of Sajek.',
    highlights: ['Konglak Peak at dawn', 'Endless sea of clouds', 'Lushei indigenous village cottages']
  },
  {
    id: 'sundarbans-mangrove-boat',
    youtubeId: 'K_WdIAjBtns',
    title: 'The Sundarbans: Tidal Wild & Tiger Creeks',
    bengaliTitle: 'সুন্দরবন · বাঘের দেশে জলযাত্রা',
    location: 'Kotka & Kochikhali',
    region: 'Khulna & Bagerhat Delta',
    duration: '05:30',
    category: 'wildlife',
    views: '380K',
    destinationSlug: 'sundarbans',
    thumbnail: '/src/assets/images/sundarbans_mangrove_wildlife_1791862156168.jpg',
    description: 'Cruising through silent tidal mangrove creeks on a traditional wooden expedition boat, observing spotted deer herds, saltwater crocodiles, and mudflats.',
    highlights: ['Silent creek canoe navigation', 'Spotted deer grazing at Kotka', 'Sundari mangrove stilt roots']
  },
  {
    id: 'sreemangal-tea-paradise',
    youtubeId: 'uhKBGLHShu8',
    title: 'Sreemangal: The Emerald Tea Capital',
    bengaliTitle: 'শ্রীমঙ্গল · সবুজ চায়ের রাজধানী',
    location: 'Finlay & Zareen Estates',
    region: 'Sylhet Division',
    duration: '06:15',
    category: 'rivers',
    views: '290K',
    destinationSlug: 'sreemangal',
    thumbnail: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    description: 'Rolling hills of lush emerald tea gardens, ancient Lawachara rainforest canopy, and peaceful tribal hamlets in the tea capital of Bangladesh.',
    highlights: ['Finlay Tea Estate hill slopes', 'Lawachara rainforest gibbon trails', 'Traditional Nilkantha seven-layer tea']
  },
  {
    id: 'old-dhaka-heritage-life',
    youtubeId: 'opWNneat-bQ',
    title: 'Old Dhaka: 400 Years of Colors, Bells & Flavors',
    bengaliTitle: 'পুরান ঢাকা · ৪০০ বছরের ঐতিহ্য',
    location: 'Lalbagh Fort & Shankharia Bazar',
    region: 'Dhaka Division',
    duration: '10:20',
    category: 'culture',
    views: '620K',
    destinationSlug: 'old-dhaka',
    thumbnail: '/src/assets/images/old_dhaka_heritage_culture_1791862157173.jpg',
    description: 'A 4K POV street walk immersion into the living Mughal quarter: brass artisan alleys, rickshaw bells, Shankharia Bazar craft heritage, and fragrant Kacchi Biryani cauldrons.',
    highlights: ['Lalbagh Fort sunset', 'Shankharia Bazar artisan lanes', 'Heritage street gastronomy']
  },
  {
    id: 'school-of-life-official',
    youtubeId: 'TPpwx0mdu2Q',
    title: 'Beautiful Bangladesh: School of Life',
    bengaliTitle: 'স্কুল অব লাইফ · জীবনের পাঠশালা',
    location: 'Rivers, Villages & Delta Life',
    region: 'All Bangladesh',
    duration: '03:15',
    category: 'official',
    views: '890K',
    thumbnail: '/src/assets/images/hilsa_fish_culinary_1791862157523.jpg',
    description: 'A poetic visual tribute to Bangladesh as a university of life: resilience, endless rivers, monsoon rains, and heartfelt hospitality that touches every international visitor.',
    highlights: ['Delta river boat life', 'Monsoon rain celebrations', 'Traditional folk music & artisans']
  },
  {
    id: 'land-of-love',
    youtubeId: '6akjaukd1-0',
    title: 'Beautiful Bangladesh: A Land of Love',
    bengaliTitle: 'ল্যান্ড অব লাভ · ভালোবাসার বাংলাদেশ',
    location: 'Coastal & Delta Landscapes',
    region: 'Southern Delta',
    duration: '04:05',
    category: 'official',
    views: '540K',
    thumbnail: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    description: 'A rich visual documentary celebrating the natural wonders of Bangladesh, from Cox’s Bazar breakers to peaceful village ponds and mangrove wetlands.',
    highlights: ['World’s longest unbroken sea beach', 'Delta boatmen songs', 'Historic terracotta temples']
  },
  {
    id: 'life-happens-here',
    youtubeId: '2hgJs1vlqYs',
    title: 'Visit Bangladesh: Life Happens Here',
    bengaliTitle: 'লাইফ হ্যাপেনস হেয়ার · জীবনের স্পন্দন',
    location: 'Hill Tracts, Rivers & Heritage',
    region: 'Eastern Bengal',
    duration: '03:30',
    category: 'aerial',
    views: '320K',
    destinationSlug: 'coxs-bazar',
    thumbnail: '/src/assets/images/sajek_valley_clouds_1791862156009.jpg',
    description: 'An inspiring cinematic overview of traveling through Bangladesh: climbing misty hill peaks, sailing fresh water haors, and exploring centuries-old monuments.',
    highlights: ['Chittagong Hill Tracts ridges', 'Freshwater haor boat cruise', 'Bengali hospitality']
  }
];

export const videoReels: VideoReel[] = [
  {
    id: 'reel-official',
    youtubeId: 'QNUSIOMb6vI',
    title: 'Official Bangladesh: Land of Stories Film',
    location: 'Nationwide Delta',
    duration: '3:40',
    views: '1.2M',
    thumbnail: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    tag: 'Official 4K'
  },
  {
    id: 'reel-sajek',
    youtubeId: 'WF9HC8SSjZc',
    title: 'Waking up above the cloud sea in Sajek',
    location: 'Sajek Valley',
    duration: '4:12',
    views: '450K',
    thumbnail: '/src/assets/images/sajek_valley_clouds_1791862156009.jpg',
    tag: 'Cloud Sea'
  },
  {
    id: 'reel-sundarbans',
    youtubeId: 'K_WdIAjBtns',
    title: 'Quiet wooden cruiser in wild Sundarbans creeks',
    location: 'Sundarbans Tiger Reserve',
    duration: '5:30',
    views: '380K',
    thumbnail: '/src/assets/images/sundarbans_mangrove_wildlife_1791862156168.jpg',
    tag: 'Tiger Land'
  },
  {
    id: 'reel-tea',
    youtubeId: 'uhKBGLHShu8',
    title: 'Morning dew in Sreemangal emerald tea slopes',
    location: 'Sreemangal',
    duration: '6:15',
    views: '290K',
    thumbnail: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    tag: 'Tea Valleys'
  },
  {
    id: 'reel-dhaka',
    youtubeId: 'opWNneat-bQ',
    title: '400-year Mughal lanes of Old Dhaka',
    location: 'Shankharia Bazar, Dhaka',
    duration: '10:20',
    views: '620K',
    thumbnail: '/src/assets/images/old_dhaka_heritage_culture_1791862157173.jpg',
    tag: 'Living Heritage'
  },
  {
    id: 'reel-school-of-life',
    youtubeId: 'TPpwx0mdu2Q',
    title: 'School of Life: The Poetic Delta',
    location: 'Delta Waterways',
    duration: '3:15',
    views: '890K',
    thumbnail: '/src/assets/images/hilsa_fish_culinary_1791862157523.jpg',
    tag: 'Classic Film'
  }
];

interface CinematicVideoSectionProps {
  onNavigateDestination?: (slug: string) => void;
}

export const CinematicVideoSection: React.FC<CinematicVideoSectionProps> = ({ onNavigateDestination }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem>(videoList[0]);
  const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isTheaterPlaying, setIsTheaterPlaying] = useState<boolean>(false);

  const filteredVideos = activeCategory === 'all'
    ? videoList
    : videoList.filter((v) => v.category === activeCategory);

  const handleOpenModal = (video: VideoItem) => {
    setActiveModalVideo(video);
  };

  const handleCloseModal = () => {
    setActiveModalVideo(null);
  };

  const handleSelectReel = (reel: VideoReel) => {
    const matched = videoList.find((v) => v.youtubeId === reel.youtubeId) || {
      id: reel.id,
      youtubeId: reel.youtubeId,
      title: reel.title,
      bengaliTitle: reel.tag,
      location: reel.location,
      region: 'Bangladesh',
      duration: reel.duration,
      category: 'official',
      views: reel.views,
      thumbnail: reel.thumbnail,
      description: `Authentic on-the-ground travel moment captured in ${reel.location}, Bangladesh.`,
      highlights: [reel.tag, reel.location, `${reel.views} traveler views`]
    };
    setActiveModalVideo(matched);
  };

  return (
    <section className="py-24 bg-[#080D1A] text-[#FAF8F5] relative overflow-hidden border-t border-b border-white/10" id="video-tours">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.08)_0%,_rgba(15,23,42,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#F59E0B] font-semibold mb-2">
              <Film className="w-4 h-4 text-[#F59E0B]" />
              <span>Bangladesh in Motion · 4K Travel Documentary Cinema</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Watch Bangladesh: The Visual Journey
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-300 max-w-2xl font-light leading-relaxed">
              Experience the breath, colors, and rhythm of Bengal through high-definition motion footage. Instant streaming with audio, zero buffering, and full-screen documentary cinema.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'all', label: 'All Films' },
              { id: 'official', label: 'Official Tourism' },
              { id: 'aerial', label: 'Hills & Clouds' },
              { id: 'wildlife', label: 'Sundarbans Wild' },
              { id: 'rivers', label: 'Tea & Waterways' },
              { id: 'culture', label: 'Heritage & Streets' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-1.5 px-3.5 text-xs rounded-full font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#F59E0B] text-[#0A0E1A] font-bold shadow-md'
                    : 'bg-white/5 text-stone-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Cinema Stage (Large Theater Player with Verified YouTube 4K Embed) */}
        <div className="bg-[#0D1424] rounded-2xl border border-white/10 shadow-2xl overflow-hidden mb-16 grid grid-cols-1 lg:grid-cols-12">
          {/* Main Video Viewport (8 cols) */}
          <div className="lg:col-span-8 relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
            {isTheaterPlaying ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div 
                className="relative w-full h-full cursor-pointer"
                onClick={() => setIsTheaterPlaying(true)}
              >
                <img
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Contrast overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40" />

                {/* Video Meta Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                  <div className="flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/15">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                    <span className="font-semibold uppercase tracking-wider text-[10px]">
                      4K UHD Stream
                    </span>
                    <span className="text-white/40">·</span>
                    <span>{selectedVideo.duration}</span>
                    <span className="text-white/40">·</span>
                    <span className="flex items-center gap-1 text-[#F59E0B]">
                      <Eye className="w-3 h-3" /> {selectedVideo.views}
                    </span>
                  </div>

                  <div className="bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/15 text-[11px] hidden sm:flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#F59E0B]" />
                    <span>{selectedVideo.location}</span>
                  </div>
                </div>

                {/* Big Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-[#0A0E1A] flex items-center justify-center shadow-2xl transform transition-transform hover:scale-110 active:scale-95 group-hover:ring-8 group-hover:ring-[#F59E0B]/30"
                  >
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
                  </div>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] text-[#F59E0B] font-semibold uppercase tracking-wider block">
                    {selectedVideo.bengaliTitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold">
                    {selectedVideo.title}
                  </h3>
                </div>
              </div>
            )}
          </div>

          {/* Side Info & Story Breakdown (4 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-8 bg-[#0B1120] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
                <span className="uppercase tracking-widest text-[#F59E0B] font-bold">
                  Documentary Details
                </span>
                <span className="capitalize">{selectedVideo.category}</span>
              </div>

              <h4 className="font-serif text-2xl font-bold text-white mb-2">
                {selectedVideo.title}
              </h4>
              <p className="text-xs text-[#F59E0B] font-medium mb-4 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedVideo.location} · {selectedVideo.region}</span>
              </p>

              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed mb-6">
                {selectedVideo.description}
              </p>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block mb-2">
                  Featured Highlights in This Film:
                </span>
                <ul className="space-y-1.5 text-xs text-stone-300">
                  {selectedVideo.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#F59E0B] font-bold">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => handleOpenModal(selectedVideo)}
                className="w-full py-3 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A0E1A] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Watch Fullscreen Experience</span>
              </button>

              {selectedVideo.destinationSlug && onNavigateDestination && (
                <button
                  onClick={() => onNavigateDestination(selectedVideo.destinationSlug!)}
                  className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-stone-200 hover:text-white font-medium text-xs rounded-xl border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Destination Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 2. BITE-SIZED TRAVEL REELS STRIP (Inspired by bangladeshtrail.com) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#F59E0B] font-semibold mb-1">
                <Flame className="w-4 h-4 text-[#F59E0B]" />
                <span>Travel Shorts & Moments</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Bite-Sized Bengal in Motion
              </h3>
            </div>
            <span className="text-xs text-stone-400 hidden sm:block">
              Click any reel to play in 4K
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {videoReels.map((reel) => (
              <div
                key={reel.id}
                onClick={() => handleSelectReel(reel)}
                className="group relative aspect-[9/14] rounded-xl overflow-hidden bg-black/60 border border-white/15 hover:border-[#F59E0B] cursor-pointer shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 group-hover:from-black/95 transition-colors" />

                {/* Top Badge */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px]">
                  <span className="bg-[#F59E0B] text-[#0A0E1A] font-bold px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wide">
                    {reel.tag}
                  </span>
                  <span className="bg-black/60 text-stone-200 px-1.5 py-0.5 rounded backdrop-blur-sm">
                    {reel.duration}
                  </span>
                </div>

                {/* Center Play Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-[#F59E0B] text-[#0A0E1A] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Title & Stats */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <p className="text-xs font-semibold leading-tight line-clamp-2 mb-1 group-hover:text-[#F59E0B] transition-colors">
                    {reel.title}
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-stone-300">
                    <span className="truncate">{reel.location}</span>
                    <span className="text-[#F59E0B] shrink-0 font-medium">{reel.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Full Video Playlist Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Cinematic Series Catalog
            </h3>
            <span className="text-xs text-stone-400">
              Click any film to stream in 4K
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVideos.map((video) => {
              const isCurrent = video.id === selectedVideo.id;
              return (
                <div
                  key={video.id}
                  onClick={() => {
                    setSelectedVideo(video);
                    setIsTheaterPlaying(true);
                    handleOpenModal(video);
                  }}
                  className={`bg-[#0D1424] rounded-xl border overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between ${
                    isCurrent ? 'border-[#F59E0B] ring-1 ring-[#F59E0B]/50' : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                      <div className="absolute top-3 left-3 bg-black/60 px-2.5 py-1 rounded text-[10px] text-white font-semibold backdrop-blur-sm flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-[#F59E0B]" />
                        <span>{video.duration}</span>
                      </div>

                      <div className="absolute top-3 right-3 bg-black/60 px-2.5 py-1 rounded text-[10px] text-[#F59E0B] font-semibold backdrop-blur-sm">
                        {video.views}
                      </div>

                      {/* Play hover button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-[#F59E0B] text-[#0A0E1A] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10px] text-[#F59E0B] font-semibold block">
                          {video.bengaliTitle}
                        </span>
                        <h4 className="font-serif text-base font-bold text-white leading-snug truncate">
                          {video.title}
                        </h4>
                      </div>
                    </div>

                    <div className="p-4">
                      <p className="text-xs text-stone-300 font-light leading-relaxed line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 pb-4 pt-1 flex items-center justify-between text-xs text-[#F59E0B] font-semibold">
                    <span>Watch 4K Film</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal Player (Using Verified Embedded YouTube 4K Stream) */}
      {activeModalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-[#0B1120] rounded-2xl border border-white/20 overflow-hidden shadow-2xl flex flex-col max-h-[95vh]">
            {/* Modal Header Bar */}
            <div className="p-4 bg-[#0F172A] border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#F59E0B] uppercase tracking-wider font-semibold block">
                  {activeModalVideo.location} · {activeModalVideo.bengaliTitle}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                  {activeModalVideo.title}
                </h3>
              </div>

              <button
                onClick={handleCloseModal}
                className="p-2 text-stone-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Stage: 100% Working 4K Embed */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeModalVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={activeModalVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="p-4 bg-[#0F172A] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-300">
              <p className="font-light max-w-2xl line-clamp-2 sm:line-clamp-none">
                {activeModalVideo.description}
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={`https://www.youtube.com/watch?v=${activeModalVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open on YouTube</span>
                </a>
                {activeModalVideo.destinationSlug && onNavigateDestination && (
                  <button
                    onClick={() => {
                      handleCloseModal();
                      onNavigateDestination(activeModalVideo.destinationSlug!);
                    }}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg uppercase tracking-wider text-[11px] transition-colors cursor-pointer"
                  >
                    View Destination
                  </button>
                )}
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A0E1A] font-bold rounded-lg uppercase tracking-wider text-[11px] transition-colors cursor-pointer"
                >
                  Done Watching
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
