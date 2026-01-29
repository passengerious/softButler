import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded-lg font-semibold transition-all';
  const variants = {
    primary: 'bg-[#00B476] text-black hover:bg-[#00B476]/90',
    secondary:
      'bg-transparent border-2 border-[#00B476] text-[#00B476] hover:bg-[#00B476] hover:text-black',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
