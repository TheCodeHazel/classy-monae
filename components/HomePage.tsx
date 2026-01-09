
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { TClientData } from "@/lib/clients";
import { client_data } from "@/lib/const";
import { ServiceProvider } from "./hooks/useServices";
import Link from "next/link";

 
const HomePage = () => {

  return (
     <ServiceProvider>
    <div className="min-h-screen">
      <Navbar client_data={client_data} />
      <Hero />
      <Services />
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
              Your Perfect <span className="text-event-purple">Bridal Look Awaits!</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              From flawless makeup to stunning hair, we craft your dream bridal style so you shine on your special day.
            </p>
            <Link 
              href="#contact" 
              className="inline-block bg-event-purple hover:bg-event-purple-dark text-white font-medium px-8 py-3 rounded-md transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <Portfolio />
      <Testimonials />
      <About client_data={client_data} />
      <Contact client_data={client_data} />
      <Footer client_data={client_data}  />
    </div>
    </ServiceProvider>
  );
};

export default HomePage;
