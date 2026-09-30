import { NewsArticle } from '../types';
import { ASSETS } from './assets';

export const NEWS_DATA: NewsArticle[] = [
  {
    id: '2026-construction-cost-index',
    slug: '2026-construction-cost-index',
    title: 'Sindh Real Estate Building Cost Index: 2026 Market Outlook & Commodity Forecast',
    category: 'Reports',
    date: 'March 18, 2026',
    author: {
      name: 'Attilio Rivetti',
      title: 'Vice President & Cost Index Director'
    },
    heroImage: ASSETS.heroEngineeringVdc,
    excerpt: 'The Sindh Real Estate Building Cost Index projects a measured 3.4% annual growth rate in 2026, driven by specialized electrical switchgear lead times and rising demand for AI data center infrastructure.',
    readTime: '6 min read',
    content: [
      'The Sindh Real Estate Building Cost Index—which measures costs in the non-residential building construction market in the United States—has reached a value of 1442 for the first quarter of 2026. This represents a 0.85% quarterly increase and a 3.42% increase over the same period in 2025.',
      'According to Attilio Rivetti, the vice president who oversees the Cost Index: "While general commodity pricing across raw structural steel and standard lumber has stabilized, the construction market continues to experience intense demand pressures centered on electrical gear, high-voltage transformers, and specialized mechanical cooling systems driven by the exponential buildout of artificial intelligence data centers and advanced manufacturing gigafactories."',
      'Our national procurement intelligence reveals that lead times for 15kV to 35kV medium-voltage switchgear continue to range between 68 and 84 weeks. As a result, early trade contractor engagement and strategic equipment reservation through SourceBlue are now standard prerequisites for any complex commercial or mission-critical capital expenditure program.',
      'Labor availability remains a key factor influencing regional market variances. Metro regions with major semiconductor and clean energy incentive projects are experiencing craft labor tightness in electrical, pipefitting, and controls disciplines. Contractors with proven cultures of safety, competitive prevailing wages, and modern industrialized prefabrication workflows are maintaining superior jobsite staffing and schedule reliability.'
    ],
    relatedProjectSlugs: ['silicon-valley-data-center', 'four-seasons-modernization'],
    relatedServiceSlugs: ['preconstruction', 'supply-chain-management']
  },
  {
    id: 'ai-augmented-jobsite-reality',
    slug: 'ai-augmented-jobsite-reality',
    title: 'Deploying Autonomous Robotic Reality Capture on Active High-Rise Sites',
    category: 'Innovation',
    date: 'February 24, 2026',
    author: {
      name: 'Dr. Jennifer Wu',
      title: 'Chief Technology Officer'
    },
    heroImage: ASSETS.heroEngineeringVdc,
    excerpt: 'How autonomous quadruped robots and daily LiDAR point clouds are integrated directly with 4D BIM models to eliminate rework and protect field trade safety.',
    readTime: '5 min read',
    content: [
      'Every evening after craft workers conclude their shifts, autonomous four-legged robotic units navigate the deck of our high-rise projects in New York and San Francisco. Equipped with high-precision 360-degree cameras and terrestrial LiDAR scanners, they autonomously follow predetermined waypoints, capturing millimeter-accurate 3D point cloud scans of every installed pipe, conduit, and fireproofing patch.',
      'By morning, our cloud-based AI algorithms federate this raw scan data against the authorized LOD 400 Building Information Model (BIM). If a mechanical duct has been installed four inches off-axis—threatening to clash with a future gravity drain or sprinkler line—the system flags the discrepancy before sheetrock is hung, avoiding thousands of dollars in downstream rework.',
      'Furthermore, the computer vision models automatically analyze progress metrics: linear feet of drywall completed, percentage of electrical rough-in, and safety barrier integrity. This transforms subjective field hunches into objective, verifiable earned-value data that is shared transparently with project owners.',
      'Most importantly, autonomous robotic capture enhances jobsite safety. By sending robotic scanners into confined mechanical interstitial spaces or unfinished shaftways, we remove human workers from hazardous edge conditions while gathering tenfold higher resolution spatial fidelity.'
    ],
    relatedProjectSlugs: ['four-seasons-modernization', 'harvard-sec-complex'],
    relatedServiceSlugs: ['vdc', 'lean-construction']
  },
  {
    id: 'mass-timber-decarbonization',
    slug: 'mass-timber-decarbonization',
    title: 'The Scaled Future of Mass Timber: Decarbonizing Commercial Structural Frames',
    category: 'Sustainability',
    date: 'January 14, 2026',
    author: {
      name: 'Sarah Jenkins, LEED AP',
      title: 'Vice President of Environmental Sustainability'
    },
    heroImage: ASSETS.projectSustainableCampus,
    excerpt: 'Cross-laminated timber (CLT) and glulam post-and-beam construction can reduce embodied carbon in commercial structures by over 40% while accelerating superstructure erection.',
    readTime: '7 min read',
    content: [
      'As commercial tenants and institutional owners establish ambitious Scope 1, 2, and 3 decarbonization commitments, the choice of building structural frame has moved to the center of capital planning. Mass timber—specifically Cross-Laminated Timber (CLT) and Glue-Laminated (Glulam) columns—is proving that sustainability and high performance are mutually reinforcing.',
      'On recent institutional campuses, replacing conventional reinforced concrete floor decks with sustainably harvested mass timber reduced the superstructure’s upfront embodied carbon footprint by 44%. Because timber sequesters carbon during its growth cycle, the structural frame effectively functions as a long-term carbon bank.',
      'In addition to environmental benefits, mass timber functions as an industrialized offsite building system. Every column and slab is precision CNC-routed in factory conditions with pre-cut penetrations for MEP services. On site, a compact crew of skilled carpenters and ironworkers can erect an entire floor plate in days with minimal noise, zero concrete curing latency, and substantially less neighborhood disruption.',
      'Our teams continue to work with forest management groups, structural code committees, and fire protection research institutions to expand allowable heights and spans for hybrid mass-timber commercial projects across North America.'
    ],
    relatedProjectSlugs: ['stanford-biomedical-hub', 'harvard-sec-complex'],
    relatedServiceSlugs: ['fabrication', 'offsite-construction']
  },
  {
    id: 'jobsite-safety-evolution',
    slug: 'jobsite-safety-evolution',
    title: 'Transforming Safety Culture: From Compliance Metrics to Psychological Well-Being',
    category: 'Safety',
    date: 'January 5, 2026',
    author: {
      name: 'Cindy L. Campbell',
      title: 'Senior Vice President of Environmental Health & Safety'
    },
    heroImage: ASSETS.heroConstruction,
    excerpt: 'Why Sindh Real Estate with Samina Developers’ Living Injury-Free Everyday (LIFE) program treats mental health, total worker wellness, and stop-work empowerment as the true foundation of zero-incident jobsites.',
    readTime: '4 min read',
    content: [
      'For decades, construction safety was measured purely through retrospective lag metrics: OSHA recordable incident rates, lost-time days, and workers’ compensation claims. With an EMR of 0.45, we recognize that true safety requires leading indicators and genuine cultural transformation.',
      'Through our LIFE (Living Injury-Free Everyday) philosophy, safety is not a policing function—it is a culture of caring. Every single tradesperson on our sites, from apprentice laborers to master electricians, is granted unconditional Stop-Work Authority. If any condition feels unsafe, or if a worker feels physically or mentally fatigued, work pauses immediately without fear of reprimand.',
      'We have also recognized that mental health and suicide prevention are paramount safety imperatives in the construction industry. Across all our major sites, we provide quiet wellness stations, certified mental health first aid responders, and 24/7 bilingual support hotlines.',
      'When workers feel respected, valued, and psychologically safe, field execution quality surges, trade coordination improves, and every worker returns home safely to their families at the end of each day.'
    ],
    relatedProjectSlugs: ['sofi-stadium-district', 'memorial-sloan-kettering'],
    relatedServiceSlugs: ['construction-management']
  }
];
