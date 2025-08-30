import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AuthLayout({children}: {children: ReactNode}) {
    const { userId } = await auth();
    if (userId != null) redirect("/");

    return (
        <div className="flex items-center justify-center min-h-screen bg-background bg-auth-light dark:bg-auth-dark bg-no-repeat bg-cover bg-center px-4 py-10">
            <div>
                {children}
            </div>
        </div>
    );
}
