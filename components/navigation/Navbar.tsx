'use client'

import { useIsMobile } from "@/hooks/use-mobile"
import { SidebarTrigger } from "../ui/sidebar";

export default function Navbar() {
    const isMobile = useIsMobile();

    return (
        <nav className="flex-between background-light900_dark200 sticky top-0 right-0 z-50 w-full gap-5 p-3 min-h-[64px] shadow-light-300 dark:shadow-none">
            {isMobile && (
                <div className="flex-start flex-row gap-2">
                    <SidebarTrigger />
                    <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">Book
                        <span className="text-primary-500">keeprz</span>
                    </p>
                </div>
            )}
        </nav>
    )

}