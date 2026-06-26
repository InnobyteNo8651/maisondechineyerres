export const metadata = {
  title: "Actualités | Maison de Chine de Val d'Yerres",
  description: 'Restez informé des dernières nouvelles et événements',
}

const articles = [
  {
    date: '15 Décembre 2024',
    title: 'Fête du Nouvel An Chinois 🎊',
    text: "Rejoignez-nous pour célébrer le Nouvel An chinois avec danses du lion, concerts, et dégustations de spécialités culinaires !",
  },
  {
    date: '1er Décembre 2024',
    title: 'Inscriptions ouvertes pour les nouveaux cours',
    text: "Les inscriptions pour les cours de chinois de janvier sont maintenant ouvertes. Tous les niveaux et tous les âges acceptés.",
  },
  {
    date: '15 Novembre 2024',
    title: 'Atelier de calligraphie spécial',
    text: "Un maître calligraphe nous visite ! Ateliers gratuits pour tous les niveaux.",
  },
]

export default function NewsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-brand mb-4">Actualités</h1>
      <p className="text-xl text-gray-600 mb-12">Les dernières nouvelles de la Maison de Chine</p>

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
