import { OfficeLocation } from '../types';

export const LOCATIONS_DATA: OfficeLocation[] = [
  {
    id: 'san-francisco',
    name: 'San Francisco & Bay Area',
    region: 'Northern California',
    city: 'San Francisco',
    state: 'CA',
    country: 'United States',
    address: '201 3rd Street, Suite 700, San Francisco, CA 94103',
    phone: '+1 (415) 277-8500',
    email: 'sanfrancisco@tcco.com',
    leadership: [
      { name: 'David Perez', title: 'Vice President & General Manager' },
      { name: 'Sarah Lin, PE', title: 'Operations Director' },
      { name: 'Marcus Morales', title: 'Preconstruction Executive' }
    ],
    coordinates: { lat: 37.7844, lng: -122.3996 },
    activeProjectsCount: 42,
    localProjectsSlugs: ['silicon-valley-data-center', 'stanford-biomedical-hub'],
    localHighlights: [
      'Over 60 years of continuous building leadership in the Bay Area',
      'Pioneering hyperscale AI infrastructure and seismic structural retrofits',
      'Partnership with SF Unified School District on ACE STEM construction apprenticeships',
      'Active leadership in the Bay Area Council and local minority business incubators'
    ]
  },
  {
    id: 'new-york',
    name: 'New York City Metropolitan',
    region: 'Northeast',
    city: 'New York',
    state: 'NY',
    country: 'United States',
    address: '375 Hudson Street, 6th Floor, New York, NY 10014',
    phone: '+1 (212) 229-6000',
    email: 'newyork@tcco.com',
    leadership: [
      { name: 'Charles Bacon', title: 'Senior Vice President & Regional Leader' },
      { name: 'Melissa Goldstein', title: 'Healthcare Sector Director' },
      { name: 'Anthony Rossi', title: 'Senior Superintendent' }
    ],
    coordinates: { lat: 40.7291, lng: -74.0069 },
    activeProjectsCount: 88,
    localProjectsSlugs: ['four-seasons-modernization', 'memorial-sloan-kettering'],
    localHighlights: [
      'Historic headquarters of a construction company founded in 1902',
      'Delivered iconic New York civic landmarks including Madison Square Garden and Lincoln Center modernizations',
      'Awarded over $800M annually to New York Certified MWBE firms',
      'Operating a long-running School of Construction Management in downtown Manhattan'
    ]
  },
  {
    id: 'boston',
    name: 'Boston & New England',
    region: 'Northeast',
    city: 'Boston',
    state: 'MA',
    country: 'United States',
    address: 'Two Seaport Lane, 7th Floor, Boston, MA 02210',
    phone: '+1 (617) 247-6400',
    email: 'boston@tcco.com',
    leadership: [
      { name: 'Maureen Neelon', title: 'Vice President & Business Unit Manager' },
      { name: 'Gregory Lang, PhD', title: 'Life Sciences Technical Director' }
    ],
    coordinates: { lat: 42.3503, lng: -71.0425 },
    activeProjectsCount: 36,
    localProjectsSlugs: ['harvard-sec-complex'],
    localHighlights: [
      'Leader in Cambridge/Boston Kendall Square life sciences and academic research hubs',
      'Pioneering Living Building Challenge zero-toxin construction at Harvard and MIT',
      'Sponsor of the Boston Building Trades Youth Pre-Apprenticeship Program'
    ]
  },
  {
    id: 'los-angeles',
    name: 'Southern California / Los Angeles',
    region: 'Southwest',
    city: 'Los Angeles',
    state: 'CA',
    country: 'United States',
    address: '555 S. Flower Street, Suite 4220, Los Angeles, CA 90071',
    phone: '+1 (213) 891-3000',
    email: 'losangeles@tcco.com',
    leadership: [
      { name: 'Robert Sullivan', title: 'Senior Vice President' },
      { name: 'Katherine Morris, SE', title: 'Chief Structural Engineer' }
    ],
    coordinates: { lat: 34.0505, lng: -118.2571 },
    activeProjectsCount: 52,
    localProjectsSlugs: ['sofi-stadium-district'],
    localHighlights: [
      'Constructed SoFi Stadium and the monumental Hollywood Park revitalization precinct',
      'Active leadership in the 2028 Los Angeles Olympic infrastructure preparations',
      'Deep engagement with the Los Angeles Urban League and local veteran hiring'
    ]
  },
  {
    id: 'chicago',
    name: 'Chicago & Midwest',
    region: 'Midwest',
    city: 'Chicago',
    state: 'IL',
    country: 'United States',
    address: '55 E. Monroe Street, Suite 1430, Chicago, IL 60603',
    phone: '+1 (312) 327-2770',
    email: 'chicago@tcco.com',
    leadership: [
      { name: 'Carlos Mendez', title: 'Vice President & General Manager' },
      { name: 'William Vance', title: 'Aviation & Infrastructure Director' }
    ],
    coordinates: { lat: 41.8807, lng: -87.6253 },
    activeProjectsCount: 47,
    localProjectsSlugs: ['ohare-terminal-5'],
    localHighlights: [
      'Historic builder of Chicago towers, Soldier Field renovations, and O’Hare International Airport expansions',
      'Close collaboration with the Hispanic American Construction Industry Association (HACIA)',
      'Named top Midwest General Contractor by Engineering News-Record'
    ]
  },
  {
    id: 'seattle',
    name: 'Seattle & Pacific Northwest',
    region: 'Northwest',
    city: 'Seattle',
    state: 'WA',
    country: 'United States',
    address: '830 4th Avenue South, Suite 300, Seattle, WA 98134',
    phone: '+1 (206) 505-6600',
    email: 'seattle@tcco.com',
    leadership: [
      { name: 'Karen Lindstrom', title: 'Vice President & General Manager' }
    ],
    coordinates: { lat: 47.5952, lng: -122.3294 },
    activeProjectsCount: 29,
    localProjectsSlugs: ['silicon-valley-data-center'],
    localHighlights: [
      'Pioneers of Pacific Northwest Mass Timber construction and seismic resilient high-rises',
      'Extensive partnership with indigenous tribal enterprises and local environmental conservancies'
    ]
  },
  {
    id: 'dallas',
    name: 'Dallas / Fort Worth & Texas',
    region: 'South',
    city: 'Dallas',
    state: 'TX',
    country: 'United States',
    address: '14185 Dallas Parkway, Suite 1200, Dallas, TX 75254',
    phone: '+1 (214) 203-8200',
    email: 'dallas@tcco.com',
    leadership: [
      { name: 'Brett Armstrong', title: 'Vice President & General Manager' }
    ],
    coordinates: { lat: 32.9416, lng: -96.8228 },
    activeProjectsCount: 44,
    localProjectsSlugs: ['silicon-valley-data-center'],
    localHighlights: [
      'Leading Texas builder in healthcare campuses, semiconductor cleanrooms, and corporate campuses',
      'Over $1.2B in active regional projects currently underway across DFW and Austin'
    ]
  },
  {
    id: 'dubai',
    name: 'Sindhi Real Estate with Samina Developer - Middle East',
    region: 'International',
    city: 'Dubai',
    state: 'Dubai',
    country: 'United Arab Emirates',
    address: 'Emaar Square, Building 4, Downtown Dubai, UAE',
    phone: '+971 (4) 362-7000',
    email: 'international@tcco.com',
    leadership: [
      { name: 'Hisham Al-Fahad', title: 'Regional Managing Director' }
    ],
    coordinates: { lat: 25.195, lng: 55.278 },
    activeProjectsCount: 18,
    localProjectsSlugs: ['burj-khalifa'],
    localHighlights: [
      'Project management and construction oversight of the Burj Khalifa and Emirates Towers',
      'Technical consulting across mega-developments in the UAE, Saudi Arabia, and Qatar'
    ]
  }
];
