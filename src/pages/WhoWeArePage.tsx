import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { CompanyStatistics } from '../components/CompanyStatistics';
import { Button } from '../components/ui/Button';
import { ArrowRight, CheckCircle2, Shield, Users, HeartHandshake, Award } from 'lucide-react';
import { ASSETS } from '../data/assets';

export const WhoWeArePage: React.FC = () => {
  const { navigate, openProjectInquiry } = useNavigation();

  const leadershipTeam = [
    { name: 'Peter Davoren', title: 'Chairman & Chief Executive Officer', tenure: '46 years in construction' },
    { name: 'Christa Andresky', title: 'Executive Vice President & Chief Financial Officer', tenure: 'Executive Leadership' },
    { name: 'Michael Kuntz', title: 'Executive Vice President, Global Operations', tenure: '38 years in construction' },
    { name: 'Tom Reilly', title: 'Executive Vice President, Technology & Innovation', tenure: '34 years in construction' },
    { name: 'Rosemarie Mitchell', title: 'Senior Vice President & Chief Human Resources Officer', tenure: '22 years in construction' },
    { name: 'Attilio Rivetti', title: 'Vice President & Cost Index Director', tenure: '28 years in construction' }
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
      <section id="leadership" className="py-20 sm:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4 mb-14">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <div className="w-2 h-4 bg-[#D97706]" />
              <span>Governance &amp; Direction</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#12161A]">
              EXECUTIVE LEADERSHIP
            </h2>
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              Seasoned builders, engineers, and executives with decades of field-proven commitment to clients, safety, and our workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipTeam.map((leader, idx) => (
              <div
                key={idx}
                className="bg-[#F8F9FA] border border-neutral-200 p-6 flex flex-col justify-between space-y-4 hover:border-neutral-400 transition-colors"
              >
                <div>
                  <span className="text-[11px] font-mono-numbers text-[#D97706] font-semibold uppercase tracking-wider block mb-1">
                    {leader.tenure}
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#12161A]">
                    {leader.name}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1">
                    {leader.title}
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-200 text-[11px] text-neutral-500 font-semibold uppercase tracking-wider">
                  Sindhi Real Estate Executive Committee
                </div>
              </div>
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
