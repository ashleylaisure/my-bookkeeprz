
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";


export default function DeleteBook({ book }: { book: Books }) {

    function handleDelete(e: React.FormEvent) {
        e.preventDefault(); // prevent redirect/reload
        console.log("Delete book:", book.title);
        // later you'll hook into your delete API/mutation here
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="ghost"
                    className="ml-auto flex items-center gap-2"
                >
                    <Trash2 className="w-4 h-4" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription className="text-[15px]">
                        {`This action cannot be undone. This will permanently delete ${book.title} from our servers.`}
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <form onSubmit={handleDelete}>
                    <AlertDialogFooter>
                        <AlertDialogCancel type="button">Cancel</AlertDialogCancel>
                        <AlertDialogAction type="submit">Confirm Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>
    );
}
