import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export const metadata = {
  title: "Activités | Maison de Chine de Val d'Yerres",
  description: 'Explorez nos activités culturelles et événements',
}

type ActivityItem = {
  title: string;
  description: string;
  icon: string;
};

type Props = { params: Promise<{ locale: string }> };

export default async function ActivitiesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'activities' });
  const activitiesList = t.raw('list') as ActivityItem[];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-brand mb-4">{t('pageTitle')}</h1>
      <p className="text-xl text-gray-600 mb-12">{t('pageSubtitle')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {activitiesList.map((activity, i) => (
          <div key={i} className="border-2 border-gray-200 rounded-lg p-6 hover:border-brand-hover hover:shadow-lg transition-all">
            <div className="text-4xl mb-4">{activity.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
            <p className="text-gray-700">{activity.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border-l-4 border-brand p-6 rounded">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{t('ctaTitle')}</h2>
        <p className="text-gray-700 mb-4">{t('ctaText')}</p>
        <Link href={`/${locale}/news`} className="inline-block bg-brand-hover text-white px-6 py-2 rounded-lg font-medium">
          {t('ctaBtn')}
        </Link>
      </div>
    </div>
  )
}
