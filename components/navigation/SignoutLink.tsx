'use client'
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import Link from "next/link";

const SignoutLink = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false)

    const handleSignOut = async () => {
        setLoading(true)
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/"); // redirect to home page
                },
            },
        });
        setLoading(false)
    };

    return (
        <div>
            <Link href="#" 
                onClick={handleSignOut} 
                className="flex items-center gap-4">
                {loading ? "Signing out..." : "Sign out"}
            </Link>
        </div>
    );
};

export default SignoutLink;
