import React, { useState } from 'react';
import { isNavigationTargetActive, isPathActive, useNavigation } from '../context/NavigationContext';
import { Search, Menu, ChevronDown, ArrowRight } from 'lucide-react';
import { MegaMenu, MegaMenuCategory } from './MegaMenu';
import { MobileMenu } from './MobileMenu';
import { SindhRealEstateLogo } from './SindhRealEstateLogo';
import { Button } from './ui/Button';
import { ASSETS } from '../data/assets';

export const Header: React.FC = () => {
  const { currentPath, currentHash, searchParams, navigate, openSearch, openProjectInquiry } = useNavigation();
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mega menu structure matching the prompt specifications
  const categories: MegaMenuCategory[] = [
    {
      id: 'who-we-are',
      label: 'WHO WE ARE',
      href: '/who-we-are',
      columns: [
        {
          title: 'Organization',
          items: [
            { label: 'About Us', href: '/who-we-are', description: 'Over a century of building what matters' },
            { label: 'Our Leadership', href: '/who-we-are#leadership', description: 'Executive committee and regional directors' },
            { label: 'Our Culture', href: '/who-we-are#culture', description: 'A culture of active caring and integrity' },
            { label: 'Our History', href: '/who-we-are#history', description: 'From 1902 reinforced concrete to supertalls' }
          ]
        },
        {
          title: 'Presence & Reach',
          items: [
            { label: 'Our Network', href: '/our-network', description: 'Integrated planning, engineering & procurement' },
            { label: 'Global Reach', href: '/international', description: 'Our international operations worldwide' },
            { label: 'Local Expertise', href: '/locations', description: 'Find regional offices across North America' }
          ]
        }
      ],
      featured: {
        title: 'Building What Matters Since 1902',
        tag: 'Heritage & Vision',
        description: 'Founded on integrity and engineering excellence, Sindhi Real Estate with Samina Developer delivers complex projects with local passion and global perspective.',
        href: '/who-we-are',
        image: ASSETS.heroConstruction
      }
    },
    {
      id: 'our-services',
      label: 'OUR SERVICES',
      href: '/services',
      columns: [
        {
          title: 'Core Delivery',
          items: [
            { label: 'Preconstruction', href: '/services/preconstruction', description: 'Rigorous front-end estimating & cost modeling' },
            { label: 'Construction Management', href: '/services/construction-management', description: 'Unmatched field execution & quality control' },
            { label: 'Project Management', href: '/services/project-management', description: 'Capital program oversight & owner advisory' },
            { label: 'Lean Construction', href: '/services/lean-construction', description: 'Last Planner System® schedule stabilization' }
          ]
        },
        {
          title: 'Advanced Solutions',
          items: [
            { label: 'Fabrication', href: '/services/fabrication', description: 'Industrial multi-trade modular assemblies' },
            { label: 'Offsite Construction', href: '/services/offsite-construction', description: 'Volumetric systems compressing schedules by 30%' },
            { label: 'Supply Chain Management', href: '/services/supply-chain-management', description: 'Direct equipment sourcing via SourceBlue' },
            { label: 'Virtual Design & Construction', href: '/services/virtual-design-and-construction', description: 'BIM, 4D simulation, robotics & digital twins' }
          ]
        }
      ],
      featured: {
        title: 'Virtual Design & Autonomous Reality Capture',
        tag: 'Technical Capability',
        description: 'Building twice: first in 4D digital space to eliminate clashes, then physically on jobsites with autonomous robotic verification.',
        href: '/services/virtual-design-and-construction',
        image: ASSETS.heroEngineeringVdc
      }
    },
    {
      id: 'our-projects',
      label: 'OUR PROJECTS',
      href: '/projects',
      columns: [
        {
          title: 'Civic & Commercial',
          items: [
            { label: 'Commercial & Mixed-Use', href: '/projects?market=Commercial', description: 'Supertall towers and corporate headquarters' },
            { label: 'Healthcare & Life Sciences', href: '/projects?market=Healthcare', description: 'Cancer pavilions & hospital expansions' },
            { label: 'Sports & Entertainment', href: '/projects?market=Sports', description: 'Iconic stadiums, arenas & public venues' },
            { label: 'Education', href: '/projects?market=Education', description: 'STEM research complexes & campus landmarks' }
          ]
        },
        {
          title: 'Industrial & Technology',
          items: [
            { label: 'Data Centers & Mission Critical', href: '/projects?market=Data%20Centers', description: 'Hyperscale AI infrastructure & substations' },
            { label: 'Aviation & Transportation', href: '/projects?market=Aviation', description: 'Terminal modernizations & transit hubs' },
            { label: 'Green Building', href: '/projects?market=Green%20Building', description: 'LEED Platinum & mass-timber structures' },
            { label: 'Markets & Sectors', href: '/markets', description: 'Explore our market sectors', matchDescendants: true },
            { label: 'All Projects Portfolio', href: '/projects', description: 'Filter complete searchable project archive' }
          ]
        }
      ],
      featured: {
        title: 'Four Seasons Hotel Modernization',
        tag: 'Featured Project',
        description: 'Comprehensive adaptive modernization of I.M. Pei’s Manhattan architectural icon on Billionaires’ Row.',
        href: '/projects/four-seasons-modernization',
        image: ASSETS.projectModernTower
      }
    },
    {
      id: 'our-network',
      label: 'OUR NETWORK',
      href: '/our-network',
      columns: [
        {
          title: 'Specialized Capabilities',
          items: [
            { label: 'SourceBlue', href: '/our-network#sourceblue', description: 'Direct manufacturer equipment procurement' },
            { label: 'Sindhi Real Estate Engineering Group', href: '/our-network#teg', description: 'Structural peer review & geotechnical SWAT' },
            { label: 'Sindhi Real Estate Technical Services', href: '/our-network#tts', description: 'Level 1-5 integrated commissioning' },
            { label: 'Clark Builders', href: '/our-network#clark', description: 'Western & Northern Canadian operations' }
          ]
        },
        {
          title: 'Global Consortia',
          items: [
            { label: 'HOCHTIEF', href: '/our-network#hochtief', description: 'International infrastructure & concessions' },
            { label: 'ACS Group', href: '/our-network#acs', description: 'Global civil engineering & industrial leader' },
            { label: 'Dragados', href: '/our-network#dragados', description: 'Heavy civil tunnels, bridges & marine ports' },
            { label: 'Sindhi Real Estate International', href: '/international', description: 'Middle East, Asia Pacific & European projects' }
          ]
        }
      ],
      featured: {
        title: 'Global Scale. Local Grounding.',
        tag: 'Integrated Network',
        description: 'Connected across planning, manufacturing, procurement, construction, and lifecycle facility support.',
        href: '/our-network',
        image: ASSETS.projectStadium
      }
    },
    {
      id: 'commitments',
      label: 'COMMITMENTS',
      href: '/commitments',
      columns: [
        {
          title: 'Strategic Priorities',
          items: [
            { label: 'ESG Strategy', href: '/commitments/esg', description: 'Audited disclosures and executive accountability' },
            { label: 'Community & Citizenship', href: '/commitments/community', description: '55 years of our School of Construction' },
            { label: 'Diversity, Equity & Inclusion', href: '/commitments/dei', description: 'Over $3.5B in annual diverse trade spend' }
          ]
        },
        {
          title: 'Excellence & Care',
          items: [
            { label: 'Environmental Sustainability', href: '/commitments/environment', description: 'Decarbonizing concrete, timber & jobsite waste' },
            { label: 'Innovation & Technology', href: '/commitments/innovation', description: 'Autonomous robotics & predictive AI' },
            { label: 'Safety & Wellness', href: '/commitments/safety', description: 'Living Injury-Free Everyday (LIFE) culture' }
          ]
        }
      ],
      featured: {
        title: 'Leading the Built Environment to Net Zero',
        tag: 'Decarbonization',
        description: 'Pioneering low-carbon concrete mixes, mass timber structural frames, and zero-waste jobsite protocols.',
        href: '/commitments/environment',
        image: ASSETS.projectSustainableCampus
      }
    },
    {
      id: 'careers',
      label: 'CAREERS',
      href: '/careers',
      columns: [
        {
          title: 'Opportunities',
          items: [
            { label: 'Explore All Openings', href: '/careers', description: 'Search positions across 50+ offices' },
            { label: 'Students & Internships', href: '/careers#students', description: 'Co-ops, field internships & rotators' },
            { label: 'Experienced Professionals', href: '/careers#experienced', description: 'Project executives, VDC leads & superintendents' },
            { label: 'Trade & Craft Careers', href: '/careers#craft', description: 'Union & craft apprenticeships with full benefits' }
          ]
        },
        {
          title: 'Our Workplace',
          items: [
            { label: 'Life at Sindhi Real Estate', href: '/careers#life', description: 'Belonging, wellness & career acceleration' },
            { label: 'Total Rewards & Benefits', href: '/careers#benefits', description: 'Healthcare, 401(k), equity & family leave' },
            { label: 'Professional Development', href: '/careers#learning', description: 'Continuous professional education programs' }
          ]
        }
      ],
      featured: {
        title: 'Ambitious People. Impactful Work.',
        tag: 'Careers at Sindhi Real Estate with Samina Developer',
        description: 'Solve challenging engineering problems alongside colleagues who share your passion for building what matters.',
        href: '/careers',
        image: ASSETS.heroConstruction
      }
    },
    {
      id: 'news',
      label: 'NEWS & INSIGHTS',
      href: '/news',
      columns: [
        {
          title: 'Thought Leadership',
          items: [
            { label: 'Latest News & Press', href: '/news', description: 'Corporate announcements & project groundbreakings' },
            { label: 'Building Cost Index Reports', href: '/news?category=Reports', description: 'Quarterly market pricing & commodity analysis' },
            { label: 'Technical Case Studies', href: '/news?category=Innovation', description: 'Field research on robotics, AI & modular' }
          ]
        },
        {
          title: 'Publications',
          items: [
            { label: 'Sustainability Disclosures', href: '/news?category=Sustainability', description: 'Carbon benchmarks & annual ESG reports' },
            { label: 'Safety Innovations', href: '/news?category=Safety', description: 'Total worker health & behavioral protocols' }
          ]
        }
      ],
      featured: {
        title: '2026 Building Cost Index Released',
        tag: 'Market Intelligence',
        description: 'Analyzing supply chain lead times and electrical equipment pressures in the AI data center boom.',
        href: '/news/2026-construction-cost-index',
        image: ASSETS.heroEngineeringVdc
      }
    }
  ];

  const routeActiveCategory = categories.find(category =>
    isPathActive(currentPath, new URL(category.href, window.location.origin).pathname)
  ) ?? categories.find(category =>
    category.columns.some(column => column.items.some(item =>
      isNavigationTargetActive(item.href, currentPath, searchParams, currentHash, item.matchDescendants)
    )) || isNavigationTargetActive(category.featured.href, currentPath, searchParams, currentHash)
  );
  const activeCategory = categories.find(c => c.id === activeMenuId);
  const isHomeActive = currentPath === '/' && !currentHash;

  return (
    <header className="sticky top-0 z-40 bg-[#0D1013]/90 backdrop-blur-md text-white border-b border-white/[0.08] shadow-lg shadow-black/20 select-none transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Logo Lockup */}
        <div className="flex items-center shrink-0 pr-2 sm:pr-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setActiveMenuId(null);
              navigate('/');
            }}
            className="group flex flex-col items-center justify-center transition-opacity hover:opacity-90 py-1"
            aria-label="Sindhi Real Estate with Samina Developer Homepage"
            aria-current={isHomeActive ? 'page' : undefined}
          >
            <SindhRealEstateLogo variant="stacked" height={44} />
            {isHomeActive && <span className="mt-1 h-0.5 w-8 bg-[#DFB257]" />}
          </a>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav
          className="hidden xl:flex items-center gap-6 text-xs font-semibold tracking-wider text-neutral-300"
          aria-label="Main Navigation"
        >
          {categories.map((cat) => {
            const isActive = activeMenuId === cat.id;
            const isRouteActive = routeActiveCategory?.id === cat.id;
            return (
              <div
                key={cat.id}
                className="relative py-7"
                onMouseEnter={() => setActiveMenuId(cat.id)}
              >
                <button
                  type="button"
                  onClick={() => {
                    setActiveMenuId(prev => (prev === cat.id ? null : cat.id));
                  }}
                  className={`inline-flex min-h-11 items-center gap-1.5 transition-colors uppercase whitespace-nowrap cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DFB257] ${
                    isActive || isRouteActive
                      ? 'text-[#DFB257]'
                      : 'hover:text-white'
                  }`}
                  aria-expanded={isActive}
                  aria-current={isRouteActive ? 'page' : undefined}
                >
                  <span>{cat.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isActive ? 'rotate-180 text-[#DFB257]' : 'text-neutral-500'
                    }`}
                  />
                </button>
                {/* Active Underline Pill */}
                {(isActive || isRouteActive) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DFB257] to-transparent" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions & Search */}
        <div className="flex items-center gap-1 sm:gap-4">
          {/* Global Search Button */}
          <button
            type="button"
            onClick={openSearch}
            className="group flex min-h-11 min-w-11 items-center justify-center gap-2 p-2 text-neutral-300 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/10 rounded-xs transition-all duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFB257]"
            aria-label="Search site (Cmd+K)"
          >
            <Search className="w-4 h-4 text-neutral-400 group-hover:text-[#DFB257]" />
            <span className="hidden sm:inline text-[11px] text-neutral-400 font-mono-numbers bg-white/[0.08] px-1.5 py-0.5 rounded-xs">⌘K</span>
          </button>

          {/* Contact / Start a Project CTA - Redesigned Modern Button */}
          <Button
            variant="primary"
            size="sm"
            showArrow
            onClick={openProjectInquiry}
            className="inline-flex whitespace-nowrap !px-2 !gap-1 !text-[9px] sm:!px-4 sm:!gap-2 sm:!text-[11px]"
          >
            START A PROJECT
          </Button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className="xl:hidden inline-flex min-h-11 min-w-11 items-center justify-center text-neutral-300 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-xs transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFB257]"
            aria-label={isMobileMenuOpen ? 'Close mobile navigation menu' : 'Open mobile navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      {activeCategory && (
        <MegaMenu
          category={activeCategory}
          isOpen={Boolean(activeCategory)}
          onClose={() => setActiveMenuId(null)}
        />
      )}

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        categories={categories}
      />
    </header>
  );
};
