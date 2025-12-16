import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>SoftButler - Modern QA Testing Company</title>
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/group.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/group.png" />
        <link rel="apple-touch-icon" href="/group.png" />
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
                "url": "https://softbutler.io/group.png",
                "width": 512,
                "height": 512
              },
              "image": "https://softbutler.io/group.png",
              "description": "Professional QA testing services. Test less. Deliver smarter."
            })
          }}
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softbutler.io" />
        <meta property="og:title" content="SoftButler – Modern QA Testing Company" />
        <meta property="og:description" content="Professional QA testing services. Test less. Deliver smarter." />
        <meta property="og:image" content="https://softbutler.io/group.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SoftButler - QA Testing Services" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://softbutler.io" />
        <meta name="twitter:title" content="SoftButler – Modern QA Testing Company" />
        <meta name="twitter:description" content="Professional QA testing services. Test less. Deliver smarter." />
        <meta name="twitter:image" content="https://softbutler.io/group.png" />
        <meta name="twitter:image:alt" content="SoftButler - QA Testing Services" />
        
        
        {/* Additional SEO */}
        <meta name="description" content="Professional QA testing services. Test less. Deliver smarter." />
        <meta name="keywords" content="SoftButler, QA testing, quality assurance, software testing, bug testing, QA services, software quality, testing company" />
        <meta name="author" content="SoftButler" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://softbutler.io" />
        <meta name="google-site-verification" content="" />
      </Head>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
