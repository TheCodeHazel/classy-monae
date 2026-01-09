
'use client'
import React, { useState, useEffect } from "react";

// Replace with actual Google reviews data
const googleReviews = [
  {
    id: 1,
    name: "E Siler",
    profileImage: "https://lh3.googleusercontent.com/a-/ALV-UjVJzCpNtGVJm30GrfOHsMbNmhrzr95-RrKVcbz-suPMaZkpJ8E=s64-c-rp-mo-ba2-br100",
    rating: 5,
    content: "Classy Monae understood the assignment!! I described my soft glam desired look for my daughter's wedding and I was very pleased with how she worked her magic. I was beautiful!! She arrived ahead of time and jumped right to work. Her professional set up was impressive. I would definitely recommend. Thanks Classy Monae!",
  },
  {
    id: 2,
    name: "Delicia Williams",
    profileImage: "https://lh3.googleusercontent.com/a-/ALV-UjXIcZWs9PDlG0Y7A27mY2T89tXw7IHAxYUnXO5ztVIls7rBuEw=s64-c-rp-mo-br100",
    rating: 5,
    content: "Very professional service. She has a talent for using makeup to accentuate the beauty that is already there. Everyone in my wedding party was impressed.",
  },
  {
    id: 3,
    name: "Vince",
    profileImage: "https://lh3.googleusercontent.com/a-/ALV-UjXqnKw3lq-Y_1CnIqVxRVBqdeujFMjUBPXrWOP8ADxJnsIKyjuo=s64-c-rp-mo-ba2-br100",
    rating: 5,
    content: "I just wanted to take the time to say I absolutely loved the work that Mariah did for my daughters. From her warm welcome to her gifts from above. She is a woman who pays attention to detail & provide excellent quality. Will definitely be forwarding female friends her way. Thank you for an amazing experience.",
  },
  {
    id: 4,
    name: "Mariah Espitia",
    profileImage: "https://lh3.googleusercontent.com/geougc-cs/AMBA38sWdiOkEm7vgXb23J2ADi6Y6vu8E5TDx_wZXerG8sui_GDMrYRwiXF3NwGCI7jEDpFmi2eom3zKlNaf7pKuRtqIvdlTibBZGCKAHeo6r7ZtaiO4XKYsPUOqzfS_HnwLsUR3bqWg_w=s201-p-k-rw",
    rating: 5,
    content: "Mariah was absolutely AMAZING!!!! She was VERY professional, punctual, friendly, funny, and a absolute joy to work with. We will DEFINITELY be using her for future bookings. My daughter’s makeup was soooo pretty for her Quiñceanera!!! Thanks so so much Mariah!!!! See you soon!!! Xoxo",
  },
  {
    id: 5,
    name: "Donnisha Marvels",
    profileImage: "https://lh3.googleusercontent.com/a-/ALV-UjVBCrxxu0ewoDDcT_yElR3qPxFgl0kUQj5tAYi-YjJCKBsgzHE=s64-c-rp-mo-br100",
    rating: 5,
    content: "Classy Monae Beauty is definitely worth booking! If you want to be slayed and camera ready Mariah is your girl. I’m so pleased with the makeup service I will definitely be booking again! If I could give 100 stars I would!",
  },
  {
    id: 6,
    name: "Taslima Khandaker",
    profileImage: "https://lh3.googleusercontent.com/a-/ALV-UjWU34BZh-vv3tF2-yMwPNiUXF2pP76BDR4LxOZ8fJLpss24iHxNPQ=s64-c-rp-mo-br100",
    rating: 5,
    content: "Mariah was amazing! I gave her some ideas of what I was looking for regarding my hair and makeup for my bridal trial….and it was PERFECT! Definitely booking her for my wedding this April!",
  },
];

const GoogleReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Determine cards per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.ceil(googleReviews.length / cardsPerView) - 1;

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const goToSlide = (index:number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setIsAutoPlaying(false);
  };

  const averageRating = (googleReviews.reduce((acc, review) => acc + review.rating, 0) / googleReviews.length).toFixed(1);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            What Our <span className="text-event-purple">Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6"></div>
          
          {/* Google Rating Summary */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-2xl font-bold text-gray-900">{averageRating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-sm ml-2">(17 reviews)</span>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {googleReviews.map((review) => (
                <div 
                  key={review.id} 
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 h-full border border-gray-100">
                    {/* Review Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={review.profileImage}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover ring-4 ring-purple-100"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                        </div>
                      </div>
                      
                      {/* Google Logo */}
                      <svg className="w-6 h-6 opacity-50 flex-shrink-0" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>

                    {/* Review Content */}
                    <p className="text-gray-700 text-base leading-relaxed">{review.content}</p>

                    {/* Decorative Quote */}
                    <div className="absolute top-4 right-4 text-6xl text-purple-100 font-serif opacity-40 pointer-events-none hidden lg:block">
                      "
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-purple-50 text-purple-600 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous review"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-purple-50 text-purple-600 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next review"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-12 h-3 bg-gradient-to-r from-event-purple to-event-purple"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-gradient-to-r from-event-purple to-event-purple text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Ready to Shine on Your Wedding Day? Book Your Consultation Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsCarousel;

// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     role: "Bride",
//     content: "Classy Monaè Beauty made me feel like a true princess on my wedding day. My makeup and hair were flawless, and I received endless compliments from everyone.",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Olivia Martinez",
//     role: "Bride",
//     content: "The team at Classy Monaè Beauty brought my bridal vision to life perfectly. From my pre-wedding trial to the big day, everything was seamless and stress-free.",
//     image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "Emily Rodriguez",
//     role: "Bride",
//     content: "I couldn’t have asked for a better bridal experience. My hair and makeup were absolutely stunning, and the attention to detail was unmatched.",
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
//     rating: 5,
//   },
// ];


// const Testimonials = () => {
//   return (
//     <section id="testimonials" className="py-20 bg-event-purple-light">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
//             Client <span className="text-event-purple">Testimonials</span>
//           </h2>
//           <div className="w-24 h-1 bg-event-gold mx-auto mb-6"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Hear what our clients have to say about their experiences working with us.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="bg-white p-8 rounded-lg shadow-lg relative"
//             >
//               {/* Quote mark */}
//               <div className="absolute top-4 right-6 text-6xl text-event-purple opacity-20 font-serif">
//                 "
//               </div>
              
//               <div className="flex items-center mb-6">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-16 h-16 rounded-full object-cover mr-4"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {testimonial.name}
//                   </h3>
//                   <p className="text-gray-600">{testimonial.role}</p>
//                 </div>
//               </div>

//               {/* Rating stars */}
//               <div className="flex mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <svg
//                     key={i}
//                     className="w-5 h-5 text-event-gold"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>

//               <p className="text-gray-700 italic mb-4">{testimonial.content}</p>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <a href="#contact" className="text-event-purple hover:text-event-purple-dark font-medium text-lg hover:underline">
//            Ready to Shine on Your Wedding Day? Book Your Consultation Today.”
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
