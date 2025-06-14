'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function MotionDiv({ children, className = '', id, ...props }: MotionWrapperProps) {
  return (
    <motion.div id={id} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function MotionSection({ children, className = '', id, ...props }: MotionWrapperProps) {
  return (
    <motion.section id={id} className={className} {...props}>
      {children}
    </motion.section>
  );
} 