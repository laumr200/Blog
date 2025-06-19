import Link from "next/link";
import { getAllPosts } from "@/lib/actions/blog";
import Image from "next/image";


export default async function PostsPage() {
  const articles = await getAllPosts();

  const filteredArticles = articles;
  

  return (
    <div className="min-h-screen bg-[#f4faff] dark:bg-[#10141a] px-8 py-8">
      <h1 className="text-6xl font-serif font-bold text-center mb-10 tracking-wide text-[#20406a] dark:text-blue-200">
        ARTICLES
      </h1>
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