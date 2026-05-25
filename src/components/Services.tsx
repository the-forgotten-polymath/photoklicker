"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Camera, Heart, Baby, Gift, Briefcase, Sparkles, Smile, Film, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 1,
    icon: Heart,
    image: '/images/image_4.jpg',
    title: 'Pre-Wedding Shoot',
    description: 'Capture love with the best pre-wedding photographers in Dehradun, telling your unique romance in cinematic style.',
    longDescription: 'Our pre-wedding shoots are spectacular visual journeys set in Dehradun, Tehri Lake, and the gorgeous Garhwal Himalayas. We collaborate with you to organize beautiful outfit combinations, scout stunning natural settings, and capture raw, emotional interactions that perfectly set the mood before you say "I do".',
  },
  {
    id: 2,
    icon: Camera,
    image: '/images/image_5.jpg',
    title: 'Wedding Photography',
    description: 'Capturing the magic of your love story—one timeless frame at a time, documenting each unscripted emotion.',
    longDescription: 'We specialize in fine-art wedding photography that preserves the emotional weight, colors, and sacred rituals of your special day. From traditional ceremonies to high-energy dance floors, our professional team documents all unscripted laughter, bridal elegance, and family bonds in outstanding resolution.',
  },
  {
    id: 3,
    icon: Sparkles,
    image: '/images/image_6.jpg',
    title: 'Bridal Portrait',
    description: 'Elegance, emotion, timeless beauty—immortalizing bridal radiance with specialized editorial closeups.',
    longDescription: 'Our bridal portrait session is designed to showcase the intricate designs of your attire, ornaments, and the radiant emotions of a bride. We craft creative, studio-quality lighting on-location to freeze this milestone of pure elegance and heritage in beautiful artistic portraits.',
  },
  {
    id: 4,
    icon: Smile,
    image: '/images/image_7.jpg',
    title: 'Maternity Shoot',
    description: 'Stylish, ethereal maternity shoots for radiant moms-to-be, celebrating new beginnings with warm glows.',
    longDescription: 'Celebrate the magic of motherhood. Our maternity sessions focus on comfortable settings, soft lighting, and beautiful natural environments to capture the peaceful, radiant glow of the mother-to-be. We ensure a relaxed, elegant experience for your entire family.',
  },
  {
    id: 5,
    icon: Baby,
    image: '/images/image_8.jpg',
    title: 'Baby Photography',
    description: 'Tiny toes, endless love—captured forever. Patience-driven candid shots of your child’s precious early milestones.',
    longDescription: 'We capture the innocent smiles, tiny details, and playful expressions of your little ones. Our photographers are highly patient and skilled at making babies comfortable, creating cute, soft, and vibrant visual treasures that you will cherish forever.',
  },
  {
    id: 6,
    icon: Gift,
    image: '/images/image_9.jpg',
    title: 'Ring Ceremony',
    description: 'Love, sparkle, and forever—capturing your ring ceremony magic and emotional exchanges.',
    longDescription: 'Your engagement is the first official step towards a lifetime of love. We document the ring exchanges, the emotional embraces of family members, and the joyful celebration of your promises in clean, bright, and detailed candid photography.',
  },
  {
    id: 7,
    icon: Briefcase,
    image: '/images/image_10.png',
    title: 'Corporate Events',
    description: 'Professional visual documentation for corporate seminars, branding profiles, and executive conferences.',
    longDescription: 'Crisp, high-fidelity corporate and event coverage. We cover summit panels, team networking events, official product launches, and capture polished executive business portraits ideal for branding, website portfolios, and PR publications.',
  },
  {
    id: 8,
    icon: Film,
    image: '/images/image_11.jpg',
    title: 'Cinematic Highlights',
    description: 'High-definition video reels and cinematic highlight packages with premium storytelling and color grading.',
    longDescription: 'Turn your live event into a movie. We combine dynamic drone frames, ultra-HD videography, rich sound design, and elegant color grading to compose custom, cinematic highlight reels that tell your story with pacing and emotional punch.',
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [selectedService, setSelectedService] = useState<any | null>(null);

  // Responsiveness tracking
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = services.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [itemsPerView, currentIndex]);

  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-6 max-w-[1280px] mx-auto overflow-hidden">
      <div className="flex items-end justify-between mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="uppercase text-primary text-sm font-semibold tracking-widest mb-4 inline-block">Services</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] text-text-dark">
            Our <span className="italic text-primary">Services</span>
          </h2>
        </motion.div>
        
        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-border-color flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 cursor-pointer z-10"
            aria-label="Previous Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-border-color flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 cursor-pointer z-10"
            aria-label="Next Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-visible">
        <motion.div 
          className="flex gap-6 w-full"
          animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {services.map((service, idx) => {
            const isActive = idx >= currentIndex && idx < currentIndex + itemsPerView;
            return (
              <motion.div 
                key={service.id} 
                className="bg-bg-card rounded-[20px] p-8 transition-all duration-300 hover:shadow-hover group flex flex-col justify-between h-[450px] cursor-pointer shrink-0 border border-border-color/40"
                style={{ 
                  width: itemsPerView === 4 
                    ? "calc(25% - 18px)" 
                    : itemsPerView === 2 
                    ? "calc(50% - 12px)" 
                    : "100%" 
                }}
                animate={{ 
                  scale: isActive ? 1 : 0.95,
                  opacity: isActive ? 1 : 0.4
                }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedService(service)}
              >
                <div>
                  {/* Icon jumps on hover */}
                  <div className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    <service.icon strokeWidth={1.5} className="w-full h-full" />
                  </div>
                  <h3 className="font-body font-semibold text-xl text-text-dark mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="font-body text-text-gray text-sm leading-relaxed mb-8 line-clamp-4">
                    {service.description}
                  </p>
                </div>
                <button 
                  className="self-start text-sm font-semibold text-text-dark border-b border-text-dark pb-1 group-hover:text-primary group-hover:border-primary transition-colors uppercase tracking-wider"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service);
                  }}
                >
                  Read More
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Page Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "w-8 bg-primary" : "w-2.5 bg-border-color"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Pop Description Overlay Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-bg-light text-text-dark rounded-3xl max-w-[850px] w-full overflow-hidden shadow-2xl relative grid grid-cols-1 md:grid-cols-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/45 text-white flex items-center justify-center hover:bg-black/60 transition-colors border border-white/10"
                aria-label="Close details"
              >
                <X size={20} />
              </button>

              {/* Left Side: Photo */}
              <div className="relative h-60 md:h-full min-h-[300px] w-full">
                <Image 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20"></div>
              </div>

              {/* Right Side: Text & CTA */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-primary italic font-heading text-lg mb-2 block">Service Spotlight</span>
                  <h3 className="font-heading text-3xl text-text-dark mb-6">{selectedService.title}</h3>
                  <p className="font-body text-text-gray text-sm leading-relaxed mb-8">
                    {selectedService.longDescription}
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-md uppercase tracking-wider text-xs text-center inline-block"
                >
                  Book this Session
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
