import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Monitor, Search, Zap, FileCheck } from 'lucide-react';
import IndustryGrid from '../components/IndustryGrid';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web App Testing",
      description: "Flawless browser performance across all devices and platforms",
      features: [
        "Cross-browser compatibility testing",
        "Responsive design validation",
        "Performance & load testing",
        "Security vulnerability assessment"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile App Testing",
      description: "Cross-device stability for iOS and Android applications",
      features: [
        "Device-specific testing on real devices",
        "OS version compatibility",
        "App store compliance validation",
        "Touch gesture & usability testing"
      ]
    },
    {
      icon: Monitor,
      title: "Desktop App Testing",
      description: "Multi-platform reliability for Windows, macOS, and Linux",
      features: [
        "Installation & upgrade testing",
        "System resource optimization",
        "Integration with OS features",
        "Cross-platform consistency"
      ]
    },
    {
      icon: Search,
      title: "Manual Testing",
      description: "Human insight automation can't match",
      features: [
        "Exploratory testing sessions",
        "User experience validation",
        "Edge case identification",
        "Accessibility compliance testing"
      ]
    },
    {
      icon: Zap,
      title: "Automated Testing",
      description: "Speed & precision for continuous delivery",
      features: [
        "Test automation framework setup",
        "Regression test automation",
        "API testing automation",
        "CI/CD pipeline integration"
      ]
    },
    {
      icon: FileCheck,
      title: "QA Audit & Consulting",
      description: "Full review of your QA process",
      features: [
        "Current process assessment",
        "QA strategy development",
        "Tool recommendation & setup",
        "Team training & best practices"
      ]
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
              Our <span className="text-yellow-500">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive QA solutions tailored to fix your specific testing challenges
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black/50 border border-gray-800 rounded-lg p-8 hover:border-yellow-500/50 transition-all duration-300 group"
              >
                <service.icon className="w-12 h-12 text-yellow-500 mb-6 group-hover:drop-shadow-[0_0_15px_#FFD700] transition-all duration-300" />
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <IndustryGrid />

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
                Ready to Fix Your <span className="text-yellow-500">QA Process</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your specific testing challenges and create a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-lg hover:bg-yellow-400 hover:drop-shadow-[0_0_20px_#FFD700] transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/process"
                  className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-bold text-lg rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Our Process
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;