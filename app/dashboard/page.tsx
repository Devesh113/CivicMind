"use client";

import { useState } from "react";
import { IssueCard } from "@/components/IssueCard";
import { MetricCard } from "@/components/MetricCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, CheckCircle2, Clock, AlertCircle } from "lucide-react";
// Placeholder images
const potholeImage = "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop";
const garbageImage = "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=400&h=300&fit=crop";
const streetlightImage = "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=300&fit=crop";
const drainageImage = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("all");

  const mockIssues = [
    {
      id: "1",
      imageUrl: potholeImage,
      type: "pothole" as const,
      severity: "high" as const,
      status: "in-progress" as const,
      location: "Main Street & 5th Avenue",
      reportedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
      duplicateCount: 8,
    },
    {
      id: "2",
      imageUrl: garbageImage,
      type: "garbage" as const,
      severity: "medium" as const,
      status: "acknowledged" as const,
      location: "Park Plaza, Central District",
      reportedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
      duplicateCount: 4,
    },
    {
      id: "3",
      imageUrl: streetlightImage,
      type: "streetlight" as const,
      severity: "low" as const,
      status: "resolved" as const,
      location: "Oak Avenue, Block 8",
      reportedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
      duplicateCount: 2,
    },
    {
      id: "4",
      imageUrl: drainageImage,
      type: "drainage" as const,
      severity: "high" as const,
      status: "pending" as const,
      location: "River Road, Block 12",
      reportedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
      duplicateCount: 3,
    },
  ];

  const filteredIssues = mockIssues.filter((issue) => {
    if (activeTab === "all") return true;
    return issue.status === activeTab;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">My Dashboard</h1>
          <p className="text-muted-foreground">
            Track your reported issues and community impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Reports"
            value="12"
            icon={Camera}
            subtitle="All time"
          />
          <MetricCard
            title="Resolved"
            value="8"
            icon={CheckCircle2}
            subtitle="66% success rate"
          />
          <MetricCard
            title="In Progress"
            value="2"
            icon={Clock}
            subtitle="Being addressed"
          />
          <MetricCard
            title="Pending"
            value="2"
            icon={AlertCircle}
            subtitle="Awaiting review"
          />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList data-testid="tabs-filter">
            <TabsTrigger value="all" data-testid="tab-all">All Issues</TabsTrigger>
            <TabsTrigger value="pending" data-testid="tab-pending">Pending</TabsTrigger>
            <TabsTrigger value="in-progress" data-testid="tab-in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="resolved" data-testid="tab-resolved">Resolved</TabsTrigger>
          </TabsList>
        </Tabs>

        {filteredIssues.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No issues found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIssues.map((issue) => (
              <IssueCard
                key={issue.id}
                {...issue}
                onView={() => console.log("View issue:", issue.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
