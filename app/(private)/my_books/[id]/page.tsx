import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/navigation/Header";
import ROUTES from "@/constants/routes";
import DeleteBook from "@/components/modals/book/DeleteBook";
type RouteParams = {
  // Example: if your route is /books/[id]
    id: string;
};

const book = {
id: "3",
userId: "user-123",
title: "Circe",
genre: "Mythic fantasy",
rating: 4.6,
status: "currently_reading" as BookStatus,
format: "physical_hardcover",
createdAt: new Date("2023-07-05"),
updatedAt: new Date(),
}; // Placeholder for actual book data

const BookDetailsPage = async ({params}: {params: RouteParams}) => {

    const { id } = params;
    // const book = await getBookById(id); // Assume this function fetches book details by ID
    return (
        <>
            <Header 
                title="Book Details"
                subtitle="Detailed view of the selected book."
                href={ROUTES.MY_BOOKS}
                buttonText="Back to Books List"
            />
            <Card className="max-w">
                <div className="flex flex-row">
                    <div className="basis-2/4">
                        <CardHeader>
                            {/* {book.coverUrl && (
                                <div className="rounded-lg overflow-hidden">
                                <img
                                    src={book.coverUrl}
                                    alt="Post content"
                                    className="w-full h-auto object-cover"
                                />
                                </div>
                            )} */}
                        </CardHeader>
                    </div>
                    <div className="basis-2/4 flex flex-col justify-between">
                        <CardContent className="mt-8 space-y-3">
                            <CardTitle className="text-5xl font-bold">{book.title}</CardTitle>
                            <CardTitle className="text-3xl font-bold">{book.status}</CardTitle>
                            <Badge>{book.genre}</Badge>
                            <CardDescription>Rating: {book.rating}</CardDescription>
                            <CardDescription>{book.format}</CardDescription>
                            {/* <DeleteBook book={book.id} /> */}
                        </CardContent>
                    </div>
                </div>
            </Card>
        </>
    );
};
export default BookDetailsPage;