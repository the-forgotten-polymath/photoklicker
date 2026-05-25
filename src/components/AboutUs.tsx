"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-6 max-w-[1280px] mx-auto border-t border-border-color">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Pull Quote + Background Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-bg-dark rounded-2xl relative overflow-hidden text-white h-full flex flex-col justify-center min-h-[400px] lg:min-h-[500px]"
        >
          <Image 
            src="/images/image_3.png" 
            alt="Cinematic frame by PhotoKlicker" 
            fill 
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
          
          <div className="relative z-10 p-10 md:p-16">
            <div className="text-[120px] font-heading italic text-primary/70 absolute -top-4 left-4 leading-none">
              &ldquo;
            </div>
            <p className="font-heading text-3xl md:text-4xl lg:text-[40px] leading-tight mt-12 text-white shadow-sm">
              Photography is the art of frozen time... capturing moments that are too precious to let go.
            </p>
          </div>
        </motion.div>

        {/* Right Side: About Us Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-start"
        >
          <span className="text-primary italic font-heading text-lg mb-4">About Us</span>
          <h2 className="font-heading text-4xl md:text-5xl leading-tight text-text-dark mb-6">
            <span className="italic text-primary">Capture</span> Your Special Moments with <span className="italic text-primary">Photoklicker Photography</span>
          </h2>
          <p className="font-body text-text-gray mb-6 leading-relaxed">
            Welcome to Photo Klicker Photography, the best pre-wedding and wedding photographers in Dehradun! From dreamy shoots along the pristine waters of Tehri Lake to grand emotional wedding sagas, we don’t just take photos—we freeze time.
          </p>
          <p className="font-body text-text-gray mb-12 leading-relaxed">
            Our talented team works tirelessly to encapsulate the laughter, the sparkles, and the quiet glances of your milestones. We actively serve clients across:
            <span className="block mt-4 font-semibold text-text-dark">
              Rishikesh &bull; Haridwar &bull; Mussoorie &bull; Tehri &bull; Delhi &bull; Jaipur
            </span>
          </p>
          
          <div className="grid grid-cols-3 gap-8 w-full border-t border-border-color pt-8">
            <div>
              <div className="font-display text-4xl text-primary mb-1">500+</div>
              <div className="text-xs text-text-gray uppercase tracking-wider font-semibold">Projects</div>
            </div>
            <div>
              <div className="font-display text-4xl text-primary mb-1">12+</div>
              <div className="text-xs text-text-gray uppercase tracking-wider font-semibold">Years Exp</div>
            </div>
            <div>
              <div className="font-display text-4xl text-primary mb-1">49+</div>
              <div className="text-xs text-text-gray uppercase tracking-wider font-semibold">Awards</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
