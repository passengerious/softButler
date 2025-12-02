import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, DollarSign, Laptop, Gamepad2, Wifi, Rocket, Brain, Blocks, GraduationCap } from 'lucide-react';

interface IndustryGridProps {
  preview?: boolean;
}

const IndustryGrid: React.FC<IndustryGridProps> = ({ preview = false }) => {
  const industries = [
    {
      name: "E-commerce",
      icon: ShoppingCart,
      description: "Prevented a $500K loss by catching a checkout bug pre-launch",
      details: "Shopping carts, payment gateways, inventory management"
    },
    {
      name: "Fintech",
      icon: DollarSign,
      description: "Secured banking app with 99.9% uptime",
      details: "Payment processing, financial compliance, security"
    },
    {
      name: "SaaS",
      icon: Laptop,
      description: "Streamlined deployment for 50+ microservices",
      details: "Cloud platforms, API testing, scalability"
    },
    {
      name: "Startups",
      icon: Rocket,
      description: "Helped 100+ startups launch bug-free MVPs",
      details: "Rapid testing cycles, MVP validation, growth scaling"
    },
    {
      name: "Blockchain",
      icon: Blocks,
      description: "Audited smart contracts worth $50M+",
      details: "Security audits, tokenomics testing, DeFi protocols"
    },
    {
      name: "EdTech",
      icon: GraduationCap,
      description: "Ensured seamless learning for 500K+ students",
      details: "LMS platforms, assessment tools, mobile learning"
    }
  ];

  const displayedIndustries = preview ? industries.slice(0, 6) : industries;

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {preview ? "Industries We've Saved From" : "Industries We Serve"}
            <br />
            <span className="text-green-500">QA Hell</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedIndustries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-green-500/50 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-green-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <industry.icon className="w-12 h-12 text-green-500 mb-6 group-hover:drop-shadow-[0_0_15px_#00B476] transition-all duration-300" />
                <h3 className="text-xl font-bold mb-4 text-white">{industry.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{industry.description}</p>
                {!preview && (
                  <p className="text-green-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {industry.details}
                  </p>
                )}
              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 rounded-lg border border-green-500/0 group-hover:border-green-500/30 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]" 
                   style={{ boxShadow: '0 0 20px rgba(255, 215, 0, 0)' }} />
            </motion.div>
          ))}
        </div>

        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="/services"
              className="inline-block px-8 py-4 border-2 border-green-500 text-green-500 font-bold text-lg rounded-lg hover:bg-green-500 hover:text-black transition-all duration-300"
            >
              View All Industries
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default IndustryGrid;