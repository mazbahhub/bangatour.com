import React, { useState, useMemo } from 'react';
import { Destination } from '../types';
import { destinations } from '../data/destinations';
import { Search, MapPin, Calendar, Clock, ArrowRight, Filter, Compass } from 'lucide-react';

interface DestinationsPageProps {
  onNavigate: (path: string) => void;
  initialQuery?: string;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({ onNavigate, initialQuery = '' }) => {
  const [search, setSearch] = useState(initialQuery);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [divisionFilter, setDivisionFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    return destinations.filter((dest) => {
      const matchSearch =
        dest.name.toLowerCase().includes(search.toLowerCase()) ||
        dest.bengaliName.includes(search) ||
        dest.region.toLowerCase().includes(search.toLowerCase()) ||
        dest.shortDescription.toLowerCase().includes(search.toLowerCase());

      const matchCat = categoryFilter === 'all' || dest.category === categoryFilter;
      const matchDiv = divisionFilter === 'all' || dest.division === divisionFilter;

      return matchSearch && matchCat && matchDiv;
    });
  }, [search, categoryFilter, divisionFilter]);

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'wildlife', label: 'Wildlife & Sanctuaries' },
    { id: 'hills', label: 'Hills & Clouds' },
    { id: 'nature', label: 'Rainforest & Tea' },
    { id: 'heritage', label: 'Ancient Heritage' },
    { id: 'beaches', label: 'Coastal Beaches' },
    { id: 'rivers', label: 'Rivers & Wetlands' },
  ];

  const divisions = [
    'all',
    'Dhaka',
    'Chittagong',
    'Sylhet',
    'Khulna',
    'Rajshahi',
    'Barisal',
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-20">
      {/* Header Banner */}
      <div className="bg-[#090D16] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#F59E0B] font-semibold mb-2">
            <Compass className="w-4 h-4 text-[#F59E0B]" />
            <span>Destination Directory</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Explore Bangladesh Destinations
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-300 max-w-2xl font-light leading-relaxed">
            From the deep tidal creeks of the Sundarbans and the rolling cloud seas of Sajek to 15th-century terracotta mosque cities and the longest sandy sea beach on earth.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Search & Filter Toolbar */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3.5 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, region, or keywords..."
                className="w-full pl-9 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              />
            </div>

            {/* Category Select */}
            <div>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                aria-label="Filter by category"
                className="w-full py-2.5 px-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Division Select */}
            <div>
              <select
                value={divisionFilter}
                onChange={(e) => setDivisionFilter(e.target.value)}
                aria-label="Filter by administrative division"
                className="w-full py-2.5 px-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              >
                <option value="all">All Administrative Divisions</option>
                {divisions.filter((d) => d !== 'all').map((d) => (
                  <option key={d} value={d}>
                    {d} Division
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Results Summary & Quick Reset */}
          <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
            <span>
              Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? 'destination' : 'destinations'}
            </span>
            {(search || categoryFilter !== 'all' || divisionFilter !== 'all') && (
              <button
                onClick={() => {
                  setSearch('');
                  setCategoryFilter('all');
                  setDivisionFilter('all');
                }}
                className="text-[#D97706] hover:underline font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Results Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((dest) => (
              <div
                key={dest.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                onClick={() => onNavigate(`/destinations/${dest.slug}`)}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 text-[11px] font-medium text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded">
                    {dest.region}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] text-[#C59B27] font-semibold uppercase tracking-wider block">
                      {dest.bengaliName}
                    </span>
                    <h3 className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-[#C59B27] transition-colors">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-stone-600 leading-relaxed font-light line-clamp-3 mb-4">
                      {dest.shortDescription}
                    </p>

                    {/* Metadata unboxed text */}
                    <div className="space-y-1.5 text-xs text-stone-500 pt-3 border-t border-stone-100">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                        <span className="truncate">{dest.bestTimeToVisit.split('(')[0]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                        <span>{dest.recommendedDuration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#D97706] group-hover:text-[#0F172A]">
                    <span>View Destination Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8">
            <Compass className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-stone-800">
              No destinations match your criteria
            </h3>
            <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search terms or clearing the category and division filters.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setCategoryFilter('all');
                setDivisionFilter('all');
              }}
              className="mt-4 px-4 py-2 bg-[#0F2F24] text-white text-xs font-semibold rounded-lg"
            >
              Show All Destinations
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
