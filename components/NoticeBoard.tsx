import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function NoticeBoard({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'notice' });

  return (
    <section className="bg-amber-50 border-y border-amber-200 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-1">
            {t('title')}
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            {t('text')}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href="https://forms.gle/maisondechineyerres"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand hover:bg-brand-hover text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
          >
            {t('btnRegister')}
          </a>
          <Link
            href={`/${locale}/contact`}
            className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            {t('btnContact')}
          </Link>
        </div>
      </div>
    </section>
  );
}
