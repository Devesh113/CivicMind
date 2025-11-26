"use client";

import { useState } from "react";
import { LeaderboardTable } from "@/components/LeaderboardTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, TrendingUp } from "lucide-react";

export default function Leaderboard() {
  const [timePeriod, setTimePeriod] = useState("this-month");

  const mockData = [
    {
      id: "1",
      name: "City Sanitation Department",
      region: "Downtown District",
      issuesResolved: 247,
      avgResolutionTime: "2.3 days",
      rating: 4.8,
      rank: 1,
    },
    {
      id: "2",
      name: "Public Works Division",
      region: "North District",
      issuesResolved: 198,
      avgResolutionTime: "3.1 days",
      rating: 4.6,
      rank: 2,
    },
    {
      id: "3",
      name: "Municipal Services Corp",
      region: "East Side",
      issuesResolved: 176,
      avgResolutionTime: "3.5 days",
      rating: 4.5,
      rank: 3,
    },
    {
      id: "4",
      name: "Civic Maintenance Team",
      region: "West End",
      issuesResolved: 145,
      avgResolutionTime: "4.2 days",
      rating: 4.3,
      rank: 4,
    },
    {
      id: "5",
      name: "Infrastructure Department",
      region: "South District",
      issuesResolved: 132,
      avgResolutionTime: "4.8 days",
      rating: 4.1,
      rank: 5,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold" data-testid="text-page-title">Authority Leaderboard</h1>
          </div>
          <p className="text-muted-foreground">
            Recognizing authorities who keep our city clean and safe
          </p>
        </div>

        <Card className="mb-8 bg-gradient-to-r from-primary/10 to-chart-2/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Top Performer This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-1" data-testid="text-top-authority">
                  City Sanitation Department
                </h3>
                <p className="text-sm text-muted-foreground">Downtown District</p>
              </div>
              <div className="flex gap-6">
                <div>
                  <p className="text-2xl font-bold text-primary">247</p>
                  <p className="text-xs text-muted-foreground">Issues Resolved</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">2.3 days</p>
                  <p className="text-xs text-muted-foreground">Avg Time</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">⭐ 4.8</p>
                  <p className="text-xs text-muted-foreground">Rating</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Rankings</h2>
          <Select value={timePeriod} onValueChange={setTimePeriod}>
            <SelectTrigger className="w-[200px]" data-testid="select-time-period">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="all-time">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <LeaderboardTable data={mockData} />

        <Card className="mt-8 bg-muted/30">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              <strong>How rankings work:</strong> Authorities are ranked based on issues
              resolved, average resolution time, and citizen ratings. The leaderboard
              motivates authorities to provide faster, better service to the community.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
