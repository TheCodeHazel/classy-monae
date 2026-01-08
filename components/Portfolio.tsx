
'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Bridal Makeup", "Bridal Hair", "Pre-Wedding Trials"];

const portfolioItems = [
  {
    id: 1,
    title: "Elegant Garden Wedding",
    category: "Bridal Makeup",
    image: "/images/1e4e0ced-be58-4b96-a864-b7196d8ae18b.jpeg",
  },
  {
    id: 2,
    title: "Annual Tech Conference",
    category: "Pre-Wedding Trials",
    image: "/images/2bf49efd-56b0-4bc7-9dab-cb9ec1803301.jpeg",
  },
  {
    id: 3,
    title: "Charity Gala Dinner",
    category: "Bridal Hair",
    image: "/images/7e144b46-53a3-42da-82c6-84ed5242b573.jpeg",
  },
  {
    id: 4,
    title: "50th Birthday Celebration",
    category: "Bridal Makeup",
    image: "/images/9e80b4e3-5f3c-49a7-9421-42499fa4a8c9.jpeg",
  },
  {
    id: 5,
    title: "Beach Wedding",
    category: "Bridal Makeup",
    image: "/images/5496ba45-9916-4103-b914-a2e12336257d.jpeg",
  },
  {
    id: 6,
    title: "Product Launch Event",
    category: "Bridal Hair",
    image: "/images/c57b818b-d436-40b0-b509-07afc8e97b64.jpeg",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Our <span className="text-event-purple">Bridal Creations</span>
          </h2>
          <div className="w-24 h-1 bg-event-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our portfolio of stunning bridal makeup and hair looks that reflect elegance, style, and attention to every detail.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category ? "bg-event-purple hover:bg-event-purple-dark" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <p className="text-white text-xs font-medium mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-white text-xl font-serif font-semibold mb-2">
                    {item.title}
                  </h3>
                  <button className="text-white bg-event-purple bg-opacity-80 hover:bg-opacity-100 px-4 py-2 rounded-md transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-event-purple hover:bg-event-purple-dark text-white px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
