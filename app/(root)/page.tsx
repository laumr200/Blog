
import { getCategoriesCount, getLatestPosts } from "@/lib/actions/blog";


export default async function Home() {
  const latestArticles = await getLatestPosts(3);

   const categoriesCount = await getCategoriesCount();

  // Liste des catégories à afficher
  const categories = [
    { name: "Web Development", key: "Web Development", icon: "🌐" },
    { name: "DevOps", key: "DevOps", icon: "🖥️" },
    { name: "Cybersécurité", key: "Cybersécurité", icon: "🔒" },
    { name: "IA & Machine Learning", key: "IA & Machine Learning", icon: "🤖" },
    { name: "Bases de données", key: "Bases de données", icon: "💾" },
    { name: "Développement mobile", key: "Développement mobile", icon: "📱" },
    { name: "Langages de programmation", key: "Langages de programmation", icon: "💻" },
    { name: "Performance", key: "Performance", icon: "⚡" },
  ];
  
  return (
    <div className="min-h-screen bg-[#f4faff] dark:bg-[#10141a]">
      {/* Header */}
      <header className="py-16 bg-gradient-to-br from-[#f4faff] via-[#eaf0fb] to-[#dbeafe] dark:from-[#10141a] dark:via-[#181c24] dark:to-[#232b3a]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Texte à gauche */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-700 dark:bg-[#223b5a] dark:text-blue-200 rounded-full font-medium text-sm shadow">
              Bienvenue sur Laura Dev
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#20406a] dark:text-blue-200 leading-tight tracking-tight drop-shadow">
              Le blog pour passionnés d'informatique
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
              Derniers articles, conseils, tutoriels et ressources pour progresser dans le développement, la tech et l'IA.
            </p>
            <a
              href="/posts"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#20406a] to-[#3bb0f9] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition text-lg"
            >
              Découvrir les articles
            </a>
          </div>
          {/* Image à droite */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              <img
                src="/images/home.png"
                alt="Illustration informatique"
                className="w-[980px] max-w-full h-auto rounded-2xl shadow-2xl border-4 border-white dark:border-[#232b3a]"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-[#232b3acc] backdrop-blur px-6 py-2 rounded-full shadow text-[#20406a] dark:text-blue-200 font-semibold text-base">
                Laura Dev • Blog Tech
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section Explorer les catégories */}
       <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Explorer les catégories</h2>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            Plongez dans vos sujets technologiques préférés avec notre contenu catégorisé
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <div key={cat.key} className="bg-white dark:bg-[#181c24] rounded-lg p-6 shadow-md flex flex-col items-center">
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{cat.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {categoriesCount[cat.key] ?? 0} articles
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Articles récents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Articles récents</h2>
            <a
              href="/posts"
              className="text-blue-600 dark:text-blue-300 hover:underline font-medium"
            >
              Voir tous les articles
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white dark:bg-[#181c24] rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-blue-600 dark:text-blue-300 text-sm font-medium bg-blue-100 dark:bg-[#223b5a] px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-4">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center mt-4">
                    {/* Ajoute un avatar ou laisse vide si tu n'as pas d'auteur */}
                  </div>
                  <a
                    href={`/continuation-posts/${article.id}`}
                    className="text-blue-600 dark:text-blue-300 font-medium mt-4 inline-block"
                  >
                    Lire plus →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section S'inscrire pour des notifications */}
      <section className="py-16 bg-[#20406a] dark:bg-[#10141a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Restez informé avec Laura Dev</h2>
          <p className="text-lg mb-8">
            Recevez chaque semaine des tutoriels, des actualités technologiques et des conseils directement dans votre boîte mail.
          </p>
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Entrez votre adresse e-mail"
              className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white dark:bg-[#232b3a] dark:text-white"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-[#232b3a] text-blue-600 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-[#181c24] transition-all"
            >
              S'inscrire <span>📧</span>
            </button>
          </form>
          <p className="text-sm mt-4">
            Nous respectons votre vie privée. Vous pouvez vous désabonner à tout moment.
          </p>
        </div>
      </section>
    </div>
  );
}