import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import FAQ from '../../components/FAQ';
import {
  CheckCircle,
  AlertCircle,
  Target,
  TrendingUp,
  Zap,
  Shield,
  Award,
  Rocket,
  Search,
  FileCheck,
  Bug,
  GitBranch,
  Bot,
  FileText,
  AlertTriangle,
  Gift,
} from 'lucide-react';
import Button from '../../components/Button';
import { FormatMetricValue } from '../../components/FormatMetricValue';
import { useTranslation } from '../../lib/i18n';

export default function QAAudit() {
  const { t } = useTranslation('service-details');

  const checklistItems: string[] = t('qa-audit.checklistItems') || [];

  const analysisSteps = [
    {
      icon: Search,
      title: t('qa-audit.analysisSteps.0.title'),
      description: t('qa-audit.analysisSteps.0.description'),
    },
    {
      icon: FileCheck,
      title: t('qa-audit.analysisSteps.1.title'),
      description: t('qa-audit.analysisSteps.1.description'),
    },
    {
      icon: Bug,
      title: t('qa-audit.analysisSteps.2.title'),
      description: t('qa-audit.analysisSteps.2.description'),
    },
    {
      icon: GitBranch,
      title: t('qa-audit.analysisSteps.3.title'),
      description: t('qa-audit.analysisSteps.3.description'),
    },
    {
      icon: Bot,
      title: t('qa-audit.analysisSteps.4.title'),
      description: t('qa-audit.analysisSteps.4.description'),
    },
    {
      icon: FileText,
      title: t('qa-audit.analysisSteps.5.title'),
      description: t('qa-audit.analysisSteps.5.description'),
    },
    {
      icon: Zap,
      title: t('qa-audit.analysisSteps.6.title'),
      description: t('qa-audit.analysisSteps.6.description'),
    },
    {
      icon: AlertTriangle,
      title: t('qa-audit.analysisSteps.7.title'),
      description: t('qa-audit.analysisSteps.7.description'),
    },
  ];

  const whyUsPoints = [
    {
      icon: Bot,
      title: t('qa-audit.whyUsPoints.0.title'),
      description: t('qa-audit.whyUsPoints.0.description'),
    },
    {
      icon: Award,
      title: t('qa-audit.whyUsPoints.1.title'),
      description: t('qa-audit.whyUsPoints.1.description'),
    },
    {
      icon: Target,
      title: t('qa-audit.whyUsPoints.2.title'),
      description: t('qa-audit.whyUsPoints.2.description'),
    },
    {
      icon: Rocket,
      title: t('qa-audit.whyUsPoints.3.title'),
      description: t('qa-audit.whyUsPoints.3.description'),
    },
    {
      icon: Shield,
      title: t('qa-audit.whyUsPoints.4.title'),
      description: t('qa-audit.whyUsPoints.4.description'),
    },
    {
      icon: Gift,
      title: t('qa-audit.whyUsPoints.5.title'),
      description: t('qa-audit.whyUsPoints.5.description'),
    },
  ];

  const packages = [
    {
      name: t('qa-audit.packages.0.name'),
      duration: t('qa-audit.packages.0.duration'),
      bestFor: t('qa-audit.packages.0.bestFor'),
      includes: t('qa-audit.packages.0.includes') || [],
    },
    {
      name: t('qa-audit.packages.1.name'),
      duration: t('qa-audit.packages.1.duration'),
      bestFor: t('qa-audit.packages.1.bestFor'),
      includes: t('qa-audit.packages.1.includes') || [],
      highlight: true,
    },
    {
      name: t('qa-audit.packages.2.name'),
      duration: t('qa-audit.packages.2.duration'),
      bestFor: t('qa-audit.packages.2.bestFor'),
      includes: t('qa-audit.packages.2.includes') || [],
    },
  ];

  const results = [
    { metric: t('qa-audit.results.0.metric'), improvement: t('qa-audit.results.0.improvement') },
    { metric: t('qa-audit.results.1.metric'), improvement: t('qa-audit.results.1.improvement') },
    { metric: t('qa-audit.results.2.metric'), improvement: t('qa-audit.results.2.improvement') },
    { metric: t('qa-audit.results.3.metric'), improvement: t('qa-audit.results.3.improvement') },
  ];

  const faqs = t('qa-audit.faqs') || [];

  return (
    <div className="bg-black text-white relative overflow-hidden">
      <SEO pageKey="qaAudit" />
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      <section className="py-20 mt-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              {t('qa-audit.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              {t('qa-audit.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-black to-green-950/20 border-2 border-[#00B476]/30 p-8 rounded-xl text-center hover:border-[#00B476] transition-all hover:shadow-lg hover:shadow-[#00B476]/20">
              <TrendingUp className="text-[#00B476] mx-auto mb-4" size={48} />
              <div className="text-4xl md:text-5xl font-bold text-[#00B476] mb-2">50%</div>
              <div className="text-gray-400 text-lg">{t('services.popular.qa-audit.highlights.0') || 'fewer production bugs'}</div>
            </div>

            <div className="bg-gradient-to-br from-black to-green-950/20 border-2 border-[#dc2626]/30 p-8 rounded-xl text-center hover:border-[#dc2626] transition-all hover:shadow-lg hover:shadow-[#dc2626]/20">
              <Target className="text-[#dc2626] mx-auto mb-4" size={48} />
              <div className="text-4xl md:text-5xl font-bold text-[#dc2626] mb-2">3×</div>
              <div className="text-gray-400 text-lg">{t('services.popular.qa-audit.highlights.1') || 'lower cost of fixing bugs'}</div>
            </div>

            <div className="bg-gradient-to-br from-black to-green-950/20 border-2 border-[#00B476]/30 p-8 rounded-xl text-center hover:border-[#00B476] transition-all hover:shadow-lg hover:shadow-[#00B476]/20">
              <Rocket className="text-[#00B476] mx-auto mb-4" size={48} />
              <div className="text-4xl md:text-5xl font-bold text-[#00B476] mb-2">10×</div>
              <div className="text-gray-400 text-lg">{t('services.popular.qa-audit.highlights.2') || 'faster releases'}</div>
            </div>
          </div>

          <div className="text-center">
            <Button href="/contact" className="text-lg">{t('common.bookCall') || 'Book a call'}</Button>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            {t('qa-audit.checklistTitle') || 'When do you need a QA Audit?'}
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12">
            {t('qa-audit.checklistSubtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {checklistItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-green-950/20 p-4 rounded-lg border border-[#00B476]/20 hover:border-[#00B476]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#00B476]/20 hover:-translate-y-1 group"
              >
                <AlertCircle
                  className="text-[#00B476] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={20}
                />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {item}
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
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            {t('qa-audit.analysisTitle') || 'What we actually do'}
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12">
            {t('qa-audit.analysisSubtitle')}
          </p>

          <div className="relative mb-12">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00B476] via-[#00B476] to-transparent z-0"></div>

            <div className="space-y-8">
              {analysisSteps.map((step, idx) => {
                const Icon = step.icon;
                const isLast = idx === analysisSteps.length - 1;
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
                          {step.title}
                        </h3>
                        <span className="text-[#00B476] font-bold text-sm">0{idx + 1}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-[#00B476]/10 via-[#dc2626]/10 to-[#00B476]/10 border-2 border-[#00B476]/30 p-8 rounded-xl">
            <p className="text-2xl font-bold text-white mb-2">
              {t('qa-audit.planTitle') || 'You get a clear, prioritized action plan — not just observations.'}
            </p>
            <p className="text-gray-400">{t('qa-audit.planSubtitle') || 'Ready to implement from day one'}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {t('qa-audit.whyUsTitle') || 'Why work with us?'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div
                  key={idx}
                  className="bg-black p-8 rounded-xl border border-[#00B476]/20 hover:border-[#00B476] transition-all hover:shadow-lg hover:shadow-[#00B476]/20 group text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00B476]/10 rounded-full mb-4 group-hover:bg-[#00B476]/20 transition-colors">
                    <Icon className="text-[#00B476] group-hover:scale-110 transition-transform" size={32} />
                  </div>
                  <h3 className="text-white font-bold mb-2 text-xl">{point.title}</h3>
                  <p className="text-gray-400">{point.description}</p>
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
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t('qa-audit.packagesTitle') || 'Choose the level of impact'}
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12">
            {t('qa-audit.packagesSubtitle') || 'Select the package that fits your current needs and readiness for change'}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`flex flex-col h-full rounded-lg p-8 border-2 transition-all duration-500 hover:-translate-y-2 ${
                  pkg.highlight
                    ? 'bg-gradient-to-b from-[#00B476]/10 to-black border-[#00B476] shadow-xl shadow-[#00B476]/20 hover:shadow-2xl hover:shadow-[#00B476]/30'
                    : 'bg-green-950/20 border-[#00B476]/20 hover:border-[#00B476] hover:shadow-xl hover:shadow-[#00B476]/20'
                }`}
              >
                {pkg.highlight && (
                  <div className="bg-[#00B476] text-black text-sm font-bold px-3 py-1 rounded-full inline-block mb-4 text-center">
                    {t('common.mostPopular') || 'MOST POPULAR'}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-[#00B476] font-semibold mb-4">{pkg.duration}</p>
                <p className="text-gray-400 text-sm mb-6 italic">{pkg.bestFor}</p>

                <div className="space-y-3 mb-8">
                  {pkg.includes.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2">
                      <CheckCircle className="text-[#00B476] flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#00B476]/20 pt-6 mt-auto">
                    <Button href="/contact" variant={pkg.highlight ? 'primary' : 'secondary'} className="w-full">
                      {t('common.bookCall') || 'Book a call'}
                    </Button>
                </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t('qa-audit.resultsTitle') || 'What you get after QA Audit'}
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12">
            {t('qa-audit.resultsSubtitle') || 'Measurable improvements across all key quality metrics'}
          </p>

          <div className="bg-gradient-to-br from-black to-green-950/20 border-2 border-[#00B476]/30 p-8 md:p-10 rounded-2xl">
            <div className="space-y-6">
              {results.map((result, idx) => {
                const colors = [
                  {
                    text: 'text-[#00B476]',
                    border: 'border-[#00B476]',
                    bg: 'bg-[#00B476]/10',
                    hover: 'hover:border-[#00B476]',
                    shadow: 'hover:shadow-[#00B476]/20',
                  },
                  {
                    text: 'text-[#00ff9d]',
                    border: 'border-[#00ff9d]',
                    bg: 'bg-[#00ff9d]/10',
                    hover: 'hover:border-[#00ff9d]',
                    shadow: 'hover:shadow-[#00ff9d]/20',
                  },
                  {
                    text: 'text-[#00B476]',
                    border: 'border-[#00B476]',
                    bg: 'bg-[#00B476]/10',
                    hover: 'hover:border-[#00B476]',
                    shadow: 'hover:shadow-[#00B476]/20',
                  },
                  {
                    text: 'text-[#00ff9d]',
                    border: 'border-[#00ff9d]',
                    bg: 'bg-[#00ff9d]/10',
                    hover: 'hover:border-[#00ff9d]',
                    shadow: 'hover:shadow-[#00ff9d]/20',
                  },
                ];
                const color = colors[idx];
                return (
                  <div
                    key={idx}
                    className={`flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-6 rounded-xl bg-black/50 border border-[#00B476]/20 hover:border-[#00B476] transition-all duration-300 hover:shadow-lg hover:shadow-[#00B476]/20 group`}
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full ${color.bg} border-2 border-[#00B476] flex items-center justify-center`}
                    >
                      <span className={`text-2xl font-bold ${color.text}`}>{idx + 1}</span>
                    </div>
                    <div className="flex-grow">
                      <h3
                        className={`text-xl font-semibold text-white mb-1 group-hover:text-[#00B476] transition-colors`}
                      >
                        {result.metric}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 sm:text-right">
                      <FormatMetricValue
                        value={result.improvement}
                        valueClassName="text-lg sm:text-xl font-bold text-[#00B476] group-hover:scale-110 transition-transform"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      <FAQ 
        items={faqs} 
        title={<>QA Audit <span className="text-[#00B476]">FAQ</span></>}
        subtitle={t('services.faqSubtitle') || 'Clear answers to common questions.'}
        className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black"
      />


      <section id="contact" className="py-20 bg-black">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('qa-audit.readyTitle') || 'Ready to Improve Your Quality Assurance?'}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('qa-audit.readySubtitle')}
          </p>
          <Button href="/contact" className="text-lg mb-6">{t('common.bookCall') || 'Book a call'}</Button>
        </motion.div>
      </section>
    </div>
  );
}
