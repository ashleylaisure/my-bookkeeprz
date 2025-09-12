import Header from "@/components/navigation/Header";
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
            <Header
                title="Reading Dashboard"
                subtitle="Track your reading journey and discover insights"
                href={ROUTES.ADD_BOOK}
                buttonText="Add Book"
            />
            
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