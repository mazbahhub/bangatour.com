import React from 'react';
import { BlogPost } from '../types';
import { articles } from '../data/articles';
import { ArrowLeft, ArrowRight, BookOpen, Clock, Calendar, User, Share2 } from 'lucide-react';

interface BlogDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ slug, onNavigate }) => {
  const article = articles.find((a) => a.slug === slug) || articles[0];
  const relatedArticles = articles.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      {/* Article Hero */}
      <div className="relative min-h-[50vh] flex items-end bg-[#071912] text-white overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091D16] via-[#091D16]/70 to-black/35" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32 w-full">
          <button
            onClick={() => onNavigate('/blog')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]/80 hover:text-white mb-6 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Stories</span>
          </button>

          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C59B27] font-semibold mb-3">
            <span>{article.category}</span>
            <span>·</span>
            <span>{article.readTime}</span>
            <span>·</span>
            <span>{article.publishDate}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 text-xs text-stone-300">
            <span>By <strong>{article.author.name}</strong></span>
            <span>·</span>
            <span>{article.author.role}</span>
          </div>
        </div>
      </div>

      {/* Article Narrative Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Lead Excerpt */}
        <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm mb-10 text-base sm:text-lg text-stone-800 font-serif italic leading-relaxed border-l-4 border-l-[#C59B27]">
          "{article.excerpt}"
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-10 text-stone-800 leading-relaxed text-base font-light">
          {article.content.map((section, idx) => (
            <div key={idx} className="space-y-4">
              {section.heading && (
                <h2 className="font-serif text-2xl font-bold text-[#0F2F24] pt-4">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed text-stone-700">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-stone-200 flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold mr-2">Tags:</span>
          {article.tags.map((tag, idx) => (
            <span key={idx} className="text-xs bg-stone-100 text-stone-600 px-3 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Stories */}
        <div className="mt-16 pt-10 border-t border-stone-200">
          <h3 className="font-serif text-xl font-bold text-[#0F2F24] mb-6">
            Continue Reading
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onNavigate(`/blog/${rel.slug}`)}
                className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <span className="text-[10px] text-[#C59B27] uppercase tracking-wider font-semibold block mb-1">
                  {rel.category}
                </span>
                <h4 className="font-serif text-base font-bold text-[#0F2F24] group-hover:text-[#0D5C58] transition-colors leading-snug">
                  {rel.title}
                </h4>
                <p className="text-xs text-stone-500 font-light line-clamp-2 mt-2">
                  {rel.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
