import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight, X, ImageIcon } from 'lucide-react';
import { PROJECTS, CONTACT_INFO } from '../constants';
import Button from './ui/Button';

const Portfolio: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=Vi os projetos no site e gostaria de saber mais.`, '_blank');
  };

  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-brand-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-red font-mono text-xs uppercase tracking-widest mb-2 block">Nosso Portfólio</span>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4 tracking-tight">
              Projetos que <span className="text-brand-red italic">Inspiram</span>.
            </h2>
          </motion.div>
        </div>

        {/* Grid - Exactly 3 projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`project-card-${project.id}`}
              onClick={() => setSelectedId(selectedId === project.id ? null : project.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group relative h-[500px] overflow-hidden cursor-pointer bg-brand-dark border border-white/5 transition-all duration-500 ${selectedId && selectedId !== project.id ? 'opacity-40 grayscale' : 'opacity-100'}`}
            >
              {/* Image */}
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-brand-red text-xs font-mono uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-white text-2xl font-sans font-bold mb-1">{project.title}</h3>
                    <p className="text-white/60 font-mono text-xs uppercase tracking-wide mb-6">{project.location}</p>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white text-sm font-bold border-b border-brand-red inline-block pb-1">
                      {selectedId === project.id ? 'Fechar Galeria' : 'Ver Galeria Completa'} <ImageIcon size={14} />
                    </div>
                 </div>
              </div>

              {/* Active Indicator */}
              {selectedId === project.id && (
                <motion.div 
                  layoutId="active-indicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-brand-red" 
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Dynamic Gallery Expansion Area */}
        <AnimatePresence mode="wait">
          {selectedProject && (
            <motion.div
              key="gallery-section"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-16 pb-8 border-t border-white/10 mt-16">
                <div className="flex justify-between items-start mb-10">
                   <div className="max-w-3xl">
                      <motion.h3 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-3xl text-white font-bold mb-4"
                      >
                        {selectedProject.title} <span className="text-brand-red">.</span>
                      </motion.h3>
                      <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-gray text-lg font-light leading-relaxed"
                      >
                        {selectedProject.description}
                      </motion.p>
                   </div>
                   <button 
                      onClick={() => setSelectedId(null)}
                      className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-brand-black transition-colors"
                   >
                     <X size={24} />
                   </button>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[500px]">
                  {selectedProject.gallery.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className={`relative overflow-hidden rounded-sm group ${
                        i === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Detalhe ${selectedProject.title} ${i+1}`}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10 flex justify-center">
                   <Button variant="secondary" onClick={handleWhatsAppClick}>
                      Quero um projeto como este
                   </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        {!selectedId && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="mt-20 text-center"
          >
            <p className="text-white/60 mb-8 font-sans text-lg">Gostou do que viu? Vamos criar algo exclusivo para você.</p>
            <Button variant="primary" onClick={handleWhatsAppClick}>
              Falar com arquiteto especialista agora
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;