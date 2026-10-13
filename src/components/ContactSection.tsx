import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { LOCATIONS_DATA, toTelephoneUri } from '../data/locations';
import { useNavigation } from '../context/NavigationContext';

export const ContactSection: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section className="border-b border-neutral-200 bg-[#F8F9FA] py-20 text-[#12161A] sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#B88728]">
            <div className="h-4 w-2 bg-[#DFB257]" />
            <span>Our Offices</span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">
            OFFICE LOCATIONS
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 border-t border-neutral-300 pt-8 md:grid-cols-3 md:gap-10">
          {LOCATIONS_DATA.map(office => (
            <div key={office.id} className="space-y-3">
              <button
                onClick={() => navigate(`/locations?office=${office.id}`)}
                className="text-left font-display text-lg font-bold uppercase tracking-tight text-[#12161A] transition-colors hover:text-[#B88728]"
              >
                {office.id === 'dubai' ? 'UAE / Dubai Office' : office.name}
              </button>
              <div className="flex items-start gap-2 text-xs leading-relaxed text-neutral-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B88728]" aria-hidden="true" />
                <span>{office.address}</span>
              </div>
              <a
                href={toTelephoneUri(office.phone)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-700 transition-colors hover:text-[#B88728]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#B88728]" aria-hidden="true" />
                {office.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
