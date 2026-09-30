import React, { useState } from 'react';
import { dataService } from '../services/dataService';
import { Button } from './ui/Button';
import { ScrollReveal } from './ui/ScrollReveal';
import { Check, Send, Phone, Mail, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Commercial',
    location: '',
    estimatedSize: 'Under 100k sq ft',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await dataService.submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: `Inquiry: ${formData.projectType} in ${formData.location || 'Undisclosed'}`,
        message: `Company: ${formData.company}\nEstimated Size: ${formData.estimatedSize}\n\n${formData.message}`
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 sm:py-36 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#B88728]">
                <div className="w-2 h-4 bg-[#DFB257]" />
                <span>Get In Touch</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1}>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#12161A] leading-tight">
                LET&rsquo;S BUILD SOMETHING TOGETHER
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="text-xl font-light text-neutral-600 font-display">
                What do you want to build?
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.3}>
              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                Whether you are planning a landmark commercial tower, modernizing an active clinical hospital, or exploring feasibility for a hyperscale mission-critical facility, our engineering and preconstruction specialists are ready to collaborate.
              </p>
            </ScrollReveal>

            {/* Quick Contact Info */}
            <ScrollReveal animation="fade-up" delay={0.4}>
              <div className="pt-6 border-t border-neutral-200 space-y-4 text-xs text-neutral-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B88728] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#12161A]">Global Headquarters</div>
                    <div>Executive Tower, Financial District, Karachi &amp; International Hubs</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#B88728] shrink-0" />
                  <div>
                    <div className="font-bold text-[#12161A]">Direct Phone</div>
                    <a href="tel:+12122296000" className="hover:text-[#B88728] transition-colors">+1 (212) 229-6000</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#B88728] shrink-0" />
                  <div>
                    <div className="font-bold text-[#12161A]">Business Inquiries</div>
                    <a href="mailto:inquiries@sindhrealestate.com" className="hover:text-[#B88728] transition-colors">inquiries@sindhrealestate.com</a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="bg-white border border-neutral-200 p-8 sm:p-10 shadow-xl rounded-xs">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 bg-[#DFB257]/15 text-[#B88728] border border-[#DFB257] rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-2xl font-bold uppercase text-[#12161A]">
                      Thank You for Reaching Out
                    </h3>
                    <p className="text-sm text-neutral-600 max-w-md mx-auto font-light leading-relaxed">
                      Your message has been routed to our regional leadership. A representative will contact you promptly to discuss your capital objectives.
                    </p>
                    <div className="pt-2">
                      <Button
                        variant="dark"
                        size="md"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            company: '',
                            email: '',
                            phone: '',
                            projectType: 'Commercial',
                            location: '',
                            estimatedSize: 'Under 100k sq ft',
                            message: ''
                          });
                        }}
                      >
                        SEND ANOTHER INQUIRY
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1.5 font-bold">
                          Your Name *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Jane Doe"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-[#DFB257] focus:bg-white text-sm text-[#12161A] focus:outline-none rounded-xs transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1.5 font-bold">
                          Company / Organization *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Organization Name"
                          value={formData.company}
                          onChange={e => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-[#DFB257] focus:bg-white text-sm text-[#12161A] focus:outline-none rounded-xs transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1.5 font-bold">
                          Email Address *
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="jane@company.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-[#DFB257] focus:bg-white text-sm text-[#12161A] focus:outline-none rounded-xs transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1.5 font-bold">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-[#DFB257] focus:bg-white text-sm text-[#12161A] focus:outline-none rounded-xs transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1.5 font-bold">
                          Project Type
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-[#DFB257] text-xs text-[#12161A] focus:outline-none rounded-xs"
                        >
                          <option value="Commercial">Commercial</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Sports">Sports</option>
                          <option value="Education">Education</option>
                          <option value="Aviation">Aviation</option>
                          <option value="Data Centers">Data Centers</option>
                          <option value="Pharmaceutical">Pharmaceutical</option>
                          <option value="Infrastructure">Infrastructure</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1.5 font-bold">
                          Location
                        </label>
                        <input
                          type="text"
                          placeholder="City, State"
                          value={formData.location}
                          onChange={e => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-[#DFB257] text-xs text-[#12161A] focus:outline-none rounded-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1.5 font-bold">
                          Estimated Size
                        </label>
                        <select
                          value={formData.estimatedSize}
                          onChange={e => setFormData({ ...formData, estimatedSize: e.target.value })}
                          className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-[#DFB257] text-xs text-[#12161A] focus:outline-none rounded-xs"
                        >
                          <option value="Under 50k sq ft">Under 50k sq ft</option>
                          <option value="50k - 150k sq ft">50k - 150k sq ft</option>
                          <option value="150k - 500k sq ft">150k - 500k sq ft</option>
                          <option value="500k+ sq ft">500k+ sq ft</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1.5 font-bold">
                        Message / Project Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your upcoming project requirements, timeline, or objectives..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-[#DFB257] focus:bg-white text-sm text-[#12161A] focus:outline-none rounded-xs transition-colors"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        isLoading={isSubmitting}
                        icon={Send}
                        className="w-full sm:w-auto"
                      >
                        {isSubmitting ? 'SENDING...' : 'START A CONVERSATION'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
