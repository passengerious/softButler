import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const sizeClasses = {
  sm: 'w-10 h-10',
  md: 'w-16 h-16',
  lg: 'w-20 h-20'
};

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', animated = true }) => {
  const imgElement = (
    <img
      src="/logo3.svg"
      alt="SoftButler Logo"
      className={`${sizeClasses[size]} ${className}`}
      draggable={false}
    />
  );

  if (animated) {
    return (
      <motion.div
        initial={{ rotate: 0, scale: 0.95, opacity: 0.8 }}
        animate={{ rotate: 360, scale: 1, opacity: 1 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        style={{ display: 'inline-block' }}
      >
        {imgElement}
      </motion.div>
    );
  }

  return imgElement;
};

export default Logo;