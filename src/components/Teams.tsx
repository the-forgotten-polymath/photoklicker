"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const team = [
  {
    id: 1,
    src: '/images/image_13.jpg',
    name: 'Samantha',
    role: 'Lead Candid Photographer',
    bio: 'Specialist in capturing unprompted laughter and authentic family bonds.'
  },
  {
    id: 2,
    src: '/images/image_14.jpg',
    name: 'Angilie',
    role: 'Editorial Portrait Specialist',
    bio: 'Sculpts light and shadows to compose breathtaking editorial bridal solos.'
  },
  {
    id: 3,
    src: '/images/image_15.jpg',
    name: 'Maria',
    role: 'Cinematography Director',
    bio: 'Crafts movie-quality highlight reels with premium grading and pacing.'
  },
  {
    id: 4,
    src: '/images/image_16.png',
    name: 'Ayush Bhadula',
    role: 'Co-Founder & Chief Creative Officer',
    bio: 'Fuses MBA strategy with deep photography passion to lead Dehradun projects.'
  },
  {
    id: 5,
    src: '/images/image_17.png',
    name: 'Jyotika Bedi',
    role: 'Co-Founder & Creative Director',
    bio: 'Ensures fine-art perfection, visual storytelling, and beautiful styling across India.'
  }
];

export default function Teams() {
  return (
    <section id="team" className="py-20 md:py-32 px-4 md:px-6 max-w-[1280px] mx-auto border-t border-border-color">
      
      {/* Title */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="uppercase text-primary text-sm font-semibold tracking-widest mb-4 inline-block">Team</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] text-text-dark">
            Our <span className="italic text-primary">Teams</span>
          </h2>
          <p className="font-body text-text-gray mt-4 max-w-lg mx-auto">
            Meet the talented visionaries, directors, and artists behind Photoklicker Photography.
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {team.map((member, idx) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group cursor-pointer flex flex-col items-center text-center p-6 bg-bg-card rounded-3xl border border-border-color/40 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image container */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md bg-white">
              <Image
                src={member.src}
                alt={member.name}
                fill
                sizes="160px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <h3 className="font-body font-semibold text-xl text-text-dark group-hover:text-primary transition-colors duration-300">
              {member.name}
            </h3>
            <span className="text-primary font-heading italic text-sm mt-1 mb-4 block">
              {member.role}
            </span>
            <p className="font-body text-text-gray text-xs leading-relaxed max-w-xs">
              {member.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
