import { MotionDiv } from '@/components/MotionWrapper';
import Section from '@/components/Section';
import Button from '@/components/Button';
import WaitlistForm from '@/components/WaitlistForm';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section id="hero" className="min-h-screen flex items-center justify-center text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-elysium-gold mb-8">
            Elysium Legacy
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-elysium-platinum mb-12">
            Your Legacy. Preserved Eternally.
          </p>
          <Button>Request Access</Button>
        </MotionDiv>
      </Section>

      {/* What Is Section */}
      <Section id="what-is" className="bg-elysium-black/50">
        <h2 className="section-title">What Is Elysium Legacy?</h2>
        <p className="section-subtitle">
          A private AI Legacy System designed to preserve the thoughts, values, and decision-making of the world's most powerful minds.
        </p>
        <p className="text-elysium-platinum/80 text-lg mb-6">
          Invite-only. No ads. No apps. Just immortality through wisdom.
        </p>
      </Section>

      {/* Why It Exists Section */}
      <Section id="why" className="bg-elysium-black/30">
        <h2 className="section-title">Why It Exists</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-2xl text-elysium-gold mb-4">
              Billionaires don't fear death. They fear being forgotten.
            </p>
            <p className="text-elysium-platinum/80">
              Money fades. Mindset doesn't.
            </p>
          </div>
          <div>
            <p className="text-elysium-platinum/80">
              With Elysium Legacy, your legacy becomes a consultable, intelligent system — for your family, heirs, and businesses.
            </p>
          </div>
        </div>
      </Section>

      {/* What You Receive Section */}
      <Section id="benefits" className="bg-elysium-black/50">
        <h2 className="section-title">What You Receive</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Private AI trained on your voice, writing, decisions",
            "Digital vaults for your philosophies, advice, beliefs",
            "Personalized legacy framework (built 1-on-1 with you)",
            "Custom interface for heirs to 'consult' with you forever"
          ].map((benefit, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 border border-elysium-gold/30 hover:border-elysium-gold/60 transition-colors"
            >
              <p className="text-elysium-platinum">{benefit}</p>
            </MotionDiv>
          ))}
        </div>
      </Section>

      {/* Privacy & Security Section */}
      <Section id="security" className="bg-elysium-black/30">
        <h2 className="section-title">Privacy & Security</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "NDA required to even view documentation",
            "AES 256-bit encryption across all assets",
            "You choose: delete or store with off-grid cold storage"
          ].map((feature, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 border border-elysium-gold/30"
            >
              <p className="text-elysium-platinum">{feature}</p>
            </MotionDiv>
          ))}
        </div>
      </Section>

      {/* How It Works Section */}
      <Section id="process" className="bg-elysium-black/50">
        <h2 className="section-title">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Legacy Intake (Zoom onboarding)",
            "Cognitive Capture (you upload thoughts, videos, writing)",
            "AI Persona Training (we fine-tune your voice model)",
            "Interface Delivery (custom, private portal or heirloom vault)"
          ].map((step, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-6 border border-elysium-gold/30"
            >
              <div className="text-elysium-gold text-4xl mb-4 font-serif">
                {(index + 1).toString().padStart(2, '0')}
              </div>
              <p className="text-elysium-platinum">{step}</p>
            </MotionDiv>
          ))}
        </div>
      </Section>

      {/* Founding Circle Section */}
      <Section id="founding-circle" className="bg-elysium-black/30">
        <h2 className="section-title">Founding Circle Access</h2>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-2xl text-elysium-gold mb-6">
            Only 15 clients accepted in 2025
          </p>
          <p className="text-xl text-elysium-platinum mb-12">
            $50,000+ packages. No public offerings.
          </p>
          <Button>Request Access to Elysium Legacy</Button>
        </div>
      </Section>

      {/* Waitlist Form Section */}
      <Section id="waitlist" className="bg-elysium-black/50">
        <h2 className="section-title text-center">Join the Waitlist</h2>
        <WaitlistForm />
      </Section>
    </>
  );
} 