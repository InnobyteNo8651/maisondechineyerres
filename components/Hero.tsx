import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { getAssetPath } from '@/lib/config';

export default async function Hero({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'hero' });

  return (
    <section
      id="hero"
      className="relative bg-cover bg-left lg:bg-center py-20 md:py-32"
      style={{ backgroundImage: `url('${getAssetPath('/images/hero-bg-desktop.png')}')` }}
    >
      {/* Logo desktop — remonte dans la navbar */}
      <Link href={`/${locale}`} className="hidden [@media(min-width:1024px)]:block absolute -top-[75px] left-16 z-50">
        <Image src={getAssetPath('/images/logo.png')} alt="Maison de Chine" width={240} height={189} priority className="w-[120px] h-auto [@media(min-width:1270px)]:w-[240px]" />
      </Link>

      <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col justify-center">
        <div className="space-y-2 md:space-y-4">
          <div className="w-fit">
            <h1 className="font-cursive text-5xl md:text-7xl leading-tight">
              <span className="text-brand">{t('titleStart')}</span>
              {t('titleAccent') && <span className="text-brand-hover">{t('titleAccent')}</span>}
              <span className="text-brand">{t('titleEnd')}</span>
            </h1>
            <p className="text-brand text-2xl md:text-4xl font-bold mt-1 text-center">{t('subtitle')}</p>
          </div>
          <div className="h-0.5 w-40 md:w-64 bg-linear-to-r from-brand-hover to-transparent" />
          <p className="text-brand text-sm md:text-lg tracking-widest uppercase">{t('tagline')}</p>
        </div>

        <p className="text-brand text-base mt-4 max-w-sm md:max-w-md">{t('description')}</p>

        <div className="flex flex-col md:flex-row gap-3 mt-6 w-fit">
          <Link
            href={`/${locale}/courses`}
            className="bg-brand-hover text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold shadow-md"
          >
            {t('btnCourses')}
          </Link>
          <Link
            href={`/${locale}/activities`}
            className="border-2 border-brand text-brand px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold"
          >
            {t('btnActivities')}
          </Link>
        </div>
      </div>
    </section>
  );
}
