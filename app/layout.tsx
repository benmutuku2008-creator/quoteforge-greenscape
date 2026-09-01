import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Greenscape Pro - QuoteForge',
  description: 'AI Proposal Generator',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f8faf8] antialiased">{children}</body>
    </html>
  )
}
