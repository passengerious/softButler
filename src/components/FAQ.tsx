import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What causes software defects?",
      answer: "Software defects typically stem from rushed development cycles, inadequate testing coverage, poor communication between teams, changing requirements, and lack of proper QA processes. Environmental differences between development and production also contribute significantly."
    },
    {
      question: "What is Quality Assurance?",
      answer: "Quality Assurance (QA) is a systematic process of preventing defects by focusing on the process used to create software. It's proactive, involving process improvement, standards definition, and ensuring development teams follow best practices throughout the software lifecycle."
    },
    {
      question: "What is Quality Control?",
      answer: "Quality Control (QC) is the reactive process of identifying defects in finished products through testing and inspection. While QA prevents defects, QC detects them. Both are essential components of a comprehensive quality management strategy."
    },
    {
      question: "What is Software Testing?",
      answer: "Software testing is the process of evaluating and verifying that a software application works as expected. It involves executing system components using manual or automated tools to identify bugs, gaps, or missing requirements versus actual requirements."
    },
    {
      question: "What's the difference between manual and automated testing?",
      answer: "Manual testing involves human testers executing test cases without automation tools, providing insight into user experience and exploratory testing. Automated testing uses tools and scripts to perform tests, offering speed, repeatability, and efficiency for regression testing."
    },
    {
      question: "How fast can QA be integrated into our workflow?",
      answer: "We can typically integrate QA processes within 1-2 weeks. Our approach starts with a rapid assessment of your current setup, followed by implementing critical testing processes first, then gradually expanding coverage while your team continues development."
    },
    {
      question: "Do you work with startups as well as enterprises?",
      answer: "Absolutely! We've helped 100+ startups launch bug-free MVPs and also work with enterprise clients managing complex, large-scale systems. Our processes scale from rapid startup cycles to comprehensive enterprise testing frameworks."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Frequently Asked <span className="text-yellow-500">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            General Questions About QA and Testing
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden hover:border-yellow-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-900/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <div className="text-yellow-500 flex-shrink-0">
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
                      <div className="h-px bg-gradient-to-r from-yellow-500/50 to-transparent mb-4" />
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;