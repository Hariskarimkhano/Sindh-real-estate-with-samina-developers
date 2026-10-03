import { CommitmentTab } from '../types';

export const COMMITMENTS_DATA: CommitmentTab[] = [
  {
    id: 'esg',
    slug: 'esg',
    number: '01',
    title: 'ESG Strategy',
    subtitle: 'Governance & Institutional Accountability',
    headline: 'Building Today to Transform Tomorrow',
    description: 'Our Environmental, Social, and Governance (ESG) framework is not an afterthought—it is the operational lens through which we evaluate every procurement decision, subcontractor partnership, jobsite protocol, and capital project. We align with the United Nations Sustainable Development Goals and publish audited annual sustainability disclosures.',
    targets: [
      { metric: '50%', label: 'GHG Emissions Cut', timeframe: 'By 2030' },
      { metric: 'Net Zero', label: 'Operational Carbon', timeframe: 'By 2040' },
      { metric: '$3.5B+', label: 'Diverse Business Spend', timeframe: 'Annually' },
      { metric: '100%', label: 'Jobsite Safety Audits', timeframe: 'Active Sites' }
    ],
    keyPillars: [
      { title: 'Audited Transparency', desc: 'Comprehensive annual ESG reports aligned with SASB, GRI, and TCFD climate disclosure standards.' },
      { title: 'Ethical Governance', desc: 'Rigorous compliance oversight, anti-corruption training for 100% of staff, and protected whistleblower hotlines.' },
      { title: 'Supply Chain Resiliency', desc: 'Mandatory supplier codes of conduct enforcing human rights, fair wages, and ethical carbon sourcing across 10,000+ trade partners.' }
    ],
    highlights: [
      'Published comprehensive 2025 Global Sustainability and Impact Disclosures',
      'Established Executive ESG Committee reporting directly to Board of Directors',
      'Tied executive incentive metrics directly to carbon reduction and workforce diversity targets'
    ]
  },
  {
    id: 'community',
    slug: 'community',
    number: '02',
    title: 'Community & Citizenship',
    subtitle: 'Local Economic Impact & Human Investment',
    headline: 'Strengthening Communities Where We Live and Build',
    description: 'A successful project must enrich the social fabric of its surrounding neighborhood. Through youth STEM mentorship, craft trade apprenticeships, non-profit community revitalization builds, and disaster response mobilization, we leave an enduring legacy that extends far beyond the physical footprint.',
    targets: [
      { metric: '100,000+', label: 'Volunteer Hours', timeframe: 'Annual Goal' },
      { metric: '500+', label: 'Local Schools Engaged', timeframe: 'STEM Programs' },
      { metric: '$15M+', label: 'Charitable Donations', timeframe: 'Company Foundation' },
      { metric: '10,000+', label: 'Apprentices Trained', timeframe: 'Construction School' }
    ],
    keyPillars: [
      { title: 'School of Construction Management', desc: 'Free multi-week training programs graduating hundreds of local minority, women, and veteran entrepreneurs annually.' },
      { title: 'Youth STEM & ACE Mentorship', desc: 'Partnering with public high schools to introduce students from underrepresented backgrounds to architecture, engineering, and construction careers.' },
      { title: 'Local Hiring Initiatives', desc: 'Guaranteeing zip-code-specific craft hiring and prevailing wage protections on urban anchor projects.' }
    ],
    highlights: [
      'Over 55 years of continuous operation of our School of Construction Management',
      'Donated hundreds of thousands of employee hours to Habitat for Humanity and Rebuilding Together',
      'Rapid deployment of temporary hospital facilities and flood relief barriers during regional weather emergencies'
    ]
  },
  {
    id: 'dei',
    slug: 'dei',
    number: '03',
    title: 'Diversity, Equity & Inclusion',
    subtitle: 'Belonging, Parity & Underrepresented Business Growth',
    headline: 'Championing Diverse Voices on Jobsites and in the Boardroom',
    description: 'We believe our workforce and supply chain should reflect the vibrant diversity of the communities we serve. We actively cultivate an inclusive culture where every team member is empowered to thrive, innovate, and lead without bias.',
    targets: [
      { metric: '30%+', label: 'Diverse Business Equity', timeframe: 'Subcontractor Volume' },
      { metric: '100%', label: 'Pay Equity Parity', timeframe: 'Audited Annually' },
      { metric: '8', label: 'Active Employee Resource Groups', timeframe: 'Nationwide' },
      { metric: '#1', label: 'Forbes Best Employers for Diversity', timeframe: 'Construction Sector' }
    ],
    keyPillars: [
      { title: 'Underrepresented Business Enterprise (UBE) Growth', desc: 'Over $3.5 billion in annual contracts awarded to Minority, Women, Veteran, and LGBTQ+ owned specialty trade firms.' },
      { title: 'Employee Resource Groups (ERGs)', desc: 'Grassroots communities including Women in Construction, Pride, Veterans Network, and Black Employee Network.' },
      { title: 'Inclusive Jobsite Culture', desc: 'Strict anti-harassment training, non-retaliation reporting mechanisms, and tailored personal protective equipment (PPE) designed specifically for women tradespeople.' }
    ],
    highlights: [
      'Recognized with the AGC Diversity and Inclusion Excellence Award',
      'Implemented our Culture of Care across 1,500 active jobsites',
      'Direct capital mentorship and bonding assistance programs for emerging trade contractors'
    ]
  },
  {
    id: 'environment',
    slug: 'environment',
    number: '04',
    title: 'Environmental Sustainability',
    subtitle: 'Decarbonization, Circularity & Climate Resilience',
    headline: 'Leading the Decarbonization of the Built Environment',
    description: 'Buildings account for nearly 40% of global carbon emissions. Sindhi Real Estate with Samina Developer is committed to reversing this trend through aggressive jobsite electrification, low-embodied-carbon concrete formulation, mass timber construction, and closed-loop material recycling.',
    targets: [
      { metric: '84%', label: 'Jobsite Waste Diversion', timeframe: 'From Landfills' },
      { metric: '50%', label: 'Embodied Carbon Reduction', timeframe: 'By 2030' },
      { metric: '100%', label: 'Electric Jobsite Equipment', timeframe: 'By 2035' },
      { metric: '$50B+', label: 'Green Portfolio Value', timeframe: 'Completed to Date' }
    ],
    keyPillars: [
      { title: 'Embodied Carbon Leadership (EC3 Tool)', desc: 'Co-founded the Embodied Carbon in Construction Calculator (EC3) to measure and drastically reduce supply chain carbon.' },
      { title: 'Zero Waste to Landfill', desc: 'Jobsite separation and tracking diverting concrete, steel, drywall, and timber into regional reprocessing facilities.' },
      { title: 'Clean Jobsite Initiative', desc: 'Replacing diesel generators with hydrogen fuel cells, mobile battery storage trailers, and clean temporary power drops.' }
    ],
    highlights: [
      'Over 680 LEED, WELL, and Living Building Challenge certified projects completed',
      'Pioneered carbon-cured concrete and ultra-low-clinker mix designs on commercial supertalls',
      'Deploying electric excavators, telehandlers, and robotic layout tools across tier-one metro projects'
    ]
  },
  {
    id: 'innovation',
    slug: 'innovation',
    number: '05',
    title: 'Innovation & Technology',
    subtitle: 'VDC, Autonomous Robotics & Digital Engineering',
    headline: 'Transforming Physical Construction through Digital Intelligence',
    description: 'We harness cutting-edge technology to solve the industry’s most challenging safety, productivity, and predictability hurdles. From autonomous quadruped site scanners to AI-driven clash detection and offsite component prefabrication, our innovation teams transform jobsites into high-tech manufacturing ecosystems.',
    targets: [
      { metric: '100%', label: 'BIM Execution Plans', timeframe: 'Major Projects' },
      { metric: '40%+', label: 'Offsite Component Shift', timeframe: 'Target Volume' },
      { metric: 'Daily', label: 'AI 3D Reality Capture', timeframe: 'Active Floors' },
      { metric: '$50M+', label: 'VDC Technology R&D', timeframe: 'Annual Investment' }
    ],
    keyPillars: [
      { title: 'Autonomous Reality Capture', desc: 'Deploying autonomous mobile robots and drones equipped with 360 cameras and LiDAR to compare daily field progress directly against 4D BIM models.' },
      { title: 'Artificial Intelligence & Predictive Analytics', desc: 'Using machine learning to analyze historical cost databases, forecast supply chain lead-times, and detect safety hazards before incidents occur.' },
      { title: 'Industrialized Prefabrication', desc: 'Partnering with specialized manufacturing hubs to assemble complex multi-trade MEP corridors and building facades offsite.' }
    ],
    highlights: [
      'Internal Innovation Venture Fund piloting frontier robotics, exowear, and sensor technology',
      'Proprietary cloud platforms synchronizing owner budgets with daily field verified milestones',
      'Real-time automated layout robotics projecting millimetric laser blueprints directly on concrete slabs'
    ]
  },
  {
    id: 'safety',
    slug: 'safety',
    number: '06',
    title: 'Safety & Wellness',
    subtitle: 'Zero Incidents, Psychological Safety & Total Health',
    headline: 'Building a Culture Where Every Worker Returns Home Safely',
    description: 'At Sindhi Real Estate with Samina Developer, safety is not merely a regulation or an OSHA metric—it is a core moral imperative. Our Living Injury-Free Everyday (LIFE) philosophy unites every craft worker, subcontractor, and engineer around proactive hazard identification, mental health support, and mutual accountability.',
    targets: [
      { metric: '0.45', label: 'Experience Mod Rate (EMR)', timeframe: 'Industry Leading' },
      { metric: 'Zero', label: 'Target Incidents', timeframe: 'Every Single Day' },
      { metric: '100%', label: 'Trades Enrolled in LIFE', timeframe: 'Mandatory Protocol' },
      { metric: '24/7', label: 'Confidential Mental Health Line', timeframe: 'All Jobsite Trades' }
    ],
    keyPillars: [
      { title: 'Living Injury-Free Everyday (LIFE)', desc: 'Empowering every worker on site with absolute stop-work authority whenever an unsafe condition is observed.' },
      { title: 'Total Worker Health & Mental Well-Being', desc: 'Providing jobsite wellness trailers, hydration stations, suicide prevention training, and confidential substance support.' },
      { title: 'Proactive Environmental Hazard Auditing', desc: 'Using predictive AI computer vision and sensor badges to monitor silica dust, heat stress, and crane pinch-points.' }
    ],
    highlights: [
      'Recognized by OSHA as Voluntary Protection Programs (VPP) Star Site across numerous regions',
      'Annual Safety Stand-Downs educating over 50,000 trade workers nationwide',
      'Zero-tolerance policy on bias, harassment, or unsafe practices on every project gate'
    ]
  }
];
