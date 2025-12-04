import React from 'react';
import { motion } from 'framer-motion';
import { Search, Wrench, FileText, Shield, CheckCircle, AlertTriangle, Clock, Target, Users } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: 1,
      title: "We Learn",
      duration: "1–2 days",
      description: "Deep dive into your product, stack, and pain points",
      tasks: [
        "Product architecture analysis",
        "Current QA process assessment", 
        "Team workflow evaluation",
        "Technology stack review",
        "Business requirements understanding"
      ],
      icon: Search,
      proofNote: "80% of bugs start with unclear requirements — we catch them early.",
      proofIcon: AlertTriangle
    },
    {
      number: 2,
      title: "We Break",
      duration: "3–5 days", 
      description: "Exploratory testing to find what you've missed",
      tasks: [
        "Comprehensive exploratory testing",
        "Edge case identification",
        "User journey validation", 
        "Performance bottleneck discovery",
        "Security vulnerability assessment"
      ],
      icon: Wrench,
      proofNote: "On average, we find 4× more critical bugs than scripted testing.",
      proofIcon: Target
    },
    {
      number: 3,
      title: "We Fix",
      duration: "1–2 days",
      description: "Detailed bug reports with steps, screenshots, severity",
      tasks: [
        "Detailed bug documentation",
        "Step-by-step reproduction guides", 
        "Visual evidence with screenshots",
        "Priority and severity classification",
        "Fix recommendations"
      ],
      icon: FileText,
      proofNote: "Clear reports cut fix time by 40% for dev teams.",
      proofIcon: CheckCircle
    },
    {
      number: 4,
      title: "We Prevent",
      duration: "Ongoing",
      description: "Automation & processes to stop bugs early",
      tasks: [
        "Test automation implementation",
        "Process improvement recommendations",
        "Quality gates setup",
        "Team training and knowledge transfer", 
        "Continuous improvement plan"
      ],
      icon: Shield,
      proofNote: "QA becomes invisible — quality is built into every release.",
      proofIcon: Clock
    }
  ];

  const differentiators = [
    {
      icon: Target,
      title: "Results-Focused Approach",
      description: "We measure success by bugs prevented, not tests executed."
    },
    {
      icon: Users,
      title: "Dedicated QA Experts",
      description: "Vetted professionals who live and breathe quality assurance."
    },
    {
      icon: Clock,
      title: "Rapid Integration",
      description: "Get up and running within days, not weeks or months."
    },
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Hundreds of successful projects across diverse industries."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1, boxShadow: "0 0 0 0 rgba(74, 222, 128, 0.8)" },
    pulse: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 0 rgba(74, 222, 128, 0.8)",
        "0 0 0 12px rgba(74, 222, 128, 0)",
        "0 0 0 0 rgba(74, 222, 128, 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const iconVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      {/* <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Our <span className="text-green-500 drop-shadow-[0_0_20px_#00B476]">Process</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A systematic approach to transforming chaotic QA into smooth, predictable quality assurance
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Modern Timeline Process Steps */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-black/30">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div 
            className="text-center mb-12 md:mb-20 px-4 md:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
              Our Process: <span className="text-green-500 drop-shadow-[0_0_20px_#00B476]">Clear & Effective</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A proven methodology that transforms chaotic releases into smooth launches — no guesswork, no excuses.
            </p>
          </motion.div>

          {/* Timeline Container */}
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Vertical Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500/50 via-white-500/30 to-transparent"></div>
            
            {/* Steps */}
            <div className="space-y-8 md:space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  variants={stepVariants}
                >
                  {/* Timeline Node - Mobile centered, Desktop positioned */}
                  <div className="flex justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 mb-6 md:mb-0">
                    <motion.div
                      className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-2xl shadow-[0_0_30px_rgba(74,222,128,0.8)]"
                      variants={pulseVariants}
                      initial="initial"
                      whileInView="pulse"
                      viewport={{ once: true }}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Content Card - Full width on mobile */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} px-4 md:px-0`}>
                    <motion.div 
                      className="bg-black/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 md:p-8 hover:border-green-500/50 transition-all duration-500 group hover:shadow-[0_0_40px_rgba(52,152,219,0.1)]"
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-green-500 transition-colors">
                            {step.title}
                          </h3>
                          <div className="flex items-center justify-center md:justify-start space-x-2">
                            <Clock className="w-4 h-4 text-green-500" />
                            <span className="text-green-500 font-semibold">{step.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed text-center md:text-left">
                        {step.description}
                      </p>

                      {/* Tasks */}
                      <div className="space-y-3 mb-6">
                        {step.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm leading-relaxed">{task}</span>
                          </div>
                        ))}
                      </div>

                      {/* Proof Note */}
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <step.proofIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-green-500/90 text-sm font-medium leading-relaxed">
                            {step.proofNote}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Icon Section - Hidden on mobile, visible on desktop */}
                  <div className={`hidden md:flex justify-center mt-6 md:mt-0 md:w-[55%] ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <motion.div
                      className="w-20 h-20 md:w-24 md:h-24 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                      variants={iconVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <step.icon className="w-10 h-10 md:w-12 md:h-12 text-green-500" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div 
              className="text-center mt-12 md:mt-20 px-4 md:px-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-black/50 border border-green-500/30 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Ready to Transform Your QA Process?
                </h3>
                <p className="text-gray-300 mb-6 text-sm md:text-base">
                  Join hundreds of companies that have eliminated release chaos with our proven methodology.
                </p>
                <button className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-green-500 text-black font-bold text-base md:text-lg rounded-lg hover:bg-green-400 hover:drop-shadow-[0_0_20px_#00B476] transition-all duration-300 transform hover:scale-105">
                  Start Your Free QA Audit
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
              What Makes Us <span className="text-green-500">Different</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 md:p-8 hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="relative">
                  {/* Glowing accent line */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-green-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="pl-4 md:pl-6">
                    <item.icon className="w-10 h-10 md:w-12 md:h-12 text-green-500 mb-4 md:mb-6 group-hover:drop-shadow-[0_0_15px_#00B476] transition-all duration-300" />
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-900/30">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-green-500/10 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 md:p-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                Ready to Transform Your <span className="text-green-500">QA Process</span>?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
                Let's start with a free audit of your current testing approach.
              </p>
              <a
                href="/contact"
                className="inline-block w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-green-500 text-black font-bold text-base md:text-lg rounded-lg hover:bg-green-400 hover:drop-shadow-[0_0_20px_#00B476] transition-all duration-300 transform hover:scale-105"
              >
                Start Your QA Transformation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Process;