export const metadata = {
  title: "À propos | Maison de Chine de Val d'Yerres",
}

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-brand mb-4">À propos de nous</h1>
      <p className="text-xl text-gray-600 mb-12">
        Association loi 1901 dédiée à la promotion de la langue et de la culture chinoises
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        Maison de Chine de Val d&apos;Yerres est une association à but non lucratif dédiée à la
        promotion de la langue chinoise et de la culture chinoise, ainsi qu&apos;au renforcement
        des liens entre les cultures chinoise et française.
      </p>
    </div>
  )
}
