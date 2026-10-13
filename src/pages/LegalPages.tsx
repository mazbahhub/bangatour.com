import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface LegalPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-stone-800 mb-6 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-stone-200 shadow-sm space-y-6 text-stone-700 font-light text-sm leading-relaxed">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#0D5C58] font-semibold">
            <Shield className="w-4 h-4 text-[#C59B27]" />
            <span>Data Protection & Transparency</span>
          </div>

          <h1 className="font-serif text-3xl font-bold text-[#0F2F24]">
            Privacy Policy
          </h1>

          <p className="text-xs text-stone-400">
            Last Updated: October 2026
          </p>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#0F2F24]">
              1. Information We Collect
            </h2>
            <p>
              Discover Bangladesh is an informational, educational travel guide. We do not sell user data, track users across third-party networks, or run deceptive tracking pixels. If you voluntarily submit our newsletter form or traveler inquiry form, your email address is used solely to respond to your specific request.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#0F2F24]">
              2. Cookies & Local Storage
            </h2>
            <p>
              We use minimal browser localStorage exclusively to save your client-side trip planner selections (such as selected duration and pace) so your travel blueprint is preserved during your active browsing session.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#0F2F24]">
              3. Third-Party Maps & External Links
            </h2>
            <p>
              Our website links directly to authentic Bangladesh Government portals (such as the Department of Immigration & Passports at dip.gov.bd and visa.gov.bd). We are not responsible for the privacy practices or contents of external government websites.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export const TermsPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-stone-800 mb-6 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-stone-200 shadow-sm space-y-6 text-stone-700 font-light text-sm leading-relaxed">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#0D5C58] font-semibold">
            <Shield className="w-4 h-4 text-[#C59B27]" />
            <span>Usage Guidelines & Disclaimers</span>
          </div>

          <h1 className="font-serif text-3xl font-bold text-[#0F2F24]">
            Terms of Use
          </h1>

          <p className="text-xs text-stone-400">
            Last Updated: October 2026
          </p>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#0F2F24]">
              1. Informational & Planning Nature
            </h2>
            <p>
              Discover Bangladesh operates as an independent digital travel publication and journey planning resource. We do not operate commercial airline bookings, issue government visas, or represent Bangladesh Immigration authorities.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#0F2F24]">
              2. Travel Advisory & Verification Requirement
            </h2>
            <p>
              While all itineraries, seasonal guidelines, and travel tips are curated with editorial care, travel conditions in the Bengal delta (such as seasonal monsoon water levels, ferry launch sailings, and road travel times) are subject to change. International travelers MUST independently verify current visa eligibility, health requirements, and weather advisories before traveling.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg font-bold text-[#0F2F24]">
              3. Cartography & Geographic Data Attribution
            </h2>
            <p>
              The interactive maps and coordinate representations on this website are calibrated based on official Survey of Bangladesh geographic references and OpenStreetMap data for general spatial orientation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
