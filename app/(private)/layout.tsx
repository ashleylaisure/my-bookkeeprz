import  LeftSidebar  from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <>
            <SidebarProvider className="overflow-y-hidden">
                <LeftSidebar />
                
                <main className="background-light850_dark100 relative w-full">
                    <Navbar />
                    <div className="flex min-h-screen flex-1 flex-col p-8 mx-auto w-full max-w-5xl max-md:pb-14">
                        {children}
                    </div>
                </main>
            
            </SidebarProvider>
        </>
    );
}

