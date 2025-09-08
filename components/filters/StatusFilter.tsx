import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from '../ui/card';
import BookCard from '../cards/BookCard';

const readingStatus = [
    { name: "Currently Reading", value: "currently-reading" },
    { name: "Want to Read", value: "want-to-read" },
    { name: "Read", value: "read" },
    { name: "DNF", value: "dnf" },
]

const StatusFilter = ({books}: {books: Books[]}) => {

    const booksByStatus: Record<BookStatus, Books[]> = {
        "currently-reading": books?.filter((book) => book.status === "currently-reading") || [],
        "want-to-read": books?.filter((book) => book.status === "want-to-read") || [],
        "read": books?.filter((book) => book.status === "read") || [],
        "dnf": books?.filter((book) => book.status === "dnf") || [],
    };

    return (
        <Tabs defaultValue="currently-reading" className="w-full mt-5">
            <TabsList className="w-full flex gap-2">
                {readingStatus.map((status) => (
                    <TabsTrigger key={status.value} value={status.value} className="body-medium py-3 capitalize">
                        {status.name} ({booksByStatus[status.value as BookStatus].length || 0})
                    </TabsTrigger>
                ))}
            </TabsList>

            {Object.entries(booksByStatus).map(([status, statusBooks]) => (
                <TabsContent key={status} value={status}>
                    {statusBooks.length === 0 ? (
                        <Card>
                            <CardContent className="p-8 text-center">
                                <p className="text-muted-foreground">No books in this category</p>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {statusBooks.map((book) => (
                                <BookCard key={book.id} book={book} />
                            ))}
                        </div>
                    )}
                </TabsContent>
            ))}
        </Tabs>
    )
}

export default StatusFilter
