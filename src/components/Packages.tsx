"use client";

import { motion } from 'framer-motion';

const packages = [
  {
    id: 1,
    title: "Professional Photography",
    price: "₹20,000",
    period: "per Day",
    features: [
      "Full day coverage (up to 8 hours)",
      "Single professional photographer",
      "High-resolution edited digital copies",
      "Ideal for birthday parties, ring ceremonies, and baby showers",
      "Online sharing gallery for friends & family",
      "Delivery within 15 working days"
    ],
    cta: "Select Package",
    popular: false
  },
  {
    id: 2,
    title: "Pre-Wedding Session",
    price: "₹30,000",
    period: "per Day",
    features: [
      "Breathtaking shots across Rishikesh, Tehri Lake, and Mussoorie",
      "Two expert candid photographers",
      "Styling consultation & multi-outfit shifts",
      "150+ high-end color-graded pictures",
      "3-minute cinematic video highlight reel",
      "Premium photo album keepsake",
      "Delivery within 20 working days"
    ],
    cta: "Book Pre-Wedding",
    popular: true
  },
  {
    id: 3,
    title: "Wedding Photography",
    price: "₹50,000",
    period: "per Day",
    features: [
      "Comprehensive wedding ceremony coverage",
      "Two traditional & one candid photographers",
      "One premium cinematic videographer",
      "Stunning high-resolution edited photo albums",
      "Complete drone sweeps and venue aesthetics",
      "Express digital copies delivery within 10 days",
      "Luxury custom hardbound wedding album book"
    ],
    cta: "Book Wedding Day",
    popular: false
  }
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 md:py-32 px-4 md:px-6 max-w-[1280px] mx-auto border-t border-border-color">
      
      {/* Title */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="uppercase text-primary text-sm font-semibold tracking-widest mb-4 inline-block">Pricing</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] text-text-dark">
            Our <span className="italic text-primary">Packages</span>
          </h2>
          <p className="font-body text-text-gray mt-4 max-w-lg mx-auto">
            Transparent pricing structured to provide the highest-grade cinematic documentation for your special occasions.
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`rounded-3xl p-8 flex flex-col justify-between relative border ${
              pkg.popular 
                ? 'bg-bg-dark text-white border-primary shadow-hover hover:-translate-y-2' 
                : 'bg-bg-card text-text-dark border-border-color/40 hover:-translate-y-1 hover:shadow-card'
            } transition-all duration-300`}
          >
            {pkg.popular && (
              <span className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Popular
              </span>
            )}
            
            <div>
              <h3 className="font-body font-semibold text-2xl mb-4">{pkg.title}</h3>
              <div className="flex items-baseline gap-2 mb-8 border-b border-border-color/20 pb-6">
                <span className="font-display text-4xl sm:text-5xl text-primary font-bold">{pkg.price}</span>
                <span className={`text-sm ${pkg.popular ? 'text-white/60' : 'text-text-gray'}`}>{pkg.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <svg 
                      className="w-5 h-5 text-primary shrink-0 mt-0.5" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className={pkg.popular ? 'text-white/80' : 'text-text-gray'}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className={`text-center py-4 rounded-xl font-semibold transition-all text-sm uppercase tracking-wider shadow-md ${
                pkg.popular 
                  ? 'bg-primary hover:bg-primary-dark text-white hover:scale-105' 
                  : 'bg-bg-light hover:bg-[#E8E4DF] text-text-dark border border-border-color'
              }`}
            >
              {pkg.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
