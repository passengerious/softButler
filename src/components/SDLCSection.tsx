import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Palette, Code, TestTube, Rocket, Settings } from 'lucide-react';

const SDLCSection = () => {
  const sdlcStages = [
    {
      icon: FileText,
      title: "Requirements",
      description: "Define & validate",
      qaNote: "Validate requirements"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Plan & prototype",
      qaNote: "Check testability"
    },
    {
      icon: Code,
      title: "Development",
      description: "Build & code",
      qaNote: "Catch defects early"
    },
    {
      icon: TestTube,
      title: "Testing",
      description: "Verify & validate",
      qaNote: "Verify quality"
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "Release & launch",
      qaNote: "Release testing"
    },
    {
      icon: Settings,
      title: "Maintenance",
      description: "Monitor & improve",
      qaNote: "Monitor & improve"
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
            QA Isn&apos;t a Stage. <span className="text-green-500">It&apos;s Everywhere</span>.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We don&apos;t &quot;test at the end.&quot; QA runs in parallel with your entire SDLC — reducing bugs earlier, when they&apos;re cheaper to fix.
          </p>
        </motion.div>

                {/* Mobile Circular QA Ring */}
        <div className="relative md:hidden">
          <div className="relative w-80 h-80 mx-auto">
            {/* Outer QA Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-green-500/30"
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            
            {/* Glowing QA Ring */}
            <motion.div
              className="absolute inset-2 rounded-full border-2 border-green-400 shadow-[0_0_50px_rgba(74,222,128,0.9)]"
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
              <div className="text-center leading-tight">
                <div className="text-green-500 font-bold text-lg mb-0.5 leading-tight">Continuous</div>
                <div className="text-white font-bold text-xl leading-tight">QA</div>
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
                  className="absolute w-20 h-20 bg-gray-900/80 border border-gray-700 rounded-lg flex flex-col items-center justify-center hover:border-green-500/50 transition-all duration-300 group animate-none"
                  style={{
                    left: `calc(50% + ${x}px - 40px)`,
                    top: `calc(50% + ${y}px - 40px)`
                  }}
                >
                  <stage.icon className="w-4 h-4 text-gray-400 mb-1 group-hover:text-green-500 transition-colors" />
                  <span className="text-[10px] text-gray-400 font-semibold group-hover:text-white transition-colors text-center leading-tight p-1">
                    {stage.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop Circular QA Ring */}
        <div className="relative hidden md:block">
          <div className="relative w-96 lg:w-[500px] h-96 lg:h-[500px] mx-auto">
            {/* Outer QA Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-green-500/30"
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            
            {/* Glowing QA Ring */}
            <motion.div
              className="absolute inset-2 rounded-full border-2 border-green-400 shadow-[0_0_50px_rgba(74,222,128,0.9)]"
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
              <div className="text-center leading-tight">
                <div className="text-green-500 font-bold text-lg mb-0.5 leading-tight">Continuous</div>
                <div className="text-white font-bold text-xl leading-tight">QA</div>
              </div>
            </motion.div>

            {/* SDLC Stages around the circle - Medium screens */}
            {sdlcStages.map((stage, index) => {
              const angle = (index * 60) - 90; // Start from top, 60 degrees apart
              const radius = 190;
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="absolute w-24 h-24 lg:hidden bg-gray-900/80 border border-gray-700 rounded-lg flex flex-col items-center justify-center hover:border-green-500/50 transition-all duration-300 group"
                  style={{
                    left: `calc(50% + ${x}px - 48px)`,
                    top: `calc(50% + ${y}px - 48px)`
                  }}
                >
                  <stage.icon className="w-6 h-6 text-gray-400 mb-1 group-hover:text-green-500 transition-colors" />
                  <span className="text-sm text-gray-400 font-semibold group-hover:text-white transition-colors text-center leading-tight mb-1">
                    {stage.title}
                  </span>
                  <span className="text-sm text-green-500 font-semibold text-center leading-tight">
                    {stage.qaNote}
                  </span>
                </motion.div>
              );
            })}

            {/* SDLC Stages around the circle - Large screens */}
            {sdlcStages.map((stage, index) => {
              const angle = (index * 60) - 90; // Start from top, 60 degrees apart
              const radius = 220;
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="absolute hidden lg:flex w-28 h-28 bg-gray-900/80 border border-gray-700 rounded-lg flex-col items-center justify-center hover:border-green-500/50 transition-all duration-300 group"
                  style={{
                    left: `calc(50% + ${x}px - 56px)`,
                    top: `calc(50% + ${y}px - 56px)`
                  }}
                >
                  <stage.icon className="w-7 h-7 text-gray-400 mb-1 group-hover:text-green-500 transition-colors" />
                  <span className="text-base text-gray-400 font-semibold group-hover:text-white transition-colors text-center leading-tight mb-1">
                    {stage.title}
                  </span>
                  <span className="text-base text-green-500 font-semibold text-center leading-tight">
                    {stage.qaNote}
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
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-black/50 border border-green-500/30 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <p className="text-green-500 font-semibold text-lg">
                Testing isn&apos;t a checkbox at the end. It&apos;s a consistent, integrated process.
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              QA makes every stage of your product lifecycle safer, faster, and cheaper by catching issues 
              when they&apos;re easiest to fix — not when they&apos;re most expensive.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SDLCSection;