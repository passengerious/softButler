import ServiceTemplate from './ServiceTemplate';

export default function RegressionTesting() {
  return (
    <ServiceTemplate
      title="Regression Testing"
      subtitle="Ensure new changes don't break existing functionality"
      description="Systematic validation after every update to catch unintended side effects. Maintain product quality as your codebase evolves."
      benefits={[
        'Catch breaking changes before production',
        'Maintain product stability during development',
        'Reduce risk of regression bugs',
        'Enable confident code changes',
        'Support continuous integration practices',
        'Reduce time spent on bug fixes',
      ]}
      features={[
        'Comprehensive regression test suite design',
        'Automated regression testing',
        'Manual regression verification',
        'Change impact analysis',
        'Selective regression testing',
        'Continuous regression monitoring',
        'Test suite optimization',
        'Fast feedback on changes',
      ]}
      process={[
        'Analyze application to identify regression-prone areas',
        'Design efficient regression test suite',
        'Implement automated regression tests',
        'Integrate tests into CI/CD pipeline',
        'Execute regression tests on each change',
        'Analyze test results and failures',
        'Optimize test suite for speed and coverage',
        'Continuously maintain and update tests',
      ]}
    />
  );
}
