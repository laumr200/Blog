import { pgTable, text, integer } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: integer("id").primaryKey(),
  image: text("image").notNull(),      // Image principale (background)
  category: text("category").notNull(),
  title: text("title").notNull(),      // Titre principal
  date: text("date").notNull(),
  excerpt: text("excerpt").notNull(),
});

export const sections = pgTable("sections", {
  id: integer("id").primaryKey(),
  postId: integer("post_id").notNull(),         // Clé étrangère vers posts.id
  subtitle: text("subtitle").notNull(),         // Sous-titre de la section
  content: text("content").notNull(),           // Texte de la section
  image: text("image"),                         // Image optionnelle
});


//npx drizzle-kit generate(Pour générer les migrations)
//npx drizzle-kit migrate(Pour appliquer les migrations a la base )