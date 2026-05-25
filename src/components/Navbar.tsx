"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact us', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-border-color/50 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-display text-[#C9540A] lowercase text-3xl font-semibold tracking-wide hover:opacity-90 transition-opacity">
          photoklicker
        </Link>

        {/* Desktop Navigation links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="font-body text-[#1A1A1A] hover:text-[#C9540A] transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="#contact" 
            className="bg-[#C9540A] hover:bg-[#A8420A] text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-md text-sm uppercase tracking-wider inline-block"
          >
            Book Session &rarr;
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#1A1A1A] hover:text-[#C9540A] transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-border-color shadow-lg overflow-hidden absolute top-full left-0 w-full"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-body text-[#1A1A1A] hover:text-[#C9540A] transition-colors text-base font-semibold py-2 border-b border-border-color/35 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="bg-[#C9540A] hover:bg-[#A8420A] text-white text-center py-4 rounded-full font-semibold transition-colors uppercase tracking-wider text-sm mt-4 shadow-md block"
              >
                Book Session &rarr;
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
