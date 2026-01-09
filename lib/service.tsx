import { Crown, Heart, Palette, Scissors, Sparkles, Star, Users } from "lucide-react";


export const servicesData = [
  {
    category: "Individual Services",
    services: [
      {
        id: 1,
        title: "Full Glam",
        duration: "45 min",
        price: "$150",
        icon: <Sparkles className="h-8 w-8 text-event-purple" />
      },
      {
        id: 2,
        title: "Hairstyling",
        duration: "25 min",
        price: "$95+",
        icon: <Scissors className="h-8 w-8 text-event-purple" />
      },
      {
        id: 3,
        title: "Prom Makeup",
        duration: "1 h 30 min",
        price: "$125",
        icon: <Star className="h-8 w-8 text-event-purple" />
      },
      {
        id: 4,
        title: "Photo Shoot Hair & Makeup",
        duration: "2 h",
        price: "$250",
        icon: <Palette className="h-8 w-8 text-event-purple" />
      },
      {
        id: 5,
        title: "Sleep Angels Styling",
        duration: "3 h",
        price: "$200",
        description: "Mortuary makeup, hair, & nails",
        icon: <Heart className="h-8 w-8 text-event-purple" />
      }
    ]
  },
  {
    category: "Bridal Services",
    services: [
      {
        id: 6,
        title: "Bridal Makeup",
        duration: "45 min",
        price: "$150+",
        icon: <Crown className="h-8 w-8 text-event-purple" />
      },
      {
        id: 7,
        title: "Bridal Airbrush Makeup",
        duration: "1 h",
        price: "$150",
        icon: <Sparkles className="h-8 w-8 text-event-purple" />
      },
      {
        id: 8,
        title: "Bride Hair and Makeup",
        duration: "1 h",
        price: "$300",
        icon: <Crown className="h-8 w-8 text-event-purple" />
      }
    ]
  },
  {
    category: "Bridal Consultations",
    services: [
      {
        id: 9,
        title: "Bridal Makeup Consultation",
        duration: "1 h 30 min",
        price: "$150",
        description: "Makeup only",
        icon: <Palette className="h-8 w-8 text-event-purple" />
      },
      {
        id: 10,
        title: "Hair and Makeup Bridal Consultation",
        duration: "2 h",
        price: "$300",
        icon: <Star className="h-8 w-8 text-event-purple" />
      },
      {
        id: 11,
        title: "Bridal Hair Consultation",
        duration: "1 h",
        price: "$150",
        icon: <Scissors className="h-8 w-8 text-event-purple" />
      },
      {
        id: 12,
        title: "Phone Consultation",
        duration: "10 min",
        price: "Free",
        icon: <Heart className="h-8 w-8 text-event-purple" />
      }
    ]
  },
  {
    category: "Bridal Party Services",
    services: [
      {
        id: 13,
        title: "Bridal Party Makeup",
        duration: "30 min",
        price: "$125",
        icon: <Users className="h-8 w-8 text-event-purple" />
      },
      {
        id: 14,
        title: "Bridal Party Hair",
        duration: "30 min",
        price: "$95",
        icon: <Scissors className="h-8 w-8 text-event-purple" />
      },
      {
        id: 15,
        title: "Bridal Party Hair and Makeup",
        duration: "2 h",
        price: "$220",
        icon: <Users className="h-8 w-8 text-event-purple" />
      },
      {
        id: 16,
        title: "Let's Elope",
        duration: "30 min",
        price: "$300",
        description: "Hair and makeup for bride",
        icon: <Heart className="h-8 w-8 text-event-purple" />
      }
    ]
  },
  {
    category: "Wedding Packages",
    services: [
      {
        id: 17,
        title: "Traditional Wedding Package",
        duration: "3 h 30 min",
        price: "$600",
        icon: <Crown className="h-8 w-8 text-event-purple" />
      },
      {
        id: 18,
        title: "Classy Monae Package",
        duration: "5 h",
        price: "$650+",
        description: "Bride and 4 attendees",
        icon: <Sparkles className="h-8 w-8 text-event-purple" />
      },
      {
        id: 19,
        title: "Diamond Package",
        duration: "4 h 5 min",
        price: "$1200+",
        icon: <Star className="h-8 w-8 text-event-purple" />
      }
    ]
  },
  {
    category: "Education",
    services: [
      {
        id: 20,
        title: "1 on 1 Makeup Class",
        duration: "1 h",
        price: "$50/hour",
        description: "Does not include makeup kit",
        icon: <Palette className="h-8 w-8 text-event-purple" />
      }
    ]
  }
];

export const flatServices = servicesData.flatMap(group =>
  group.services.map(service => ({
    id: service.id,
    title: service.title,
    category: group.category
  }))
)