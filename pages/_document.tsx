import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>SoftButler - Modern QA Testing Company</title>
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/circle_logo.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/circle_logo.png" />
        <link rel="apple-touch-icon" href="/circle_logo.png" />
        <meta name="theme-color" content="#000000" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SoftButler",
              "url": "https://softbutler.io",
              "logo": "https://softbutler.io/group.png"
            })
          }}
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softbutler.io" />
        <meta property="og:title" content="SoftButler - Modern QA Testing Company" />
        <meta property="og:description" content="We turn chaotic releases into smooth launches — no guesswork, no excuses. Professional QA testing services." />
        <meta property="og:image" content="https://softbutler.io/group.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SoftButler - QA Testing Services" />
        
        
        {/* Additional SEO */}
        <meta name="description" content="We turn chaotic releases into smooth launches — no guesswork, no excuses. Professional QA testing services." />
        <meta name="keywords" content="QA testing, quality assurance, software testing, bug testing, QA services" />
      </Head>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
