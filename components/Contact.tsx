import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá, gostaria de agendar uma conversa sobre meu projeto.`, '_blank');
  };

  return (
    <section id="contato" className="bg-brand-dark py-24 lg:py-32 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                
                {/* Text Content & Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-brand-red font-mono text-xs uppercase tracking-widest mb-4 block">Contato Exclusivo</span>
                    <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 tracking-tight">
                        Vamos conversar sobre <br/>
                        o <span className="text-brand-red">seu projeto?</span>
                    </h2>
                    <p className="text-brand-gray text-lg mb-12 font-sans font-light leading-relaxed max-w-md">
                        Entre em contato para agendar uma reunião inicial. Estamos prontos para traduzir suas aspirações em realidade.
                    </p>

                    <div className="space-y-10 font-sans border-t border-white/10 pt-10">
                        <div 
                            className="flex items-start gap-6 group cursor-pointer"
                            onClick={handleWhatsAppClick}
                        >
                            <div className="text-brand-red mt-1 group-hover:scale-110 transition-transform">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-xl">WhatsApp</h4>
                                <p className="text-brand-gray/70 font-mono text-base mt-1 group-hover:text-white transition-colors">
                                    {CONTACT_INFO.phoneDisplay}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="text-brand-red mt-1">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-xl">Email</h4>
                                <p className="text-brand-gray/70 font-mono text-base mt-1 hover:text-white transition-colors">
                                    {CONTACT_INFO.email}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="text-brand-red mt-1">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-xl">Endereço</h4>
                                <p className="text-brand-gray/70 font-mono text-base mt-1">
                                    {CONTACT_INFO.address}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Direct Action Card */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-brand-black p-10 lg:p-14 border border-brand-red/20 shadow-2xl relative"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <ArrowRight size={100} className="text-white"/>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">Atendimento Preferencial</h3>
                    <p className="text-brand-gray/60 mb-8">
                        Para agilidade no atendimento, recomendamos o contato direto via WhatsApp. Nossa equipe responderá o mais breve possível.
                    </p>
                    
                    <Button variant="primary" className="w-full text-center justify-center py-6 text-lg" onClick={handleWhatsAppClick}>
                        Falar com arquiteto especialista agora
                    </Button>
                    
                    <div className="mt-6 text-center text-white/30 text-xs font-mono uppercase">
                        Resposta em horário comercial
                    </div>
                </motion.div>

            </div>
        </div>
    </section>
  );
};

export default Contact;