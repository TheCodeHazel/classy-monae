import HomePage from "@/components/HomePage";
import Image from "next/image";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Classy Monaè Beauty - Bridal Makeup & Hair Services in Texas',
  description: 'Luxury bridal makeup, hair styling, party glam, and consultations in Plano, Dallas, DFW, Austin, Houston & East Texas. Look radiant on your special day!',
  keywords: [
    "Bridal Makeup Texas",
    "Bridal Hair Plano",
    "Wedding Makeup Dallas",
    "Party Makeup DFW",
    "Prom Makeup Houston",
    "Hair Styling Austin",
    "Beauty Services East Texas",
    "Luxury Makeup Services",
    "Professional Hair Stylist",
    "Makeup Consultation Texas"
  ],
  authors: [{ name: "Monaè" }],
  applicationName: 'Classy Monaè Beauty',
  alternates: {
    canonical: 'https://classymonae.beauty'
  },
  openGraph: {
    title: 'Classy Monaè Beauty - Bridal & Party Makeup in Texas',
    description: 'Offering luxury bridal makeup, hair styling, party glam, and consultations across Plano, Dallas, DFW, Austin, Houston & East Texas.',
    type: 'website',
    siteName: "Classy Monaè Beauty",
    locale: "en_US",
    url: "https://classymonae.beauty",
    images: [
      {
        url: 'https://classymonae.beauty/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Classy Monaè Beauty Services',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Classy Monaè Beauty - Bridal Makeup & Hair Services',
    description: 'Luxury bridal makeup, hair styling, and party glam in Texas. Book your appointment today!',
    creator: '@beautybyclassymonae',
    images: ['https://classymonae.beauty/images/logo.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png', 
    shortcut: '/images/logo.png', 
  },
  robots: 'index, follow',
  themeColor: '#FFFFFF',
};


export default function Home() {
  return (
    <HomePage/>
  );
}
