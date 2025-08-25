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
      viewBox="0 0 120 40"
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bug fragments that animate in */}
      <motion.g
        initial={animated ? { opacity: 1 } : { opacity: 0 }}
        animate={animated ? { opacity: [1, 0, 0, 0] } : { opacity: 0 }}
        transition={{ duration: 0.8, times: [0, 0.3, 0.7, 1] }}
      >
        {/* Glitchy bug fragments */}
        <motion.path
          d="M8 15 L12 10 L16 15 L12 20 Z"
          fill="#FFD700"
          initial={animated ? { scale: 1, rotate: 0 } : { scale: 0 }}
          animate={animated ? { scale: [1, 1.2, 0], rotate: [0, 45, 180] } : { scale: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.circle
          cx="12" cy="8" r="2"
          fill="#FFD700"
          initial={animated ? { scale: 1 } : { scale: 0 }}
          animate={animated ? { scale: [1, 0.5, 0], y: [0, -5, -10] } : { scale: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />
        <motion.rect
          x="10" y="22" width="4" height="6"
          fill="#FFD700"
          initial={animated ? { scale: 1 } : { scale: 0 }}
          animate={animated ? { scale: [1, 0.3, 0], x: [0, 5, 10] } : { scale: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.g>

      {/* Code fragments that appear briefly */}
      <motion.g
        initial={animated ? { opacity: 0 } : { opacity: 0 }}
        animate={animated ? { opacity: [0, 1, 0] } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.text
          x="8" y="18"
          fontSize="6"
          fill="#FFD700"
          fontFamily="monospace"
          initial={animated ? { scale: 0 } : { scale: 0 }}
          animate={animated ? { scale: [0, 1, 0] } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          {'</>'}
        </motion.text>
        <motion.text
          x="18" y="12"
          fontSize="4"
          fill="#FFD700"
          fontFamily="monospace"
          initial={animated ? { opacity: 0 } : { opacity: 0 }}
          animate={animated ? { opacity: [0, 1, 0] } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          01010
        </motion.text>
      </motion.g>

      {/* Main BugDamn text */}
      <motion.g
        initial={animated ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
        animate={animated ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {/* BugDamn text with integrated bug */}
        <motion.text
          x="30" y="25"
          fontSize="14"
          fontWeight="bold"
          fill="white"
          fontFamily="system-ui, -apple-system, sans-serif"
          initial={animated ? { scale: 0.8 } : { scale: 1 }}
          animate={animated ? { scale: 1 } : { scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          B
          <tspan fill="#FFD700">u</tspan>
          gDamn
        </motion.text>

        {/* Subtle bug silhouette replacing the "u" */}
        <motion.path
          d="M42 18 L46 15 L50 18 L46 21 Z"
          fill="#FFD700"
          initial={animated ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
          animate={animated ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        />
        
        {/* Bug antennae */}
        <motion.g
          initial={animated ? { opacity: 0 } : { opacity: 1 }}
          animate={animated ? { opacity: 1 } : { opacity: 1 }}
          transition={{ duration: 0.2, delay: 1.3 }}
        >
          <path d="M44 15 L43 13" stroke="#FFD700" strokeWidth="1" />
          <path d="M48 15 L49 13" stroke="#FFD700" strokeWidth="1" />
          <circle cx="43" cy="13" r="0.5" fill="#FFD700" />
          <circle cx="49" cy="13" r="0.5" fill="#FFD700" />
        </motion.g>
      </motion.g>

      {/* Glow effect */}
      <motion.g
        initial={animated ? { opacity: 0 } : { opacity: 0 }}
        animate={animated ? { opacity: [0, 0.3, 0] } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
      >
        <circle
          cx="46" cy="18"
          r="8"
          fill="none"
          stroke="#FFD700"
          strokeWidth="0.5"
          opacity="0.3"
        />
      </motion.g>

      {/* Glitch overlay effect */}
      {animated && (
        <motion.rect
          x="0" y="0" width="120" height="40"
          fill="#FFD700"
          opacity="0.1"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ 
            duration: 0.1, 
            delay: 0.3,
            ease: "easeInOut" 
          }}
        />
      )}
    </svg>
  );

  return <LogoSVG />;
};

export default Logo;