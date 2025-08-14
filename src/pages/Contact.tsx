import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, CheckCircle, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Let's Fix Your <span className="text-yellow-500">QA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform chaos into quality? Get in touch and let's discuss your testing challenges.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  We're here to help you build better software. Whether you need a complete QA overhaul 
                  or just want to chat about your testing challenges, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <motion.a
                  href="mailto:hello@qualityfix.com"
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-yellow-500/50 transition-all duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email Us</p>
                    <p className="text-gray-300">hello@qualityfix.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/company/qualityfix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-yellow-500/50 transition-all duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">LinkedIn</p>
                    <p className="text-gray-300">Connect with us professionally</p>
                  </div>
                </motion.a>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
                <p className="text-gray-300">
                  We typically respond within <span className="text-yellow-500 font-semibold">24 hours</span> during business days.
                  For urgent QA emergencies, mention "URGENT" in your subject line.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-yellow-500/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-8 h-8 text-black" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-300">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 resize-none"
                        placeholder="Tell us about your QA challenges. What's broken? What do you need help with?"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-yellow-500 text-black font-bold text-lg rounded-lg hover:bg-yellow-400 hover:drop-shadow-[0_0_20px_#FFD700] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      whileTap={{ scale: 0.95 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Send className="w-5 h-5" />
                          <span>Let's Fix Your QA</span>
                        </div>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
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
                Prefer a <span className="text-yellow-500">Live Conversation</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Book a free 30-minute consultation to discuss your QA challenges in detail.
              </p>
              <a
                href="/"
                className="inline-block px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-lg hover:bg-yellow-400 hover:drop-shadow-[0_0_20px_#FFD700] transition-all duration-300 transform hover:scale-105"
              >
                Book Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;