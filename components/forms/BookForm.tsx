'use client'
import { bookSchema } from "@/drizzle/schema/book";
import { zodResolver } from "@hookform/resolvers/zod";
import { genreOptions } from "@/constants";
import z from "zod";

import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react"
import { format as formatDate } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { useForm } from "react-hook-form";
import { useState } from "react";


// 🔹 Extract just the create mode schema
const createBookSchema = bookSchema._def.options[0].shape.data;

// 🔹 Infer type for the form values
type CreateBookForm = z.infer<typeof createBookSchema>;


const BookForm = () => {

    const [hoverValue, setHoverValue] = useState<number | null>(null);

    const form = useForm<CreateBookForm>({
        resolver: zodResolver(createBookSchema),
        defaultValues: {
            title: "",
            description: "",
            pageCount: undefined,
            audioHours: undefined,
            genre: "",
            coverUrl: "",
            status: "to_be_read",
            rating: "0",
            dateStarted: undefined,
            dateFinished: undefined,
            currentPage: 0,
            format: "physical_paperback",
            review: "",
            reRead: false,
        },
    })

    const format = form.watch("format");
    const status = form.watch("status");
    const handleCreateBook = () => {
        // Handle form submission logic here
    }

    const handleCancelChanges = () => {
        // Handle cancel logic here, e.g., reset form or navigate away
        form.reset();
    }

    return (
        <Form {...form}>
            <form className="flex w-full flex-col gap-10" onSubmit={form.handleSubmit(handleCreateBook)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* TITLE */}
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title <span className="text-primary-500">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Book Title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* AUTHOR */}
                    <FormField
                        control={form.control}
                        name="description" // Temporarily using title field as a placeholder
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Author</FormLabel>
                                <FormControl>
                                    <Input 
                                        placeholder="Author name" 
                                        {...field} 
                                        disabled={true}
                                        value={field.value ?? ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Cover Image URL */}
                    <FormField
                        control={form.control}
                        name="coverUrl"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Cover Image URL</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="https://example.com/cover.jpg"
                                        {...field}
                                        value={field.value ?? ""}
                                        />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                {/* DESCRIPTION */}
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea 
                                    placeholder="A brief summary of the book"
                                    rows={3}
                                    {...field}
                                    value={field.value ?? ""}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
                    {/* <div className="grid grid-cols-2 gap-4"> */}
                        {/* FORMAT */}
                        <FormField
                            control={form.control}
                            name="format"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Format</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value ?? undefined}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select format" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="audiobook">AudioBook</SelectItem>
                                        <SelectItem value="ebook">eBook</SelectItem>
                                        <SelectItem value="physical_hardcover">Hardcover</SelectItem>
                                        <SelectItem value="physical_paperback">Paperback</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                            )}
                        />

                        {/* GENRE */}
                        <FormField
                            control={form.control}
                            name="genre"
                            render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Genre</FormLabel>
                                    {/* <Select onValueChange={field.onChange} defaultValue={field.value ?? undefined}>
                                        <FormControl>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select genre" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {genreArray.map((genre) => (
                                                <SelectItem key={genre} value={genre}>
                                                    {genre.charAt(0).toUpperCase() + genre.slice(1).replace(/-/g, ' ')}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select> */}
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn(
                                                        "w-full justify-between",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value
                                                        ? genreOptions.find(
                                                            (genre) => genre.value === field.value
                                                        )?.label
                                                    : "Select genre"}
                                                    <ChevronsUpDown className="opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-full p-0">
                                            <Command>
                                                <CommandInput placeholder="Search genre..." className="h-9"/>
                                                <CommandList>
                                                    <CommandEmpty>No Genre found</CommandEmpty>
                                                    <CommandGroup>
                                                        {genreOptions.map((genre) => (
                                                            <CommandItem 
                                                                key={genre.value} 
                                                                value={genre.value}
                                                                onSelect={() => {
                                                                    form.setValue("genre", genre.value)
                                                                }}
                                                            >
                                                                {genre.label}
                                                                <Check
                                                                    className={cn(
                                                                        "ml-auto",
                                                                        genre.value === field.value
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                    )}
                                                                />
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                            </FormItem>
                            )}
                        />
                    {/* </div> */}

                    {/* RE-READ */}
                    <FormField
                        control={form.control}
                        name="reRead"
                        render={({ field }) => (
                            <FormItem >
                                    <FormLabel>Re-read</FormLabel>
                                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                    <FormDescription>
                                        Mark this if you plan to or <br /> already re-read the book.
                                    </FormDescription>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </div>
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        {/* STATUS */}
                        <FormField
                            control={form.control}
                            name="status"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Status</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value ?? undefined}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="to_be_read">TBR</SelectItem>
                                        <SelectItem value="currently_reading">Reading</SelectItem>
                                        <SelectItem value="read">Read</SelectItem>
                                        <SelectItem value="paused">Paused</SelectItem>
                                        <SelectItem value="dnf">DNF</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        {/* CURRENT PAGE */}
                        <FormField
                            control={form.control}
                            name="currentPage"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Current Page</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="number" 
                                        placeholder="Current page"
                                        {...field}
                                        onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                                        value={field.value || ""}
                                        disabled={format === "audiobook" || status !== "currently_reading"}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {/* AUDIO HOURS */}
                        <FormField
                            control={form.control}
                            name="audioHours"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Audio Hours</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="Number of hours"
                                        {...field}
                                        onChange={(e) =>
                                            field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                                        value={field.value || ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        {/* PAGE COUNT */}
                        <FormField
                            control={form.control}
                            name="pageCount"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Total Pages</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="number" 
                                        placeholder="Number of pages"
                                        {...field}
                                        onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                                        value={field.value || ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {/* Date Started */}
                    <FormField
                        control={form.control}
                        name="dateStarted"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Date Started</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="outline"
                                                disabled={status === "to_be_read"}
                                                className={cn(
                                                    "pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}>
                                                {field.value ? (
                                                    formatDate(field.value, "PPP")
                                                    ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value ?? undefined}
                                            onSelect={field.onChange}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Date Finished */}
                    <FormField
                        control={form.control}
                        name="dateFinished"
                        render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Date Finished</FormLabel>
                            <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant="outline"
                                        disabled={status !== "read"}
                                        className={cn(
                                        "pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                        )}
                                    >
                                        {field.value ? (
                                            formatDate(field.value, "PPP")
                                        ) : (
                                            <span>Pick a date</span>
                                        )}
                                        
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={field.value ?? undefined}
                                    onSelect={field.onChange}
                                    initialFocus
                                />
                            </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    {/* TODO: Add time spend on book field */}
                    <FormField
                        control={form.control}
                        name="description" // Temporarily using title field as a placeholder
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pages per Day</FormLabel>
                                <FormControl>
                                    <Input 
                                        placeholder="Pages per Day"
                                        {...field}
                                        disabled={true}
                                        value={field.value ?? ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {status === "read" && (
                    <div className="grid sm:grid-cols-3 items-start gap-4">
                        {/* RATING */}
                        <div className="">
                            <FormField
                                control={form.control}
                                name="rating"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Rating</FormLabel>
                                        <FormControl>
                                            <div className="flex sm:flex-col gap-2 flex-center">
                                            {/* Stars */}
                                                {/* <div className="flex">
                                                    {[0, 1, 2, 3, 4, 5].map((star) => {
                                                        const filled = hoverValue ?? field.value ?? 0;
                                                        return (
                                                            <div
                                                                key={star}
                                                                className="cursor-pointer text-yellow-400"
                                                                style={{
                                                                    clipPath: `inset(0 ${Math.max(0, 5 - Math.min(filled, star)) * 100}% 0 0)`,
                                                                }}
                                                                onMouseEnter={() => setHoverValue(star)}
                                                                onMouseLeave={() => setHoverValue(null)}
                                                                onClick={() => field.onChange(star)}
                                                            >
                                                                ★
                                                            </div>
                                                        );
                                                    })}
                                                </div> */}

                                                {/* Display exact value */}
                                                <span className="ml-2 w-12 text-right">{Number(field.value).toFixed(2)}</span>

                                                {/* Hidden Slider for quarter increments */}
                                                <Slider
                                                    className="cursor-pointer"
                                                    value={[Number(field.value)]}
                                                    min={0}
                                                    max={6}
                                                    step={0.25}
                                                    onValueChange={(value) => field.onChange(value[0].toFixed(2))}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-2">
                            {/* Review */}
                            <FormField
                                control={form.control}
                                name="review"
                                render={({ field }) => (
                                    <FormItem>
                                            <FormLabel>Review</FormLabel>
                                            <FormControl>
                                                <Textarea 
                                                    placeholder="Review or notes about the book"
                                                    rows={4}
                                                    {...field}
                                                    value={field.value ?? ""}
                                                    />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                )}
                            />
                        </div>

                    </div>
                )}

                <div className="flex justify-end space-x-2">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={handleCancelChanges}
                    >
                        Cancel
                    </Button>

                    <Button
                        type="submit"
                        // disabled={createBookMutation.isPending}
                        className="primary-gradient w-fit !text-light-900"
                    >
                        {/* {createBookMutation.isPending ? "Adding..." : "Add Book"} */}
                        Add A Book
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default BookForm