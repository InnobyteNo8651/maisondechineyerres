'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { getAssetPath } from '@/lib/config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('nav');

  const pathWithoutLocale = pathname.startsWith(`/${locale}`)
    ? pathname.slice(`/${locale}`.length) || '/'
    : pathname;

  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/courses`, label: t('courses') },
    { href: `/${locale}/activities`, label: t('activities') },
    { href: `/${locale}/news`, label: t('news') },
    { href: `/${locale}/contact`, label: t('contact') },
    { href: `/${locale}/about`, label: t('about') },
  ];

  const isActive = (href: string) =>
    pathname === href || (href !== `/${locale}` && pathname.startsWith(href));

  const handleLocaleChange = (newLocale: string) => {
    const newPath =
      pathWithoutLocale === '/' ? `/${newLocale}` : `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white text-brand shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex items-center h-20">

          {/* Logo mobile uniquement */}
          <Link href={`/${locale}`} className="md:hidden">
            <Image
              src={getAssetPath('/images/logo.png')}
              alt="Maison de Chine"
              width={70}
              height={55}
              priority
            />
          </Link>

          <div className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wide border-b-2 transition-colors whitespace-nowrap ${
                  isActive(link.href)
                    ? 'text-brand-hover border-brand-hover'
                    : 'text-brand border-transparent hover:text-brand-hover hover:border-brand-hover'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Droite : langue (desktop+mobile) + burger (mobile) */}
          <div className="flex items-center gap-3 ml-auto">
            <select
              value={locale}
              onChange={(e) => handleLocaleChange(e.target.value)}
              className="text-sm font-bold uppercase bg-white text-brand cursor-pointer"
            >
              <option value="fr">FR</option>
              <option value="zh">中文</option>
            </select>
            <button
              onClick={() => setIsOpen((o) => !o)}
              aria-label="Menu"
              className="md:hidden p-2 rounded hover:bg-blue-50 transition-colors"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-blue-100 py-2 flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
                  isActive(link.href) ? 'text-brand-hover' : 'text-brand hover:text-brand-hover'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
