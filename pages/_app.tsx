import type { AppProps } from 'next/app';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import CookieBanner from '../src/components/CookieBanner';
import { I18nProvider } from '../src/lib/i18n';
import 'react-toastify/dist/ReactToastify.css';
import '../src/index.css';

// TODO: Replace 'G-XXXXXXXXXX' with the owner's actual GA4 Measurement ID
const GA_MEASUREMENT_ID =
  typeof window !== 'undefined' && window.location.hostname === 'softbutler.io'
    ? 'G-DS8TR4J4QN'
    : '';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {GA_MEASUREMENT_ID && (
        <>
          {/* Google Analytics 4 (GA4) Tracking with Consent Mode V2 */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
            />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // Load default consent settings based on user choice
              const storedConsent = localStorage.getItem('cookie-consent');
              const preferences = localStorage.getItem('cookie-consent-preferences');
              
              let analyticsGranted = 'denied';
              let marketingGranted = 'denied';
              
              if (storedConsent === 'granted') {
                if (preferences) {
                  const prefs = JSON.parse(preferences);
                  analyticsGranted = prefs.analytics ? 'granted' : 'denied';
                  marketingGranted = prefs.marketing ? 'granted' : 'denied';
                } else {
                  analyticsGranted = 'granted';
                  marketingGranted = 'granted';
                }
              }

              gtag('consent', 'default', {
                'analytics_storage': analyticsGranted,
                'ad_storage': marketingGranted,
                'ad_user_data': marketingGranted,
                'ad_personalization': marketingGranted,
              });

              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}
      <I18nProvider>
        <Component {...pageProps} />
        <CookieBanner />
      </I18nProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="bg-gray-800 border border-gray-700 text-white"
      />
    </>
  );
}
