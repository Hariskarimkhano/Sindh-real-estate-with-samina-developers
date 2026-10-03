import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { MARKETS_DATA } from '../data/markets';
import { PROJECTS_DATA } from '../data/projects';
import { ArrowLeft, ArrowRight, ChevronRight, Building2, CheckCircle2, Shield } from 'lucide-react';

interface MarketDetailPageProps {
  slug: string;
}

export const MarketDetailPage: React.FC<MarketDetailPageProps> = ({ slug }) => {
  const { navigate, openProjectInquiry } = useNavigation();
  const market = MARKETS_DATA.find(m => m.slug === slug) || MARKETS_DATA[0];

  const marketProjects = PROJECTS_DATA.filter(
    p => p.market.toLowerCase().includes(market.slug.toLowerCase()) ||
         p.market.toLowerCase().includes(market.title.toLowerCase().split(' ')[0])
  );

  return (
    <div className="w-full">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#12161A] text-neutral-400 text-xs py-3 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2">
          <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button onClick={() => navigate('/markets')} className="hover:text-white transition-colors">Markets</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#D97706] font-semibold">{market.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <Building2 className="w-4 h-4" />
              <span>Dedicated Sector Practice</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              {market.title}
            </h1>

            <p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed max-w-2xl">
              {market.shortDescription}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={openProjectInquiry}
                className="px-7 py-3.5 bg-[#D97706] hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                <span>INITIATE SECTOR INQUIRY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/markets')}
                className="px-6 py-3.5 border border-white/20 text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Markets</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-4/3 overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
            <img
              src={market.heroImage}
              alt={market.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 font-mono-numbers text-xs font-bold text-white">
              {market.projectCount}+ Sector Projects Delivered
            </div>
          </div>
        </div>
      </section>

      {/* Sector Overview & Technical Challenges */}
      <section className="py-20 sm:py-28 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#12161A]">
                INDUSTRY EXPERTISE &amp; EXECUTION STRATEGY
              </h2>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
                {market.overview}
              </p>
              <div className="p-6 bg-white border border-neutral-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#D97706]" />
                  <span>Why Sindhi Real Estate Leads This Market</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Our sector leaders maintain active seats on international regulatory code committees, hospital infection control task forces, and high-performance building councils—allowing us to anticipate permitting hurdles, market supply constraints, and technical evolutions before they impact your jobsite.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-neutral-200 p-8 space-y-6 shadow-xs">
              <h3 className="font-display text-xl font-bold uppercase text-[#12161A]">
                KEY TECHNICAL PRIORITIES
              </h3>
              <div className="space-y-3">
                {market.keyDrivers.map((driver, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-neutral-50 border border-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-neutral-800 leading-relaxed">{driver}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Projects Portfolio */}
      <section className="py-20 sm:py-28 bg-[#12161A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
              REPRESENTATIVE {market.title.toUpperCase()} WORK
            </h3>
            <button
              onClick={() => navigate('/projects')}
              className="text-xs font-bold uppercase text-[#D97706] hover:text-amber-400 flex items-center gap-1.5"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => navigate(`/projects/${p.slug}`)}
                className="bg-neutral-900 border border-white/10 hover:border-white/30 overflow-hidden cursor-pointer group transition-all"
              >
                <div className="relative aspect-16/9 bg-neutral-950 overflow-hidden">
                  <img
                    src={p.heroImage}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs text-white font-mono-numbers">
                    {p.city} · {p.year}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="font-bold text-sm text-white group-hover:text-[#D97706] transition-colors truncate">
                    {p.name}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
