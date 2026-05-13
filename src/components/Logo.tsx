import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const sizeMap = {
  sm: 40,
  md: 64,
  lg: 80
};



const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', animated = true }) => {
  const imgElement = (
    <Image
      src="/logo3.svg"
      alt="SoftButler Logo"
      width={sizeMap[size]}
      height={sizeMap[size]}
      className={className}
      draggable={false}
      priority
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