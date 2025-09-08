import { cookies } from "next/headers"
import  LeftSidebar  from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default async function PrivateLayout({children}: {children: ReactNode}) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

    return (
        <>
            <SidebarProvider defaultOpen={defaultOpen}>
                <LeftSidebar />
                
                <main className="background-light850_dark100 relative flex flex-1 flex-col overflow-hidden">
                    <Navbar />
                    <div className="flex flex-1 flex-col px-6 pb-6 pt-10 max-md:pb-14 sm:px-14">
                        <div className="mx-auto w-full max-w-5xl">
                            {children}
                        </div>
                    </div>
                </main>
            
            </SidebarProvider>
        </>
    );
}

