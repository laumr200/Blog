"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "./theme-swicher";

export default function Header() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-[#d0e7ff] dark:bg-[#18223a] shadow-md flex flex-col items-center py-8">
      {/* Logo */}
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/images/03.jpg"
          alt="Logo du blog"
          width={80}
          height={80}
          className="rounded-full mb-4"
        />
        <h2 className="text-lg font-bold text-gray-900 dark:text-blue-200">Blog Informatique</h2>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 w-full px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#232b3a] transition-all"
        >
          Accueil
        </Link>
        <Link
          href="/posts"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#232b3a] transition-all"
        >
          Articles
        </Link>
        <Link
          href="/projects"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#232b3a] transition-all"
        >
          Projects
        </Link>
        <Link
          href="/servises"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#232b3a] transition-all"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#232b3a] transition-all"
        >
          Contact
        </Link>
        <Link
          href="/a-propos"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#232b3a] transition-all"
        >
          À propos
        </Link>
      </nav>

      <div className="mt-auto flex justify-center w-full pt-8">
        <ThemeSwitcher />
      </div>
    </aside>
  );
}