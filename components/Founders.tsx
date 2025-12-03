import React from 'react';
import { motion } from 'framer-motion';

const Founders: React.FC = () => {
  return (
    <section className="bg-white py-24 lg:py-32 border-b border-brand-gray/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
            <span className="text-brand-red font-mono text-xs uppercase tracking-widest mb-2 block">Quem Somos</span>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-brand-black tracking-tight">
              Mentes por trás do <span className="italic">traço</span>.
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Kendy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
             <div className="w-full h-[400px] md:h-[500px] bg-brand-gray/20 mb-8 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                  alt="Kendy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
             </div>
             <h3 className="text-2xl font-bold font-sans text-brand-black mb-1">Kendy</h3>
             <p className="text-brand-red font-mono text-xs uppercase tracking-widest mb-4">Sócio Fundador • Arquiteto Criativo</p>
             <p className="text-brand-dark/70 font-light leading-relaxed">
               Com uma visão artística aguçada, Kendy lidera a concepção criativa dos projetos. Sua abordagem foca na tradução de emoções em formas arquitetônicas, garantindo que cada residência possua uma identidade única e atemporal.
             </p>
          </motion.div>

          {/* Kobayashi */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group"
          >
             <div className="w-full h-[400px] md:h-[500px] bg-brand-gray/20 mb-8 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop" 
                  alt="Kobayashi"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
             </div>
             <h3 className="text-2xl font-bold font-sans text-brand-black mb-1">Kobayashi</h3>
             <p className="text-brand-red font-mono text-xs uppercase tracking-widest mb-4">Sócio Fundador • Diretor Técnico</p>
             <p className="text-brand-dark/70 font-light leading-relaxed">
               Responsável pela materialização dos sonhos. Kobayashi une a precisão técnica à estética, assegurando que as soluções construtivas sejam eficientes, duráveis e fiéis ao design original. Especialista em gestão de obras de alto padrão.
             </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founders;