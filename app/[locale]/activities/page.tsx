export const metadata = {
  title: "Activités | Maison de Chine de Val d'Yerres",
  description: 'Explorez nos activités culturelles et événements',
}

const activities = [
  { title: 'Ateliers de calligraphie',  description: "Découvrez l'art millénaire de la calligraphie chinoise", icon: '🖌️' },
  { title: 'Musique traditionnelle',    description: 'Apprenez les instruments traditionnels chinois',         icon: '🎵' },
  { title: 'Arts martiaux',             description: 'Tai Chi, Kung Fu et autres disciplines',                 icon: '🥋' },
  { title: 'Fêtes traditionnelles',     description: 'Célébrez le Nouvel An chinois et autres festivités',     icon: '🎊' },
  { title: 'Cuisine chinoise',          description: 'Ateliers de cuisine et dégustations',                    icon: '🥢' },
  { title: 'Échanges culturels',        description: 'Rencontres et débats interculturels',                    icon: '🌏' },
]

export default function ActivitiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-brand mb-4">Activités Culturelles</h1>
      <p className="text-xl text-gray-600 mb-12">Explorez la richesse de la culture chinoise à travers diverses activités</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {activities.map((activity, i) => (
          <div key={i} className="border-2 border-gray-200 rounded-lg p-6 hover:border-brand-hover hover:shadow-lg transition-all">
            <div className="text-4xl mb-4">{activity.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
            <p className="text-gray-700">{activity.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border-l-4 border-brand p-6 rounded">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Prochains événements</h2>
        <p className="text-gray-700 mb-4">Consultez notre calendrier pour connaître les prochaines dates d&apos;activités.</p>
        <a href="/news" className="inline-block bg-brand-hover text-white px-6 py-2 rounded-lg font-medium">
          Voir les actualités
        </a>
      </div>
    </div>
  )
}
