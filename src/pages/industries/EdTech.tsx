import { CheckCircle, Users, Zap, RefreshCw, Shield } from 'lucide-react';
import Link from 'next/link';
import Button from '../../components/Button';

export default function EdTech() {
  const pains = [
    'Platform crashes during peak loads (exams, enrollments, launches)',
    'Unstable user experience across devices and browsers',
    'Content delivery issues (lessons, tests, videos, progress tracking)',
    'Hidden regressions after frequent updates',
    'Slow reaction to production issues',
    'QA focused on UI, not learning flows and platform logic',
  ];

  const qaApproaches = [
    {
      icon: Users,
      title: 'Learning flow-based testing',
      points: [
        'Onboarding and enrollment flows',
        'Course access and lesson completion',
        'Assessment and certification paths',
        'Progress tracking and user journeys',
      ],
    },
    {
      icon: Shield,
      title: 'Risk-based testing focus',
      points: [
        'Peak usage scenarios',
        'Concurrent users handling',
        'Data integrity (progress, results, scores)',
        'Content delivery reliability',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Regression strategy',
      points: [
        'Core learning paths coverage',
        'Critical user journeys',
        'Platform operations validation',
        'API-level checks',
      ],
    },
    {
      icon: Zap,
      title: 'Automation approach',
      points: [
        'High-frequency user flows',
        'Critical learning scenarios',
        'Platform stability checks',
        'Fast feedback loops',
      ],
    },
  ];

  const businessImpacts = [
    'Loss of user trust',
    'Student and teacher churn',
    'Failed course launches',
    'Reputation damage',
    'Revenue loss from subscriptions and enrollments',
    'Support and operational cost growth',
  ];

  const results = [
    { metric: '–40–65%', label: 'Platform incidents' },
    { metric: '–60–70%', label: 'Peak-load failures' },
    { metric: '–30–50%', label: 'User complaints' },
    { metric: '+35–50%', label: 'Release stability' },
    { metric: '–25–40%', label: 'Regression execution time' },
    { metric: 'Faster', label: 'Feature launches' },
  ];

  return (
    <div className="bg-black text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      <section className="py-20 mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              In EdTech, platform failure means lost trust, lost users, and lost revenue
            </h1>
          </div>

          {/* Description Box */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-green-950/20 border border-green-500/20 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                EdTech platforms are not just products — they are learning infrastructures.
                When they fail, users don't complain — they leave.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00B476] mb-2">40–60%</div>
              <div className="text-gray-300 text-sm">Platform incidents reduced</div>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00B476] mb-2">70%</div>
              <div className="text-gray-300 text-sm">Peak-load failures reduced</div>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00B476] mb-2">Stable</div>
              <div className="text-gray-300 text-sm">Launches during exams</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/contact" className="inline-block">
              <Button className="text-lg px-10 py-6">
                Talk to EdTech QA Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Common quality challenges in EdTech platforms
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            These challenges impact platform reliability and user trust
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
            How we apply QA in real EdTech platforms
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            QA is built around learning flows, not screens. We protect the learning experience, not just features.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {qaApproaches.map((approach, index) => {
              const Icon = approach.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-8 hover:border-[#00B476] transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#00B476]/20 flex items-center justify-center mr-4">
                      <Icon className="text-[#00B476]" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">{approach.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {approach.points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="text-[#00B476] flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="bg-gradient-to-r from-[#00B476]/10 to-transparent border-l-4 border-[#00B476] rounded-r-lg p-6">
            <p className="text-xl text-gray-200 font-medium text-center">
              "QA protects learning flows, not just features."
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Why quality directly impacts EdTech business
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Platform instability destroys trust faster than bad content
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

          <div className="mt-16 bg-gradient-to-r from-black via-green-950/15 to-black rounded-xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00B476]/5 to-transparent"></div>
            <p className="text-xl md:text-2xl text-center text-[#00B476] font-semibold leading-relaxed relative z-10">
              "In EdTech, platform instability destroys trust faster than bad content."
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Results EdTech platforms achieve with us
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Leadership metrics that drive business decisions
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-green-950/15 border border-green-500/20 rounded-lg p-8 text-center hover:border-[#00B476]/50 transition-colors"
              >
                <div className="text-4xl font-bold text-[#00B476] mb-3">{result.metric}</div>
                <div className="text-gray-300 text-lg">{result.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-lg">
              Plus: Faster and safer feature launches
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Typical EdTech engagement
          </h2>
          <div className="space-y-8">
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-red-400 mb-3">Initial state</h3>
              <p className="text-gray-300 leading-relaxed">
                Unstable releases, peak-load failures during exams and enrollments, stressed engineering teams,
                inconsistent user experience across devices, mounting support tickets.
              </p>
            </div>
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Problems identified</h3>
              <p className="text-gray-300 leading-relaxed">
                Weak regression coverage, no risk prioritization, QA focused on UI not learning flows,
                slow feedback cycles, no load testing for peak periods, manual testing bottlenecks.
              </p>
            </div>
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">What we changed</h3>
              <p className="text-gray-300 leading-relaxed">
                Rebuilt QA flow around learning journeys, implemented risk modeling, established test strategy
                focused on critical paths, automated high-frequency flows, integrated platform coverage into delivery pipeline.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-[#00B476] mb-3">Outcome</h3>
              <p className="text-gray-300 leading-relaxed">
                Stable launches during peak periods, 55% reduction in platform incidents, predictable delivery cadence,
                improved team confidence, reduced operational costs, scalable QA process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building or scaling an EdTech platform?
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Let's make your platform reliable, scalable, and trusted — not fragile.
          </p>
          <Link href="/contact" className="inline-block">
            <Button className="text-lg px-10 py-6">
              Book a call
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
