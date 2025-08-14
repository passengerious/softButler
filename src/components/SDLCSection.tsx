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
            Test Less. <span className="text-yellow-500">Deliver Smarter</span>.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            QA is a process — not a task. We build systems that make your product release-ready at every stage of development.
          </p>
        </motion.div>

        {/* SDLC Stages */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500/20 via-yellow-500/50 to-yellow-500/20" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
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
                  className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-sm z-10"
                  whileHover={{ scale: 1.1 }}
                  style={{
                    boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)'
                  }}
                >
                  {index + 1}
                </motion.div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-yellow-500/50 transition-all duration-300 text-center h-full">
                  <stage.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4 group-hover:drop-shadow-[0_0_15px_#FFD700] transition-all duration-300" />
                  <h3 className="text-lg font-bold text-white mb-2">{stage.title}</h3>
                  <p className="text-gray-300 text-sm">{stage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
              <p className="text-yellow-500 font-semibold text-lg">
                We test at every stage to prevent issues before they become expensive problems.
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              By integrating quality assurance throughout the entire development lifecycle, 
              we catch bugs early when they're cheap to fix, not late when they're costly disasters.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SDLCSection;