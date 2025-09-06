import { ChevronDown, Download, LogOut, MoonIcon, Settings, SunIcon, User } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "../ui/sidebar";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import SignoutLink from "./SignoutLink";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {

    const { theme, setTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const {state} = useSidebar();
    const isCollapsed = state === "collapsed"

    // Prevent hydration mismatch
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    // Determine current theme (system or explicit)
    const currentTheme = theme === "system" ? systemTheme : theme

    return (
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
                                        <AvatarFallback className="rounded-lg bg-primary-500">AL</AvatarFallback>
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
                                side={isCollapsed ? "right" : "top"}
                                align="end" 
                                className="w-[--radix-popper-anchor-width] min-w-56 rounded-lg"
                                sideOffset={10}
                            >
                                <DropdownMenuLabel className="p-0 font-normal">
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        <Avatar className="h-8 w-8 rounded-lg">
                                            {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
                                            <AvatarFallback className="rounded-lg bg-primary-500">AL</AvatarFallback>
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
                                        <Link href={ROUTES.PROFILE} className="flex items-center gap-4">
                                            <User className="h-[1.2rem] w-[1.2rem]" />
                                            Profile
                                        </Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem>
                                        <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                                        Settings
                                    </DropdownMenuItem>

                                    <DropdownMenuItem>
                                        <Link href={ROUTES.IMPORT} className="flex items-center gap-4">
                                            <Download className="h-[1.2rem] w-[1.2rem]" />
                                            Import Books
                                        </Link>
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
    )
}