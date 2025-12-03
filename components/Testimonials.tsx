import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-sans font-bold text-brand-black text-center"
          >
            Feedback<span className="text-brand-red">.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-brand-gray/30 divide-y md:divide-y-0 md:divide-x divide-brand-gray/30">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-10 lg:p-12 hover:bg-brand-gray/10 transition-colors duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-6 text-brand-red text-4xl font-serif">"</div>
              <p className="text-lg text-brand-dark font-sans font-light leading-relaxed mb-8">
                {t.quote}
              </p>
              <div className="mt-auto">
                <h4 className="font-bold text-brand-black font-sans">{t.author}</h4>
                <p className="text-xs text-brand-black/50 font-mono uppercase tracking-widest mt-1">{t.projectInfo}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Media Logos */}
        <div className="mt-24 pt-12 border-t border-brand-black/5">
          <p className="text-center font-mono text-xs uppercase tracking-widest text-brand-black/40 mb-10">Publicado em</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:opacity-100 transition-all duration-500">
            <span className="text-xl font-sans font-black tracking-tighter">CASA VOGUE</span>
            <span className="text-xl font-sans font-black tracking-tighter">ARCHDAILY</span>
            <span className="text-xl font-sans font-black tracking-tighter">DEZEEN</span>
            <span className="text-xl font-sans font-black tracking-tighter">GALERIA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;