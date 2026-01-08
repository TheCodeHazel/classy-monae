
import React from "react";
import { 
  Calendar, 
  Users, 
  Gift, 
  Heart, 
  Award, 
  Star,
  Palette,
  Scissors,
  Sun,
  Smile
} from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Bridal Makeup",
    description: "Flawless, long-lasting bridal makeup designed to make you glow on your wedding day.",
    icon: <Palette className="h-12 w-12 text-event-purple" />,
  },
  {
    id: 2,
    title: "Bridal Hair Styling",
    description: "From timeless updos to modern flowing styles, we craft the perfect bridal hairstyle.",
    icon: <Scissors className="h-12 w-12 text-event-purple" />,
  },
  {
    id: 3,
    title: "Pre-Wedding & Trial Sessions",
    description: "Personalized consultations to create your ideal hair and makeup look before the big day.",
    icon: <Star className="h-12 w-12 text-event-purple" />,
  },
  {
    id: 4,
    title: "Bridesmaids & Family Styling",
    description: "Elegant makeup and hair for your bridal party and close family members.",
    icon: <Users className="h-12 w-12 text-event-purple" />,
  },
  {
    id: 5,
    title: "Special Occasion Styling",
    description: "Glamorous makeup and hairstyles for engagements, anniversaries, or any celebration.",
    icon: <Sun className="h-12 w-12 text-event-purple" />,
  },
  {
    id: 6,
    title: "Custom Bridal Packages",
    description: "Tailored services to suit your vision, schedule, and preferences for a stress-free experience.",
    icon: <Smile className="h-12 w-12 text-event-purple" />,
  },
];
const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Our <span className="text-event-purple">Services</span>
          </h2>
          <div className="w-24 h-1 bg-event-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive event planning services to create memorable experiences for all occasions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-b-4 border-event-purple flex flex-col h-full"
            >
              <div className="mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center flex-grow">
                {service.description}
              </p>
              <button className="mt-6 text-event-purple font-medium hover:underline self-center">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
