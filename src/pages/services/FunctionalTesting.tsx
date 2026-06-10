import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';
import { useTranslation } from '../../lib/i18n';

export default function FunctionalTesting() {
  const { t } = useTranslation('service-details');

  return (
    <>
      <ServiceTemplate
        title={t('functional.title')}
        subtitle={t('functional.subtitle')}
        description={t('functional.description')}
        benefits={t('functional.benefits')}
        features={t('functional.features')}
        process={t('functional.process')}
      />
      <SEO pageKey="functional" />
    </>
  );
}
