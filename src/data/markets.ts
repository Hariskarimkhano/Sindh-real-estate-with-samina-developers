import { Market } from '../types';
import { ASSETS } from './assets';

export const MARKETS_DATA: Market[] = [
  {
    id: 'commercial',
    slug: 'commercial',
    title: 'Commercial & Mixed-Use',
    shortDescription: 'World-renowned corporate headquarters, supertall commercial towers, and mixed-use urban districts engineered for human wellness and institutional longevity.',
    overview: 'Sindhi Real Estate with Samina Developer shapes the skylines of global commerce through partnerships with leading developers, sovereign wealth funds, and Fortune 500 corporations to deliver iconic headquarters, adaptive reuse modernizations, and vibrant multi-block mixed-use destinations.',
    heroImage: ASSETS.projectModernTower,
    projectCount: 420,
    keyDrivers: [
      'Flexible post-pandemic workplace floorplates & tenant acoustic comfort',
      'LEED Platinum & WELL Certified healthy indoor environments',
      'Integration of rapid vertical transportation and smart building management systems',
      'Complex urban tight-footprint foundation and staging logistics'
    ],
    featuredProjectSlugs: ['four-seasons-modernization', 'merdeka-118-tower']
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    title: 'Healthcare & Life Sciences',
    shortDescription: 'Cutting-edge academic medical centers, specialized cancer pavilions, and clinical facilities built without disrupting adjacent lifesaving patient care.',
    overview: 'As a leading healthcare builder, Sindhi Real Estate with Samina Developer understands that constructing a hospital is fundamentally about saving lives. We master the strict infection control risk assessments (ICRA), uninterrupted utility cutovers, and radiation-shielded linear accelerator vaults required by top health systems.',
    heroImage: ASSETS.projectSustainableCampus,
    projectCount: 380,
    keyDrivers: [
      'Infection Control Risk Assessment (ICRA Class IV) site containment protocols',
      'Zero-interruption operational cutovers for medical gas, MEP, and emergency power',
      'Heavy vibration mitigation for MRI, surgical suites, and proton beam therapy',
      'Future-proof MEP infrastructure adaptable for rapid pandemic conversions'
    ],
    featuredProjectSlugs: ['memorial-sloan-kettering', 'stanford-biomedical-hub']
  },
  {
    id: 'sports',
    slug: 'sports',
    title: 'Sports & Entertainment',
    shortDescription: 'Iconic stadiums, multi-purpose arenas, and high-capacity entertainment complexes engineered for premier fan experiences and acoustic perfection.',
    overview: 'From monumental NFL stadiums to Olympic arenas and collegiate athletic facilities, our sports construction teams have delivered many celebrated venues. We coordinate massive long-span structural steel roof lifts, state-of-the-art broadcast cabling, and crowd flow logistics.',
    heroImage: ASSETS.projectStadium,
    projectCount: 165,
    keyDrivers: [
      'Monumental long-span steel and cable-supported roof structures',
      'Acoustic reverberation engineering and 360-degree LED video matrix integration',
      'BIM-coordinated MEP distribution supporting tens of thousands of simultaneous fans',
      'Rigorous immovable opening-day schedules tied to international broadcast commitments'
    ],
    featuredProjectSlugs: ['sofi-stadium-district']
  },
  {
    id: 'education',
    slug: 'education',
    title: 'Education & Higher Learning',
    shortDescription: 'Transformative university research complexes, state-of-the-art STEM facilities, student life centers, and K-12 campus modernizations.',
    overview: 'We build learning environments that inspire discovery and foster collaborative scholarship. Operating safely on occupied campuses with tens of thousands of active students and faculty, we deliver sustainable facilities that attract world-class academic talent.',
    heroImage: ASSETS.heroEngineeringVdc,
    projectCount: 510,
    keyDrivers: [
      'Stringent student safety and academic quiet-hours logistics coordination',
      'Vibration-isolated cleanroom laboratories and advanced vivarium spaces',
      'High-performance mass-timber structures and carbon-neutral building design',
      'Fast-track summer break blitz scheduling for major facility handovers'
    ],
    featuredProjectSlugs: ['harvard-sec-complex', 'stanford-biomedical-hub']
  },
  {
    id: 'aviation',
    slug: 'aviation',
    title: 'Aviation & Transportation',
    shortDescription: 'Modern airport passenger terminals, baggage handling facilities, air traffic control towers, and intermodal mass-transit hubs.',
    overview: 'Constructing within active airport operations requires absolute security compliance, FAA coordination, and airtight sterile perimeter controls. Our aviation teams modernize busy hubs while millions of travelers continue to fly safely overhead.',
    heroImage: ASSETS.heroConstruction,
    projectCount: 140,
    keyDrivers: [
      'Active Air Operations Area (AOA) security badges and FOD prevention protocols',
      'Phased terminal expansions maintaining 24/7 passenger gate throughput',
      'High-speed automated baggage screening and explosive detection system integration',
      'Extensive multi-agency regulatory alignment with FAA, TSA, and municipal authorities'
    ],
    featuredProjectSlugs: ['ohare-terminal-5']
  },
  {
    id: 'data-centers',
    slug: 'data-centers',
    title: 'Data Centers & Mission Critical',
    shortDescription: 'Hyperscale AI infrastructure, Tier III/IV data center campuses, and resilient mission-critical facilities delivered with speed-to-market certainty.',
    overview: 'As artificial intelligence and cloud computing accelerate exponentially, Sindhi Real Estate with Samina Developer provides specialized engineering expertise to construct massive multi-hundred-megawatt campuses. We lead in liquid-cooling retrofits, substation tie-ins, and fast-track modular power deployment.',
    heroImage: ASSETS.heroEngineeringVdc,
    projectCount: 220,
    keyDrivers: [
      'Direct-to-chip and immersion liquid cooling mechanical engineering',
      'Substation interconnection and 2N redundant electrical distribution',
      'Speed-to-market modular prefabrication for rapid megawatt commissioning',
      'Strict physical security, blast protection, and perimeter cyber-physical shielding'
    ],
    featuredProjectSlugs: ['silicon-valley-data-center']
  },
  {
    id: 'pharmaceutical',
    slug: 'pharmaceutical',
    title: 'Pharmaceutical & Biotechnology',
    shortDescription: 'cGMP manufacturing facilities, cleanrooms, sterile fill-finish suites, and biopharmaceutical pilot plants validated to strict FDA standards.',
    overview: 'Our biopharmaceutical team builds facilities where next-generation gene therapies, vaccines, and biologics are synthesized. We ensure that every surface, mechanical airflow cascade, and pure water system adheres seamlessly to FDA cGMP and ISO cleanroom regulations.',
    heroImage: ASSETS.projectSustainableCampus,
    projectCount: 195,
    keyDrivers: [
      'ISO Class 5 through 8 cleanroom envelope construction and air changes',
      'Commissioning, Qualification, and Validation (CQV) documentation protocols',
      'Process piping for USP purified water, Water-for-Injection (WFI), and clean steam',
      'Segregated biosafety containment (BSL-2 / BSL-3) HVAC zoning'
    ],
    featuredProjectSlugs: ['stanford-biomedical-hub']
  },
  {
    id: 'green-building',
    slug: 'green-building',
    title: 'Green Building & Sustainability',
    shortDescription: 'Net Zero carbon buildings, mass timber structures, living building challenge benchmarks, and deep energy retrofits.',
    overview: 'With over $50B in certified sustainable construction delivered to date, Sindhi Real Estate with Samina Developer is an industry leader in decarbonizing the built environment. We pioneer low-carbon concrete mixes, mass timber structural systems, and circular building material reclamation.',
    heroImage: ASSETS.projectSustainableCampus,
    projectCount: 680,
    keyDrivers: [
      'Embodied carbon life-cycle assessment (LCA) using EC3 tool integration',
      'Mass timber (CLT/Glulam) hybrid structural frame engineering',
      'Net-zero energy onsite microgrids and high-performance geothermal borefields',
      'Jobsite waste diversion rates exceeding 85% through circular recycling'
    ],
    featuredProjectSlugs: ['harvard-sec-complex', 'project-sustainable-campus-project']
  },
  {
    id: 'retail',
    slug: 'retail',
    title: 'Retail & Hospitality',
    shortDescription: 'Luxury flagship retail experiences, five-star luxury resort hotels, and experiential commercial environments crafted with bespoke architectural finishes.',
    overview: 'We translate the artistic vision of luxury hospitality and high-end retail brands into reality. Our interiors and fit-out specialists work with artisans and stone carvers worldwide to deliver unforgettable customer journeys with white-glove finish precision.',
    heroImage: ASSETS.projectModernTower,
    projectCount: 310,
    keyDrivers: [
      'Bespoke architectural finishes, millwork, book-matched marble, and custom glazing',
      'High-traffic public space construction with silent overnight working hours',
      'Integrated acoustic isolation between luxury suites, dining, and mechanical floors',
      'Fast-track delivery timed with seasonal shopping and resort grand opening dates'
    ],
    featuredProjectSlugs: ['four-seasons-modernization']
  },
  {
    id: 'infrastructure',
    slug: 'infrastructure',
    title: 'Infrastructure & Civil Works',
    shortDescription: 'Bridges, heavy civil foundations, underground utility conduits, flood resilience barriers, and urban transportation corridors.',
    overview: 'Working closely with our parent group ACS and HOCHTIEF, our civil engineering teams tackle the foundational infrastructure that keeps modern metropolises running—from complex deep-slurry wall foundations to resilient seawalls and multi-modal transit networks.',
    heroImage: ASSETS.heroConstruction,
    projectCount: 230,
    keyDrivers: [
      'Deep foundation caissons, micropiles, and secant slurry cutoff walls',
      'Severe weather and seismic resilience engineering',
      'Active utility relocation and civil infrastructure protection',
      'Public-Private Partnerships (P3) and alternative project delivery frameworks'
    ],
    featuredProjectSlugs: ['ohare-terminal-5', 'merdeka-118-tower']
  }
];
