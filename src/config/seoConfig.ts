export interface SEOData {
  title: string;
  description: string;
  keywords: string;
}

export const seoConfig: Record<string, SEOData> = {
  // Core Pages
  home: {
    title: 'SoftButler – Modern QA Testing Company',
    description: 'Professional QA testing services. Test less. Deliver smarter. We provide comprehensive software quality assurance.',
    keywords: 'QA testing, software testing, QA services, quality assurance, SoftButler',
  },
  services: {
    title: 'QA Services | SoftButler',
    description: 'Explore our comprehensive range of QA and software testing services designed to accelerate your delivery.',
    keywords: 'QA services, testing services, automated testing, manual testing, performance testing',
  },
  whoWeAre: {
    title: 'Who We Are | SoftButler',
    description: 'Learn about SoftButler, our mission, our approach to modern QA, and the team behind our success.',
    keywords: 'about SoftButler, QA company, software testing experts',
  },
  contact: {
    title: 'Contact Us | SoftButler',
    description: 'Get in touch with SoftButler for professional QA testing services and consulting.',
    keywords: 'contact SoftButler, QA consulting, hire QA testers',
  },
  careers: {
    title: 'Careers | SoftButler',
    description: 'Join the SoftButler team. We are always looking for talented QA engineers and testing professionals.',
    keywords: 'QA jobs, software testing careers, SoftButler careers',
  },

  // Industries
  fintech: {
    title: 'QA for FinTech | SoftButler',
    description: 'Specialized QA testing services for financial technology applications. Ensure security, compliance, and reliability.',
    keywords: 'FinTech QA, financial software testing, banking app testing',
  },
  saas: {
    title: 'QA for SaaS | SoftButler',
    description: 'Scalable software testing solutions for SaaS platforms to ensure high availability and seamless user experience.',
    keywords: 'SaaS testing, cloud application QA, software as a service testing',
  },
  edtech: {
    title: 'QA for EdTech | SoftButler',
    description: 'Quality assurance for educational technology platforms. Deliver flawless learning experiences.',
    keywords: 'EdTech QA, e-learning software testing, educational app testing',
  },
  ecommerce: {
    title: 'QA for E-commerce | SoftButler',
    description: 'End-to-end testing for e-commerce platforms to maximize conversions and ensure secure transactions.',
    keywords: 'e-commerce testing, retail app QA, shopping cart testing',
  },
  logistics: {
    title: 'QA for Logistics | SoftButler',
    description: 'Robust QA testing for logistics and supply chain software. Ensure tracking accuracy and system reliability.',
    keywords: 'logistics software testing, supply chain QA, transportation app testing',
  },
  retail: {
    title: 'QA for Retail | SoftButler',
    description: 'Comprehensive software testing for the retail industry. Connect your online and in-store digital experiences seamlessly.',
    keywords: 'retail software QA, POS testing, omnichannel retail testing',
  },

  // Services
  qaAudit: {
    title: 'QA Audit Services | SoftButler',
    description: 'Comprehensive QA audits to evaluate your current testing processes and identify areas for improvement.',
    keywords: 'QA audit, testing assessment, software quality evaluation',
  },
  automationNitro: {
    title: 'Automation Nitro | SoftButler',
    description: 'Supercharge your testing with our Automation Nitro service. Rapid test automation framework setup and implementation.',
    keywords: 'test automation, automated testing setup, QA automation',
  },
  releaseAcceleration: {
    title: 'Release Acceleration | SoftButler',
    description: 'Speed up your time-to-market with our Release Acceleration QA services and optimized testing pipelines.',
    keywords: 'release acceleration, continuous testing, faster software delivery',
  },
  qaCandidateAssessment: {
    title: 'QA Candidate Assessment | SoftButler',
    description: 'Expert evaluation of your QA candidates to help you hire the best software testing talent.',
    keywords: 'QA interview, testing candidate evaluation, hire QA engineers',
  },
  functional: {
    title: 'Functional Testing | SoftButler',
    description: 'Thorough functional testing services to ensure your software meets all business requirements and specifications.',
    keywords: 'functional testing, feature testing, software functionality QA',
  },
  integration: {
    title: 'Integration Testing | SoftButler',
    description: 'Reliable integration testing to ensure seamless communication between your software modules and third-party APIs.',
    keywords: 'integration testing, API testing, system integration QA',
  },
  performance: {
    title: 'Performance Testing | SoftButler',
    description: 'Scalability and load testing services to guarantee your application performs under peak user traffic.',
    keywords: 'performance testing, load testing, stress testing QA',
  },
  regression: {
    title: 'Regression Testing | SoftButler',
    description: 'Automated and manual regression testing to ensure new changes do not break existing functionality.',
    keywords: 'regression testing, continuous QA, software stability testing',
  },
  systemTesting: {
    title: 'System Testing | SoftButler',
    description: 'End-to-end system testing services validating the complete and integrated software product.',
    keywords: 'system testing, end-to-end QA, integrated software testing',
  }
};
