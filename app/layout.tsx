import type { Metadata } from 'next'
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit'
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-jakarta'
});

export const metadata: Metadata = {
  title: 'Onyia Okwudili Oliver | SAP Junior Consultant | Enterprise Systems | Cybersecurity Enthusiast | IT Operations',
  description:
    'Professional portfolio of Onyia Okwudili Oliver — SAP Junior Consultant with expertise in SAP S/4HANA (SD), Enterprise Systems, Cybersecurity, and IT Operations. Verified on Credly.',
  keywords: [
    'Onyia Okwudili Oliver',
    'Okwudili Onyia',
    'SAP Junior Consultant',
    'Enterprise Systems',
    'Cybersecurity Enthusiast',
    'IT Operations',
    'SAP S/4HANA',
    'SAP SD Module',
    'ISC2 Certified in Cybersecurity',
    'Cisco Networking Academy',
    'Cobranet Limited',
    'Dangote Group PLC',
    'OPay Blue Ridge MFB',
    'Digital Encode',
    'Credly Verified',
  ],
  authors: [{ name: 'Onyia Okwudili Oliver' }],
  openGraph: {
    title: 'Onyia Okwudili Oliver | SAP Junior Consultant | Enterprise Systems | Cybersecurity Enthusiast | IT Operations',
    description:
      'Professional portfolio and verified credentials for Onyia Okwudili Oliver — SAP S/4HANA, Enterprise Systems, IT Operations, and Cybersecurity.',
    url: 'https://okwudili-onyia-oliver-website.netlify.app',
    siteName: 'Onyia Okwudili Oliver Portfolio',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${jakarta.variable} font-sans antialiased bg-background`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
