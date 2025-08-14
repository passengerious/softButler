import React from 'react';
import { motion } from 'framer-motion';
import { Search, Wrench, FileText, Shield } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "We Learn",
      description: "Deep dive into your product, stack, and pain points"
    },
    {
      number: 2,
      icon: Wrench,
      title: "We Break",
      description: "Exploratory testing to find what you've missed"
    },
    {
      number: 3,
      icon: FileText,
      title: "We Fix",
      description: "Detailed bug reports with steps, screenshots, severity"
    },
    {
      number: 4,
      icon: Shield,
      title: "We Prevent",
      description: "Automation & processes to stop bugs early"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our Process: <span className="text-yellow-500">Clear & Effective</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-yellow-500/30 z-0" />
              )}
              
              <div className="relative bg-black/50 border border-gray-800 rounded-lg p-8 hover:border-yellow-500/50 transition-all duration-300 group">
                {/* Glowing Number */}
                <motion.div
                  className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-xl"
                  whileHover={{ scale: 1.1 }}
                  style={{
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)'
                  }}
                >
                  {step.number}
                </motion.div>

                <div className="mt-4">
                  <step.icon className="w-12 h-12 text-yellow-500 mb-6 group-hover:drop-shadow-[0_0_15px_#FFD700] transition-all duration-300" />
                  <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;