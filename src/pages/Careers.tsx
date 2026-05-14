import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, ChevronDown } from 'lucide-react';
import Button from '../components/Button';

export default function Careers() {
  const [openPositions, setOpenPositions] = useState<{ [key: string]: boolean }>({
    senior: false,
    middle: false,
  });

  const togglePosition = (position: string) => {
    setOpenPositions((prev) => ({
      ...prev,
      [position]: !prev[position],
    }));
  };
  const seniorResponsibilities = [
    'Own quality for assigned projects',
    'Automate test cases using Playwright',
    'Design test strategy and test coverage',
    'Lead risk-based testing and regression strategy',
    'Work closely with developers, PMs, and DevOps',
    'Review and improve existing test processes',
    'Mentor Middle and Junior QA engineers',
    'Contribute to automation strategy (not just writing tests)',
  ];

  const seniorRequirements = [
    'Experience with Playwright/Cypress/WebdriverIO 4+ years',
    'Setting CI/CD pipelines',
    "English level: Upper-Intermediate+",
    'Strong experience in QA engineering 4+ years',
    'Deep understanding of testing principles and quality risks',
    'Experience with web applications and APIs',
    'Ability to design test strategies',
    'Clear communication and ownership mindset',
  ];

  const seniorBenefits = [
    'Influence on real product decisions',
    'Freedom to improve QA, not just follow instructions',
    'Professional growth in QA, automation, and delivery processes',
    'Transparent expectations and feedback',
  ];

  const middleResponsibilities = [
    'Perform manual testing of web applications and APIs',
    'Write and maintain test cases and checklists',
    'Automate manual tests using Playwright',
    'Participate in regression testing',
    'Analyze requirements and find risks',
    'Collaborate with developers and senior QA engineers',
    'Contribute to test documentation',
  ];

  const middleRequirements = [
    '3+ years of experience in QA',
    'Experience with Playwright 2+ years',
    'Experience with setting CI/CD pipelines',
    'Understanding of QA fundamentals and testing types',
    'Experience with bug tracking systems',
    'Experience with Postman/Proxyman/Charles/Fiddler/etc. 2+ years',
    'Deep understanding of web technologies (HTTP, REST, browsers)',
    'Clear communication and ownership mindset', 
  ];

  const middleBenefits = [
    'Clear growth path to Senior QA',
    'Mentorship from experienced QA engineers',
    'Real projects instead of &quot;training tasks&quot;',
    'Supportive and professional team',
  ];

  const applicationSteps = [
    'Apply for the position',
    'Short intro call',
    'Technical interview / practical task',
    'Decision and offer',
  ];

  return (
    <div className="bg-black text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      <section className="py-20 mt-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center">
            <span className="text-[#00B476]">Careers</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
            We build strong QA systems — and we&apos;re looking for people who care about quality, not
            checklists.
          </p>
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            We work with real products and real delivery pipelines. Our QA engineers influence how
            products are built, tested, and released — not just how bugs are reported.
          </p>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Open <span className="text-[#00B476]">Positions</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-black to-green-950/20 border-2 border-[#00B476]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00B476]/50">
              <button
                onClick={() => togglePosition('senior')}
                className="w-full p-8 md:p-12 text-left flex items-start justify-between gap-4 hover:bg-[#00B476]/5 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Senior QA Automation Engineer</h3>
                  <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                    <span className="bg-green-950/15 px-4 py-2 rounded-lg text-sm">Remote / Hybrid</span>
                    <span className="bg-green-950/15 px-4 py-2 rounded-lg text-sm">Full-time</span>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    As a Senior QA Engineer, you will be responsible for driving quality across the
                    product, shaping QA processes, and influencing how teams think about risk and
                    testing.
                  </p>
                </div>
                <ChevronDown
                  className={`flex-shrink-0 text-[#00B476] transition-transform duration-300 ${
                    openPositions.senior ? 'rotate-180' : ''
                  }`}
                  size={32}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openPositions.senior
                    ? 'max-h-[2000px] opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-8 md:px-12 pb-8 md:pb-12 space-y-8 border-t border-[#00B476]/20">
                  <div className="pt-8">
                    <h4 className="text-xl font-bold text-[#00B476] mb-4">Responsibilities</h4>
                    <ul className="space-y-3">
                      {seniorResponsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-[#00B476] flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#00B476] mb-4">Requirements</h4>
                    <ul className="space-y-3">
                      {seniorRequirements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-[#00B476] flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#00B476] mb-4">What you get</h4>
                    <ul className="space-y-3">
                      {seniorBenefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-[#00B476] flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link href="/contact">
                      <Button>Apply for Senior QA Engineer</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-black to-green-950/20 border-2 border-[#00B476]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00B476]/50">
              <button
                onClick={() => togglePosition('middle')}
                className="w-full p-8 md:p-12 text-left flex items-start justify-between gap-4 hover:bg-[#00B476]/5 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">General Middle QA Engineer</h3>
                  <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                    <span className="bg-green-950/15 px-4 py-2 rounded-lg text-sm">Remote / Hybrid</span>
                    <span className="bg-green-950/15 px-4 py-2 rounded-lg text-sm">Full-time</span>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    As a Middle QA Engineer, you will work on real projects, improve your testing
                    skills, and grow towards a strong, independent QA role.
                  </p>
                </div>
                <ChevronDown
                  className={`flex-shrink-0 text-[#00B476] transition-transform duration-300 ${
                    openPositions.middle ? 'rotate-180' : ''
                  }`}
                  size={32}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openPositions.middle
                    ? 'max-h-[2000px] opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-8 md:px-12 pb-8 md:pb-12 space-y-8 border-t border-[#00B476]/20">
                  <div className="pt-8">
                    <h4 className="text-xl font-bold text-[#00B476] mb-4">Responsibilities</h4>
                    <ul className="space-y-3">
                      {middleResponsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-[#00B476] flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#00B476] mb-4">Requirements</h4>
                    <ul className="space-y-3">
                      {middleRequirements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-[#00B476] flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#00B476] mb-4">What you get</h4>
                    <ul className="space-y-3">
                      {middleBenefits.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-[#00B476] flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link href="/contact">
                      <Button>Apply for Middle QA Engineer</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            How to <span className="text-[#00B476]">Apply</span>
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12">
            We respect candidates&apos; time and keep the process clear and predictable
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-black to-green-950/20 border-2 border-[#00B476]/20 p-6 rounded-xl hover:border-[#00B476] transition-all duration-300 hover:shadow-xl hover:shadow-[#00B476]/20 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#00B476]/10 border-2 border-[#00B476] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-[#00B476]">{idx + 1}</span>
                  </div>
                  <div className="text-gray-300 font-medium group-hover:text-white transition-colors">
                    {step}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don&apos;t see <span className="text-[#00B476]">your role?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We&apos;re always interested in strong QA engineers.
            <br />
            If you care about quality and ownership — reach out.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-semibold transition-all bg-[#00B476] text-black hover:bg-[#00B476]/90 text-lg"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
