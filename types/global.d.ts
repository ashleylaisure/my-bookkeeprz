type BookStatus = "currently-reading" | "want-to-read"| "paused" | "read" | "dnf";

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
    rating?: number | null;
    dateStarted?: Date | null;
    dateFinished?: Date | null;
    currentPage?: number;
    format: string;
    notes?: string | null;
    reRead?: boolean;
    createdAt: Date;
    updatedAt: Date;
}