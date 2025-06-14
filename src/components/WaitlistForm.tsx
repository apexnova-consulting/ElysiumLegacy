'use client';

import { useState } from 'react';
import Button from './Button';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    netWorth: '',
    reason: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      linkedin: '',
      netWorth: '',
      reason: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full bg-transparent border border-elysium-gold/30 px-4 py-3 text-elysium-platinum placeholder-elysium-platinum/50 focus:border-elysium-gold outline-none transition-colors"
        />
        
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="w-full bg-transparent border border-elysium-gold/30 px-4 py-3 text-elysium-platinum placeholder-elysium-platinum/50 focus:border-elysium-gold outline-none transition-colors"
        />
        
        <input
          type="url"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="LinkedIn URL"
          required
          className="w-full bg-transparent border border-elysium-gold/30 px-4 py-3 text-elysium-platinum placeholder-elysium-platinum/50 focus:border-elysium-gold outline-none transition-colors"
        />
        
        <input
          type="text"
          name="netWorth"
          value={formData.netWorth}
          onChange={handleChange}
          placeholder="Net Worth (Optional)"
          className="w-full bg-transparent border border-elysium-gold/30 px-4 py-3 text-elysium-platinum placeholder-elysium-platinum/50 focus:border-elysium-gold outline-none transition-colors"
        />
        
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Why do you want a Legacy AI?"
          required
          rows={4}
          className="w-full bg-transparent border border-elysium-gold/30 px-4 py-3 text-elysium-platinum placeholder-elysium-platinum/50 focus:border-elysium-gold outline-none transition-colors resize-none"
        />
      </div>

      <div className="text-center">
        <Button className="w-full md:w-auto">
          Submit Application
        </Button>
      </div>
    </form>
  );
} 