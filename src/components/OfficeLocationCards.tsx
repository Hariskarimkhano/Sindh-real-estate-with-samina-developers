import React from 'react';
import { Building2, MapPin, Phone } from 'lucide-react';
import { LOCATIONS_DATA, toTelephoneUri } from '../data/locations';
import { CANADIAN_PROJECT_GALLERIES } from '../data/canadianProjectImages';
import { PROJECTS_DATA } from '../data/projects';
import { useNavigation } from '../context/NavigationContext';

const canadaImage = CANADIAN_PROJECT_GALLERIES.find(gallery => gallery.city === 'Montreal')?.images[0];
const dubaiProjectImage = PROJECTS_DATA.find(project => project.city === 'Dubai')?.heroImage;

const officeImages: Record<string, { src: string; alt: string } | undefined> = {
  canada: canadaImage
    ? { src: canadaImage.src, alt: 'Canadian residential development project' }
    : undefined,
  dubai: dubaiProjectImage
    ? { src: dubaiProjectImage, alt: 'Existing Dubai office project image' }
    : undefined
};

interface OfficeLocationCardsProps {
  theme: 'dark' | 'light';
  displayDubaiSlash?: boolean;
}

export const OfficeLocationCards: React.FC<OfficeLocationCardsProps> = ({ theme, displayDubaiSlash = false }) => {
  const { navigate } = useNavigation();
  const isDark = theme === 'dark';

  return (
    <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-3">
      {LOCATIONS_DATA.map(office => {
        const image = officeImages[office.id];

        return (
          <article
            key={office.id}
            className={`flex h-full flex-col overflow-hidden border rounded-xs ${
              isDark ? 'bg-[#12161A] border-white/10' : 'bg-white border-neutral-200'
            }`}
          >
            <div className={`relative flex h-48 items-center justify-center sm:h-56 ${
              isDark ? 'bg-neutral-900' : 'bg-neutral-100'
            }`}>
              {image ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              ) : (
                <div className={`flex flex-col items-center gap-2 text-xs uppercase tracking-wider ${
                  isDark ? 'text-neutral-500' : 'text-neutral-400'
                }`}>
                  <Building2 className="h-8 w-8" aria-hidden="true" />
                  <span>Office image coming soon</span>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <button
                onClick={() => navigate(`/locations?office=${office.id}`)}
                className={`text-left font-display text-lg font-bold uppercase tracking-tight transition-colors ${
                  isDark ? 'text-white hover:text-[#DFB257]' : 'text-[#12161A] hover:text-[#B88728]'
                }`}
              >
                {office.id === 'dubai' && displayDubaiSlash ? 'UAE / Dubai Office' : office.name}
              </button>
              <div className={`mt-4 flex items-start gap-2 text-xs leading-relaxed ${
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              }`}>
                <MapPin className={`mt-0.5 h-4 w-4 shrink-0 ${isDark ? 'text-[#DFB257]' : 'text-[#B88728]'}`} aria-hidden="true" />
                <span>{office.address}</span>
              </div>
              <a
                href={toTelephoneUri(office.phone)}
                className={`mt-auto inline-flex items-center gap-2 pt-5 text-xs font-semibold transition-colors ${
                  isDark ? 'text-neutral-300 hover:text-white' : 'text-neutral-700 hover:text-[#B88728]'
                }`}
              >
                <Phone className={`h-4 w-4 shrink-0 ${isDark ? 'text-[#DFB257]' : 'text-[#B88728]'}`} aria-hidden="true" />
                {office.phone}
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
};
