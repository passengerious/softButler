import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';

export default function FunctionalTesting() {
  return (
    <>
      <ServiceTemplate
      title="Functional Testing"
      subtitle="Verify your application works as intended"
      description="Comprehensive testing of features and user workflows to ensure your application meets requirements and delivers the expected user experience."
      benefits={[
        'Catch bugs before they reach production',
        'Ensure features work as specified',
        'Validate complete user workflows',
        'Improve product quality and reliability',
        'Reduce post-release defects',
        'Increase customer satisfaction',
      ]}
      features={[
        'Requirements analysis and test planning',
        'Test case design and documentation',
        'Manual exploratory testing',
        'User acceptance testing support',
        'Cross-browser and cross-device testing',
        'API and backend testing',
        'Bug reporting and tracking',
        'Regression testing',
      ]}
      process={[
        'Review requirements and user stories',
        'Design comprehensive test cases',
        'Execute tests across all features',
        'Document and report defects',
        'Verify bug fixes',
        'Perform exploratory testing',
        'Validate integration points',
        'Provide test reports and metrics',
      ]}
    />
      <SEO pageKey="functional" />
    </>
  );
}
