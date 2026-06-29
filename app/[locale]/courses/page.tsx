import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export const metadata = {
  title: "Cours de Chinois | Maison de Chine de Val d'Yerres",
  description: 'Des cours adaptés à tous les âges et tous les niveaux',
}

type CourseItem = {
  title: string;
  level: string;
  description: string;
};

type Props = { params: Promise<{ locale: string }> };

export default async function CoursesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'courses' });
  const coursesList = t.raw('list') as CourseItem[];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-brand mb-4">{t('pageTitle')}</h1>
      <p className="text-xl text-gray-600 mb-12">{t('pageSubtitle')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {coursesList.map((course, i) => (
          <div key={i} className="border-2 border-gray-200 rounded-lg p-6 hover:border-brand-hover transition-colors">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
            <p className="text-brand-hover font-medium mb-3">{course.level}</p>
            <p className="text-gray-700">{course.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border-l-4 border-brand p-6 rounded flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{t('ctaTitle')}</h2>
          <p className="text-gray-700">{t('ctaText')}</p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href="https://forms.gle/maisondechineyerres"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-hover text-white px-6 py-2.5 rounded-lg font-semibold transition-opacity hover:opacity-90 shadow-sm"
          >
            {t('ctaBtnRegister')}
          </a>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-2.5 rounded-lg font-semibold transition-colors"
          >
            {t('ctaBtnContact')}
          </Link>
        </div>
      </div>
    </div>
  )
}
