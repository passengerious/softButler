import React, { useState, useEffect } from 'react';
import { Cookie, ChevronDown, ChevronUp } from 'lucide-react';

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Check if consent has already been saved in localStorage
    const savedConsent = localStorage.getItem('cookie-consent');
    if (!savedConsent) {
      // Small delay on mount for a smoother slide-up animation entry
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const updateGtagConsent = (grantedAnalytics: boolean, grantedMarketing: boolean) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': grantedAnalytics ? 'granted' : 'denied',
        'ad_storage': grantedMarketing ? 'granted' : 'denied',
        'ad_user_data': grantedMarketing ? 'granted' : 'denied',
        'ad_personalization': grantedMarketing ? 'granted' : 'denied',
      });
    }
  };

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'granted');
    localStorage.setItem('cookie-consent-preferences', JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
    }));
    updateGtagConsent(true, true);
    setIsOpen(false);
  };

  const handleDeclineAll = () => {
    localStorage.setItem('cookie-consent', 'denied');
    localStorage.setItem('cookie-consent-preferences', JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
    }));
    updateGtagConsent(false, false);
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    const isAnyGranted = preferences.analytics || preferences.marketing;
    localStorage.setItem('cookie-consent', isAnyGranted ? 'granted' : 'denied');
    localStorage.setItem('cookie-consent-preferences', JSON.stringify(preferences));
    updateGtagConsent(preferences.analytics, preferences.marketing);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 max-w-md w-[calc(100vw-2rem)] bg-[#0B0F19]/95 backdrop-blur-md border border-gray-800 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-50 animate-slide-up hover:border-[#00B476]/30 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="p-2.5 bg-[#00B476]/10 text-[#00B476] rounded-xl flex-shrink-0">
          <Cookie className="w-6 h-6 animate-pulse" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-base leading-tight">
            We value your privacy
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed mt-1.5">
            We use cookies to optimize your browsing experience, analyze site traffic, and personalize content. You can manage your preferences or accept all cookies.
          </p>
        </div>
      </div>

      {showCustomize && (
        <div className="mt-4 pt-4 border-t border-gray-800/60 space-y-3">
          {/* Necessary Cookies */}
          <div className="flex items-center justify-between p-2.5 bg-gray-900/40 border border-gray-800/40 rounded-xl">
            <div className="pr-4">
              <span className="text-white text-xs font-semibold block">Necessary Cookies</span>
              <span className="text-[10px] text-gray-500 block leading-tight mt-0.5">Required for security, core features, and system stability.</span>
            </div>
            <div className="flex-shrink-0">
              <span className="text-[9px] uppercase font-bold tracking-wider text-[#00B476] bg-[#00B476]/10 px-2 py-0.5 rounded border border-[#00B476]/20">Always Active</span>
            </div>
          </div>

          {/* Performance & Analytics */}
          <div className="flex items-center justify-between p-2.5 bg-gray-900/40 border border-gray-800/40 rounded-xl">
            <div className="pr-4">
              <span className="text-white text-xs font-semibold block">Performance & Analytics</span>
              <span className="text-[10px] text-gray-500 block leading-tight mt-0.5">Helps us understand how visitors interact with the site to improve performance.</span>
            </div>
            <label className="cookie-toggle-label flex-shrink-0">
              <input 
                type="checkbox" 
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="cookie-toggle-input" 
              />
              <div className="cookie-toggle-track">
                <div className="cookie-toggle-knob" />
              </div>
            </label>
          </div>

          {/* Marketing */}
          <div className="flex items-center justify-between p-2.5 bg-gray-900/40 border border-gray-800/40 rounded-xl">
            <div className="pr-4">
              <span className="text-white text-xs font-semibold block">Marketing Cookies</span>
              <span className="text-[10px] text-gray-500 block leading-tight mt-0.5">Used to provide personalized announcements and track ad conversion.</span>
            </div>
            <label className="cookie-toggle-label flex-shrink-0">
              <input 
                type="checkbox" 
                checked={preferences.marketing}
                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                className="cookie-toggle-input" 
              />
              <div className="cookie-toggle-track">
                <div className="cookie-toggle-knob" />
              </div>
            </label>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between gap-3 mt-4 pt-3 border-t border-gray-800/60">
        <button
          onClick={() => setShowCustomize(!showCustomize)}
          className="text-gray-400 hover:text-white text-xs font-medium flex items-center gap-1 transition-colors duration-200"
        >
          {showCustomize ? (
            <>
              Hide Settings <ChevronUp className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              Manage Settings <ChevronDown className="w-3.5 h-3.5" />
            </>
          )}
        </button>

        <div className="flex gap-2">
          {showCustomize ? (
            <>
              <button
                onClick={handleDeclineAll}
                className="px-3 py-1.5 border border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white text-xs font-medium rounded-lg transition-all duration-200"
              >
                Reject All
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-3.5 py-1.5 bg-[#00B476] hover:bg-[#009662] text-black font-semibold text-xs rounded-lg transition-all duration-200 shadow-[0_2px_10px_rgba(0,180,118,0.2)]"
              >
                Save Preferences
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleDeclineAll}
                className="px-3 py-1.5 border border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white text-xs font-medium rounded-lg transition-all duration-200"
              >
                Decline
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-1.5 bg-[#00B476] hover:bg-[#009662] text-black font-semibold text-xs rounded-lg transition-all duration-200 shadow-[0_2px_10px_rgba(0,180,118,0.2)]"
              >
                Accept All
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
