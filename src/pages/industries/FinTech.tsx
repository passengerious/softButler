import { CheckCircle, TrendingDown, Shield, Target } from 'lucide-react';
import Link from 'next/link';

export default function FinTech() {
  const pains = [
    'Production bugs affecting real financial transactions',
    'High cost of post-release fixes due to compliance and audits',
    'Fear of releases because of hidden risks',
    'Inconsistent test coverage across critical flows',
    'Manual regression slowing down delivery',
    'QA focused on checklists, not financial risk',
  ];

  const solutions = [
    {
      title: 'Risk-based testing',
      description: 'Focused on money flows and critical paths',
    },
    {
      title: 'Deep scenario analysis',
      description: 'Transaction scenarios and edge cases',
    },
    {
      title: 'Regression strengthening',
      description: 'Core financial operations coverage',
    },
    {
      title: 'Automation stabilization',
      description: 'High-risk areas automated reliably',
    },
    {
      title: 'Release confidence',
      description: 'Improved without slowing delivery',
    },
  ];

  const metrics = [
    { label: 'Critical production bugs', value: '–40–65%', icon: TrendingDown },
    { label: 'Release predictability', value: '+35–50%', icon: Target },
    { label: 'Regression execution time', value: '–25–40%', icon: TrendingDown },
    { label: 'Cost of post-release fixes', value: '2–4× lower', icon: Shield },
  ];

  return (
    <div className="bg-black text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      {/* Hero Section */}
      <section className="py-20 mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              In FinTech, one quality failure is enough to lose user trust
            </h1>
          </div>

          {/* Description Box */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-green-950/20 border border-green-500/20 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                FinTech products operate under regulatory pressure, real money flows, and zero tolerance for critical failures.
                Quality is not optional — it's a business requirement.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00B476] mb-2">40–60%</div>
              <div className="text-gray-300 text-sm">Production incidents reduced</div>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00B476] mb-2">3×</div>
              <div className="text-gray-300 text-sm">Cost of critical bugs reduced</div>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00B476] mb-2">Predictable</div>
              <div className="text-gray-300 text-sm">Audit-ready releases</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/contact" className="px-8 py-4 bg-[#00B476] text-black font-bold text-lg rounded-lg hover:bg-[#00B476]/90 transition-all duration-300 inline-block">
              Talk to FinTech QA Experts
            </Link>
          </div>
        </div>
      </section>

      {/* Pains Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Common quality challenges in FinTech products
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            These are the real issues that keep FinTech engineering leaders up at night
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

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            How we help FinTech teams reduce risk
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            QA applied in FinTech context with focus on what matters most
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

      {/* Why Quality Matters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Why quality in FinTech is a business issue
          </h2>
          <div className="bg-green-950/15 border border-green-500/20 rounded-xl p-8 md:p-10">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#00B476]/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-[#00B476]" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Loss of user trust</h3>
                  <p className="text-gray-400">Users expect perfect reliability when their money is involved</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#00B476]/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-[#00B476]" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Regulatory and compliance risks</h3>
                  <p className="text-gray-400">Failures can lead to audits, fines, and operational restrictions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#00B476]/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-[#00B476]" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Direct financial losses</h3>
                  <p className="text-gray-400">Transaction errors, failed payments, and incorrect calculations cost real money</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#00B476]/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-[#00B476]" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Brand damage that is hard to recover from</h3>
                  <p className="text-gray-400">In financial services, reputation is everything</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8">
              <p className="text-lg text-center text-[#00B476] font-semibold">
                "In FinTech, bugs are not just technical issues — they are business incidents."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Results FinTech teams achieve with us
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Metrics that matter to leadership and investors
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="bg-green-950/15 border border-green-500/20 rounded-lg p-6 text-center hover:border-[#00B476]/50 transition-colors"
                >
                  <Icon className="text-[#00B476] mx-auto mb-4" size={32} />
                  <div className="text-3xl font-bold text-[#00B476] mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray-400">
              Plus: Faster incident detection and root cause analysis
            </p>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Typical FinTech engagement
          </h2>
          <div className="space-y-8">
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-[#00B476] mb-3">Initial situation</h3>
              <p className="text-gray-300 leading-relaxed">
                Frequent production incidents affecting transactions, slow and stressful releases,
                team losing confidence in the release process, business stakeholders frustrated with quality unpredictability.
              </p>
            </div>
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-[#00B476] mb-3">Key problems identified</h3>
              <p className="text-gray-300 leading-relaxed">
                Weak regression coverage of critical payment flows, unstable automation that nobody trusted,
                unclear ownership of quality risks, testing focused on UI rather than financial logic.
              </p>
            </div>
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-[#00B476] mb-3">What we changed</h3>
              <p className="text-gray-300 leading-relaxed">
                Rebuilt test strategy around transaction risk, stabilized automation for core flows,
                established clear QA gates for releases, introduced risk-based test planning tied to business priorities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-[#00B476] mb-3">Outcome</h3>
              <p className="text-gray-300 leading-relaxed">
                53% reduction in critical production bugs, releases became predictable and low-stress,
                business gained confidence in product quality, team could focus on new features instead of firefighting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building or scaling a FinTech product?
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Let's talk about reducing quality risk in your FinTech product — before it becomes a business problem.
          </p>
          <Link href="/contact" className="px-8 py-4 bg-[#00B476] text-black font-bold text-lg rounded-lg hover:bg-[#00B476]/90 transition-all duration-300 inline-block">
            Book a call
          </Link>
        </div>
      </section>
    </div>
  );
}
