type BookStatus = "currently-reading" | "want-to-read" | "read" | "dnf";

interface Books {
    id: number;
    title: string;
    author: string;
    genre: string;
    reviews: number;
    rating: number;
    status: string;
}