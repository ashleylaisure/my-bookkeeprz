import { UserButton } from "@clerk/nextjs";

export const metadata = {
    title: "Dashboard",
    description: "Your personalized dashboard",
};

export default function DashboardPage() {
    return (
        <div>
            <h1>Dashboard</h1>
            <UserButton />
        </div>
    )
}