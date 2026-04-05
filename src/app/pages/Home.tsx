import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeader } from '../components/SectionHeader';
import { Award, Users, Building2, Shield, ArrowRight } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();

  const handleWhatsApp = (message: string = '') => {
    const phone = '918886229339';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  const featuredProjects = [
    {
      id: 1,
      title: 'Sree City Kubera',
      description: 'Premium gated community with modern amenities. Experience luxury living with 2BHK & 3BHK apartments in a prime location with excellent connectivity.',
      image: 'https://srksreecity.com/wp-content/uploads/2025/01/sreecity-1.jpg',
    },
    {
      id: 2,
      title: 'Sree City Vaibhav',
      description: 'Contemporary apartments designed for modern families. Spacious layouts with quality construction and world-class facilities.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyIW8i0RlmhEeFeSNZPUn8kpvTCkOKp7q0A&s',
    },
    {
      id: 3,
      title: 'Sowbhagya Neppalle',
      description: 'Affordable housing with excellent infrastructure. Perfect investment opportunity in a growing neighborhood with great connectivity.',
      image: 'https://www.srksreecity.com/wp-content/uploads/2025/08/Buy-Plots-in-Vijayawada-%E2%80%93-Discover-SRK-SreeCity-Sowbhagya-Neppalle-1.png',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Trusted Expertise',
      description: 'Decades of experience in delivering quality residential projects with complete transparency.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIhGb48iBDIux771cf6aNwb3T1evlXhGuEw&s',
    },
    {
      title: 'Premium Quality',
      description: 'Superior construction standards using the finest materials and modern building techniques.',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/019/803/526/small/premium-quality-rubber-stamp-red-premium-quality-rubber-grunge-stamp-seal-illustration-vector.jpg',
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your happiness is our priority. Dedicated support from inquiry to post-possession.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg2tvgzuZZgZzmxC9KX1mv8nkRyohKUlWSEg&s',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://pbs.twimg.com/media/G2epUzaWYAA5wOZ.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-orange-600/90 text-white text-sm font-semibold rounded-full mb-6">
                Premium Real Estate in Vijayawada
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Find Your Dream Property with{' '}
              <span className="text-orange-400">Arka Property</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed"
            >
              Discover premium residential projects in prime locations. Quality construction, modern amenities, and exceptional service - all at Arka Property.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button onClick={() => navigate('/projects')} className="group">
                View Projects
                <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/contact')}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-orange-600"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Projects"
            title="Featured Properties"
            description="Explore our carefully crafted residential projects that blend luxury, comfort, and modern design."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                onEnquire={() => handleWhatsApp(`I'm interested in ${project.title}. Please share more details.`)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" onClick={() => navigate('/projects')} className="group">
              View All Projects
              <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Building Trust,
                <br />
                <span className="text-orange-600">Delivering Excellence</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Arka Property has been a trusted name in Vijayawada's real estate sector, committed to delivering exceptional residential projects that exceed expectations. With years of expertise and a customer-first approach, we transform dreams into reality.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our focus on quality construction, strategic locations, and world-class amenities makes us the preferred choice for discerning homebuyers across Andhra Pradesh.
              </p>
              <Button onClick={() => navigate('/about')} className="group">
                Learn More About Us
                <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl h-64">
                    <img
                      src="https://townsquareproperties.in/wp-content/uploads/2023/03/Arka-project-img-04.jpg"
                      alt="Interior"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl h-80">
                    <img
                      src="https://static.360realtors.com/properties/photos/1237/mini/1.jpg"
                      alt="Amenities"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl h-80">
                    <img
                      src="https://townsquareproperties.in/wp-content/uploads/2023/03/Arka-project-img-05.jpg"
                      alt="Planning"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl h-64">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJKC1AcgowpUqKCHXVmdfHL9dR9W43Qg5diw&s"
                      alt="Sustainability"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl shadow-2xl z-10">
                <p className="text-5xl font-bold mb-2">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Why Choose Us"
            title="Your Trust is Our Foundation"
            description="We combine expertise, quality, and customer service to deliver exceptional real estate experiences."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, value: '10+', label: 'Years Experience' },
              { icon: Building2, value: '15+', label: 'Projects Completed' },
              { icon: Users, value: '500+', label: 'Happy Families' },
              { icon: Shield, value: '100%', label: 'Quality Assured' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon size={48} className="mx-auto mb-4 opacity-90" />
                <p className="text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm opacity-90 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-6">
              Get Started Today
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our expert team and let us help you find the perfect property that matches your lifestyle and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/enquiry')} className="group">
                Submit Enquiry
                <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => handleWhatsApp('Hello! I would like to schedule a property visit.')}
              >
                Contact on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
