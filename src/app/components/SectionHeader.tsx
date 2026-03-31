import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: ReactNode;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, description, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={centered ? 'text-center mb-12' : 'mb-12'}
    >
      {subtitle && (
        <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <div className="text-gray-600 text-lg max-w-2xl mx-auto">
          {description}
        </div>
      )}
    </motion.div>
  );
}
