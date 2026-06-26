import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';

export const dynamic = 'force-static';

const locales = ['fr', 'zh'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: locale === 'fr' ? 1 : 0.8,
    alternates: {
      languages: {
        fr: `${siteConfig.url}/fr`,
        zh: `${siteConfig.url}/zh`,
      },
    },
  }));
}
