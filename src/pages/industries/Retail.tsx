import { Store, Package, CreditCard, Repeat, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Button from '../../components/Button';

export default function Retail() {
  const pains = [
    'Inventory mismatches between online, mobile, and physical store systems',
    'Pricing or promotion errors at checkout causing customer frustration',
    'POS system failures during peak hours disrupting store operations',
    'Inconsistent customer experience across channels and touchpoints',
    'Regressions after frequent catalog, pricing, or campaign updates',
    'Manual QA processes unable to keep pace with retail change velocity',
  ];

  const qaApproach = [
    {
      icon: Store,
      title: 'QA focuses on end-to-end retail flows, not isolated features',
      points: [
        'Product setup and catalog management',
        'Pricing, promotions, and discount logic',
        'Inventory synchronization across all systems',
        'Checkout flows (online and in-store POS)',
        'Order fulfillment and returns processing',
      ],
    },
    {
      icon: Package,
      title: 'Risk-based testing prioritizes operational continuity',
      points: [
        'Checkout and payment accuracy validation',
        'Pricing, discounts, and promotional campaigns',
        'Real-time inventory updates across channels',
        'POS and backend system integrations',
      ],
    },
    {
      icon: Repeat,
      title: 'QA validates omnichannel consistency',
      points: [
        'Same pricing online and in physical stores',
        'Unified availability across all channels',
        'Consistent customer experience across devices',
        'Seamless transitions between channels (buy online, pickup in-store)',
      ],
    },
    {
      icon: CreditCard,
      title: 'Automation applied to core retail operations',
      points: [
        'End-to-end sales flow validation',
        'Pricing and promotion calculation logic',
        'API integrations between retail systems',
        'Pre-launch regression for catalogs and campaigns',
      ],
    },
  ];

  const businessImpacts = [
    'Immediate revenue loss from broken checkout or payment flows',
    'Customer frustration at checkout from pricing errors',
    'Increased returns and support load from system failures',
    'Store staff downtime and manual workarounds',
    'Damage to brand trust and customer loyalty',
  ];

  const metrics = [
    { label: 'Checkout-related incidents', value: '–40–60%' },
    { label: 'Pricing and promotion errors', value: '–50%' },
    { label: 'Inventory mismatch issues', value: '–30–50%' },
    { label: 'Regression testing time', value: '–25–40%' },
    { label: 'Peak season incidents', value: '–45–65%' },
    { label: 'Customer complaint volume', value: '–35–55%' },
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
              In retail, quality issues don't just break software — they break sales
            </h1>
          </div>

          {/* Description Box */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-green-950/20 border border-green-500/20 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center">
                Modern retail systems are complex ecosystems: stores, online platforms, warehouses, POS, and third-party integrations.
                When quality breaks, customers feel it immediately — and so does revenue.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00B476] mb-2">Fewer</div>
              <div className="text-gray-300 text-sm">Sales lost due to system errors</div>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00B476] mb-2">Stable</div>
              <div className="text-gray-300 text-sm">Pricing and promotions across channels</div>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/30 rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00B476] mb-2">Reliable</div>
              <div className="text-gray-300 text-sm">Inventory and checkout experiences</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/contact" className="inline-block">
              <Button className="text-lg px-10 py-6">
                Talk to Retail QA Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Common quality challenges in retail systems
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Each problem directly links to lost sales, operational chaos, or customer dissatisfaction
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
            How we apply QA in real retail environments
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            QA approach built for omnichannel complexity and operational reality
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
              Retail QA protects sales continuity and operational stability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Why quality failures are expensive in retail
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            In retail, a single bug can affect thousands of transactions in hours
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
                      <AlertTriangle className="text-red-500" size={24} />
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
            Results retail teams achieve with us
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Business protection metrics that leadership can track
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#00B476]/40 transition-colors text-center"
              >
                <div className="text-3xl font-bold text-[#00B476] mb-2">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Typical retail engagement
          </h2>
          <div className="space-y-8">
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-red-500 mb-3">Initial state</h3>
              <p className="text-gray-300 leading-relaxed">
                Frequent pricing and checkout issues frustrating customers. Unstable releases causing operational disruptions.
                POS systems freezing during busy hours. Inventory showing incorrect availability across channels.
                Team afraid to deploy during peak shopping periods.
              </p>
            </div>
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Problems</h3>
              <p className="text-gray-300 leading-relaxed">
                Fragmented systems with weak integration testing. Weak regression coverage on checkout and pricing flows.
                Manual QA unable to keep up with catalog and campaign changes. No validation of inventory sync accuracy.
              </p>
            </div>
            <div className="bg-green-950/15 border border-green-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-100 mb-3">What we changed</h3>
              <p className="text-gray-300 leading-relaxed">
                Built retail-focused QA strategy around sales continuity. Risk-based coverage on checkout, pricing, and inventory.
                Automated critical retail flows. Pre-launch validation for campaigns and catalog updates.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00B476]/10 to-transparent border border-[#00B476]/50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-[#00B476] mb-3">Outcome</h3>
              <p className="text-gray-300 leading-relaxed">
                Stable operations during peak seasons and sales events. Smoother campaign launches with fewer pricing errors.
                Reliable omnichannel experience. Fewer customer complaints. Store staff focused on customers instead of technical workarounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Scaling or modernizing a retail platform?
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Let's make sure your systems don't fail when sales matter most.
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
