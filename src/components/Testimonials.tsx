"use client";

import { motion } from 'framer-motion';

const generatedTestimonials = [
  { id: 1, quote: "Thank u so much for all d care nd attention, along wid ur grt photographic skill during my sister's wedding day Wonderful, dis is more dan I expected.", name: "Jyoti Rawat", role: "Wedding" },
  { id: 2, quote: "They are highly professional and competent. We are super happy with their high quality service! Highly recommend them and their support. Our blessings.", name: "Pooja Negi", role: "Wedding" },
  { id: 3, quote: "Booked them for my baby shower. The pictures are so soft, elegant, and full of life. Highly recommended!", name: "Neha Gupta", role: "Baby Shoot" },
  { id: 4, quote: "Their cinematic videos brought tears to my eyes. Incredible attention to detail and storytelling at Tehri Lake.", name: "Meera Das", role: "Cinematography" },
  { id: 5, quote: "Outstanding quality and very timely delivery of the album. The edits were exactly what we discussed.", name: "Vikram Rajput", role: "Event" },
  { id: 6, quote: "Thank you for making my son's 1st birthday so memorable. The candids of him laughing are precious.", name: "Pooja Trivedi", role: "Baby Shoot" },
  { id: 7, quote: "A passionate team that truly loves what they do. It reflects in every single photograph they deliver.", name: "Tanya Grover", role: "Event" },
  { id: 8, quote: "I love how they focus on unscripted, natural moments rather than just posed shots in Mussoorie.", name: "Arjun Reddy", role: "Pre-Wedding" },
  { id: 9, quote: "They made us feel so comfortable during our pre-wedding shoot. The candid shots are just out of this world.", name: "Karan Mehta", role: "Pre-Wedding" },
  { id: 10, quote: "The best photography investment we made. The memories they captured are priceless and timeless.", name: "Divya & Sam", role: "Wedding" },
  { id: 11, quote: "Absolutely stunning drone shots and creative angles. They went above and beyond for our destination wedding.", name: "Aditi Rao", role: "Wedding" },
  { id: 12, quote: "Beautiful portraits and even better candids. Can't stop looking at my wedding album!", name: "Ishita Bose", role: "Wedding" },
  { id: 13, quote: "Super friendly team that blends in like family. They made everyone smile naturally.", name: "Gaurav Sen", role: "Event" },
  { id: 14, quote: "Brilliant color grading and editing. The photos have a timeless, elegant, and warm feel to them.", name: "Nishant Patel", role: "Wedding" },
  { id: 15, quote: "Thank you for bearing with our endless requests. You guys delivered exactly what we dreamed of.", name: "Shruti Hassan", role: "Pre-Wedding" },
  { id: 16, quote: "They captured my baby's expressions perfectly. Will definitely book them for future milestones.", name: "Pallavi Singh", role: "Baby Shoot" },
  { id: 17, quote: "Wonderful experience with Ayush and Jyotika! They were extremely patient and creative.", name: "Aman Negi", role: "Pre-Wedding" },
  { id: 18, quote: "Simply magical photos. The lighting, editing, and candids are absolute masterpieces.", name: "Sneha Rawat", role: "Wedding" },
  { id: 19, quote: "Best photographers in Dehradun. They captured our ring ceremony with true elegance.", name: "Deepak Joshi", role: "Ring Ceremony" },
  { id: 20, quote: "Professionalism and premium quality are what define Photoklicker. 10/10 recommended!", name: "Rahul Bahuguna", role: "Event" },
  { id: 21, quote: "Unbelievable clarity and cinematography. The drone shots of Tehri lake are jaw-dropping.", name: "Preeti Bhatt", role: "Pre-Wedding" },
  { id: 22, quote: "They did an amazing job with my sister's bridal solos. Every shot looks like a magazine cover.", name: "Monika Shah", role: "Wedding" },
  { id: 23, quote: "Very cooperative and cooperative under busy wedding schedules. Truly impressive work.", name: "Harish Thapa", role: "Wedding" },
  { id: 24, quote: "Lovely candid moments captured! We will cherish these pictures forever.", name: "Swati Nautiyal", role: "Baby Shoot" },
  { id: 25, quote: "Stellar composition and highly friendly crew. They make posing feel so natural.", name: "Divya Pant", role: "Maternity" },
  { id: 26, quote: "Highly competent and punctual. We got our delivery well ahead of time.", name: "Ravi Semwal", role: "Event" },
  { id: 27, quote: "Magnificent pre-wedding video shoot. The color tones are exceptionally high-end.", name: "Sameer Dhiman", role: "Pre-Wedding" },
  { id: 28, quote: "Warm and cozy maternity pictures. They handled the lighting beautifully on location.", name: "Kiran Bisht", role: "Maternity" },
  { id: 29, quote: "Photoklicker captured our ring ceremony so vibrantly! Extremely happy with the results.", name: "Nitin Sharma", role: "Ring Ceremony" },
  { id: 30, quote: "They captured the true soul of Dehradun in our shoot. Breathtaking backgrounds.", name: "Ananya Dobhal", role: "Pre-Wedding" },
  { id: 31, quote: "Bridal portrait shots are gorgeous. The detail edits on my dress are pristine.", name: "Jyotika Bhandari", role: "Wedding" },
  { id: 32, quote: "Absolutely premium service! Worth every single rupee spent.", name: "Amit Dabral", role: "Wedding" }
];

const topRow = generatedTestimonials.slice(0, 16);
const bottomRow = generatedTestimonials.slice(16, 32);

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#2C1F14] text-white py-20 md:py-32 relative overflow-hidden">
      
      {/* Background Layer */}
      <div className="absolute inset-0 bg-black/45 z-0"></div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 relative z-10 mb-16 flex flex-col md:flex-row justify-between items-end">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase text-primary text-sm font-semibold tracking-widest mb-4 inline-block">Testimonials</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-tight">
            <span className="italic">Customers</span> Reviews
          </h2>
          <div className="flex text-[#FFB800] gap-1 mt-6 items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ))}
            <span className="text-white ml-2 opacity-80 text-lg">4.9/5 from 300+ Clients</span>
          </div>
        </motion.div>
      </div>

      {/* Marquee Section using w-max to prevent overlap bugs */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 py-4 z-10">
        
        {/* Top Row: Left to Right (Rightwards slide) */}
        <div className="flex w-max flex-nowrap">
          <motion.div 
            className="flex gap-6 shrink-0 pr-6"
            animate={{ x: ["-100%", 0] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {topRow.map((t, i) => (
              <div key={`top-${i}`} className="w-[280px] md:w-[380px] shrink-0 bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors">
                <p className="font-body text-white/90 text-sm md:text-base leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-primary text-sm md:text-base">{t.name}</div>
                  <div className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div 
            className="flex gap-6 shrink-0 pr-6"
            animate={{ x: ["-100%", 0] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {topRow.map((t, i) => (
              <div key={`top-dup-${i}`} className="w-[280px] md:w-[380px] shrink-0 bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors">
                <p className="font-body text-white/90 text-sm md:text-base leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-primary text-sm md:text-base">{t.name}</div>
                  <div className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Row: Right to Left (Leftwards slide) */}
        <div className="flex w-max flex-nowrap">
          <motion.div 
            className="flex gap-6 shrink-0 pr-6"
            animate={{ x: [0, "-100%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {bottomRow.map((t, i) => (
              <div key={`bot-${i}`} className="w-[280px] md:w-[380px] shrink-0 bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors">
                <p className="font-body text-white/90 text-sm md:text-base leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-primary text-sm md:text-base">{t.name}</div>
                  <div className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div 
            className="flex gap-6 shrink-0 pr-6"
            animate={{ x: [0, "-100%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {bottomRow.map((t, i) => (
              <div key={`bot-dup-${i}`} className="w-[280px] md:w-[380px] shrink-0 bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors">
                <p className="font-body text-white/90 text-sm md:text-base leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-primary text-sm md:text-base">{t.name}</div>
                  <div className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
