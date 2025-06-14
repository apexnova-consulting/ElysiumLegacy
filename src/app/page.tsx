import { MotionDiv } from '@/components/MotionWrapper';
import Section from '@/components/Section';
import Button from '@/components/Button';
import WaitlistForm from '@/components/WaitlistForm';
import ScrollCue from '@/components/ScrollCue';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section id="hero" className="min-h-screen flex items-center justify-center text-center">
        <div>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-elysium-gold mb-8">
              Elysium Legacy
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-elysium-platinum mb-8 shimmer-text">
              Your Legacy. Preserved Eternally.
            </p>
            <p className="text-lg text-elysium-platinum/80 mb-12 max-w-2xl mx-auto">
              A private AI heirloom built from your knowledge, values, and insights.<br />
              Invite-only. No apps. No platforms. No noise.
            </p>
            <Button>Request Access</Button>
          </MotionDiv>
          <ScrollCue />
        </div>
      </Section>

      {/* How It Works Section */}
      <Section id="how-it-works" className="bg-elysium-black/50">
        <h2 className="section-title text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {[
            {
              title: "Share Yourself",
              description: "Upload voice notes, journals, photos, and thoughts—your beliefs, wisdom, and personality. As simple or complex as you'd like."
            },
            {
              title: "We Train Your Mindclone",
              description: "Using a secure, private AI process, your data is distilled into a digital personality—your values, your tone, your essence."
            },
            {
              title: "Receive Your Heirloom",
              description: "Delivered as a private AI interface your loved ones can interact with—voice, text, and visuals—across generations."
            }
          ].map((step, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl font-serif text-elysium-gold mb-4">{step.title}</h3>
              <p className="text-elysium-platinum/80">{step.description}</p>
            </MotionDiv>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-xl text-elysium-platinum/90 mb-4">
            No algorithms. No exposure. Only memory. Only meaning.
          </p>
          <p className="text-lg text-elysium-gold italic">
            "You will fade. But your wisdom won't."
          </p>
        </div>
      </Section>

      {/* What Your Family Will Receive Section */}
      <Section id="benefits" className="bg-elysium-black/30">
        <h2 className="section-title text-center">What Your Family Will Receive</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {[
            "A digital heirloom of your thoughts and voice",
            "Private voice interface trained on you",
            "Life lessons, stories, values—all preserved",
            "Custom memory capsules for milestone sharing",
            "Guided prompts to continue your legacy as life evolves"
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
        <p className="text-center text-elysium-gold italic mt-12">
          Your Legacy. Preserved Eternally.
        </p>
      </Section>

      {/* Privacy + Security Section */}
      <Section id="security" className="bg-elysium-black/50">
        <h2 className="section-title text-center">No Platforms. No Clouds. No Traces.</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-elysium-platinum/90 mb-8">
            Elysium never uses your data for training third-party models. Everything is hosted on private infrastructure, fully encrypted, and never exposed to the open web.
          </p>
          <p className="text-2xl text-elysium-gold mb-4">
            You're not a user. You're a legacy.
          </p>
          <p className="text-lg text-elysium-platinum/80">
            Your story deserves protection. Your legacy, preserved eternally.
          </p>
        </div>
      </Section>

      {/* Founder's Statement Section */}
      <Section id="founder" className="bg-elysium-black/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">A Note From the Founder</h2>
          <div className="space-y-6 text-lg text-elysium-platinum/90">
            <p>
              "I built Elysium Legacy not because I'm afraid to die—but because I'm afraid to be forgotten for the wrong things.
            </p>
            <p>
              We spend our lives becoming someone worth remembering, but all most families are left with is a few photos and fragments. That didn't sit right with me.
            </p>
            <p>
              Elysium is about capturing the texture of a soul—the laughter in a story, the lesson in a failure, the warmth in a voice.
            </p>
            <p>
              This is not a product. It's a promise.
            </p>
            <p>
              You won't live forever. But the best of you can."
            </p>
          </div>
          <p className="text-elysium-gold italic text-xl mt-8 text-center">
            Your Legacy. Preserved Eternally.
          </p>
        </div>
      </Section>

      {/* Request Access Section */}
      <Section id="request-access" className="bg-elysium-black/50">
        <h2 className="section-title text-center">Request Early Access</h2>
        <WaitlistForm />
      </Section>
    </>
  );
} 