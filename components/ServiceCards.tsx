import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { services } from '@/lib/constants';

export async function ServiceCards({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'services' });

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/${locale}${service.href}`}
              className="group rounded-xl shadow-lg ring-1 ring-gray-200 hover:shadow-2xl hover:ring-red-200 transition-all bg-white py-4 px-4 flex items-center gap-4"
            >
              <div className="relative shrink-0 w-16 h-16 md:w-20 md:h-20">
                <Image src={service.image} alt={t(`${service.id}.title`)} fill className="object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{t(`${service.id}.title`)}</h3>
                <p className="text-base text-gray-600 mb-3">{t(`${service.id}.description`)}</p>
                <div className="flex items-center gap-2 text-brand-hover font-medium text-sm">
                  {t('learnMore')} <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
