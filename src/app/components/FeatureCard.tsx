import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ image, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all group"
    >
      <div className="relative overflow-hidden rounded-lg mb-4 h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
