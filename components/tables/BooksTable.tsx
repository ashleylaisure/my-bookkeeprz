'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Pen, Trash } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation";
import EditBook from "../modals/book/EditBook";
import DeleteBook from "../modals/book/DeleteBook";

interface BooksTableProps {
    books: Books[]
}

export default function BooksTable({ books }: BooksTableProps) {
    const router = useRouter();

    // Search functionality to be added later
    // Filter functionality to be added later

    return (
        <>
            <Table>
                <TableCaption>A list of your recent Books.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Title</TableHead>
                        <TableHead>Genre</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead className="text-right"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {books.map((book) => (
                        <TableRow key={book.id} onClick={() => router.push(`/books/${book.id}`)} className="cursor-pointer hover:bg-gray-50">
                            <TableCell className="font-medium">{book.title}</TableCell>
                            <TableCell>{book.genre}</TableCell>
                            <TableCell>{book.status}</TableCell>
                            <TableCell>{book.rating}</TableCell>
                            <TableCell className="text-right">
                                <div className="flex justify-end space-x-4" onClick={(e) => e.stopPropagation()}>
                                    <Pen className="cursor-pointer hover:text-blue-500" size={16} />
                                    <DeleteBook book={book} />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}
