"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MetricCard } from "@/components/MetricCard";
import { IssueCard } from "@/components/IssueCard";
import { Camera, CheckCircle2, Clock, Users, ArrowRight } from "lucide-react";

// Placeholder images
const heroImage = "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop";
const potholeImage = "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop";
const garbageImage = "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=400&h=300&fit=crop";
const drainageImage = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop";
const fireImage = "https://images.unsplash.com/photo-1523029783039-c3e9aced7fd1?w=400&h=300&fit=crop";

export default function Home() {
  const mockIssues = [
    {
      id: "1",
      imageUrl: fireImage,
      type: "fire" as const,
      severity: "emergency" as const,
      status: "in-progress" as const,
      location: "Apartment Complex, Building 7",
      reportedAt: new Date(Date.now() - 15 * 60 * 1000),
      duplicateCount: 12,
    },
    {
      id: "2",
      imageUrl: potholeImage,
      type: "pothole" as const,
      severity: "high" as const,
      status: "acknowledged" as const,
      location: "Main Street & 5th Avenue",
      reportedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
      duplicateCount: 8,
    },
    {
      id: "3",
      imageUrl: garbageImage,
      type: "garbage" as const,
      severity: "medium" as const,
      status: "pending" as const,
      location: "Park Plaza, Central District",
      reportedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
      duplicateCount: 4,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Before and after civic improvement"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
              Click. Detect. Report.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90" data-testid="text-hero-subtitle">
              Clean your city with one tap. AI-powered civic issue reporting that
              connects you with local authorities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/report">
                <Button size="lg" variant="default" data-testid="button-hero-report">
                  <Camera className="h-5 w-5 mr-2" />
                  Report an Issue
                </Button>
              </Link>
              <Link href="/community">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/10 border-white/20 text-white hover:bg-background/20 backdrop-blur-sm"
                  data-testid="button-hero-community"
                >
                  View Community Feed
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Issues Resolved"
              value="1,247"
              icon={CheckCircle2}
              trend={{ value: 12, isPositive: true }}
              subtitle="This month"
            />
            <MetricCard
              title="Avg Resolution Time"
              value="2.8 days"
              icon={Clock}
              trend={{ value: 8, isPositive: true }}
              subtitle="15% faster"
            />
            <MetricCard
              title="Active Reporters"
              value="3,421"
              icon={Users}
              trend={{ value: 23, isPositive: true }}
              subtitle="Growing community"
            />
            <MetricCard
              title="Pending Reports"
              value="43"
              icon={Camera}
              subtitle="Awaiting review"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2" data-testid="text-recent-issues-title">
                Recent Issues
              </h2>
              <p className="text-muted-foreground">
                Latest reports from the community
              </p>
            </div>
            <Link href="/community">
              <Button variant="outline" data-testid="button-view-all">
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockIssues.map((issue) => (
              <IssueCard
                key={issue.id}
                {...issue}
                onView={() => console.log("View issue:", issue.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Capture</h3>
              <p className="text-muted-foreground">
                Take a photo of the civic issue you encounter
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. AI Detection</h3>
              <p className="text-muted-foreground">
                Our AI identifies the issue type and severity automatically
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Authority Action</h3>
              <p className="text-muted-foreground">
                Report is sent to the right authority for quick resolution
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Movement
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Help make your city cleaner, safer, and better for everyone
          </p>
          <Link href="/report">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
              data-testid="button-cta-report"
            >
              <Camera className="h-5 w-5 mr-2" />
              Report Your First Issue
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
