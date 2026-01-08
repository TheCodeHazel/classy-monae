
'use client'
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { TClientData } from "@/lib/clients";

const Navbar = ({client_data}:{client_data:TClientData}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isSticky
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className={`text-2xl md:text-3xl font-serif font-bold ${isSticky ? 'text-event-purple' : 'text-white text-shadow'}`}>
          {client_data.logo_alt}
        </a>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className={isSticky ? 'text-event-purple' : 'text-white'} size={24} />
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Services", "Portfolio", "Testimonials", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`${
                isSticky ? "text-gray-800" : "text-white text-shadow"
              } hover:text-event-purple transition-colors`}
            >
              {item}
            </a>
          ))}
          <Button className="bg-event-purple hover:bg-event-purple-dark text-white">
            Get Quote
          </Button>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md py-4 px-6 absolute top-full left-0 w-full animate-fade-in">
          {["Home", "Services", "Portfolio", "Testimonials", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-gray-800 hover:text-event-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="bg-event-purple hover:bg-event-purple-dark text-white w-full mt-4">
            Get Quote
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
