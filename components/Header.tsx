import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-brand-black/95 backdrop-blur-md py-4 shadow-sm border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="relative z-50 group flex items-center gap-1">
          <h1 className={`font-sans text-2xl md:text-3xl font-medium tracking-tight transition-colors duration-300 lowercase ${
             scrolled || isOpen ? 'text-white' : 'text-white'
          }`}>
            kendy <span className="text-brand-red font-bold">+</span> kobayashi
          </h1>
          <span className={`hidden md:block font-sans font-light text-lg ml-2 ${scrolled || isOpen ? 'text-white/60' : 'text-white/60'}`}>arquitetos</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs font-mono font-medium uppercase tracking-widest hover:text-brand-red transition-colors duration-300 ${
                scrolled ? 'text-white/80' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className={`px-6 py-2 border text-xs font-mono font-medium uppercase tracking-widest transition-all duration-300 ${
              scrolled 
                ? 'border-brand-red text-brand-red hover:bg-brand-red hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-brand-black'
            }`}
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-8 h-8 text-brand-black" />
          ) : (
            <Menu className="w-8 h-8 text-white" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute inset-0 top-0 left-0 w-full h-screen bg-brand-gray flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-sans font-light text-brand-black hover:text-brand-red transition-colors lowercase"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;