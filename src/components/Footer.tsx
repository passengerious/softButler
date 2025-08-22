import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/process', label: 'Our Process' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:hello@qualityfix.com',
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/company/qualityfix',
      label: 'LinkedIn'
    }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Company Logo & Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <button 
              onClick={() => {
                window.location.href = '/';
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="text-yellow-500 group-hover:drop-shadow-[0_0_10px_#FFD700] transition-all duration-300">
                <Logo size="md" animated={false} />
              </div>
              <span className="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors">
                BugDamn
              </span>
            </button>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              We build scalable QA processes that prevent bugs before they happen, 
              transforming chaotic releases into smooth launches.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-white">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => {
                    window.location.href = link.path;
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                  }}
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 relative group"
                  style={{ textAlign: 'start', maxWidth: 'fit-content' }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:drop-shadow-[0_0_10px_#FFD700] transition-all duration-300" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} BugDamn. All rights reserved.
            </p>
            
            {/* Accent Line */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-yellow-500" />
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-yellow-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;