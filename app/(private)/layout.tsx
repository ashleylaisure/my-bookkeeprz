import  LeftSidebar  from "@/components/navigation/LeftSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <>
            <SidebarProvider className="overflow-y-hidden">
                <LeftSidebar />
                <div>{children}</div>
            </SidebarProvider>
        </>
    );
}

