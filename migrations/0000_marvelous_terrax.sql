CREATE TABLE "posts" (
	"id" integer PRIMARY KEY NOT NULL,
	"image" text NOT NULL,
	"category" text NOT NULL,
	"title" text NOT NULL,
	"date" text NOT NULL,
	"excerpt" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sections" (
	"id" integer PRIMARY KEY NOT NULL,
	"post_id" integer NOT NULL,
	"subtitle" text NOT NULL,
	"content" text NOT NULL,
	"image" text
);
