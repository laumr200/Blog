import Link from "next/link";
import { getAllPosts } from "@/lib/actions/blog";
import Image from "next/image";


export default async function PostsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string | string[] }>;
}) {
  const { category } = await searchParams;
  const selectedCategory = typeof category === "string" ? category : undefined;
  const articles = await getAllPosts();

  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category === selectedCategory)
    : articles;
  

  return (
    <div className="min-h-screen bg-[#f4faff] dark:bg-[#10141a] px-8 py-8">
      <h1 className="text-6xl font-serif font-bold text-center mb-10 tracking-wide text-[#20406a] dark:text-blue-200">
        {selectedCategory || "ARTICLES"}
      </h1>
      {selectedCategory && (
        <div className="text-center mb-8">
          <Link href="/posts" className="text-blue-600 dark:text-blue-300 hover:underline">
            Voir tous les articles
          </Link>
        </div>
      )}
      {filteredArticles.length === 0 && (
        <p className="text-center text-gray-700 dark:text-gray-300">
          Aucun article pour le moment.
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <Link
            key={article.id}
            href={`/continuation-posts/${article.id}`}
            className="bg-white dark:bg-[#181c24] rounded shadow-sm p-0 overflow-hidden flex flex-col hover:scale-105 transition-transform"
            style={{ textDecoration: "none" }}
          >
            
            <Image
              src={article.image}
              alt={article.title}
              width={600}
              height={400}
              className="w-full h-44 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <span
                className={`inline-block px-3 py-1 text-xs font-semibold rounded mb-2 bg-[#20406a] text-white dark:bg-[#223b5a] dark:text-blue-200`}
              >
                {article.category}
              </span>
              <h2 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">{article.title}</h2>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{article.date}</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}