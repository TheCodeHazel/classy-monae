
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Creating <span className="text-event-gold">Unforgettable</span> Bridal Elegance
          </h1>
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
    </section>
  );
};

export default Hero;
