import React, { useState } from 'react';
import { dataService } from '../services/dataService';
import { LOCATIONS_DATA, toTelephoneUri } from '../data/locations';
import { Button } from './ui/Button';
import { ScrollReveal } from './ui/ScrollReveal';
import { Check, Send } from 'lucide-react';

export const ContactInquirySection: React.FC = () => {
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
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    try {
      await dataService.submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: `Inquiry: ${formData.projectType} in ${formData.location || 'Undisclosed'}`,
        message: `Company: ${formData.company}\nEstimated Size: ${formData.estimatedSize}\n\n${formData.message}`
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Contact inquiry submission failed:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#F8F9FA] py-20 text-[#12161A] sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-6 lg:col-span-5">
          <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#B88728]">
            <span className="h-4 w-2 bg-[#DFB257]" />
            <span>Our Offices</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">
            CONTACT OUR OFFICES
          </h2>
          <div className="space-y-5 border-t border-neutral-200 pt-6 text-xs text-neutral-700">
            {LOCATIONS_DATA.map(office => (
              <div key={office.id} className="space-y-1.5 border-b border-neutral-200 pb-4 last:border-b-0">
                <h3 className="font-bold text-[#12161A]">{office.name}</h3>
                <p>{office.city}, {office.country}</p>
                <a
                  href={toTelephoneUri(office.phone)}
                  className="inline-block font-semibold hover:text-[#B88728]"
                >
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

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
                        onChange={event => setFormData({ ...formData, name: event.target.value })}
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
                        onChange={event => setFormData({ ...formData, company: event.target.value })}
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
                        onChange={event => setFormData({ ...formData, email: event.target.value })}
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
                        onChange={event => setFormData({ ...formData, phone: event.target.value })}
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
                        onChange={event => setFormData({ ...formData, projectType: event.target.value })}
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
                        onChange={event => setFormData({ ...formData, location: event.target.value })}
                        className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-[#DFB257] text-xs text-[#12161A] focus:outline-none rounded-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1.5 font-bold">
                        Estimated Size
                      </label>
                      <select
                        value={formData.estimatedSize}
                        onChange={event => setFormData({ ...formData, estimatedSize: event.target.value })}
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
                      onChange={event => setFormData({ ...formData, message: event.target.value })}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-[#DFB257] focus:bg-white text-sm text-[#12161A] focus:outline-none rounded-xs transition-colors"
                    />
                  </div>
                  {submitError && (
                    <p role="alert" className="text-sm text-red-700">
                      We couldn’t submit your inquiry. Please try again.
                    </p>
                  )}
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
    </section>
  );
};
