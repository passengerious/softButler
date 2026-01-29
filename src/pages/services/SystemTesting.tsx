import ServiceTemplate from './ServiceTemplate';

export default function SystemTesting() {
  return (
    <ServiceTemplate
      title="System Testing"
      subtitle="End-to-end testing of your complete application"
      description="Comprehensive testing of the entire system to verify it meets all requirements. Test complete workflows in realistic environments."
      benefits={[
        'Verify the complete system works as expected',
        'Test real user scenarios end-to-end',
        'Identify system-level issues',
        'Validate business requirements',
        'Ensure quality before release',
        'Reduce post-release defects',
      ]}
      features={[
        'End-to-end workflow testing',
        'Business scenario validation',
        'Environment testing',
        'Configuration testing',
        'Security testing basics',
        'Usability testing',
        'Recovery testing',
        'Documentation verification',
      ]}
      process={[
        'Review system requirements and architecture',
        'Design comprehensive system test scenarios',
        'Set up production-like test environment',
        'Execute end-to-end test cases',
        'Test across different configurations',
        'Verify security and error handling',
        'Document and report issues',
        'Provide system quality assessment',
      ]}
    />
  );
}
