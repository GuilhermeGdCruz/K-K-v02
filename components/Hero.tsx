import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá, gostaria de falar com um arquiteto especialista.`, '_blank');
  };

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-70">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2928&auto=format&fit=crop"
          alt="Luxury Architecture Residence"
          className="w-full h-full object-cover grayscale-[20%] contrast-[1.1]"
        />
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block py-2 px-4 border border-brand-red text-brand-red bg-black/40 backdrop-blur-md font-mono text-xs uppercase tracking-[0.2em] mb-8">
            Maringá • Porto Rico
          </span>
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tight drop-shadow-2xl">
            Arquitetura para <br />
            <span className="italic text-brand-red">ser sentida.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl font-sans font-light leading-relaxed mb-12 drop-shadow-lg"
        >
          Projetos de alto padrão que transcendem a estética. 
          Criamos refúgios de conforto, equilíbrio e exclusividade para você viver o melhor da vida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <Button 
            variant="primary" 
            className="text-base py-5 px-10 shadow-brand-red/40 shadow-2xl border-none"
            icon={<ArrowRight size={20} />}
            onClick={handleWhatsAppClick}
          >
            Falar com arquiteto especialista agora
          </Button>
          <p className="mt-4 text-white/60 text-xs font-mono uppercase tracking-widest bg-black/30 px-3 py-1 rounded backdrop-blur-sm">
            Atendimento exclusivo via WhatsApp
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-12 text-white/50"
      >
        <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;