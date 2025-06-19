"use client";

export default function ServicesPage() {
  const services = [
    {
      title: "Développement de sites web",
      description: "Création de sites vitrines, blogs, portfolios ou applications web modernes et responsives adaptés à vos besoins.",
      icon: "🌐",
    },
    {
      title: "Développement d'applications sur-mesure",
      description: "Conception et réalisation d'applications web personnalisées avec React, Next.js, Node.js, etc.",
      icon: "⚙️",
    },
    {
      title: "Création et intégration d'API",
      description: "Développement d’API RESTful robustes et sécurisées pour connecter vos services et applications.",
      icon: "🔗",
    },
    {
      title: "Audit & optimisation de code",
      description: "Analyse, amélioration des performances, sécurité, accessibilité et bonnes pratiques de votre code existant.",
      icon: "🔍",
    },
    {
      title: "Maintenance & support technique",
      description: "Assistance, corrections de bugs, évolutions et suivi technique pour garantir la stabilité de vos projets.",
      icon: "🛠️",
    },
    {
      title: "Formation & coaching",
      description: "Accompagnement personnalisé pour apprendre la programmation, les frameworks modernes ou progresser sur vos projets.",
      icon: "🎓",
    },
    {
      title: "Intégration de maquettes UI/UX",
      description: "Intégration fidèle de vos designs (Figma, Adobe XD…) en HTML, CSS, React ou Next.js.",
      icon: "🎨",
    },
    {
      title: "Conseil & accompagnement digital",
      description: "Aide au choix des technologies, à la gestion de projet et à la stratégie digitale.",
      icon: "💡",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4faff] dark:bg-[#10141a] px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center text-[#20406a] dark:text-blue-200">
        Services informatiques & programmation
      </h1>
      <p className="text-center text-gray-500 dark:text-gray-300 mb-10">
        Découvrez les services proposés pour accompagner vos projets numériques, du développement à la formation.
      </p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-[#181c24] rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex gap-4 items-start"
          >
            <div className="text-4xl">{service.icon}</div>
            <div>
              <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{service.title}</h2>
              <p className="text-gray-500 dark:text-gray-300 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}