import ServiceTemplate from './ServiceTemplate';

export default function PerformanceTesting() {
  return (
    <ServiceTemplate
      title="Performance Testing"
      subtitle="Ensure your application can handle the load"
      description="Test speed, stability, and scalability under various conditions. Identify bottlenecks before they impact your users and revenue."
      benefits={[
        'Identify performance bottlenecks early',
        'Ensure application can handle expected load',
        'Improve user experience with faster response times',
        'Reduce infrastructure costs through optimization',
        'Prevent outages during peak traffic',
        'Support capacity planning decisions',
      ]}
      features={[
        'Load testing under normal conditions',
        'Stress testing to find breaking points',
        'Spike testing for sudden traffic increases',
        'Soak testing for long-term stability',
        'Scalability analysis',
        'Performance monitoring',
        'Bottleneck identification',
        'Optimization recommendations',
      ]}
      process={[
        'Define performance requirements and success criteria',
        'Design realistic test scenarios',
        'Set up performance testing environment',
        'Execute load, stress, and spike tests',
        'Monitor system behavior under load',
        'Analyze results and identify bottlenecks',
        'Provide optimization recommendations',
        'Verify improvements through re-testing',
      ]}
    />
  );
}
