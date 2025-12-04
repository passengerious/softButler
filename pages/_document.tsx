import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/group.png" />
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/group.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/group.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/group.png" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/group.png" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
