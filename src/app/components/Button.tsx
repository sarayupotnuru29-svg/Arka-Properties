import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white',
    secondary: 'bg-gray-800 text-white hover:bg-gray-900',
    outline: 'border-2 border-orange-500 text-orange-600 hover:bg-orange-50',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
