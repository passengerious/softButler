import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bug, Zap, Shield } from 'lucide-react';

interface HeroProps {
  onBookConsultation: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookConsultation }) => {
  const [glitchActive, setGlitchActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGlitchActive(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const floatingBugs = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    delay: i * 0.5,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Glitch Effect */}
        {glitchActive && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-blue-500/10"
            animate={{
              opacity: [0, 1, 0],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 0.2,
              repeat: 10,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Floating Bugs */}
        {floatingBugs.map((bug) => (
          <motion.div
            key={bug.id}
            className="absolute opacity-20"
            style={{ left: `${bug.initialX}%`, top: `${bug.initialY}%` }}
            initial={{ scale: 0, rotate: 0 }}
            animate={
              glitchActive
                ? {
                    scale: [0, 1, 0],
                    rotate: 360,
                    opacity: [0, 0.3, 0],
                  }
                : { scale: 0 }
            }
            transition={{
              duration: 2,
              delay: bug.delay,
              ease: "easeOut",
            }}
          >
            <Bug className="w-8 h-8 text-red-500" />
          </motion.div>
        ))}

        {/* Clean UI Elements (appear after glitch) */}
        {!glitchActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="absolute top-20 right-20 w-64 h-40 bg-gray-800/10 border border-yellow-500/10 rounded-lg backdrop-blur-sm opacity-30">
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-500">All Tests Passed</span>
                </div>
                <div className="h-2 bg-gray-700 rounded mb-2">
                  <div className="h-2 bg-green-500 rounded w-full"></div>
                </div>
                <div className="text-xs text-gray-400">Coverage: 98%</div>
              </div>
            </div>
            <div className="absolute bottom-32 left-16 w-48 h-32 bg-gray-800/10 border border-yellow-500/10 rounded-lg backdrop-blur-sm opacity-30">
              <div className="p-3">
                <Zap className="w-5 h-5 text-yellow-500 mb-2" />
                <div className="text-sm text-yellow-500 mb-1">Bug Detected</div>
                <div className="text-xs text-gray-400">Fixed automatically</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Your QA Is{' '}
            <span className="text-red-500 relative">
              Broken
              <motion.div
                className="absolute inset-0 bg-red-500/20 blur-lg"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
            .<br />
            <span className="text-yellow-500 drop-shadow-[0_0_20px_#FFD700]">
              We'll Fix It
            </span>
            .
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We turn chaotic releases into smooth launches — no guesswork, no excuses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={onBookConsultation}
              className="px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-lg hover:bg-yellow-400 hover:drop-shadow-[0_0_20px_#FFD700] transition-all duration-300 transform hover:scale-105"
            >
              Get a QA Audit
            </button>
            <a
              href="/process"
              className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-bold text-lg rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              See How We Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-1 h-16 bg-gradient-to-b from-yellow-500 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
};

export default Hero;