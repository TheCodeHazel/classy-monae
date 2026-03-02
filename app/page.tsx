import HomePage from "@/components/HomePage";
import Image from "next/image";

import type { Metadata } from 'next'
export metadata:Metadata = {title:"Preview Expire"}
 const _metadata: Metadata = {
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
        url: '/images/ec5f20ac-7d96-406c-90a0-9f514b5e6aa5.jpeg',
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
    images: ['/images/ec5f20ac-7d96-406c-90a0-9f514b5e6aa5.jpeg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png', 
    shortcut: '/logo.png', 
  },
  robots: 'index, follow',
  themeColor: '#FFFFFF',
};

export default function Home() {
  return (
   <div className="min-h-screen bg-white flex items-center justify-center">

      <div className="relative w-[360px] bg-black text-white rounded-2xl shadow-2xl p-8 text-center transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
 

        <h3 className="mt-6 text-xl font-semibold tracking-wide">
          Classy Monae landing page preview is expire
        </h3>

        <a
          href="https://codehazel.com/#contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-2.5 bg-white text-black text-sm font-medium rounded-lg transition hover:bg-gray-200"
        >
          Contact
        </a>

        <div className="mt-10 pt-5 border-t border-white/10 text-xs text-gray-400">
          Developed by{" "}
          <a
            href="https://codehazel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            CodeHazel
          </a>
        </div>

      </div>

    </div>
  );
}
function Homes() {
  return (
    <HomePage/>
  );
}
