import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { NEWS_DATA } from '../data/news';
import { Button } from './ui/Button';
import { ScrollReveal, ParallaxImage } from './ui/ScrollReveal';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const { navigate } = useNavigation();
  const featuredArticle = NEWS_DATA[0];
  const secondaryArticles = NEWS_DATA.slice(1, 4);

  return (
    <section className="py-24 sm:py-36 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#B88728]">
                <div className="w-2 h-4 bg-[#DFB257]" />
                <span>Editorial &amp; Intelligence</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1}>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#12161A]">
                NEWS &amp; INSIGHTS
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
                Perspectives on construction market economics, technological disruption, decarbonization, and safety.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={0.3}>
            <Button
              variant="outline"
              size="md"
              showArrow
              onClick={() => navigate('/news')}
              className="self-start md:self-auto"
            >
              VIEW ALL NEWS &amp; REPORTS
            </Button>
          </ScrollReveal>
        </div>

        {/* Featured Editorial Article */}
        <ScrollReveal animation="fade-up" delay={0.2}>
          <div
            onClick={() => navigate(`/news/${featuredArticle.slug}`)}
            className="group bg-white border border-neutral-200/90 hover:border-[#DFB257] overflow-hidden cursor-pointer transition-all duration-400 ease-out hover:shadow-2xl rounded-xs grid grid-cols-1 lg:grid-cols-12 mb-8 hover:-translate-y-1"
          >
            <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[420px] overflow-hidden bg-neutral-950">
              <ParallaxImage
                src={featuredArticle.heroImage}
                alt={featuredArticle.title}
                speed={15}
                zoomOnHover
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 bg-gradient-to-r from-[#DFB257] to-[#C99E44] text-[#12161A] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-xs shadow-md">
                Featured Insight
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                  <span className="text-[#B88728] font-bold uppercase">{featuredArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredArticle.date}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#12161A] group-hover:text-[#B88728] transition-colors leading-snug">
                  {featuredArticle.title}
                </h3>

                <p className="text-sm text-neutral-600 font-light leading-relaxed line-clamp-3">
                  {featuredArticle.excerpt}
                </p>

                <div className="text-xs text-neutral-500 font-medium">
                  By {featuredArticle.author.name}, {featuredArticle.author.title}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900 group-hover:text-[#B88728] transition-colors">
                <span>READ FULL REPORT</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Secondary Articles Grid with Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {secondaryArticles.map((article, idx) => (
            <ScrollReveal
              key={article.id}
              animation="fade-up"
              delay={0.1 * idx}
              className="h-full"
            >
              <div
                onClick={() => navigate(`/news/${article.slug}`)}
                className="group h-full bg-white border border-neutral-200/90 hover:border-[#DFB257] p-6 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-400 ease-out hover:shadow-xl hover:-translate-y-1 rounded-xs"
              >
                <div className="space-y-4">
                  <div className="relative aspect-16/9 overflow-hidden bg-neutral-950 rounded-xs">
                    <ParallaxImage
                      src={article.heroImage}
                      alt={article.title}
                      speed={10}
                      zoomOnHover
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                    <span className="text-[#B88728] font-bold uppercase">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                  </div>

                  <h4 className="font-display text-base font-bold uppercase tracking-tight text-[#12161A] group-hover:text-[#B88728] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h4>

                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed font-light">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-100 mt-6 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900 group-hover:text-[#B88728] transition-colors">
                  <span>READ MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
