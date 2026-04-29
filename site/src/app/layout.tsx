import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Sandeep Kolte — AI Systems Builder, Developer Educator',
    template: '%s | Sandeep Kolte',
  },
  description:
    'Enterprise Architect and AI Systems Builder. I build production AI systems and teach developers, nonprofits, and students how to design, scale, and govern them.',
  keywords: [
    'AI systems architect',
    'LangGraph',
    'multi-agent systems',
    'developer educator',
    'enterprise AI',
    'HIPAA AI',
    'nonprofit AI',
    'pediatric cancer',
    'CareBORN',
  ],
  authors: [{ name: 'Sandeep Kolte' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://skolte.github.io',
    siteName: 'Sandeep Kolte',
    title: 'Sandeep Kolte — AI Systems Builder, Developer Educator',
    description:
      'Enterprise Architect and AI Systems Builder. Building production AI systems and teaching others to design, scale, and govern them.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sandeep Kolte — AI Systems Builder',
    description: 'Enterprise Architect. AI Systems Builder. Developer Educator.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
