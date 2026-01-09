
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: "url('/images/1e4e0ced-be58-4b96-a864-b7196d8ae18b.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Creating <span className="text-event-gold">Unforgettable</span> Bridal Elegance
          </h2>
          <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto">
            From intimate weddings to grand celebrations, Classy Monaè Beauty brings your bridal vision to life with flawless makeup, perfect hair, and meticulous attention to every detail.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={'/#services'} className="bg-event-purple hover:bg-event-purple-dark text-white px-8 py-3 hover:bg-white hover:text-event-purple text-lg">
              Explore Our Services
            </Link>
            <Link href={'/#testimonials'} className="text-white flex gap-2 items-center  bg-event-purple hover:bg-white hover:text-event-purple px-8 py-3 text-lg">
              <span>View Work</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
 
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <div className="sr-only">
  <h1>Classy Monaè Beauty — Bridal Makeup & Hair Services in Texas</h1>

  <p>Classy Monaè Beauty provides professional bridal makeup, hair styling, party makeup, prom makeup, and wedding glam services. We proudly serve Plano, Dallas, DFW, Austin, Houston, and East Texas, offering luxury makeup and hairstyling for brides, bridal parties, and special events.</p>

  <h2>Our Professional Services</h2>

  <h3>Individual Makeup & Hair Services</h3>
  <ul>
    <li>Full Glam Makeup — 45 min — $150</li>
    <li>Hairstyling — 25 min — $95+</li>
    <li>Prom Makeup — 1h 30min — $125</li>
    <li>Photo Shoot Hair & Makeup — 2h — $250</li>
    <li>Sleep Angels Styling — 3h — $200 (Mortuary makeup, hair & nails)</li>
  </ul>

  <h3>Bridal Services</h3>
  <ul>
    <li>Bridal Makeup — 45 min — $150+</li>
    <li>Bridal Airbrush Makeup — 1h — $150</li>
    <li>Bride Hair and Makeup — 1h — $300</li>
  </ul>

  <h3>Bridal Consultations</h3>
  <ul>
    <li>Bridal Makeup Consultation — 1h 30min — $150</li>
    <li>Hair and Makeup Bridal Consultation — 2h — $300</li>
    <li>Bridal Hair Consultation — 1h — $150</li>
    <li>Phone Consultation — 10 min — Free</li>
  </ul>

  <h3>Bridal Party Services</h3>
  <ul>
    <li>Bridal Party Makeup — 30 min — $125</li>
    <li>Bridal Party Hair — 30 min — $95</li>
    <li>Bridal Party Hair and Makeup — 2h — $220</li>
    <li>Let's Elope (Hair & Makeup for Bride) — 30 min — $300</li>
  </ul>

  <h3>Wedding Packages</h3>
  <ul>
    <li>Traditional Wedding Package — 3h 30min — $600</li>
    <li>Classy Monaè Package (Bride + 4 attendees) — 5h — $650+</li>
    <li>Diamond Package — 4h 5min — $1200+</li>
  </ul>

  <h3>Education & Classes</h3>
  <ul>
    <li>1 on 1 Makeup Class — 1h — $50/hour (does not include makeup kit)</li>
  </ul>

  <h2>Serving Cities Across Texas</h2>
  <p>We provide our makeup, hair, and bridal services throughout Texas, including Plano, Dallas, DFW Metroplex, Austin, Houston, and East Texas. Our team specializes in creating luxurious bridal looks, prom glam, party makeup, and professional hairstyling for all occasions.</p>

  <h2>Contact Classy Monaè Beauty</h2>
  <p>Phone: +1 214-957-5407 | Email: info@classymonae.beauty | Website: <a href="https://classymonae.beauty">classymonae.beauty</a></p>
</div>

    </section>
  );
};

export default Hero;
