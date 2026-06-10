import SEO from '../components/SEO';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Rocket, Users, Star, Heart, Flame, Target } from 'lucide-react';
import { useTranslation } from '../lib/i18n';
import {
  NovaPostLogo,
  MonobankLogo,
  FozzyGroupLogo,
  SigmaLogo,
  GridDynamicsLogo,
  KyivstarLogo,
  AkvelonLogo,
  SoftServeLogo,
  EPAMLogo,
  SamsungLogo,
  CheckmarxLogo,
  CompanyLogo,
} from '../components/CompanyLogos';

const WhoWeAre = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const { t } = useTranslation('who-we-are');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Calculate line progress based on journey section scroll position
      if (journeyRef.current) {
        const rect = journeyRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Start when section top reaches middle of viewport, finish when section bottom reaches middle
        const viewportMiddle = windowHeight / 2;
        const sectionMiddleStart = viewportMiddle - sectionTop;
        const totalScrollDistance = sectionHeight;

        const scrollProgress = Math.max(0, Math.min(1, sectionMiddleStart / totalScrollDistance));
        setLineProgress(scrollProgress * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  const journeySteps = [
    {
      icon: BookOpen,
      title: t('journeySteps.0.title'),
      description: t('journeySteps.0.description'),
      highlight: t('journeySteps.0.highlight')
    },
    {
      icon: Users,
      title: t('journeySteps.1.title'),
      description: t('journeySteps.1.description')
    },
    {
      icon: Rocket,
      title: t('journeySteps.2.title'),
      description: t('journeySteps.2.description')
    },
    {
      icon: Target,
      title: t('journeySteps.3.title'),
      description: t('journeySteps.3.description')
    },
    {
      icon: Heart,
      title: t('journeySteps.4.title'),
      description: t('journeySteps.4.description')
    },
    {
      icon: Flame,
      title: t('journeySteps.5.title'),
      description: t('journeySteps.5.description')
    },
    {
      icon: Star,
      title: t('journeySteps.6.title'),
      description: t('journeySteps.6.description')
    }
  ];

  const companyLogos = [
    { id: 'np', Component: NovaPostLogo },
    { id: 'mb', Component: MonobankLogo },
    { id: 'fg', Component: FozzyGroupLogo },
    { id: 'sg', Component: SigmaLogo },
    { id: 'gd', Component: GridDynamicsLogo },
    { id: 'ks', Component: KyivstarLogo },
    { id: 'ak', Component: AkvelonLogo },
    { id: 'ss', Component: SoftServeLogo },
    { id: 'ep', Component: EPAMLogo },
    { id: 'sm', Component: SamsungLogo },
    { id: 'cm', Component: CheckmarxLogo },
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEO pageKey="whoWeAre" />
      {/* HERO SECTION - Split Layout Introduction */}
      <section ref={heroRef} className="relative flex items-center bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-10 md:pb-20 min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="order-2 lg:order-1 space-y-8 min-w-0 overflow-hidden">
              <div className="space-y-6">
                <span className="text-sm tracking-[0.3em] text-green-500 font-semibold uppercase">
                  {t('whoWeAreLabel')}
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" dangerouslySetInnerHTML={{ __html: t('heroTitleHtml') }} />
              </div>

              <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed">
                <p>
                  {t('heroText1')}
                </p>
                <p>
                  {t('heroText2')}
                </p>
              </div>

              {/* Highlighted Statement */}
              <div className="pt-4">
                <p className="text-2xl md:text-3xl font-bold text-white italic" dangerouslySetInnerHTML={{ __html: t('heroQuoteHtml') }} />
              </div>
            </div>

            {/* Right Side - Team Photo */}
            <div
              className="order-1 lg:order-2 relative group min-w-0 z-10"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] aspect-[4/5] lg:aspect-[3/4] w-full">
                <Image
                  src="/whoweare_team.jpg"
                  alt="Our team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl pointer-events-none"></div>
              </div>

              {/* Subtle decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-500 opacity-30 blur-3xl rounded-full pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY SECTION - Flowing Vertical Storytelling */}
      <section ref={journeyRef} className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 text-white scroll-reveal" dangerouslySetInnerHTML={{ __html: t('journeyTitleHtml') }} />
          <p className="text-xl text-gray-400 text-center mb-20 scroll-reveal">
            {t('journeySubtitle')}
          </p>

          {/* Vertical Flowing Timeline */}
          <div className="relative">
            {/* Vertical line background (gray) */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gray-800"></div>
            {/* Animated vertical line that fills on scroll */}
            <div
              className="absolute left-8 md:left-12 top-0 w-0.5 bg-gradient-to-b from-green-500 via-green-400 to-green-500 transition-all duration-300 ease-out"
              style={{ height: `${lineProgress}%` }}
            ></div>

            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="scroll-reveal relative pl-20 md:pl-28 pb-16 last:pb-0"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Icon circle */}
                  <div className="absolute left-0 md:left-4 top-0 w-16 h-16 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,180,118,0.5)] z-10">
                    <Icon size={28} className="text-black" />
                  </div>

                  {/* Content card */}
                  <div className="glass-effect rounded-xl p-6 hover:shadow-[0_0_30px_rgba(0,180,118,0.3)] transition-all duration-300">
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-3">{step.description}</p>
                    {step.highlight && (
                      <blockquote className="border-l-4 border-green-500 pl-4 py-2 mt-4">
                        <p className="text-xl font-semibold text-green-500 italic">
                          {"\u201C"}{step.highlight}{"\u201D"}
                        </p>
                      </blockquote>
                    )}
                  </div>


                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPANY LOGOS SLIDER - Full Width */}
      <section className="py-24 bg-gradient-to-b from-black via-green-950/15 to-black overflow-hidden">
        <div className="mb-12 text-center scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" dangerouslySetInnerHTML={{ __html: t('experienceTitleHtml') }} />
          <p className="text-gray-400 text-lg">{t('experienceSubtitle')}</p>
        </div>

        {/* Top row - scrolling left to right */}
        <div className="relative mb-8 overflow-hidden">
          <div className="logo-marquee-track animate-scroll-left">
            <div className="logo-marquee-group">
              {companyLogos.map((logo) => {
                const LogoComponent = logo.Component;
                return (
                  <div key={`top-${logo.id}`} className="flex-shrink-0">
                    <CompanyLogo><LogoComponent /></CompanyLogo>
                  </div>
                );
              })}
            </div>
            <div className="logo-marquee-group" aria-hidden="true">
              {companyLogos.map((logo) => {
                const LogoComponent = logo.Component;
                return (
                  <div key={`top-dup-${logo.id}`} className="flex-shrink-0">
                    <CompanyLogo><LogoComponent /></CompanyLogo>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom row - scrolling right to left */}
        <div className="relative overflow-hidden">
          <div className="logo-marquee-track animate-scroll-right">
            <div className="logo-marquee-group">
              {[...companyLogos].reverse().map((logo) => {
                const LogoComponent = logo.Component;
                return (
                  <div key={`bottom-${logo.id}`} className="flex-shrink-0">
                    <CompanyLogo><LogoComponent /></CompanyLogo>
                  </div>
                );
              })}
            </div>
            <div className="logo-marquee-group" aria-hidden="true">
              {[...companyLogos].reverse().map((logo) => {
                const LogoComponent = logo.Component;
                return (
                  <div key={`bottom-dup-${logo.id}`} className="flex-shrink-0">
                    <CompanyLogo><LogoComponent /></CompanyLogo>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* NEW NORMAL IN TESTING - Principles Section */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 text-white scroll-reveal" dangerouslySetInnerHTML={{ __html: t('newNormalTitleHtml') }} />
          <p className="text-xl text-gray-400 text-center mb-16 scroll-reveal">
            {t('newNormalSubtitle')}
          </p>

          <div className="space-y-8">
            {(t('principles') as Array<{ principle: string, reality: string, separator?: string }> || []).map((item, index) => {
              const alignmentClasses = {
                0: "mr-auto",
                1: "mx-auto",
                2: "ml-auto",
                3: "mr-auto md:ml-[15%]"
              };

              const maxWidths = {
                0: "max-w-4xl",
                1: "max-w-3xl",
                2: "max-w-4xl",
                3: "max-w-3xl"
              };

              const alignIndex = index % 4;

              return (
                <div
                  key={index}
                  className={`scroll-reveal glass-effect rounded-2xl p-8 md:p-10 hover:shadow-[0_0_30px_rgba(0,180,118,0.3)] transition-all duration-300 ${alignmentClasses[alignIndex as keyof typeof alignmentClasses]} ${maxWidths[alignIndex as keyof typeof maxWidths]}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
                    {item.principle}
                    <span className="text-white/70 mx-1.5 text-lg md:text-xl font-normal">
                      {item.separator !== undefined ? item.separator : " – "}
                    </span>
                    <span className="text-green-500">{item.reality}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR VALUES SECTION - 3 Cards in page style */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-white scroll-reveal" dangerouslySetInnerHTML={{ __html: t('valuesTitleHtml') }} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1: People First */}
            <div className="scroll-reveal group bg-gray-900/50 border border-gray-800 rounded-xl p-10 hover:border-[#00B476]/40 transition-all duration-300">
              <Heart className="text-[#00B476] mb-8" size={48} />
              <h3 className="text-3xl font-bold text-white mb-3">{t('values.peopleFirst.title')}</h3>
              <h4 className="text-xl font-semibold text-[#00B476] mb-3">{t('values.peopleFirst.subtitle')}</h4>
              <p className="text-gray-400 text-lg">{t('values.peopleFirst.description')}</p>
            </div>

            {/* Card 2: Pain-Driven Innovation */}
            <div className="scroll-reveal group bg-gray-900/50 border border-gray-800 rounded-xl p-10 hover:border-[#00B476]/40 transition-all duration-300">
              <Flame className="text-[#00B476] mb-8" size={48} />
              <h3 className="text-3xl font-bold text-white mb-3">{t('values.painInnovation.title')}</h3>
              <h4 className="text-xl font-semibold text-[#00B476] mb-3">{t('values.painInnovation.subtitle')}</h4>
              <p className="text-gray-400 text-lg">{t('values.painInnovation.description')}</p>
            </div>

            {/* Card 3: Trendsetter Mindset */}
            <div className="scroll-reveal group bg-gray-900/50 border border-gray-800 rounded-xl p-10 hover:border-[#00B476]/40 transition-all duration-300">
              <Target className="text-[#00B476] mb-8" size={48} />
              <h3 className="text-3xl font-bold text-white mb-3">{t('values.trendsetter.title')}</h3>
              <h4 className="text-xl font-semibold text-[#00B476] mb-3">{t('values.trendsetter.subtitle')}</h4>
              <p className="text-gray-400 text-lg">{t('values.trendsetter.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PEOPLE BEHIND QUALITY - Culture & Team */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" dangerouslySetInnerHTML={{ __html: t('peopleBehindTitleHtml') }} />
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('peopleBehindSubtitle')}
            </p>
          </div>

          {/* Main Hero Photo */}
          <div className="scroll-reveal mb-8 relative group">
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/quality_team_sport.jpg"
                alt="Our team working together"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-end justify-center p-8 md:p-12">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight" dangerouslySetInnerHTML={{ __html: t('teamSportQuoteHtml') }} />
              </div>
            </div>
          </div>

          {/* Grid of Smaller Photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="scroll-reveal col-span-2 relative group overflow-hidden rounded-2xl h-[280px]">
              <Image
                src="/IMG_4299.jpg"
                alt="Team collaboration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            <div className="scroll-reveal relative group overflow-hidden rounded-2xl h-[280px]">
              <Image
                src="/IMG_4326.jpg"
                alt="Working together"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            <div className="scroll-reveal relative group overflow-hidden rounded-2xl h-[280px]">
              <Image
                src="/mentor.jpg"
                alt="Team planning"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </div>

          {/* Culture Statement */}
          <div className="scroll-reveal max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {t('cultureStatement')}
            </p>
            <Link
              href="/services"
              className="inline-flex items-center text-lg md:text-xl text-green-500 hover:text-green-400 font-semibold transition-colors duration-300 group"
            >
              {t('seeHowWeWork')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* CALL-TO-ACTION SECTION */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-mesh"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight scroll-reveal" dangerouslySetInnerHTML={{ __html: t('ctaTitleHtml') }} />
          <p className="text-xl md:text-2xl text-gray-300 mb-12 scroll-reveal">
            {t('ctaSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center scroll-reveal">
            <Link href="/careers" className="text-lg px-10 py-6 bg-green-500 hover:bg-green-400 text-black font-bold shadow-[0_0_30px_rgba(0,180,118,0.5)] hover:shadow-[0_0_50px_rgba(0,180,118,0.8)] transition-all duration-300 whitespace-nowrap flex items-center rounded-lg">
              {t('joinCommunity')}
              <ArrowRight className="ml-2 inline-block" size={24} />
            </Link>
            <Link href="/services" className="text-lg px-10 py-6 border-2 border-[#00B476] text-[#00B476] bg-transparent hover:bg-[#00B476]/10 font-bold transition-all duration-300 whitespace-nowrap rounded-lg">
              {t('workWithUs')}
            </Link>
          </div>

          <p className="text-gray-400 mt-12 text-lg scroll-reveal">
            {t('ctaFooter')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
