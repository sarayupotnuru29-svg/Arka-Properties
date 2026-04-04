import React from 'react';
import { motion } from 'framer-motion';

// Import all local images
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';
import p5 from '../../assets/p5.png';
import p6 from '../../assets/p6.png';
import p7 from '../../assets/p7.png';
import p8 from '../../assets/p8.png';
import p9 from '../../assets/p9.png';
import p10 from '../../assets/p10.png';
import p11 from '../../assets/p11.png';
import p12 from '../../assets/p12.png';
import p13 from '../../assets/p13.png';
import p14 from '../../assets/p14.png';
import p15 from '../../assets/p15.png';
import p16 from '../../assets/p16.png';
import p17 from '../../assets/p17.png';
import p18 from '../../assets/p18.png';
import p19 from '../../assets/p19.png';
import p20 from '../../assets/p20.png';
import p21 from '../../assets/p21.png';
import p22 from '../../assets/p22.png';

const galleryImages = [
  { url: p1, title: "Project View 1" },
  { url: p2, title: "Project View 2" },
  { url: p3, title: "Project View 3" },
  { url: p4, title: "Project View 4" },
  { url: p5, title: "Project View 5" },
  { url: p6, title: "Project View 6" },
  { url: p7, title: "Project View 7" },
  { url: p8, title: "Project View 8" },
  { url: p9, title: "Project View 9" },
  { url: p10, title: "Project View 10" },
  { url: p11, title: "Project View 11" },
  { url: p12, title: "Project View 12" },
  { url: p13, title: "Project View 13" },
  { url: p14, title: "Project View 14" },
  { url: p15, title: "Project View 15" },
  { url: p16, title: "Project View 16" },
  { url: p17, title: "Project View 17" },
  { url: p18, title: "Project View 18" },
  { url: p19, title: "Project View 19" },
  { url: p20, title: "Project View 20" },
  { url: p21, title: "Project View 21" },
  { url: p22, title: "Project View 22" },
];

export const Gallery = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Project Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Explore our completed and ongoing projects showcasing premium infrastructure and modern community living.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 6) * 0.1 }} // Staggered animation
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg px-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};