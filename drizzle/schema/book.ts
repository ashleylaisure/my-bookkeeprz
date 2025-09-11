import { pgTable, text, integer, timestamp, varchar, boolean, serial, pgEnum, uuid } from "drizzle-orm/pg-core";
import { user } from "./auth";
import { genreArray as _genreArray } from "@/constants";
import { InferSelectModel, relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import z from "zod";


// ---------------------------------------------
// 1️⃣ ENUMS
// ---------------------------------------------
const genreArray = _genreArray as [string, ...string[]];
export const genreEnum= pgEnum("genre", genreArray);

export const statusEnum = pgEnum("status", [
    "want_to_read",
    "currently_reading",
    "read",
    "paused",
    "dnf"
]);

export const formatEnum = pgEnum("format", [
    "audiobook",
    "ebook",
    "physical_hardcover",
    "physical_paperback"
]);

// ---------------------------------------------
// 2️⃣ TABLE DEFINITION
// ---------------------------------------------
export const book = pgTable("book", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),

    title: varchar("title").notNull(),
    description: text("description"),
    pageCount: integer("page_count"),
    audioHours: integer("audio_hours"),
    genre: genreEnum("genre").notNull(),
    coverUrl: text("cover_url"),

    status: statusEnum("status").default("want_to_read"),
    rating: integer("rating"),
    dateStarted: timestamp("date_started"),
    dateFinished: timestamp("date_finished"),
    currentPage: integer("current_page").default(0),
    format: formatEnum("format").default("physical_paperback"),
    notes: text("notes"),
    reRead: boolean("re_read").default(false).notNull(),
    
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});


// ---------------------------------------------
// 3️⃣ RELATIONS
// ---------------------------------------------
export const bookRelations = relations(book, ({ one }) => ({
    // book(many) --> user(1)
    user: one(user, {
        fields: [book.userId],
        references: [user.id],
    }),
}));

// ---------------------------------------------
// 4️⃣ ZOD SCHEMAS
// ---------------------------------------------
const baseSchema = createInsertSchema(book, {
    title: (schema) => schema.min(1, { message: "Title is required" }),
    description: (schema) => schema.optional().nullable(),
    pageCount: (schema) => schema.optional().nullable().refine((val) => val === undefined || val === null || val > 0, { message: "Page count must be greater than 0" }),
    audioHours: (schema) => schema.optional().nullable().refine((val) => val === undefined || val === null || val > 0, { message: "Audio hours must be greater than 0" }),
    genre: (schema) => schema.refine((val) => genreArray.includes(val), { message: "Invalid genre" }),
    coverUrl: (schema) => schema.optional().nullable(),
    status: (schema) => schema.optional(),
    rating: (schema) => schema.optional().nullable().refine((val) => val === undefined || val === null || (val >= 1 && val <= 5), { message: "Rating must be between 1 and 5" }),
    dateStarted: (schema) => schema.optional().nullable(),
    dateFinished: (schema) => schema.optional().nullable(),
    currentPage: (schema) => schema.optional().refine((val) => val === undefined || val >= 0, { message: "Current page cannot be negative" }),
    format: (schema) => schema.optional(),
    notes: (schema) => schema.optional().nullable(),
    reRead: (schema) => schema.optional(),
}).omit({ userId: true, createdAt: true, updatedAt: true });

export const bookSchema = z.union([
    z.object({
        mode: z.literal("create"),
        data: baseSchema,
    }),
    z.object({
        mode: z.literal("edit"),
        data: baseSchema.partial().extend({
            id: z.number().min(1, { message: "ID is required for editing" }),
        })
    })
])

export type BookSchema = z.infer<typeof bookSchema>;
export type SelectBookModel = InferSelectModel<typeof book>;