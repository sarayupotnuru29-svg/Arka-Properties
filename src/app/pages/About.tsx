import { motion } from 'motion/react';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router';
import { Target, Heart, Shield, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

export function About() {
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver exceptional real estate solutions that transform dreams into reality, focusing on quality, trust, and customer satisfaction in every project we undertake.',
      image: 'https://images.unsplash.com/photo-1712696779652-dfca8766c5f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwcGxhbm5pbmclMjBkZXNpZ258ZW58MXx8fHwxNzc0OTU0MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'To be the most trusted name in real estate, known for creating vibrant communities where families thrive and create lasting memories together.',
      image: 'https://images.unsplash.com/photo-1758523671893-0ba21cf4260f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBoYXBweSUyMG5ldyUyMGhvbWUlMjBrZXlzfGVufDF8fHx8MTc3NDk1NDE5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Shield,
      title: 'Our Commitment',
      description: 'We pledge unwavering dedication to transparency, quality construction, timely delivery, and complete customer satisfaction in every aspect of our business.',
      image: 'https://images.unsplash.com/photo-1764684994222-739a69b1d61b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGd1YXJkJTIwc3VydmVpbGxhbmNlJTIwc2FmZXR5fGVufDF8fHx8MTc3NDk1NDIwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Lightbulb,
      title: 'Our Innovation',
      description: 'Embracing modern construction techniques, sustainable practices, and innovative designs to build homes that stand the test of time.',
      image: 'https://images.unsplash.com/photo-1769697264013-d460d0c72785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHN1c3RhaW5hYmxlJTIwYnVpbGRpbmclMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NzQ5NTQyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1771147372634-976f022c0033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwcm9vbSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQ5NTQyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About Us Hero"
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
              About Arka Property
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building Trust,
              <br />
              <span className="text-orange-400">Shaping Futures</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Your trusted partner in creating dream homes and thriving communities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
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
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                A Legacy of Excellence in Real Estate
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Arka Property has been a cornerstone in Vijayawada's real estate landscape for over a decade, specializing in residential developments that blend luxury, functionality, and contemporary design. Our journey began with a simple yet powerful vision: to create homes where families can build lasting memories.
                </p>
                <p>
                  With each project, we have stayed true to our core values of trust, transparency, and quality. Our dedicated team of experienced professionals works tirelessly to ensure every detail meets the highest standards, from initial planning to final handover and beyond.
                </p>
                <p>
                  Today, we take pride in having delivered numerous successful projects across prime locations in Andhra Pradesh, earning the trust of hundreds of satisfied homeowners. Our reputation is built on a solid foundation of integrity, exceptional craftsmanship, and unwavering commitment to customer satisfaction.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-72">
                  <img
                    src="https://images.unsplash.com/photo-1757924330358-a48d65664dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMHN1bnNldHxlbnwxfHx8fDE3NzQ5NTQxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Arka Property Building"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-56">
                  <img
                    src="https://images.unsplash.com/photo-1615725475020-1f7625d5ac72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzaWRlbnRpYWwlMjB0b3dlciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzQ5NTQxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Residential Complex"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-56">
                  <img
                    src="https://images.unsplash.com/photo-1767884898359-5851b2e95536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwc2t5bGluZSUyMHJlYWwlMjBlc3RhdGV8ZW58MXx8fHwxNzc0OTQyODQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Property Development"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-72">
                  <img
                    src="https://images.unsplash.com/photo-1520106392146-ef585c111254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzc0ODQxMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Interior Design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Core Values"
            title="What Drives Us Forward"
            description="Our principles guide every decision we make and every project we deliver."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="grid grid-cols-1 sm:grid-cols-5">
                  <div className="relative h-64 sm:h-auto sm:col-span-2 overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-orange-500/70 flex items-center justify-center">
                      <value.icon size={64} className="text-white" />
                    </div>
                  </div>
                  <div className="p-8 sm:col-span-3 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1632862378103-8248dccb7e3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwYnVpbGRpbmclMjBzaXRlfGVufDF8fHx8MTc3NDg1MjEwMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Construction Quality"
                  className="w-full h-[550px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
                Why Trust Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Experience That
                <br />
                <span className="text-orange-600">Speaks for Itself</span>
              </h2>
              <div className="space-y-4">
                {[
                  'Premium construction using finest materials and latest techniques',
                  'Strategic locations with excellent connectivity and infrastructure',
                  'Transparent processes with no hidden costs',
                  'On-time project delivery with dedicated management',
                  'World-class amenities for modern family living',
                  'Comprehensive post-handover support',
                  'Complete legal compliance and documentation',
                  'Expert team of architects and engineers',
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={24} className="text-orange-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-lg">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
              Ready to Experience the Arka Difference?
            </h2>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of satisfied homeowners who chose Arka Property for their dream homes. Let us start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                onClick={() => navigate('/projects')}
                className="bg-white text-orange-600 hover:bg-gray-100 group"
              >
                Explore Projects
                <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/contact')}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-orange-600"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
