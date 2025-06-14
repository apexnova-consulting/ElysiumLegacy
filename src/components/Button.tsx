'use client';

import { motion } from 'framer-motion';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export default function Button({ onClick, className = '', children }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`elysium-button ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
} 