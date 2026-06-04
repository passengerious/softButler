import SEO from '../components/SEO';
import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, ChevronDown } from 'lucide-react';
import Button from '../components/Button';
import { useTranslation } from '../lib/i18n';

export default function Careers() {
  const [openPositions, setOpenPositions] = useState<{ [key: string]: boolean }>({
    senior: false,
    middle: false,
  });
  const { t } = useTranslation('careers');

  const togglePosition = (position: string) => {
    setOpenPositions((prev) => ({
      ...prev,
      [position]: !prev[position],
    }));
  };

  const seniorResponsibilities: string[] = t('senior.responsibilities') || [];
  const seniorRequirements: string[] = t('senior.requirements') || [];
  const seniorBenefits: string[] = t('senior.benefits') || [];

  const middleResponsibilities: string[] = t('middle.responsibilities') || [];
  const middleRequirements: string[] = t('middle.requirements') || [];
  const middleBenefits: string[] = t('middle.benefits') || [];

  const applicationSteps: string[] = t('steps') || [];

  return (
    <div className="bg-black text-white relative overflow-hidden">
      <SEO pageKey="careers" />
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      <section className="py-20 mt-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center">
            <span className="text-[#00B476]">{t('title')}</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
            {t('intro')}
          </p>
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            {t('desc')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center" dangerouslySetInnerHTML={{ __html: t('openPositionsHtml') }} />

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-black to-green-950/20 border-2 border-[#00B476]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00B476]/50">
              <button
                onClick={() => togglePosition('senior')}
                className="w-full p-8 md:p-12 text-left flex items-start justify-between gap-4 hover:bg-[#00B476]/5 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{t('senior.title')}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                    <span className="bg-green-950/15 px-4 py-2 rounded-lg text-sm">{t('labels.remoteHybrid')}</span>
                    <span className="bg-green-950/15 px-4 py-2 rounded-lg text-sm">{t('labels.fullTime')}</span>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {t('senior.desc')}
                  </p>
                </div>
                <ChevronDown
                  className={`flex-shrink-0 text-[#00B476] transition-transform duration-300 ${
                    openPositions.senior ? 'rotate-180' : ''
                  }`}
                  size={32}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openPositions.senior
                    ? 'max-h-[2000px] opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-8 md:px-12 pb-8 md:pb-12 space-y-8 border-t border-[#00B476]/20">
                  <div className="pt-8">
                    <h4 className="text-xl font-bold text-[#00B476] mb-4">{t('labels.responsibilities')}</h4>
                    <ul className="space-y-3">
                      {seniorResponsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-[#00B476] flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#00B476] mb-4">{t('labels.requirements')}</h4>
                    <ul className="space-y-3">
                      {seniorRequirements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-[#00B476] flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#00B476] mb-4">{t('labels.benefits')}</h4>
                    <ul className="space-y-3">
                      {seniorBenefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-[#00B476] flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link href="/contact">
                      <Button>{t('applySenior')}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-black to-green-950/20 border-2 border-[#00B476]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00B476]/50">
              <button
                onClick={() => togglePosition('middle')}
                className="w-full p-8 md:p-12 text-left flex items-start justify-between gap-4 hover:bg-[#00B476]/5 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{t('middle.title')}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                    <span className="bg-green-950/15 px-4 py-2 rounded-lg text-sm">{t('labels.remoteHybrid')}</span>
                    <span className="bg-green-950/15 px-4 py-2 rounded-lg text-sm">{t('labels.fullTime')}</span>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {t('middle.desc')}
                  </p>
                </div>
                <ChevronDown
                  className={`flex-shrink-0 text-[#00B476] transition-transform duration-300 ${
                    openPositions.middle ? 'rotate-180' : ''
                  }`}
                  size={32}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openPositions.middle
                    ? 'max-h-[2000px] opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-8 md:px-12 pb-8 md:pb-12 space-y-8 border-t border-[#00B476]/20">
                  <div className="pt-8">
                    <h4 className="text-xl font-bold text-[#00B476] mb-4">{t('labels.responsibilities')}</h4>
                    <ul className="space-y-3">
                      {middleResponsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-[#00B476] flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#00B476] mb-4">{t('labels.requirements')}</h4>
                    <ul className="space-y-3">
                      {middleRequirements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-[#00B476] flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#00B476] mb-4">{t('labels.benefits')}</h4>
                    <ul className="space-y-3">
                      {middleBenefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-[#00B476] flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link href="/contact">
                      <Button>{t('applyMiddle')}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" dangerouslySetInnerHTML={{ __html: t('howToApplyHtml') }} />
          <p className="text-center text-gray-400 text-lg mb-12">
            {t('howToApplyDesc')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-black to-green-950/20 border-2 border-[#00B476]/20 p-6 rounded-xl hover:border-[#00B476] transition-all duration-300 hover:shadow-xl hover:shadow-[#00B476]/20 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#00B476]/10 border-2 border-[#00B476] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-[#00B476]">{idx + 1}</span>
                  </div>
                  <div className="text-gray-300 font-medium group-hover:text-white transition-colors">
                    {step}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: t('dontSeeRoleHtml') }} />
          <p className="text-xl text-gray-300 mb-8 whitespace-pre-line">
            {t('dontSeeRoleDesc')}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-semibold transition-all bg-[#00B476] text-black hover:bg-[#00B476]/90 text-lg"
          >
            {t('contactUs')}
          </Link>
        </div>
      </section>
    </div>
  );
}
