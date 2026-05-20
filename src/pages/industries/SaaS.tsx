import SEO from '../../components/SEO';
import { CheckCircle, TrendingDown, Shield, Target } from 'lucide-react';
import Link from 'next/link';
import Button from '../../components/Button';
import { FormatMetricValue } from '../../components/FormatMetricValue';

export default function SaaS() {
  const pains = [
    'User-facing bugs damaging product reputation and trust',
    'Inconsistent quality across features and releases',
    'Slow release cycles due to manual testing bottlenecks',
    'Poor test coverage for integration points and APIs',
    'Scaling challenges with growing feature sets',
    'Critical user flows breaking after seemingly unrelated changes',
  ];

  const solutions = [
    {
      title: 'User journey testing',
      description: 'Critical paths and conversion flows covered systematically',
    },
    {
      title: 'API and integration testing',
      description: 'Third-party integrations validated reliably',
    },
    {
      title: 'Regression automation',
      description: 'Fast feedback on core functionality',
    },
    {
      title: 'Performance validation',
      description: 'Response times and load handling monitored',
    },
    {
      title: 'Cross-browser coverage',
      description: 'Consistent experience across platforms',
    },
  ];

  const metrics = [
    { label: 'User-reported bugs', value: '– 45% – 70%', icon: TrendingDown },
    { label: 'Release frequency', value: '+ 40% – 60%', icon: Target },
    { label: 'Test execution time', value: '– 30% – 50%', icon: TrendingDown },
    { label: 'Production incidents', value: '– 35% – 55%', icon: Shield },
  ];

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
              In SaaS, quality issues kill retention before you see them coming
            </h1>
          </div>

          {/* Description Box */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-green-950/20 border border-green-500/20 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center">
                SaaS products compete on user experience and reliability. Quality problems directly impact retention, growth, and competitive positioning.
                In subscription business, quality is retention.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="mb-2">
                <FormatMetricValue value="45% – 70%" valueClassName="text-3xl md:text-4xl font-bold text-[#00B476]" />
              </div>
              <div className="text-gray-300 text-sm">User-reported bugs reduced</div>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="mb-2">
                <FormatMetricValue value="40% – 60%" valueClassName="text-3xl md:text-4xl font-bold text-[#00B476]" />
              </div>
              <div className="text-gray-300 text-sm">Release frequency increased</div>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00B476] mb-2">Predictable</div>
              <div className="text-gray-300 text-sm">Confident releases</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button href="/contact" className="text-lg">Book a call</Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Common quality challenges in SaaS products
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            These challenges slow down SaaS teams and impact customer satisfaction
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
            How we help SaaS teams ship faster with confidence
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Quality approach designed for fast-moving SaaS environments
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
            What&apos;s <span className="text-[#00B476]">Included</span>
          </h2>
          <div className="bg-green-950/15 border border-green-500/20 rounded-xl p-8 md:p-10">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#00B476]/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-[#00B476]" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Churn risk</h3>
                  <p className="text-gray-400">Users leave when product reliability doesn&apos;t meet expectations</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#00B476]/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-[#00B476]" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Growth bottleneck</h3>
                  <p className="text-gray-400">Poor quality slows feature delivery and competitive response</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#00B476]/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-[#00B476]" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Support costs</h3>
                  <p className="text-gray-400">Bugs create support tickets, drain resources, and frustrate teams</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#00B476]/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-[#00B476]" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Market reputation</h3>
                  <p className="text-gray-400">Product reviews and word-of-mouth heavily influenced by quality</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8">
              <p className="text-lg text-center text-[#00B476] font-semibold">
                &quot;In SaaS, quality directly impacts retention and growth metrics.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Results SaaS teams achieve with us
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Metrics that impact business performance
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
              Plus: Improved team confidence and faster feature iteration
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Typical SaaS engagement
          </h2>
          <div className="space-y-8">
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-red-400 mb-3">Initial state</h3>
              <p className="text-gray-300 leading-relaxed">
                Growing number of user-reported bugs, release anxiety, slow deployment cycles,
                testing becoming a bottleneck as feature complexity increases.
              </p>
            </div>
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Problems identified</h3>
              <p className="text-gray-300 leading-relaxed">
                Weak coverage of critical user journeys, manual regression taking days,
                integration points untested, no systematic approach to prioritizing test efforts.
              </p>
            </div>
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">What we changed</h3>
              <p className="text-gray-300 leading-relaxed">
                Built automation for core user flows, established risk-based testing strategy,
                improved API test coverage, introduced performance benchmarks for critical operations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-[#00B476] mb-3">Outcome</h3>
              <p className="text-gray-300 leading-relaxed">
                62% reduction in user-reported bugs, release cycle shortened from 2 weeks to 3 days,
                team able to ship confidently multiple times per week, support tickets related to bugs decreased significantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building or scaling a SaaS product?
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Let&apos;s talk about improving quality without slowing down your release velocity.
          </p>
          <Button href="/contact" className="text-lg px-10 py-6">
            Book a call
          </Button>
        </div>
      </section>
    </div>
  );
}
