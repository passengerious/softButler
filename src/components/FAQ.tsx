import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who are you and what is your expertise?",
      answer: "We are SoftButler, a QA and Quality Engineering company on a mission to make products trustworthy by default. We help teams build quality into their products from day one through manual and automated testing, QA audits, and release acceleration — preventing issues before they reach production."
    },
    {
      question: "Why should clients choose SoftButler?",
      answer: "Clients choose SoftButler because we measure quality in real numbers, not promises. We combine strong QA engineering expertise with a business-oriented mindset — focusing on faster releases, fewer production bugs, and predictable delivery. We don’t slow teams down. We accelerate development while increasing confidence in every release."
    },
    {
      question: "What industries do you have experience in?",
      answer: "We have hands-on experience working with: SaaS products, E-commerce platforms, Fintech solutions, Business and enterprise web applications. Our QA approach adapts to the product domain, risk level, and business goals of each industry."
    },
    {
      question: "What results do clients get from working with you?",
      answer: "Our clients typically achieve: Reduced production bugs, Faster and more predictable release cycles, Lower QA and regression costs through automation, Higher product stability and user satisfaction. We always focus on measurable outcomes and clearly show progress using metrics, reports, and KPIs."
    },
    {
      question: "Why is QA important for business?",
      answer: "QA is not just about finding bugs — it is about protecting revenue, reputation, and users. Strong QA helps businesses: Avoid costly production incidents, Reduce support and hotfix costs, Release faster with confidence, Build trust with customers. Quality directly impacts customer retention, growth, and long-term scalability."
    },
    {
      question: "What does your QA process look like from start to finish?",
      answer: "Our QA process typically includes: Product and risk analysis, QA strategy and scope definition, Test planning and test case creation, Manual and/or automated testing, Defect tracking and verification, Reporting, metrics, and recommendations. The process is always adapted to the product stage, team setup, and business priorities."
    },
    {
      question: "What quality guarantees do you provide?",
      answer: "We prove quality with measurable results. If agreed quality metrics are not achieved, we refund the cost of the service. Quality for us is not subjective — it is transparent, measurable, and accountable."
    },
    {
      question: "How do you work with client teams (communication and reporting)?",
      answer: "We maintain continuous communication with client teams and provide regular reports, adjusted to client needs. This can include: Daily or weekly status updates, Clear defect reports, Quality metrics and progress tracking, Actionable recommendations. Clients always know what is happening, what was found, and what comes next."
    },
    {
      question: "How long does QA implementation usually take?",
      answer: "QA implementation typically starts from 2 weeks, depending on the complexity of the product and selected services. We focus on delivering early value, not long onboarding phases."
    },
    {
      question: "Can clients get a free consultation or evaluation?",
      answer: "Yes. We offer a 3-day free trial for any selected service. If the client is not satisfied within the first 3 days, the service is completely free with no obligations."
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
            Frequently Asked <span className="text-green-500">Questions</span>
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
              className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;