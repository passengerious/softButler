import React from 'react';
import { motion } from 'framer-motion';
import { Search, Wrench, FileText, Shield, CheckCircle, Users, Target, Clock } from 'lucide-react';

const Process = () => {
  const processSteps = [
    {
      number: 1,
      icon: Search,
      title: "We Learn",
      description: "Deep dive into your product, stack, and pain points",
      details: [
        "Product architecture analysis",
        "Current QA process assessment", 
        "Team workflow evaluation",
        "Technology stack review",
        "Business requirements understanding"
      ],
      timeline: "1-2 days"
    },
    {
      number: 2,
      icon: Wrench,
      title: "We Break",
      description: "Exploratory testing to find what you've missed",
      details: [
        "Comprehensive exploratory testing",
        "Edge case identification",
        "User journey validation",
        "Performance bottleneck discovery",
        "Security vulnerability assessment"
      ],
      timeline: "3-5 days"
    },
    {
      number: 3,
      icon: FileText,
      title: "We Fix",
      description: "Detailed bug reports with steps, screenshots, severity",
      details: [
        "Detailed bug documentation",
        "Step-by-step reproduction guides",
        "Visual evidence with screenshots",
        "Priority and severity classification",
        "Fix recommendations"
      ],
      timeline: "1-2 days"
    },
    {
      number: 4,
      icon: Shield,
      title: "We Prevent",
      description: "Automation & processes to stop bugs early",
      details: [
        "Test automation implementation",
        "Process improvement recommendations",
        "Quality gates setup",
        "Team training and knowledge transfer",
        "Continuous improvement plan"
      ],
      timeline: "Ongoing"
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

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Our <span className="text-yellow-500">Process</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A systematic approach to transforming chaotic QA into smooth, predictable quality assurance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                {/* Step Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div
                      className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-2xl"
                      whileHover={{ scale: 1.1 }}
                      style={{
                        boxShadow: '0 0 30px rgba(255, 215, 0, 0.5)'
                      }}
                    >
                      {step.number}
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                      <p className="text-yellow-500 font-semibold">{step.timeline}</p>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">{step.description}</p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step Visual */}
                <div className="lg:w-1/2">
                  <div className="bg-black/50 border border-gray-800 rounded-lg p-8 hover:border-yellow-500/50 transition-all duration-300 group">
                    <step.icon className="w-24 h-24 text-yellow-500 mx-auto group-hover:drop-shadow-[0_0_20px_#FFD700] transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              What Makes Us <span className="text-yellow-500">Different</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-yellow-500/50 transition-all duration-300 group"
              >
                <div className="relative">
                  {/* Glowing accent line */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="pl-6">
                    <item.icon className="w-12 h-12 text-yellow-500 mb-6 group-hover:drop-shadow-[0_0_15px_#FFD700] transition-all duration-300" />
                    <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-yellow-500/10 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your <span className="text-yellow-500">QA Process</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's start with a free audit of your current testing approach.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-lg hover:bg-yellow-400 hover:drop-shadow-[0_0_20px_#FFD700] transition-all duration-300 transform hover:scale-105"
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