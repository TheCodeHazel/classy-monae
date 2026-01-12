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
  Send,
  Loader2,
  CheckCircle2,
  XCircle
} from "lucide-react";
import { TClientData } from "@/lib/clients";
import { useToast } from "./hooks/use-toast";
import { flatServices, servicesData } from "@/lib/service";
import { useService } from "./hooks/useServices";

// Google Form configuration
const GOOGLE_FORM_CONFIG = {
  url: "https://docs.google.com/forms/d/e/1FAIpQLSfWNDtYqBXd9FSsXju3ry5FPeejBUMqcBhAdHYph6kZX3Oglg/formResponse",
  fields: {
    name: "entry.1064137138",
    email: "entry.1101717300",
    phone: "entry.1128258664",
    eventType: "entry.1461887590",
    message: "entry.2079354556"
  }
};

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact = ({client_data}:{client_data:TClientData}) => {
  const { service, setService } = useService();
  const { toast } = useToast();
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
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

  const handleSubmit = async () => {
    // Validation
    if (!formState.name || !formState.email || !formState.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setSubmissionStatus('loading');

    try {
      // Create form data for Google Form
      const formData = new URLSearchParams();
      formData.append(GOOGLE_FORM_CONFIG.fields.name, formState.name);
      formData.append(GOOGLE_FORM_CONFIG.fields.email, formState.email);
      formData.append(GOOGLE_FORM_CONFIG.fields.phone, formState.phone);
      formData.append(GOOGLE_FORM_CONFIG.fields.eventType, service?.title || formState.eventType);
      formData.append(GOOGLE_FORM_CONFIG.fields.message, formState.message);

      // Submit to Google Form
      await fetch(GOOGLE_FORM_CONFIG.url, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Google Forms requires no-cors
      });

      // With no-cors, we can't read the response, so we assume success
      setSubmissionStatus('success');
      
      toast({
        title: "Message Sent Successfully! ✓",
        description: "We'll get back to you as soon as possible!",
      });

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          message: "",
        });
        setService(null);
        setSubmissionStatus('idle');
      }, 2000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionStatus('error');
      
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmissionStatus('idle');
      }, 3000);
    }
  };

  const isSubmitting = submissionStatus === 'loading';
  const isSuccess = submissionStatus === 'success';
  const isError = submissionStatus === 'error';

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Get In <span className="text-event-purple">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-event-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to shine on your wedding day? Contact us today and let's craft your flawless bridal look together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white rounded-lg shadow-xl p-8 relative">
            {/* Success Overlay */}
            {isSuccess && (
              <div className="absolute inset-0 bg-green-50 bg-opacity-95 rounded-lg flex items-center justify-center z-10">
                <div className="text-center p-8">
                  <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-600">We'll get back to you soon.</p>
                </div>
              </div>
            )}

            {/* Error Overlay */}
            {isError && (
              <div className="absolute inset-0 bg-red-50 bg-opacity-95 rounded-lg flex items-center justify-center z-10">
                <div className="text-center p-8">
                  <XCircle className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-red-800 mb-2">Submission Failed</h3>
                  <p className="text-red-600">Please try again or contact us directly.</p>
                </div>
              </div>
            )}

            <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
              Send us a Message
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                      );
                      setService(selected ?? null);
                    }}
                    disabled={isSubmitting}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full"
                  placeholder="Tell us about your event..."
                />
              </div>
              <Button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-event-purple hover:bg-event-purple-dark text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <div className="bg-event-purple text-white rounded-lg shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-serif font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Our Location</h4>
                    <p className="text-white text-opacity-80">
                      {client_data.address1}<br />
                      {client_data.address2}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-white text-opacity-80">
                      {client_data.phone}<br />
                      Mon-Fri, 9am-6pm
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-white text-opacity-80 flex flex-col">
                      {client_data.email.map((em)=>(<span key={em}>{em}</span>))}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
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
// 'use client'
// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { 
//   Mail, 
//   Phone, 
//   MapPin, 
//   Clock, 
//   Send 
// } from "lucide-react";
// // import { useToast } from "@/hooks/use-toast";
// import { TClientData } from "@/lib/clients";
// import { useToast } from "./hooks/use-toast";
// import { flatServices, servicesData } from "@/lib/service";
// import { useService } from "./hooks/useServices";

// const Contact = ({client_data}:{client_data:TClientData} ) => {
//   const { service, setService } = useService()
//   const { toast } = useToast();
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     eventType: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormState((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formState);
    
//     toast({
//       title: "Message Sent",
//       description: "We'll get back to you as soon as possible!",
//     });
    
//     // Reset form
//     setFormState({
//       name: "",
//       email: "",
//       phone: "",
//       eventType: "",
//       message: "",
//     });
//   };

//   return (
//     <section id="contact" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
//             Get In <span className="text-event-purple">Touch</span>
//           </h2>
//           <div className="w-24 h-1 bg-event-gold mx-auto mb-6"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Ready to shine on your wedding day? Contact us today and let’s craft your flawless bridal look together.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact form */}
//           <div className="bg-white rounded-lg shadow-xl p-8">
//             <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
//               Send us a Message
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                     Your Name
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     value={formState.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full"
//                     placeholder="John Doe"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email Address
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formState.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full"
//                     placeholder="john@example.com"
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                     Phone Number
//                   </label>
//                   <Input
//                     id="phone"
//                     name="phone"
//                     value={formState.phone}
//                     onChange={handleChange}
//                     className="w-full"
//                     placeholder="(123) 456-7890"
//                   />
//                 </div>
//                 <div>
//                    <label className="block text-sm font-medium text-gray-700 mb-1">
//         Service Type
//       </label>

//       <select
//         value={service?.id ?? ""}
//         onChange={(e) => {
//           const selected = flatServices.find(
//             s => s.id === Number(e.target.value)
//           )
//           setService(selected ?? null)
//         }}
//         className="w-full rounded-md border border-input px-3 py-2 text-sm focus:ring-2"
//       >
//         <option value="" disabled>
//           Select Service
//         </option>

//         {servicesData.map(group => (
//           <optgroup key={group.category} label={group.category}>
//             {group.services.map(service => (
//               <option key={service.id} value={service.id}>
//                 {service.title}
//               </option>
//             ))}
//           </optgroup>
//         ))}
//       </select>
                  
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                   Your Message
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   value={formState.message}
//                   onChange={handleChange}
//                   rows={4}
//                   required
//                   className="w-full"
//                   placeholder="Tell us about your event..."
//                 />
//               </div>
//               <Button 
//                 type="submit" 
//                 className="w-full bg-event-purple hover:bg-event-purple-dark text-white flex items-center justify-center gap-2"
//               >
//                 <Send onClick={()=>console.log(formState)} className="h-5 w-5" />
//                 Send Message
//               </Button>
//             </form>
//           </div>

//           {/* Contact info */}
//           <div>
//             <div className="bg-event-purple text-white rounded-lg shadow-xl p-8 mb-8">
//               <h3 className="text-2xl font-serif font-semibold mb-6">Contact Information</h3>
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <MapPin className="h-6 w-6 mr-4 mt-1" />
//                   <div>
//                     <h4 className="font-medium">Our Location</h4>
//                     <p className="text-white text-opacity-80">
//                       {client_data.address1}<br />
//                       {client_data.address2}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <Phone className="h-6 w-6 mr-4 mt-1" />
//                   <div>
//                     <h4 className="font-medium">Call Us</h4>
//                     <p className="text-white text-opacity-80">
//                       {client_data.phone}<br />
//                       Mon-Fri, 9am-6pm
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <Mail className="h-6 w-6 mr-4 mt-1" />
//                   <div>
//                     <h4 className="font-medium">Email Us</h4>
//                     <p className="text-white text-opacity-80 flex flex-col">
//                       {client_data.email.map((em)=>(<span key={em}>{em}</span>))}
                      
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <Clock className="h-6 w-6 mr-4 mt-1" />
//                   <div>
//                     <h4 className="font-medium">Business Hours</h4>
//                     <p className="text-white text-opacity-80">
//                       Monday - Saturday: 6:00 AM - 10:00 PM<br />
//                       Sunday: 6:00 AM - 10:00 PM
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="rounded-lg overflow-hidden shadow-xl">
//               <iframe
//                 src={client_data.google_map}
//                 width="100%"
//                 height="300"
//                 style={{ border: 0 }}
//                 allowFullScreen={false}
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Location Map"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
// fetch("https://docs.google.com/forms/d/e/1FAIpQLSfWNDtYqBXd9FSsXju3ry5FPeejBUMqcBhAdHYph6kZX3Oglg/formResponse", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
//     "accept-language": "en-US,en;q=0.9",
//     "cache-control": "max-age=0",
//     "content-type": "application/x-www-form-urlencoded",
//     "priority": "u=0, i",
//     "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
//     "sec-ch-ua-arch": "\"arm\"",
//     "sec-ch-ua-bitness": "\"64\"",
//     "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"143.0.7499.109\", \"Chromium\";v=\"143.0.7499.109\", \"Not A(Brand\";v=\"24.0.0.0\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-model": "\"\"",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-ch-ua-platform-version": "\"15.2.0\"",
//     "sec-ch-ua-wow64": "?0",
//     "sec-fetch-dest": "document",
//     "sec-fetch-mode": "navigate",
//     "sec-fetch-site": "same-origin",
//     "sec-fetch-user": "?1",
//     "upgrade-insecure-requests": "1",
//     "x-browser-channel": "stable",
//     "x-browser-copyright": "Copyright 2025 Google LLC. All Rights reserved.",
//     "x-browser-validation": "AUXUCdutEJ+6gl6bYtz7E2kgIT4=",
//     "x-browser-year": "2025",
//     "cookie": "S=spreadsheet_forms=MA0-ZTOJ3JjQiERxQ1joSyA8lXXC3dlg65O8n2DMxX4; COMPASS=spreadsheet_forms=CjIACWuJVxAy6UTgNuJ-De1k52u475zIsL0uPNHNHXe2AnOtsaeD-4eAe8g6ua4tccJM-RDu35TLBho0AAlriVe2Gtpd89R7Ufj3tPCdpzy-i0He8fVXGC1Jcv4k_9wirojy4FmT2d0e6ae6VsEQzw==; NID=528=i-kyfZAIdALFJaUGugASYQtaHAE8BiyK9kJ33CPQEUsepkQaiKwcMBMcMfnLLgNIddcGjoTf_IIwjxkLkZWPYJTjTG_dq1w807iaozKtjQWeQw_H1Kz8TMJCe64in-BPPHkVLoUcUauJBtOlS6iRIMLxrrPuSmi_A-1Kh_hCe5DEucPuWO2zY-_mGev8gi2uCCTmrBMFWDbRkN7V",
//     "Referer": "https://docs.google.com/forms/d/e/1FAIpQLSfWNDtYqBXd9FSsXju3ry5FPeejBUMqcBhAdHYph6kZX3Oglg/viewform?fbzx=3215317329877408924"
//   },
//   "body": "entry.1064137138=David&entry.1101717300=david%40example.com&entry.1128258664=123-123-1234&entry.1461887590=test&entry.2079354556=This+is+test+form+submission&fvv=1&partialResponse=%5Bnull%2Cnull%2C%223215317329877408924%22%5D&pageHistory=0&fbzx=3215317329877408924&submissionTimestamp=1768235551188",
//   "method": "POST"
// });