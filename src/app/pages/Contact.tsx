import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

export function Contact() {
  const handleWhatsApp = () => {
    const phone = '918886229339';
    const message = encodeURIComponent('Hello! I would like to get in touch with Arka Property.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
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
      details: 'Amazonerealty@gmail.com',
      link: 'mailto:Amazonerealty@gmail.com',
      description: 'Send us your queries',
      color: 'red',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'HRT Plaza, 2nd Floor, Benz Circle, Vijayawada',
      link: 'https://maps.google.com/?q=HRT+Plaza+Benz+Circle+Vijayawada',
      description: 'Visit our office',
      color: 'green',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '8886229339',
      link: 'https://wa.me/918886229339',
      description: 'Quick response guaranteed',
      color: 'emerald',
    },
  ];

  const businessHours = [
    { day: 'Monday - Saturday', hours: '10:00 AM - 7:00 PM', isOpen: true },
    { day: 'Sunday', hours: '10:00 AM - 5:00 PM', isOpen: true },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1771147372634-976f022c0033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwcm9vbSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQ5NTQyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact Us Hero"
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
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Contact Information"
            title="Multiple Ways to Reach Us"
            description="Choose the most convenient way to connect with our team."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.title === 'WhatsApp' || info.title === 'Address' ? '_blank' : undefined}
                rel={info.title === 'WhatsApp' || info.title === 'Address' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all ${
                  info.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-600' :
                  info.color === 'red' ? 'bg-red-100 group-hover:bg-red-600' :
                  info.color === 'green' ? 'bg-green-100 group-hover:bg-green-600' :
                  'bg-emerald-100 group-hover:bg-emerald-600'
                }`}>
                  <info.icon size={32} className={`transition-colors ${
                    info.color === 'blue' ? 'text-blue-600 group-hover:text-white' :
                    info.color === 'red' ? 'text-red-600 group-hover:text-white' :
                    info.color === 'green' ? 'text-green-600 group-hover:text-white' :
                    'text-emerald-600 group-hover:text-white'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-gray-600 text-sm mb-4 break-words leading-relaxed">{info.details}</p>
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

      {/* Business Hours Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1689152496131-9cecc95cde25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwaGFuZHNoYWtlJTIwYnVzaW5lc3MlMjBtZWV0aW5nfGVufDF8fHx8MTc3NDk1NDE5OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Business Hours"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
                Business Hours
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                We're Here
                <br />
                <span className="text-orange-600">When You Need Us</span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Our office is open throughout the week to serve you better. Visit us during business hours or schedule an appointment for personalized consultation.
              </p>

              <div className="space-y-5 mb-10">
                {businessHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-xl p-6 border-l-4 border-orange-600"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-900 font-bold text-lg">{schedule.day}</p>
                        <p className="text-orange-600 font-semibold mt-1">{schedule.hours}</p>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Open
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleWhatsApp}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <MessageCircle size={24} />
                Connect on WhatsApp
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Visit Us"
            title="Find Our Office"
            description="Located at Benz Circle, Vijayawada for easy accessibility."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.5887326595443!2d80.6436!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzIyLjMiTiA4MMKwMzgnMzcuMCJF!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Arka Property Office Location"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 bg-white rounded-2xl p-10 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={28} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Office Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    HRT Plaza Commercial Building,<br />
                    2nd Floor,<br />
                    Nara Chandra Babu Naidu Colony,<br />
                    Benz Circle, Vijayawada,<br />
                    Andhra Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={28} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Quick Contact</h3>
                  <p className="text-gray-600 mb-2">
                    <a href="tel:8886229339" className="hover:text-orange-600 transition-colors">
                      Phone: 8886229339
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:Amazonerealty@gmail.com" className="hover:text-orange-600 transition-colors break-all">
                      Amazonerealty@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={28} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Office Hours</h3>
                  <p className="text-gray-600 mb-2">Mon-Sat: 10 AM - 7 PM</p>
                  <p className="text-gray-600">Sunday: 10 AM - 5 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Have Questions? We Have Answers!
            </h2>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Our team is ready to assist you with property inquiries, site visits, or any other questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsApp}
                className="bg-white text-orange-600 px-10 py-5 rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-3 text-lg"
              >
                <MessageCircle size={28} />
                Chat on WhatsApp
              </button>
              <a
                href="tel:8886229339"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all hover:scale-105 inline-flex items-center gap-3 text-lg"
              >
                <Phone size={28} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
