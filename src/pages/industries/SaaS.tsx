import SEO from '../../components/SEO';
import { CheckCircle, TrendingDown, Shield, Target } from 'lucide-react';
import Link from 'next/link';
import Button from '../../components/Button';
import { FormatMetricValue } from '../../components/FormatMetricValue';
import { useTranslation } from '../../lib/i18n';

export default function SaaS() {
  const { t } = useTranslation('industries');

  const pains: string[] = t('saas.pains') || [];

  const solutionsData: { title: string; description: string }[] = t('saas.solutions') || [];
  const solutions = solutionsData.map((sol) => ({
    ...sol,
    icon: CheckCircle,
  }));

  const metricsData: { label: string; value: string }[] = t('saas.results') || [];
  const metricsIcons = [TrendingDown, Target, TrendingDown, Shield];
  const metrics = metricsData.map((m, idx) => ({
    ...m,
    icon: metricsIcons[idx] || Shield,
  }));

  return (
    <div className="bg-black text-white relative overflow-hidden">
      <SEO pageKey="saas" />
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      <section className="py-20 mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {t('saas.headline')}
            </h1>
          </div>

          {/* Description Box */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-green-950/20 border border-green-500/20 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center">
                {t('saas.description')}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="mb-2">
                <FormatMetricValue value={t('saas.stats.bugsVal')} valueClassName="text-3xl md:text-4xl font-bold text-[#00B476]" />
              </div>
              <div className="text-gray-300 text-sm">{t('saas.stats.bugsLbl')}</div>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="mb-2">
                <FormatMetricValue value={t('saas.stats.freqVal')} valueClassName="text-3xl md:text-4xl font-bold text-[#00B476]" />
              </div>
              <div className="text-gray-300 text-sm">{t('saas.stats.freqLbl')}</div>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00B476] mb-2">{t('saas.stats.releasesVal')}</div>
              <div className="text-gray-300 text-sm">{t('saas.stats.releasesLbl')}</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/contact" className="inline-block">
              <Button className="text-lg px-10 py-6">{t('saas.cta')}</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t('saas.painsTitle')}
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            {t('saas.painsSubtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {pains.map((pain, index) => (
              <div
                key={index}
                className="bg-green-950/15 border border-green-500/20 rounded-lg p-6 hover:border-red-500/50 hover:bg-red-500/5 transition-colors cursor-default"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                  <p className="text-gray-200 leading-relaxed">{pain}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t('saas.approachTitle')}
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            {t('saas.approachSubtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 hover:border-[#00B476] transition-colors"
              >
                <CheckCircle className="text-[#00B476] mb-3" size={28} />
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-400">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {t('saas.impactTitle')}
          </h2>
          <div className="bg-green-950/15 border border-green-500/20 rounded-xl p-8 md:p-10">
            <div className="space-y-6">
              {((t('saas.impacts') as any[]) || []).map((impact, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00B476]/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="text-[#00B476]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{impact.title}</h3>
                    <p className="text-gray-400">{impact.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8">
              <p className="text-lg text-center text-[#00B476] font-semibold">
                {t('saas.impactBottom')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t('saas.resultsTitle')}
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            {t('saas.resultsSubtitle')}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#00B476]/40 transition-colors text-center"
                >
                  <Icon className="text-[#00B476] mb-4 mx-auto" size={32} />
                  <div className="mb-2">
                    <FormatMetricValue value={metric.value} valueClassName="text-3xl font-bold text-[#00B476]" />
                  </div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray-400">
              {t('saas.resultsBottom')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {t('saas.engagementTitle')}
          </h2>
          <div className="space-y-8">
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-red-400 mb-3">{t('saas.engagement.initialStateTitle')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('saas.engagement.initialStateDesc')}
              </p>
            </div>
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">{t('saas.engagement.problemsTitle')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('saas.engagement.problemsDesc')}
              </p>
            </div>
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">{t('saas.engagement.changedTitle')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('saas.engagement.changedDesc')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-[#00B476] mb-3">{t('saas.engagement.outcomeTitle')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('saas.engagement.outcomeDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('saas.footerTitle')}
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {t('saas.footerSubtitle')}
          </p>
          <Link href="/contact" className="inline-block">
            <Button className="text-lg px-10 py-6">
              {t('saas.cta')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
