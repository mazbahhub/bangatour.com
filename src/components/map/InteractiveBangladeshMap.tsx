import React, { useState, useMemo } from 'react';
import { Destination } from '../../types';
import { destinations } from '../../data/destinations';
import { 
  MapPin, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Layers, 
  Compass, 
  ArrowRight, 
  Waves, 
  Calendar, 
  Check, 
  ListFilter,
  ExternalLink,
  Info
} from 'lucide-react';

interface InteractiveBangladeshMapProps {
  onSelectDestination: (slug: string) => void;
  initialSelectedSlug?: string;
}

type MapFilterCategory = 'all' | 'nature' | 'heritage' | 'wildlife' | 'beaches' | 'rivers' | 'hills';

export const InteractiveBangladeshMap: React.FC<InteractiveBangladeshMapProps> = ({
  onSelectDestination,
  initialSelectedSlug,
}) => {
  const [selectedSlug, setSelectedSlug] = useState<string>(initialSelectedSlug || 'sundarbans');
  const [filter, setFilter] = useState<MapFilterCategory>('all');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showRivers, setShowRivers] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const selectedDestination = useMemo(() => {
    return destinations.find((d) => d.slug === selectedSlug) || destinations[0];
  }, [selectedSlug]);

  const filteredDestinations = useMemo(() => {
    if (filter === 'all') return destinations;
    return destinations.filter((d) => d.category === filter);
  }, [filter]);

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(Math.max(prev + delta, 0.9), 1.6));
  };

  const handleReset = () => {
    setZoomLevel(1);
    setFilter('all');
  };

  const divisions = [
    { name: 'Rangpur', x: 28, y: 18 },
    { name: 'Rajshahi', x: 26, y: 38 },
    { name: 'Mymensingh', x: 50, y: 30 },
    { name: 'Sylhet', x: 74, y: 28 },
    { name: 'Dhaka', x: 48, y: 50 },
    { name: 'Khulna', x: 30, y: 70 },
    { name: 'Barisal', x: 48, y: 72 },
    { name: 'Chattogram', x: 75, y: 68 },
  ];

  const categoryLabels: { id: MapFilterCategory; label: string }[] = [
    { id: 'all', label: 'All Places' },
    { id: 'wildlife', label: 'Wildlife & Sanctuaries' },
    { id: 'nature', label: 'Rainforest & Tea' },
    { id: 'hills', label: 'Hills & Clouds' },
    { id: 'heritage', label: 'Ancient Heritage' },
    { id: 'beaches', label: 'Coastal Beaches' },
    { id: 'rivers', label: 'Rivers & Haors' },
  ];

  return (
    <div className="bg-[#090D16] text-[#FAF8F5] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      {/* Top Map Control Bar */}
      <div className="p-4 sm:p-6 border-b border-white/10 bg-[#0F172A]/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F59E0B] font-semibold">
            <Compass className="w-4 h-4 text-[#F59E0B]" />
            <span>Cartographic Exploration</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
            Interactive Map of Bangladesh
          </h3>
          <p className="text-xs text-stone-400 font-light mt-0.5">
            Geographic coordinates, major river networks (Padma, Jamuna, Meghna), and travel destinations.
          </p>
        </div>

        {/* View mode toggle & River flow switch */}
        <div className="flex flex-wrap items-center gap-2">
          {/* River toggle */}
          <button
            onClick={() => setShowRivers(!showRivers)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              showRivers
                ? 'bg-[#0284C7] text-white shadow-sm'
                : 'bg-white/5 text-stone-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Waves className="w-3.5 h-3.5" />
            <span>Rivers {showRivers ? 'Active' : 'Muted'}</span>
          </button>

          {/* Map vs List switch */}
          <div className="flex items-center p-0.5 bg-white/10 rounded-lg">
            <button
              onClick={() => setViewMode('map')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                viewMode === 'map' ? 'bg-[#F59E0B] text-[#090D16] font-bold' : 'text-stone-300 hover:text-white'
              }`}
            >
              Map View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                viewMode === 'list' ? 'bg-[#F59E0B] text-[#090D16] font-bold' : 'text-stone-300 hover:text-white'
              }`}
            >
              List View
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs Strip */}
      <div className="px-4 sm:px-6 py-3 bg-[#0A0F1D] border-b border-white/5 overflow-x-auto scrollbar-none flex items-center gap-1.5">
        <span className="text-[11px] text-stone-400 uppercase tracking-wider mr-2 shrink-0">Filter:</span>
        {categoryLabels.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-3 py-1 text-xs rounded-full whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              filter === cat.id
                ? 'bg-white/20 text-[#F59E0B] font-semibold border border-[#F59E0B]/40'
                : 'bg-white/5 text-stone-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Main Map Presentation */}
      {viewMode === 'map' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] relative">
          {/* Map Vector Stage (8 cols on desktop) */}
          <div className="lg:col-span-8 p-4 sm:p-6 flex items-center justify-center relative overflow-hidden bg-[#050811] select-none">
            {/* Ambient map glow backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.12)_0%,_rgba(5,8,17,0.95)_75%)] pointer-events-none" />

            {/* Map Zoom Controls */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5 bg-[#0F172A]/90 p-1 rounded-lg border border-white/15 shadow-lg backdrop-blur">
              <button
                onClick={() => handleZoom(0.15)}
                aria-label="Zoom in"
                className="p-1.5 text-stone-300 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleZoom(-0.15)}
                aria-label="Zoom out"
                className="p-1.5 text-stone-300 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleReset}
                aria-label="Reset zoom"
                className="p-1.5 text-stone-300 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Scale & Coordinate Indicator */}
            <div className="absolute bottom-4 left-4 z-20 text-[10px] text-stone-400 bg-[#0F172A]/80 px-2.5 py-1 rounded border border-white/10 backdrop-blur font-mono">
              20°34'N – 26°38'N · 88°01'E – 92°41'E
            </div>

            {/* Compass Rose */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none opacity-40">
              <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center relative">
                <span className="text-[9px] font-bold absolute top-0.5 text-white">N</span>
                <span className="text-[8px] absolute bottom-0.5 text-white">S</span>
                <span className="text-[8px] absolute right-1 text-white">E</span>
                <span className="text-[8px] absolute left-1 text-white">W</span>
                <div className="w-2 h-2 bg-[#F59E0B] rounded-full" />
              </div>
            </div>

            {/* SVG Interactive Map */}
            <div
              className="w-full max-w-[580px] aspect-[5/6] relative transition-transform duration-300 ease-out"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <svg
                viewBox="0 0 500 600"
                className="w-full h-full drop-shadow-2xl"
                aria-label="Geographic map outline of Bangladesh"
              >
                <defs>
                  <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="50%" stopColor="#162032" />
                    <stop offset="100%" stopColor="#0F172A" />
                  </linearGradient>

                  <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#0284C7" />
                  </linearGradient>

                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Bay of Bengal Sea Backdrop (South) */}
                <path
                  d="M0 500 Q 250 490 500 500 L 500 600 L 0 600 Z"
                  fill="#030712"
                  opacity="0.9"
                />

                {/* Bangladesh Geographic Boundary Polygon */}
                <path
                  d="M 175 40 
                     C 195 30, 240 50, 260 70 
                     C 285 75, 320 60, 360 85 
                     C 400 110, 420 150, 410 185 
                     C 395 210, 410 240, 400 270 
                     C 390 295, 430 330, 445 370 
                     C 460 410, 440 460, 435 500 
                     C 430 535, 410 575, 400 590 
                     C 385 580, 380 540, 360 520 
                     C 335 510, 310 530, 275 515 
                     C 250 505, 230 525, 200 520 
                     C 170 515, 140 525, 120 490 
                     C 100 460, 115 410, 120 370 
                     C 125 330, 95 300, 90 260 
                     C 85 220, 105 180, 115 140 
                     C 125 100, 155 50, 175 40 Z"
                  fill="url(#landGradient)"
                  stroke="#38BDF8"
                  strokeWidth="1.75"
                  strokeLinejoin="round"
                />

                {/* Internal Division Boundaries */}
                <path
                  d="M 120 220 C 180 230, 240 250, 260 280 M 260 280 C 310 290, 370 280, 410 240 M 260 280 C 255 350, 240 400, 230 450 M 260 380 C 320 400, 380 410, 420 440"
                  stroke="#94A3B8"
                  strokeWidth="0.75"
                  strokeDasharray="3 3"
                  opacity="0.3"
                  fill="none"
                />

                {/* Major River Networks */}
                {showRivers && (
                  <g className="transition-opacity duration-300">
                    <path
                      d="M 235 55 Q 225 130 220 210 Q 215 270 240 310"
                      stroke="url(#riverGrad)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.95"
                    />

                    <path
                      d="M 105 240 Q 160 265 240 310"
                      stroke="url(#riverGrad)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.95"
                    />

                    <path
                      d="M 370 120 Q 340 180 300 240 Q 280 270 265 315"
                      stroke="url(#riverGrad)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.9"
                    />

                    <path
                      d="M 240 310 Q 275 350 280 400 Q 290 450 295 510"
                      stroke="url(#riverGrad)"
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.95"
                    />

                    <path
                      d="M 410 370 Q 395 410 380 460"
                      stroke="url(#riverGrad)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.85"
                    />

                    <text x="210" y="160" fill="#38BDF8" fontSize="9" fontWeight="600" opacity="0.9" transform="rotate(-75, 210, 160)">
                      JAMUNA RIVER
                    </text>
                    <text x="145" y="270" fill="#38BDF8" fontSize="9" fontWeight="600" opacity="0.9" transform="rotate(12, 145, 270)">
                      PADMA RIVER
                    </text>
                    <text x="310" y="210" fill="#38BDF8" fontSize="9" fontWeight="600" opacity="0.9" transform="rotate(45, 310, 210)">
                      MEGHNA RIVER
                    </text>
                  </g>
                )}

                {/* Division Capital Markers */}
                {divisions.map((div) => (
                  <g key={div.name} opacity="0.6" pointerEvents="none">
                    <circle cx={(div.x / 100) * 500} cy={(div.y / 100) * 600} r="2" fill="#E2E8F0" />
                    <text
                      x={(div.x / 100) * 500 + 4}
                      y={(div.y / 100) * 600 + 3}
                      fill="#E2E8F0"
                      fontSize="9"
                      letterSpacing="1"
                      fontFamily="system-ui"
                    >
                      {div.name.toUpperCase()}
                    </text>
                  </g>
                ))}

                {/* Destination Markers */}
                {filteredDestinations.map((dest) => {
                  const x = (dest.coordinates.mapX / 100) * 500;
                  const y = (dest.coordinates.mapY / 100) * 600;
                  const isSelected = dest.slug === selectedSlug;
                  const isHovered = dest.slug === hoveredSlug;

                  return (
                    <g
                      key={dest.id}
                      className="cursor-pointer transition-transform duration-200"
                      onClick={() => setSelectedSlug(dest.slug)}
                      onMouseEnter={() => setHoveredSlug(dest.slug)}
                      onMouseLeave={() => setHoveredSlug(null)}
                    >
                      {isSelected && (
                        <circle
                          cx={x}
                          cy={y}
                          r="16"
                          fill="none"
                          stroke="#F59E0B"
                          strokeWidth="1.5"
                          opacity="0.85"
                          className="animate-ping origin-center"
                        />
                      )}

                      <circle
                        cx={x}
                        cy={y}
                        r={isSelected || isHovered ? 11 : 7}
                        fill={isSelected ? 'rgba(245, 158, 11, 0.4)' : 'rgba(56, 189, 248, 0.35)'}
                        stroke={isSelected ? '#F59E0B' : '#38BDF8'}
                        strokeWidth={isSelected ? '2' : '1.2'}
                      />

                      <circle
                        cx={x}
                        cy={y}
                        r={isSelected ? 5 : 3.5}
                        fill={isSelected ? '#FFFFFF' : '#F59E0B'}
                      />

                      <text
                        x={x + 10}
                        y={y + 4}
                        fill={isSelected ? '#F59E0B' : '#FFFFFF'}
                        fontSize={isSelected ? '11' : '9.5'}
                        fontWeight={isSelected ? '700' : '500'}
                        filter="url(#glow)"
                        className="transition-all select-none pointer-events-none"
                      >
                        {dest.name.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right Preview Drawer (4 cols on desktop) */}
          <div className="lg:col-span-4 p-5 sm:p-6 bg-[#0F172A] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
                <span className="uppercase tracking-widest text-[#F59E0B] font-bold">
                  Selected Destination
                </span>
                <span className="capitalize">{selectedDestination.category}</span>
              </div>

              <h4 className="font-serif text-2xl font-bold text-white">
                {selectedDestination.name}
              </h4>
              <p className="text-xs text-[#F59E0B] font-medium mt-0.5">
                {selectedDestination.bengaliName} · {selectedDestination.region}
              </p>

              {/* Destination Image Thumbnail */}
              <div className="mt-4 rounded-xl overflow-hidden aspect-[16/9] border border-white/15 relative bg-slate-900 shadow-md">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-3 right-3 text-[11px] text-white/90 truncate">
                  {selectedDestination.imageCaption}
                </div>
              </div>

              <p className="mt-4 text-xs text-stone-300 leading-relaxed font-light">
                {selectedDestination.shortDescription}
              </p>

              <div className="mt-4 pt-3 border-t border-white/10 space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Best Time</span>
                    <span className="text-white">{selectedDestination.bestTimeToVisit}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Compass className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Suggested Duration</span>
                    <span className="text-white">{selectedDestination.recommendedDuration}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 block mb-1.5 font-semibold">
                  Key Highlights
                </span>
                <ul className="space-y-1 text-xs text-stone-300">
                  {selectedDestination.whyVisit.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#F59E0B] font-bold">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={() => onSelectDestination(selectedDestination.slug)}
                className="w-full py-2.5 px-4 bg-[#F59E0B] hover:bg-[#D97706] text-[#090D16] rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow transition-all cursor-pointer"
              >
                <span>View Full Destination Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 sm:p-6 bg-[#050811] overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-300">
            <thead className="text-[11px] uppercase tracking-wider text-stone-400 border-b border-white/10 pb-2">
              <tr>
                <th className="py-2.5 pr-4">Destination</th>
                <th className="py-2.5 px-4">Region / Division</th>
                <th className="py-2.5 px-4">Category</th>
                <th className="py-2.5 px-4">Best Season</th>
                <th className="py-2.5 px-4">Duration</th>
                <th className="py-2.5 pl-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredDestinations.map((dest) => (
                <tr key={dest.id} className="hover:bg-white/5 transition-colors">
                  <td className="py-3 pr-4 font-medium text-white">
                    <div>{dest.name}</div>
                    <span className="text-[10px] text-[#F59E0B]">{dest.bengaliName}</span>
                  </td>
                  <td className="py-3 px-4 text-stone-400">{dest.region}</td>
                  <td className="py-3 px-4">
                    <span className="capitalize text-xs text-white">{dest.category}</span>
                  </td>
                  <td className="py-3 px-4 text-stone-400">{dest.bestTimeToVisit.split('(')[0]}</td>
                  <td className="py-3 px-4 text-stone-400">{dest.recommendedDuration}</td>
                  <td className="py-3 pl-4 text-right">
                    <button
                      onClick={() => onSelectDestination(dest.slug)}
                      className="px-3 py-1 bg-white/10 hover:bg-[#F59E0B] hover:text-[#090D16] rounded text-white text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Explore
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Map Legend */}
      <div className="px-4 sm:px-6 py-3 bg-[#070B14] border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[11px] text-stone-400">
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-semibold text-white">Map Legend:</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FAF8F5] border border-[#F59E0B]" />
            <span>Selected Spot</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
            <span>Featured Destination</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-0.5 bg-[#38BDF8]" />
            <span>Major River (Padma, Jamuna, Meghna)</span>
          </div>
        </div>

        <div className="text-right text-[10px]">
          <span>Cartography: Geo-calibrated WGS84 Reference · Survey of Bangladesh Projection</span>
        </div>
      </div>
    </div>
  );
};
