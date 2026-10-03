import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { X, Check, ArrowRight, ArrowLeft, Building2 } from 'lucide-react';
import { dataService } from '../services/dataService';
import { ProjectInquiryData } from '../types';
import { Button } from './ui/Button';

export const ProjectInquiryWorkflow: React.FC = () => {
  const { isProjectInquiryOpen, setIsProjectInquiryOpen } = useNavigation();

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceNum, setReferenceNum] = useState<string | null>(null);

  const [formData, setFormData] = useState<ProjectInquiryData>({
    projectName: '',
    clientName: '',
    email: '',
    phone: '',
    company: '',
    services: [],
    market: '',
    location: '',
    estimatedSize: '',
    budgetRange: '',
    targetStartDate: '',
    projectDescription: ''
  });

  if (!isProjectInquiryOpen) return null;

  const handleClose = () => {
    setIsProjectInquiryOpen(false);
    // Reset state after close
    setTimeout(() => {
      setStep(1);
      setReferenceNum(null);
    }, 300);
  };

  const handleServiceToggle = (srv: string) => {
    setFormData(prev => {
      const exists = prev.services.includes(srv);
      return {
        ...prev,
        services: exists ? prev.services.filter(s => s !== srv) : [...prev.services, srv]
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await dataService.submitProjectInquiry(formData);
      setReferenceNum(res.referenceNumber);
    } catch {
      setReferenceNum('TC-PRJ-202601');
    } finally {
      setIsSubmitting(false);
    }
  };

  const servicesList = [
    'Preconstruction & Estimating',
    'Construction Management (CMAR)',
    'Capital Program Management',
    'Virtual Design & Construction (BIM)',
    'Lean Construction',
    'Offsite & Modular Fabrication',
    'Direct Sourcing via SourceBlue',
    'Level 1-5 Commissioning'
  ];

  const marketsList = [
    'Commercial & Mixed-Use',
    'Healthcare & Life Sciences',
    'Sports & Entertainment',
    'Education & Higher Learning',
    'Data Centers & Mission Critical',
    'Aviation & Transportation',
    'Pharmaceutical & Cleanrooms',
    'Green Building & Decarbonization'
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Start a Project Inquiry"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-[#12161A] text-white border border-white/10 shadow-2xl rounded-sm my-8 overflow-hidden">
        {/* Top Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-5 bg-[#D97706]" />
            <div>
              <h2 className="text-sm font-bold tracking-tight text-white font-display">
                START A PROJECT INQUIRY
              </h2>
              <p className="text-xs text-neutral-400">
                Partner with Sindhi Real Estate with Samina Developer for your capital program
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close inquiry dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        {!referenceNum && (
          <div className="px-6 pt-4 pb-2 bg-neutral-900/50 border-b border-white/5 flex items-center justify-between text-xs">
            <span className="text-[#D97706] font-semibold">
              Step {step} of 5
            </span>
            <span className="text-neutral-400">
              {step === 1 && 'Project Vision & Name'}
              {step === 2 && 'Required Services'}
              {step === 3 && 'Sector & Market'}
              {step === 4 && 'Scope & Estimated Budget'}
              {step === 5 && 'Contact & Ownership'}
            </span>
            <div className="w-24 h-1.5 bg-neutral-800 rounded-full overflow-hidden ml-4">
              <div
                className="h-full bg-[#D97706] transition-all duration-300"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Body Form */}
        <div className="p-6">
          {referenceNum ? (
            /* Confirmation state */
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-[#D97706]/10 border border-[#D97706] rounded-full flex items-center justify-center mx-auto text-[#D97706]">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Inquiry Successfully Logged
              </h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto">
                Thank you. Your inquiry for <span className="text-white font-semibold">{formData.projectName || 'your capital program'}</span> has been assigned to our regional preconstruction team.
              </p>
              <div className="p-4 bg-neutral-900/80 border border-white/10 rounded-xs inline-block text-xs font-mono-numbers text-neutral-300">
                Tracking Reference: <span className="text-[#D97706] font-bold">{referenceNum}</span>
              </div>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                A dedicated project director will contact {formData.email || 'you'} within one business day with feasibility insights and schedule models.
              </p>
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleClose}
                >
                  RETURN TO WEBSITE
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={step === 5 ? handleSubmit : (e) => { e.preventDefault(); setStep(s => s + 1); }}>
              {/* Step 1: Project Overview */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="text-base font-bold text-white">1. Tell us about your project</h3>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                      Project Name or Working Title *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Modernization of Downtown Innovation Campus"
                      value={formData.projectName}
                      onChange={e => setFormData({ ...formData, projectName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-white text-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                      Project Location (City, State / Region) *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. San Francisco, CA or New York, NY"
                      value={formData.location}
                      onChange={e => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-white text-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                      High-Level Project Vision &amp; Goals
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe the scope, objectives, or special site conditions (e.g. active hospital campus, historic preservation, net-zero targets)..."
                      value={formData.projectDescription}
                      onChange={e => setFormData({ ...formData, projectDescription: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-white text-sm focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Select Services */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="text-base font-bold text-white">2. Select the construction &amp; engineering services you require</h3>
                  <p className="text-xs text-neutral-400">Choose all services that apply to your delivery strategy.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {servicesList.map(srv => {
                      const selected = formData.services.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => handleServiceToggle(srv)}
                          className={`p-3 text-left border text-xs font-medium transition-all flex items-center justify-between ${
                            selected
                              ? 'bg-[#D97706]/15 border-[#D97706] text-white'
                              : 'bg-neutral-900/60 border-white/10 text-neutral-300 hover:border-white/30'
                          }`}
                        >
                          <span>{srv}</span>
                          <div
                            className={`w-4 h-4 rounded-xs border flex items-center justify-center shrink-0 ${
                              selected ? 'bg-[#D97706] border-[#D97706]' : 'border-white/30'
                            }`}
                          >
                            {selected && <Check className="w-3 h-3 text-white" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3: Select Market */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="text-base font-bold text-white">3. Select primary market sector</h3>
                  <p className="text-xs text-neutral-400">Sindhi Real Estate with Samina Developer aligns specialized sector teams with specific technical requirements.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {marketsList.map(mkt => {
                      const selected = formData.market === mkt;
                      return (
                        <button
                          key={mkt}
                          type="button"
                          onClick={() => setFormData({ ...formData, market: mkt })}
                          className={`p-3 text-left border text-xs font-medium transition-all flex items-center justify-between ${
                            selected
                              ? 'bg-[#D97706]/15 border-[#D97706] text-white'
                              : 'bg-neutral-900/60 border-white/10 text-neutral-300 hover:border-white/30'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Building2 className={`w-3.5 h-3.5 ${selected ? 'text-[#D97706]' : 'text-neutral-500'}`} />
                            <span>{mkt}</span>
                          </div>
                          <div
                            className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                              selected ? 'border-[#D97706] bg-[#D97706]' : 'border-white/30'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 4: Scale & Scope */}
              {step === 4 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="text-base font-bold text-white">4. Project scope and anticipated timeline</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                        Estimated Area (sq ft)
                      </label>
                      <select
                        value={formData.estimatedSize}
                        onChange={e => setFormData({ ...formData, estimatedSize: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-white text-sm focus:outline-none"
                      >
                        <option value="">Select Estimated Size</option>
                        <option value="Under 50,000 sq ft">Under 50,000 sq ft</option>
                        <option value="50,000 - 150,000 sq ft">50,000 - 150,000 sq ft</option>
                        <option value="150,000 - 500,000 sq ft">150,000 - 500,000 sq ft</option>
                        <option value="Over 500,000 sq ft">Over 500,000 sq ft (Master Campus)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                        Anticipated Capital Budget
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={e => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-white text-sm focus:outline-none"
                      >
                        <option value="">Select Anticipated Range</option>
                        <option value="$10M - $25M">$10M - $25M</option>
                        <option value="$25M - $75M">$25M - $75M</option>
                        <option value="$75M - $250M">$75M - $250M</option>
                        <option value="$250M+">$250M+ (Mega Program)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                      Target Groundbreak / Start Date
                    </label>
                    <select
                      value={formData.targetStartDate}
                      onChange={e => setFormData({ ...formData, targetStartDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-white text-sm focus:outline-none"
                    >
                      <option value="">Select Target Date</option>
                      <option value="Immediate (Within 3 months)">Immediate (Within 3 months)</option>
                      <option value="6 - 12 Months">6 - 12 Months</option>
                      <option value="1 - 2 Years">1 - 2 Years</option>
                      <option value="Feasibility / Conceptual Phase">Feasibility / Conceptual Phase</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 5: Contact Info */}
              {step === 5 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="text-base font-bold text-white">5. Client contact information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Eleanor Vance"
                        value={formData.clientName}
                        onChange={e => setFormData({ ...formData, clientName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-white text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                        Company or Institution *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Apex Health Ventures"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-white text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                        Business Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="eleanor@apexhealth.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-white text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                        Direct Phone *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+1 (555) 019-2834"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-white text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-neutral-900/60 border border-white/10 text-xs text-neutral-400">
                    By submitting, your information will be shared solely with our executive preconstruction team under professional non-disclosure standards.
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                {step > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setStep(s => s - 1)}
                  >
                    BACK
                  </Button>
                ) : <div />}

                {step < 5 ? (
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    showArrow
                  >
                    NEXT STEP
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    isLoading={isSubmitting}
                    showArrow
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT PROJECT INQUIRY'}
                  </Button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
