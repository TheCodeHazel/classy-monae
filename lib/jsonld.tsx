// components/JsonLdSchema.tsx
import Script from 'next/script'

export const JsonLdSchema = () => {
  return (
    <Script
      id="json-ld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            // Organization schema
            {
              "@type": "Organization",
              "@id": "https://classymonae.beauty/#organization",
              "name": "Classy Monaè Beauty",
              "url": "https://classymonae.beauty",
              "logo": {
                "@type": "ImageObject",
                "url": "https://classymonae.beauty/images/logo.png",
                "width": 80,
                "height": 112
              },
              "sameAs": [
                "https://instagram.com/beautybyclassymonae/",
                "https://www.facebook.com/100005715272212/",
                "https://share.google/qhcpA5mJ2QUTZLhhu"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-214-957-5407",
                "contactType": "customer service",
                "email": "info@classymonae.beauty"
              }
            },

            // WebSite schema
            {
              "@type": "WebSite",
              "@id": "https://classymonae.beauty/#website",
              "url": "https://classymonae.beauty",
              "name": "Classy Monaè Beauty",
              "description": "Luxury bridal makeup, hair styling, and special event services in Texas — Plano, Dallas, DFW, Austin, Houston & East Texas.",
              "publisher": { "@id": "https://classymonae.beauty/#organization" }
            },
            {
  "@type": "ReserveAction",
  "target": "https://classymonae.beauty/#contact",
  "name": "Book Now"
},
            // Professional Service schema
            {
              "@type": "ProfessionalService",
              "@id": "https://classymonae.beauty/#professionalservice",
              "name": "Bridal Makeup & Hair Services",
              "description": "Full bridal makeup, hair styling, wedding glam, party makeup, consultations, and special event services in Texas.",
              "url": "https://classymonae.beauty",
              "provider": { "@id": "https://classymonae.beauty/#organization" },
              "areaServed": [
                { "@type": "City", "name": "Plano", "containedIn": { "@type": "State", "name": "Texas" } },
                { "@type": "City", "name": "Dallas", "containedIn": { "@type": "State", "name": "Texas" } },
                { "@type": "AdministrativeArea", "name": "Dallas-Fort Worth Metroplex" },
                { "@type": "City", "name": "Austin", "containedIn": { "@type": "State", "name": "Texas" } },
                { "@type": "City", "name": "Houston", "containedIn": { "@type": "State", "name": "Texas" } },
                { "@type": "AdministrativeArea", "name": "East Texas" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Beauty Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "Full Glam",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Full Glam Makeup",
                      "serviceType": "Makeup Service"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "150",
                      "priceCurrency": "USD"
                    },
                    "duration": "PT45M",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Hairstyling",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Professional Hairstyling",
                      "serviceType": "Hair Service"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "95",
                      "priceCurrency": "USD",
                      "minPrice": "95"
                    },
                    "duration": "PT25M",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Prom Makeup",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Prom Makeup Service",
                      "serviceType": "Makeup Service"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "125",
                      "priceCurrency": "USD"
                    },
                    "duration": "PT1H30M",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Photo Shoot Hair & Makeup",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Photo Shoot Hair and Makeup",
                      "serviceType": "Hair and Makeup Service"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "250",
                      "priceCurrency": "USD"
                    },
                    "duration": "PT2H",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Sleep Angels Styling",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sleep Angels Styling Service",
                      "serviceType": "Hair Service"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "200",
                      "priceCurrency": "USD"
                    },
                    "duration": "PT3H",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Bridal Makeup",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bridal Makeup Service",
                      "serviceType": "Bridal Makeup"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "150",
                      "priceCurrency": "USD",
                      "minPrice": "150"
                    },
                    "duration": "PT45M",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Bridal Airbrush Makeup",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bridal Airbrush Makeup Service",
                      "serviceType": "Bridal Makeup"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "150",
                      "priceCurrency": "USD"
                    },
                    "duration": "PT1H",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Bride Hair and Makeup",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Complete Bride Hair and Makeup",
                      "serviceType": "Bridal Service"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "300",
                      "priceCurrency": "USD"
                    },
                    "duration": "PT1H",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Bridal Makeup Consultation",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bridal Makeup Consultation",
                      "serviceType": "Consultation"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "150",
                      "priceCurrency": "USD"
                    },
                    "duration": "PT1H30M",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Hair and Makeup Bridal Consultation",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Complete Hair and Makeup Bridal Consultation",
                      "serviceType": "Consultation"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "300",
                      "priceCurrency": "USD"
                    },
                    "duration": "PT2H",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Bridal Hair Consultation",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bridal Hair Consultation",
                      "serviceType": "Consultation"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "150",
                      "priceCurrency": "USD"
                    },
                    "duration": "PT1H",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Phone Consultation",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Phone Consultation",
                      "serviceType": "Consultation"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "0",
                      "priceCurrency": "USD"
                    },
                    "duration": "PT10M",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Bridal Party Makeup",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bridal Party Makeup Service",
                      "serviceType": "Bridal Party Service"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "125",
                      "priceCurrency": "USD"
                    },
                    "duration": "PT30M",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Bridal Party Hair",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bridal Party Hair Service",
                      "serviceType": "Bridal Party Service"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "95",
                      "priceCurrency": "USD"
                    },
                    "duration": "PT30M",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Bridal Party Hair and Makeup",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Complete Bridal Party Hair and Makeup",
                      "serviceType": "Bridal Party Service"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "220",
                      "priceCurrency": "USD"
                    },
                    "duration": "PT2H",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Let's Elope",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Elopement Package",
                      "serviceType": "Wedding Package"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "300",
                      "priceCurrency": "USD"
                    },
                    "duration": "PT30M",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Traditional Wedding Package",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Traditional Wedding Package",
                      "serviceType": "Wedding Package"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "600",
                      "priceCurrency": "USD"
                    },
                    "duration": "PT3H30M",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Classy Monae Package",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Classy Monae Premium Package",
                      "serviceType": "Wedding Package"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "650",
                      "priceCurrency": "USD",
                      "minPrice": "650"
                    },
                    "duration": "PT5H",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "Diamond Package",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Diamond Premium Package",
                      "serviceType": "Wedding Package"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "1200",
                      "priceCurrency": "USD",
                      "minPrice": "1200"
                    },
                    "duration": "PT4H5M",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    "name": "1 on 1 Makeup Class",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Private Makeup Class",
                      "serviceType": "Education"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "50",
                      "priceCurrency": "USD"
                    },
                    "duration": "PT1H",
                    "availability": "https://schema.org/InStock"
                  }
                ]
              }
            }
          ]
        })
      }}
    />
  )
}