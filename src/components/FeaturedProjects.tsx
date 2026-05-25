"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All Projects', 'Wedding', 'Pre Wedding', 'Professional'];

const projects = [
  { id: 1, src: '/images/image_10.png', category: 'Wedding', title: 'The Royal Heritage Saga', area: 'Race Course, Dehradun', date: 'Oct 2025' },
  { id: 2, src: '/images/image_11.jpg', category: 'Pre Wedding', title: 'Tehri Lake Romance', area: 'Tehri Dam Reservoir', date: 'Nov 2025' },
  { id: 3, src: '/images/image_12.jpg', category: 'Professional', title: 'Bridal Editorial Portrait', area: 'Mussoorie Hills', date: 'Sep 2025' },
  { id: 4, src: '/images/image_4.jpg', category: 'Pre Wedding', title: 'Himalayan Sunrise Glow', area: 'Rishikesh Valley', date: 'Dec 2025' },
  { id: 5, src: '/images/image_5.jpg', category: 'Wedding', title: 'Sacred Mandap Pheras', area: 'Chander Nagar, Dehradun', date: 'Jan 2026' },
  { id: 6, src: '/images/image_6.jpg', category: 'Professional', title: 'Sartorial Silk Radiance', area: 'Jaipur Palace', date: 'Feb 2026' },
];

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects = activeCategory === 'All Projects' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 md:px-6 max-w-[1280px] mx-auto border-t border-border-color">
      
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="uppercase text-primary text-sm font-semibold tracking-widest mb-4 inline-block">Portfolio</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] text-text-dark">
            Featured <span className="italic text-primary">Portfolios</span>
          </h2>
        </motion.div>

        {/* Categories Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 active:scale-95 cursor-pointer ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-bg-card hover:bg-border-color text-text-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-card mb-6 bg-bg-card">
                <Image 
                  src={project.src} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-border-color/30 text-text-dark text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  {project.category}
                </div>
              </div>

              {/* Text content */}
              <h3 className="font-body font-semibold text-xl text-text-dark group-hover:text-primary transition-colors duration-300 mb-2">
                {project.title}
              </h3>
              <div className="flex justify-between text-xs text-text-gray tracking-wide">
                <span>{project.area}</span>
                <span>&bull;</span>
                <span>{project.date}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
