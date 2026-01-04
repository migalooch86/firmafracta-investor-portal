export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">F</span>
              </div>
              <span className="text-xl font-bold text-gray-900">FirmaFracta</span>
            </a>
            <ul className="hidden md:flex items-center space-x-8">
              <li><a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a></li>
              <li><a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a></li>
              <li><a href="#login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="mt-16 py-20 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                The Paradigm is as dead as Gutenberg.
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Introducing Fractional Ownership and Dividend Distribution for Research Articles.
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Get Started
                </a>
                <a href="#features" className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-[4/3] bg-black/20 rounded-xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <span className="text-white/50 text-sm">Chart Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose FirmaFracta</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📊', title: 'Real-Time Analytics', desc: 'Monitor your investments with live data and comprehensive analytics dashboards.' },
              { icon: '🔒', title: 'Bank-Level Security', desc: 'Your data is protected with enterprise-grade encryption and security protocols.' },
              { icon: '📱', title: 'Mobile Access', desc: 'Manage your portfolio anywhere, anytime with our responsive platform.' },
              { icon: '📈', title: 'Performance Tracking', desc: 'Track ROI, portfolio growth, and detailed investment performance metrics.' },
              { icon: '💼', title: 'Portfolio Diversification', desc: 'Visualize asset allocation and optimize your investment strategy.' },
              { icon: '📄', title: 'Detailed Reports', desc: 'Generate comprehensive reports and export data for tax purposes.' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">About FirmaFracta</h2>
              <p className="text-lg text-gray-600 mb-6">
                FirmaFracta is a fintech platform pioneering fractional ownership and usage-based dividend distribution for academic research. We enable researchers, publishers, and investors to share in the economic value of high-impact articles through transparent, blockchain-backed revenue sharing.
              </p>
              <ul className="space-y-3">
                {[
                  'Blockchain-Backed Revenue Sharing',
                  'Smart Contract Automation',
                  'Full KYC/AML/Accreditation Compliance',
                  'Real-World Usage Metrics'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-[5/6] bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Portfolio Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">FirmaFracta</h4>
              <p className="text-gray-400">Empowering investors with intelligent portfolio management solutions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 FirmaFracta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
