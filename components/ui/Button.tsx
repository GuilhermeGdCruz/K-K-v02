import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'white';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-mono font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-sm";
  
  // Replaced rounded-full with rounded-none or small radius for architectural sharpness
  // Updated colors to Brand Red, Black, Gray
  const variants = {
    primary: "bg-brand-red text-white hover:bg-brand-black hover:text-white px-8 py-4",
    secondary: "border border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-8 py-4",
    ghost: "text-brand-black hover:text-brand-red px-6 py-3",
    white: "bg-white text-brand-black hover:bg-brand-gray px-8 py-4"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-3">{icon}</span>}
    </motion.button>
  );
};

export default Button;