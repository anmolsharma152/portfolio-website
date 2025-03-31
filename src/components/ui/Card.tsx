import { ReactNode } from 'react';

interface CardProps {
  title: ReactNode;
  children: ReactNode;
  imageUrl?: string;
  className?: string;
}

export default function Card({ title, children, imageUrl, className = '' }: CardProps) {
  return (
    <div className={`bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {imageUrl && (
        <div className="aspect-video relative">
          <img 
            src={imageUrl} 
            alt={typeof title === 'string' ? title : 'Card image'}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="p-6">
        <div className="text-foreground">{title}</div>
        <div className="mt-4 text-muted-foreground">{children}</div>
      </div>
    </div>
  );
} 