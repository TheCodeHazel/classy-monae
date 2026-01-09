
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, Star } from "lucide-react";
import { TClientData } from "@/lib/clients";

const stats = [
  { 
    id: 1, 
    value: "200+", 
    label: "Bridal Looks Created", 
    icon: <Calendar className="h-6 w-6 text-event-purple" /> 
  },
  { 
    id: 2, 
    value: "1,500+", 
    label: "Happy Clients", 
    icon: <Users className="h-6 w-6 text-event-purple" /> 
  },
  { 
    id: 3, 
    value: "6+", 
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
                src="/images/520fdba2-c806-4143-b618-728d8492dec8.jpeg"
                alt="Event planning team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-1/2 aspect-square bg-event-purple-light p-6 rounded-lg shadow-lg">
              <p className="text-event-purple font-serif font-bold text-3xl">
                6+
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
            <div className="w-20 h-1 bg-event-gold mb-4"></div>
            <p className="text-gray-600 mb-3">
              At {client_data.logo_alt} we believe every bride deserves to feel timeless, confident, and radiant on her special day. Founded by beauty professional Monaè, our brand specializes in luxury bridal hairstyling and flawless makeup artistry designed to enhance your natural beauty while reflecting your unique style.
            </p>
            <p className="text-gray-600 mb-2">
              With a passion for elegance and an eye for detail, Monaè creates looks that photograph beautifully and last from “I do” to the last dance. Whether you’re dreaming of a soft, romantic glow or a glamorous red-carpet finish, Classy Monaè Beauty provides a personalized beauty experience that leaves you feeling confident and breathtaking.
            </p>
            <p className="text-gray-600 mb-2">
              From the trial session to the wedding day, our goal is to ensure a calm, seamless, and enjoyable beauty experience—because your wedding day should be as flawless as your look.
            </p>
            <p className="text-gray-600 mb-2">
              ✨ Specialties: Bridal hair & makeup, bridesmaid glam, engagement sessions, and special events.
            </p>
            <p className="text-gray-600 mb-8">
              Let Classy Monaè Beauty help you look and feel your most beautiful self—classy, confident, and unforgettable.
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

            {/* <Button className="bg-event-purple hover:bg-event-purple-dark text-white">
              Meet Our Team
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
