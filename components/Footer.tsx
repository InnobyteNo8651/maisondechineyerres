import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'footer' });
  const year = new Date().getFullYear();
  const l = (path: string) => `/${locale}${path}`;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          <div>
            <div className="font-bold text-lg mb-1">{t('name')}</div>
            <p className="text-sm text-gray-400">{t('location')}</p>
            <p className="text-xs text-gray-500 mt-4">{t('tagline')}</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t('resources')}</h3>
            <ul className="space-y-2">
              <li><Link href={l('/courses')} className="text-sm text-gray-400 hover:text-white transition-colors">{t('courses')}</Link></li>
              <li><Link href={l('/activities')} className="text-sm text-gray-400 hover:text-white transition-colors">{t('activities')}</Link></li>
              <li><Link href={l('/news')} className="text-sm text-gray-400 hover:text-white transition-colors">{t('events')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t('contact')}</h3>
            <ul className="space-y-2">
              <li><Link href={l('/contact')} className="text-sm text-gray-400 hover:text-white transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t('legal')}</h3>
            <ul className="space-y-2">
              <li><Link href={l('/legal')} className="text-sm text-gray-400 hover:text-white transition-colors">{t('mentions')}</Link></li>
              <li><Link href={l('/privacy')} className="text-sm text-gray-400 hover:text-white transition-colors">{t('privacy')}</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-500">
            © {year} {t('name')} {t('location')}. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
