import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sheku Foryoh | Youth Leader & Civic Advocate',
  description:
    'Sheku Foryoh — Sierra Leonean youth leader, civic advocate, and founder of YACAP. Over a decade of national service in youth governance, digital engagement, and community development.',
  keywords: [
    'Sheku Foryoh',
    'youth leader Sierra Leone',
    'YACAP International',
    'U-Report Sierra Leone',
    'National Youth Council',
    'APC youth Sierra Leone',
    'youth governance Africa',
  ],
  openGraph: {
    title: 'Sheku Foryoh | Youth Leader & Civic Advocate',
    description:
      'Over a decade of national service in youth governance, digital engagement, and community development.',
    siteName: 'Sheku Foryoh',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sheku Foryoh | Youth Leader & Civic Advocate',
    description:
      'Over a decade of national service in youth governance, digital engagement, and community development.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} root-html`}
    >
      <body className="root-body">
        <Header />
        <main className="root-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
