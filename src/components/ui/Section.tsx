import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'secondary';
}

export default function Section({ 
  id, 
  title, 
  children, 
  className = '',
  background = 'white'
}: SectionProps) {
  const bgColor = background === 'secondary' ? 'bg-secondary' : 'bg-background';
  
  return (
    <section 
      id={id} 
      className={`py-20 px-8 md:px-16 ${bgColor} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
} 