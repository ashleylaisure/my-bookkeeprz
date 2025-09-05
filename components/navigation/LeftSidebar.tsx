'use client'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { ChevronDown, Layers, LogOut, MoonIcon, Settings, SunIcon, User, User2Icon } from "lucide-react"
import Link from "next/link"
import SignoutLink from "./SignoutLink"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { user } from "@/drizzle/schema/auth"
import { useIsMobile } from "@/hooks/use-mobile"
import BrandText from "../BrandText"

export default function LeftSidebar() {
    const { theme, setTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const isMobile = useIsMobile();

    // Prevent hydration mismatch
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    // Determine current theme (system or explicit)
    const currentTheme = theme === "system" ? systemTheme : theme

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
                            {/* <NavLinks userId={userId}/> */}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* FOOTER */}
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>

                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="group">

                                    <Avatar className="h-8 w-8 rounded-lg">
                                        {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
                                        <AvatarImage src="/icons/avatar-15.png" alt="User Avatar" className="invert-colors"/>
                                        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                    </Avatar>

                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        {/* <span className="truncate font-medium">{user.name}</span>
                                        <span className="truncate text-xs">{user.email}</span> */}
                                        <span className="truncate font-medium">name</span>
                                        <span className="truncate text-xs">email</span>
                                    </div>

                                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]:rotate-180" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent 
                                side={isMobile ? "bottom" : "top"}
                                align="end" 
                                className="w-[--radix-popper-anchor-width] min-w-56 rounded-lg"
                                sideOffset={4}
                            >
                                <DropdownMenuLabel className="p-0 font-normal">
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        <Avatar className="h-8 w-8 rounded-lg">
                                            {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
                                            <AvatarImage src="/icons/avatar-15.png" alt="User Avatar" />
                                            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-medium">name</span>
                                            <span className="truncate text-xs">email</span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />

                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Link href="/" className="flex items-center gap-4">
                                            <User className="h-[1.2rem] w-[1.2rem]" />
                                            Profile
                                        </Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem>
                                        <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                                        Settings
                                    </DropdownMenuItem>

                                    <DropdownMenuItem>
                                        <Layers className="h-[1.2rem] w-[1.2rem] mr-2" />
                                        Billing
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />

                                {currentTheme === "light" ? (
                                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                                        <MoonIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                                        Dark Mode
                                    </DropdownMenuItem>
                                ): (
                                    <DropdownMenuItem onClick={() => setTheme("light")}>
                                        <SunIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                                        Light Mode
                                    </DropdownMenuItem>
                                )}

                                <DropdownMenuItem variant="destructive">
                                    <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                                    <SignoutLink />
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
