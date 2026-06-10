import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';
import { useTranslation } from '../../lib/i18n';

export default function IntegrationTesting() {
  const { t } = useTranslation('service-details');

  return (
    <>
      <ServiceTemplate
        title={t('integration.title')}
        subtitle={t('integration.subtitle')}
        description={t('integration.description')}
        benefits={t('integration.benefits')}
        features={t('integration.features')}
        process={t('integration.process')}
      />
      <SEO pageKey="integration" />
    </>
  );
}
