import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import FAQ from '../../components/FAQ';
import {
  CheckCircle,
  AlertTriangle,
  Target,
  FileCheck,
  TrendingUp,
  Award,
  Search,
  Users,
} from 'lucide-react';
import Button from '../../components/Button';
import { FormatMetricValue } from '../../components/FormatMetricValue';
import { useTranslation } from '../../lib/i18n';

export default function QACandidateAssessment() {
  const { t } = useTranslation('service-details');

  const painPoints: string[] = t('qa-candidate-assessment.painPoints') || [];
  const serviceFormat: string[] = t('qa-candidate-assessment.serviceFormat') || [];
  const basedOn: string[] = t('qa-candidate-assessment.basedOn') || [];
  const evaluationAreas: string[] = t('qa-candidate-assessment.evaluationAreas') || [];
  const assessmentFormats: string[] = t('qa-candidate-assessment.assessmentFormats') || [];
  const reportIncludes: string[] = t('qa-candidate-assessment.reportIncludes') || [];

  const processSteps = [
    { icon: Users, title: t('qa-candidate-assessment.processSteps.0.title'), text: t('qa-candidate-assessment.processSteps.0.text') },
    { icon: Target, title: t('qa-candidate-assessment.processSteps.1.title'), text: t('qa-candidate-assessment.processSteps.1.text') },
    { icon: Search, title: t('qa-candidate-assessment.processSteps.2.title'), text: t('qa-candidate-assessment.processSteps.2.text') },
    { icon: FileCheck, title: t('qa-candidate-assessment.processSteps.3.title'), text: t('qa-candidate-assessment.processSteps.3.text') },
    { icon: Award, title: t('qa-candidate-assessment.processSteps.4.title'), text: t('qa-candidate-assessment.processSteps.4.text') },
  ];

  const results = [
    { metric: t('qa-candidate-assessment.results.0.metric'), improvement: t('qa-candidate-assessment.results.0.improvement') },
    { metric: t('qa-candidate-assessment.results.1.metric'), improvement: t('qa-candidate-assessment.results.1.improvement') },
    { metric: t('qa-candidate-assessment.results.2.metric'), improvement: t('qa-candidate-assessment.results.2.improvement') },
  ];

  const metrics = [
    { label: t('qa-candidate-assessment.metrics.0.label'), value: t('qa-candidate-assessment.metrics.0.value') },
    { label: t('qa-candidate-assessment.metrics.1.label'), value: t('qa-candidate-assessment.metrics.1.value') },
    { label: t('qa-candidate-assessment.metrics.2.label'), value: t('qa-candidate-assessment.metrics.2.value') },
  ];

  const faqs = t('qa-candidate-assessment.faqs') || [];

  return (
    <div className="bg-black text-white relative overflow-hidden">
      <SEO pageKey="qaCandidateAssessment" />
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
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('qa-candidate-assessment.title')}
            </h1>
            <p className="text-xl md:text-2xl text-[#00B476] font-semibold mb-8">
              {t('qa-candidate-assessment.subtitle')}
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('qa-candidate-assessment.description')}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {t('qa-candidate-assessment.painTitle') || 'The Real Cost of Hiring Mistakes'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
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

          <div className="bg-gradient-to-br from-[#dc2626]/10 to-black border-2 border-[#dc2626]/30 p-8 rounded-xl text-center">
            <p className="text-xl md:text-2xl text-gray-200 font-medium">
              &quot;{t('qa-candidate-assessment.hiringMistakeQuote')}&quot;
            </p>
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
            {t('qa-candidate-assessment.serviceFormatTitle') || 'How the Service Works'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceFormat.map((item, idx) => (
              <div
                key={idx}
                className="bg-black p-8 rounded-xl border border-[#00B476]/20 hover:border-[#00B476] transition-all duration-300 hover:shadow-lg hover:shadow-[#00B476]/20 group text-center"
              >
                <CheckCircle
                  className="text-[#00B476] mx-auto mb-4 group-hover:scale-110 transition-transform"
                  size={40}
                />
                <p className="text-gray-300 text-lg group-hover:text-white transition-colors">
                  {item}
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
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-gradient-to-br from-black to-green-950/20 border-2 border-[#00B476]/30 p-12 rounded-2xl text-center">
            <Award className="text-[#00B476] mx-auto mb-6" size={56} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#00B476]">{t('qa-candidate-assessment.confidenceTitle') || 'Hiring Confidence Assessment'}</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              {t('qa-candidate-assessment.confidenceSubtitle')}
            </p>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-gray-400 leading-relaxed">
                {t('qa-candidate-assessment.confidenceQuestion')}
              </p>
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
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            {t('qa-candidate-assessment.basedOnTitle') || 'What the Assessment is Based On'}
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            {t('qa-candidate-assessment.basedOnSubtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {basedOn.map((item, idx) => (
              <div
                key={idx}
                className="bg-black p-8 rounded-xl border border-[#00B476]/20 hover:border-[#00B476] transition-all duration-300 hover:shadow-lg hover:shadow-[#00B476]/20 group text-center"
              >
                <Target className="text-[#00B476] mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
                <p className="text-white text-xl font-semibold">{item}</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {evaluationAreas.map((area, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-green-950/20 p-5 rounded-lg border border-[#00B476]/20 hover:border-[#00B476] transition-all duration-300 hover:shadow-lg hover:shadow-[#00B476]/20 group"
              >
                <CheckCircle
                  className="text-[#00B476] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={20}
                />
                <p className="text-gray-300 group-hover:text-white transition-colors">{area}</p>
              </div>
            ))}
          </div>

          <div className="bg-black border border-green-500/20 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-center text-white">{t('qa-candidate-assessment.assessmentFormatsTitle') || 'Assessment Formats'}</h3>
            <div className="space-y-3">
              {assessmentFormats.map((format, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-[#00B476] rounded-full flex-shrink-0"></div>
                  <p>{format}</p>
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
          <div className="text-center mb-12">
            <FileCheck className="text-[#00B476] mx-auto mb-4" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('qa-candidate-assessment.getKeywordsTitle') || 'What You Get'}
            </h2>
          </div>

          <div className="bg-gradient-to-br from-black to-green-950/20 border-2 border-[#00B476]/30 p-10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center text-[#00B476]">
              {t('qa-candidate-assessment.reportTitle') || 'QA Candidate Assessment Report'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reportIncludes.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-lg bg-black/50 border border-[#00B476]/10 hover:border-[#00B476]/30 transition-colors"
                >
                  <CheckCircle className="text-[#00B476] flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
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
            <p className="text-gray-400 text-lg">{t('qa-candidate-assessment.processSubtitle') || 'Your roadmap to candidate evaluation excellence'}</p>
          </div>

          <div className="relative mb-12">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00B476] via-[#00B476] to-transparent z-0"></div>

            <div className="space-y-8">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                const isLast = idx === processSteps.length - 1;
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
                      <p className="text-gray-400 text-sm leading-relaxed">{step.text}</p>
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
            {t('qa-candidate-assessment.resultsTitle') || 'Expected Results'}
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12">
            {t('qa-candidate-assessment.resultsSubtitle') || 'Measurable improvements in hiring speed, cost reduction, and team stability'}
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
                  <tr
                    key={idx}
                    className="hover:bg-[#00B476]/5 transition-colors group"
                  >
                    <td className="p-6 text-gray-300 text-base font-normal group-hover:text-white transition-colors border-b border-[#00B476]/10">
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

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <TrendingUp className="text-[#00B476] mx-auto mb-4" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('qa-candidate-assessment.impactTitle') || 'Impact in Numbers'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-black to-green-950/20 border-2 border-green-500/20 p-8 rounded-xl text-center hover:border-[#00B476] transition-all duration-300 hover:shadow-xl hover:shadow-[#00B476]/20 group"
              >
                <div className="mb-3 group-hover:scale-110 transition-transform">
                  <FormatMetricValue
                    value={metric.value}
                    valueClassName="text-4xl md:text-5xl font-bold text-[#00B476]"
                  />
                </div>
                <div className="text-gray-300 text-lg font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <FAQ 
        items={faqs} 
        title={<>Candidate Assessment <span className="text-[#00B476]">FAQ</span></>}
        subtitle={t('services.faqSubtitle') || 'Clear answers to the most common questions about candidate evaluation.'}
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
            {t('qa-candidate-assessment.readyTitle') || 'Ready to hire QA with confidence?'}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('qa-candidate-assessment.readySubtitle')}
          </p>
          <Button href="/contact" className="text-lg">{t('common.bookCall') || 'Book a call'}</Button>
        </motion.div>
      </section>
    </div>
  );
}

