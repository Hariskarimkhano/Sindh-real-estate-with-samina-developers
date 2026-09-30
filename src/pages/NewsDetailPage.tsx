import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { NEWS_DATA } from '../data/news';
import { ArrowLeft, ArrowRight, ChevronRight, Calendar, Clock, Share2, Check, Copy } from 'lucide-react';

interface NewsDetailPageProps {
  slug: string;
}

export const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ slug }) => {
  const { navigate } = useNavigation();
  const article = NEWS_DATA.find(n => n.slug === slug) || NEWS_DATA[0];
  const [copied, setCopied] = useState(false);

  const relatedArticles = NEWS_DATA.filter(n => n.id !== article.id).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#12161A] text-neutral-400 text-xs py-3 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2">
          <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button onClick={() => navigate('/news')} className="hover:text-white transition-colors">News &amp; Insights</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#D97706] font-semibold truncate max-w-xs">{article.category}</span>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-16 sm:py-24 bg-white text-[#12161A] border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-neutral-500 font-semibold uppercase tracking-wider">
              <span className="text-[#D97706] font-bold">{article.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#12161A] leading-[1.1] text-balance">
              {article.title}
            </h1>

            {/* Author */}
            <div className="flex items-center justify-between pt-4 border-t border-neutral-200 text-xs">
              <div>
                <div className="font-bold text-[#12161A] text-sm">{article.author.name}</div>
                <div className="text-neutral-500">{article.author.title}</div>
              </div>

              {/* Share Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 border border-neutral-200 hover:border-black text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Share'}</span>
                </button>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#12161A] text-white hover:bg-neutral-800 text-xs font-semibold transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-16/9 overflow-hidden bg-neutral-900 border border-neutral-200 shadow-sm">
            <img
              src={article.heroImage}
              alt={article.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Excerpt Lead */}
          <p className="text-lg sm:text-xl font-light text-neutral-800 leading-relaxed italic border-l-2 border-[#D97706] pl-6 py-1">
            &ldquo;{article.excerpt}&rdquo;
          </p>

          {/* Content Paragraphs */}
          <div className="space-y-6 text-neutral-700 text-base leading-relaxed pt-4">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Bottom Back Button */}
          <div className="pt-8 border-t border-neutral-200 flex items-center justify-between">
            <button
              onClick={() => navigate('/news')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-[#D97706] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to News &amp; Insights</span>
            </button>
          </div>
        </div>
      </article>

      {/* Related News */}
      <section className="py-20 bg-[#F8F9FA] text-[#12161A] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#12161A] mb-8">
            RELATED INTELLIGENCE &amp; PERSPECTIVES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => navigate(`/news/${rel.slug}`)}
                className="bg-white border border-neutral-200 hover:border-neutral-400 p-6 flex flex-col justify-between cursor-pointer transition-all"
              >
                <div className="space-y-3">
                  <span className="text-xs text-[#D97706] font-bold uppercase">{rel.category} · {rel.date}</span>
                  <h4 className="font-display font-bold text-base text-[#12161A] hover:text-[#D97706] transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-neutral-600 line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-100 mt-4 flex items-center justify-between text-xs font-bold uppercase text-neutral-900">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D97706]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
