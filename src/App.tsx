import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchOverlay } from './components/SearchOverlay';
import { ProjectInquiryWorkflow } from './components/ProjectInquiryWorkflow';
import { ScrollProgress } from './components/ui/ScrollProgress';

import { HomePage } from './pages/HomePage';
import { WhoWeArePage } from './pages/WhoWeArePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { MarketsPage } from './pages/MarketsPage';
import { MarketDetailPage } from './pages/MarketDetailPage';
import { OurNetworkPage } from './pages/OurNetworkPage';
import { InternationalPage } from './pages/InternationalPage';
import { CommitmentsPage } from './pages/CommitmentsPage';
import { NewsPage } from './pages/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { CareersPage } from './pages/CareersPage';
import { JobDetailPage } from './pages/JobDetailPage';
import { LocationsPage } from './pages/LocationsPage';
import { ContactPage } from './pages/ContactPage';
import { SubcontractorsPage } from './pages/SubcontractorsPage';

const AppContent: React.FC = () => {
  const { currentPath, params } = useNavigation();

  // Route Resolver
  const renderCurrentRoute = () => {
    // Exact root
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }

    if (currentPath === '/who-we-are') {
      return <WhoWeArePage />;
    }

    // Services
    if (currentPath === '/services') {
      return <ServicesPage />;
    }
    if (currentPath.startsWith('/services/') && params.slug) {
      return <ServiceDetailPage slug={params.slug} />;
    }

    // Projects
    if (currentPath === '/projects') {
      return <ProjectsPage />;
    }
    if (currentPath.startsWith('/projects/') && params.slug) {
      return <ProjectDetailPage slug={params.slug} />;
    }

    // Markets
    if (currentPath === '/markets') {
      return <MarketsPage />;
    }
    if (currentPath.startsWith('/markets/') && params.slug) {
      return <MarketDetailPage slug={params.slug} />;
    }

    // Network & International
    if (currentPath === '/our-network') {
      return <OurNetworkPage />;
    }
    if (currentPath === '/international') {
      return <InternationalPage />;
    }

    // Commitments & ESG
    if (currentPath === '/commitments' || currentPath.startsWith('/commitments/')) {
      return <CommitmentsPage initialTab={params.tab} />;
    }

    // News & Insights
    if (currentPath === '/news') {
      return <NewsPage />;
    }
    if (currentPath.startsWith('/news/') && params.slug) {
      return <NewsDetailPage slug={params.slug} />;
    }

    // Careers
    if (currentPath === '/careers') {
      return <CareersPage />;
    }
    if (currentPath.startsWith('/careers/') && params.jobId) {
      return <JobDetailPage jobId={params.jobId} />;
    }

    // Locations
    if (currentPath === '/locations') {
      return <LocationsPage />;
    }

    // Subcontractors
    if (currentPath === '/subcontractors') {
      return <SubcontractorsPage />;
    }

    // Contact
    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    // Fallback: 404
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F8F9FA] text-[#12161A] p-6 text-center">
        <div className="max-w-md space-y-4">
          <div className="font-mono-numbers text-5xl font-extrabold text-[#D97706]">404</div>
          <h1 className="font-display text-2xl font-bold uppercase">Page Not Found</h1>
          <p className="text-xs text-neutral-600">The capital project or publication you are seeking does not exist or has been relocated.</p>
          <a
            href="/"
            className="inline-block px-6 py-2.5 bg-[#12161A] text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#12161A]">
      {/* Luxury Cinematic Scroll Progress Tracer */}
      <ScrollProgress />

      {/* Top Header Navigation */}
      <Header />

      {/* Main Content View */}
      <main className="flex-1 w-full overflow-x-hidden">
        {renderCurrentRoute()}
      </main>

      {/* Global Enterprise Footer */}
      <Footer />

      {/* Global Interactive Overlays */}
      <SearchOverlay />
      <ProjectInquiryWorkflow />
    </div>
  );
};

export function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;
