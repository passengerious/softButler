import Head from 'next/head';
import { seoConfig } from '../config/seoConfig';

interface SEOProps {
  pageKey?: string;
  overrideTitle?: string;
  overrideDescription?: string;
  overrideKeywords?: string;
}

export default function SEO({ 
  pageKey, 
  overrideTitle, 
  overrideDescription, 
  overrideKeywords 
}: SEOProps) {
  
  const defaultConfig = seoConfig.home;
  const config = pageKey && seoConfig[pageKey] ? seoConfig[pageKey] : defaultConfig;

  const title = overrideTitle || config.title;
  const description = overrideDescription || config.description;
  const keywords = overrideKeywords || config.keywords;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}
