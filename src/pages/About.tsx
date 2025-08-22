import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, TrendingUp, Target, Shield, Zap, CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Passion",
      description: "Our testers are vetted, experienced, and passionate. By focusing solely on software testing, we aim to make our mark in the IT industry.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Client Satisfaction", 
      description: "We adapt our approach based on your feedback, aiming for 100% client satisfaction through continuous improvement and open communication.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Top Quality",
      description: "We improve software quality worldwide using onsite consulting, offshore execution, and proven tools that deliver measurable results.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Employee Happiness",
      description: "People are at the center of everything we do. We promote growth and happiness through ongoing training and team gatherings.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every bug matters. We find them before your users do."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent processes that you can depend on, sprint after sprint."
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Fast integration without compromising on thoroughness."
    },
    {
      icon: CheckCircle,
      title: "Excellence",
      description: "We don't just meet standards, we set them."
    }
  ];

  const stats = [
    { number: "75+", label: "Projects Delivered" },
    { number: "17+", label: "Startups Helped" },
    { number: "8+", label: "Industries Served" },
    { number: "99.9%", label: "Client Retention" }
  ];

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
              About <span className="text-yellow-500">BugDamn</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We build scalable QA processes that prevent bugs before they happen
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Mission Statement */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our <span className="text-yellow-500">Mission</span>
              </h2>
              <blockquote className="text-2xl md:text-3xl leading-relaxed text-gray-300">
                "We build scalable QA processes that prevent bugs before they happen, 
                transforming chaotic releases into <span className="text-yellow-500">smooth launches</span>."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Key <span className="text-yellow-500">Highlights</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden"
              >
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-yellow-500/50 transition-all duration-300 h-full">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <highlight.icon className="w-12 h-12 text-yellow-500 mb-6 group-hover:drop-shadow-[0_0_15px_#FFD700] transition-all duration-300" />
                    <h3 className="text-2xl font-bold mb-4 text-white">{highlight.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our <span className="text-yellow-500">Impact</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-black/50 border border-gray-800 rounded-lg p-8 hover:border-yellow-500/50 transition-all duration-300 group">
                  <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2 group-hover:drop-shadow-[0_0_15px_#FFD700] transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-semibold">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our <span className="text-yellow-500">Values</span>
            </h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-yellow-500/50 transition-all duration-300 group" style={{ minHeight: '-webkit-fill-available' }}>
                  <value.icon className="w-12 h-12 text-yellow-500 mx-auto mb-6 group-hover:drop-shadow-[0_0_15px_#FFD700] transition-all duration-300" />
                  <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{value.description}</p>
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
                Ready to Experience <span className="text-yellow-500">Quality Excellence</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our expertise can transform your QA process.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-lg hover:bg-yellow-400 hover:drop-shadow-[0_0_20px_#FFD700] transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-bold text-lg rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Our Services
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;