import { CheckCircle, AlertTriangle, Target, FileCheck, TrendingUp, Award } from 'lucide-react';
import Button from '../../components/Button';

export default function QACandidateAssessment() {
  const painPoints = [
    "It's hard to objectively assess the real level of a QA candidate",
    'Good interviews ≠ strong performance on a real project',
    'Hiring mistakes cost months of time and thousands of dollars',
    'QA engineers often fail to deliver expected value after onboarding',
  ];

  const serviceFormat = [
    'Fast, independent assessment',
    'No changes to your existing hiring process',
    'External, unbiased evaluation',
  ];

  const basedOn = ['Your product', 'Your real risks', 'Your expectations from the role'];

  const evaluationAreas = [
    'Ability to achieve expected QA outcomes',
    'Test design and coverage thinking',
    'Risk-based testing skills',
    'Work with requirements',
    'Communication and QA ownership',
    'Readiness to work on a real project',
  ];

  const assessmentFormats = [
    'Short structured interview',
    'Practical task (based on your product or a similar domain)',
    'Real-time coding',
    'Live testing session',
  ];

  const reportIncludes = [
    'Overall candidate evaluation',
    'Risks and weak areas',
    'Real level: Junior / Middle / Strong Middle / Senior',
    'Recommendation: hire / no-hire / hire with conditions',
    'Fit assessment for your role and product',
    'Clear comments for Hiring Manager / CTO / HR',
  ];

  const metrics = [
    { label: 'Wrong Hire Risk', value: '–50–70%' },
    { label: 'Hiring Confidence', value: '+100%' },
    { label: 'Fewer Re-hires', value: 'Significant' },
  ];

  return (
    <div className="bg-black text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      <section className="py-20 mt-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              QA Candidate Assessment
            </h1>
            <p className="text-xl md:text-2xl text-[#00B476] font-semibold mb-8">
              Hire QA engineers with confidence — not hope
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-[#dc2626]/5 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#dc2626]/5 via-transparent to-[#dc2626]/5 opacity-40"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <AlertTriangle className="text-[#dc2626] mx-auto mb-4" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Real Cost of <span className="text-[#dc2626]">Hiring Mistakes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {painPoints.map((pain, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-black/50 backdrop-blur-sm p-5 rounded-lg border border-[#dc2626]/20 hover:border-[#dc2626] transition-all duration-300 hover:shadow-lg hover:shadow-[#dc2626]/10 group"
              >
                <AlertTriangle
                  className="text-[#dc2626] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={20}
                />
                <p className="text-gray-300 group-hover:text-white transition-colors">{pain}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#dc2626]/10 to-black border-2 border-[#dc2626]/30 p-8 rounded-xl text-center">
            <p className="text-xl md:text-2xl text-gray-200 font-medium">
              "We hire a QA engineer — and after 1–2 months we realize{' '}
              <span className="text-[#dc2626] font-bold">it was a mistake</span>."
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            How the Service <span className="text-[#00B476]">Works</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceFormat.map((item, idx) => (
              <div
                key={idx}
                className="bg-black p-8 rounded-xl border border-[#00B476]/20 hover:border-[#00B476] transition-all duration-300 hover:shadow-lg hover:shadow-[#00B476]/20 group text-center"
              >
                <CheckCircle
                  className="text-[#00B476] mx-auto mb-4 group-hover:scale-110 transition-transform"
                  size={40}
                />
                <p className="text-gray-300 text-lg group-hover:text-white transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-black to-green-950/20 border-2 border-[#00B476]/30 p-12 rounded-2xl text-center">
            <Award className="text-[#00B476] mx-auto mb-6" size={56} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#00B476]">Hiring Confidence Assessment</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Hire QA engineers with confidence, not hope.
            </p>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-gray-400 leading-relaxed">
                One comprehensive service that gives a clear answer to the question:
                <br />
                <span className="text-white font-semibold">
                  "Is this QA candidate the right fit for our product and team?"
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            What the Assessment is <span className="text-[#00B476]">Based On</span>
          </h2>
          <p className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            We evaluate quality of thinking — <span className="text-white font-semibold">not memorized answers</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {basedOn.map((item, idx) => (
              <div
                key={idx}
                className="bg-black p-8 rounded-xl border border-[#00B476]/20 hover:border-[#00B476] transition-all duration-300 hover:shadow-lg hover:shadow-[#00B476]/20 group text-center"
              >
                <Target className="text-[#00B476] mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
                <p className="text-white text-xl font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What We <span className="text-[#00B476]">Evaluate</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {evaluationAreas.map((area, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-green-950/20 p-5 rounded-lg border border-[#00B476]/20 hover:border-[#00B476] transition-all duration-300 hover:shadow-lg hover:shadow-[#00B476]/20 group"
              >
                <CheckCircle
                  className="text-[#00B476] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                  size={20}
                />
                <p className="text-gray-300 group-hover:text-white transition-colors">{area}</p>
              </div>
            ))}
          </div>

          <div className="bg-black border border-green-500/20 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-center text-white">Assessment Formats</h3>
            <div className="space-y-3">
              {assessmentFormats.map((format, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-[#00B476] rounded-full flex-shrink-0"></div>
                  <p>{format}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FileCheck className="text-[#00B476] mx-auto mb-4" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You <span className="text-[#00B476]">Get</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-black to-green-950/20 border-2 border-[#00B476]/30 p-10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center text-[#00B476]">
              QA Candidate Assessment Report
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reportIncludes.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-lg bg-black/50 border border-[#00B476]/10 hover:border-[#00B476]/30 transition-colors"
                >
                  <CheckCircle className="text-[#00B476] flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <TrendingUp className="text-[#00B476] mx-auto mb-4" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Impact in <span className="text-[#00B476]">Numbers</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-black to-green-950/20 border-2 border-green-500/20 p-8 rounded-xl text-center hover:border-[#00B476] transition-all duration-300 hover:shadow-xl hover:shadow-[#00B476]/20 group"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#00B476] mb-3 group-hover:scale-110 transition-transform">
                  {metric.value}
                </div>
                <div className="text-gray-300 text-lg font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-black via-green-950/10 to-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to hire QA with <span className="text-[#00B476]">confidence?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            One short call is enough to start reducing hiring risk.
          </p>
          <Button className="text-lg">Book a call</Button>
        </div>
      </section>
    </div>
  );
}
