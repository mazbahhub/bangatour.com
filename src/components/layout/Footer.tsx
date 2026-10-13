import React, { useState } from 'react';
import { Compass, Mail, ExternalLink, ShieldCheck, PhoneCall, Heart, Film, Download } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <footer className="bg-[#050811] text-stone-300 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#111827] border border-[#F59E0B]/40 flex items-center justify-center text-[#F59E0B]">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Discover Bangladesh
              </span>
            </div>
            <p className="text-sm text-stone-400 max-w-sm leading-relaxed font-light">
              "A Land of Rivers, Stories & Wonders." An independent travel portal dedicated to showcasing the landscapes, wildlife, seasonal rhythms, and authentic cultural heritage of Bangladesh to international travelers.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              <span>Verified travel notes & responsible wildlife tourism principles.</span>
            </div>
          </div>

          {/* Column 2: Destinations & Geography */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Explore Delta
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/destinations/sundarbans')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer text-left"
                >
                  Sundarbans Mangrove
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/destinations/sajek-valley')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer text-left"
                >
                  Sajek Valley & Clouds
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/destinations/sreemangal')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer text-left"
                >
                  Sreemangal Tea Estates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/destinations/old-dhaka')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer text-left"
                >
                  Old Dhaka & Lalbagh
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/destinations/tanguar-haor')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer text-left"
                >
                  Tanguar Haor Wetlands
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/map')}
                  className="text-[#F59E0B] hover:underline font-medium cursor-pointer text-left inline-flex items-center gap-1 mt-1"
                >
                  Interactive Map of Bangladesh
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Guides & Planning */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Plan Your Trip
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/itineraries')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer text-left"
                >
                  Suggested Itineraries (3–10 Days)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/seasons')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer text-left"
                >
                  The Six Bengali Seasons
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/food')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer text-left"
                >
                  Bangladeshi Food & Hilsa Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/wildlife')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer text-left"
                >
                  Wildlife & National Parks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/#video-tours')}
                  className="text-[#F59E0B] hover:underline font-medium cursor-pointer text-left inline-flex items-center gap-1.5"
                >
                  <Film className="w-3.5 h-3.5" />
                  <span>Watch 4K Video Tours</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/travel-guide')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer text-left"
                >
                  Visa on Arrival & Essentials
                </button>
              </li>
              <li className="pt-2">
                <a
                  href="/discover-bangladesh-project.zip"
                  download="discover-bangladesh-source.zip"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#F59E0B] text-xs font-semibold border border-white/20 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Code (ZIP)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Emergency Help */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Travel Dispatch
            </h4>
            <p className="text-xs text-stone-400 mb-3 leading-relaxed font-light">
              Curated seasonal itineraries, festival calendars, and photography guides.
            </p>

            {subscribed ? (
              <div className="bg-[#1E293B] border border-[#F59E0B]/40 rounded-lg p-3 text-xs text-[#F59E0B]">
                Thank you! You are subscribed to our seasonal travel digest.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-xs bg-white/5 border border-white/15 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-[#F59E0B]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#F59E0B] hover:bg-[#D97706] text-[#090D16] rounded text-xs font-bold cursor-pointer"
                  >
                    Join
                  </button>
                </div>
                <span className="text-[10px] text-stone-500 block">
                  Demo preview. No unsolicited marketing emails.
                </span>
              </form>
            )}

            <div className="mt-5 pt-4 border-t border-white/10 text-xs space-y-1.5">
              <div className="flex items-center gap-2 text-white/90">
                <PhoneCall className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Emergency: <strong>999</strong> (Police / Ambulance)</span>
              </div>
              <div className="text-[11px] text-stone-400">
                Tourist Police Helpline: +880 1320 001299
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Attribution & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Discover Bangladesh. Independent travel education and cultural publication.</p>
          <div className="flex items-center gap-5">
            <button
              onClick={() => onNavigate('/about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('/privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('/terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <span className="text-white/20">·</span>
            <span>Map Data: OpenStreetMap & Survey of Bangladesh Reference</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
