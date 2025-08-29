import { ReactNode } from "react";

export default function AuthLayout({children}: {children: ReactNode}) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background bg-auth-light dark:bg-auth-dark bg-no-repeat bg-cover bg-center px-4 py-10">
            <div>
                {children}
            </div>
        </div>
    );
}
