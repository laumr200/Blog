"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Portfolio React",
    description: "Un portfolio moderne en React avec animations et responsive.",
    tech: "Next.js",
    image: "/images/contact.png",
    zip: "/downloads/deploiment-portafolio.zip",
    
  },
 
  {
    id: 2,
    name: "Restaurant Fullstack",
    description: "Un restaurant complet avec React.js.",
    tech: "rect",
    image: "/images/contact.png",
    zip: "/downloads/food-del.zip",
  } 
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
              <Image
                src={project.image}
                alt={project.name}
                width={64}
                height={64}
                className="object-cover rounded-lg border hover:scale-105 transition"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{project.name}</h2>
                <span className="inline-block text-xs bg-blue-100 dark:bg-[#223b5a] text-blue-700 dark:text-blue-200 px-2 py-1 rounded mt-1">{project.tech}</span>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-300 text-sm">{project.description}</p>
            <div className="flex justify-center mt-auto">
  <a
    href={project.zip}
    download
    className="flex items-center gap-2 px-4 py-2 bg-[#20406a] text-white rounded-lg font-semibold hover:bg-blue-700 transition"
  >
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3v10m0 0l-4-4m4 4l4-4"/><rect x="3" y="15" width="12" height="2" rx="1"/></svg>
    Télécharger
  </a>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}