import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Heart, LayoutTemplate, Star } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-brand-red" />,
      title: "Foco Sensorial",
      description: "Não é apenas sobre o que se vê, mas o que se sente. Projetamos experiências de conforto e bem-estar."
    },
    {
      icon: <Sun className="w-8 h-8 text-brand-red" />,
      title: "Expertise em Porto Rico",
      description: "Especialistas em casas de lazer e veraneio de alto padrão. Sabemos como valorizar a vista e integrar a natureza."
    },
    {
      icon: <LayoutTemplate className="w-8 h-8 text-brand-red" />,
      title: "Solução Completa",
      description: "Arquitetura e Interiores em perfeita sintonia. Gerenciamos do conceito à entrega para sua tranquilidade."
    }
  ];

  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-brand-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-sans font-bold text-brand-black mb-6 tracking-tight"
          >
            Por que a <br/>Kendy + Kobayashi<span className="text-brand-red">?</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-lg text-brand-dark/70"
          >
            Traduzimos seu estilo de vida em espaços únicos e funcionais.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 lg:p-10 border border-brand-gray/30 hover:border-brand-red/30 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="mb-6 p-4 bg-brand-gray/10 inline-block rounded-none group-hover:bg-brand-red/10 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-sans font-bold text-brand-black mb-4">{benefit.title}</h3>
              <p className="text-brand-dark/70 leading-relaxed font-sans text-base">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;