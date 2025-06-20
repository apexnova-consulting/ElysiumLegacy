'use client';

import { MotionSection } from './MotionWrapper';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className = '', children }: SectionProps) {
  return (
    <MotionSection
      id={id}
      className={`py-24 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="elysium-container">
        {children}
      </div>
    </MotionSection>
  );
} 