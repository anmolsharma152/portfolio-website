import Section from '../ui/Section';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <Section id="hero" className="min-h-[90vh] flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
          Anmol Sharma
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Data Scientist & AI Specialist
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#portfolio" variant="primary">
            View My Work
          </Button>
          <Button href="#contact" variant="secondary">
            Get In Touch
          </Button>
        </div>
      </div>
    </Section>
  );
}