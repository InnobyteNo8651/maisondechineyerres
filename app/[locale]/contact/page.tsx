export const metadata = {
  title: "Contact | Maison de Chine de Val d'Yerres",
  description: "Contactez la Maison de Chine de Val d'Yerres",
}

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-brand mb-4">Contact</h1>
      <p className="text-xl text-gray-600 mb-12">N&apos;hésitez pas à nous contacter pour toute question</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Adresse</h3>
            <p className="text-gray-700">
              Maison de Chine de Val d&apos;Yerres<br />
              Yerres<br />
              Île-de-France, France
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Téléphone</h3>
            <a href="tel:+33123456789" className="text-brand-hover hover:underline">
              +33 (0)1 23 45 67 89
            </a>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
            <a href="mailto:contact@maisondechineyerres.fr" className="text-brand-hover hover:underline">
              contact@maisondechineyerres.fr
            </a>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Horaires</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Lundi – Vendredi : 10h – 20h</li>
              <li>Samedi : 10h – 18h</li>
              <li>Dimanche : Fermé</li>
            </ul>
          </div>
        </div>

        <form className="space-y-6 bg-gray-50 p-8 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Nom</label>
            <input
              type="text"
              required
              placeholder="Votre nom"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
            <input
              type="email"
              required
              placeholder="votre@email.com"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Objet</label>
            <input
              type="text"
              required
              placeholder="Objet de votre message"
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
            <textarea
              rows={5}
              required
              placeholder="Votre message..."
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand-hover text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  )
}
