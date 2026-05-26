import Head from 'next/head';
import { seoConfig } from '../config/seoConfig';

const DEFAULT_OG_IMAGE = 'https://softbutler.io/og-image.png';
const DEFAULT_URL = 'https://softbutler.io';

interface SEOProps {
  pageKey?: string;
  overrideTitle?: string;
  overrideDescription?: string;
  overrideKeywords?: string;
  overrideImage?: string;
  overrideUrl?: string;
}

export default function SEO({
  pageKey,
  overrideTitle,
  overrideDescription,
  overrideKeywords,
  overrideImage,
  overrideUrl,
}: SEOProps) {
  const defaultConfig = seoConfig.home;
  const config = pageKey && seoConfig[pageKey] ? seoConfig[pageKey] : defaultConfig;

  const title = overrideTitle || config.title;
  const description = overrideDescription || config.description;
  const keywords = overrideKeywords || config.keywords;
  const image = overrideImage || config.image || DEFAULT_OG_IMAGE;
  const url = overrideUrl || config.url || DEFAULT_URL;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content="SoftButler" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
