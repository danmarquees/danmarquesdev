import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

const CookieBanner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(() => {
    // Verifica se já foi aceito
    return !localStorage.getItem("cookiesAccepted");
  });

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-gray-200 dark:border-slate-700 py-3 px-4 sm:p-4 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex-1 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-text-muted leading-tight sm:leading-normal">
              <Trans
                i18nKey="cookies.bannerMessage"
                components={{
                  privacy: (
                    <Link
                      to="/politica-privacidade"
                      className="text-primary hover:text-primary-hover underline"
                    />
                  ),
                  cookies: (
                    <Link
                      to="/politica-cookies"
                      className="text-primary hover:text-primary-hover underline"
                    />
                  ),
                }}
              />
            </p>
          </div>
          <button
            onClick={acceptCookies}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover transition-colors text-sm font-medium whitespace-nowrap"
          >
            {t('cookies.accept')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;