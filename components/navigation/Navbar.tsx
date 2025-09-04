'use client'

import { useIsMobile } from "@/hooks/use-mobile"
import { SidebarTrigger } from "../ui/sidebar";

export default function Navbar() {
    const isMobile = useIsMobile();

    if (isMobile) {
        return <SidebarTrigger />
    }
    return null;

}