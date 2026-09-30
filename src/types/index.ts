export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  city: string;
  state: string;
  country: string;
  market: string;
  type: string;
  year: number;
  status: 'Completed' | 'Under Construction' | 'Preconstruction';
  value: string;
  area: string;
  client: string;
  description: string;
  heroImage: string;
  gallery: { url: string; caption: string; tag: string }[];
  services: string[];
  sustainabilityFeatures: string[];
  team: { role: string; name: string }[];
  coordinates: { lat: number; lng: number };
  featured: boolean;
  journey?: { step: number; title: string; description: string }[];
  statistics?: { label: string; value: string }[];
}

export interface Service {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  overview: string;
  heroImage: string;
  capabilities: string[];
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  relatedProjectSlugs: string[];
  relatedInsightSlugs: string[];
}

export interface Market {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  heroImage: string;
  projectCount: number;
  keyDrivers: string[];
  featuredProjectSlugs: string[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: {
    name: string;
    title: string;
  };
  heroImage: string;
  excerpt: string;
  content: string[];
  readTime: string;
  relatedProjectSlugs?: string[];
  relatedServiceSlugs?: string[];
}

export interface Job {
  id: string;
  title: string;
  location: string;
  department: string;
  type: 'Full-time' | 'Internship / Co-op' | 'Apprenticeship';
  experience: 'Entry Level' | 'Mid Level' | 'Senior' | 'Executive';
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  postedDate: string;
}

export interface OfficeLocation {
  id: string;
  name: string;
  region: string;
  city: string;
  state: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  leadership: { name: string; title: string }[];
  coordinates: { lat: number; lng: number };
  activeProjectsCount: number;
  localProjectsSlugs: string[];
  localHighlights: string[];
}

export interface CommitmentTab {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  headline: string;
  description: string;
  targets: { metric: string; label: string; timeframe: string }[];
  keyPillars: { title: string; desc: string }[];
  highlights: string[];
}

export interface NetworkCompany {
  name: string;
  role: string;
  description: string;
  capabilities: string[];
  relationship: string;
}

export interface ProjectInquiryData {
  projectName: string;
  clientName: string;
  email: string;
  phone: string;
  company: string;
  services: string[];
  market: string;
  location: string;
  estimatedSize: string;
  budgetRange: string;
  targetStartDate: string;
  projectDescription: string;
}

export interface SubcontractorPrequalData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  trade: string;
  location: string;
  yearsInBusiness: string;
  annualVolume: string;
  safetyEMR: string;
  oshaRecordableRate: string;
  bondingCapacitySingle: string;
  bondingCapacityAggregate: string;
  certifications: string[];
  recentProjectsDescription: string;
}
