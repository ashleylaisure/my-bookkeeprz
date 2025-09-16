type BookStatus = "currently-reading" | "to-be-read"| "paused" | "read" | "dnf";

// Interface for Author

// Interface for Bookshelf

interface Books {
    id: string;
    userId: string;
    title: string;
    description?: string | null;
    pageCount?: number | null;
    audioHours?: number | null;
    genre: string;
    coverUrl?: string | null;
    status: BookStatus;
    rating?: string | null;
    dateStarted?: Date | null;
    dateFinished?: Date | null;
    currentPage?: number;
    format: string;
    review?: string | null;
    reRead?: boolean;
    createdAt: Date;
    updatedAt: Date;
}