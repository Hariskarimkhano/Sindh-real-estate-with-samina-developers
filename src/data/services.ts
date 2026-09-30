import { Service } from '../types';
import { ASSETS } from './assets';

export const SERVICES_DATA: Service[] = [
  {
    id: 'preconstruction',
    slug: 'preconstruction',
    number: '01',
    title: 'Preconstruction',
    shortDescription: 'Rigorous front-end estimating, scheduling, constructability reviews, and target value engineering that eliminate risk before site mobilization.',
    overview: 'Preconstruction at Sindh Real Estate with Samina Developers is not merely an estimate—it is a collaborative engineering process. By uniting architects, engineers, trade partners, and client stakeholders in the conceptual stage, we establish realistic cost models, identify supply chain vulnerabilities, model logistics in 4D, and guarantee budget certainty before ground is broken.',
    heroImage: ASSETS.heroEngineeringVdc,
    capabilities: [
      'Conceptual & Target Value Estimating',
      'Constructability Reviews & Engineering Analysis',
      'Market Intelligence & Trade Capacity Analysis',
      'Life-Cycle Cost & Embodied Carbon Modeling',
      '4D Logistics & Site Phasing Simulation',
      'Long-Lead Procurement Strategy & Expediting',
      'Early Trade Contractor Involvement (ETCI)'
    ],
    benefits: [
      'Guaranteed Maximum Price (GMP) certainty early in design',
      'Up to 15% reduction in project lifecycle procurement cycles',
      'Zero unforeseen site clashes through multi-trade digital validation',
      'Maximum value engineered without sacrificing architectural intent'
    ],
    process: [
      { step: '01', title: 'Scope Definition & Feasibility', description: 'Comprehensive baseline benchmarking against our proprietary $28B historical cost database.' },
      { step: '02', title: 'Target Value Design (TVD)', description: 'Continuous cost modeling in real-time alignment with architectural design iterations.' },
      { step: '03', title: 'Constructability & Clash Resolution', description: 'Detailed BIM validation, mechanical tolerance reviews, and crane logistics sequencing.' },
      { step: '04', title: 'Procurement & Subcontractor Packaging', description: 'Strategic buyout packaging, pre-purchasing critical equipment, and trade vetting.' }
    ],
    relatedProjectSlugs: ['four-seasons-modernization', 'silicon-valley-data-center', 'stanford-biomedical-hub'],
    relatedInsightSlugs: ['2026-construction-cost-index', 'integrated-preconstruction-risk']
  },
  {
    id: 'construction-management',
    slug: 'construction-management',
    number: '02',
    title: 'Construction Management',
    shortDescription: 'Unmatched field execution, technical oversight, quality control, and schedule discipline on complex, active, and mission-critical sites.',
    overview: 'As construction manager, we assume total responsibility for field coordination, site safety, labor harmony, schedule acceleration, and technical compliance. Our superintendents and project executives bring decades of sector-specific mastery to navigate congested urban footprints, active operational facilities, and unprecedented structural requirements.',
    heroImage: ASSETS.heroConstruction,
    capabilities: [
      'Construction Management at Risk (CMAR)',
      'Agency Construction Management',
      'Jobsite Safety (LIFE Protocol & Zero-Incident Culture)',
      'Subcontractor Coordination & Trade Leadership',
      'Quality Assurance & Commissioning Oversight (QA/QC)',
      'Complex Phasing in Operating Healthcare/Aviation Facilities',
      'Daily Digital Progress Verification & Drone Aerial Auditing'
    ],
    benefits: [
      'World-class safety record with industry-leading low EMR ratings',
      'Turnkey schedule compression via parallel workstream execution',
      'Full transparency through cloud-based owner reporting dashboards',
      'Rigorous craft labor and trade partner supervision'
    ],
    process: [
      { step: '01', title: 'Site Mobilization & Logistics Planning', description: 'Enclosing the envelope, deploying crane and hoist infrastructure, establishing safe perimeters.' },
      { step: '02', title: 'Structure & Envelope Execution', description: 'Foundation, structural steel, mass timber, and high-performance building facade installation.' },
      { step: '03', title: 'MEP Rough-In & Fit-Out', description: 'Coordinated installation of advanced electrical, HVAC, plumbing, and fire protection systems.' },
      { step: '04', title: 'Integrated Systems Testing & Handover', description: 'Commissioning, punch list resolution, building documentation, and facility staff training.' }
    ],
    relatedProjectSlugs: ['sofi-stadium-district', 'memorial-sloan-kettering', 'ohare-terminal-5'],
    relatedInsightSlugs: ['jobsite-safety-evolution', 'operating-in-active-campuses']
  },
  {
    id: 'project-management',
    slug: 'project-management',
    number: '03',
    title: 'Project Management',
    shortDescription: 'Owner representation, capital program management, and master delivery oversight from initial strategy through occupancy.',
    overview: 'We act as an extension of the client’s capital programs team, orchestrating master schedules, regulatory entitlements, designer selection, contract governance, and financial stewardship across single flagship developments or multi-year national building programs.',
    heroImage: ASSETS.projectModernTower,
    capabilities: [
      'Master Program & Portfolio Management',
      'Owner Authorized Representative Services',
      'Budget & Financial Lifecycle Governance',
      'Entitlements, Permitting & Municipal Approvals',
      'Stakeholder & Community Engagement Management',
      'Contract Administration & Dispute Avoidance'
    ],
    benefits: [
      'Unified single point of accountability across vast stakeholder groups',
      'Standardized procurement frameworks delivering bulk purchasing efficiencies',
      'Proactive risk mitigation across municipal, political, and financial vectors'
    ],
    process: [
      { step: '01', title: 'Capital Planning & Vision', description: 'Aligning business operational drivers with real estate and construction milestones.' },
      { step: '02', title: 'Team Assembly & Governance', description: 'RFP management, designer qualifications, contract negotiation, and milestone scheduling.' },
      { step: '03', title: 'Execution Monitoring', description: 'Independent oversight, earned-value analysis, and rigorous change-order control.' },
      { step: '04', title: 'Closeout & Facility Handover', description: 'Turnover documentation, operational commissioning, warranty management.' }
    ],
    relatedProjectSlugs: ['merdeka-118-tower', 'four-seasons-modernization'],
    relatedInsightSlugs: ['capital-program-resilience']
  },
  {
    id: 'lean-construction',
    slug: 'lean-construction',
    number: '04',
    title: 'Lean Construction',
    shortDescription: 'Last Planner System®, pull planning, waste minimization, and continuous flow engineering that stabilize delivery dates.',
    overview: 'Lean is embedded in our operating DNA. By replacing top-down guesswork with the Last Planner System®, daily stand-ups, pull planning milestones, and visual 5S jobsites, we eliminate trade stacking, eliminate rework, and transform jobsites into highly synchronized assembly floors.',
    heroImage: ASSETS.projectSustainableCampus,
    capabilities: [
      'The Last Planner System® (LPS) Implementation',
      'Milestone Pull Planning & Weekly Work Plans (WWP)',
      'Percent Plan Complete (PPC) Tracking & Variance Root Cause Analysis',
      '5S Jobsite Organization & Visual Management',
      'Value Stream Mapping for Field Trades',
      'Continuous Improvement Kaizen Workflows'
    ],
    benefits: [
      'Up to 25% increase in field productivity and trade coordination efficiency',
      'Dramatic reduction in site material congestion and safety hazards',
      'Predictable milestone turnover with minimal punch-list rework'
    ],
    process: [
      { step: '01', title: 'Master Pull Planning', description: 'Subcontractors collaborate backward from project milestones to agree on handoffs.' },
      { step: '02', title: 'Six-Week Lookahead', description: 'Identifying and removing road blocks, submittals, and material delays before they hit the deck.' },
      { step: '03', title: 'Daily Huddles & PPC Checks', description: '15-minute cross-trade standups measuring daily completion metrics and adjusting pace.' },
      { step: '04', title: 'Variance Retrospective', description: 'Root cause analysis on variances to continuously refine downstream sequences.' }
    ],
    relatedProjectSlugs: ['stanford-biomedical-hub', 'harvard-sec-complex'],
    relatedInsightSlugs: ['lean-construction-field-guide']
  },
  {
    id: 'fabrication',
    slug: 'fabrication',
    number: '05',
    title: 'Fabrication',
    shortDescription: 'Precision offsite component manufacturing, structural sub-assemblies, and multi-trade modular assemblies engineered to millimetric tolerances.',
    overview: 'Modern high-performance buildings demand the precision of industrial manufacturing. Through our specialized fabrication partnerships and internal engineering capabilities, we fabricate structural steel modules, MEP distribution corridors, facade assemblies, and bathroom pods in climate-controlled environments.',
    heroImage: ASSETS.heroEngineeringVdc,
    capabilities: [
      'Multi-Trade MEP Rack Fabrication',
      'Architectural Unitized Curtain Wall Pre-Assembly',
      'Structural Steel & Modular Connection Detailing',
      'Skid-Mounted Mechanical Plant Equipment',
      'Digital-to-Fabrication CNC Tooling Workflows',
      'Factory Acceptance Testing (FAT)'
    ],
    benefits: [
      'Shifting up to 40% of on-site labor hours into controlled shop conditions',
      'Elimination of weather delays for critical envelope and mechanical paths',
      'Substantially higher finish quality and strict factory QA/QC testing'
    ],
    process: [
      { step: '01', title: 'Fabrication-Ready Detailing', description: 'Converting architectural design intent into manufacturing-ready CNC models.' },
      { step: '02', title: 'Factory Assembly & QA/QC', description: 'Precision robotic cutting, welding, pressure testing, and multi-trade integration.' },
      { step: '03', title: 'JIT Logistics & Delivery', description: 'Sequenced flatbed transportation timed precisely for immediate crane pick on arrival.' },
      { step: '04', title: 'Rigging & Connection', description: 'Single-crane installation reducing site trades and working-at-height exposure.' }
    ],
    relatedProjectSlugs: ['silicon-valley-data-center', 'sofi-stadium-district'],
    relatedInsightSlugs: ['modular-fabrication-breakthroughs']
  },
  {
    id: 'offsite-construction',
    slug: 'offsite-construction',
    number: '06',
    title: 'Offsite Construction',
    shortDescription: 'Industrialized volumetric construction, modular units, and industrialized building systems that compress overall schedules by up to 30%.',
    overview: 'Offsite construction shifts major portions of a building’s scope into advanced manufacturing centers while simultaneous site excavation and foundation work occurs. This concurrent path slashes overall schedule durations, reduces neighborhood disruption, and lowers project carbon intensity.',
    heroImage: ASSETS.projectSustainableCampus,
    capabilities: [
      'Volumetric Modular Units (Residential, Hospitality, Healthcare)',
      'Prefabricated Utility Central Plants',
      'Permanent Modular Construction (PMC)',
      'Concurrent Site Civil and Module Manufacturing Scheduling',
      'Specialized Heavy Rigging & Logistics Coordination'
    ],
    benefits: [
      'Up to 30% reduction in overall schedule duration',
      'Significantly reduced noise, dust, and truck traffic in dense urban cores',
      'Superior thermal envelope tightness and acoustic isolation'
    ],
    process: [
      { step: '01', title: 'Modular Feasibility Analysis', description: 'Evaluating route clearance, crane capacity, and architectural suitability for modular.' },
      { step: '02', title: 'Concurrent Execution', description: 'Foundations poured on site while modules are simultaneously built on factory lines.' },
      { step: '03', title: 'Transportation Logistics', description: 'Permitted heavy-haul transport coordination with police escorts and route staging.' },
      { step: '04', title: 'Erection & Stitching', description: 'Rapid vertical stacking followed by weather sealing and utility tie-ins.' }
    ],
    relatedProjectSlugs: ['four-seasons-modernization', 'stanford-biomedical-hub'],
    relatedInsightSlugs: ['industrialized-construction-future']
  },
  {
    id: 'supply-chain-management',
    slug: 'supply-chain-management',
    number: '07',
    title: 'Supply Chain Management',
    shortDescription: 'Global procurement power, equipment sourcing via SourceBlue, direct factory relationships, and proactive tariff and raw-material risk shielding.',
    overview: 'Backed by our affiliated procurement organization, SourceBlue, we leverage tens of billions in annual purchasing leverage to directly source major MEP equipment, architectural lighting, emergency generators, switchgear, chillers, and finishes directly from global tier-one manufacturers.',
    heroImage: ASSETS.heroConstruction,
    capabilities: [
      'Direct Manufacturer Sourcing via SourceBlue',
      'Long-Lead Critical Equipment Warehousing & Storage',
      'Global Freight Logistics & Port Clearance',
      'Tariff, Inflation & Commodity Price Hedging Strategies',
      'Factory Inspection & Production Tracking Audits',
      'Supplier Diversity & Local Subcontractor Incubation'
    ],
    benefits: [
      'Direct factory pricing eliminating distributor markups and broker delays',
      'Priority manufacturing slots for switchgear, transformers, and chillers',
      'End-to-end chain of custody tracking from raw materials to jobsite drop'
    ],
    process: [
      { step: '01', title: 'Procurement Schedule Alignment', description: 'Mapping lead times to project critical path to initiate procurement milestones.' },
      { step: '02', title: 'Factory Direct Sourcing', description: 'Competitive bidding across verified global manufacturers for equipment packages.' },
      { step: '03', title: 'Factory Inspection & Tracking', description: 'Onsite factory visits to inspect winding, assembly, and testing before shipment.' },
      { step: '04', title: 'Secure Warehousing & Delivery', description: 'Domestic staging yards to hold equipment until the building is ready for install.' }
    ],
    relatedProjectSlugs: ['silicon-valley-data-center', 'ohare-terminal-5'],
    relatedInsightSlugs: ['2026-construction-cost-index', 'global-supply-chain-resilience']
  },
  {
    id: 'vdc',
    slug: 'virtual-design-and-construction',
    number: '08',
    title: 'Virtual Design & Construction',
    shortDescription: 'Cutting-edge BIM, 4D scheduling, 3D laser scanning, digital twins, and AI reality capture uniting the virtual model and physical reality.',
    overview: 'Our Virtual Design & Construction (VDC) team operates at the bleeding edge of building information modeling and spatial computing. We build every project twice—first in a hyper-detailed virtual environment where every pipe, rebar tie, and curtain wall anchor is clash-tested, and then physically on the jobsite.',
    heroImage: ASSETS.heroEngineeringVdc,
    capabilities: [
      'Multidisciplinary BIM Modeling & LOD 400 Coordination',
      '4D Schedule Sequencing & 5D Cost Integration',
      'High-Density 3D LiDAR Terrestrial Laser Scanning',
      'Autonomous Robotic Jobsite Reality Capture',
      'Augmented Reality (AR) Field Verification for Foremen',
      'As-Built Asset Digital Twins for Facilities Management'
    ],
    benefits: [
      'Elimination of 99% of field MEP clashes prior to fabrication',
      'Real-time automated progress auditing comparing point clouds to BIM models',
      'Flawless operational handover with comprehensive metadata-enriched digital twins'
    ],
    process: [
      { step: '01', title: 'Model Federation & Clash Detection', description: 'Integrating architectural, structural, and mechanical models into a unified federated model.' },
      { step: '02', title: 'Collaborative Sign-Off', description: 'Weekly multi-trade virtual coordination meetings to resolve conflicts down to 1/8-inch.' },
      { step: '03', title: 'Field Layout Robotics & AR', description: 'Total station robotic layout projecting digital model coordinates directly onto concrete decks.' },
      { step: '04', title: 'Laser Scanning & As-Built Verification', description: 'Continuous point-cloud scanning validating installation against tolerance guidelines.' }
    ],
    relatedProjectSlugs: ['harvard-sec-complex', 'sofi-stadium-district', 'silicon-valley-data-center'],
    relatedInsightSlugs: ['digital-twins-enterprise-handover', 'ai-augmented-jobsite-reality']
  }
];
