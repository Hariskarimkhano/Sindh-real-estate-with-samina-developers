import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { CompanyStatistics } from '../components/CompanyStatistics';
import { Button } from '../components/ui/Button';
import { ArrowRight, CheckCircle2, Shield, Users, HeartHandshake, Award, MapPin, UserRound } from 'lucide-react';
import { ASSETS } from '../data/assets';
import abuAliPhoto from '../assets/Team leadership/abu ali.jpeg';
import fatimaPhoto from '../assets/Team leadership/fatima.jpeg';
import jimmySinghPhoto from '../assets/Team leadership/jimmy singh.jpeg';
import michealFarrisPhoto from '../assets/Team leadership/michael farris.jpeg';
import shahnawazPhoto from '../assets/Team leadership/shahnawaz.jpeg';

export const WhoWeArePage: React.FC = () => {
  const { navigate, openProjectInquiry } = useNavigation();

  const leadershipTeam = [
    { name: 'Shahnawaz Sehto', title: 'Founder & Chairman', details: 'Pakistan — Sindh', image: shahnawazPhoto, preserveImage: true },
    { name: 'Ms. Samina Shahnawaz', title: 'Chief Executive Officer (CEO)', details: 'Pakistan — Sindh', image: null, isCeo: true },
    { name: 'Mr. Micheal Farris', title: 'Director – International Affairs', details: 'UK National', image: michealFarrisPhoto },
    { name: 'Mr. Jimmy Singh', title: 'Financial Director', details: 'Indian-Canadian National', image: jimmySinghPhoto, preserveImage: true },
    { name: 'Ms. Fatima Bint Sheikh Rashid', title: 'Operations Director', details: 'UAE National', image: fatimaPhoto, preserveImage: true },
    { name: 'Mr. Abu Ali', title: 'Director – Strategic Partnerships', details: 'Bahraini National', image: abuAliPhoto }
  ];

  const historicalMilestones = [
    { year: '1902', title: 'Foundation & Concrete Pioneer', desc: 'A New York construction company is founded and pioneers the industrial use of reinforced concrete for structural buildings.' },
    { year: '1929', title: 'Commercial Expansion & The Great Depression', desc: 'Major construction projects include the Breakers Hotel in Palm Beach and Western Electric manufacturing plants, completed through a period of economic uncertainty.' },
    { year: '1947', title: 'United Nations Secretariat & Modern Landmarks', desc: 'Construction of the iconic United Nations Secretariat building in Manhattan helps inaugurate the modern era of commercial curtain-wall towers.' },
    { year: '1970', title: 'Madison Square Garden & High-Rise Hegemony', desc: 'Completes Madison Square Garden and major corporate headquarters towers for Chase Manhattan, IBM, and Xerox across North America.' },
    { year: '2004', title: 'Taipei 101 & Global Supertalls', desc: 'Taipei 101 reaches 508 meters, with an iconic 660-tonne tuned mass pendulum damper engineered to mitigate typhoon effects.' },
    { year: '2010', title: 'Burj Khalifa World Record', desc: 'Serves as Project Construction Manager for the 828-meter Burj Khalifa in Dubai—the tallest building and freestanding structure in human history.' },
    { year: '2021', title: 'SoFi Stadium & Monumental Sports', desc: 'Constructs the 3.1 million sq ft SoFi Stadium and Hollywood Park entertainment district in Inglewood, CA under a 1-million-sq-ft ETFE canopy.' },
    { year: '2026+', title: 'Frontier AI, Net Zero & Industrialized Building', desc: 'Leading the decarbonization of the built environment with mass-timber frames, low-carbon concrete, and hyperscale AI computing infrastructure.' }
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="relative py-24 sm:py-32 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <div className="w-2 h-4 bg-[#D97706]" />
              <span>Who We Are</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              A LEGACY OF BUILDING WHAT MATTERS
            </h1>
            <p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed">
              Sindhi Real Estate with Samina Developer is an international construction services company dedicated to transforming ideas into physical landmarks that elevate societies.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px]" />
      </section>

      {/* Statistics */}
      <CompanyStatistics />

      {/* Narrative Section */}
      <section className="py-20 sm:py-28 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#12161A]">
                INTEGRITY, TECHNICAL MASTERY &amp; LOCAL DEVOTION
              </h2>
              <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                Sindhi Real Estate with Samina Developer takes on complex building programs and earns trust every day through radical honesty, financial discipline, and technical craft.
              </p>
              <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                As a member of HOCHTIEF and ACS Group, we combine the financial strength and worldwide purchasing power of one of the planet&rsquo;s largest engineering networks with the agility, responsiveness, and civic devotion of over 50 regional offices.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Button
                  variant="dark"
                  size="md"
                  showArrow
                  onClick={() => navigate('/services')}
                >
                  OUR SERVICES
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={openProjectInquiry}
                >
                  PARTNER WITH US
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 bg-neutral-900 border border-neutral-200 shadow-xl overflow-hidden">
                <img
                  src={ASSETS.heroConstruction}
                  alt="Historic and modern construction engineering"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="relative isolate overflow-hidden border-b border-white/10 bg-[#12161A] py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
                <div className="h-4 w-2 bg-[#D97706]" />
                <span>Governance &amp; Direction</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Our Leadership
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base">
                Meet the leadership team guiding Sindhi Real Estate with Samina Developer.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-4 border border-white/15 bg-white/[0.04] px-5 py-4 sm:px-6">
              <div className="flex h-11 w-11 items-center justify-center border border-[#D97706]/50 bg-[#D97706]/10 text-[#D97706]">
                <span className="font-mono-numbers text-lg font-bold">13</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">Company Established</span>
                <span className="mt-1 block font-display text-lg font-bold text-white">1 July 2013</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {leadershipTeam.map((leader, idx) => (
              <article
                key={leader.name}
                className="group overflow-hidden border border-white/10 bg-[#1E242B] transition-all duration-300 hover:-translate-y-1 hover:border-[#D97706]/70 hover:shadow-2xl hover:shadow-black/25"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#252D35]">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className={`h-full w-full ${
                        leader.preserveImage
                          ? 'object-contain object-center'
                          : 'object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105'
                      }`}
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#35404B] via-[#252D35] to-[#1E242B]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D97706]/45 bg-[#D97706]/10 text-[#D97706]">
                        <UserRound className="h-8 w-8" strokeWidth={1.5} />
                      </div>
                      {leader.isCeo ? (
                        <div className="text-center">
                          <span className="block text-xs font-bold uppercase tracking-[0.22em] text-white">CEO</span>
                          <span className="mt-1 block text-[11px] font-semibold uppercase tracking-widest text-[#D97706]">Photo Coming Soon</span>
                        </div>
                      ) : (
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">Profile portrait</span>
                      )}
                    </div>
                  )}
                  <div className="absolute left-4 top-4 flex h-8 min-w-8 items-center justify-center border border-white/20 bg-[#12161A]/75 px-2 font-mono-numbers text-[11px] font-bold text-[#D97706] backdrop-blur-sm">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#12161A]/45 to-transparent" />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-xl font-bold leading-snug text-white sm:text-2xl">
                    {leader.name}
                  </h3>
                  <p className="mt-2 min-h-10 text-sm font-medium leading-relaxed text-[#D97706]">
                    {leader.title}
                  </p>
                  <div className="mt-5 flex items-start gap-2.5 border-t border-white/10 pt-4 text-xs leading-relaxed text-neutral-300">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" />
                    <span>{leader.details}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture & Values */}
      <section id="culture" className="py-20 sm:py-28 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4 mb-14">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <div className="w-2 h-4 bg-[#D97706]" />
              <span>Our Core DNA</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              A CULTURE OF CARE &amp; INCLUSION
            </h2>
            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
              The strength of our projects stems directly from the dignity, safety, and empowerment of our people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-900/60 border border-white/10 p-8 space-y-4">
              <div className="w-10 h-10 bg-[#D97706]/10 text-[#D97706] flex items-center justify-center border border-[#D97706]/40">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white">
                Uncompromising Safety
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Living Injury-Free Everyday (LIFE) is our universal pact. Every person on a Sindhi Real Estate with Samina Developer jobsite holds unconditional authority to stop work whenever an unsafe condition exists.
              </p>
            </div>

            <div className="bg-neutral-900/60 border border-white/10 p-8 space-y-4">
              <div className="w-10 h-10 bg-[#D97706]/10 text-[#D97706] flex items-center justify-center border border-[#D97706]/40">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white">
                Underrepresented Trade Equity
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We believe that the economic impact of construction must enrich surrounding communities, awarding over $3.5B annually to certified diverse trade businesses.
              </p>
            </div>

            <div className="bg-neutral-900/60 border border-white/10 p-8 space-y-4">
              <div className="w-10 h-10 bg-[#D97706]/10 text-[#D97706] flex items-center justify-center border border-[#D97706]/40">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white">
                Radical Collaboration
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We reject adversarial construction practices. We align owner, architect, engineer, and trade partners into a unified team focused squarely on project success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section id="history" className="py-20 sm:py-28 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <div className="w-2 h-4 bg-[#D97706]" />
              <span>1902 to Present</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#12161A]">
              120+ YEARS OF INNOVATION
            </h2>
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              A chronological journey through engineering breakthroughs and monumental milestones that shaped the built environment.
            </p>
          </div>

          <div className="relative border-l-2 border-neutral-300 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
            {historicalMilestones.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#12161A] border-2 border-[#D97706] group-hover:scale-125 transition-transform" />

                <div className="space-y-1.5">
                  <div className="font-mono-numbers text-sm font-extrabold text-[#D97706]">
                    {item.year}
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase text-[#12161A]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-3xl">
                    {item.desc}
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
