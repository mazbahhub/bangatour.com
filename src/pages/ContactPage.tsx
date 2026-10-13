import React, { useState } from 'react';
import { Mail, PhoneCall, MapPin, Send, Check } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-20">
      <div className="bg-[#0F2F24] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C59B27] font-semibold mb-2">
            <Mail className="w-4 h-4 text-[#C59B27]" />
            <span>Connect & Inquire</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Contact & Travel Inquiries
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-300 max-w-2xl font-light leading-relaxed">
            Have questions about visiting Bangladesh, seasonal travel timing, or photography expeditions? Reach out to our editorial and visitor assistance desk.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#0F2F24]">
                Direct Contacts
              </h3>
              <div className="space-y-3 text-xs text-stone-700">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-semibold">Editorial Desk</span>
                    <span className="font-medium">contact@discoverbangladesh.travel</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneCall className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-semibold">Tourist Police Hotline</span>
                    <span className="font-medium">+880 1320 001299 (24/7 Support)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-semibold">Geographic Coverage</span>
                    <span>All 8 Administrative Divisions across Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0F2F24] text-white p-6 rounded-2xl border border-white/10 shadow-sm text-xs space-y-2">
              <span className="text-[#C59B27] uppercase tracking-wider font-semibold block text-[10px]">
                Emergency Protocol
              </span>
              <p className="font-light leading-relaxed">
                For immediate in-country police, fire, or medical ambulance emergency in Bangladesh, please dial <strong>999</strong> directly from any local or roaming mobile phone.
              </p>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-[#0F2F24] mb-2">
              Send a Travel Inquiry
            </h3>
            <p className="text-xs text-stone-500 mb-6 font-light">
              We provide independent guidance, verification of local conditions, and travel advice.
            </p>

            {submitted ? (
              <div className="p-6 bg-[#0F2F24] text-white rounded-xl text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#133E32] text-[#C59B27] mx-auto flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-bold">Message Received</h4>
                <p className="text-xs text-stone-300 font-light">
                  Thank you! Our travel team will review your inquiry and respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#0D5C58]"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. eleanor@example.com"
                    className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#0D5C58]"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">Inquiry Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Sundarbans cruise timing, Sajek permit requirements"
                    className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#0D5C58]"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your travel dates, group size, or questions..."
                    className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#0D5C58]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0F2F24] hover:bg-[#133E32] text-white rounded-lg font-semibold uppercase tracking-wider text-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
