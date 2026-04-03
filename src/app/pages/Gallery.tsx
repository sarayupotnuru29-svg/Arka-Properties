import React from 'react';
import { motion } from 'framer-motion';

// Array containing project image URLs from the requested source
const galleryImages = [
  {
    url: "https://www.srksreecity.com/wp-content/uploads/2024/10/Sree-City-Kubera-Grand-Entrance.jpg",
    title: "Sree City Kubera Entrance"
  },
  {
    url: "https://www.srksreecity.com/wp-content/uploads/2024/10/Sree-City-Vaibhav-Layout.jpg",
    title: "Project Layout Plan"
  },
  {
    url: "https://www.srksreecity.com/wp-content/uploads/2024/10/Park-Area-Development.jpg",
    title: "Landscaped Park"
  },
  {
    url: "https://www.srksreecity.com/wp-content/uploads/2024/10/Villa-Construction-Site.jpg",
    title: "Villa Development"
  },
  {
    url: "https://www.srksreecity.com/wp-content/uploads/2024/10/Clubhouse-Elevation.jpg",
    title: "Modern Clubhouse"
  },
  {
    url: "https://www.srksreecity.com/wp-content/uploads/2024/10/Sowbhagya-Neppalle-Entrance.jpg",
    title: "Sowbhagya Neppalle View"
  }
];

// Using Named Export (export const Gallery) to match your routes.tsx import
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
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback image in case external source links break
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80";
                  }}
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