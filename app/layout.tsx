import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'QuoteForge Greenscape',
  description: 'Generate landscaping quotes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
