import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">F</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">FirmaFracta</span>
            </div>
            <div className="flex gap-6">
              <Link 
                href="/how-it-works"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                How It Works
              </Link>
              <Link 
                href="/dashboard"
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Portal
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            FirmaFracta
          </h1>
          <p className="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Fractional ownership and dividend distribution for research articles
          </p>
          
          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Invest in Research</h3>
              <p className="text-gray-600">Purchase fractional shares of high-impact academic articles</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-3">💰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Earn Dividends</h3>
              <p className="text-gray-600">Receive usage-based payouts as articles generate value</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliant & Secure</h3>
              <p className="text-gray-600">Full KYC/AML compliance with blockchain transparency</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:invest@firmafracta.com?subject=Investment%20Inquiry"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Request Access
            </a>
            <Link
              href="/how-it-works"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-blue-600"
            >
              Learn How It Works
            </Link>
            <Link
              href="/dashboard"
              className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              View Demo Portal
            </Link>
          </div>

          {/* Footer Info */}
          <div className="mt-16 text-gray-600 text-sm">
            <p className="mb-2">Platform launching Q1 2026</p>
            <p>© 2026 FirmaFracta. Patent Pending.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
