import React from 'react';
import { ContactInquirySection } from '../components/ContactInquirySection';

export const ContactPage: React.FC = () => {
  return (
    <div id="contact-page" className="w-full">
      {/* Contact Hero */}
      <section className="relative py-24 sm:py-32 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <div className="w-2 h-4 bg-[#D97706]" />
              <span>Connect with Sindhi Real Estate — Samina Developer</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              LET&rsquo;S BUILD WHAT MATTERS
            </h1>
            <p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed">
              Reach our offices in the United Kingdom, Canada, and Dubai, or submit a project inquiry.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px]" />
      </section>

      {/* Main Interactive Contact Section */}
      <style>{`
        #contact-page div.flex.items-start.gap-2:has(> svg.lucide-map-pin) {
          display: none;
        }
      `}</style>
      <ContactInquirySection />
    </div>
  );
};
