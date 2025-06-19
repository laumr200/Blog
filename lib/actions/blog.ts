import { db } from "@/db/drizzle"; // adapte le chemin si besoin
import { posts, sections } from "@/db/schema";
import { eq, desc, sql } from "drizzle-orm"; // Import eq and desc functions

// Fonction pour récupérer tous les articles
export async function getAllPosts() {
  return await db.select().from(posts);
}


// Fonction pour récupérer un post et ses sections
export async function getPostWithSections(postId: number) {
  const post = await db.select().from(posts).where(eq(posts.id, postId)).then(rows => rows[0]);
  if (!post) return null;
  const postSections = await db.select().from(sections).where(eq(sections.postId, postId));
  return { post, postSections };
}

export async function getLatestPosts(limit = 3) {
  return await db.select().from(posts).orderBy(desc(posts.date)).limit(limit);
}

export async function getCategoriesCount() {
  
  const result = await db.execute(
    sql`SELECT category, COUNT(*) as count FROM ${posts} GROUP BY category`
  );
  // Formatage du résultat
  const counts: Record<string, number> = {};
  for (const row of result.rows as { category: string; count: number }[]) {
    counts[row.category] = Number(row.count);
  }
  return counts;
}