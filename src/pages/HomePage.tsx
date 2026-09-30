import React from 'react';
import { Hero } from '../components/Hero';
import { CompanyOverview } from '../components/CompanyOverview';
import { CompanyStatistics } from '../components/CompanyStatistics';
import { ServicesSection } from '../components/ServicesSection';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { MarketSectors } from '../components/MarketSectors';
import { LocalCommunitySection } from '../components/LocalCommunitySection';
import { GlobalNetworkSection } from '../components/GlobalNetworkSection';
import { CommitmentsSection } from '../components/CommitmentsSection';
import { NewsSection } from '../components/NewsSection';
import { CareersSection } from '../components/CareersSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. Cinematic Hero */}
      <Hero />

      {/* 2. Company Overview: Building What Matters */}
      <CompanyOverview />

      {/* 3. Company Statistics: 16k+ Employees, $28B+ Volume */}
      <CompanyStatistics />

      {/* 4. Core Services (01 to 08) */}
      <ServicesSection />

      {/* 5. Featured Projects Carousel / Showcase */}
      <FeaturedProjects />

      {/* 6. Market Sectors */}
      <MarketSectors />

      {/* 7. Local Community Experience */}
      <LocalCommunitySection />

      {/* 8. Global Network & International Reach */}
      <GlobalNetworkSection />

      {/* 9. Commitments & ESG Strategy Interactive Tabs */}
      <CommitmentsSection />

      {/* 10. News, Insights & Building Cost Index */}
      <NewsSection />

      {/* 11. Careers Callout */}
      <CareersSection />

      {/* 12. Contact Conversation */}
      <ContactSection />
    </div>
  );
};
