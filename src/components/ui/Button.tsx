import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  fullWidth?: boolean;
  href?: string;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  fullWidth = false,
  className = '',
  href,
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md',
    secondary: 'bg-secondary text-foreground hover:bg-secondary-dark shadow-sm hover:shadow-md',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10'
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`}
      href={href}
      {...props}
    >
      {children}
    </Component>
  );
} 