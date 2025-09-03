import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export default function LeftSidebar() {
    return (
        <Sidebar collapsible="icon" className="overflow-hidden">
            <SidebarHeader className="flex-row">
                <SidebarTrigger />
                <span className="text-xl text-nowarp">Bookkeeprz</span>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
