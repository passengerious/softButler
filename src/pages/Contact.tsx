import SEO from '../components/SEO';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, CheckCircle, User, MessageSquare } from 'lucide-react';
import { validateContactForm } from '../lib/formValidation';
import { showSuccessToast, showErrorToast } from '../lib/toastHelpers';
import { useTranslation } from '../lib/i18n';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { t } = useTranslation('contact');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    const validationError = validateContactForm(trimmedData);
    if (validationError) {
      showErrorToast(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/send-to-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: trimmedData.name,
          email: trimmedData.email,
          message: trimmedData.message,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to send message');
      }

      showSuccessToast(
        t('toastSuccessTitle'),
        t('toastSuccessDesc')
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : t('toastErrorDefault');
      showErrorToast(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20 bg-black text-white relative overflow-hidden">
      <SEO pageKey="contact" />
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      {/* Hero Section */}
      <section className="pt-20 pb-8 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8" dangerouslySetInnerHTML={{ __html: t('heroTitleHtml') }} />
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('heroSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pt-8 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`space-y-8 ${isSubmitted ? 'order-last lg:order-none' : ''}`}
            >
              {isSubmitted ? (
                <>
                  <div className="bg-green-950/10 border border-green-500/20 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{t('responseTimeTitle')}</h3>
                    <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: t('responseTimeDescHtml') }} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">{t('alsoContactVia')}</h3>
                  </div>

                  <div className="space-y-6">
                    <motion.a
                      href="mailto:start@softbutler.io"
                      className="flex items-center space-x-4 p-4 bg-green-950/15 border border-green-500/20 rounded-lg hover:border-green-500/50 transition-all duration-300 group cursor-pointer"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                        <Mail className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{t('emailUs')}</p>
                        <p className="text-gray-300">start@softbutler.io</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://linkedin.com/company/softbutler"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-green-950/15 border border-green-500/20 rounded-lg hover:border-green-500/50 transition-all duration-300 group"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                        <Linkedin className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{t('linkedin')}</p>
                        <p className="text-gray-300">{t('linkedinDesc')}</p>
                      </div>
                    </motion.a>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">{t('getInTouch')}</h2>
                    <p className="text-gray-300 leading-relaxed mb-8">
                      {t('getInTouchDesc')}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <motion.a
                      href="mailto:start@softbutler.io"
                      className="flex items-center space-x-4 p-4 bg-green-950/15 border border-green-500/20 rounded-lg hover:border-green-500/50 transition-all duration-300 group cursor-pointer"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                        <Mail className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{t('emailUs')}</p>
                        <p className="text-gray-300">start@softbutler.io</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://linkedin.com/company/softbutler"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-green-950/15 border border-green-500/20 rounded-lg hover:border-green-500/50 transition-all duration-300 group"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                        <Linkedin className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{t('linkedin')}</p>
                        <p className="text-gray-300">{t('linkedinDesc')}</p>
                      </div>
                    </motion.a>
                  </div>

                  <div className="bg-green-950/10 border border-green-500/20 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{t('responseTimeTitle')}</h3>
                    <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: t('responseTimeDescHtml') }} />
                  </div>
                </>
              )}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={isSubmitted ? 'order-first lg:order-none' : ''}
            >
              <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8 hover:border-green-500/30 transition-all duration-300">
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
                      className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-8 h-8 text-black" />
                    </motion.div>
                    <h4 className="text-3xl font-bold text-white mb-4">{t('messageSent')}</h4>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {t('messageSentDesc')}
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-6">{t('sendMessage')}</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        {t('labelName')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-black border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                        placeholder={t('placeholderName')}
                      />
                    </div>
 
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        {t('labelEmail')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-black border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                        placeholder={t('placeholderEmail')}
                      />
                    </div>
 
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        {t('labelMessage')}
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-black border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-300 resize-none"
                        placeholder={t('placeholderMessage')}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-green-500 text-black font-bold text-lg rounded-lg hover:bg-green-400 hover:drop-shadow-[0_0_20px_#00B476] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      whileTap={{ scale: 0.95 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>{t('buttonSending')}</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Send className="w-5 h-5" />
                          <span>{t('buttonSend')}</span>
                        </div>
                      )}
                    </motion.button>
                  </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      {/* <section className="py-20 px-6 bg-green-950/10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-green-500/10 rounded-2xl blur-3xl"></div>
            <div className="relative bg-green-950/15 backdrop-blur-sm border border-green-500/30 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prefer a <span className="text-green-500">Live Conversation</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Book a free 30-minute consultation to discuss your QA challenges in detail.
              </p>
              <a
                href="/"
                className="inline-block px-8 py-4 bg-green-500 text-black font-bold text-lg rounded-lg hover:bg-green-400 hover:drop-shadow-[0_0_20px_#00B476] transition-all duration-300 transform hover:scale-105"
              >
                Book Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;