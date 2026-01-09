
'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send 
} from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
import { TClientData } from "@/lib/clients";
import { useToast } from "./hooks/use-toast";
import { flatServices, servicesData } from "@/lib/service";
import { useService } from "./hooks/useServices";

const Contact = ({client_data}:{client_data:TClientData} ) => {
  const { service, setService } = useService()
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
    });
    
    // Reset form
    setFormState({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Get In <span className="text-event-purple">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-event-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to shine on your wedding day? Contact us today and let’s craft your flawless bridal look together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">
        Service Type
      </label>

      <select
        value={service?.id ?? ""}
        onChange={(e) => {
          const selected = flatServices.find(
            s => s.id === Number(e.target.value)
          )
          setService(selected ?? null)
        }}
        className="w-full rounded-md border border-input px-3 py-2 text-sm focus:ring-2"
      >
        <option value="" disabled>
          Select Service
        </option>

        {servicesData.map(group => (
          <optgroup key={group.category} label={group.category}>
            {group.services.map(service => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
                  {/* <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formState.eventType}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="" disabled>Select Event Type</option>
                    <option value="wedding">Hairstyling</option>
                    <option value="corporate">Full glam</option>
                    <option value="social">Bridal makeup</option>
                    <option value="nonprofit">Bridal Hair consultation</option>
                    <option value="other">Other</option>
                  </select> */}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full"
                  placeholder="Tell us about your event..."
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-event-purple hover:bg-event-purple-dark text-white flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div>
            <div className="bg-event-purple text-white rounded-lg shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-serif font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Our Location</h4>
                    <p className="text-white text-opacity-80">
                      {client_data.address1}<br />
                      {client_data.address2}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-white text-opacity-80">
                      {client_data.phone}<br />
                      Mon-Fri, 9am-6pm
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-white text-opacity-80 flex flex-col">
                      {client_data.email.map((em)=>(<span key={em}>{em}</span>))}
                      
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Business Hours</h4>
                    <p className="text-white text-opacity-80">
                      Monday - Saturday: 6:00 AM - 10:00 PM<br />
                      Sunday: 6:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-xl">
              <iframe
                src={client_data.google_map}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
