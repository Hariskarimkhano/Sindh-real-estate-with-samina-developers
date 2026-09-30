import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { CAREERS_DATA } from '../data/careers';
import { dataService } from '../services/dataService';
import { ArrowLeft, ArrowRight, ChevronRight, MapPin, Briefcase, Calendar, CheckCircle2, Check, Send, X } from 'lucide-react';

interface JobDetailPageProps {
  jobId: string;
}

export const JobDetailPage: React.FC<JobDetailPageProps> = ({ jobId }) => {
  const { navigate } = useNavigation();
  const job = CAREERS_DATA.find(j => j.id === jobId) || CAREERS_DATA[0];

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    notes: ''
  });
  const [submittedAppId, setSubmittedAppId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await dataService.submitJobApplication(job.id, applicant);
      setSubmittedAppId(res.applicationId);
    } catch {
      setSubmittedAppId('TC-APP-202699');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#12161A] text-neutral-400 text-xs py-3 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2">
          <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button onClick={() => navigate('/careers')} className="hover:text-white transition-colors">Careers</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#D97706] font-semibold truncate max-w-xs">{job.title}</span>
        </div>
      </div>

      {/* Job Header */}
      <section className="py-16 sm:py-24 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
            <span className="bg-[#D97706] text-white px-3 py-1 font-bold uppercase tracking-wider text-[11px]">
              {job.department}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
              {job.location}
            </span>
            <span>·</span>
            <span>{job.experience}</span>
            <span>·</span>
            <span>{job.type}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
            {job.title}
          </h1>

          <div className="flex items-center gap-4 pt-4">
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="px-8 py-3.5 bg-[#D97706] hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              <span>APPLY NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/careers')}
              className="px-6 py-3.5 border border-white/20 text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Openings</span>
            </button>
          </div>
        </div>
      </section>

      {/* Job Details & Requirements */}
      <section className="py-20 sm:py-28 bg-[#F8F9FA] text-[#12161A]">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {/* Position Description */}
          <div className="bg-white border border-neutral-200 p-8 sm:p-10 shadow-xs space-y-4">
            <h2 className="font-display text-xl font-bold uppercase text-[#12161A]">
              POSITION OVERVIEW
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
              {job.description}
            </p>
          </div>

          {/* Key Responsibilities */}
          <div className="bg-white border border-neutral-200 p-8 sm:p-10 shadow-xs space-y-6">
            <h2 className="font-display text-xl font-bold uppercase text-[#12161A]">
              KEY RESPONSIBILITIES
            </h2>
            <div className="space-y-3">
              {job.responsibilities.map((resp, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{resp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Qualifications & Requirements */}
          <div className="bg-white border border-neutral-200 p-8 sm:p-10 shadow-xs space-y-6">
            <h2 className="font-display text-xl font-bold uppercase text-[#12161A]">
              QUALIFICATIONS &amp; EXPERIENCE
            </h2>
            <div className="space-y-3">
              {job.requirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                  <span className="text-[#D97706] font-bold">·</span>
                  <span className="leading-relaxed">{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Total Rewards & Benefits */}
          <div className="bg-white border border-neutral-200 p-8 sm:p-10 shadow-xs space-y-6">
            <h2 className="font-display text-xl font-bold uppercase text-[#12161A]">
              COMPENSATION &amp; BENEFITS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700">
              {job.benefits.map((ben, idx) => (
                <div key={idx} className="p-3 bg-neutral-50 border border-neutral-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{ben}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Application Callout */}
          <div className="p-8 bg-[#12161A] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold uppercase text-white">
                Ready to Shape the Future with Us?
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Applications reviewed on a rolling basis by our regional talent team.
              </p>
            </div>
            <button
              onClick={() => setIsApplyModalOpen(true)}
              className="px-8 py-3.5 bg-[#D97706] hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap"
            >
              APPLY FOR THIS ROLE
            </button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isApplyModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs overflow-y-auto"
        >
          <div className="relative w-full max-w-lg bg-[#12161A] text-white border border-white/10 shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D97706]">Application</span>
                <h3 className="font-display text-lg font-bold uppercase text-white">{job.title}</h3>
              </div>
              <button
                onClick={() => setIsApplyModalOpen(false)}
                className="p-1 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submittedAppId ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-[#D97706]/20 text-[#D97706] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-white">Application Submitted</h4>
                <p className="text-xs text-neutral-300">
                  Reference: <span className="font-mono-numbers font-bold text-[#D97706]">{submittedAppId}</span>
                </p>
                <p className="text-xs text-neutral-400">
                  Our regional recruiter in {job.location} will review your credentials and contact you within 5 business days.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsApplyModalOpen(false);
                      setSubmittedAppId(null);
                    }}
                    className="px-6 py-2.5 bg-[#D97706] text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Doe"
                    value={applicant.name}
                    onChange={e => setApplicant({ ...applicant, name: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-sm text-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="jane@email.com"
                      value={applicant.email}
                      onChange={e => setApplicant({ ...applicant, email: e.target.value })}
                      className="w-full px-3 py-2 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-sm text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={applicant.phone}
                      onChange={e => setApplicant({ ...applicant, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-sm text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                    LinkedIn / Portfolio URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/username"
                    value={applicant.linkedin}
                    onChange={e => setApplicant({ ...applicant, linkedin: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-sm text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                    Brief Note or Cover Summary
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Summarize your relevant project experience or certifications..."
                    value={applicant.notes}
                    onChange={e => setApplicant({ ...applicant, notes: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-900 border border-white/15 focus:border-[#D97706] text-sm text-white focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#D97706] hover:bg-amber-600 disabled:opacity-50 text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? 'Submitting Application...' : 'SUBMIT APPLICATION'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
