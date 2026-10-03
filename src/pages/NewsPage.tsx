import React, { useState, useMemo } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { NEWS_DATA } from '../data/news';
import { NewsArticle } from '../types';
import { Search, Calendar, Clock, ArrowRight, X } from 'lucide-react';

export const NewsPage: React.FC = () => {
  const { navigate, searchParams } = useNavigation();

  const initialCategory = searchParams.get('category') || 'All';
  const initialYear = searchParams.get('year') || 'All';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedYear, setSelectedYear] = useState(initialYear);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const categories = ['All', 'Reports', 'Innovation', 'Sustainability', 'Safety', 'Projects'];
  const years = ['All', '2026', '2025'];

  const filteredNews = useMemo(() => {
    let results = NEWS_DATA.filter((article: NewsArticle) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matches =
          article.title.toLowerCase().includes(q) ||
          article.excerpt.toLowerCase().includes(q) ||
          article.content.some(c => c.toLowerCase().includes(q));
        if (!matches) return false;
      }
      if (selectedCategory !== 'All') {
        if (article.category.toLowerCase() !== selectedCategory.toLowerCase()) return false;
      }
      if (selectedYear !== 'All') {
        if (!article.date.includes(selectedYear)) return false;
      }
      return true;
    });

    if (sortOrder === 'oldest') {
      results = [...results].reverse();
    }
    return results;
  }, [searchQuery, selectedCategory, selectedYear, sortOrder]);

  return (
    <div className="w-full">
      {/* News Hero */}
      <section className="relative py-24 sm:py-32 bg-[#12161A] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#D97706]">
              <div className="w-2 h-4 bg-[#D97706]" />
              <span>Thought Leadership &amp; Market Intelligence</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
              NEWS &amp; INSIGHTS
            </h1>
            <p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed">
              In-depth research on the Sindhi Real Estate Building Cost Index, jobsite robotics, low-carbon materials, and safety transformation.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px]" />
      </section>

      {/* Filter and Search Bar */}
      <section className="bg-white border-b border-neutral-200 py-6 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search news and insights..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-300 focus:border-[#D97706] text-xs text-[#12161A] focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="px-3 py-2 bg-neutral-50 border border-neutral-300 text-xs text-[#12161A] focus:outline-none"
            >
              {categories.map(c => (
                <option key={c} value={c}>{c === 'All' ? 'All Topics' : c}</option>
              ))}
            </select>

            <select
              value={selectedYear}
              onChange={e => setSelectedYear(e.target.value)}
              className="px-3 py-2 bg-neutral-50 border border-neutral-300 text-xs text-[#12161A] focus:outline-none"
            >
              {years.map(y => (
                <option key={y} value={y}>{y === 'All' ? 'All Years' : y}</option>
              ))}
            </select>

            <select
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value as 'newest' | 'oldest')}
              className="px-3 py-2 bg-neutral-50 border border-neutral-300 text-xs text-[#12161A] focus:outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 sm:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          {filteredNews.length === 0 ? (
            <div className="py-24 text-center bg-white border border-neutral-200 p-8 space-y-4">
              <h3 className="font-display text-xl font-bold uppercase text-[#12161A]">
                No Articles Found
              </h3>
              <p className="text-xs text-neutral-500">
                Try searching for a different keyword or reset filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((article: NewsArticle) => (
                <div
                  key={article.id}
                  onClick={() => navigate(`/news/${article.slug}`)}
                  className="group bg-white border border-neutral-200 hover:border-neutral-400 p-6 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="relative aspect-16/9 overflow-hidden bg-neutral-900">
                      <img
                        src={article.heroImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <span className="text-[#D97706] font-bold uppercase">{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold uppercase tracking-tight text-[#12161A] group-hover:text-[#D97706] transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-neutral-100 mt-6 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900 group-hover:text-[#D97706] transition-colors">
                    <span>READ REPORT</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
