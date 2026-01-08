
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    content: "Classy Monaè Beauty made me feel like a true princess on my wedding day. My makeup and hair were flawless, and I received endless compliments from everyone.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    name: "Olivia Martinez",
    role: "Bride",
    content: "The team at Classy Monaè Beauty brought my bridal vision to life perfectly. From my pre-wedding trial to the big day, everything was seamless and stress-free.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Bride",
    content: "I couldn’t have asked for a better bridal experience. My hair and makeup were absolutely stunning, and the attention to detail was unmatched.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    rating: 5,
  },
];


const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-event-purple-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Client <span className="text-event-purple">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-event-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear what our clients have to say about their experiences working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-lg relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-6xl text-event-purple opacity-20 font-serif">
                "
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-event-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 italic mb-4">{testimonial.content}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="text-event-purple hover:text-event-purple-dark font-medium text-lg hover:underline">
           Ready to Shine on Your Wedding Day? Book Your Consultation Today.”
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
