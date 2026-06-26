import Hero from '@/components/Hero';
import { ServiceCards } from '@/components/ServiceCards';
import About from '@/components/About';

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Hero locale={locale} />
      <ServiceCards locale={locale} />
      <About locale={locale} />
    </>
  );
}
