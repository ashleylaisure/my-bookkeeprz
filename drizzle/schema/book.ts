import { pgTable, text, integer, timestamp, varchar, boolean, pgEnum, uuid, numeric } from "drizzle-orm/pg-core";
import { user } from "./auth";
import { InferSelectModel, relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import z from "zod";
import { genreValues } from "@/constants";


// ---------------------------------------------
// 1️⃣ ENUMS
// ---------------------------------------------
export const genreEnum= pgEnum("genre", genreValues as [string, ...string[]]);

export const statusEnum = pgEnum("status", [
    "to_be_read",
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

    status: statusEnum("status").default("to_be_read").notNull(),
    rating: numeric("rating", {precision: 3, scale: 2}).default("0"), // Changed to numeric to support decimal values like 4.5
    dateStarted: timestamp("date_started"),
    dateFinished: timestamp("date_finished"),
    currentPage: integer("current_page").default(0),
    format: formatEnum("format").default("physical_paperback"),
    review: text("review"),
    reRead: boolean("re_read").default(false).notNull(),
    
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull().$onUpdate(() => new Date()),
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
    // genre: (schema) => schema.refine((val) => genreValues.includes(val), { message: "Genre is required" }),
    coverUrl: (schema) => schema.optional().nullable(),
    status: (schema) => schema.optional(),
    rating: (schema) => schema.optional().nullable().refine((val) => (Number(val) >= 0 && Number(val) <= 6), { message: "Rating must be between 0 and 6" }),
    dateStarted: (schema) => schema.optional().nullable(),
    dateFinished: (schema) => schema.optional().nullable(),
    currentPage: (schema) => schema.optional().refine((val) => val === undefined || val >= 0, { message: "Current page cannot be negative" }),
    format: (schema) => schema.optional(),
    review: (schema) => schema.optional().nullable(),
    reRead: (schema) => schema.optional(),
})
    .omit({ userId: true, createdAt: true, updatedAt: true })
    .refine((data) =>  !data.dateFinished || !data.dateStarted || data.dateFinished >= data.dateStarted, { message: "Date finished cannot be before date started", path: ["dateFinished"] })
;

export const bookSchema = z.union([
    z.object({
        mode: z.literal("create"),
        data: baseSchema.safeExtend({
            genre: z
                .string()
                .nonempty({ message: "Genre is required" })
                .refine((val) => genreValues.includes(val), { message: "Invalid genre selected" }),
        })
    }),
    z.object({
        mode: z.literal("edit"),
        data: baseSchema.partial().extend({
            id: z.number().min(1, { message: "ID is required for editing" }),
            genre: z
                .string()
                .nonempty({ message: "Genre is required" })
                .refine((val) => genreValues.includes(val), { message: "Invalid genre selected" }),
        })
    })
])

export type BookSchema = z.infer<typeof bookSchema>;
export type SelectBookModel = InferSelectModel<typeof book>;