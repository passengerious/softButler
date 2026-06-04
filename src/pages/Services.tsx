import SEO from '../components/SEO';
import Link from 'next/link';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import { useTranslation } from '../lib/i18n';

export default function Services() {
  const { t } = useTranslation('services');

  const popularServices = [
    {
      slug: 'qa-audit',
      title: t('popular.qa-audit.title'),
      description: t('popular.qa-audit.description'),
      highlights: t('popular.qa-audit.highlights') as string[] || [],
    },
    {
      slug: 'automation-nitro',
      title: t('popular.automation-nitro.title'),
      description: t('popular.automation-nitro.description'),
      highlights: t('popular.automation-nitro.highlights') as string[] || [],
    },
    {
      slug: 'release-acceleration',
      title: t('popular.release-acceleration.title'),
      description: t('popular.release-acceleration.description'),
      highlights: t('popular.release-acceleration.highlights') as string[] || [],
    },
    {
      slug: 'qa-candidate-assessment',
      title: t('popular.qa-candidate-assessment.title'),
      description: t('popular.qa-candidate-assessment.description'),
      highlights: t('popular.qa-candidate-assessment.highlights') as string[] || [],
    },
  ];

  const coreServices = [
    {
      slug: 'functional-testing',
      title: t('core.functional-testing.title'),
      description: t('core.functional-testing.description'),
      highlights: t('core.functional-testing.highlights') as string[] || [],
    },
    {
      slug: 'performance-testing',
      title: t('core.performance-testing.title'),
      description: t('core.performance-testing.description'),
      highlights: t('core.performance-testing.highlights') as string[] || [],
    },
    {
      slug: 'regression-testing',
      title: t('core.regression-testing.title'),
      description: t('core.regression-testing.description'),
      highlights: t('core.regression-testing.highlights') as string[] || [],
    },
    {
      slug: 'integration-testing',
      title: t('core.integration-testing.title'),
      description: t('core.integration-testing.description'),
      highlights: t('core.integration-testing.highlights') as string[] || [],
    },
    {
      slug: 'system-testing',
      title: t('core.system-testing.title'),
      description: t('core.system-testing.description'),
      highlights: t('core.system-testing.highlights') as string[] || [],
    },
  ];

  return (
    <div className="bg-black text-white relative overflow-hidden">
      <SEO pageKey="services" />
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      <section className="pt-20 pb-4 mt-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: t('heroTitleHtml') }} />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="pt-2 pb-10 bg-gradient-to-b from-black via-green-950/5 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Star className="text-[#00B476] mr-3" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold">{t('mostPopular')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {popularServices.map((service) => (
              <Link key={service.slug} href={`/service/${service.slug}`} className="group">
                <div className="bg-gradient-to-br from-green-950/25 to-black border-2 border-[#00B476]/40 p-8 rounded-lg h-full flex flex-col transition-all hover:border-[#00B476] hover:shadow-xl hover:shadow-[#00B476]/30 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-[#00B476] transition-colors">
                      {service.title}
                    </h3>
                    <Star className="text-[#00B476] fill-[#00B476]" size={24} />
                  </div>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6 flex-1">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start text-sm">
                        <CheckCircle className="text-[#00B476] mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-[#00B476] font-semibold mt-auto pt-2">
                    {t('learnMore')}{' '}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="border-t border-[#00B476]/20 pt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('coreTestingServices')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service) => (
                <Link key={service.slug} href={`/service/${service.slug}`} className="group">
                  <div className="bg-green-950/20 border border-[#00B476]/20 p-6 rounded-lg h-full flex flex-col transition-all hover:border-[#00B476] hover:bg-black hover:shadow-lg hover:shadow-[#00B476]/20">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#00B476] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <div className="space-y-1 mb-4 flex-1">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start text-sm">
                          <CheckCircle className="text-[#00B476] mr-2 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-[#00B476] font-semibold mt-auto pt-2">
                      {t('learnMore')}{' '}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: t('notSureTitleHtml') }} />
          <p className="text-xl text-gray-300 mb-8">
            {t('notSureSubtitle')}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#00B476] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#00B476]/90 transition-colors"
          >
            {t('bookCall')}
          </Link>
        </div>
      </section>
    </div>
  );
}