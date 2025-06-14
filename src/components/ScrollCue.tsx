'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface ScrollCueProps {
  text?: string;
}

export default function ScrollCue({ text = "Discover how your mind can outlive time." }: ScrollCueProps) {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('what-is');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="flex flex-col items-center mt-16 cursor-pointer"
      onClick={scrollToNextSection}
    >
      <p className="text-elysium-platinum/70 mb-4 text-sm tracking-wider">
        {text}
      </p>
      <ChevronDownIcon className="w-6 h-6 text-elysium-gold scroll-cue" />
    </div>
  );
} 