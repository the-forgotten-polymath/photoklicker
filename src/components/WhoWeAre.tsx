"use client";

import { motion } from 'framer-motion';

export default function WhoWeAre() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 max-w-[1280px] mx-auto border-t border-border-color">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        
        {/* Left Side: Section label inline */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:w-1/4"
        >
          <span className="text-text-gray text-sm uppercase tracking-widest font-semibold inline-block mb-4 md:mb-0">
            Who we are
          </span>
        </motion.div>
        
        {/* Right Side: Introduction strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-3/4"
        >
          <p className="font-heading text-2xl md:text-3xl lg:text-[40px] leading-snug text-text-dark">
            Welcome to <strong className="font-bold">Photo Klicker Photography</strong>—where your moments become timeless masterpieces! We are a <span className="italic text-primary font-bold">creative</span> photography studio crafting heartfelt, emotional, and timeless frames designed to <span className="italic text-primary font-bold">capture</span> your love stories beautifully across Dehradun and the Garhwal Himalayas.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
