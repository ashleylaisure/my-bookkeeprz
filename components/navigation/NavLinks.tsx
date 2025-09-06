'use client'

import { sidebarLinks } from '@/constants/'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"



const NavLinks = () => {
    const pathname = usePathname()
    const {state} = useSidebar();
    const isCollapsed = state == 'collapsed'
    
    return (
        <>
        {sidebarLinks.map((link) => {

            const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

            const Icon = link.icon

            const LinkContent = (
                <SidebarMenuButton asChild>
                    <Link
                        href={link.route}
                        className={cn(
                            isActive
                            ? 'primary-gradient rounded-lg text-light-900' 
                            : 'text-dark300_light900'
                            , 'flex items-center justify-start gap-4 bg-transparent p-4'
                        )}>
                        <Icon
                            size={20}
                            className={cn(isActive? "text-white" : "opacity-60 text-dark300_light900")}
                            />
                        <p className={cn('text-sm text-dark300_light900', isActive && 'font-medium')}>
                            {link.label}
                        </p>
                    </Link>

                </SidebarMenuButton>
            )

            return (
                <SidebarMenuItem key={link.label}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            {LinkContent}
                        </TooltipTrigger>

                        {isCollapsed && (
                            <TooltipContent side="right" className="px-2 py-1 text-xs">
                                {link.label}
                            </TooltipContent>
                        )}
                    </Tooltip>
                </SidebarMenuItem>
            )
        })}
        </>
    )
}

export default NavLinks