// import { motion } from 'motion/react';
// import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
// import { SectionHeader } from '../components/SectionHeader';

// export function Contact() {
//   const handleWhatsApp = () => {
//     const phone = '918886229339';
//     const message = encodeURIComponent('Hello! I would like to get in touch with Arka Property.');
//     window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
//   };

//   const contactInfo = [
//     {
//       icon: Phone,
//       title: 'Phone',
//       details: '8886229339',
//       link: 'tel:8886229339',
//       description: 'Call us during business hours',
//       color: 'blue',
//     },
//     {
//       icon: Mail,
//       title: 'Email',
//       details: 'Amazonerealty@gmail.com',
//       link: 'mailto:Amazonerealty@gmail.com',
//       description: 'Send us your queries',
//       color: 'red',
//     },
//     {
//       icon: MessageCircle,
//       title: 'WhatsApp',
//       details: '8886229339',
//       link: 'https://wa.me/918886229339',
//       description: 'Quick response guaranteed',
//       color: 'emerald',
//     },
//     {
//       icon: Clock,
//       title: 'Visit Us',
//       details: 'HRT Plaza, Benz Circle, Vijayawada',
//       link: '#',
//       description: 'Professional consultation',
//       color: 'green',
//     },
//   ];

//   const businessHours = [
//     { day: 'Monday - Saturday', hours: '10:00 AM - 7:00 PM', isOpen: true },
//     { day: 'Sunday', hours: '10:00 AM - 5:00 PM', isOpen: true },
//   ];

//   return (
//     <div className="pt-16">
//       {/* Hero Section */}
//       <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1771147372634-976f022c0033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwcm9vbSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQ5NTQyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
//             alt="Contact Us Hero"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="inline-block px-4 py-2 bg-orange-600/90 text-white text-sm font-semibold rounded-full mb-6">
//               Get in Touch
//             </span>
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               Let's <span className="text-orange-400">Connect</span>
//             </h1>
//             <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
//               We're here to help you find your dream property. Reach out to us today!
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact Info Cards */}
//       <section className="py-24 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <SectionHeader
//             subtitle="Contact Information"
//             title="Multiple Ways to Reach Us"
//             description="Choose the most convenient way to connect with our team."
//           />

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {contactInfo.map((info, index) => (
//               <motion.a
//                 key={index}
//                 href={info.link}
//                 target={info.title === 'WhatsApp' ? '_blank' : undefined}
//                 rel={info.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all group cursor-pointer"
//               >
//                 <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all ${
//                   info.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-600' :
//                   info.color === 'red' ? 'bg-red-100 group-hover:bg-red-600' :
//                   info.color === 'green' ? 'bg-green-100 group-hover:bg-green-600' :
//                   'bg-emerald-100 group-hover:bg-emerald-600'
//                 }`}>
//                   <info.icon size={32} className={`transition-colors ${
//                     info.color === 'blue' ? 'text-blue-600 group-hover:text-white' :
//                     info.color === 'red' ? 'text-red-600 group-hover:text-white' :
//                     info.color === 'green' ? 'text-green-600 group-hover:text-white' :
//                     'text-emerald-600 group-hover:text-white'
//                   }`} />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
//                 <p className="text-gray-600 text-sm mb-4 break-words leading-relaxed">{info.details}</p>
//                 <p className={`text-sm font-semibold ${
//                   info.color === 'blue' ? 'text-blue-600' :
//                   info.color === 'red' ? 'text-red-600' :
//                   info.color === 'green' ? 'text-green-600' :
//                   'text-emerald-600'
//                 }`}>{info.description}</p>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Business Hours Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
//                 <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkN2F8dvTUQePn_juGJWAfLaJRWwST1fZDIA&s"
//                   alt="Business Hours"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
//                 Business Hours
//               </span>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//                 We're Here
//                 <br />
//                 <span className="text-orange-600">When You Need Us</span>
//               </h2>
//               <p className="text-gray-600 text-lg mb-10 leading-relaxed">
//                 Our office is open throughout the week to serve you better. Reach out during business hours or schedule an appointment for a personalized consultation.
//               </p>

//               <div className="space-y-5 mb-10">
//                 {businessHours.map((schedule, index) => (
//                   <div
//                     key={index}
//                     className="bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-xl p-6 border-l-4 border-orange-600"
//                   >
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <p className="text-gray-900 font-bold text-lg">{schedule.day}</p>
//                         <p className="text-orange-600 font-semibold mt-1">{schedule.hours}</p>
//                       </div>
//                       <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
//                         <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
//                         Open
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={handleWhatsApp}
//                 className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2"
//               >
//                 <MessageCircle size={24} />
//                 Connect on WhatsApp
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 bg-gradient-to-br from-orange-600 to-orange-500">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-white"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Have Questions? We Have Answers!
//             </h2>
//             <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
//               Our team is ready to assist you with property inquiries, site visits, or any other questions you may have.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 onClick={handleWhatsApp}
//                 className="bg-white text-orange-600 px-10 py-5 rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-3 text-lg"
//               >
//                 <MessageCircle size={28} />
//                 Chat on WhatsApp
//               </button>
//               <a
//                 href="tel:8886229339"
//                 className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all hover:scale-105 inline-flex items-center gap-3 text-lg"
//               >
//                 <Phone size={28} />
//                 Call Now
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }
import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  User, 
  MessageSquare 
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

export function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleWhatsApp = () => {
    const phone = '918886229339';
    const message = encodeURIComponent('Hello! I would like to get in touch with Arka Property.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const validateForm = () => {
    const newErrors = { name: '', phone: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const whatsappNumber = '918886229339';
      const message = `Hello! I'm ${formData.name}.\n\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
      
      setFormData({ name: '', phone: '', message: '' });
      setErrors({ name: '', phone: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '8886229339',
      link: 'tel:8886229339',
      description: 'Call us during business hours',
      color: 'blue',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'arkaproperty26@gmail.com',
      link: 'mailto:arkaproperty26@gmail.com',
      description: 'Send us your queries',
      color: 'red',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '8886229339',
      link: 'https://wa.me/918886229339',
      description: 'Quick response guaranteed',
      color: 'emerald',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'HRT Plaza, Benz Circle, Vijayawada',
      link: '#',
      description: 'Professional consultation',
      color: 'green',
    },
  ];

  const businessHours = [
    { day: 'Monday - Saturday', hours: '10:00 AM - 7:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 5:00 PM' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1771147372634-976f022c0033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Contact Us Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-orange-600/90 text-white text-sm font-semibold rounded-full mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's <span className="text-orange-400">Connect</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              We're here to help you find your dream property. Reach out to us today!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.title === 'WhatsApp' ? '_blank' : undefined}
                rel={info.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all ${
                  info.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-600' :
                  info.color === 'red' ? 'bg-red-100 group-hover:bg-red-600' :
                  info.color === 'green' ? 'bg-green-100 group-hover:bg-green-600' :
                  'bg-emerald-100 group-hover:bg-emerald-600'
                }`}>
                  <info.icon size={28} className={`transition-colors ${
                    info.color === 'blue' ? 'text-blue-600 group-hover:text-white' :
                    info.color === 'red' ? 'text-red-600 group-hover:text-white' :
                    info.color === 'green' ? 'text-green-600 group-hover:text-white' :
                    'text-emerald-600 group-hover:text-white'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm mb-4 break-words">{info.details}</p>
                <p className={`text-sm font-semibold ${
                  info.color === 'blue' ? 'text-blue-600' :
                  info.color === 'red' ? 'text-red-600' :
                  info.color === 'green' ? 'text-green-600' :
                  'text-emerald-600'
                }`}>{info.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form & Business Hours Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send an Enquiry</h2>
              <p className="text-gray-600 mb-8">Fill out the form and we'll reach out to you on WhatsApp instantly.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 text-gray-400" size={20} />
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 transition-all ${
                        errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-orange-500'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 text-gray-400" size={20} />
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 transition-all ${
                        errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-orange-500'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Requirement</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-3.5 text-gray-400" size={20} />
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you are looking for..."
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 transition-all ${
                        errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-orange-500'
                      }`}
                    ></textarea>
                  </div>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-200 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send to WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Right Column: Business Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 text-sm font-bold rounded-full mb-4 w-fit">
                Business Hours
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">We're Here <span className="text-orange-600">to Assist You</span></h2>
              <p className="text-gray-600 text-lg mb-8">
                Visit our office or reach out during our working hours for a face-to-face consultation about our premium properties.
              </p>

              <div className="space-y-4 mb-10">
                {businessHours.map((schedule, idx) => (
                  <div key={idx} className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100">
                    <div>
                      <p className="font-bold text-gray-900">{schedule.day}</p>
                      <p className="text-orange-600 font-medium">{schedule.hours}</p>
                    </div>
                    <span className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      OPEN
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl text-white shadow-xl">
                <h3 className="text-xl font-bold mb-4">Immediate Support?</h3>
                <p className="text-gray-300 mb-6 text-sm">Skip the form and call us directly for a quick response regarding site visits.</p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:8886229339" className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-all">
                    <Phone size={18} /> Call Now
                  </a>
                  <button onClick={handleWhatsApp} className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all">
                    <MessageCircle size={18} /> WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}