// CMS-ready service layer abstracting data access for future headless CMS or API integration
import { PROJECTS_DATA } from '../data/projects';
import { SERVICES_DATA } from '../data/services';
import { MARKETS_DATA } from '../data/markets';
import { NEWS_DATA } from '../data/news';
import { CAREERS_DATA } from '../data/careers';
import { LOCATIONS_DATA } from '../data/locations';
import { COMMITMENTS_DATA } from '../data/commitments';
import { COMPANY_STATISTICS, SUSTAINABILITY_STATISTICS } from '../data/statistics';
import { NETWORK_COMPANIES, INTERNATIONAL_PROJECTS } from '../data/network';
import { Project, Service, Market, NewsArticle, Job, OfficeLocation, CommitmentTab, ProjectInquiryData, SubcontractorPrequalData } from '../types';

export const dataService = {
  // Projects
  async getProjects(): Promise<Project[]> {
    return Promise.resolve([...PROJECTS_DATA]);
  },

  async getFeaturedProjects(): Promise<Project[]> {
    return Promise.resolve(PROJECTS_DATA.filter(p => p.featured));
  },

  async getProjectBySlug(slug: string): Promise<Project | undefined> {
    return Promise.resolve(PROJECTS_DATA.find(p => p.slug === slug));
  },

  async searchProjects(query: string, filters?: { market?: string; location?: string; status?: string; year?: number }): Promise<Project[]> {
    let results = [...PROJECTS_DATA];
    if (query) {
      const q = query.toLowerCase();
      results = results.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        p.market.toLowerCase().includes(q)
      );
    }
    if (filters?.market && filters.market !== 'All') {
      results = results.filter(p => p.market.toLowerCase().includes(filters.market!.toLowerCase()));
    }
    if (filters?.location && filters.location !== 'All') {
      results = results.filter(p => p.city.toLowerCase() === filters.location!.toLowerCase() || p.country.toLowerCase() === filters.location!.toLowerCase());
    }
    if (filters?.status && filters.status !== 'All') {
      results = results.filter(p => p.status === filters.status);
    }
    if (filters?.year) {
      results = results.filter(p => p.year === filters.year);
    }
    return Promise.resolve(results);
  },

  // Services
  async getServices(): Promise<Service[]> {
    return Promise.resolve([...SERVICES_DATA]);
  },

  async getServiceBySlug(slug: string): Promise<Service | undefined> {
    return Promise.resolve(SERVICES_DATA.find(s => s.slug === slug));
  },

  // Markets
  async getMarkets(): Promise<Market[]> {
    return Promise.resolve([...MARKETS_DATA]);
  },

  async getMarketBySlug(slug: string): Promise<Market | undefined> {
    return Promise.resolve(MARKETS_DATA.find(m => m.slug === slug));
  },

  // News & Insights
  async getNews(): Promise<NewsArticle[]> {
    return Promise.resolve([...NEWS_DATA]);
  },

  async getArticleBySlug(slug: string): Promise<NewsArticle | undefined> {
    return Promise.resolve(NEWS_DATA.find(n => n.slug === slug));
  },

  async searchNews(query?: string, category?: string, year?: string): Promise<NewsArticle[]> {
    let results = [...NEWS_DATA];
    if (query) {
      const q = query.toLowerCase();
      results = results.filter(n =>
        n.title.toLowerCase().includes(q) ||
        n.excerpt.toLowerCase().includes(q) ||
        n.content.some(c => c.toLowerCase().includes(q))
      );
    }
    if (category && category !== 'All') {
      results = results.filter(n => n.category.toLowerCase() === category.toLowerCase());
    }
    if (year && year !== 'All') {
      results = results.filter(n => n.date.includes(year));
    }
    return Promise.resolve(results);
  },

  // Careers / Jobs
  async getJobs(): Promise<Job[]> {
    return Promise.resolve([...CAREERS_DATA]);
  },

  async getJobById(id: string): Promise<Job | undefined> {
    return Promise.resolve(CAREERS_DATA.find(j => j.id === id));
  },

  async searchJobs(query?: string, department?: string, location?: string, experience?: string): Promise<Job[]> {
    let results = [...CAREERS_DATA];
    if (query) {
      const q = query.toLowerCase();
      results = results.filter(j =>
        j.title.toLowerCase().includes(q) ||
        j.description.toLowerCase().includes(q) ||
        j.requirements.some(r => r.toLowerCase().includes(q))
      );
    }
    if (department && department !== 'All') {
      results = results.filter(j => j.department === department);
    }
    if (location && location !== 'All') {
      results = results.filter(j => j.location.includes(location));
    }
    if (experience && experience !== 'All') {
      results = results.filter(j => j.experience === experience);
    }
    return Promise.resolve(results);
  },

  // Locations & Local Community
  async getLocations(): Promise<OfficeLocation[]> {
    return Promise.resolve([...LOCATIONS_DATA]);
  },

  async getLocationById(id: string): Promise<OfficeLocation | undefined> {
    return Promise.resolve(LOCATIONS_DATA.find(l => l.id === id));
  },

  // Commitments & ESG
  async getCommitments(): Promise<CommitmentTab[]> {
    return Promise.resolve([...COMMITMENTS_DATA]);
  },

  async getCommitmentBySlug(slug: string): Promise<CommitmentTab | undefined> {
    return Promise.resolve(COMMITMENTS_DATA.find(c => c.slug === slug));
  },

  // Statistics & Network
  async getStatistics() {
    return Promise.resolve({
      company: COMPANY_STATISTICS,
      sustainability: SUSTAINABILITY_STATISTICS
    });
  },

  async getNetwork() {
    return Promise.resolve({
      companies: NETWORK_COMPANIES,
      internationalProjects: INTERNATIONAL_PROJECTS
    });
  },

  // Submissions (simulating API endpoints with persisted local cache)
  async submitProjectInquiry(data: ProjectInquiryData): Promise<{ success: boolean; referenceNumber: string }> {
    const referenceNumber = `TC-PRJ-${Date.now().toString().slice(-6)}`;
    try {
      const existing = JSON.parse(localStorage.getItem('tc_project_inquiries') || '[]');
      existing.push({ ...data, referenceNumber, submittedAt: new Date().toISOString() });
      localStorage.setItem('tc_project_inquiries', JSON.stringify(existing));
    } catch {
      // fallback
    }
    return Promise.resolve({ success: true, referenceNumber });
  },

  async submitSubcontractorPrequal(data: SubcontractorPrequalData): Promise<{ success: boolean; prequalId: string }> {
    const prequalId = `TC-SUB-${Date.now().toString().slice(-6)}`;
    try {
      const existing = JSON.parse(localStorage.getItem('tc_subcontractor_prequals') || '[]');
      existing.push({ ...data, prequalId, submittedAt: new Date().toISOString() });
      localStorage.setItem('tc_subcontractor_prequals', JSON.stringify(existing));
    } catch {
      // fallback
    }
    return Promise.resolve({ success: true, prequalId });
  },

  async submitContact(data: { name: string; email: string; phone?: string; subject: string; message: string; officeId?: string }): Promise<{ success: boolean; messageId: string }> {
    const messageId = `TC-MSG-${Date.now().toString().slice(-6)}`;
    try {
      const existing = JSON.parse(localStorage.getItem('tc_contact_messages') || '[]');
      existing.push({ ...data, messageId, submittedAt: new Date().toISOString() });
      localStorage.setItem('tc_contact_messages', JSON.stringify(existing));
    } catch {
      // fallback
    }
    return Promise.resolve({ success: true, messageId });
  },

  async submitJobApplication(jobId: string, applicant: { name: string; email: string; phone: string; linkedin?: string; notes?: string }): Promise<{ success: boolean; applicationId: string }> {
    const applicationId = `TC-APP-${Date.now().toString().slice(-6)}`;
    try {
      const existing = JSON.parse(localStorage.getItem('tc_job_applications') || '[]');
      existing.push({ jobId, ...applicant, applicationId, submittedAt: new Date().toISOString() });
      localStorage.setItem('tc_job_applications', JSON.stringify(existing));
    } catch {
      // fallback
    }
    return Promise.resolve({ success: true, applicationId });
  }
};
