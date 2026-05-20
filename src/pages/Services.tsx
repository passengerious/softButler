import SEO from '../components/SEO';
import Link from 'next/link';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function Services() {
  const popularServices = [
    {
      slug: 'qa-audit',
      title: 'QA Audit & Consulting',
      description:
        "Fix your QA system before it breaks your product. Get clarity on what's wrong and how to fix it.",
      highlights: ['50% fewer bugs', 'Clear action plan', 'Quick wins identified'],
    },
    {
      slug: 'automation-nitro',
      title: 'Automation Nitro',
      description: 'Accelerate your testing with smart automation. Reduce regression time by up to 80%.',
      highlights: ['80% faster testing', 'Stable automation', 'CI/CD optimized'],
    },
    {
      slug: 'release-acceleration',
      title: 'Release Acceleration',
      description:
        'Ship faster without breaking things. Optimize your entire release pipeline for speed and quality.',
      highlights: ['10× faster releases', 'Predictable delivery', 'Risk-based testing'],
    },
    {
      slug: 'qa-candidate-assessment',
      title: 'QA Candidate Assessment',
      description: 'Hire QA engineers with confidence — not hope. Reduce hiring mistakes by 50-70%.',
      highlights: ['Unbiased evaluation', 'Real-world testing', 'Clear hire/no-hire recommendation'],
    },
  ];

  const coreServices = [
    {
      slug: 'functional-testing',
      title: 'Functional Testing',
      description:
        'Verify that your application works as intended. Comprehensive testing of features and user workflows.',
      highlights: ['Complete coverage', 'User-focused', 'Requirements validation'],
    },
    {
      slug: 'performance-testing',
      title: 'Performance Testing',
      description:
        'Ensure your application can handle the load. Test speed, stability, and scalability under various conditions.',
      highlights: ['Load testing', 'Stress testing', 'Scalability analysis'],
    },
    {
      slug: 'regression-testing',
      title: 'Regression Testing',
      description:
        "Make sure new changes don't break existing functionality. Systematic validation after every update.",
      highlights: ['Change impact analysis', 'Automated suites', 'Fast feedback'],
    },
    {
      slug: 'integration-testing',
      title: 'Integration Testing',
      description:
        'Test how different parts of your system work together. Identify interface issues early.',
      highlights: ['API testing', 'System integration', 'Data flow validation'],
    },
    {
      slug: 'system-testing',
      title: 'System Testing',
      description:
        'End-to-end testing of your complete application. Verify the entire system meets requirements.',
      highlights: ['Complete workflows', 'Real scenarios', 'Environment testing'],
    },
  ];

  return (
    <div className="bg-black text-white relative overflow-hidden">
      <SEO pageKey="services" />
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      <section className="py-20 mt-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-[#00B476]">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional QA solutions tailored to your needs. From quick audits to comprehensive
              testing services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-b from-black via-green-950/5 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Star className="text-[#00B476] mr-3" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold">Most Popular</h2>
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
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="text-[#00B476] mr-2" size={16} />
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-[#00B476] font-semibold mt-auto pt-2">
                    Learn more{' '}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="border-t border-[#00B476]/20 pt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Core Testing Services</h2>

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
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="text-[#00B476] mr-2" size={16} />
                          <span className="text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-[#00B476] font-semibold mt-auto pt-2">
                      Learn more{' '}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Sure <span className="text-[#00B476]">Which Service You</span> Need?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s talk. We&apos;ll help you find the right solution for your challenges.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#00B476] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#00B476]/90 transition-colors"
          >
            Book a call
          </Link>
        </div>
      </section>
    </div>
  );
}