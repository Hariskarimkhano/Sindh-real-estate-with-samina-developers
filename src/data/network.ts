import { NetworkCompany } from '../types';

export const NETWORK_COMPANIES: NetworkCompany[] = [
  {
    name: 'SourceBlue',
    role: 'Procurement & Supply Chain Management',
    relationship: 'Company Affiliate',
    description: 'Direct manufacturer equipment sourcing, expediting, and global supply chain logistics. Sourcing millions in critical MEP gear, architectural lighting, chillers, and switchgear directly from factories to protect project schedules and budgets.',
    capabilities: [
      'Direct Manufacturer Sourcing & Factory Bidding',
      'HVAC, Electrical Switchgear & Generator Packages',
      'Long-Lead Equipment Warehousing & Staging',
      'Quality Control & Factory Acceptance Auditing'
    ]
  },
  {
    name: 'Sindhi Real Estate Engineering Group (TEG)',
    role: 'Structural & Technical Engineering Services',
    relationship: 'Internal Technical Practice',
    description: 'Providing peer review, deep geotechnical analysis, forensic structural evaluations, and facade engineering. TEG serves as our internal technical SWAT team solving complex engineering challenges on marquee projects.',
    capabilities: [
      'Structural Peer Review & Value Engineering',
      'Deep Foundation & Geotechnical Advisory',
      'Building Enclosure & Facade Thermal Modeling',
      'Wind Tunnel Analysis & Tuned Mass Damping'
    ]
  },
  {
    name: 'Sindhi Real Estate Technical Services',
    role: 'Commissioning & Facilities Operational Readiness',
    relationship: 'Internal Specialist Division',
    description: 'Ensuring high-performance facilities transition smoothly from construction to live mission-critical operation. Managing Level 1-5 integrated systems commissioning and building automation validation.',
    capabilities: [
      'Whole-Building Commissioning (Cx)',
      'Mission-Critical Integrated Systems Testing (IST)',
      'Building Automation & Energy Optimization',
      'Operations & Maintenance Staff Training'
    ]
  },
  {
    name: 'Clark Builders',
    role: 'Western & Northern Canadian Operations',
    relationship: 'Strategic Partner',
    description: 'One of Western Canada’s premier commercial, industrial, and institutional builders. Bringing deep regional sub-arctic expertise, indigenous partnerships, and mass timber construction prowess across Alberta, BC, and the Northwest Territories.',
    capabilities: [
      'Commercial, Industrial & Healthcare Construction in Canada',
      'Sub-Zero Cold Weather Civil Engineering',
      'Indigenous Community Joint Ventures & Training',
      'Mass Timber Fabrication & Assembly'
    ]
  },
  {
    name: 'Dornan',
    role: 'Advanced MEP Engineering & European Data Center Execution',
    relationship: 'International Subsidiary',
    description: 'A leading European engineering contractor delivering complex mechanical, electrical, and instrumentation engineering services for hyperscale data centers, life sciences, and semiconductor gigafactories across Europe.',
    capabilities: [
      'High-Voltage Electrical Substation Engineering',
      'Advanced Process Piping & Cleanroom Utilities',
      'Hyperscale European Data Center Delivery',
      'Turnkey Instrumentation & Control Systems'
    ]
  },
  {
    name: 'HOCHTIEF',
    role: 'Global Infrastructure & Concessions Parent',
    relationship: 'Parent Organization (Essen, Germany)',
    description: 'One of the leading international construction groups worldwide. Operating in transportation infrastructure, energy networks, and public-private partnerships across the Americas, Europe, and Asia Pacific.',
    capabilities: [
      'Public-Private Partnerships (P3) & Concessions',
      'Mega-Tunnels, High-Speed Rail & Bridges',
      'Mining & Civil Infrastructure Engineering',
      'European Green Infrastructure Programs'
    ]
  },
  {
    name: 'ACS Group (Actividades de Construcción y Servicios)',
    role: 'Global Construction & Engineering Leader',
    relationship: 'Ultimate Parent Organization (Madrid, Spain)',
    description: 'A global benchmark in infrastructure development and civil engineering, ranking among the world’s largest construction consortia with over €40B in annual operations worldwide.',
    capabilities: [
      'Global Civil Engineering & Renewable Energy Networks',
      'Highways, High-Speed Rail & Sea Ports',
      'Global Financial Scale & Multi-Billion Bonding Capacity',
      'International Industrial Services & Concessions'
    ]
  },
  {
    name: 'Dragados',
    role: 'Heavy Civil Infrastructure & Tunneling',
    relationship: 'ACS Strategic Partner',
    description: 'World-renowned heavy civil contractor specializing in large-scale bridge erection, deep underground transit tunnels, dams, and maritime port structures across the Americas and Europe.',
    capabilities: [
      'Deep Tunnel Boring Machine (TBM) Operations',
      'Cable-Stayed & Suspension Bridge Construction',
      'Seawalls, Breakwaters & Deep Water Berths',
      'Highway Interchanges & Light Rail Systems'
    ]
  }
];

export const INTERNATIONAL_PROJECTS = [
  {
    name: 'Burj Khalifa',
    location: 'Dubai, UAE',
    height: '828 meters',
    status: 'Completed',
    role: 'Project Construction Management',
    slug: 'burj-khalifa'
  },
  {
    name: 'Taipei 101',
    location: 'Taipei, Taiwan',
    height: '508 meters',
    status: 'Completed',
    role: 'Project & Construction Management',
    slug: 'taipei-101'
  },
  {
    name: 'Merdeka 118',
    location: 'Kuala Lumpur, Malaysia',
    height: '678.9 meters',
    status: 'Completed',
    role: 'Construction Management',
    slug: 'merdeka-118-tower'
  },
  {
    name: 'Istanbul Financial Center',
    location: 'Istanbul, Turkey',
    height: '46-story twin towers',
    status: 'Completed',
    role: 'Project Management & Technical Advisory',
    slug: 'four-seasons-modernization'
  },
  {
    name: 'Statue of Unity',
    location: 'Gujarat, India',
    height: '182 meters (World’s Tallest Statue)',
    status: 'Completed',
    role: 'Project Management Consultant',
    slug: 'sofi-stadium-district'
  },
  {
    name: 'Louvre Abu Dhabi',
    location: 'Abu Dhabi, UAE',
    height: 'Floating Geodesic Dome',
    status: 'Completed',
    role: 'Technical Program Oversight',
    slug: 'harvard-sec-complex'
  }
];
