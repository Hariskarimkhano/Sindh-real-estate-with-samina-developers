import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ContactSection } from '../components/ContactSection';
import { LOCATIONS_DATA } from '../data/locations';
import { MapPin, Phone, Mail, Building2, ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { navigate, openProjectInquiry } = useNavigation();

  return (
    <div className="w-full">
      {/* Contact Hero */}
      <section className="relative py-24 sm:py-32 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <div className="w-2 h-4 bg-[#D97706]" />
              <span>Connect with Sindh Real Estate with Samina Developers</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              LET&rsquo;S BUILD WHAT MATTERS
            </h1>
            <p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed">
              Reach our global headquarters, connect with regional project executives across North America, or initiate a new capital program inquiry.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px]" />
      </section>

      {/* Main Interactive Contact Section */}
      <ContactSection />

      {/* Regional Directory Fast Access */}
      <section className="py-20 sm:py-28 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#D97706] mb-2">
                Regional Hubs
              </div>
              <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white">
                KEY OFFICE LOCATIONS
              </h2>
            </div>
            <button
              onClick={() => navigate('/locations')}
              className="text-xs font-bold uppercase text-[#D97706] hover:text-amber-400 flex items-center gap-2"
            >
              <span>View All 50+ Offices</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LOCATIONS_DATA.slice(0, 4).map((loc) => (
              <div
                key={loc.id}
                className="bg-neutral-900 border border-white/10 p-6 space-y-4 hover:border-white/30 transition-colors"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#D97706] block mb-1">
                    {loc.region}
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase text-white">
                    {loc.name}
                  </h3>
                </div>

                <div className="space-y-2 text-xs text-neutral-400">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#D97706] shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                    <a href={`tel:${loc.phone}`} className="hover:text-white">{loc.phone}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                    <a href={`mailto:${loc.email}`} className="hover:text-white">{loc.email}</a>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => navigate(`/locations?office=${loc.id}`)}
                    className="text-xs font-semibold text-white hover:text-[#D97706] flex items-center gap-1.5 uppercase"
                  >
                    <span>Office Profile</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
