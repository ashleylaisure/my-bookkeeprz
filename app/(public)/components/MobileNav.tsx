import BrandIcon from "@/components/BrandIcon"
import BrandText from "@/components/BrandText"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import ROUTES from "@/constants/routes"
import { PanelLeftIcon, PanelLeftOpen } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function MobileNav() {
    const [hovered, setHovered] = useState(false)
    
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className={"size-9"}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {hovered 
                        ? (<PanelLeftIcon className="w-4 h-4" />)
                        : (<BrandIcon />)
                    }
                </Button>
            </SheetTrigger>

            <SheetContent
                side="left"
                className="background-light900_dark200 border-none p-4"
            >
                <SheetTitle className="hidden">Navigation</SheetTitle>
                <Link href={ROUTES.HOME} className="flex items-center gap-1">
                    <BrandIcon />
                    <BrandText />
                </Link>

                <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
                    <SheetClose asChild>
                        <section className="flex-center h-full flex-col gap-15">
                            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
                            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How it Works</a>
                            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
                            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
                        </section>
                    </SheetClose>

                    <div className="flex flex-col gap-3">
                        <SheetClose asChild>
                            <Link href={ROUTES.SIGN_IN}>
                                <Button variant={"primary"} className="w-full">
                                    <span>Log In</span>
                                </Button>
                            </Link>
                        </SheetClose>

                        <SheetClose asChild>
                            <Link href={ROUTES.SIGN_UP}>
                                <Button variant={"muted"} className="w-full">
                                    <span className="primary-text-gradient">Sign Up</span>
                                </Button>
                            </Link>
                        </SheetClose>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )

}