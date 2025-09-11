CREATE TYPE "public"."format" AS ENUM('audiobook', 'ebook', 'physical_hardcover', 'physical_paperback');--> statement-breakpoint
CREATE TYPE "public"."genre" AS ENUM('Action thriller', 'Action/Adventure fiction', 'Apocalyptic sci-fi', 'Art & photography', 'Autobiography/Memoir', 'Biography', 'Body horror', 'Caper', 'Children’s fiction', 'Classic fiction', 'Colonization sci-fi', 'Comedy horror', 'Conspiracy thriller', 'Contemporary fiction', 'Contemporary romance', 'Cozy mystery', 'Dark fantasy', 'Dark romance', 'Disaster thriller', 'Erotic romance', 'Espionage thriller', 'Essays', 'Fairy tales', 'Fantasy', 'Fantasy romance (Romantasy)', 'Folktales', 'Food & drink', 'Forensic thriller', 'Gothic horror', 'Gothic romance', 'Graphic novel', 'Gumshoe/Detective mystery', 'Hard sci-fi', 'Heroic fantasy', 'High fantasy', 'Historical fantasy', 'Historical fiction', 'Historical mystery', 'Historical romance', 'Historical thriller', 'History', 'Horror', 'Howdunnits', 'How-To/Guides', 'Humanities & social sciences', 'Humor', 'Legal thriller', 'LGBTQ+', 'Literary fiction', 'Locked room mystery', 'Lovecraftian/Cosmic horror', 'Low fantasy', 'Magical realism', 'Military sci-fi', 'Mind uploading sci-fi', 'Mystery', 'Mythic fantasy', 'New adult', 'Noir', 'Parallel world sci-fi', 'Paranormal horror', 'Paranormal romance', 'Paranormal thriller', 'Parenting', 'Philosophy', 'Post-apocalyptic horror', 'Procedural/Hard-boiled mystery', 'Psychological horror', 'Psychological thriller', 'Quiet horror', 'Regency', 'Religion & spirituality', 'Religious thriller', 'Romance', 'Romantic comedy', 'Romantic suspense', 'Satire', 'Science & technology', 'Science fiction', 'Sci-fi romance', 'Self-help', 'Short story', 'Slasher', 'Soft sci-fi', 'Space opera', 'Space western', 'Steampunk', 'Supernatural mystery', 'Thriller', 'Travel', 'True crime', 'Urban fantasy', 'Western', 'Women’s fiction', 'Young adult');--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('want_to_read', 'currently_reading', 'read', 'paused', 'dnf');--> statement-breakpoint
CREATE TABLE "book" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"title" varchar NOT NULL,
	"description" text,
	"page_count" integer,
	"audio_hours" integer,
	"genre" "genre" NOT NULL,
	"cover_url" text,
	"status" "status" DEFAULT 'want_to_read',
	"rating" integer,
	"date_started" timestamp,
	"date_finished" timestamp,
	"current_page" integer DEFAULT 0,
	"format" "format" DEFAULT 'physical_paperback',
	"notes" text,
	"re_read" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "book" ADD CONSTRAINT "book_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;