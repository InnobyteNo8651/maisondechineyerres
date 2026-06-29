import type { Metadata } from 'next';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n';
import { notFound } from 'next/navigation';
import { Dancing_Script } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NoticeBoard from '@/components/NoticeBoard';
import { siteConfig } from '@/lib/config';
import '../globals.css';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cursive',
  display: 'swap',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: "Maison de Chine de Val d'Yerres",
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  description: siteConfig.description.fr,
  address: {
    '@type': 'PostalAddress',
    addressLocality: "Val d'Yerres",
    addressCountry: 'FR',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as 'fr' | 'zh';
  const name = siteConfig.name[l];
  const description = siteConfig.description[l];

  return {
    title: {
      default: name,
      template: `%s | ${siteConfig.name.fr}`,
    },
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: '/fr',
        zh: '/zh',
      },
    },
    openGraph: {
      title: name,
      description,
      url: `/${locale}`,
      siteName: siteConfig.name.fr,
      locale: l === 'zh' ? 'zh_CN' : 'fr_FR',
      type: 'website',
      images: [{ url: '/images/hero-bg-desktop.png', width: 1200, height: 630, alt: name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: name,
      description,
    },
    keywords:
      l === 'zh'
        ? ['中文课', '中国文化', '法国', '瓦莱里斯']
        : ["cours de chinois", "culture chinoise", "Val d'Yerres", "Maison de Chine", "apprentissage chinois"],
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'fr' | 'zh')) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={dancingScript.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <NoticeBoard locale={locale} />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
