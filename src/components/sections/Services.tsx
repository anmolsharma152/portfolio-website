import Section from '../ui/Section';
import Card from '../ui/Card';

const services = [
  {
    title: 'Machine Learning Solutions',
    description: 'Custom ML models and algorithms tailored to your specific business needs. From predictive modeling to pattern recognition, I help you leverage the power of AI.',
    icon: '🤖'
  },
  {
    title: 'Data Analysis & Insights',
    description: 'Comprehensive data analysis using advanced statistical methods and visualization techniques. Transform raw data into actionable insights for informed decision-making.',
    icon: '📊'
  },
  {
    title: 'AI Consulting',
    description: 'Strategic guidance on implementing AI solutions in your organization. From identifying opportunities to deployment and optimization of AI systems.',
    icon: '💡'
  }
];

export default function Services() {
  return (
    <Section id="services" title="Services">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card 
            key={index}
            title={
              <div className="flex items-center gap-3">
                <span className="text-3xl">{service.icon}</span>
                <h3 className="text-xl font-bold text-primary">{service.title}</h3>
              </div>
            }
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-muted-foreground text-lg">{service.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
} 