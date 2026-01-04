import './globals.css'

export const metadata = {
  title: 'FirmaFracta - Investor Portal',
  description: 'Fractional Ownership and Dividend Distribution for Research Articles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
