import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { INTERNATIONAL_PROJECTS } from '../data/network';
import { ArrowRight, Globe, MapPin, House, Building2, Warehouse, Handshake } from 'lucide-react';
import { ASSETS } from '../data/assets';

export const InternationalPage: React.FC = () => {
  const { navigate, openProjectInquiry } = useNavigation();

  const uaeActivities = [
    {
      title: 'Luxury Villas',
      description: 'We are currently constructing and have successfully completed luxury villa projects in these locations.',
      locations: ['Al Mamzar', 'Al Tawar', 'Al Khawaneej', 'Jumeirah, Dubai'],
      Icon: House
    },
    {
      title: 'High-Rise Buildings',
      description: 'We are developing high-rise residential and commercial buildings in collaboration with established construction and development companies.',
      locations: ['Al Qusais', 'Al Khawaneej', 'Dubai Silicon Oasis'],
      partners: ['Al Jabri', 'Nakheel', 'Azizi', 'Al Habtoor'],
      Icon: Building2
    },
    {
      title: 'Warehouses & Industrial Facilities',
      description: 'We are also undertaking warehouse construction projects in these locations.',
      locations: ['Al Twai', 'Ras Al Khor', 'Jebel Ali', 'DIP (Dubai Investment Park)', 'DIC (Dubai Internet City)'],
      Icon: Warehouse
    }
  ];

  const uaeFocus = [
    'High-quality construction',
    'Professional project management',
    'Strategic partnerships',
    'Reliable real-estate development solutions',
    'Residential projects',
    'Commercial projects',
    'Industrial projects'
  ];

  const canadaCities = ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'];
  const canadaPartners = ['PCL Construction', 'EllisDon', 'Aecon Group', 'Bird Construction', 'Ledcor Group'];
  const residentialPortfolio = ['Private houses', 'Luxury homes', 'Townhouses', 'Residential development projects'];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <Globe className="w-4 h-4" />
              <span>Sindhi Real Estate International</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              GLOBAL EXPERTISE. LOCAL EXPERIENCE.
            </h1>
            <p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed">
              Managing iconic mega-projects across Europe, the Middle East, Southeast Asia, and India. From the world&rsquo;s tallest skyscraper to sovereign cultural institutions.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px]" />
      </section>

      {/* Regional Operations Overview */}
      <section className="py-20 sm:py-28 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#12161A]">
              SHAPING THE WORLD&rsquo;S MOST MONUMENTAL HORIZONS
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
              Sindhi Real Estate with Samina Developer brings international construction and project management expertise to sovereign funds, global developers, and multinational corporations.
            </p>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
              We specialize in tall building engineering, high-wind and seismic aerodynamics, complex curtain-wall procurement, and mission-critical logistical planning across challenging climates.
            </p>
            <div className="pt-2">
              <button
                onClick={openProjectInquiry}
                className="px-6 py-3 bg-[#12161A] hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <span>Inquire About International Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-900 border border-neutral-200 shadow-xl">
              <img
                src={ASSETS.heroConstruction}
                alt="Supertall tower construction skyline"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* UAE Construction & Development */}
      <section id="uae-operations" className="border-b border-neutral-200 bg-white py-20 text-[#12161A] sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:mb-14 lg:flex-row lg:items-end">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
                <Globe className="h-4 w-4" />
                <span>United Arab Emirates</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-[#12161A] sm:text-4xl">
                UAE Construction &amp; Development
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                Our company is actively involved in residential and commercial construction projects across the United Arab Emirates.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3 border-l-2 border-[#D97706] bg-[#F8F9FA] px-5 py-4">
              <Building2 className="h-5 w-5 text-[#D97706]" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">Residential · Commercial · Industrial</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {uaeActivities.map(({ title, description, locations, partners, Icon }, index) => (
              <article
                key={title}
                className="group flex h-full flex-col border border-neutral-200 bg-[#F8F9FA] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D97706]/60 hover:shadow-xl sm:p-7"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#D97706]/30 bg-[#D97706]/5 text-[#D97706] transition-colors group-hover:bg-[#D97706] group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <span className="font-mono-numbers text-xs font-bold tracking-widest text-neutral-400">0{index + 1}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#12161A]">{title}</h3>
                <p className="mt-3 min-h-12 text-sm leading-relaxed text-neutral-600">{description}</p>

                <div className="mt-6 border-t border-neutral-200 pt-5">
                  <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                    <MapPin className="h-3.5 w-3.5 text-[#D97706]" />
                    Locations
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {locations.map(location => (
                      <li key={location} className="border border-neutral-200 bg-white px-2.5 py-1.5 text-xs font-medium text-neutral-700">
                        {location}
                      </li>
                    ))}
                  </ul>
                </div>

                {partners && (
                  <div className="mt-6 border-t border-neutral-200 pt-5">
                    <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                      <Handshake className="h-3.5 w-3.5 text-[#D97706]" />
                      Development partners
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {partners.map(partner => (
                        <li key={partner} className="border border-[#D97706]/20 bg-[#D97706]/5 px-2.5 py-1.5 text-xs font-semibold text-[#76500B]">
                          {partner}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="mt-8 border border-neutral-200 bg-white p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-5 w-1 bg-[#D97706]" />
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#12161A]">UAE Operations Focus</h3>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {uaeFocus.map(focus => (
                <li key={focus} className="flex items-start gap-2.5 text-sm leading-relaxed text-neutral-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#D97706]" />
                  {focus}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Canada Residential Construction */}
      <section id="canada-residential" className="relative isolate overflow-hidden border-b border-white/10 bg-[#12161A] py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-15 bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl space-y-4 lg:mb-14">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <Globe className="h-4 w-4" />
              <span>Canada</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              Canada — Residential Construction
            </h2>
            <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
              Through strategic partnerships and experienced professional teams, we participate in the planning, development, and construction of high-quality residential projects across Canada.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
            <div className="border border-white/10 bg-white/[0.03] p-6 sm:p-7 lg:col-span-4">
              <div className="mb-5 flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#D97706]" />
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Cities</h3>
              </div>
              <ul className="grid grid-cols-2 gap-2">
                {canadaCities.map(city => (
                  <li key={city} className="border border-white/10 bg-[#12161A]/50 px-3 py-3 text-sm font-medium text-neutral-200">
                    {city}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/10 bg-white/[0.03] p-6 sm:p-7 lg:col-span-4">
              <div className="mb-5 flex items-center gap-3">
                <Handshake className="h-4 w-4 text-[#D97706]" />
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Strategic Partnerships</h3>
              </div>
              <ul className="space-y-2">
                {canadaPartners.map(partner => (
                  <li key={partner} className="flex items-center gap-2.5 border-b border-white/10 py-2 text-sm text-neutral-300 last:border-0">
                    <span className="h-1.5 w-1.5 shrink-0 bg-[#D97706]" />
                    {partner}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/10 bg-white/[0.03] p-6 sm:p-7 lg:col-span-4">
              <div className="mb-5 flex items-center gap-3">
                <House className="h-4 w-4 text-[#D97706]" />
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Residential Portfolio</h3>
              </div>
              <ul className="space-y-2">
                {residentialPortfolio.map(category => (
                  <li key={category} className="flex items-center gap-2.5 border-b border-white/10 py-2 text-sm text-neutral-300 last:border-0">
                    <span className="h-1.5 w-1.5 shrink-0 bg-[#D97706]" />
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured International Megaprojects Showcase */}
      <section className="py-20 sm:py-28 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4 mb-14">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <div className="w-2 h-4 bg-[#D97706]" />
              <span>International Portfolio</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              MONUMENTAL GLOBAL PROJECTS
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Engineering breakthroughs delivered across the Middle East, Asia Pacific, and Europe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTERNATIONAL_PROJECTS.map((proj, idx) => (
              <div
                key={idx}
                onClick={() => navigate(`/projects/${proj.slug}`)}
                className="bg-neutral-900 border border-white/10 hover:border-[#D97706] p-6 cursor-pointer transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span>{proj.location}</span>
                    <span className="font-mono-numbers text-white">{proj.height}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase text-white group-hover:text-[#D97706] transition-colors">
                    {proj.name}
                  </h3>

                  <div className="text-xs text-[#D97706] uppercase tracking-wider font-semibold">
                    {proj.role}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-bold uppercase text-neutral-300 group-hover:text-[#D97706] transition-colors">
                  <span>VIEW DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
