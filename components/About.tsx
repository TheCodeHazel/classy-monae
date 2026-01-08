
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, Star } from "lucide-react";
import { TClientData } from "@/lib/clients";

const stats = [
  { 
    id: 1, 
    value: "1,000+", 
    label: "Bridal Looks Created", 
    icon: <Calendar className="h-6 w-6 text-event-purple" /> 
  },
  { 
    id: 2, 
    value: "8,000+", 
    label: "Happy Brides", 
    icon: <Users className="h-6 w-6 text-event-purple" /> 
  },
  { 
    id: 3, 
    value: "12", 
    label: "Years of Expertise", 
    icon: <Award className="h-6 w-6 text-event-purple" /> 
  },
  { 
    id: 4, 
    value: "20+", 
    label: "Expert Stylists", 
    icon: <Star className="h-6 w-6 text-event-purple" /> 
  },
];

const About = ({client_data}:{client_data:TClientData}) => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1973&auto=format&fit=crop"
                alt="Event planning team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-1/2 aspect-square bg-event-purple-light p-6 rounded-lg shadow-lg">
              <p className="text-event-purple font-serif font-bold text-3xl">
                12+
              </p>
              <p className="text-gray-800 font-medium">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Content side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              About <span className="text-event-purple">{client_data.logo_alt}</span>
            </h2>
            <div className="w-20 h-1 bg-event-gold mb-8"></div>
            <p className="text-gray-600 mb-6">
              {client_data.logo_alt} is a premier bridal makeup and hair studio dedicated to making your special day unforgettable. With over 12 years of experience, we are renowned for our artistry, attention to detail, and flawless execution.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of passionate beauty professionals works tirelessly to bring your bridal vision to life. From intimate weddings to grand celebrations, we ensure every detail of your makeup and hair is perfect, leaving you radiant and confident on your big day.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div className="mx-auto mb-3">{stat.icon}</div>
                  <p className="text-2xl font-serif font-bold text-gray-800">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button className="bg-event-purple hover:bg-event-purple-dark text-white">
              Meet Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
