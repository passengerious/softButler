import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Palette, Code, TestTube, Rocket, Settings } from 'lucide-react';
import { useTranslation } from '../lib/i18n';

const SDLCSection = () => {
  const { t } = useTranslation('home');

  const sdlcStages = [
    {
      icon: FileText,
      title: t('sdlc.stages.0.title'),
      description: t('sdlc.stages.0.description'),
      qaNote: t('sdlc.stages.0.qaNote')
    },
    {
      icon: Palette,
      title: t('sdlc.stages.1.title'),
      description: t('sdlc.stages.1.description'),
      qaNote: t('sdlc.stages.1.qaNote')
    },
    {
      icon: Code,
      title: t('sdlc.stages.2.title'),
      description: t('sdlc.stages.2.description'),
      qaNote: t('sdlc.stages.2.qaNote')
    },
    {
      icon: TestTube,
      title: t('sdlc.stages.3.title'),
      description: t('sdlc.stages.3.description'),
      qaNote: t('sdlc.stages.3.qaNote')
    },
    {
      icon: Rocket,
      title: t('sdlc.stages.4.title'),
      description: t('sdlc.stages.4.description'),
      qaNote: t('sdlc.stages.4.qaNote')
    },
    {
      icon: Settings,
      title: t('sdlc.stages.5.title'),
      description: t('sdlc.stages.5.description'),
      qaNote: t('sdlc.stages.5.qaNote')
    }
  ];

  return (
    <section id="sdlc" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8" dangerouslySetInnerHTML={{ __html: t('sdlc.titleHtml') }} />
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('sdlc.subtitle')}
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
                <div className="text-green-500 font-bold text-lg mb-0.5 leading-tight">{t('sdlc.continuous')}</div>
                <div className="text-white font-bold text-xl leading-tight">{t('sdlc.qa')}</div>
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
                  className="absolute w-20 h-20 group"
                  style={{
                    left: `calc(50% + ${x}px - 40px)`,
                    top: `calc(50% + ${y}px - 40px)`
                  }}
                >
                  <div className="w-full h-full bg-gray-900/80 border border-gray-700 rounded-lg flex flex-col items-center justify-center hover:border-green-500/50 transition-all duration-300 animate-none">
                    <stage.icon className="w-4 h-4 text-gray-400 mb-1 group-hover:text-green-500 transition-colors" />
                    <span className="text-[10px] text-gray-400 font-semibold group-hover:text-white transition-colors text-center leading-tight p-1">
                      {stage.title}
                    </span>
                  </div>
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
                <div className="text-green-500 font-bold text-lg mb-0.5 leading-tight">{t('sdlc.continuous')}</div>
                <div className="text-white font-bold text-xl leading-tight">{t('sdlc.qa')}</div>
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
                  className="absolute w-24 h-24 lg:hidden group"
                  style={{
                    left: `calc(50% + ${x}px - 48px)`,
                    top: `calc(50% + ${y}px - 48px)`
                  }}
                >
                  <div className="w-full h-full bg-gray-900/80 border border-gray-700 rounded-lg flex flex-col items-center justify-center hover:border-green-500/50 transition-all duration-300">
                    <stage.icon className="w-6 h-6 text-gray-400 mb-1 group-hover:text-green-500 transition-colors" />
                    <span className="text-sm text-gray-400 font-semibold group-hover:text-white transition-colors text-center leading-tight mb-1">
                      {stage.title}
                    </span>
                    <span className="text-sm text-green-500 font-semibold text-center leading-tight">
                      {stage.qaNote}
                    </span>
                  </div>
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
                  className="absolute hidden lg:flex w-28 h-28 group"
                  style={{
                    left: `calc(50% + ${x}px - 56px)`,
                    top: `calc(50% + ${y}px - 56px)`
                  }}
                >
                  <div className="w-full h-full bg-gray-900/80 border border-gray-700 rounded-lg flex flex-col items-center justify-center hover:border-green-500/50 transition-all duration-300">
                    <stage.icon className="w-7 h-7 text-gray-400 mb-1 group-hover:text-green-500 transition-colors" />
                    <span className="text-base text-gray-400 font-semibold group-hover:text-white transition-colors text-center leading-tight mb-1">
                      {stage.title}
                    </span>
                    <span className="text-base text-green-500 font-semibold text-center leading-tight">
                      {stage.qaNote}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-black/50 border border-green-500/30 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <p className="text-green-500 font-semibold text-lg">
                {t('sdlc.bottomTitle')}
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t('sdlc.bottomDesc')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SDLCSection;