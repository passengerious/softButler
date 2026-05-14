import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';

export default function IntegrationTesting() {
  return (
    <>
      <ServiceTemplate
      title="Integration Testing"
      subtitle="Test how different parts of your system work together"
      description="Verify that integrated components, services, and systems work correctly together. Identify interface issues and data flow problems early."
      benefits={[
        'Catch integration issues before production',
        'Verify API contracts and data flows',
        'Ensure microservices work together correctly',
        'Reduce integration-related production bugs',
        'Support continuous integration practices',
        'Improve system reliability',
      ]}
      features={[
        'API testing and validation',
        'Service integration testing',
        'Database integration testing',
        'Third-party integration testing',
        'Message queue and event testing',
        'Contract testing',
        'End-to-end workflow testing',
        'Integration test automation',
      ]}
      process={[
        'Map system integrations and data flows',
        'Design integration test scenarios',
        'Set up test environments and data',
        'Execute API and service integration tests',
        'Verify data flow across components',
        'Test error handling and edge cases',
        'Automate critical integration tests',
        'Provide integration test reports',
      ]}
    />
      <SEO pageKey="integration" />
    </>
  );
}
