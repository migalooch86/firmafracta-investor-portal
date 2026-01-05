
'use client';
import React from 'react';

const stakeholders = [
  {
    title: 'Authors',
    description:
      'Earn ongoing royalties/dividends from their work, gain visibility, and benefit from transparent, fair recognition of impact.',
    image: '/stakeholders/authors.svg',
  },
  {
    title: 'Reviewers',
    description:
      'Get paid promptly for reviews, with transparent tracking and recognition for quality contributions.',
    image: '/stakeholders/reviewers.svg',
  },
  {
    title: 'Editors/Publishers',
    description:
      'Attract more and better submissions, generate new revenue streams, and access real-time analytics to improve journal quality and reputation.',
    image: '/stakeholders/editors.svg',
  },
  {
    title: 'Funders',
    description:
      'Gain real-time, transparent tracking of research impact, automated compliance, and clear ROI on grant spending via dividends.',
    image: '/stakeholders/funders.svg',
  },
  {
    title: 'Investors',
    description:
      'Access a new, uncorrelated yield asset class with transparent, data-driven returns and liquidity.',
    image: '/stakeholders/investors.svg',
  },
  {
    title: 'FirmaFracta',
    description:
      'Pioneers a paradigm shift, earns a sustainable share of all transactions, powers a growing ecosystem, and becomes the infrastructure for the research economy.',
    image: '/logo.svg',
  },
];

const StakeholderCarousel = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-slate-900">
          Why Stakeholders Love FirmaFracta
        </h2>
        <div className="overflow-x-auto flex space-x-6 pb-4 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-slate-800 snap-x">
          {stakeholders.map((s, idx) => (
            <div
              key={s.title}
              className="min-w-[320px] max-w-xs bg-slate-900 border border-slate-700 rounded-2xl shadow-lg flex-shrink-0 flex flex-col items-center p-7 text-center transition-transform duration-200 hover:scale-105 snap-center"
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-900 to-cyan-900 border-2 border-blue-700 shadow">
                <img src="/logo.svg" alt="FirmaFracta Logo" className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white tracking-tight">{s.title}</h3>
              <p className="text-slate-300 text-base leading-relaxed font-medium">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StakeholderCarousel;
