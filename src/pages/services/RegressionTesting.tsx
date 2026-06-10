import SEO from '../../components/SEO';
import ServiceTemplate from './ServiceTemplate';
import { useTranslation } from '../../lib/i18n';

export default function RegressionTesting() {
  const { t } = useTranslation('service-details');

  return (
    <>
      <ServiceTemplate
        title={t('regression.title')}
        subtitle={t('regression.subtitle')}
        description={t('regression.description')}
        benefits={t('regression.benefits')}
        features={t('regression.features')}
        process={t('regression.process')}
      />
      <SEO pageKey="regression" />
    </>
  );
}
