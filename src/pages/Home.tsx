import SEO from '../components/SEO';
import { useState, useEffect, useRef, Fragment } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Shield, Clock, Target, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import ProcessSteps from '../components/ProcessSteps';
import IndustryGrid from '../components/IndustryGrid';
import FAQ from '../components/FAQ';
import InlineBookingCalendar from '../components/InlineBookingCalendar';
import SDLCSection from '../components/SDLCSection';
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

const Home = () => {
  const router = useRouter();
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const quoteContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.015,
      }
    }
  };

  const quoteLetterVariants = {
    hidden: { 
      opacity: 0.3,
      color: "rgba(255, 255, 255, 0.3)"
    },
    visible: { 
      opacity: 1,
      color: "#ffffff",
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  const quoteGreenLetterVariants = {
    hidden: { 
      opacity: 0.3,
      color: "rgba(0, 180, 118, 0.2)",
      textShadow: "0 0 12px rgba(0, 180, 118, 0.8)"
    },
    visible: { 
      opacity: 1,
      color: "#00B476",
      textShadow: "0 0 12px rgba(0, 180, 118, 0.8)",
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  const quotePart1 = "Your users won't give you a";
  const quotePart2 = "second chance";
  const quotePart3 = ".";
  const quotePart4 = "We make sure they never see the bugs.";

  const renderAnimatedText = (text: string, isGreen: boolean = false, keyPrefix: string) => {
    const words = text.split(" ");
    return words.map((word, wordIdx) => (
      <Fragment key={`${keyPrefix}-${wordIdx}`}>
        <span className="inline-block">
          {word.split("").map((char, charIdx) => (
            <motion.span
              key={`${keyPrefix}-${wordIdx}-${charIdx}`}
              variants={isGreen ? quoteGreenLetterVariants : quoteLetterVariants}
            >
              {char}
            </motion.span>
          ))}
        </span>
        {wordIdx < words.length - 1 && ' '}
      </Fragment>
    ));
  };

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = aboutRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const qaProblems = [
    {
      icon: Users,
      title: "Developer blindness",
      description: "\"It works perfectly!\" (Narrator: it didn't)"
    },
    {
      icon: CheckCircle,
      title: "Checkbox Circus",
      description: "1000 test cases passed, but users still hate it"
    },
    {
      icon: Shield,
      title: "Shifting QA Left Out",
      description: "\"QA? We’ll add it later.\" (Result: bugs made in from day one)"
    },
    {
      icon: Clock,
      title: "Last-minute panic",
      description: "\"Can you test this before tomorrow's release?\""
    },
    {
      icon: Target,
      title: "Tool Addiction",
      description: "$100K spent on tools, still shipping bugs"
    },
     {
      icon: AlertTriangle,
      title: "Missing Owner",
      description: "No clear QA accountability → everyone assumes “someone else” tested it."
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SEO pageKey="home" />
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      <Hero onBookConsultation={() => {
        const calendarSection = document.getElementById('booking-calendar');
        if (calendarSection) {
          calendarSection.scrollIntoView({ behavior: 'smooth' });
        }
      }} />

      {/* INDUSTRY EXPERIENCE SECTION */}
      <section id="experience" className="pt-12 pb-24 bg-gradient-to-b from-black via-green-950/15 to-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Experience behind our <span className="text-green-500">QA engineers</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Real-world QA practices brought from product and enterprise teams
            </p>
          </div>
        </div>

        {/* Logo Carousel - Full Width */}
        <div className="relative w-full">
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
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
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
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>
      
      {/* Why QA Breaks Section */}
      <section id="why-qa-breaks" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why QA <span className="text-green-500">Breaks</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Let me guess: your devs are testing their own code. The offshore team is checking boxes but missing critical bugs. 
              You ship, users complain, and everyone scrambles. <span className="text-green-500">Sound familiar?</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qaProblems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-green-500/50 transition-all duration-300 group h-full">
                  <div className="mb-6">
                    <problem.icon className="w-12 h-12 text-green-500 group-hover:drop-shadow-[0_0_15px_#00B476] transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{problem.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <SDLCSection />
      <IndustryGrid preview={true} />

      {/* About Us Section */}
      <section
        id="about"
        ref={aboutRef}
        className="relative py-24 md:py-32 overflow-hidden bg-black"
      >
        {/* Decorative: only vertical line and top-right glow (no bottom blur to avoid green line on photo) */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/8 rounded-full blur-3xl" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-green-500/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Asymmetrical Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text Content - Left Side with improved background panel */}
            <div
              className={`lg:col-span-6 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="relative rounded-2xl border border-green-500/20 bg-gradient-to-br from-gray-900/80 via-green-950/20 to-black/90 p-8 md:p-10 shadow-[0_0_60px_-15px_rgba(0,180,118,0.15)] backdrop-blur-sm">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/5 via-transparent to-transparent pointer-events-none" />
                <div className="relative space-y-6">
                  {/* Label */}
                  <div className="text-xs tracking-[0.3em] uppercase text-green-500 font-semibold">
                    About Us
                  </div>

                  {/* Headline */}
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                    We build trust in applications —{' '}
                    <span className="text-green-500">through people and quality thinking.</span>
                  </h2>

                  {/* Body Text */}
                  <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
                    <p>
                      We started as a QA education initiative, helping engineers grow from Junior to Middle and Senior level.
                    </p>
                    <p>
                      By teaching real-world testing and sharing practices from top tech companies, we built a strong professional community.
                    </p>
                    <p>
                      Today, this knowledge allows us to set a new normal in quality — focused on impact, not rituals.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <Link
                      href="/who-we-are"
                      onClick={(e) => {
                        e.preventDefault();
                        router.replace('/#about', undefined, { shallow: true }).then(() => {
                          router.push('/who-we-are');
                        });
                      }}
                      className="inline-flex items-center text-green-500 hover:text-green-400 font-semibold text-lg group transition-colors"
                    >
                      Learn our story
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side - Right Side (takes 6 columns) */}
            <div
              className={`lg:col-span-6 relative transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              {/* Main Photo Container with overlapping quote */}
              <div className="relative">
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
                  <Image
                    src="/home_about_us.jpg"
                    alt="Team collaborating"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Quote overlay - at bottom of photo */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center px-6 pb-6 pt-3 md:px-8 md:pb-8 md:pt-4">
                  <div className="relative inline-block text-left">
                    <div className="absolute inset-0 rounded-xl bg-black/50"></div>
                    <div className="relative z-10 w-20 h-1 bg-green-500 mb-3 rounded-full ml-3"></div>
                    <p className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight px-4 py-2">
                      People are our{' '}
                      <span className="text-green-500">core value.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Quote */}
      <section id="quote" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-green-500/10 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 md:p-8 lg:p-12">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed text-white">
                &quot;
                <motion.span
                  variants={quoteContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {renderAnimatedText(quotePart1, false, "q1")}
                  {' '}
                  {renderAnimatedText(quotePart2, true, "q2")}
                  {renderAnimatedText(quotePart3, false, "q3")}
                  <br />
                  {renderAnimatedText(quotePart4, false, "q4")}
                </motion.span>
                &quot;
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clutch Widget */}
      <section id="reviews" className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center items-center">
            {isMounted && (
              <div 
                className="clutch-widget"
                data-url="https://widget.clutch.co" 
                data-widget-type="13" 
                data-height="50" 
                data-nofollow="false" 
                data-expandifr="true" 
                data-scale="100" 
                data-clutchcompany-id="2550066"
              ></div>
            )}
          </div>
        </div>
      </section>

      {/* Inline Booking Calendar */}
      <div id="booking-calendar">
        <InlineBookingCalendar />
      </div>

      <FAQ />
    </div>
  );
};

export default Home;