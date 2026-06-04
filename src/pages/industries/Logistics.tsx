import SEO from '../../components/SEO';
import { Package, AlertTriangle, Activity, Timer } from 'lucide-react';
import Link from 'next/link';
import Button from '../../components/Button';
import { FormatMetricValue } from '../../components/FormatMetricValue';
import { useTranslation } from '../../lib/i18n';

export default function Logistics() {
  const { t } = useTranslation('industries');

  const pains: string[] = t('logistics.pains') || [];

  const qaApproachData: { title: string; points: string[] }[] = t('logistics.approach') || [];
  const icons = [Package, AlertTriangle, Activity, Timer];
  const qaApproach = qaApproachData.map((app, idx) => ({
    ...app,
    icon: icons[idx] || Package,
  }));

  const businessImpacts: string[] = t('logistics.impacts') || [];

  const metrics: { label: string; value: string }[] = t('logistics.results') || [];

  return (
    <div className="bg-black text-white relative overflow-hidden">
      <SEO pageKey="logistics" />
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      <section className="py-20 mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {t('logistics.headline')}
            </h1>
          </div>

          {/* Description Box */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-green-950/20 border border-green-500/20 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center mb-4">
                {t('logistics.descriptionBox')}
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed text-center">
                {t('logistics.description')}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="mb-2">
                <FormatMetricValue value={t('logistics.stats.incidentsVal')} valueClassName="text-3xl md:text-4xl font-bold text-[#00B476]" />
              </div>
              <div className="text-gray-300 text-sm">{t('logistics.stats.incidentsLbl')}</div>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="mb-2">
                <FormatMetricValue value={t('logistics.stats.syncVal')} valueClassName="text-3xl md:text-4xl font-bold text-[#00B476]" />
              </div>
              <div className="text-gray-300 text-sm">{t('logistics.stats.syncLbl')}</div>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00B476] mb-2">{t('logistics.stats.recoveryVal')}</div>
              <div className="text-gray-300 text-sm">{t('logistics.stats.recoveryLbl')}</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/contact" className="inline-block">
              <Button className="text-lg px-10 py-6">
                {t('logistics.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t('logistics.painsTitle')}
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            {t('logistics.painsSubtitle')}
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t('logistics.approachTitle')}
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            {t('logistics.approachSubtitle')}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {qaApproach.map((approach, index) => {
              const Icon = approach.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-black to-green-950/20 border border-[#00B476]/30 rounded-xl p-8 hover:border-[#00B476]/60 transition-colors"
                >
                  <Icon className="text-[#00B476] mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-4 text-gray-100">{approach.title}</h3>
                  <ul className="space-y-3">
                    {approach.points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00B476] flex-shrink-0 mt-2"></div>
                        <span className="text-gray-300 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-12 bg-gradient-to-r from-black via-green-950/15 to-black rounded-xl p-8 text-center">
            <p className="text-xl md:text-2xl text-[#00B476] font-semibold leading-relaxed">
              {t('logistics.approachBottom')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t('logistics.impactTitle')}
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            {t('logistics.impactSubtitle')}
          </p>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/50 via-red-500/30 to-transparent transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-8">
              {businessImpacts.map((impact, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-gradient-to-br from-black to-green-950/20 border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all hover:scale-105">
                      <p className="text-gray-200 font-medium text-lg">{impact}</p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-red-500/5 border-2 border-red-500/40 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {t('logistics.resultsTitle')}
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            {t('logistics.resultsSubtitle')}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#00B476]/40 transition-colors text-center"
              >
                <div className="mb-2">
                  <FormatMetricValue value={metric.value} valueClassName="text-3xl font-bold text-[#00B476]" />
                </div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {t('logistics.engagementTitle')}
          </h2>
          <div className="space-y-8">
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-red-400 mb-3">{t('logistics.engagement.initialStateTitle')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('logistics.engagement.initialStateDesc')}
              </p>
            </div>
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">{t('logistics.engagement.problemsTitle')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('logistics.engagement.problemsDesc')}
              </p>
            </div>
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">{t('logistics.engagement.changedTitle')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('logistics.engagement.changedDesc')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-[#00B476] mb-3">{t('logistics.engagement.outcomeTitle')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('logistics.engagement.outcomeDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('logistics.footerTitle')}
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {t('logistics.footerSubtitle')}
          </p>
          <Link href="/contact" className="inline-block">
            <Button className="text-lg px-10 py-6">
              {t('logistics.footerCta')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
