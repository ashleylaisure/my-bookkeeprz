import { SignoutBtn } from "@/components/button/SignoutBtn";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Dashboard",
    description: "Your personalized dashboard",
};

export default async function DashboardPage() {
    const session = await getSession();

    if (!session) {
        redirect("/sign-in");
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <SignoutBtn />
        </div>
    )
}