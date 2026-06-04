import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ShoppingCart, DollarSign, Laptop, GraduationCap, Truck, Store } from 'lucide-react';
import { useTranslation } from '../lib/i18n';

interface IndustryGridProps {
  preview?: boolean;
}

const IndustryGrid: React.FC<IndustryGridProps> = ({ preview = false }) => {
  const router = useRouter();
  const { t } = useTranslation('home');

  const industries = [
    {
      name: t('industries.items.ecommerce.name'),
      icon: ShoppingCart,
      description: t('industries.items.ecommerce.description'),
      details: t('industries.items.ecommerce.details'),
      path: "/industries/ecommerce"
    },
    {
      name: t('industries.items.fintech.name'),
      icon: DollarSign,
      description: t('industries.items.fintech.description'),
      details: t('industries.items.fintech.details'),
      path: "/industries/fintech"
    },
    {
      name: t('industries.items.saas.name'),
      icon: Laptop,
      description: t('industries.items.saas.description'),
      details: t('industries.items.saas.details'),
      path: "/industries/saas"
    },
    {
      name: t('industries.items.logistics.name'),
      icon: Truck,
      description: t('industries.items.logistics.description'),
      details: t('industries.items.logistics.details'),
      path: "/industries/logistics"
    },
    {
      name: t('industries.items.retail.name'),
      icon: Store,
      description: t('industries.items.retail.description'),
      details: t('industries.items.retail.details'),
      path: "/industries/retail"
    },
    {
      name: t('industries.items.edtech.name'),
      icon: GraduationCap,
      description: t('industries.items.edtech.description'),
      details: t('industries.items.edtech.details'),
      path: "/industries/edtech"
    }
  ];

  const displayedIndustries = preview ? industries.slice(0, 6) : industries;

  return (
    <section id="industries" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {preview ? t('industries.titleSaved') : t('industries.titleServe')}
            <br />
            <span className="text-green-500">{t('industries.qaHell')}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedIndustries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Link 
                href={industry.path}
                onClick={(e) => {
                  e.preventDefault();
                  router.replace('/#industries', undefined, { shallow: true }).then(() => {
                    router.push(industry.path);
                  });
                }}
              >
                <div
                  className="group relative bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-green-500/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-green-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <industry.icon className="w-12 h-12 text-green-500 mb-6 group-hover:drop-shadow-[0_0_15px_#00B476] transition-all duration-300" />
                    <h3 className="text-xl font-bold mb-4 text-white">{industry.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{industry.description}</p>
                    {!preview && (
                      <p className="text-green-500 text-sm  transition-opacity duration-300">
                        {industry.details}
                      </p>
                    )}
                  </div>

                  {/* Hover Border Glow */}
                  <div className="absolute inset-0 rounded-lg border border-green-500/0 group-hover:border-green-500/30 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(52,152,219,0.3)]" 
                       style={{ boxShadow: '0 0 20px rgba(52, 152, 219, 0)' }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {preview && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                router.replace('/#industries', undefined, { shallow: true }).then(() => {
                  router.push('/contact');
                });
              }}
              className="inline-block px-8 py-4 border-2 border-green-500 text-green-500 font-bold text-lg rounded-lg hover:bg-green-500 hover:text-black transform hover:scale-105 transition-all duration-300 hover:drop-shadow-[0_0_20px_#00B476]"
            >
              {t('industries.freeAudit')}
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default IndustryGrid;