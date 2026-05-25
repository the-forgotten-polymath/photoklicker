"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    src: '/images/image_11.jpg',
    title: 'Enchanting Pre-Wedding in Tehri Lake',
    summary: 'Our pre-wedding photography experience at Tehri Lake is an enchanting journey where your love story unfolds against the Garhwal Himalayas...',
    date: 'Jan 15, 2026',
    author: 'Jyotika Bedi'
  },
  {
    id: 2,
    src: '/images/image_10.png',
    title: 'Capture Special Moments: Dehradun Guide',
    summary: 'Discover how Photo Klicker Photography utilizes specialized high-end prime lenses and natural light to capture emotional wedding highlights in Chander Nagar...',
    date: 'Feb 02, 2026',
    author: 'Ayush Bhadula'
  },
  {
    id: 3,
    src: '/images/image_12.jpg',
    title: 'Photoklicker: Best Wedding Photographers',
    summary: 'Welcome to Photo Klicker Photography – where your moments become masterpieces! Unveiling our top five secrets behind timeless wedding portraits...',
    date: 'Mar 10, 2026',
    author: 'Maria'
  }
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-20 md:py-32 px-4 md:px-6 max-w-[1280px] mx-auto border-t border-border-color">
      
      {/* Title */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="uppercase text-primary text-sm font-semibold tracking-widest mb-4 inline-block">Journal</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] text-text-dark">
            Latest <span className="italic text-primary">Blogs</span>
          </h2>
          <p className="font-body text-text-gray mt-4 max-w-lg mx-auto">
            Stay inspired with our latest pre-wedding updates, styling guides, and professional advice.
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group cursor-pointer flex flex-col bg-bg-card rounded-3xl overflow-hidden border border-border-color/40 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image Box */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-white">
              <Image
                src={post.src}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Text details */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center gap-2 text-xs text-text-gray tracking-wide mb-3">
                  <span>{post.date}</span>
                  <span>&bull;</span>
                  <span>By {post.author}</span>
                </div>
                <h3 className="font-body font-semibold text-lg text-text-dark group-hover:text-primary transition-colors duration-300 mb-3">
                  {post.title}
                </h3>
                <p className="font-body text-text-gray text-xs leading-relaxed line-clamp-3 mb-6">
                  {post.summary}
                </p>
              </div>
              
              <span className="self-start text-xs font-semibold text-text-dark border-b border-text-dark pb-0.5 group-hover:text-primary group-hover:border-primary transition-colors uppercase tracking-wider">
                Read Article &rarr;
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
