'use client'
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";

export const SignoutBtn = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/"); // redirect to home page
                },
            },
        });
    };

    return (
        <Button onClick={handleSignOut} variant="destructive">
            Sign Out
        </Button>
    );
};