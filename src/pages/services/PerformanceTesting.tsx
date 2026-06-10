import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';
import { useTranslation } from '../../lib/i18n';

export default function PerformanceTesting() {
  const { t } = useTranslation('service-details');

  return (
    <>
      <ServiceTemplate
        title={t('performance.title')}
        subtitle={t('performance.subtitle')}
        description={t('performance.description')}
        benefits={t('performance.benefits')}
        features={t('performance.features')}
        process={t('performance.process')}
      />
      <SEO pageKey="performance" />
    </>
  );
}
