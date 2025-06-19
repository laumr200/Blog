"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f4faff] dark:bg-[#10141a] px-4 py-12 flex flex-col items-center">
      <div className="bg-white dark:bg-[#181c24] rounded-xl shadow-lg p-8 max-w-2xl w-full flex flex-col items-center">
        <img
          src="/images/03.jpg"
          alt="Photo de Laura"
          className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-[#20406a] dark:border-blue-200 shadow"
        />
        <h1 className="text-3xl font-bold mb-2 text-[#20406a] dark:text-blue-200">À propos de moi</h1>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
          Bonjour, je m'appelle Laura, passionnée d'informatique, de développement web et de partage de connaissances. 
          J'aime explorer les nouvelles technologies, créer des projets utiles et aider les autres à progresser dans le monde du numérique.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-[#20406a] dark:text-blue-200">Pourquoi ce site&nbsp;?</h2>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
          J'ai créé ce blog pour partager mes découvertes, mes tutoriels et mes projets open-source avec la communauté. 
          Mon objectif est de rendre l'apprentissage de la programmation accessible à tous, de proposer des ressources de qualité et d'inspirer d'autres passionnés à se lancer ou à progresser dans le développement web.
        </p>
        <div className="mt-6 text-center">
          <span className="inline-block bg-gradient-to-r from-[#20406a] to-[#3bb0f9] text-white px-8 py-3 rounded-full font-semibold shadow-lg text-lg">
            Merci de votre visite et bonne exploration&nbsp;!
          </span>
        </div>
      </div>
    </div>
  );
}