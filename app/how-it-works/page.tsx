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
          NFT-powered fractional ownership with usage-based dividends
        </p>

        {/* The Process */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The Process
          </h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Every published article becomes a revenue-generating asset with fractional ownership:
          </p>

          {/* The 4 Steps */}
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Article Published → NFT Minted</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>
                  <strong>When an article is published:</strong>
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>NFT Created:</strong> A unique blockchain token is minted representing the article (Token ID = DOI)</li>
                  <li><strong>100 Shares Issued:</strong> The NFT is fractionalized into 100 equal shares at $150/share ($15,000 valuation)</li>
                  <li><strong>Automatic Allocation</strong> (default split, customizable per publisher):
                    <ul className="list-circle ml-6 mt-2 space-y-1">
                      <li>Authors: 35 shares (35%) - Instantly transferred to author wallet</li>
                      <li>Peer Reviewers: 10 shares (10%) - Split among reviewers</li>
                      <li>Publisher: 15 shares (15%) - Allocated to publisher treasury</li>
                      <li>Platform (FirmaFracta): 10 shares (10%) - Sustainability & operations</li>
                      <li>Investors: 30 shares (30%) - Available for purchase ($4,500 total)</li>
                    </ul>
                  </li>
                </ul>
                <p className="mt-3 text-sm bg-blue-50 p-3 rounded">
                  <strong>💡 Key:</strong> Authors and reviewers get shares immediately at publication - no purchase required. 
                  Publishers can negotiate custom allocations (e.g., ACS might request 20%, PLOS might take 5%).
                  All ownership recorded on blockchain.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Investors Purchase Shares</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>
                  Investors browse articles on the FirmaFracta marketplace and purchase shares:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>30 shares available per article at $150/share ($4,500 total)</li>
                  <li>Purchase requires KYC/AML compliance verification</li>
                  <li>Share sales revenue distributed: 70% to authors, 30% to publisher</li>
                  <li>All transactions recorded on blockchain for transparency</li>
                </ul>
                <p className="mt-3 text-sm bg-blue-50 p-3 rounded">
                  <strong>Example:</strong> If all 30 shares sell at $150/share ($4,500 total), proceeds distributed: 70% to authors ($3,150), 30% to publisher ($1,350).
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Usage Tracked & Scored</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>
                  Publishers report monthly usage data to FirmaFracta. Each event type has a weighted score:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Abstract View:</strong> 1 point</li>
                  <li><strong>Full Download:</strong> 3 points</li>
                  <li><strong>Citation:</strong> 5 points</li>
                  <li><strong>Redemption (paid access):</strong> 8 points</li>
                </ul>
                <p className="mt-3">
                  Usage scores are normalized across all articles to determine each article's share of the dividend pool.
                </p>
                <p className="mt-3 text-sm bg-blue-50 p-3 rounded">
                  <strong>Example:</strong> Article with 1,000 views, 200 downloads, 50 citations = 1,000 + 600 + 250 = 1,850 points
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Quarterly Dividends Distributed</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>
                  Every quarter, FirmaFracta allocates the dividend pool based on usage scores:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Total dividend pool distributed proportionally to article performance</li>
                  <li>Each article's dividend split among all shareholders by ownership %</li>
                  <li>Payouts sent via blockchain smart contract (transparent & auditable)</li>
                  <li>Default split: Authors 35%, Reviewers 10%, Publisher 15%, Platform 10%, Investors 30%</li>
                </ul>
                <p className="mt-3 text-sm bg-blue-50 p-3 rounded">
                  <strong>Example:</strong> Article earns $1,000 in quarterly dividends →<br/>
                  Authors (35%): $350 | Reviewers (10%): $100 | Publisher (15%): $150 | Platform (10%): $100 | Investors (30%): $300
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stakeholder Incentives */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Everyone Benefits
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Authors */}
            <div className="border-2 border-blue-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="text-2xl mb-3">✍️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Authors</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Gets:</strong> 35% shares + ongoing royalties from every citation and download
              </p>
              <p className="text-sm text-gray-600">
                <strong>Incentivized to:</strong> Write impactful, widely-cited research
              </p>
            </div>

            {/* Reviewers */}
            <div className="border-2 border-purple-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="text-2xl mb-3">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Peer Reviewers</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Gets:</strong> 10% shares for review work + ongoing dividends
              </p>
              <p className="text-sm text-gray-600">
                <strong>Incentivized to:</strong> Provide thorough, high-quality peer review
              </p>
            </div>

            {/* Publishers */}
            <div className="border-2 border-green-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="text-2xl mb-3">🏢</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Publishers</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Gets:</strong> 15% shares (customizable) + new revenue stream from share sales
              </p>
              <p className="text-sm text-gray-600">
                <strong>Incentivized to:</strong> Promote articles to maximize usage and dividends
              </p>
            </div>

            {/* Investors */}
            <div className="border-2 border-yellow-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="text-2xl mb-3">💼</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Investors</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Gets:</strong> 30% shares + quarterly dividend payments tied to article performance
              </p>
              <p className="text-sm text-gray-600">
                <strong>Incentivized to:</strong> Pick high-impact articles that will be widely used
              </p>
            </div>
          </div>
        </div>

        {/* The Key Insight */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">The Key Insight</h2>
          <p className="text-lg leading-relaxed">
            Everyone earns more when the article is actually <strong>used</strong> and <strong>cited</strong>. 
            No one gets paid for articles sitting on a shelf. Impact = Income.
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
