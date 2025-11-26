"use client";

import { useState } from "react";
import { IssueCard } from "@/components/IssueCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import potholeImage from "@assets/generated_images/pothole_in_road_surface.png";
import garbageImage from "@assets/generated_images/overflowing_garbage_bin_problem.png";
import streetlightImage from "@assets/generated_images/broken_streetlight_infrastructure_issue.png";
import drainageImage from "@assets/generated_images/blocked_drainage_water_problem.png";
import fireImage from "@assets/generated_images/building_fire_emergency_situation.png";

export default function Community() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

  const mockIssues = [
    {
      id: "1",
      imageUrl: fireImage,
      type: "fire" as const,
      severity: "emergency" as const,
      status: "in-progress" as const,
      location: "Apartment Complex, Building 7",
      reportedAt: new Date(Date.now() - 30 * 60 * 1000),
      duplicateCount: 12,
    },
    {
      id: "2",
      imageUrl: potholeImage,
      type: "pothole" as const,
      severity: "high" as const,
      status: "in-progress" as const,
      location: "Main Street & 5th Avenue",
      reportedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
      duplicateCount: 8,
    },
    {
      id: "3",
      imageUrl: garbageImage,
      type: "garbage" as const,
      severity: "medium" as const,
      status: "acknowledged" as const,
      location: "Park Plaza, Central District",
      reportedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
      duplicateCount: 4,
    },
    {
      id: "4",
      imageUrl: streetlightImage,
      type: "streetlight" as const,
      severity: "low" as const,
      status: "resolved" as const,
      location: "Oak Avenue, Block 8",
      reportedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
      duplicateCount: 2,
    },
    {
      id: "5",
      imageUrl: drainageImage,
      type: "drainage" as const,
      severity: "high" as const,
      status: "pending" as const,
      location: "River Road, Block 12",
      reportedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
      duplicateCount: 3,
    },
    {
      id: "6",
      imageUrl: potholeImage,
      type: "pothole" as const,
      severity: "medium" as const,
      status: "resolved" as const,
      location: "Highway 101, Exit 42",
      reportedAt: new Date(Date.now() - 48 * 60 * 60 * 1000),
      duplicateCount: 6,
    },
    {
      id: "7",
      imageUrl: garbageImage,
      type: "garbage" as const,
      severity: "high" as const,
      status: "in-progress" as const,
      location: "Market Square, Downtown",
      reportedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
      duplicateCount: 12,
    },
  ];

  const filteredIssues = mockIssues.filter((issue) => {
    const matchesSearch = issue.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || issue.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Community Feed</h1>
          <p className="text-muted-foreground">
            All reported issues from your community
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
              data-testid="input-search"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full sm:w-[200px]" data-testid="select-filter-type">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="fire">🔥 Fire Emergency</SelectItem>
              <SelectItem value="pothole">Pothole</SelectItem>
              <SelectItem value="garbage">Garbage</SelectItem>
              <SelectItem value="streetlight">Streetlight</SelectItem>
              <SelectItem value="drainage">Drainage</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filteredIssues.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No issues match your search.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setFilterType("all");
              }}
              data-testid="button-clear-filters"
            >
              Clear Filters
            </Button>
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
