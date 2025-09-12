import Link from "next/link";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

interface Props {
    title: string;
    subtitle: string;
    href?: string;
    buttonText: string;
}

export default function Header({ title, subtitle, href, buttonText }: Props) {
    return (
        <header className="mb-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">{title}</h1>
                    <p className="text-muted-foreground mt-1">{subtitle}</p>
                </div>
                <div className="flex items-center space-x-4">
                    <Button variant={"primary"} asChild>
                        <Link href={href ? href : "#"}>
                            <Plus className="mr-2" size={16} />
                            {buttonText}
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
