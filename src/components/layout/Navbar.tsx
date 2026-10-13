import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, MapPin, Calendar, Utensils, Feather, BookOpen, ShieldCheck, Search, Film, Download } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Destinations', path: '/destinations', icon: MapPin },
    { label: 'Video Tours', path: '/#video-tours', icon: Film },
    { label: 'Six Seasons', path: '/seasons', icon: Calendar },
    { label: 'Interactive Map', path: '/map', icon: Compass },
    { label: 'Food & Culture', path: '/food', icon: Utensils },
    { label: 'Wildlife', path: '/wildlife', icon: Feather },
    { label: 'Travel Guide', path: '/travel-guide', icon: ShieldCheck },
    { label: 'Stories', path: '/blog', icon: BookOpen },
  ];

  const handleLinkClick = (path: string) => {
    if (path.startsWith('/#')) {
      const elementId = path.replace('/#', '');
      if (currentPath !== '/') {
        onNavigate('/');
        setTimeout(() => {
          const el = document.getElementById(elementId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(elementId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
      return;
    }
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090D16]/95 backdrop-blur-md border-b border-white/10 shadow-xl py-3'
          : 'bg-gradient-to-b from-[#090D16]/90 via-[#090D16]/55 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Zone */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3 text-left focus:outline-none group whitespace-nowrap shrink-0"
          >
            <div className="w-9 h-9 rounded-full bg-[#111827] border border-[#F59E0B]/40 flex items-center justify-center text-[#F59E0B] shadow-inner transition-transform group-hover:scale-105">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white block leading-none">
                Discover Bangladesh
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#F59E0B]/90 font-medium hidden sm:block mt-0.5">
                Land of Rivers & Wonders
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-200">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-white cursor-pointer ${
                    isActive ? 'text-[#F59E0B] font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F59E0B] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Search */}
          <div className="flex items-center gap-3 shrink-0">
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                aria-label="Search destinations and guides"
                className="p-2 text-stone-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            {/* Direct Source Code Download Button */}
            <a
              href="/discover-bangladesh-project.zip"
              download="discover-bangladesh-source.zip"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-200 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors cursor-pointer"
              title="Download full project code as ZIP file"
            >
              <Download className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span className="hidden md:inline">Download ZIP</span>
              <span className="md:hidden">ZIP</span>
            </a>

            <button
              onClick={() => handleLinkClick('/itineraries')}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#090D16] bg-[#F59E0B] hover:bg-[#D97706] active:scale-95 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              Plan Journey
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden p-2 text-stone-200 hover:text-white rounded-lg focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#090D16] border-b border-white/10 shadow-2xl px-6 py-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium transition-colors text-left ${
                    isActive
                      ? 'bg-[#1E293B] text-[#F59E0B] font-semibold'
                      : 'text-stone-200 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5 text-[#F59E0B]" />
                  <span>{link.label}</span>
                </button>
              );
            })}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => handleLinkClick('/itineraries')}
                className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-[#090D16] bg-[#F59E0B] hover:bg-[#D97706] rounded-lg shadow transition-colors cursor-pointer"
              >
                Interactive Trip Planner
              </button>
              <a
                href="/discover-bangladesh-project.zip"
                download="discover-bangladesh-source.zip"
                className="w-full py-2.5 text-center text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#F59E0B]" />
                <span>Download Source Code (ZIP)</span>
              </a>
              <button
                onClick={() => handleLinkClick('/travel-guide')}
                className="w-full py-2 text-center text-xs text-stone-400 hover:text-white"
              >
                Visa & Practical Essentials
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
