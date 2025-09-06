'use client'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarSeparator,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import BrandText from "../BrandText"
import NavLinks from "./NavLinks"
import Footer from "./Footer"

export default function LeftSidebar() {

    return (
        <Sidebar collapsible="icon">
            {/* HEADER */}
            <SidebarHeader className="flex-start flex-row min-h-[64px] gap-2">
                <SidebarTrigger />
                <BrandText />
            </SidebarHeader>
            {/* <SidebarSeparator /> */}

            {/* NAVLINKS */}
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="hidden">Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <NavLinks />
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* FOOTER */}
            <Footer />
        </Sidebar>
    )
}
