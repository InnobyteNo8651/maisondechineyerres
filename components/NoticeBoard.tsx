'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NoticeBoard({ locale }: { locale: string }) {
  const t = useTranslations('notice');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem('notice_dismissed');
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('notice_dismissed', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section className="bg-amber-50 border-b border-amber-200 py-3.5 px-4 sm:px-6 lg:px-8 relative z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pr-8">
        <div className="flex items-start gap-2.5 text-center md:text-left">
          <span className="text-xl shrink-0 mt-0.5" role="img" aria-label="pin">📌</span>
          <p className="text-amber-950 text-sm md:text-base font-medium leading-relaxed">
            <span className="font-bold text-gray-900 mr-2">{t('title').replace('📌 ', '')}</span>
            {t('text')}
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5 shrink-0 justify-center">
          <a
            href="https://forms.gle/maisondechineyerres"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand hover:bg-brand-hover text-white px-4 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-sm hover:shadow"
          >
            {t('btnRegister')}
          </a>
          <Link
            href={`/${locale}/contact`}
            className="bg-white hover:bg-amber-100/50 text-gray-700 border border-amber-200 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all"
          >
            {t('btnContact')}
          </Link>
        </div>
      </div>
      <button
        onClick={handleDismiss}
        type="button"
        aria-label="Dismiss notice"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/50 hover:text-amber-950 p-1.5 transition-colors rounded-full hover:bg-amber-100"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </section>
  );
}
