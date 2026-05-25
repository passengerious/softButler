import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import FAQ from '../../components/FAQ';
import {
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Zap,
  Shield,
  TrendingUp,
  Search,
  Settings,
  Target,
  GitBranch,
  Flag,
  Bell,
  Users,
  Activity,
  Plus,
  Minus,
} from 'lucide-react';
import Button from '../../components/Button';
import Link from 'next/link';

export default function ReleaseAcceleration() {
  const benefits = [
    'Deploy up to 10× faster than current pace',
    'Reduce time from commit to production',
    'Improve release predictability and confidence',
    'Minimize rollback risks',
    'Enable continuous deployment practices',
    'Reduce stress and manual work in releases',
  ];

  const features = [
    'Release pipeline analysis and optimization',
    'Risk-based testing strategy',
    'Automated deployment workflows',
    'Feature flag implementation',
    'Rollback procedures',
    'Monitoring and alerting setup',
    'Progressive delivery setup',
    'Team process optimization',
  ];

  const process = [
    { icon: Search, text: 'Analyze current release process and identify bottlenecks' },
    { icon: Settings, text: 'Design optimized release pipeline architecture' },
    { icon: Target, text: 'Implement risk-based testing approach' },
    { icon: GitBranch, text: 'Set up automated deployment workflows' },
    { icon: Flag, text: 'Configure feature flags and progressive rollout' },
    { icon: Bell, text: 'Establish monitoring and quick rollback procedures' },
    { icon: Users, text: 'Train team on new release processes' },
    { icon: Activity, text: 'Monitor and continuously optimize release performance' },
  ];

  const painPoints = [
    'A release is always stressful, long, and unpredictable',
    'Deployment takes hours or days',
    '40% of releases require a hotfix within 24 hours',
    'All tests are always run, even when not necessary',
    'There is no clear smoke/regression separation',
    'There is a fear of releasing updates on Fridays or before weekends',
    'CI/CD is not scalable (no parallelization)',
    'The QA team manually tests for regression before each release (5-10 hours)',
    'Rollback = panic and 2-4 hours of downtime',
    'Each hour of downtime costs $5k-50k in lost sales',
  ];

  const qaActivities = [
    'Analysis of the existing testing process',
    'Highlighting: Smoke suite (quick check before deployment)',
    'Regression suite (what really catches risks)',
    'Risk-based approach to running tests',
    'Reduction of manual regression',
  ];

  const devopsActivities = [
    'Optimization of CI/CD pipelines',
    'Test parallelization',
    'Multi-environment setup (dev / stage / pre-prod)',
    'Infrastructure as Code (Terraform / Ansible / Helm — as needed)',
    'Implementation of Continuous Delivery / Deployment',
  ];

  const productionActivities = [
    'Production monitoring',
    'Synthetic tests for critical flows',
    'Early detection of problems after release',
  ];

  const results = [
    { metric: 'Release Frequency', improvement: '10× faster' },
    { metric: 'Deployment Time', improvement: 'From hours to minutes' },
    { metric: 'Hotfix Rate', improvement: '70% reduction' },
    { metric: 'Rollback Time', improvement: 'From 2-4h to <5min' },
    { metric: 'Test Execution Time', improvement: '80% faster' },
    { metric: 'Manual Testing', improvement: '90% reduction' },
  ];

  const faqs = [
    {
      question: 'What exactly do you accelerate?',
      answer:
        'We accelerate the release cycle, not just testing — by removing QA bottlenecks, optimizing processes, and improving test efficiency.',
    },
    {
      question: 'What problems does this service solve?',
      answer:
        'It solves slow releases, unstable deployments, late bug discovery, and last-minute QA chaos before production.',
    },
    {
      question: 'Is this a QA or DevOps service?',
      answer:
        'It&apos;s a QA-driven release optimization service that works closely with development and CI/CD, without replacing your DevOps team but closely working with our Devops expert.',
    },
    {
      question: 'How do you identify release bottlenecks?',
      answer:
        'We analyze your release flow, test coverage, environments, feedback loops, and automation readiness to find what slows releases down.',
    },
    {
      question: 'How fast can we see improvement?',
      answer:
        'Most teams see measurable improvements within 2–3 weeks, depending on product and process complexity.',
    },
    {
      question: 'Do you change our existing processes?',
      answer:
        'We optimize, not break existing workflows — improving what you already have instead of forcing heavy process changes.',
    },
    {
      question: 'How do you measure success?',
      answer:
        'Success is measured by shorter release cycles, fewer release blockers, and higher confidence in production deployments.',
    },
  ];

  return (
    <div className="bg-black text-white relative overflow-hidden">
      <SEO pageKey="releaseAcceleration" />
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
              Release Acceleration
            </h1>
            <p className="text-xl md:text-2xl text-[#00B476] font-semibold mb-6">
              Ship faster without breaking things
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimize your entire release pipeline for speed and quality. Deploy up to{' '}
              <span className="text-[#00B476] font-bold underline decoration-[#00B476] decoration-2 underline-offset-4">
                10× faster
              </span>{' '}
              while maintaining or improving quality standards.
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
              Does this sound <span className="text-[#dc2626]">familiar?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 italic">
              &quot;Releases are always stressful, long, and unpredictable.&quot;
            </p>
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

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            What we <span className="text-[#00B476]">do</span>
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12">
            End-to-end release optimization across QA, DevOps, and Production
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-black to-green-950/20 p-8 rounded-xl border-2 border-[#00B476]/30 hover:border-[#00B476] transition-all duration-300 hover:shadow-xl hover:shadow-[#00B476]/20">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-[#00B476]" size={32} />
                <h3 className="text-2xl font-bold text-white">QA Side</h3>
              </div>
              <ul className="space-y-3">
                {qaActivities.map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="text-[#00B476] flex-shrink-0 mt-1" size={16} />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-black to-green-950/20 p-8 rounded-xl border-2 border-[#00B476]/30 hover:border-[#00B476] transition-all duration-300 hover:shadow-xl hover:shadow-[#00B476]/20">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="text-[#00B476]" size={32} />
                <h3 className="text-2xl font-bold text-white">DevOps Side</h3>
              </div>
              <ul className="space-y-3">
                {devopsActivities.map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="text-[#00B476] flex-shrink-0 mt-1" size={16} />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-black to-green-950/20 p-8 rounded-xl border-2 border-[#00B476]/30 hover:border-[#00B476] transition-all duration-300 hover:shadow-xl hover:shadow-[#00B476]/20">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-[#00B476]" size={32} />
                <h3 className="text-2xl font-bold text-white">Production-Ready</h3>
              </div>
              <ul className="space-y-3">
                {productionActivities.map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="text-[#00B476] flex-shrink-0 mt-1" size={16} />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
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
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#00B476]">Process</span>
            </h2>
            <p className="text-gray-400 text-lg">Your roadmap to testing excellence</p>
          </div>

          <div className="relative mb-12">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00B476] via-[#00B476] to-transparent z-0"></div>

            <div className="space-y-8">
              {process.map((step, idx) => {
                const Icon = step.icon;
                const isLast = idx === process.length - 1;
                return (
                  <div key={idx} className="relative pl-16">
                    <div
                      className={`absolute left-0 w-12 h-12 rounded-full bg-black border-2 border-[#00B476] flex items-center justify-center z-10 ${
                        isLast ? '' : 'shadow-lg shadow-[#00B476]/20'
                      }`}
                    >
                      <Icon className="text-[#00B476]" size={24} />
                    </div>
                    <div className="bg-black p-6 rounded-lg border border-[#00B476]/20 hover:border-[#00B476] transition-all hover:shadow-lg hover:shadow-[#00B476]/20 group">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-bold text-lg group-hover:text-[#00B476] transition-colors">
                          {step.text}
                        </h3>
                        <span className="text-[#00B476] font-bold text-sm">0{idx + 1}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
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
            Measurable improvements across all release metrics
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
                    <td className="p-6 text-gray-300 text-base font-normal group-hover:text-white transition-colors border-b border-[#00B476]/10">
                      {result.metric}
                    </td>
                    <td className="p-6 text-right text-xl font-bold text-[#00B476] group-hover:scale-105 transition-transform border-b border-[#00B476]/10">
                      {result.improvement}
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
        title={<>Release Acceleration <span className="text-[#00B476]">FAQ</span></>}
        subtitle="Clear answers to the most common questions about release optimization."
        className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black"
      />

      <section id="contact" className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-[#00B476]">get started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss how we can help improve your quality assurance process.
          </p>
          <Button href="/contact" className="text-lg">Book a call</Button>
        </motion.div>
      </section>
    </div>
  );
}
