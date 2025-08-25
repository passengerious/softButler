import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const sizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12'
};

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', animated = true }) => {
  const imgElement = (
    <img
      src="/logo.png"
      alt="BugDumn Logo"
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