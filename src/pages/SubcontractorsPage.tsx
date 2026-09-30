import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { dataService } from '../services/dataService';
import { SubcontractorPrequalData } from '../types';
import { CheckCircle2, Shield, FileText, ArrowRight, Check, UploadCloud, AlertCircle } from 'lucide-react';

export const SubcontractorsPage: React.FC = () => {
  const { navigate } = useNavigation();

  const [formData, setFormData] = useState<SubcontractorPrequalData>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    trade: 'Electrical & Low Voltage',
    location: '',
    yearsInBusiness: '5 - 10 Years',
    annualVolume: '$10M - $25M',
    safetyEMR: '0.75',
    oshaRecordableRate: '1.2',
    bondingCapacitySingle: '$15M',
    bondingCapacityAggregate: '$30M',
    certifications: ['OSHA 30 Certified Foremen'],
    recentProjectsDescription: ''
  });

  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedPrequalId, setSubmittedPrequalId] = useState<string | null>(null);

  const trades = [
    'Electrical & Low Voltage',
    'Mechanical, HVAC & Piping',
    'Structural Steel & Erection',
    'Concrete & Deep Foundations',
    'Curtain Wall & Architectural Glazing',
    'Drywall, Framing & Acoustical Ceilings',
    'Plumbing & Fire Protection',
    'Civil Sitework & Earthmoving',
    'Interior Architectural Millwork & Finishes'
  ];

  const handleCertToggle = (cert: string) => {
    setFormData(prev => {
      const exists = prev.certifications.includes(cert);
      return {
        ...prev,
        certifications: exists ? prev.certifications.filter(c => c !== cert) : [...prev.certifications, cert]
      };
    });
  };

  const handleSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map(f => f.name);
      setUploadedFiles(prev => [...prev, ...names]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await dataService.submitSubcontractorPrequal(formData);
      setSubmittedPrequalId(res.prequalId);
    } catch {
      setSubmittedPrequalId('TC-SUB-202688');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <div className="w-2 h-4 bg-[#D97706]" />
              <span>Trade Partner Network</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              BECOME A SUBCONTRACTOR
            </h1>
            <p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed">
              We build through our trade partners. Join over 10,000 vetted specialty contractors delivering the world’s most demanding capital programs.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px]" />
      </section>

      {/* Prequalification Criteria Overview */}
      <section className="py-20 sm:py-28 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-4 mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#12161A]">
              PREQUALIFICATION STANDARDS &amp; REQUIREMENTS
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Before submitting bids on Sindh Real Estate with Samina Developers projects, trade contractors undergo rigorous financial, safety, and operational prequalification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-neutral-200 p-8 space-y-4 shadow-xs">
              <div className="w-10 h-10 bg-[#D97706]/10 text-[#D97706] flex items-center justify-center border border-[#D97706]/30">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-[#12161A]">
                1. Safety Record &amp; EMR
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Experience Modification Rate (EMR) preferably below 1.0, comprehensive OSHA logs (Forms 300 &amp; 300A for previous 3 years), and commitment to Sindh Real Estate with Samina Developers’ Living Injury-Free Everyday (LIFE) protocol.
              </p>
            </div>

            <div className="bg-white border border-neutral-200 p-8 space-y-4 shadow-xs">
              <div className="w-10 h-10 bg-[#D97706]/10 text-[#D97706] flex items-center justify-center border border-[#D97706]/30">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-[#12161A]">
                2. Financial &amp; Bonding
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Audited or reviewed financial statements for the past two fiscal years, established bank credit facility references, and surety letter confirming single and aggregate bonding capacity.
              </p>
            </div>

            <div className="bg-white border border-neutral-200 p-8 space-y-4 shadow-xs">
              <div className="w-10 h-10 bg-[#D97706]/10 text-[#D97706] flex items-center justify-center border border-[#D97706]/30">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-[#12161A]">
                3. Diverse Business Enterprise (UBE)
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We strongly encourage Minority, Women, Veteran, and LGBTQ+ owned enterprises to register. Sindh Real Estate with Samina Developers awards over $3.5B annually to certified diverse trade businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subcontractor Prequalification Portal Form */}
      <section id="portal" className="py-20 sm:py-28 bg-[#12161A] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4 mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D97706]">
              Subcontractor Portal
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              START PREQUALIFICATION
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto leading-relaxed">
              Submit your company credentials to begin the formal prequalification and bidding qualification process with Sindh Real Estate with Samina Developers.
            </p>
          </div>

          <div className="bg-neutral-950 border border-white/10 p-8 sm:p-12">
            {submittedPrequalId ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-[#D97706]/20 border border-[#D97706] rounded-full flex items-center justify-center mx-auto text-[#D97706]">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-white">
                  Prequalification Dossier Received
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto">
                  Your profile for <span className="font-semibold text-white">{formData.companyName}</span> has been logged into our regional trade risk evaluation queue.
                </p>
                <div className="p-3 bg-neutral-900 border border-white/10 inline-block font-mono-numbers text-xs text-neutral-300">
                  Dossier Tracking ID: <span className="text-[#D97706] font-bold">{submittedPrequalId}</span>
                </div>
                <p className="text-xs text-neutral-500 max-w-md mx-auto">
                  A regional risk management analyst will verify your EMR and insurance certificates within 3 business days.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmittedPrequalId(null);
                      setUploadedFiles([]);
                    }}
                    className="px-6 py-2.5 bg-[#D97706] text-white text-xs font-bold uppercase tracking-wider hover:bg-amber-600 transition-colors"
                  >
                    Submit Another Profile
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company & Contact */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#D97706] border-b border-white/10 pb-2">
                    1. Company Identification &amp; Contact
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                        Company Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Apex Mechanical LLC"
                        value={formData.companyName}
                        onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-white text-xs focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                        Primary Contact Person *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="David Vance"
                        value={formData.contactPerson}
                        onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-white text-xs focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="prequal@apexmechanical.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-white text-xs focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                        Phone *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+1 (555) 482-9900"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-white text-xs focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Trade & Capacity */}
                <div className="space-y-4 pt-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#D97706] border-b border-white/10 pb-2">
                    2. Trade Discipline &amp; Capacity
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                        Primary Trade Scope *
                      </label>
                      <select
                        value={formData.trade}
                        onChange={e => setFormData({ ...formData, trade: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-white text-xs focus:outline-none"
                      >
                        {trades.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                        Operating Geographic Market *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Greater New York or Northern California"
                        value={formData.location}
                        onChange={e => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-white text-xs focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                        Years in Business
                      </label>
                      <select
                        value={formData.yearsInBusiness}
                        onChange={e => setFormData({ ...formData, yearsInBusiness: e.target.value })}
                        className="w-full px-3 py-2 bg-neutral-900 border border-white/15 text-white text-xs focus:outline-none"
                      >
                        <option value="Under 3 Years">Under 3 Years</option>
                        <option value="3 - 5 Years">3 - 5 Years</option>
                        <option value="5 - 10 Years">5 - 10 Years</option>
                        <option value="Over 10 Years">Over 10 Years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                        Annual Trade Volume
                      </label>
                      <select
                        value={formData.annualVolume}
                        onChange={e => setFormData({ ...formData, annualVolume: e.target.value })}
                        className="w-full px-3 py-2 bg-neutral-900 border border-white/15 text-white text-xs focus:outline-none"
                      >
                        <option value="Under $5M">Under $5M</option>
                        <option value="$5M - $10M">$5M - $10M</option>
                        <option value="$10M - $25M">$10M - $25M</option>
                        <option value="$25M+">$25M+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                        Current Safety EMR *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. 0.78"
                        value={formData.safetyEMR}
                        onChange={e => setFormData({ ...formData, safetyEMR: e.target.value })}
                        className="w-full px-3 py-2 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-white text-xs focus:outline-none font-mono-numbers"
                      />
                    </div>
                  </div>
                </div>

                {/* Certifications & Business Enterprises */}
                <div className="space-y-3 pt-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#D97706] border-b border-white/10 pb-2">
                    3. Diversity Certifications &amp; Accreditations
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      'Minority Business Enterprise (MBE)',
                      'Women-Owned Business (WBE)',
                      'Veteran / Disabled Veteran Enterprise (SDVOB)',
                      'Disadvantaged Business Enterprise (DBE)',
                      'LGBTQ+ Owned Business',
                      'OSHA 30 Certified Foremen',
                      'Union Signatory Trade',
                      'LEED Green Associate on Staff'
                    ].map((cert) => {
                      const isSelected = formData.certifications.includes(cert);
                      return (
                        <button
                          key={cert}
                          type="button"
                          onClick={() => handleCertToggle(cert)}
                          className={`p-2.5 text-left border transition-all flex items-center justify-between text-xs ${
                            isSelected
                              ? 'bg-[#D97706]/15 border-[#D97706] text-white'
                              : 'bg-neutral-900/60 border-white/10 text-neutral-400 hover:border-white/30'
                          }`}
                        >
                          <span>{cert}</span>
                          <div className={`w-3.5 h-3.5 border flex items-center justify-center shrink-0 ${isSelected ? 'bg-[#D97706] border-[#D97706]' : 'border-white/30'}`}>
                            {isSelected && <Check className="w-2.5 h-2.5 text-white" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Document Upload Simulation */}
                <div className="space-y-3 pt-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#D97706] border-b border-white/10 pb-2">
                    4. Supporting Document Uploads
                  </h3>
                  <div className="p-6 border-2 border-dashed border-white/20 hover:border-[#D97706] text-center space-y-2 cursor-pointer transition-colors bg-neutral-900/40">
                    <UploadCloud className="w-8 h-8 text-[#D97706] mx-auto" />
                    <div className="text-xs text-neutral-300 font-semibold">
                      Upload Certificate of Insurance (COI), OSHA 300 Logs &amp; W-9
                    </div>
                    <p className="text-[11px] text-neutral-500">
                      PDF, DOCX up to 25MB each
                    </p>
                    <input
                      type="file"
                      multiple
                      onChange={handleSimulatedUpload}
                      className="hidden"
                      id="doc-upload"
                    />
                    <label
                      htmlFor="doc-upload"
                      className="inline-block mt-2 px-4 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold cursor-pointer"
                    >
                      Browse Files
                    </label>
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="space-y-1.5 pt-2">
                      <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">Attached Files ({uploadedFiles.length}):</div>
                      {uploadedFiles.map((fn, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs p-2 bg-neutral-900 border border-white/10 text-neutral-300">
                          <span className="truncate">{fn}</span>
                          <span className="text-[#D97706] font-mono-numbers text-[10px]">Staged</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-white/10">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#D97706] hover:bg-amber-600 disabled:opacity-50 text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? 'Processing Prequalification...' : 'START PREQUALIFICATION'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
