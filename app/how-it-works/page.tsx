export default function HowItWorksPage() {
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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          How FirmaFracta Works
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          A simple explanation of fractional research ownership and usage-based dividends
        </p>

        {/* The Pizza Analogy */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Think of an Article as a Pizza
          </h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Instead of the author getting paid once and the publisher keeping the rest forever, 
            we slice the pizza into shares:
          </p>

          {/* The 4 Steps */}
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Article Published</h3>
              </div>
              <p className="text-gray-600">
                Author, publisher, and reviewers each get some shares automatically (their "pizza slices")
              </p>
            </div>

            {/* Step 2 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Investors Buy Shares</h3>
              </div>
              <p className="text-gray-600">
                Investors can buy additional slices (fractional ownership). Money from share sales goes to authors and publishers upfront
              </p>
            </div>

            {/* Step 3 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Article Gets Used</h3>
              </div>
              <p className="text-gray-600">
                People read it, download it, cite it, apply it. Each use generates revenue (like a tiny payment)
              </p>
            </div>

            {/* Step 4 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Dividends Paid Quarterly</h3>
              </div>
              <p className="text-gray-600">
                Revenue from usage is split among all shareholders based on their slice size. Everyone who owns a slice gets paid
              </p>
            </div>
          </div>
        </div>

        {/* Stakeholder Incentives */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Everyone Loves This
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Authors */}
            <div className="border-2 border-blue-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="text-2xl mb-3">✍️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Authors</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Gets:</strong> Ongoing royalties every time work is used
              </p>
              <p className="text-sm text-gray-600">
                <strong>Incentivized to:</strong> Write better, more impactful articles
              </p>
            </div>

            {/* Publishers */}
            <div className="border-2 border-green-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="text-2xl mb-3">🏢</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Publishers</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Gets:</strong> New revenue stream (share sales + platform fees)
              </p>
              <p className="text-sm text-gray-600">
                <strong>Incentivized to:</strong> Promote articles to maximize usage
              </p>
            </div>

            {/* Investors */}
            <div className="border-2 border-purple-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="text-2xl mb-3">💼</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Investors</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Gets:</strong> Dividend payments tied to article popularity
              </p>
              <p className="text-sm text-gray-600">
                <strong>Incentivized to:</strong> Pick articles that will be widely used
              </p>
            </div>

            {/* Readers */}
            <div className="border-2 border-yellow-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="text-2xl mb-3">📖</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Readers</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Gets:</strong> Optional—can buy shares in articles they love, earn dividends
              </p>
              <p className="text-sm text-gray-600">
                <strong>Incentivized to:</strong> Support research they care about
              </p>
            </div>
          </div>
        </div>

        {/* The Key Insight */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">The Key Insight</h2>
          <p className="text-lg leading-relaxed">
            Everyone wins more money when the article is actually <strong>used</strong>. 
            No one gets paid for articles sitting on a shelf.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:invest@firmafracta.com?subject=Learn%20More"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Learn More About Investing
          </a>
        </div>
      </main>
    </div>
  );
}
