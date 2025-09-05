"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Please provide a valid email address." }),
})

export default function MagicLinkForm({ formType }: { formType: "SIGN_IN" | "SIGN_UP"}) {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="flex w-full flex-col gap-2.5">
                            <FormLabel className="paragraph-medium text-dark400_light700">Email Address</FormLabel>
                            <FormControl>
                                <Input
                                    required
                                    placeholder="you@example.com"
                                    {...field}
                                    className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"
                                />
                            </FormControl>
                            {/* <FormDescription>
                                This is your public display email.
                            </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    disabled={form.formState.isSubmitting}
                    type="submit" 
                    variant={"primary"} 
                    className="w-full min-h-12 cursor-pointer"
                >
                    { form.formState.isSubmitting 
                        ? (<span>Sending Magic Link...</span>)
                        : formType === "SIGN_IN" 
                            ? ( <span>Sign in with Magic Link</span>) 
                            : ( <span>Sign up with Magic Link</span>)
                    }
                </Button>
            </form>
        </Form>
    )
}