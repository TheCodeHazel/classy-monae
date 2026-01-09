'use client'

import React, { useState } from "react";
import { 
  Palette,
  Scissors,
  Star,
  Users,
  Heart,
  Crown,
  Sparkles,
  Clock,
  DollarSign
} from "lucide-react";
import { servicesData } from "@/lib/service";
import { useService } from "./hooks/useServices";
import Link from "next/link";



const Services = () => {
  const { setService } = useService()
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...servicesData.map(cat => cat.category)];

  const filteredServices = selectedCategory === "all" 
    ? servicesData 
    : servicesData.filter(cat => cat.category === selectedCategory);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Our <span className="text-event-purple">Services</span>
          </h2>
          <div className="w-24 h-1 bg-event-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional bridal makeup and hairstyling services for your special day and every celebration
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-event-purple text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category === "all" ? "All Services" : category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        {filteredServices.map((categoryData) => (
          <div key={categoryData.category} className="mb-12">
            {selectedCategory === "all" && (
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6 text-center">
                {categoryData.category}
              </h3>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryData.services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-b-2 border-event-gold group hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-event-purple transition-all duration-500 group-hover:w-full"></div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-purple-50 rounded-lg group-hover:bg-event-purple transition-colors duration-300">
                      {React.cloneElement(service.icon, {
                        className: "h-8 w-8 text-event-purple group-hover:text-white transition-colors duration-300"
                      })}
                    </div>
                    <span className="text-2xl font-bold text-event-purple">
                      {service.price}
                    </span>
                  </div>

                  <h4 className="text-xl font-serif font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h4>

                  {service.description && (
                    <p className="text-sm text-gray-600 mb-3">
                      {service.description}
                    </p>
                  )}

                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{service.duration}</span>
                  </div>

                  <button 
                  onClick={() => {setService({ id: service.id, title: service.title, category:categoryData.category})
                document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" })}}
                  className="mt-4 w-full py-2 border-2 border-event-purple text-event-purple font-medium rounded-lg hover:bg-event-purple hover:text-white transition-all duration-300">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Can't find what you're looking for? We offer custom packages tailored to your needs.
          </p>
          <Link href={'/#contact'} className="px-8  py-4 bg-event-purple text-white font-semibold rounded-lg hover:bg-white hover:text-event-purple transition-colors duration-300 shadow-lg hover:shadow-xl">
            Contact Us for Custom Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
// import React, { useState } from "react";
// import { 
//   Palette,
//   Scissors,
//   Star,
//   Users,
//   Heart,
//   Crown,
//   Sparkles,
//   Clock,
//   DollarSign
// } from "lucide-react";

// const servicesData = [
//   {
//     category: "Individual Services",
//     services: [
//       {
//         id: 1,
//         title: "Full Glam",
//         duration: "45 min",
//         price: "$150",
//         icon: <Sparkles className="h-8 w-8 text-event-purple" />
//       },
//       {
//         id: 2,
//         title: "Hairstyling",
//         duration: "25 min",
//         price: "$95+",
//         icon: <Scissors className="h-8 w-8 text-event-purple" />
//       },
//       {
//         id: 3,
//         title: "Prom Makeup",
//         duration: "1 h 30 min",
//         price: "$125",
//         icon: <Star className="h-8 w-8 text-event-purple" />
//       },
//       {
//         id: 4,
//         title: "Photo Shoot Hair & Makeup",
//         duration: "2 h",
//         price: "$250",
//         icon: <Palette className="h-8 w-8 text-event-purple" />
//       },
//       {
//         id: 5,
//         title: "Sleep Angels Styling",
//         duration: "3 h",
//         price: "$200",
//         description: "Mortuary makeup, hair, & nails",
//         icon: <Heart className="h-8 w-8 text-event-purple" />
//       }
//     ]
//   },
//   {
//     category: "Bridal Services",
//     services: [
//       {
//         id: 6,
//         title: "Bridal Makeup",
//         duration: "45 min",
//         price: "$150+",
//         icon: <Crown className="h-8 w-8 text-event-purple" />
//       },
//       {
//         id: 7,
//         title: "Bridal Airbrush Makeup",
//         duration: "1 h",
//         price: "$150",
//         icon: <Sparkles className="h-8 w-8 text-event-purple" />
//       },
//       {
//         id: 8,
//         title: "Bride Hair and Makeup",
//         duration: "1 h",
//         price: "$300",
//         icon: <Crown className="h-8 w-8 text-event-purple" />
//       }
//     ]
//   },
//   {
//     category: "Bridal Consultations",
//     services: [
//       {
//         id: 9,
//         title: "Bridal Makeup Consultation",
//         duration: "1 h 30 min",
//         price: "$150",
//         description: "Makeup only",
//         icon: <Palette className="h-8 w-8 text-event-purple" />
//       },
//       {
//         id: 10,
//         title: "Hair and Makeup Bridal Consultation",
//         duration: "2 h",
//         price: "$300",
//         icon: <Star className="h-8 w-8 text-event-purple" />
//       },
//       {
//         id: 11,
//         title: "Bridal Hair Consultation",
//         duration: "1 h",
//         price: "$150",
//         icon: <Scissors className="h-8 w-8 text-event-purple" />
//       },
//       {
//         id: 12,
//         title: "Phone Consultation",
//         duration: "10 min",
//         price: "Free",
//         icon: <Heart className="h-8 w-8 text-event-purple" />
//       }
//     ]
//   },
//   {
//     category: "Bridal Party Services",
//     services: [
//       {
//         id: 13,
//         title: "Bridal Party Makeup",
//         duration: "30 min",
//         price: "$125",
//         icon: <Users className="h-8 w-8 text-event-purple" />
//       },
//       {
//         id: 14,
//         title: "Bridal Party Hair",
//         duration: "30 min",
//         price: "$95",
//         icon: <Scissors className="h-8 w-8 text-event-purple" />
//       },
//       {
//         id: 15,
//         title: "Bridal Party Hair and Makeup",
//         duration: "2 h",
//         price: "$220",
//         icon: <Users className="h-8 w-8 text-event-purple" />
//       },
//       {
//         id: 16,
//         title: "Let's Elope",
//         duration: "30 min",
//         price: "$300",
//         description: "Hair and makeup for bride",
//         icon: <Heart className="h-8 w-8 text-event-purple" />
//       }
//     ]
//   },
//   {
//     category: "Wedding Packages",
//     services: [
//       {
//         id: 17,
//         title: "Traditional Wedding Package",
//         duration: "3 h 30 min",
//         price: "$600",
//         icon: <Crown className="h-8 w-8 text-event-purple" />
//       },
//       {
//         id: 18,
//         title: "Classy Monae Package",
//         duration: "5 h",
//         price: "$650+",
//         description: "Bride and 4 attendees",
//         icon: <Sparkles className="h-8 w-8 text-event-purple" />
//       },
//       {
//         id: 19,
//         title: "Diamond Package",
//         duration: "4 h 5 min",
//         price: "$1200+",
//         icon: <Star className="h-8 w-8 text-event-purple" />
//       }
//     ]
//   },
//   {
//     category: "Education",
//     services: [
//       {
//         id: 20,
//         title: "1 on 1 Makeup Class",
//         duration: "1 h",
//         price: "$50/hour",
//         description: "Does not include makeup kit",
//         icon: <Palette className="h-8 w-8 text-event-purple" />
//       }
//     ]
//   }
// ];

// const Services = () => {
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const categories = ["all", ...servicesData.map(cat => cat.category)];

//   const filteredServices = selectedCategory === "all" 
//     ? servicesData 
//     : servicesData.filter(cat => cat.category === selectedCategory);

//   return (
//     <section id="services" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
//             Our <span className="text-event-purple">Services</span>
//           </h2>
//           <div className="w-24 h-1 bg-event-gold mx-auto mb-6"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Professional bridal makeup and hairstyling services for your special day and every celebration
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
//                 selectedCategory === category
//                   ? "bg-event-purple text-white shadow-lg"
//                   : "bg-white text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               {category === "all" ? "All Services" : category}
//             </button>
//           ))}
//         </div>

//         {/* Services Grid */}
//         {filteredServices.map((categoryData) => (
//           <div key={categoryData.category} className="mb-12">
//             {selectedCategory === "all" && (
//               <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6 text-center">
//                 {categoryData.category}
//               </h3>
//             )}
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {categoryData.services.map((service) => (
//                 <div
//                   key={service.id}
//                   className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-event-purple group hover:-translate-y-1"
//                 >
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="p-3 bg-purple-50 rounded-lg group-hover:bg-event-purple transition-colors duration-300">
//                       {React.cloneElement(service.icon, {
//                         className: "h-8 w-8 text-event-purple group-hover:text-white transition-colors duration-300"
//                       })}
//                     </div>
//                     <span className="text-2xl font-bold text-event-purple">
//                       {service.price}
//                     </span>
//                   </div>

//                   <h4 className="text-xl font-serif font-semibold text-gray-800 mb-2">
//                     {service.title}
//                   </h4>

//                   {service.description && (
//                     <p className="text-sm text-gray-600 mb-3">
//                       {service.description}
//                     </p>
//                   )}

//                   <div className="flex items-center text-gray-500 text-sm">
//                     <Clock className="h-4 w-4 mr-2" />
//                     <span>{service.duration}</span>
//                   </div>

//                   <button className="mt-4 w-full py-2 border-2 border-event-purple text-event-purple font-medium rounded-lg hover:bg-event-purple hover:text-white transition-all duration-300">
//                     Book Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}

//         {/* Call to Action */}
//         <div className="text-center mt-16">
//           <p className="text-lg text-gray-600 mb-6">
//             Can't find what you're looking for? We offer custom packages tailored to your needs.
//           </p>
//           <button className="px-8 py-4 bg-event-purple text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
//             Contact Us for Custom Packages
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


// import React from "react";
// import { 
//   Calendar, 
//   Users, 
//   Gift, 
//   Heart, 
//   Award, 
//   Star,
//   Palette,
//   Scissors,
//   Sun,
//   Smile
// } from "lucide-react";

// const servicesData = [
//   {
//     id: 1,
//     title: "Bridal Makeup",
//     description: "Flawless, long-lasting bridal makeup designed to make you glow on your wedding day.",
//     icon: <Palette className="h-12 w-12 text-event-purple" />,
//   },
//   {
//     id: 2,
//     title: "Bridal Hair Styling",
//     description: "From timeless updos to modern flowing styles, we craft the perfect bridal hairstyle.",
//     icon: <Scissors className="h-12 w-12 text-event-purple" />,
//   },
//   {
//     id: 3,
//     title: "Pre-Wedding & Trial Sessions",
//     description: "Personalized consultations to create your ideal hair and makeup look before the big day.",
//     icon: <Star className="h-12 w-12 text-event-purple" />,
//   },
//   {
//     id: 4,
//     title: "Bridesmaids & Family Styling",
//     description: "Elegant makeup and hair for your bridal party and close family members.",
//     icon: <Users className="h-12 w-12 text-event-purple" />,
//   },
//   {
//     id: 5,
//     title: "Special Occasion Styling",
//     description: "Glamorous makeup and hairstyles for engagements, anniversaries, or any celebration.",
//     icon: <Sun className="h-12 w-12 text-event-purple" />,
//   },
//   {
//     id: 6,
//     title: "Custom Bridal Packages",
//     description: "Tailored services to suit your vision, schedule, and preferences for a stress-free experience.",
//     icon: <Smile className="h-12 w-12 text-event-purple" />,
//   },
// ];
// const Services = () => {
//   return (
//     <section id="services" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
//             Our <span className="text-event-purple">Services</span>
//           </h2>
//           <div className="w-24 h-1 bg-event-gold mx-auto mb-6"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             We offer comprehensive event planning services to create memorable experiences for all occasions.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {servicesData.map((service) => (
//             <div
//               key={service.id}
//               className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-b-4 border-event-purple flex flex-col h-full"
//             >
//               <div className="mb-6 flex justify-center">{service.icon}</div>
//               <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4 text-center">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 text-center flex-grow">
//                 {service.description}
//               </p>
//               <button className="mt-6 text-event-purple font-medium hover:underline self-center">
//                 Learn more
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
