import { CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../../components/Button';

interface ServiceTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  features: string[];
  process: string[];
}

export default function ServiceTemplate({
  title,
  subtitle,
  description,
  benefits,
  features,
  process,
}: ServiceTemplateProps) {
  return (
    <div className="bg-black text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      <section className="py-20 mt-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{title}</h1>
            <p className="text-xl md:text-2xl text-[#00B476] font-semibold mb-6">{subtitle}</p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">{description}</p>
            <a href="/contact">
              <Button className="text-lg">Book a call</Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Key <span className="text-[#00B476]">Benefits</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-green-950/20 p-6 rounded-lg border border-[#00B476]/20 hover:border-[#00B476] transition-all duration-300 hover:shadow-lg hover:shadow-[#00B476]/20 hover:-translate-y-1 group"
              >
                <CheckCircle
                  className="text-[#00B476] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={24}
                />
                <p className="text-gray-300 text-lg group-hover:text-white transition-colors">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What's <span className="text-[#00B476]">Included</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-black p-4 rounded-lg border border-[#00B476]/20 hover:border-[#00B476] transition-all duration-300 hover:shadow-lg hover:shadow-[#00B476]/10 hover:translate-x-1 group"
              >
                <ArrowRight
                  className="text-[#00B476] flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00B476]/20 via-transparent to-[#00B476]/20"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#00B476]">Process</span>
            </h2>
            <p className="text-gray-400 text-lg">Your roadmap to testing excellence</p>
          </div>

          <div className="relative">
            <div className="space-y-8 relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00B476] via-[#00B476]/50 to-[#00B476] hidden md:block"></div>

              {process.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-6 group">
                  {idx === process.length - 1 && (
              <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-black hidden md:block pointer-events-none"></div>
                  )}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00B476] to-[#00B476]/60 rounded-full flex items-center justify-center font-bold text-xl text-black shadow-lg shadow-[#00B476]/50 group-hover:scale-110 transition-transform duration-300">
                      {idx + 1}
                    </div>
                  </div>

                  <div className="flex-1 bg-gradient-to-br from-black to-green-950/20 p-6 rounded-xl border border-[#00B476]/20 group-hover:border-[#00B476] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#00B476]/20 group-hover:translate-x-2">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-[#00B476] font-semibold text-sm uppercase tracking-wider">
                        Step {idx + 1}
                      </h3>
                      {idx === 0 && (
                        <span className="bg-[#00B476]/20 text-[#00B476] text-xs px-3 py-1 rounded-full font-semibold">
                          START HERE
                        </span>
                      )}
                      {idx === process.length - 1 && (
                        <span className="bg-[#dc2626]/20 text-[#dc2626] text-xs px-3 py-1 rounded-full font-semibold">
                          FINISH
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-[#00B476]">get started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help improve your quality assurance process.
          </p>
          <Button className="text-lg">Book a call</Button>
        </div>
      </section>
    </div>
  );
}
