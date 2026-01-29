import {
  CheckCircle,
  AlertCircle,
  Target,
  Users,
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

export default function QAAudit() {
  const checklistItems = [
    'Releases are stressful and unpredictable',
    'Production bugs appear after almost every release',
    'Regression testing takes too long',
    'QA depends too much on specific people',
    'Test cases are outdated or not trusted',
    "Automation exists but doesn't save time",
    "Developers don't trust QA results",
    'CI/CD is slow or flaky because of tests',
  ];

  const analysisSteps = [
    {
      icon: Search,
      title: 'Process Analysis',
      description: 'Analyze the QA process "as is" — from task creation by analyst to production deployment',
    },
    {
      icon: FileCheck,
      title: 'Test Coverage Review',
      description: 'Review test coverage (manual & automated)',
    },
    {
      icon: Bug,
      title: 'Production Bugs Analysis',
      description: 'Analyze production bugs and their root causes',
    },
    {
      icon: GitBranch,
      title: 'Regression Flow Review',
      description: 'Review regression testing flow',
    },
    {
      icon: Bot,
      title: 'Automation Evaluation',
      description: 'Analyze automation (if exists): stability, value, maintenance cost',
    },
    {
      icon: FileText,
      title: 'Documentation Quality',
      description: 'Review documentation quality and relevance',
    },
    {
      icon: Zap,
      title: 'Tools & AI Usage',
      description: 'Analyze how tools and AI are used (or misused)',
    },
    {
      icon: AlertTriangle,
      title: 'Bottlenecks & Quick Wins',
      description: 'Identify bottlenecks, risks, and quick wins',
    },
  ];

  const whyUsPoints = [
    {
      icon: Bot,
      title: 'AI-Powered Analysis',
      description: 'We use AI-powered analysis tools to detect patterns and risks faster',
    },
    {
      icon: Award,
      title: 'ISTQB Certified',
      description: 'Our team is ISTQB-certified with proven expertise',
    },
    {
      icon: Target,
      title: 'Diverse Experience',
      description: 'Large hands-on experience across different product domains',
    },
    {
      icon: Rocket,
      title: 'Real Pipelines',
      description: 'We work inside real delivery pipelines, not theoretical models',
    },
    {
      icon: Shield,
      title: 'Practical Guidance',
      description: 'We show how to do it, not just what to do',
    },
    {
      icon: Gift,
      title: 'Free Test Trial',
      description: 'Try us before making any payment',
    },
  ];

  const packages = [
    {
      name: 'QA Clarity Audit',
      duration: '10–14 working days',
      bestFor: 'Teams that need clarity and direction',
      includes: [
        'QA process "as is" analysis',
        'Test coverage review',
        'Production bugs analysis',
        'Regression testing review',
        'Automation evaluation (if exists)',
      ],
    },
    {
      name: 'QA Stabilization',
      duration: 'Audit: 10–14 days + Stabilization: 2–4 weeks',
      bestFor: 'Teams ready to implement improvements',
      includes: [
        'Everything in QA Clarity Audit',
        'Risk-based testing setup',
        'Test structure implementation',
        'Regression flow optimization',
        'Automated tests stabilization',
        'CI/CD optimization for testing',
      ],
      highlight: true,
    },
    {
      name: 'QA Transformation',
      duration: 'Audit: 10–14 days + Transformation: 6–8 weeks',
      bestFor: 'Teams ready for long-term quality transformation',
      includes: [
        'Everything in QA Stabilization',
        'Complete QA flow rebuild with your team',
        'QA team training program',
        'Quality metrics implementation',
        'Autonomous QA function setup',
        'Ongoing support and guidance',
      ],
    },
  ];

  const results = [
    { metric: 'Production bugs', improvement: '–40–60%' },
    { metric: 'Release predictability', improvement: '+40%' },
    { metric: 'Cost of bugs', improvement: '3× lower' },
    { metric: 'Regression time', improvement: '–20–35%' },
  ];

  return (
    <div className="bg-black text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      <section className="py-20 mt-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Fix your QA system
              <br />
              <span className="text-[#00B476]">before it breaks your product</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              QA Audit helps you see where quality is leaking and how to fix it —{' '}
              <span className="text-[#dc2626] font-semibold">
                before it impacts users and revenue
              </span>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-black to-green-950/20 border-2 border-[#00B476]/30 p-8 rounded-xl text-center hover:border-[#00B476] transition-all hover:shadow-lg hover:shadow-[#00B476]/20">
              <TrendingUp className="text-[#00B476] mx-auto mb-4" size={48} />
              <div className="text-4xl md:text-5xl font-bold text-[#00B476] mb-2">50%</div>
              <div className="text-gray-400 text-lg">fewer production bugs</div>
            </div>

            <div className="bg-gradient-to-br from-black to-green-950/20 border-2 border-[#dc2626]/30 p-8 rounded-xl text-center hover:border-[#dc2626] transition-all hover:shadow-lg hover:shadow-[#dc2626]/20">
              <Target className="text-[#dc2626] mx-auto mb-4" size={48} />
              <div className="text-4xl md:text-5xl font-bold text-[#dc2626] mb-2">3×</div>
              <div className="text-gray-400 text-lg">lower cost of fixing bugs</div>
            </div>

            <div className="bg-gradient-to-br from-black to-green-950/20 border-2 border-[#00B476]/30 p-8 rounded-xl text-center hover:border-[#00B476] transition-all hover:shadow-lg hover:shadow-[#00B476]/20">
              <Rocket className="text-[#00B476] mx-auto mb-4" size={48} />
              <div className="text-4xl md:text-5xl font-bold text-[#00B476] mb-2">10×</div>
              <div className="text-gray-400 text-lg">faster releases</div>
            </div>
          </div>

          <div className="text-center">
            <a href="/contact">
              <Button className="text-lg">Book a call</Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            When do you need a <span className="text-[#00B476]">QA Audit?</span>
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12">
            If you answer <span className="text-[#00B476] font-semibold">YES</span> to at least 3 of
            the questions below, QA Audit & Consulting will be especially useful for you:
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
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            What we <span className="text-[#00B476]">actually do</span>
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12">
            We don't just review QA. We analyze the{' '}
            <span className="text-[#dc2626] font-semibold">entire quality flow</span> from idea to
            production.
          </p>

          <div className="relative mb-12">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00B476] via-[#00B476] to-transparent"></div>

            <div className="space-y-8">
              {analysisSteps.map((step, idx) => {
                const Icon = step.icon;
                const isLast = idx === analysisSteps.length - 1;
                return (
                  <div key={idx} className="relative pl-16">
                    <div
                      className={`absolute left-0 w-12 h-12 rounded-full bg-black border-2 border-[#00B476] flex items-center justify-center ${
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
              You get a <span className="text-[#00B476]">clear, prioritized action plan</span> — not
              just observations.
            </p>
            <p className="text-gray-400">Ready to implement from day one</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why <span className="text-[#00B476]">work with us?</span>
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
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Choose the level of <span className="text-[#00B476]">impact</span>
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12">
            Select the package that fits your current needs and readiness for change
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-8 border-2 transition-all duration-500 hover:-translate-y-2 ${
                  pkg.highlight
                    ? 'bg-gradient-to-b from-[#00B476]/10 to-black border-[#00B476] shadow-xl shadow-[#00B476]/20 hover:shadow-2xl hover:shadow-[#00B476]/30'
                    : 'bg-green-950/20 border-[#00B476]/20 hover:border-[#00B476] hover:shadow-xl hover:shadow-[#00B476]/20'
                }`}
              >
                {pkg.highlight && (
                  <div className="bg-[#00B476] text-black text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
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

                <div className="border-t border-[#00B476]/20 pt-6">
                  <a href="/contact">
                    <Button variant={pkg.highlight ? 'primary' : 'secondary'} className="w-full">
                      Book a call
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            What you get after <span className="text-[#00B476]">QA Audit</span>
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12">
            Measurable improvements across all key quality metrics
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
                      <div
                        className={`text-lg sm:text-xl font-bold text-[#00B476] group-hover:scale-110 transition-transform`}
                      >
                        {result.improvement}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What we need <span className="text-[#00B476]">from you?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            One call to understand your product and challenges.
          </p>
          <Button className="text-lg mb-6">Book a call</Button>
          <p className="text-gray-400 text-lg">
            What we give you — <span className="text-[#00B476]">clarity</span>,{' '}
            <span className="text-[#00B476]">stability</span>, and a{' '}
            <span className="text-[#00B476]">QA system that scales</span> with your product.
          </p>
        </div>
      </section>
    </div>
  );
}
