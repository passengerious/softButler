import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ... existing head content ... */}
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo3.svg" />
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
              "logo": {
                "@type": "ImageObject",
                "url": "https://softbutler.io/logo3.svg",
                "width": 1497,
                "height": 771
              },
              "image": "https://softbutler.io/logo3.svg",
              "description": "Professional QA testing services. Test less. Deliver smarter."
            })
          }}
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softbutler.io" />
        <meta property="og:title" content="SoftButler – Modern QA Testing Company" />
        <meta property="og:description" content="Professional QA testing services. Test less. Deliver smarter." />
        <meta property="og:image" content="https://softbutler.io/logo3.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SoftButler - QA Testing Services" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://softbutler.io" />
        <meta name="twitter:title" content="SoftButler – Modern QA Testing Company" />
        <meta name="twitter:description" content="Professional QA testing services. Test less. Deliver smarter." />
        <meta name="twitter:image" content="https://softbutler.io/logo3.svg" />
        <meta name="twitter:image:alt" content="SoftButler - QA Testing Services" />
        
        
        {/* Additional SEO */}
        <meta name="description" content="Professional QA testing services. Test less. Deliver smarter." />
        <meta name="keywords" content="SoftButler, QA testing, quality assurance, software testing, bug testing, QA services, software quality, testing company" />
        <meta name="author" content="SoftButler" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://softbutler.io" />
        <meta name="google-site-verification" content="" />
        
        {/* Clutch Widget Script optimized with next/script */}
        <Script 
          src="https://widget.clutch.co/static/js/widget.js" 
          strategy="lazyOnload"
        />
      </Head>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
