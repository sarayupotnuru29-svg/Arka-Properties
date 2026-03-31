import { motion } from 'motion/react';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeader } from '../components/SectionHeader';
import { MapPin, Home, Sparkles, CheckCircle, Building2, Users, Shield, Zap } from 'lucide-react';

export function Projects() {
  const handleWhatsApp = (projectName: string) => {
    const phone = '918886229339';
    const message = encodeURIComponent(`Hello! I'm interested in ${projectName}. Please share more details about this project.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const projects = [
    {
      id: 1,
      title: 'Sree City Kubera',
      location: 'Prime Location, Vijayawada',
      description: 'Experience the epitome of luxury living with Sree City Kubera. This premium residential project features world-class amenities, modern architecture, and spacious apartments designed for contemporary families who value quality and convenience.',
      image: 'https://srksreecity.com/wp-content/uploads/2025/01/sreecity-1.jpg',
      features: [
        'Premium 2BHK & 3BHK apartments',
        'Clubhouse with gym and indoor games',
        'Landscaped gardens and walking tracks',
        'Children\'s play area',
        '24/7 security and power backup',
        'Covered parking',
      ],
    },
    {
      id: 2,
      title: 'Sree City Vaibhav',
      location: 'Developing Area, Vijayawada',
      description: 'Sree City Vaibhav brings together modern architecture and comfort. Designed with meticulous attention to detail, this project offers the perfect blend of luxury and affordability for growing families seeking quality homes.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyIW8i0RlmhEeFeSNZPUn8kpvTCkOKp7q0A&s',
      features: [
        'Spacious 2BHK & 3BHK units',
        'Modern elevation and design',
        'Community hall and recreation area',
        'Ample parking space',
        'Water supply and drainage system',
        'Near schools and hospitals',
      ],
    },
    {
      id: 3,
      title: 'Sowbhagya Neppalle',
      location: 'Neppalle, Andhra Pradesh',
      description: 'Your dream home awaits in the serene community of Sowbhagya Neppalle. This project offers excellent connectivity, modern infrastructure, and a peaceful living environment perfect for families seeking tranquility.',
      image: 'https://www.srksreecity.com/wp-content/uploads/2025/08/Buy-Plots-in-Vijayawada-%E2%80%93-Discover-SRK-SreeCity-Sowbhagya-Neppalle-1.png',
      features: [
        'Affordable 2BHK apartments',
        'Well-planned layout',
        'Green spaces and open areas',
        'Public transport access',
        'Growing neighborhood',
        'Investment-friendly pricing',
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://www.srksreecity.com/wp-content/uploads/2025/02/kubera-banner-2.jpg"
            alt="Projects Hero"
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
              Our Projects
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium <span className="text-orange-400">Residential Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Discover quality homes crafted with care and precision in prime locations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Featured Projects"
            title="Find Your Perfect Home"
            description="Each project is designed to provide modern living with world-class amenities and excellent connectivity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                onEnquire={() => handleWhatsApp(project.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Project Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow-lg">
                    Available Now
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="flex items-center gap-2 text-orange-600 mb-4">
                  <MapPin size={20} />
                  <span className="font-medium">{project.location}</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                    <Sparkles size={24} className="text-orange-600" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-orange-50 p-3 rounded-lg">
                        <CheckCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsApp(project.title)}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <Home size={20} />
                  Enquire About This Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Projects */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Project Excellence"
            title="Why Choose Arka Property Projects"
            description="Every project we develop is built on a foundation of quality, trust, and customer satisfaction."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Prime Locations',
                description: 'Strategic locations with excellent connectivity to schools, hospitals, and commercial hubs.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlrC399scOTDCCJAFdEeVwuy9C8zYJdcewcg&s',
              },
              {
                icon: Building2,
                title: 'Quality Construction',
                description: 'Premium materials and modern construction techniques ensure durability and elegance.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhkDyQkHQbKdEPlspbKg4TB6c0PHAu7ShNA&s',
              },
              {
                icon: Users,
                title: 'Modern Amenities',
                description: 'World-class facilities including clubhouse, gym, and recreational spaces for all ages.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QaNM2EFxS4XhAIPRZzqgenCGWDwkG7dkNQ&s',
              },
              {
                icon: Shield,
                title: 'Timely Delivery',
                description: 'Our commitment to on-time project completion with transparent communication.',
                image: 'https://www.assethomes.in/wp-content/uploads/2025/12/Timely-Delivery-in-Real-Estate-A-Sign-of-Quality-and-Professionalism.jpg',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-6">
                    <item.icon size={48} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Highlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Premium Amenities"
            title="Lifestyle at Its Finest"
            description="Experience world-class facilities designed to enhance your everyday living."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Building2, label: 'Clubhouse' },
              { icon: Users, label: 'Gymnasium' },
              { icon: Zap, label: 'Power Backup' },
              { icon: Shield, label: '24/7 Security' },
              { label: 'Swimming Pool' },
              { label: 'Children\'s Play Area' },
              { label: 'Landscaped Gardens' },
              { label: 'Indoor Games' },
            ].map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-6 rounded-xl text-center hover:shadow-lg transition-all"
              >
                {amenity.icon && <amenity.icon size={32} className="text-orange-600 mx-auto mb-3" />}
                <p className="font-semibold text-gray-900">{amenity.label}</p>
              </motion.div>
            ))}
          </div>
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
              Schedule a Site Visit Today
            </h2>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Experience our projects firsthand. Our team will guide you through the property and answer all your questions.
            </p>
            <button
              onClick={() => handleWhatsApp('I would like to schedule a site visit.')}
              className="bg-white text-orange-600 px-10 py-5 rounded-lg font-semibold hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-3 text-lg"
            >
              <Home size={28} />
              Book a Site Visit
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
