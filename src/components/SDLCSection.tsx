import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Palette, Code, TestTube, Rocket, Settings } from 'lucide-react';

const SDLCSection = () => {
  const sdlcStages = [
    {
      icon: FileText,
      title: "Requirements",
      description: "Define & validate"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Plan & prototype"
    },
    {
      icon: Code,
      title: "Development",
      description: "Build & code"
    },
    {
      icon: TestTube,
      title: "Testing",
      description: "Verify & validate"
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "Release & launch"
    },
    {
      icon: Settings,
      title: "Maintenance",
      description: "Monitor & improve"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            QA Isn't a Stage. <span className="text-yellow-500">It's Everywhere</span>.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We don't "test at the end." QA runs in parallel with your entire SDLC — reducing bugs earlier, when they're cheaper to fix.
          </p>
        </motion.div>

        {/* Desktop: Linear with parallel QA line */}
        <div className="hidden md:block relative">
          {/* Main SDLC Flow */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600" />
            
            {/* Parallel QA Line (glowing) */}
            <motion.div
              className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500/20 via-yellow-500 to-yellow-500/20 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            
            {/* QA Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute top-24 left-1/2 transform -translate-x-1/2"
            >
              <div className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                Continuous QA
              </div>
            </motion.div>
            
            <div className="grid grid-cols-6 gap-8 pt-8">
              {sdlcStages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Stage Number */}
                  <motion.div
                    className="absolute -top-4 -left-4 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold text-sm z-10 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {index + 1}
                  </motion.div>

                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 text-center h-full">
                    <stage.icon className="w-10 h-10 text-gray-400 mx-auto mb-4 group-hover:text-white transition-all duration-300" />
                    <h3 className="text-lg font-bold text-white mb-2">{stage.title}</h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{stage.description}</p>
                  </div>

                  {/* QA Connection Points */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-2 h-2 bg-yellow-500 rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Circular QA Ring */}
        <div className="md:hidden relative">
          <div className="relative w-80 h-80 mx-auto">
            {/* Outer QA Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-yellow-500/30"
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            
            {/* Glowing QA Ring */}
            <motion.div
              className="absolute inset-2 rounded-full border-2 border-yellow-500 shadow-[0_0_30px_rgba(255,215,0,0.5)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />

            {/* QA Label in center */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-yellow-500 font-bold text-lg mb-2">Continuous</div>
                <div className="text-white font-bold text-xl">QA</div>
              </div>
            </motion.div>

            {/* SDLC Stages around the circle */}
            {sdlcStages.map((stage, index) => {
              const angle = (index * 60) - 90; // Start from top, 60 degrees apart
              const radius = 140;
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="absolute w-16 h-16 bg-gray-900/80 border border-gray-700 rounded-lg flex flex-col items-center justify-center hover:border-yellow-500/50 transition-all duration-300 group"
                  style={{
                    left: `calc(50% + ${x}px - 32px)`,
                    top: `calc(50% + ${y}px - 32px)`
                  }}
                >
                  <stage.icon className="w-6 h-6 text-gray-400 mb-1 group-hover:text-yellow-500 transition-colors" />
                  <span className="text-xs text-gray-400 font-semibold group-hover:text-white transition-colors text-center leading-tight">
                    {stage.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-16"
        >
          <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
              <p className="text-yellow-500 font-semibold text-lg">
                Testing isn't a checkbox at the end. It's a consistent, integrated process.
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              QA makes every stage of your product lifecycle safer, faster, and cheaper by catching issues 
              when they're easiest to fix — not when they're most expensive.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SDLCSection;