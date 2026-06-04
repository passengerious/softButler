import React from 'react';
import { motion } from 'framer-motion';
import { Search, Wrench, FileText, Shield } from 'lucide-react';
import { useTranslation } from '../lib/i18n';

const ProcessSteps = () => {
  const { t } = useTranslation('home');

  const steps = [
    {
      number: 1,
      icon: Search,
      title: t('process.steps.0.title'),
      description: t('process.steps.0.description')
    },
    {
      number: 2,
      icon: Wrench,
      title: t('process.steps.1.title'),
      description: t('process.steps.1.description')
    },
    {
      number: 3,
      icon: FileText,
      title: t('process.steps.2.title'),
      description: t('process.steps.2.description')
    },
    {
      number: 4,
      icon: Shield,
      title: t('process.steps.3.title'),
      description: t('process.steps.3.description')
    }
  ];

  return (
    <section id="process" className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8" dangerouslySetInnerHTML={{ __html: t('process.titleHtml') }} />
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
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-green-500/30 z-0" />
              )}
              
              <div className="relative bg-black/50 border border-gray-800 rounded-lg p-8 hover:border-green-500/50 transition-all duration-300 group min-h-[275px]">
                {/* Glowing Number */}
                <motion.div
                  className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 text-black rounded-full flex items-center justify-center font-bold text-xl"
                  whileHover={{ scale: 1.1 }}
                >
                  {step.number}
                </motion.div>

                <div className="mt-4">
                  <step.icon className="w-12 h-12 text-green-500 mb-6 group-hover:drop-shadow-[0_0_8px_rgba(0,180,118,0.5)] transition-all duration-300" />
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