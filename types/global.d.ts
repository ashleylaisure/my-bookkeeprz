type BookStatus = "currently-reading" | "want-to-read" | "read" | "dnf";

interface Books {
    id: string;
    coverUrl?: string;
    title: string;
    author: string;
    genre: string;
    reviews: number;
    rating: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}