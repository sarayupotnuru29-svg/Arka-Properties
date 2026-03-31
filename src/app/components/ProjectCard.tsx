import { motion } from 'motion/react';
import { Button } from './Button';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  onEnquire: () => void;
}

export function ProjectCard({ image, title, description, onEnquire }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <Button onClick={onEnquire} className="w-full">
          Enquire Now
        </Button>
      </div>
    </motion.div>
  );
}
