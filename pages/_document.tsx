import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ... existing head content ... */}
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/logo_circle.png" />
        <meta name="theme-color" content="#00B476" />
        
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
        
        {/* Additional Global Meta */}
        <meta name="author" content="SoftButler" />
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
