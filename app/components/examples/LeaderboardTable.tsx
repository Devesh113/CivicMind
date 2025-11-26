import { LeaderboardTable } from "../LeaderboardTable";

export default function LeaderboardTableExample() {
  const mockData = [
    {
      id: "1",
      name: "City Sanitation Dept.",
      region: "Downtown",
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
      name: "Municipal Services",
      region: "East Side",
      issuesResolved: 176,
      avgResolutionTime: "3.5 days",
      rating: 4.5,
      rank: 3,
    },
  ];

  return (
    <div className="p-4">
      <LeaderboardTable data={mockData} />
    </div>
  );
}
