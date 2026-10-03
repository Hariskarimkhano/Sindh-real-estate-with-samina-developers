import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowUp } from 'lucide-react';
import { SindhRealEstateLogo } from './SindhRealEstateLogo';

export const Footer: React.FC = () => {
  const { navigate } = useNavigation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12161A] text-white border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        {/* Top Corporate Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-12 border-b border-white/10 gap-6">
          <div className="flex items-center gap-4">
            <SindhRealEstateLogo variant="stacked" height={64} />
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-400">
            <span className="hidden md:inline">Global Architectural &amp; Real Estate Development Consortium</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#DFB257] text-neutral-300 hover:text-white rounded-xs transition-all duration-300 cursor-pointer group"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#DFB257] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 5 Enterprise Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12 border-b border-white/10">
          {/* Col 1: Who We Are */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#DFB257]">
              WHO WE ARE
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button onClick={() => navigate('/who-we-are')} className="hover:text-white transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/who-we-are#leadership')} className="hover:text-white transition-colors text-left">
                  Executive Leadership
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/who-we-are#culture')} className="hover:text-white transition-colors text-left">
                  Our Culture &amp; Values
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/who-we-are#history')} className="hover:text-white transition-colors text-left">
                  120+ Year History
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/our-network')} className="hover:text-white transition-colors text-left">
                  Global Network
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/international')} className="hover:text-white transition-colors text-left">
                  Sindhi Real Estate International
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#DFB257]">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button onClick={() => navigate('/services/preconstruction')} className="hover:text-white transition-colors text-left">
                  Preconstruction
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services/construction-management')} className="hover:text-white transition-colors text-left">
                  Construction Management
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services/project-management')} className="hover:text-white transition-colors text-left">
                  Project Management
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services/lean-construction')} className="hover:text-white transition-colors text-left">
                  Lean Construction
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services/fabrication')} className="hover:text-white transition-colors text-left">
                  Industrial Fabrication
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services/virtual-design-and-construction')} className="hover:text-white transition-colors text-left">
                  Virtual Design &amp; BIM
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services/supply-chain-management')} className="hover:text-white transition-colors text-left">
                  Supply Chain (SourceBlue)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Projects */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#DFB257]">
              PROJECTS
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button onClick={() => navigate('/projects?market=Commercial')} className="hover:text-white transition-colors text-left">
                  Commercial &amp; Mixed-Use
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/projects?market=Healthcare')} className="hover:text-white transition-colors text-left">
                  Healthcare &amp; Life Sciences
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/projects?market=Sports')} className="hover:text-white transition-colors text-left">
                  Sports &amp; Entertainment
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/projects?market=Education')} className="hover:text-white transition-colors text-left">
                  Education
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/projects?market=Aviation')} className="hover:text-white transition-colors text-left">
                  Aviation &amp; Transit
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/projects?market=Data%20Centers')} className="hover:text-white transition-colors text-left">
                  Data Centers
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/projects')} className="hover:text-[#DFB257] font-semibold transition-colors text-left">
                  Browse All Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Commitments */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#DFB257]">
              COMMITMENTS
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button onClick={() => navigate('/commitments/esg')} className="hover:text-white transition-colors text-left">
                  ESG Strategy &amp; Governance
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/commitments/community')} className="hover:text-white transition-colors text-left">
                  Community &amp; Citizenship
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/commitments/dei')} className="hover:text-white transition-colors text-left">
                  Diversity, Equity &amp; Inclusion
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/commitments/environment')} className="hover:text-white transition-colors text-left">
                  Environmental Decarbonization
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/commitments/innovation')} className="hover:text-white transition-colors text-left">
                  Technology &amp; Robotics
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/commitments/safety')} className="hover:text-white transition-colors text-left">
                  Safety &amp; Wellness (LIFE)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Resources & Connect */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#DFB257]">
              RESOURCES
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button onClick={() => navigate('/news')} className="hover:text-white transition-colors text-left">
                  News &amp; Media Press
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/news?category=Reports')} className="hover:text-white transition-colors text-left">
                  Building Cost Index
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/careers')} className="hover:text-white transition-colors text-left">
                  Careers &amp; Opportunities
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/subcontractors')} className="hover:text-white transition-colors text-left">
                  Subcontractor Prequalification
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/locations')} className="hover:text-white transition-colors text-left">
                  Find an Office Location
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-white transition-colors text-left">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Legal & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-neutral-400 gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <span>&copy; {new Date().getFullYear()} Sindhi Real Estate with Samina Developer. All rights reserved.</span>
            <span className="hover:text-neutral-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-300 cursor-pointer">Terms of Use</span>
            <span className="hover:text-neutral-300 cursor-pointer">Accessibility</span>
            <span className="hover:text-neutral-300 cursor-pointer">Ethics &amp; Compliance Helpline</span>
            <span className="hover:text-neutral-300 cursor-pointer">Sitemap</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-neutral-400">
            <span className="hover:text-white cursor-pointer">LinkedIn</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">Instagram</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">YouTube</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">X</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
