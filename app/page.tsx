'use client';
import { useState } from 'react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <a href="/" className="flex items-center space-x-2 sm:space-x-3">
              <img src="/logo.svg" alt="FirmaFracta Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-lg sm:text-xl font-semibold text-white tracking-tight">FirmaFracta</span>
            </a>
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-8">
              <li><a href="#home" className="text-slate-300 hover:text-white font-medium transition-colors">Home</a></li>
              <li><a href="#features" className="text-slate-300 hover:text-white font-medium transition-colors">Services</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-white font-medium transition-colors">About</a></li>
              <li><a href="#login" className="px-6 py-2.5 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors rounded">Investor Login</a></li>
            </ul>
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              <ul className="space-y-3">
                <li><a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-white font-medium transition-colors">Home</a></li>
                <li><a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-white font-medium transition-colors">Services</a></li>
                <li><a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-white font-medium transition-colors">About</a></li>
                <li><a href="#login" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-6 bg-blue-600 text-white text-center font-medium hover:bg-blue-700 transition-colors rounded">Investor Login</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative mt-16 sm:mt-20 py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6">
                <span className="text-blue-400 text-xs sm:text-sm font-medium">Institutional-Grade Investment Platform</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white">
                The New Asset Class for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Research Impact</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                Invest in groundbreaking research through fractional ownership. Earn quarterly dividends based on real-world article performance and citations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#about" className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-center font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 rounded">
                  Learn More
                </a>
                <a href="#features" className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-600 text-white text-center font-semibold hover:bg-slate-800 transition-colors rounded">
                  Our Services
                </a>
              </div>
              <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-slate-700">
                <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-200 italic leading-relaxed">
                  FirmaFracta unlocks an entirely new tranche of scientific funding and return, enabling innovative research to thrive through sustainable, incentive-aligned support for all stakeholders.
                </blockquote>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-full max-w-md">
                <img src="/portfolio-dashboard.svg" alt="Portfolio Analytics Dashboard" className="w-full h-auto shadow-2xl rounded-2xl border border-slate-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-block px-3 sm:px-4 py-1 bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">Our Services</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900">Investment Solutions</h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">Institutional-grade platform for fractional ownership of academic research assets</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { 
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                title: 'Portfolio Management', 
                desc: 'Institutional-grade tools to track holdings, dividends, and performance across your academic research investments.' 
              },
              { 
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
                title: 'Regulatory Compliance', 
                desc: 'Full KYC/AML compliance and accredited investor verification ensuring secure, compliant transactions.' 
              },
              { 
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
                title: 'Performance Analytics', 
                desc: 'Real-time metrics tracking article citations, downloads, and usage to forecast dividend returns.' 
              },
              { 
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                title: 'Asset Allocation', 
                desc: 'Diversify across disciplines, publishers, and impact factors to optimize risk-adjusted returns.' 
              },
              { 
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: 'Quarterly Dividends', 
                desc: 'Transparent, blockchain-verified dividend distribution based on actual article usage and performance.' 
              },
              { 
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
                title: 'Investment Reports', 
                desc: 'Detailed quarterly statements, tax documents, and comprehensive portfolio analysis.' 
              },
            ].map((feature, i) => (
              <div key={i} className="group relative bg-white p-6 sm:p-8 lg:p-10 hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-300 border border-slate-200/60 hover:border-blue-200 rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:to-transparent transition-all duration-300 rounded-lg"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-6 bg-slate-50 text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-900">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block px-3 sm:px-4 py-1 bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">About FirmaFracta</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-slate-900">Institutional Platform for Academic Research Assets</h2>
          </div>
          
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12 text-center">
            <p>
              FirmaFracta converts published research into revenue-generating digital assets. Each article becomes a blockchain-secured token, fractionalized into 100 shares, with configurable ownership distributed to funders, authors, reviewers, publishers, and investors. Smart contracts track real-world usage—citations, downloads, institutional access—and distribute quarterly dividends proportionally. Full KYC/AML compliance ensures regulatory adherence; transparent on-chain records provide immutable audit trails.
            </p>
            <h3 className="text-xl font-bold text-slate-900 pt-4">Why It Matters:</h3>
            <p>
              Research generates significant long-term value, but current models do not capture it. FirmaFracta enables continuous value capture: authors earn lifetime royalties from their work's ongoing impact, reviewers receive ownership stakes for their contributions, publishers access new revenue streams from existing catalogs, and accredited investors gain exposure to high-impact research as a trackable asset class. The platform transforms research economics from one-time transactions into usage-based value sharing—ensuring all contributors benefit as knowledge advances.
            </p>
          </div>
          
          <ul className="mt-6 sm:mt-8 space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-600 max-w-4xl mx-auto mb-12 sm:mb-16">
            <li className="flex items-start justify-center">
              <span className="text-blue-600 mr-2 sm:mr-3 font-bold flex-shrink-0">✓</span>
              <span className="text-left">SEC-compliant Reg D/Reg S security token framework with full KYC/AML</span>
            </li>
            <li className="flex items-start justify-center">
              <span className="text-blue-600 mr-2 sm:mr-3 font-bold flex-shrink-0">✓</span>
              <span className="text-left">Quarterly dividend distributions from verified licensing and usage revenue</span>
            </li>
            <li className="flex items-start justify-center">
              <span className="text-blue-600 mr-2 sm:mr-3 font-bold flex-shrink-0">✓</span>
              <span className="text-left">Diversified portfolios across 50+ research disciplines and impact tiers</span>
            </li>
            <li className="flex items-start justify-center">
              <span className="text-blue-600 mr-2 sm:mr-3 font-bold flex-shrink-0">✓</span>
              <span className="text-left">Real-time performance tracking via citation metrics and institutional access data</span>
            </li>
            <li className="flex items-start justify-center">
              <span className="text-blue-600 mr-2 sm:mr-3 font-bold flex-shrink-0">✓</span>
              <span className="text-left">Blockchain-verified ownership records with transparent transaction history</span>
            </li>
            <li className="flex items-start justify-center">
              <span className="text-blue-600 mr-2 sm:mr-3 font-bold flex-shrink-0">✓</span>
              <span className="text-left">Institutional-grade custody and regulatory compliance infrastructure</span>
            </li>
          </ul>
          
          {/* All Three Images Vertically Aligned */}
          <div className="space-y-8 sm:space-y-12 max-w-3xl mx-auto">
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xl">
                <img src="/academic-index-fund.svg" alt="Academic Index Fund Diversification" className="w-full h-auto" />
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xl">
                <img src="/funder-dashboard.svg" alt="Funder ROI Dashboard" className="w-full h-auto" />
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xl">
                <img src="/reviewer-wallet.svg" alt="Reviewer Earnings Wallet" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <img src="/logo.svg" alt="FirmaFracta" className="w-7 h-7 sm:w-8 sm:h-8" />
                <h4 className="text-lg sm:text-xl font-bold">FirmaFracta</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">Institutional investment platform for academic research assets. SEC-compliant security tokens with quarterly dividend distributions.</p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#features" className="text-slate-400 hover:text-white transition-colors">Investment Solutions</a></li>
                <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Compliance</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Regulatory Framework</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Risk Disclosure</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <div className="text-center text-slate-400 text-sm">
              <p className="mb-2">&copy; 2026 FirmaFracta. All rights reserved.</p>
              <p className="text-xs text-slate-500">Securities offered through registered broker-dealers. Investment advisory services provided by SEC-registered investment advisers. Past performance does not guarantee future results.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
