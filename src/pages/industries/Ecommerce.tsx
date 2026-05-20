import SEO from '../../components/SEO';
import { ShoppingCart, CreditCard, TrendingUp, Zap, DollarSign } from 'lucide-react';
import Link from 'next/link';
import Button from '../../components/Button';
import { FormatMetricValue } from '../../components/FormatMetricValue';

export default function Ecommerce() {
  const pains = [
    'Broken checkout or payment flows causing direct revenue loss',
    'Bugs that impact conversion and cart completion rates',
    'Regressions after frequent product catalog or pricing changes',
    'System failures during sales, promotions, or peak traffic events',
    'Inconsistent behavior across devices and browsers affecting mobile sales',
    'QA focused on UI testing, not revenue-critical buying flows',
  ];

  const qaApproach = [
    {
      icon: ShoppingCart,
      title: 'QA built around revenue-critical user journeys, not pages',
      points: [
        'Product discovery and search',
        'Filtering and category navigation',
        'Product details and variants',
        'Add to cart and cart management',
        'Checkout and address validation',
        'Payment processing and order confirmation',
      ],
    },
    {
      icon: CreditCard,
      title: 'Risk-based testing focused on what protects revenue',
      points: [
        'Checkout and payment flow reliability',
        'Pricing accuracy, discounts, and promotions',
        'Inventory and availability synchronization',
        'Peak-traffic and flash-sale scenarios',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Regression strategy designed to protect buying paths',
      points: [
        'Core conversion flows from browse to purchase',
        'Critical integrations: payments, shipping, inventory',
        'Backward compatibility of pricing and discount logic',
        'High-revenue product categories and SKUs',
      ],
    },
    {
      icon: Zap,
      title: 'Automation applied to high-impact revenue flows',
      points: [
        'Automated testing of end-to-end buying journeys',
        'Payment gateway and API integration testing',
        'Fast feedback loops before releases',
        'Continuous validation of critical paths',
      ],
    },
  ];

  const businessImpacts = [
    'Direct revenue loss from broken checkout and payment flows',
    'Drop in conversion rates from bugs in the buying journey',
    'Increased cart abandonment from technical failures',
    'Loss of customer trust and repeat purchase rates',
    'Higher support and refund costs from failed transactions',
  ];

  const metrics = [
    { label: 'Conversion-impacting bugs', value: '– 45% – 65%' },
    { label: 'Checkout failures', value: '– 40% – 60%' },
    { label: 'Production incidents during sales', value: '– 50% – 70%' },
    { label: 'Regression execution time', value: '– 25% – 40%' },
    { label: 'Faster promotional launches', value: '+ 30% – 50%' },
    { label: 'Revenue loss from incidents', value: '– 35% – 60%' },
  ];

  return (
    <div className="bg-black text-white relative overflow-hidden">
      <SEO pageKey="ecommerce" />
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      <section className="py-20 mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              In e-commerce, one broken flow can cost thousands in lost revenue
            </h1>
          </div>

          {/* Description Box */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-green-950/20 border border-green-500/20 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center">
                E-commerce platforms live under constant pressure: traffic spikes, frequent changes, and zero tolerance for checkout failures.
                Quality directly impacts revenue.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="mb-2">
                <FormatMetricValue value="40% – 60%" valueClassName="text-3xl md:text-4xl font-bold text-[#00B476]" />
              </div>
              <div className="text-gray-300 text-sm">Checkout failures reduced</div>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="mb-2">
                <FormatMetricValue value="50%" valueClassName="text-3xl md:text-4xl font-bold text-[#00B476]" />
              </div>
              <div className="text-gray-300 text-sm">Conversion-impacting bugs reduced</div>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00B476] mb-2">Stable</div>
              <div className="text-gray-300 text-sm">Performance during sales and peak traffic</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/contact" className="inline-block">
              <Button className="text-lg px-10 py-6">
                Talk to E-commerce QA Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Common quality challenges in e-commerce platforms
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Each of these problems translates into lost revenue and customer trust
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
            How we apply QA in real e-commerce platforms
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            QA that understands revenue flows, not just features
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
              QA protects revenue flows, not just features.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Why quality directly impacts e-commerce business
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            In e-commerce, bugs don&apos;t wait — they immediately affect revenue
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
                      <DollarSign className="text-red-500 animate-pulse" size={24} />
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
            Results e-commerce teams achieve with us
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Measurable improvements that show revenue protection
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
            Typical e-commerce engagement
          </h2>
          <div className="space-y-8">
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-red-400 mb-3">Initial state</h3>
              <p className="text-gray-300 leading-relaxed">
                Frequent checkout issues causing lost revenue, unstable releases during peak seasons,
                lost thousands in sales during promotional events. Team afraid to deploy during traffic spikes.
                High cart abandonment from technical failures.
              </p>
            </div>
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Problems identified</h3>
              <p className="text-gray-300 leading-relaxed">
                Weak regression coverage on checkout flow — small changes breaking purchases. Promotions and discounts tested manually,
                causing pricing errors. Fragile payment integrations. No load testing — platform unstable during flash sales.
              </p>
            </div>
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">What we changed</h3>
              <p className="text-gray-300 leading-relaxed">
                Built QA strategy around revenue-critical flows. Comprehensive checkout and payment validation.
                Automated testing of promotional logic. Load testing for peak scenarios. Release validation before major sales events.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-[#00B476] mb-3">Outcome</h3>
              <p className="text-gray-300 leading-relaxed">
                Stable sales events generating record revenue. Higher conversion rates across the funnel. Fewer checkout failures
                and cart abandonment. Confident deployments during peak seasons. Reduced revenue loss from technical incidents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Running or scaling an e-commerce platform?
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Let&apos;s protect your revenue before the next release or promotion.
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
