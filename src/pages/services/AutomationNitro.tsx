import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import FAQ from '../../components/FAQ';
import {
  CheckCircle,
  ArrowRight,
  Bot,
  Brain,
  Zap,
  Target,
  AlertTriangle,
  Plus,
  Minus,
} from 'lucide-react';
import Button from '../../components/Button';
import Link from 'next/link';
import { FormatMetricValue } from '../../components/FormatMetricValue';

export default function AutomationNitro() {
  const benefits = [
    'Reduce regression testing time by up to 80%',
    'Improve test reliability and eliminate flaky tests',
    'Scale testing without scaling headcount',
    'Get faster feedback on every code change',
    'Reduce manual testing burden on your team',
    'Improve CI/CD pipeline efficiency',
  ];

  const features = [
    'Test automation strategy and roadmap',
    'Framework selection and setup',
    'Automated test development',
    'CI/CD integration',
    'Test maintenance and optimization',
    'Team training and knowledge transfer',
    'Flaky test elimination',
    'Parallel execution setup',
  ];

  const process = [
    'Analyze current testing process and identify automation opportunities',
    'Design automation strategy aligned with your delivery pipeline',
    'Select and configure appropriate testing frameworks and tools',
    'Develop automated test suites for critical user flows',
    'Integrate tests into CI/CD pipeline',
    'Optimize test execution speed and reliability',
    'Train your team on maintaining and extending automation',
    'Provide ongoing support and optimization',
  ];

  const painPoints = [
    'Regression takes days or weeks',
    'Automated tests are slow and expensive to write',
    'Existing automated tests are unstable (flaky)',
    'Automation cannot keep up with the product',
    'CI/CD is slowed down by tests',
    'Automation does not deliver the expected ROI',
  ];

  const aiAdvantages = [
    {
      icon: Brain,
      title: 'Smart Test Generation',
      description:
        'AI analyzes your application and generates optimal test cases automatically, covering edge cases humans might miss',
    },
    {
      icon: Target,
      title: 'Intelligent Test Selection',
      description:
        'AI determines which tests to run based on code changes, reducing test execution time by up to 70%',
    },
    {
      icon: Zap,
      title: 'Self-Healing Tests',
      description:
        'AI automatically fixes broken tests when UI changes, eliminating maintenance overhead',
    },
    {
      icon: Bot,
      title: 'Test Cases Generation',
      description:
        'AI detects flaky tests and identifies root causes faster than manual analysis',
    },
  ];

  const results = [
    { metric: 'Manual Regression', improvement: '– 40%' },
    { metric: 'Production Bugs in Critical Flows', improvement: '– 60%' },
    { metric: 'CI Feedback Time', improvement: '– 50%' },
  ];

  const faqs = [
    {
      question: 'What exactly does Automation Nitro include?',
      answer:
        'Automation Nitro covers test automation setup from scratch or improvement of existing automation, including framework setup, test creation, CI/CD integration, and best practices.',
    },
    {
      question: "Is Automation Nitro suitable if we don't have automation yet?",
      answer:
        'Yes. This service is designed both for products without automation and for teams with unstable or poorly maintained test automation.',
    },
    {
      question: 'What types of tests do you automate?',
      answer:
        'We focus on high-value automated tests such as regression, smoke, critical user flows, and API tests — not low-impact or flaky scenarios.',
    },
    {
      question: 'Which tools and technologies do you use?',
      answer:
        'We select tools based on your stack and needs, commonly using Playwright, Selenium, Cypress, API automation tools, and integrating them into your existing CI/CD pipeline.',
    },
    {
      question: 'How fast will we see results?',
      answer:
        'Initial value is usually delivered within 2 weeks, with automated tests running as part of your release process shortly after.',
    },
    {
      question: 'Will our team be able to maintain the automation?',
      answer:
        'Yes. We build clean, maintainable automation, provide documentation, and can onboard your team or continue supporting automation if needed.',
    },
    {
      question: 'How do you ensure automation actually saves time and money?',
      answer:
        'We automate only what makes sense for your product and measure impact through reduced regression time, faster releases, and fewer production issues.',
    },
  ];

  return (
    <div className="bg-black text-white relative overflow-hidden">
      <SEO pageKey="automationNitro" />
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      <section className="py-20 mt-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Automation Nitro
            </h1>
            <p className="text-xl md:text-2xl text-[#00B476] font-semibold mb-6">
              Accelerate testing with smart automation
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your testing process with intelligent automation that actually works.
              Reduce regression time by{' '}
              <span className="text-[#dc2626] font-semibold">up to 80%</span> while improving test
              reliability and coverage.
            </p>
            <Button href="/contact" className="text-lg">Book a call</Button>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-[#dc2626]/5 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#dc2626]/5 via-transparent to-[#dc2626]/5 opacity-40"></div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="text-center mb-12">
            <AlertTriangle className="text-[#dc2626] mx-auto mb-4" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common <span className="text-[#dc2626]">Automation Challenges</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {painPoints.map((pain, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-black/50 backdrop-blur-sm p-5 rounded-lg border border-[#dc2626]/20 hover:border-[#dc2626] transition-all duration-300 hover:shadow-lg hover:shadow-[#dc2626]/10 group"
              >
                <AlertTriangle
                  className="text-[#dc2626] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={20}
                />
                <p className="text-gray-300 group-hover:text-white transition-colors">{pain}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Key <span className="text-[#00B476]">Benefits</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-green-950/20 p-6 rounded-lg border border-[#00B476]/20 hover:border-[#00B476] transition-all duration-300 hover:shadow-lg hover:shadow-[#00B476]/20 hover:-translate-y-1 group"
              >
                <CheckCircle
                  className="text-[#00B476] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={24}
                />
                <p className="text-gray-300 text-lg group-hover:text-white transition-colors">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00B476]/3 via-transparent to-transparent"></div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="text-center mb-16">
            <div className="inline-block bg-[#00B476]/10 px-6 py-2 rounded-full mb-4 animate-pulse">
              <span className="text-[#00B476] font-bold text-sm">POWERED BY AI</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-[#00B476]">AI</span> Advantages
            </h2>
            <p className="text-center text-gray-300 text-xl max-w-3xl mx-auto">
              Leverage cutting-edge AI to make your automation{' '}
              <span className="text-[#dc2626] font-semibold">smarter, faster, and more reliable</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiAdvantages.map((advantage, idx) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={idx}
                  className="relative bg-gradient-to-br from-black to-green-950/20 p-8 rounded-2xl border-2 border-[#00B476]/20 hover:border-[#00B476] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00B476]/30 group hover:-translate-y-2"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute top-4 right-4 text-[#00B476]/10 font-bold text-6xl">
                    0{idx + 1}
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#00B476]/20 to-[#00B476]/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                        <Icon className="text-[#00B476]" size={40} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold mb-3 text-2xl group-hover:text-[#00B476] transition-colors">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-400 text-base leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What&apos;s <span className="text-[#00B476]">Included</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-black p-4 rounded-lg border border-[#00B476]/20 hover:border-[#00B476] transition-all duration-300 hover:shadow-lg hover:shadow-[#00B476]/10 hover:translate-x-1 group"
              >
                <ArrowRight
                  className="text-[#00B476] flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00B476]/10 via-transparent to-[#00B476]/10"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#00B476]">Process</span>
            </h2>
            <p className="text-gray-400 text-lg">Your roadmap to testing excellence</p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00B476] via-[#00B476] to-transparent hidden md:block z-0"></div>

            <div className="space-y-8">
              {process.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-6 group">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00B476] to-[#008A5A] rounded-full flex items-center justify-center font-bold text-xl text-black shadow-lg shadow-[#00B476]/50 group-hover:scale-110 transition-transform duration-300">
                      {idx + 1}
                    </div>
                  </div>

                  <div className="flex-1 bg-gradient-to-br from-black to-green-950/20 p-6 rounded-xl border border-[#00B476]/20 group-hover:border-[#00B476] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#00B476]/20 group-hover:translate-x-2">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-[#00B476] font-semibold text-sm uppercase tracking-wider">
                        Step {idx + 1}
                      </h3>
                      {idx === 0 && (
                        <span className="bg-[#00B476]/20 text-[#00B476] text-xs px-3 py-1 rounded-full font-semibold">
                          START HERE
                        </span>
                      )}
                      {idx === process.length - 1 && (
                        <span className="bg-[#dc2626]/20 text-[#dc2626] text-xs px-3 py-1 rounded-full font-semibold">
                          FINISH
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Expected <span className="text-[#00B476]">Results</span>
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12">
            Measurable improvements in testing efficiency
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-gradient-to-br from-black to-green-950/20 border-2 border-[#00B476]/30 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#00B476]/10">
                  <th className="text-left p-6 text-[#00B476] font-bold text-lg border-b-2 border-[#00B476]/30">Metric</th>
                  <th className="text-right p-6 text-[#00B476] font-bold text-lg border-b-2 border-[#00B476]/30">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#00B476]/5 transition-colors group"
                  >
                    <td className="p-6 text-gray-300 text-lg group-hover:text-white transition-colors border-b border-[#00B476]/10">
                      {result.metric}
                    </td>
                    <td className="p-6 text-right border-b border-[#00B476]/10">
                      <FormatMetricValue
                        value={result.improvement}
                        valueClassName="text-xl font-bold text-[#00B476] group-hover:scale-105 transition-transform inline-block"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      <FAQ 
        items={faqs} 
        title={<>Automation Nitro <span className="text-[#00B476]">FAQ</span></>}
        subtitle="Clear answers to common questions about automation setup and outcomes."
        className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black"
      />

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-2xl px-6 py-8 sm:px-10 sm:py-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
            Ready to <span className="text-[#00B476]">Automate Your Testing?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6">
            Start saving <span className="text-[#dc2626] font-bold">70% on testing costs</span> while
            shipping <span className="text-[#00B476] font-bold">10× faster</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="text-center group">
              <div className="text-4xl font-bold text-[#00B476] mb-1 group-hover:scale-110 transition-transform">
                80%
              </div>
              <div className="text-gray-400">Faster Testing</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-[#dc2626] mb-1 group-hover:scale-110 transition-transform">
                70%
              </div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-[#00B476] mb-1 group-hover:scale-110 transition-transform">
                10×
              </div>
              <div className="text-gray-400">Faster Delivery</div>
            </div>
          </div>
          <Button href="/contact" className="text-lg mb-4 w-full sm:w-auto">Get Your Free Automation Assessment</Button>
          <p className="text-gray-400 text-sm sm:text-base">
            No commitment required. See how automation can transform your testing.
          </p>
          </div>
        </motion.div>
      </section>

      {/* <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-[#00B476]">get started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help improve your quality assurance process.
          </p>
          <Button className="text-lg">Book a call</Button>
        </div>
      </section> */}
    </div>
  );
}
