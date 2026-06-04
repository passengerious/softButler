import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqItems as defaultFaqItems } from './FAQ.data';
import { useTranslation } from '../lib/i18n';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  id?: string;
}

const FAQ = ({
  items,
  title,
  subtitle,
  className = "py-20 px-6 bg-gray-900/30",
  id = "faq"
}: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation('home');

  const renderedItems: FAQItem[] = items || t('faq.items') || defaultFaqItems;
  const renderedSubtitle = subtitle !== undefined ? subtitle : t('faq.subtitle');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className={className}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {title !== undefined ? title : <span dangerouslySetInnerHTML={{ __html: t('faq.titleHtml') }} />}
          </h2>
          <p className="text-xl text-gray-300">
            {renderedSubtitle}
          </p>
        </motion.div>

        <div className="space-y-4">
          {renderedItems.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-900/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <div className="text-green-500 flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="h-px bg-gradient-to-r from-green-500/50 to-transparent mb-4" />
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
