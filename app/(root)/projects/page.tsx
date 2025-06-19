"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Portfolio React",
    description: "Un portfolio moderne en React avec animations et responsive.",
    tech: "React",
    image: "/images/contact.png",
    zip: "/downloads/portfolio-react.zip",
    github: "https://github.com/tonprofil/portfolio-react",
  },
  {
    id: 2,
    name: "Blog Next.js",
    description: "Un blog complet avec Next.js, markdown et commentaires.",
    tech: "Next.js",
    image: "/images/contact.png",
    zip: "/downloads/blog-nextjs.zip",
    github: "https://github.com/tonprofil/blog-nextjs",
  },
  {
    id: 3,
    name: "API Node.js",
    description: "API RESTful Node.js prête à l’emploi pour vos projets.",
    tech: "Node.js",
    image: "/images/contact.png",
    zip: "/downloads/api-nodejs.zip",
    github: "https://github.com/tonprofil/api-nodejs",
  },
];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f4faff] dark:bg-[#10141a] px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-center text-[#20406a] dark:text-blue-200">Projets disponibles</h1>
      <p className="text-center text-gray-500 dark:text-gray-300 mb-10">
        Téléchargez gratuitement mes projets open-source ou consultez le code source.
      </p>
      <div className="max-w-2xl mx-auto mb-8 flex items-center gap-2">
        <span className="text-gray-400 dark:text-gray-500">
          <svg width="22" height="22" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8" strokeWidth="2"/><path d="M21 21l-4.35-4.35" strokeWidth="2"/></svg>
        </span>
        <input
          type="text"
          placeholder="Rechercher un projet..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white dark:bg-[#181c24] text-gray-700 dark:text-gray-200"
        />
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.length === 0 && (
          <div className="col-span-2 text-center text-gray-500 dark:text-gray-400">Aucun projet trouvé.</div>
        )}
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-[#181c24] rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={project.image}
                alt={project.name}
                className="w-16 h-16 object-cover rounded-lg border hover:scale-105 transition"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{project.name}</h2>
                <span className="inline-block text-xs bg-blue-100 dark:bg-[#223b5a] text-blue-700 dark:text-blue-200 px-2 py-1 rounded mt-1">{project.tech}</span>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-300 text-sm">{project.description}</p>
            <div className="flex gap-3 mt-auto">
              <a
                href={project.zip}
                download
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#20406a] text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3v10m0 0l-4-4m4 4l4-4"/><rect x="3" y="15" width="12" height="2" rx="1"/></svg>
                Télécharger
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-[#232b3a] text-[#20406a] dark:text-blue-200 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-[#181c24] transition"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.03A9.38 9.38 0 0112 6.84c.84.004 1.68.11 2.47.32 1.92-1.3 2.75-1.03 2.75-1.03.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48C19.13 20.54 22 16.74 22 12.26 22 6.58 17.52 2 12 2z"/></svg>
                Voir le code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}