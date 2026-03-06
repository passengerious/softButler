import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, Phone } from 'lucide-react';

const socialLinks: Array<{
  label: string;
  href: string;
  icon?: typeof Mail;
  iconSrc?: string;
}> = [
  {
    icon: Linkedin,
    href: 'https://linkedin.com/company/softbutler',
    label: 'LinkedIn',
  },
  {
    iconSrc: '/clutch-logo.png',
    href: 'https://clutch.co/profile/softbutler',
    label: 'Clutch',
  },
];

const ConnectSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5 }}
    className="border-t border-green-500/20 bg-gradient-to-b from-black via-green-950/5 to-black py-12 md:py-16"
  >
    <div className="container mx-auto px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-lg font-bold text-white mb-6">Connect</h3>
        <div className="flex justify-center gap-4 mb-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300 group"
              aria-label={social.label}
            >
              {social.icon ? (
                <social.icon className="w-5 h-5 group-hover:drop-shadow-[0_0_10px_#00B476] transition-all duration-300" />
              ) : (
                <img
                  src={social.iconSrc}
                  alt={social.label}
                  className="w-8 h-8 object-contain"
                />
              )}
            </a>
          ))}
        </div>
        <div className="space-y-2 text-sm text-gray-400">
          <p className="text-white font-semibold mb-3">Direct Contact</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href="tel:+380635138576"
              className="flex items-center justify-center gap-2 hover:text-green-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +380635138576
            </a>
            <a
              href="https://t.me/andriipsoftbutler"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-green-500 transition-colors"
            >
              <Send className="w-4 h-4" />
              Telegram
            </a>
            <a
              href="mailto:start@softbutler.io"
              className="flex items-center justify-center gap-2 hover:text-green-500 transition-colors"
            >
              <Mail className="w-4 h-4" />
              start@softbutler.io
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default ConnectSection;
