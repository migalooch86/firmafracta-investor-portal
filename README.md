# FirmaFracta Investor Portal

Frontend application for the FirmaFracta platform - invest in research articles and earn usage-based dividends.

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Running FirmaFracta backend API (default: http://localhost:5004)

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
frontend/
├── app/                    # Next.js 14 app directory
│   ├── dashboard/         # Dashboard page
│   ├── marketplace/       # Article marketplace
│   ├── portfolio/         # User portfolio
│   ├── articles/[id]/     # Article detail pages
│   ├── compliance/        # Compliance center
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   ├── Layout/           # Header, Footer, Sidebar
│   ├── Cards/            # Article, Metric, Dividend cards
│   ├── Charts/           # Performance, Usage charts
│   ├── Tables/           # Holdings, Dividend tables
│   └── Modals/           # Buy shares, Transfer modals
├── lib/                   # Utilities and API client
│   ├── api.ts            # Backend API client
│   └── utils.ts          # Helper functions
└── types/                 # TypeScript type definitions
    └── index.ts          # Core domain types
```

## Features

- **Dashboard**: Portfolio overview with performance charts
- **Marketplace**: Browse and purchase article shares
- **Portfolio**: Manage holdings and view earnings
- **Article Details**: Deep dive into usage metrics and dividends
- **Compliance**: KYC verification and accreditation management

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **HTTP Client**: Axios
- **Date Utilities**: date-fns

## Development

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Lint code
npm run lint
```

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:5004
```

## API Integration

The frontend connects to the FirmaFracta backend API at `localhost:5004`. Key endpoints:

- `GET /articles` - Browse articles
- `GET /portfolio/{wallet}` - User holdings
- `POST /articles/{id}/shares/purchase` - Buy shares
- `GET /usage-dividends/epochs` - Dividend history
- `GET /compliance/status/{wallet}` - Compliance status

See `lib/api.ts` for full API client.

## Design System

- **Colors**: Primary blue (#0066CC), Success green (#00A86B), Error red (#E63946)
- **Typography**: Inter font family
- **Spacing**: 4px base scale (xs, sm, md, lg, xl, 2xl)
- **Breakpoints**: Mobile < 640px, Tablet 640-1024px, Desktop > 1024px

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

Proprietary - FirmaFracta Platform
