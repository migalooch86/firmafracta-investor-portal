import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FirmaFracta Investor Portal',
  description: 'Invest in research articles and earn usage-based dividends',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Implement wallet context
  const walletAddress = '0x7a4b...c91f';

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header walletAddress={walletAddress} />
        <main>{children}</main>
      </body>
    </html>
  );
}
