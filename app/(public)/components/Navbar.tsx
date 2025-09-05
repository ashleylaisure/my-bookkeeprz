'use client'

import BrandIcon from "@/components/BrandIcon"
import BrandText from "@/components/BrandText"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import MobileNav from "./MobileNav"
import { useIsMobile } from "@/hooks/use-mobile"


export default function Navbar() {
    const isMobile = useIsMobile();

    return (

        <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    <div className="flex items-center space-x-2">
                        {isMobile ? <MobileNav /> : <BrandIcon />}
                        <BrandText />
                    </div>

                    <div className="hidden md:flex items-center space-x-5">

                        <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
                        <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How it Works</a>
                        <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
                        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
                        
                        <Link href="/sign-in">
                            <Button variant="ghost" data-testid="button-signin">Sign In</Button>
                        </Link>

                        <Link href="/sign-up">
                            <Button data-testid="button-signup">Get Started</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
