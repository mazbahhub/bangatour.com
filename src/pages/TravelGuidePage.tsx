import React, { useState } from 'react';
import { visaGuideData, travelEssentialsData } from '../data/travelGuides';
import { 
  ShieldCheck, 
  ExternalLink, 
  AlertCircle, 
  Check, 
  PhoneCall, 
  DollarSign, 
  Wifi, 
  Car, 
  HeartHandshake, 
  Droplet, 
  Compass,
  Calendar
} from 'lucide-react';

interface TravelGuidePageProps {
  onNavigate: (path: string) => void;
}

export const TravelGuidePage: React.FC<TravelGuidePageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'visa' | 'essentials'>('visa');

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-20">
      {/* Header Banner */}
      <div className="bg-[#0F2F24] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C59B27] font-semibold mb-2">
            <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
            <span>Practical Traveler Intelligence</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Visiting Bangladesh: Visa & Travel Essentials
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-300 max-w-2xl font-light leading-relaxed">
            Essential entry requirements, Visa on Arrival eligibility, currency nuances, mobile connectivity, cultural etiquette, and transportation blueprints for international visitors.
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs text-[#FAF8F5]/80 bg-white/10 w-fit px-3 py-1.5 rounded-lg border border-white/15">
            <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Information Last Verified: <strong>{visaGuideData.lastVerifiedDate}</strong></span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Navigation Tabs */}
        <div className="flex border-b border-stone-200 mb-10">
          <button
            onClick={() => setActiveTab('visa')}
            className={`pb-3 px-6 text-sm font-semibold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
              activeTab === 'visa'
                ? 'border-[#0F2F24] text-[#0F2F24]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Visa & Entry Information
          </button>
          <button
            onClick={() => setActiveTab('essentials')}
            className={`pb-3 px-6 text-sm font-semibold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
              activeTab === 'essentials'
                ? 'border-[#0F2F24] text-[#0F2F24]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Practical Travel Essentials
          </button>
        </div>

        {/* Tab 1: Visa & Entry */}
        {activeTab === 'visa' && (
          <div className="space-y-12">
            {/* Legal Disclaimer Box */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed font-light">
                <strong>Important Notice for International Visitors:</strong> {visaGuideData.importantDisclaimer} Always verify entry protocols with the Embassy or High Commission of Bangladesh in your jurisdiction before booking flights.
              </p>
            </div>

            {/* Visa Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {visaGuideData.visaCategories.map((cat, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#0D5C58] font-bold uppercase tracking-widest block mb-1">
                      Category 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#0F2F24] mb-3">
                      {cat.category}
                    </h3>

                    <div className="space-y-3 text-xs text-stone-700 mb-6">
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                        <span className="text-[10px] text-stone-400 uppercase font-semibold block">Maximum Duration</span>
                        <span className="font-medium text-stone-800">{cat.duration}</span>
                      </div>
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                        <span className="text-[10px] text-stone-400 uppercase font-semibold block">Estimated Fee</span>
                        <span className="font-medium text-stone-800">{cat.feeEstimatedUSD}</span>
                      </div>
                    </div>

                    <h4 className="font-serif text-sm font-bold text-[#0F2F24] mb-2">
                      Required Supporting Documents:
                    </h4>
                    <ul className="space-y-2 text-xs text-stone-600 font-light mb-6">
                      {cat.requirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#0D5C58] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>

                    {cat.eligibleNationalities.length > 1 && (
                      <div className="mb-6">
                        <h4 className="font-serif text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                          Common Eligible Nationalities:
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.eligibleNationalities.map((nat, nIdx) => (
                            <span key={nIdx} className="text-[11px] bg-stone-100 text-stone-700 px-2.5 py-1 rounded">
                              {nat}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-3 bg-[#FAF8F5] border-t border-stone-100 text-[11px] text-stone-600">
                    <strong className="text-stone-800">Field Advice: </strong>
                    <span className="font-light">{cat.keyAdvice}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Official Government Portals */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#0F2F24] mb-4">
                Official Bangladesh Government Portals
              </h3>
              <p className="text-xs text-stone-600 mb-6 font-light">
                For current fee schedules, application forms, and official circulars, refer strictly to these authentic government sources:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {visaGuideData.officialPortals.map((portal, idx) => (
                  <a
                    key={idx}
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-stone-50 hover:bg-stone-100 rounded-xl border border-stone-200 transition-colors flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-semibold text-[#0F2F24] mb-1">
                        <span>{portal.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#0D5C58]" />
                      </div>
                      <p className="text-[11px] text-stone-500 font-light">
                        {portal.description}
                      </p>
                    </div>
                    <span className="text-[10px] text-[#0D5C58] font-mono mt-3 block truncate">
                      {portal.url}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Practical Travel Essentials */}
        {activeTab === 'essentials' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {travelEssentialsData.map((ess, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#0F2F24] mb-1">
                      {ess.topic}
                    </h3>
                    <p className="text-xs text-[#0D5C58] font-semibold mb-4">
                      {ess.summary}
                    </p>

                    <ul className="space-y-2.5 text-xs text-stone-600 font-light">
                      {ess.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <span className="text-[#C59B27] font-bold">·</span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Support Banner */}
            <div className="p-6 bg-[#0F2F24] text-white rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#133E32] border border-[#C59B27]/40 flex items-center justify-center text-[#C59B27] shrink-0">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold">
                    24/7 Emergency Assistance in Bangladesh
                  </h4>
                  <p className="text-xs text-stone-300 font-light">
                    National Emergency Helpline: <strong>999</strong> (Police / Ambulance / Fire) · Tourist Police: <strong>+880 1320 001299</strong>
                  </p>
                </div>
              </div>

              <button
                onClick={() => onNavigate('/itineraries')}
                className="py-2.5 px-5 bg-[#C59B27] hover:bg-[#D4AF37] text-[#0F2F24] rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
              >
                Plan Your Trip
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
