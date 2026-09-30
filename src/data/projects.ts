import { Project } from '../types';
import { ASSETS } from './assets';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'four-seasons-modernization',
    slug: 'four-seasons-modernization',
    name: 'Four Seasons Hotel Modernization',
    location: '57 East 57th Street, New York, NY',
    city: 'New York',
    state: 'NY',
    country: 'United States',
    market: 'Commercial & Mixed-Use',
    type: 'Luxury Hospitality & Adaptive Renovation',
    year: 2025,
    status: 'Completed',
    value: '$240M',
    area: '430,000 sq ft',
    client: 'Ty Warner Hotels & Resorts',
    description: 'A transformative, multi-phased modernization of I.M. Pei’s architectural masterpiece on Manhattan’s Billionaires’ Row. The project team completed a full architectural refurbishment of 368 guest suites, the soaring 33-foot limestone grand foyer, state-of-the-art HVAC acoustic isolation systems, and the world-renowned Ty Warner Penthouse suite. Works were phased with meticulous white-glove dust and sound barriers to preserve historic French Chassagne limestone finishes.',
    heroImage: ASSETS.projectModernTower,
    gallery: [
      { url: ASSETS.projectModernTower, caption: 'Restored limestone facade and entry portal on 57th Street', tag: 'Exterior' },
      { url: ASSETS.heroEngineeringVdc, caption: 'BIM 3D coordination for MEP distribution in heritage ceiling cavities', tag: 'Engineering' },
      { url: ASSETS.projectSustainableCampus, caption: 'High-performance acoustic glazing installed across upper hotel suites', tag: 'Architecture' },
      { url: ASSETS.heroConstruction, caption: 'Overnight crane rigging on East 57th Street for mechanical chiller replacement', tag: 'Construction' }
    ],
    services: ['Preconstruction', 'Construction Management', 'Virtual Design & Construction', 'Lean Construction'],
    sustainabilityFeatures: [
      'LEED Gold Hospitality Certification',
      'High-efficiency variable refrigerant flow (VRF) cooling infrastructure',
      'Intelligent guest room automated energy management sensors',
      '92% recycling and salvage of heritage bronze and stone materials'
    ],
    team: [
      { role: 'Project Executive', name: 'Marcus Vance' },
      { role: 'Senior Superintendent', name: 'Elena Rostova' },
      { role: 'Lead VDC Engineer', name: 'David Chen, PE' }
    ],
    coordinates: { lat: 40.7624, lng: -73.9712 },
    featured: true,
    journey: [
      { step: 1, title: 'Heritage Laser Scanning', description: 'Complete 3D terrestrial LiDAR scanning of I.M. Pei limestone surfaces to map sub-millimeter historical tolerances.' },
      { step: 2, title: 'Acoustic & MEP Target Value Design', description: 'Re-engineering mechanical riser shafts to achieve NC-25 acoustic silence ratings inside every guest room.' },
      { step: 3, title: 'Offsite Prefabricated Bathrooms', description: 'Precision fabrication of book-matched marble vanity modules delivered and hoisted in custom protective cages.' },
      { step: 4, title: 'Urban Night-Time Rigging Logistics', description: 'Coordinated NYPD street closures and midnight mobile crane picks for rooftop cooling tower modernization.' },
      { step: 5, title: 'Commissioning & White-Glove Handover', description: 'Multi-stage air quality testing, thermal imaging audits, and seamless turnover to luxury operational staff.' }
    ],
    statistics: [
      { label: 'Project Value', value: '$240M' },
      { label: 'Total Area', value: '430,000 sq ft' },
      { label: 'Guest Keys', value: '368 Units' },
      { label: 'Safety Hours', value: '620,000 Hours (Zero Lost-Time)' },
      { label: 'Delivery Model', value: 'CMAR with GMP' }
    ]
  },
  {
    id: 'sofi-stadium-district',
    slug: 'sofi-stadium-district',
    name: 'SoFi Stadium & Hollywood Park',
    location: 'Inglewood, CA',
    city: 'Los Angeles',
    state: 'CA',
    country: 'United States',
    market: 'Sports & Entertainment',
    type: 'Monumental Stadium & Entertainment District',
    year: 2021,
    status: 'Completed',
    value: '$5.5B',
    area: '3,100,000 sq ft',
    client: 'Hollywood Park Land Company / StadCo LA',
    description: 'Constructed by a joint venture, SoFi Stadium is an unprecedented engineering marvel that serves as the home of the Los Angeles Rams and Los Angeles Chargers. The 70,000-seat open-air stadium sits beneath a monumental, independently supported translucent ETFE canopy spanning over 1 million square feet, featuring the monumental dual-sided 4K HDR Infinity Screen by Samsung.',
    heroImage: ASSETS.projectStadium,
    gallery: [
      { url: ASSETS.projectStadium, caption: 'Aerial twilight view of the monumental translucent ETFE roof canopy', tag: 'Architecture' },
      { url: ASSETS.heroConstruction, caption: 'Heavy civil excavation 100 feet below grade beneath FAA flight paths', tag: 'Civil Engineering' },
      { url: ASSETS.heroEngineeringVdc, caption: 'Erection of the massive seismic seismic-joint roof compression rings', tag: 'Structural' },
      { url: ASSETS.projectModernTower, caption: 'The 120-yard dual-sided 4K Samsung Infinity Screen hoisted into position', tag: 'Technology' }
    ],
    services: ['Construction Management', 'Virtual Design & Construction', 'Supply Chain Management', 'Fabrication'],
    sustainabilityFeatures: [
      'Engineered seismic isolation separating the seating bowl from the roof canopy',
      'Translucent ETFE canopy that reduces solar heat gain while preserving natural daylight',
      'Stormwater retention lake irrigating 25 acres of surrounding public parkland',
      'Native drought-tolerant California flora throughout the landscaped canyon terraces'
    ],
    team: [
      { role: 'Joint Venture Project Director', name: 'Robert Sullivan' },
      { role: 'Chief Structural Engineer', name: 'Katherine Morris, SE' },
      { role: 'Safety Operations Lead', name: 'Jamal Washington' }
    ],
    coordinates: { lat: 33.9535, lng: -118.3392 },
    featured: true,
    journey: [
      { step: 1, title: 'Seismic Sub-Grade Excavation', description: 'Moved 7 million cubic yards of earth to seat the stadium bowl 100 feet underground to comply with LAX flight paths.' },
      { step: 2, title: 'Earthquake Isolated Structural Ring', description: 'Erected a massive post-tensioned perimeter concrete ring and 37 colossal earthquake seismic isolators.' },
      { step: 3, title: 'Cable-Net Canopy Hoist', description: 'Tensioned a 2.2-million-pound network of steel cables to suspend the ETFE membrane and LED scoreboard.' },
      { step: 4, title: 'Multi-Trade MEP & Finishes Blitz', description: 'Coordinated over 3,500 daily craft trades across 260 luxury suites, clubs, and broadcasting rooms.' },
      { step: 5, title: 'Super Bowl LVI Readiness', description: 'Completed systems integration on time for kickoff, hosting the world’s biggest sporting spectacle.' }
    ],
    statistics: [
      { label: 'Seating Capacity', value: '70,240 (Expandable to 100k)' },
      { label: 'Total Footprint', value: '298 Acres' },
      { label: 'ETFE Roof Area', value: '1,000,000 sq ft' },
      { label: 'Earth Excavated', value: '7,000,000 Cubic Yards' },
      { label: 'Peak Craft Labor', value: '3,800 Workers Onsite' }
    ]
  },
  {
    id: 'harvard-sec-complex',
    slug: 'harvard-sec-complex',
    name: 'Harvard Science & Engineering Complex (SEC)',
    location: 'Allston, MA',
    city: 'Boston',
    state: 'MA',
    country: 'United States',
    market: 'Education & Higher Learning',
    type: 'Research & Academic Laboratory Complex',
    year: 2022,
    status: 'Completed',
    value: '$650M',
    area: '500,000 sq ft',
    client: 'Harvard University',
    description: 'One of the most environmentally ambitious academic laboratory complexes in the world. Built to house the John A. Paulson School of Engineering and Applied Sciences, the building features the world’s first hydroformed stainless steel screen facade engineered to minimize solar heat gain. Designed to achieve LEED Platinum and Living Building Challenge Petal Certification, with zero Red List chemicals used across thousands of construction materials.',
    heroImage: ASSETS.projectSustainableCampus,
    gallery: [
      { url: ASSETS.projectSustainableCampus, caption: 'The hydroformed stainless-steel solar screen reflecting natural daylight', tag: 'Facade' },
      { url: ASSETS.heroEngineeringVdc, caption: 'Digital material health tracking for Living Building Challenge compliance', tag: 'Materials' },
      { url: ASSETS.projectModernTower, caption: 'Vibration-isolated nanotechnology cleanrooms and robotics testing bays', tag: 'Laboratory' },
      { url: ASSETS.heroConstruction, caption: 'Deep foundation slurry wall installation adjacent to active transit rail', tag: 'Civil' }
    ],
    services: ['Preconstruction', 'Construction Management', 'Lean Construction', 'Virtual Design & Construction'],
    sustainabilityFeatures: [
      'LEED Platinum & Living Building Challenge Petal Certification',
      'Vetted 5,600+ building products to eliminate toxic Red List chemicals',
      'Tri-generation energy plant tie-in with dynamic heat recovery ventilation',
      'Rainwater collection system supplying 100% of campus toilet flushing and cooling'
    ],
    team: [
      { role: 'Project Executive', name: 'Sarah Jenkins, LEED AP' },
      { role: 'Materials Health Specialist', name: 'Dr. Gregory Lang' },
      { role: 'General Superintendent', name: 'Thomas O’Connor' }
    ],
    coordinates: { lat: 42.3636, lng: -71.1256 },
    featured: true,
    journey: [
      { step: 1, title: 'Healthier Materials Sourcing', description: 'Screened hundreds of manufacturers to formulate custom Red-List-free sealants, paints, and insulation.' },
      { step: 2, title: 'Hydroformed Facade Fabrication', description: 'Collaborated with German facade specialists to hydroform 12,000 custom stainless steel solar louvers.' },
      { step: 3, title: 'Nanotech Vibration Isolation', description: 'Constructed isolated 36-inch concrete inertia pads on bedrock to eliminate subway vibrations in labs.' },
      { step: 4, title: 'Intelligent Active Air Cascades', description: 'Installed variable-air-volume lab fume hood exhaust systems cutting energy consumption by 50%.' }
    ],
    statistics: [
      { label: 'Project Value', value: '$650M' },
      { label: 'Gross Area', value: '500,000 sq ft' },
      { label: 'Energy Reduction', value: '50% vs ASHRAE baseline' },
      { label: 'Tested Materials', value: '5,600+ Vetted Products' },
      { label: 'Green Rating', value: 'LEED Platinum Certified' }
    ]
  },
  {
    id: 'silicon-valley-data-center',
    slug: 'silicon-valley-data-center',
    name: 'Silicon Valley AI Hyperscale Campus',
    location: 'Santa Clara, CA',
    city: 'San Francisco',
    state: 'CA',
    country: 'United States',
    market: 'Data Centers & Mission Critical',
    type: 'Hyperscale Mission-Critical Facility',
    year: 2024,
    status: 'Completed',
    value: '$820M',
    area: '620,000 sq ft',
    client: 'Global Cloud & AI Technology Provider',
    description: 'A 180-Megawatt hyperscale data center campus engineered specifically to house next-generation high-density GPU computing clusters for frontier AI training models. The mission-critical engineering team delivered closed-loop liquid-to-chip cooling loops, 2N redundant electrical switchgear, high-voltage utility substation integration, and modular prefabricated electrical skids that accelerated commissioning by four months.',
    heroImage: ASSETS.heroEngineeringVdc,
    gallery: [
      { url: ASSETS.heroEngineeringVdc, caption: 'Modular prefabricated power skids undergoing factory acceptance testing', tag: 'Electrical' },
      { url: ASSETS.projectModernTower, caption: 'Direct-to-chip closed-loop liquid cooling distribution piping infrastructure', tag: 'Mechanical' },
      { url: ASSETS.heroConstruction, caption: 'Substation transformer setting using multi-axle heavy transport trailers', tag: 'Infrastructure' }
    ],
    services: ['Construction Management', 'Fabrication', 'Supply Chain Management', 'Virtual Design & Construction'],
    sustainabilityFeatures: [
      'Power Usage Effectiveness (PUE) rating of 1.15 at peak AI compute load',
      'Zero potable water consumed for compute cooling via closed-loop evaporators',
      '100% renewable energy procurement integration with local utility feed',
      'Battery energy storage system (BESS) peak shaving and grid stabilization'
    ],
    team: [
      { role: 'Mission Critical Vice President', name: 'Brian Sterling' },
      { role: 'Senior Electrical Engineer', name: 'Ananya Patel, PE' },
      { role: 'Commissioning Manager', name: 'Keith Miller' }
    ],
    coordinates: { lat: 37.3861, lng: -121.9636 },
    featured: true,
    journey: [
      { step: 1, title: 'Direct Factory Equipment Procurement', description: 'Procured 48 utility-grade generators and 32 medium-voltage transformers via SourceBlue.' },
      { step: 2, title: 'Prefabricated Electrical Skids', description: 'Assembled and pre-tested 64 modular power distribution skids in an offsite factory.' },
      { step: 3, title: 'Advanced Liquid Cooling Piping', description: 'Fabricated orbital-welded stainless steel coolant distribution manifolds in clean environments.' },
      { step: 4, title: 'Level 1-5 Integrated Systems Testing (IST)', description: 'Executed 100% full-load thermal heat bank load testing under maximum grid failure simulations.' }
    ],
    statistics: [
      { label: 'Critical Capacity', value: '180 MW IT Load' },
      { label: 'Target PUE', value: '1.15 Design PUE' },
      { label: 'Schedule Savings', value: '4 Months Ahead of Baseline' },
      { label: 'Commissioning Grade', value: 'Level 5 IST Complete' }
    ]
  },
  {
    id: 'memorial-sloan-kettering',
    slug: 'memorial-sloan-kettering',
    name: 'David H. Koch Center for Cancer Care',
    location: '530 East 74th Street, New York, NY',
    city: 'New York',
    state: 'NY',
    country: 'United States',
    market: 'Healthcare & Life Sciences',
    type: 'State-of-the-Art Cancer Care Center',
    year: 2020,
    status: 'Completed',
    value: '$1.2B',
    area: '750,000 sq ft',
    client: 'Memorial Sloan Kettering Cancer Center',
    description: 'A 23-story world-class ambulatory cancer care facility on Manhattan’s Upper East Side. The project team managed the complex construction of linear accelerator radiation vaults, high-dose brachytherapy suites, cutting-edge outpatient surgical suites, and clinical trial infusion therapy floors. Designed with resilient flood-proofing measures following Superstorm Sandy, with all emergency generators and critical infrastructure elevated to upper floors.',
    heroImage: ASSETS.heroConstruction,
    gallery: [
      { url: ASSETS.heroConstruction, caption: 'Towering facade overlooking Manhattan’s East River waterfront', tag: 'Architecture' },
      { url: ASSETS.heroEngineeringVdc, caption: 'High-density heavy concrete radiation vault pour with zero thermal cracking', tag: 'Engineering' },
      { url: ASSETS.projectSustainableCampus, caption: 'Sunlit healing terraces and outpatient infusion patient bays', tag: 'Interior' }
    ],
    services: ['Preconstruction', 'Construction Management', 'Virtual Design & Construction', 'Lean Construction'],
    sustainabilityFeatures: [
      'LEED Gold Healthcare Certified',
      'Flood resilience barrier system with critical electrical gear on Level 4+',
      'HEPA filtration cascades ensuring sterile air across all clinical procedure rooms',
      'Expansive rooftop green gardens providing daylight and tranquility for patients'
    ],
    team: [
      { role: 'Healthcare Director', name: 'Patricia Connolly' },
      { role: 'Senior Project Manager', name: 'Anthony Rossi' },
      { role: 'Quality Control Director', name: 'Dr. Evelyn Baker' }
    ],
    coordinates: { lat: 40.7681, lng: -73.9482 },
    featured: false,
    statistics: [
      { label: 'Project Value', value: '$1.2B' },
      { label: 'Height', value: '23 Stories' },
      { label: 'Linear Accelerators', value: '8 Radiation Vaults' },
      { label: 'Annual Patient Visits', value: '200,000+' }
    ]
  },
  {
    id: 'merdeka-118-tower',
    slug: 'merdeka-118-tower',
    name: 'Merdeka 118 Megatall Tower',
    location: 'Kuala Lumpur, Malaysia',
    city: 'Kuala Lumpur',
    state: 'Federal Territory',
    country: 'Malaysia',
    market: 'Commercial & Mixed-Use',
    type: 'Megatall Skyscraper & Mixed-Use Precinct',
    year: 2023,
    status: 'Completed',
    value: '$1.5B',
    area: '3,300,000 sq ft',
    client: 'PNB Merdeka Ventures Sdn. Bhd.',
    description: 'Standing at 678.9 meters (2,227 feet), Merdeka 118 is the second-tallest building on Earth. Project and construction management teams oversaw the diamond-faceted glass facade inspired by traditional Malaysian songket motifs, the high-speed double-deck observation elevators, Park Hyatt luxury hotel, and state-of-the-art office towers.',
    heroImage: ASSETS.heroConstruction,
    gallery: [
      { url: ASSETS.heroConstruction, caption: 'The 678.9-meter spire illuminated against the Kuala Lumpur skyline', tag: 'Exterior' },
      { url: ASSETS.heroEngineeringVdc, caption: 'Specialized GPS and laser plumbing verification across 118 floors', tag: 'Surveying' },
      { url: ASSETS.projectModernTower, caption: 'High-strength self-consolidating concrete core wall jump-form system', tag: 'Structural' }
    ],
    services: ['Project Management', 'Construction Management', 'Virtual Design & Construction'],
    sustainabilityFeatures: [
      'First building in Malaysia to achieve Triple-Platinum certification (LEED, GreenRE, GBI)',
      'High-performance smart solar envelope with dynamic glare reduction',
      'Direct connection to city mass rapid transit networks reducing commuter emissions'
    ],
    team: [
      { role: 'International Managing Director', name: 'Peter Ramstedt' },
      { role: 'Project Director', name: 'Hisham Al-Fahad' }
    ],
    coordinates: { lat: 3.1412, lng: 101.7008 },
    featured: true,
    statistics: [
      { label: 'Height', value: '678.9 m (2,227 ft)' },
      { label: 'Floors', value: '118 Stories' },
      { label: 'Global Rank', value: '2nd Tallest Building in World' },
      { label: 'Concrete Volume', value: '175,000 Cubic Meters' }
    ]
  },
  {
    id: 'burj-khalifa',
    slug: 'burj-khalifa',
    name: 'Burj Khalifa',
    location: 'Downtown Dubai, United Arab Emirates',
    city: 'Dubai',
    state: 'Dubai',
    country: 'United Arab Emirates',
    market: 'Commercial & Mixed-Use',
    type: 'Tallest Building in the World',
    year: 2010,
    status: 'Completed',
    value: '$1.5B',
    area: '5,000,000 sq ft',
    client: 'Emaar Properties',
    description: 'Soaring 828 meters (2,717 feet) into the sky, the Burj Khalifa remains the undisputed tallest building and freestanding structure on Earth. Project construction management teams coordinated international consortia, high-pressure concrete pumping to unprecedented world-record heights of over 600 meters, and high-velocity wind engineering.',
    heroImage: ASSETS.heroConstruction,
    gallery: [
      { url: ASSETS.heroConstruction, caption: 'The iconic Y-shaped tri-axial buttressed core ascending into the sky', tag: 'Architecture' },
      { url: ASSETS.heroEngineeringVdc, caption: 'Night-time concrete pumping using ultra-high-pressure Putzmeister pumps', tag: 'Engineering' }
    ],
    services: ['Project Management', 'Construction Management', 'Virtual Design & Construction'],
    sustainabilityFeatures: [
      'Innovative condensate recovery system harvesting 15 million gallons of pure water annually',
      'Curtain wall designed to resist extreme desert ambient temperatures and sand abrasion'
    ],
    team: [
      { role: 'Project Director', name: 'Robert DeFalco' },
      { role: 'Senior Technical Advisor', name: 'Mohamed Sultan' }
    ],
    coordinates: { lat: 25.1972, lng: 55.2744 },
    featured: false,
    statistics: [
      { label: 'Height', value: '828 m (2,717 ft)' },
      { label: 'World Records', value: '16 Global Engineering Records' },
      { label: 'Elevator Speed', value: '10 m/s (33 ft/s)' }
    ]
  },
  {
    id: 'taipei-101',
    slug: 'taipei-101',
    name: 'Taipei 101',
    location: 'Xinyi District, Taipei, Taiwan',
    city: 'Taipei',
    state: 'Taipei',
    country: 'Taiwan',
    market: 'Commercial & Mixed-Use',
    type: 'Supertall Tower with Tuned Mass Damper',
    year: 2004,
    status: 'Completed',
    value: '$1.9B',
    area: '4,100,000 sq ft',
    client: 'Taipei Financial Center Corporation',
    description: 'Rising 508 meters above the Taipei basin, Taipei 101 held the title of world’s tallest building for six years. Project teams managed complex structural engineering designed to withstand typhoon winds of 134 mph and the region’s strongest seismic faults, famously featuring the gold 660-tonne tuned mass pendulum damper suspended between the 87th and 92nd floors.',
    heroImage: ASSETS.projectModernTower,
    gallery: [
      { url: ASSETS.projectModernTower, caption: 'Traditional bamboo pagoda architectural form rising above Taipei', tag: 'Architecture' },
      { url: ASSETS.heroEngineeringVdc, caption: 'The iconic 660-tonne tuned mass pendulum damper mechanism', tag: 'Engineering' }
    ],
    services: ['Project Management', 'Construction Management'],
    sustainabilityFeatures: [
      'Achieved LEED Platinum Existing Building certification—the world’s tallest green building',
      'Advanced energy modeling slashing annual power consumption by 33%'
    ],
    team: [
      { role: 'Project Executive', name: 'David Wilson' }
    ],
    coordinates: { lat: 25.0339, lng: 121.5645 },
    featured: false,
    statistics: [
      { label: 'Height', value: '508 m (1,667 ft)' },
      { label: 'Mass Damper', value: '660 Tonnes' },
      { label: 'Seismic Rating', value: 'Resilient to Richter 7+ Events' }
    ]
  },
  {
    id: 'ohare-terminal-5',
    slug: 'ohare-terminal-5',
    name: 'O’Hare International Airport Terminal 5 Expansion',
    location: 'Chicago, IL',
    city: 'Chicago',
    state: 'IL',
    country: 'United States',
    market: 'Aviation & Transportation',
    type: 'International Passenger Concourse & Modernization',
    year: 2023,
    status: 'Completed',
    value: '$1.3B',
    area: '350,000 sq ft',
    client: 'Chicago Department of Aviation',
    description: 'A transformative 350,000 sq ft expansion and terminal modernization increasing gate capacity by 25% at one of the globe’s premier aviation hubs. A joint venture added 10 new international gates, modernized customs screening facilities, upgraded airline lounges, and installed advanced baggage handling systems across 4 miles of conveyors without canceling a single international flight.',
    heroImage: ASSETS.heroConstruction,
    gallery: [
      { url: ASSETS.heroConstruction, caption: 'Wide-body international aircraft docked at newly inaugurated glass jet bridges', tag: 'Exterior' },
      { url: ASSETS.heroEngineeringVdc, caption: 'Advanced automated baggage screening conveyor integration', tag: 'BHS' }
    ],
    services: ['Construction Management', 'Preconstruction', 'Virtual Design & Construction'],
    sustainabilityFeatures: [
      'LEED Silver Airport Terminal Certification',
      'High-efficiency smart glass reducing passenger terminal solar glare',
      'Pre-conditioned air and ground power at all gates to eliminate jet engine idling'
    ],
    team: [
      { role: 'Aviation Principal', name: 'Carlos Mendez' },
      { role: 'Operations Superintendent', name: 'William Vance' }
    ],
    coordinates: { lat: 41.9742, lng: -87.9073 },
    featured: false,
    statistics: [
      { label: 'Value', value: '$1.3B' },
      { label: 'New International Gates', value: '10 Gates' },
      { label: 'Terminal Expansion', value: '350,000 sq ft' },
      { label: 'Flight Interruptions', value: 'Zero Canceled Flights' }
    ]
  },
  {
    id: 'stanford-biomedical-hub',
    slug: 'stanford-biomedical-hub',
    name: 'Stanford Biomedical Innovation Center',
    location: 'Palo Alto, CA',
    city: 'San Francisco',
    state: 'CA',
    country: 'United States',
    market: 'Pharmaceutical & Biotechnology',
    type: 'Biomedical Discovery & Research Complex',
    year: 2024,
    status: 'Completed',
    value: '$380M',
    area: '215,000 sq ft',
    client: 'Stanford Medicine',
    description: 'A state-of-the-art translational research hub uniting biochemists, clinicians, and bioengineers. The project team constructed specialized BSL-3 laboratory suites, automated cryogenic sample repositories, high-throughput robotic screening suites, and collaborative open-concept laboratory spaces with 100% outside air economizers.',
    heroImage: ASSETS.projectSustainableCampus,
    gallery: [
      { url: ASSETS.projectSustainableCampus, caption: 'Mass timber entry atrium linking clinical suites to discovery laboratories', tag: 'Architecture' },
      { url: ASSETS.heroEngineeringVdc, caption: 'Pre-assembled MEP overhead service racks hoisted into lab bays', tag: 'Modular' }
    ],
    services: ['Construction Management', 'Fabrication', 'Lean Construction'],
    sustainabilityFeatures: [
      'Net Zero Energy ready design with campus heat-recovery system',
      'Embodied carbon reduction of 38% utilizing low-carbon fly ash concrete',
      'Mass timber roof and public gathering pavilions'
    ],
    team: [
      { role: 'Project Director', name: 'Laura Lin, PE' },
      { role: 'Cleanroom Specialist', name: 'Daniel Scott' }
    ],
    coordinates: { lat: 37.4323, lng: -122.1755 },
    featured: false,
    statistics: [
      { label: 'Value', value: '$380M' },
      { label: 'Area', value: '215,000 sq ft' },
      { label: 'Laboratory Space', value: '120,000 sq ft Wet & Dry Labs' },
      { label: 'Certifications', value: 'LEED Platinum Target' }
    ]
  }
];
