import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá, gostaria de falar com um arquiteto especialista.`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      <svg 
        viewBox="0 0 24 24" 
        fill="white" 
        className="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.698c.93.509 1.846.779 2.803.78 3.18 0 5.767-2.587 5.767-5.766.001-3.18-2.587-5.767-5.764-5.761zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-2.846-.848-.919-.386-1.526-1.292-1.618-1.412-.092-.121-.386-.514-.386-.98 0-.466.244-.924.488-1.168.138-.137.302-.173.403-.173.1 0 .201.001.29.001.1 0 .234-.037.361.267.128.303.435 1.054.473 1.13.037.077.062.167.012.268-.05.101-.075.164-.149.238-.074.075-.157.167-.224.238-.077.08-.158.167-.068.322.09.155.398.653.854 1.059.587.523 1.082.685 1.237.863.153.176.321.157.435.038.114-.119.491-.569.622-.764.131-.195.262-.163.441-.096.179.067 1.136.536 1.331.632.195.096.325.144.373.224.048.08.048.466-.096.871z"/>
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
