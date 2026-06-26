import Link from 'next/link';

export const metadata = {
  title: "Cours de Chinois | Maison de Chine de Val d'Yerres",
  description: 'Des cours adaptés à tous les âges et tous les niveaux',
}

const courses = [
  { title: 'Cours pour enfants',    level: '4–8 ans',     description: 'Initiation ludique à la langue et la culture chinoise' },
  { title: 'Cours pour enfants',    level: '8–12 ans',    description: 'Apprentissage structuré avec jeux et activités' },
  { title: 'Cours pour adolescents',level: '12–18 ans',   description: 'Préparation aux examens et conversations' },
  { title: 'Cours pour adultes',    level: 'Tous niveaux',description: 'Du débutant à avancé, à votre rythme' },
]

type Props = { params: Promise<{ locale: string }> };

export default async function CoursesPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-brand mb-4">Cours de Chinois</h1>
      <p className="text-xl text-gray-600 mb-12">Des cours adaptés à tous les âges et tous les niveaux</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {courses.map((course, i) => (
          <div key={i} className="border-2 border-gray-200 rounded-lg p-6 hover:border-brand-hover transition-colors">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
            <p className="text-brand-hover font-medium mb-3">{course.level}</p>
            <p className="text-gray-700">{course.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border-l-4 border-brand p-6 rounded">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Envie de nous rejoindre ?</h2>
        <p className="text-gray-700 mb-4">Contactez-nous pour plus d&apos;informations sur nos horaires, tarifs et disponibilités.</p>
        <Link href={`/${locale}/contact`} className="inline-block bg-brand-hover text-white px-6 py-2 rounded-lg font-medium">
          Me contacter
        </Link>
      </div>
    </div>
  )
}
