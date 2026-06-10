import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';
import { useTranslation } from '../../lib/i18n';

export default function SystemTesting() {
  const { t } = useTranslation('service-details');

  return (
    <>
      <ServiceTemplate
        title={t('system.title')}
        subtitle={t('system.subtitle')}
        description={t('system.description')}
        benefits={t('system.benefits')}
        features={t('system.features')}
        process={t('system.process')}
      />
      <SEO pageKey="systemTesting" />
    </>
  );
}
