import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const images = [
  { src: '/images/course.png', alt: 'Cours' },
  { src: '/images/dragon.png', alt: 'Dragon' },
  { src: '/images/tea.png', alt: 'Thé' },
];

export default async function About({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'home' });

  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">{t('aboutTitle')}</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">{t('aboutText')}</p>
          </div>
          <div className="lg:col-span-2 flex flex-col md:flex-row gap-3 mx-8 md:mx-4 lg:mx-0">
            {images.map((img) => (
              <div key={img.src} className="relative rounded-xl overflow-hidden shadow-md aspect-4/3 md:flex-1">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
