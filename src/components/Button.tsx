import Link from 'next/link';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  href,
  children,
  className = '',
  ...props
}, ref) => {
  const baseStyles = 'px-8 py-3 rounded-lg font-semibold transition-all inline-block text-center';
  const variants = {
    primary: 'bg-[#00B476] text-black hover:bg-[#00B476]/90',
    secondary:
      'bg-transparent border-2 border-[#00B476] text-[#00B476] hover:bg-[#00B476] hover:text-black',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      ref={ref}
      className={combinedClassName} 
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
