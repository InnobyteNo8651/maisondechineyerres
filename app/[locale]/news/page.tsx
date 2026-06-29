import { getTranslations } from 'next-intl/server';

export const metadata = {
  title: "Actualités | Maison de Chine de Val d'Yerres",
  description: 'Restez informé des dernières nouvelles et événements',
}

type ArticleItem = {
  date: string;
  title: string;
  text: string;
};

type Props = { params: Promise<{ locale: string }> };

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'news' });
  const articles = t.raw('articles') as ArticleItem[];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-brand mb-4">{t('pageTitle')}</h1>
      <p className="text-xl text-gray-600 mb-12">{t('pageSubtitle')}</p>

      <div className="space-y-8">
        {articles.map((article, i) => (
          <article key={i} className="border-l-4 border-brand-hover pl-6 py-4">
            <p className="text-sm text-gray-500 mb-2">{article.date}</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{article.title}</h2>
            <p className="text-gray-700">{article.text}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
