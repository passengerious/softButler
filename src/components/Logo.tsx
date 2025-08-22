import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', animated = true }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const LogoSVG = () => (
    <svg
      viewBox="0 0 100 100"
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer hexagon shield */}
      <motion.path
        d="M50 5 L85 25 L85 65 L50 85 L15 65 L15 25 Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
        animate={animated ? { pathLength: 1 } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      {/* Inner circuit pattern */}
      <motion.g
        initial={animated ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
        animate={animated ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Central bug/chip */}
        <rect x="40" y="35" width="20" height="15" rx="2" fill="currentColor" />
        <rect x="42" y="37" width="16" height="11" rx="1" fill="black" />
        
        {/* Circuit lines */}
        <path d="M30 42 L40 42" stroke="currentColor" strokeWidth="2" />
        <path d="M60 42 L70 42" stroke="currentColor" strokeWidth="2" />
        <path d="M50 35 L50 25" stroke="currentColor" strokeWidth="2" />
        <path d="M50 50 L50 60" stroke="currentColor" strokeWidth="2" />
        
        {/* Corner nodes */}
        <circle cx="30" cy="42" r="2" fill="currentColor" />
        <circle cx="70" cy="42" r="2" fill="currentColor" />
        <circle cx="50" cy="25" r="2" fill="currentColor" />
        <circle cx="50" cy="60" r="2" fill="currentColor" />
        
        {/* Diagonal connections */}
        <path d="M35 30 L45 40" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
        <path d="M65 30 L55 40" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
        <path d="M35 55 L45 45" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
        <path d="M65 55 L55 45" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
        
        {/* Small indicator dots */}
        <motion.circle 
          cx="35" cy="30" r="1.5" fill="currentColor"
          animate={animated ? { opacity: [0.3, 1, 0.3] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle 
          cx="65" cy="30" r="1.5" fill="currentColor"
          animate={animated ? { opacity: [1, 0.3, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.circle 
          cx="35" cy="55" r="1.5" fill="currentColor"
          animate={animated ? { opacity: [0.3, 1, 0.3] } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.circle 
          cx="65" cy="55" r="1.5" fill="currentColor"
          animate={animated ? { opacity: [1, 0.3, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />
      </motion.g>
      
      {/* Glitch effect overlay */}
      {animated && (
        <motion.rect
          x="0" y="0" width="100" height="100"
          fill="currentColor"
          opacity="0.1"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ 
            duration: 0.3, 
            repeat: Infinity, 
            repeatDelay: 3,
            ease: "easeInOut" 
          }}
        />
      )}
    </svg>
  );

  return <LogoSVG />;
};

export default Logo;