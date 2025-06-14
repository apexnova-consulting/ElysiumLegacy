'use client';

import { useState } from 'react';
import Button from './Button';
import { MotionDiv } from './MotionWrapper';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    futureMessage: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      reason: '',
      futureMessage: ''
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
    <div className="max-w-2xl mx-auto">
      <p className="text-elysium-platinum/80 text-center mb-8">
        Elysium is intentionally private. We handpick creators, thinkers, and legacy-builders who want more than a will—they want a whisper across time.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="form-input"
          />
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="form-input"
          />
          
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Why do you want to preserve your legacy?"
            required
            rows={4}
            className="form-textarea"
          />
          
          <textarea
            name="futureMessage"
            value={formData.futureMessage}
            onChange={handleChange}
            placeholder="What would you want your AI to say or reflect about you 50 years from now? (Optional)"
            rows={4}
            className="form-textarea"
          />
        </MotionDiv>

        <div className="text-center">
          <Button className="w-full md:w-auto">
            Submit Request
          </Button>
          <p className="mt-4 text-sm text-elysium-platinum/60">
            This form is encrypted. Your information will never be shared or sold.
          </p>
        </div>
      </form>
    </div>
  );
} 