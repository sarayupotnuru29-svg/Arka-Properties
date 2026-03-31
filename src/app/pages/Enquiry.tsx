// import { useState } from 'react';
// import { motion } from 'motion/react';
// import { Send, Phone, User, MessageSquare } from 'lucide-react';
// import { SectionHeader } from '../components/SectionHeader';

// export function Enquiry() {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     phone: '',
//     message: '',
//   });

//   const validateForm = () => {
//     const newErrors = {
//       name: '',
//       phone: '',
//       message: '',
//     };

//     let isValid = true;

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//       isValid = false;
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone number is required';
//       isValid = false;
//     } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
//       newErrors.phone = 'Please enter a valid 10-digit phone number';
//       isValid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = 'Message is required';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (validateForm()) {
//       const whatsappNumber = '918886229339';
//       const message = `Hello! I'm ${formData.name}.\n\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
//       const encodedMessage = encodeURIComponent(message);
      
//       window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
      
//       // Reset form
//       setFormData({ name: '', phone: '', message: '' });
//       setErrors({ name: '', phone: '', message: '' });
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
    
//     // Clear error when user starts typing
//     if (errors[name as keyof typeof errors]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1758523671893-0ba21cf4260f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBoYXBweSUyMG5ldyUyMGhvbWUlMjBrZXlzfGVufDF8fHx8MTc3NDk1NDE5OXww&ixlib=rb-4.1.0&q=80&w=1080"
//             alt="Enquiry Hero"
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
//               Submit Enquiry
//             </span>
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               Let's Find Your <span className="text-orange-400">Dream Home</span>
//             </h1>
//             <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
//               Share your details and connect with us instantly on WhatsApp
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Enquiry Form Section */}
//       <section className="py-24 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="bg-white rounded-2xl shadow-xl p-8"
//             >
//               <div className="mb-8">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-3">Get in Touch</h2>
//                 <p className="text-gray-600">
//                   Fill out the form below and we'll reach out to you on WhatsApp with all the information you need.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Name Field */}
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Your Name *
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                       <User size={20} className="text-gray-400" />
//                     </div>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
//                         errors.name
//                           ? 'border-red-500 focus:ring-red-500'
//                           : 'border-gray-300 focus:ring-orange-500'
//                       }`}
//                       placeholder="Enter your full name"
//                     />
//                   </div>
//                   {errors.name && (
//                     <p className="mt-1 text-sm text-red-600">{errors.name}</p>
//                   )}
//                 </div>

//                 {/* Phone Field */}
//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Phone Number *
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                       <Phone size={20} className="text-gray-400" />
//                     </div>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
//                         errors.phone
//                           ? 'border-red-500 focus:ring-red-500'
//                           : 'border-gray-300 focus:ring-orange-500'
//                       }`}
//                       placeholder="Enter your 10-digit phone number"
//                     />
//                   </div>
//                   {errors.phone && (
//                     <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
//                   )}
//                 </div>

//                 {/* Message Field */}
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Your Message *
//                   </label>
//                   <div className="relative">
//                     <div className="absolute top-3 left-0 pl-4 pointer-events-none">
//                       <MessageSquare size={20} className="text-gray-400" />
//                     </div>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows={5}
//                       className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
//                         errors.message
//                           ? 'border-red-500 focus:ring-red-500'
//                           : 'border-gray-300 focus:ring-orange-500'
//                       }`}
//                       placeholder="Tell us about your property requirements..."
//                     />
//                   </div>
//                   {errors.message && (
//                     <p className="mt-1 text-sm text-red-600">{errors.message}</p>
//                   )}
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
//                 >
//                   <Send size={20} />
//                   Submit & Connect on WhatsApp
//                 </button>
//               </form>

//               <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
//                 <p className="text-sm text-gray-700">
//                   <strong className="text-orange-600">Note:</strong> After submitting, you'll be redirected to WhatsApp where you can continue the conversation with our team.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Info Section */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="space-y-6"
//             >
//               <div className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl p-8 text-white">
//                 <h3 className="text-2xl font-bold mb-4">Why Choose WhatsApp?</h3>
//                 <ul className="space-y-4">
//                   {[
//                     'Instant response from our team',
//                     'Share photos and documents easily',
//                     'Real-time conversation',
//                     'Chat history for future reference',
//                     'Convenient and secure',
//                   ].map((benefit, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
//                         <div className="w-2 h-2 rounded-full bg-white" />
//                       </div>
//                       <span>{benefit}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="bg-white rounded-2xl shadow-lg p-8">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">What Happens Next?</h3>
//                 <div className="space-y-4">
//                   {[
//                     {
//                       step: '1',
//                       title: 'Fill the Form',
//                       description: 'Enter your details and requirements in the form.',
//                     },
//                     {
//                       step: '2',
//                       title: 'WhatsApp Redirect',
//                       description: 'You will be redirected to WhatsApp with your message pre-filled.',
//                     },
//                     {
//                       step: '3',
//                       title: 'Get Connected',
//                       description: 'Our team will respond promptly with all the information you need.',
//                     },
//                   ].map((item, index) => (
//                     <div key={index} className="flex gap-4">
//                       <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 font-bold text-orange-600">
//                         {item.step}
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
//                         <p className="text-sm text-gray-600">{item.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-white rounded-2xl shadow-lg p-8">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h3>
//                 <p className="text-gray-600 mb-6">
//                   Skip the form and reach out to us directly on WhatsApp or give us a call.
//                 </p>
//                 <div className="space-y-3">
//                   <a
//                     href="https://wa.me/918886229339"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="block w-full bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-all text-center"
//                   >
//                     Open WhatsApp Now
//                   </a>
//                   <a
//                     href="tel:8886229339"
//                     className="block w-full bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-all text-center"
//                   >
//                     Call: 8886229339
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Alternative Contact Methods */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <SectionHeader
//             subtitle="Other Ways to Connect"
//             title="Choose Your Preferred Method"
//             description="We're available through multiple channels to make it easy for you to reach us."
//           />

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Phone,
//                 title: 'Call Us',
//                 description: 'Speak directly with our property consultants',
//                 action: 'tel:8886229339',
//                 label: '8886229339',
//                 color: 'blue',
//               },
//               {
//                 icon: MessageSquare,
//                 title: 'WhatsApp',
//                 description: 'Quick and convenient messaging',
//                 action: 'https://wa.me/918886229339',
//                 label: 'Chat Now',
//                 color: 'green',
//               },
//               {
//                 icon: Send,
//                 title: 'Email',
//                 description: 'Send us detailed inquiries via email',
//                 action: 'mailto:Amazonerealty@gmail.com',
//                 label: 'Send Email',
//                 color: 'orange',
//               },
//             ].map((method, index) => (
//               <motion.a
//                 key={index}
//                 href={method.action}
//                 target={method.color === 'green' ? '_blank' : undefined}
//                 rel={method.color === 'green' ? 'noopener noreferrer' : undefined}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all group text-center"
//               >
//                 <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
//                   method.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-600' :
//                   method.color === 'green' ? 'bg-green-100 group-hover:bg-green-500' :
//                   'bg-orange-100 group-hover:bg-orange-600'
//                 } transition-colors`}>
//                   <method.icon size={32} className={`${
//                     method.color === 'blue' ? 'text-blue-600 group-hover:text-white' :
//                     method.color === 'green' ? 'text-green-500 group-hover:text-white' :
//                     'text-orange-600 group-hover:text-white'
//                   } transition-colors`} />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
//                 <p className="text-gray-600 mb-4">{method.description}</p>
//                 <span className={`inline-block font-semibold ${
//                   method.color === 'blue' ? 'text-blue-600' :
//                   method.color === 'green' ? 'text-green-500' :
//                   'text-orange-600'
//                 }`}>
//                   {method.label}
//                 </span>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, User, MessageSquare } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

export function Enquiry() {
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

  const validateForm = () => {
    const newErrors = {
      name: '',
      phone: '',
      message: '',
    };

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
      
      // Reset form
      setFormData({ name: '', phone: '', message: '' });
      setErrors({ name: '', phone: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1758523671893-0ba21cf4260f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBoYXBweSUyMG5ldyUyMGhvbWUlMjBrZXlzfGVufDF8fHx8MTc3NDk1NDE5OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Enquiry Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-orange-600/90 text-white text-sm font-semibold rounded-full mb-6">
              Submit Enquiry
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Find Your <span className="text-orange-400">Dream Home</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Share your details and connect with us instantly on WhatsApp
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Get in Touch</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll reach out to you on WhatsApp with all the information you need.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={20} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-orange-500'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone size={20} className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-orange-500'
                      }`}
                      placeholder="Enter your 10-digit phone number"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                      <MessageSquare size={20} className="text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-orange-500'
                      }`}
                      placeholder="Tell us about your property requirements..."
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Submit & Connect on WhatsApp
                </button>
              </form>

              <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-sm text-gray-700">
                  <strong className="text-orange-600">Note:</strong> After submitting, you'll be redirected to WhatsApp where you can continue the conversation with our team.
                </p>
              </div>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-orange-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What Happens Next?</h3>
                <div className="space-y-6">
                  {[
                    {
                      step: '1',
                      title: 'Fill the Form',
                      description: 'Enter your details and requirements in the form.',
                    },
                    {
                      step: '2',
                      title: 'WhatsApp Redirect',
                      description: 'You will be redirected to WhatsApp with your message pre-filled.',
                    },
                    {
                      step: '3',
                      title: 'Get Connected',
                      description: 'Our team will respond promptly with all the information you need.',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 font-bold text-orange-600">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-600 mb-6">
                  Skip the form and reach out to us directly on WhatsApp or give us a call.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/918886229339"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={20} />
                    Open WhatsApp Now
                  </a>
                  <a
                    href="tel:8886229339"
                    className="block w-full bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Phone size={20} />
                    Call: 8886229339
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Other Ways to Connect"
            title="Choose Your Preferred Method"
            description="We're available through multiple channels to make it easy for you to reach us."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                description: 'Speak directly with our property consultants',
                action: 'tel:8886229339',
                label: '8886229339',
                color: 'blue',
              },
              {
                icon: MessageSquare,
                title: 'WhatsApp',
                description: 'Quick and convenient messaging',
                action: 'https://wa.me/918886229339',
                label: 'Chat Now',
                color: 'green',
              },
              {
                icon: Send,
                title: 'Email',
                description: 'Send us detailed inquiries via email',
                action: 'mailto:Amazonerealty@gmail.com',
                label: 'Send Email',
                color: 'orange',
              },
            ].map((method, index) => (
              <motion.a
                key={index}
                href={method.action}
                target={method.color === 'green' ? '_blank' : undefined}
                rel={method.color === 'green' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all group text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  method.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-600' :
                  method.color === 'green' ? 'bg-green-100 group-hover:bg-green-500' :
                  'bg-orange-100 group-hover:bg-orange-600'
                } transition-colors`}>
                  <method.icon size={32} className={`${
                    method.color === 'blue' ? 'text-blue-600 group-hover:text-white' :
                    method.color === 'green' ? 'text-green-500 group-hover:text-white' :
                    'text-orange-600 group-hover:text-white'
                  } transition-colors`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <span className={`inline-block font-semibold ${
                  method.color === 'blue' ? 'text-blue-600' :
                  method.color === 'green' ? 'text-green-500' :
                  'text-orange-600'
                }`}>
                  {method.label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}