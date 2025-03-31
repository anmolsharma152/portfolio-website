import Section from '../ui/Section';
import Button from '../ui/Button';

export default function Contact() {
  return (
    <Section id="contact" background="secondary" title="Get In Touch">
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-muted-foreground text-lg mb-12">
          Have a project in mind? Let's work together to bring your ideas to life.
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-foreground">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full border border-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-foreground">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full border border-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                placeholder="Your email"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 font-medium text-foreground">Subject</label>
            <input 
              type="text" 
              id="subject" 
              className="w-full border border-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              placeholder="What's this about?"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium text-foreground">Message</label>
            <textarea 
              id="message" 
              rows={6} 
              className="w-full border border-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <Button type="submit" variant="primary" fullWidth>
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
} 