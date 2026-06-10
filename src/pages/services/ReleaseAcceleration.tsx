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
} from 'lucide-react';
import Button from '../../components/Button';
import { useTranslation } from '../../lib/i18n';

export default function ReleaseAcceleration() {
  const { t } = useTranslation('service-details');

  const benefits: string[] = t('release-acceleration.benefits') || [];
  const features: string[] = t('release-acceleration.features') || [];
  const painPoints: string[] = t('release-acceleration.painPoints') || [];
  const qaActivities: string[] = t('release-acceleration.qaActivities') || [];
  const devopsActivities: string[] = t('release-acceleration.devopsActivities') || [];
  const productionActivities: string[] = t('release-acceleration.productionActivities') || [];

  const process = [
    { icon: Search, text: t('release-acceleration.process.0') },
    { icon: Settings, text: t('release-acceleration.process.1') },
    { icon: Target, text: t('release-acceleration.process.2') },
    { icon: GitBranch, text: t('release-acceleration.process.3') },
    { icon: Flag, text: t('release-acceleration.process.4') },
    { icon: Bell, text: t('release-acceleration.process.5') },
    { icon: Users, text: t('release-acceleration.process.6') },
    { icon: Activity, text: t('release-acceleration.process.7') },
  ];

  const results = [
    { metric: t('release-acceleration.results.0.metric'), improvement: t('release-acceleration.results.0.improvement') },
    { metric: t('release-acceleration.results.1.metric'), improvement: t('release-acceleration.results.1.improvement') },
    { metric: t('release-acceleration.results.2.metric'), improvement: t('release-acceleration.results.2.improvement') },
    { metric: t('release-acceleration.results.3.metric'), improvement: t('release-acceleration.results.3.improvement') },
    { metric: t('release-acceleration.results.4.metric'), improvement: t('release-acceleration.results.4.improvement') },
    { metric: t('release-acceleration.results.5.metric'), improvement: t('release-acceleration.results.5.improvement') },
  ];

  const faqs = t('release-acceleration.faqs') || [];

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
              {t('release-acceleration.title')}
            </h1>
            <p className="text-xl md:text-2xl text-[#00B476] font-semibold mb-6">
              {t('release-acceleration.subtitle')}
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('release-acceleration.description')}
            </p>
            <Button href="/contact" className="text-lg">{t('common.bookCall') || 'Book a call'}</Button>
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
              {t('release-acceleration.familiarTitle') || 'Does this sound familiar?'}
            </h2>
            <p className="text-xl text-gray-300 mb-8 italic">
              &quot;{t('release-acceleration.familiarQuote')}&quot;
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
            Key <span className="text-[#00B476]">{t('services.keyBenefits') || 'Benefits'}</span>
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
            {t('services.whatsIncluded') || "What's Included"}
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
            {t('release-acceleration.doTitle') || 'What we do'}
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12">
            {t('release-acceleration.doSubtitle')}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-black to-green-950/20 p-8 rounded-xl border-2 border-[#00B476]/30 hover:border-[#00B476] transition-all duration-300 hover:shadow-xl hover:shadow-[#00B476]/20">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-[#00B476]" size={32} />
                <h3 className="text-2xl font-bold text-white">{t('release-acceleration.qaSide') || 'QA Side'}</h3>
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
                <h3 className="text-2xl font-bold text-white">{t('release-acceleration.devopsSide') || 'DevOps Side'}</h3>
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
                <h3 className="text-2xl font-bold text-white">{t('release-acceleration.productionReady') || 'Production-Ready'}</h3>
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
              Our <span className="text-[#00B476]">{t('services.ourProcess') || 'Process'}</span>
            </h2>
            <p className="text-gray-400 text-lg">{t('services.processSubtitle') || 'Your roadmap to testing excellence'}</p>
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
            {t('release-acceleration.resultsTitle') || 'Expected Results'}
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12">
            {t('release-acceleration.resultsSubtitle') || 'Measurable improvements across all release metrics'}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-gradient-to-br from-black to-green-950/20 border-2 border-[#00B476]/30 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#00B476]/10">
                  <th className="text-left p-6 text-[#00B476] font-bold text-lg border-b-2 border-[#00B476]/30">{t('services.metric') || 'Metric'}</th>
                  <th className="text-right p-6 text-[#00B476] font-bold text-lg border-b-2 border-[#00B476]/30">{t('services.improvement') || 'Improvement'}</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, idx) => (
                  <tr key={idx}>
                    <td className="p-6 text-gray-300 text-base font-normal border-b border-gray-800/50">
                      {result.metric}
                    </td>
                    <td className="p-6 text-right text-xl font-bold text-[#00B476] border-b border-gray-800/50">
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
        subtitle={t('services.faqSubtitle') || 'Clear answers to the most common questions about release optimization.'}
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
            {t('release-acceleration.readyTitle') || 'Ready to get started?'}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('release-acceleration.readySubtitle')}
          </p>
          <Button href="/contact" className="text-lg">{t('common.bookCall') || 'Book a call'}</Button>
        </motion.div>
      </section>
    </div>
  );
}
