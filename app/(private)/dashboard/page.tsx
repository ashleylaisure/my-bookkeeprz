import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import ROUTES from "@/constants/routes";
import { Plus } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Dashboard",
    description: "Your personalized dashboard",
};

export default async function DashboardPage() {

    return (
        <>
            <header className="mb-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">Reading Dashboard</h1>
                        <p className="text-muted-foreground mt-1">Track your reading journey and discover insights</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button variant={"primary"} asChild>
                            <Link href={ROUTES.ADD_BOOK}>
                                <Plus className="mr-2" size={16} />
                                Add Book
                            </Link>
                        </Button>
                    </div>
                </div>
            </header>

            <Card>
                <CardHeader>StatsOverview</CardHeader>
            </Card>
            <Card>
                <CardHeader>CurrentlyReading</CardHeader>
            </Card>

            <section className="grid-analytics mb-8">
                <Card>
                    <CardHeader>ReadingActivity</CardHeader>
                </Card>
                <Card>
                    <CardHeader>GenreChart</CardHeader>
                </Card>
                <Card>
                    <CardHeader>MonthlyGoalsChart</CardHeader>
                </Card>
                <Card>
                    <CardHeader>RatingDistribution</CardHeader>
                </Card>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>RecentActivity</CardHeader>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>RecentQuotes</CardHeader>
                    </Card>
                </div>
            </section>
            <Card>
                <CardHeader>JournalEntries</CardHeader>
            </Card>

        </>
    )
}