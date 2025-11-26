import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award } from "lucide-react";

interface AuthorityData {
  id: string;
  name: string;
  region: string;
  issuesResolved: number;
  avgResolutionTime: string;
  rating: number;
  rank: number;
}

interface LeaderboardTableProps {
  data: AuthorityData[];
}

export function LeaderboardTable({ data }: LeaderboardTableProps) {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-chart-3" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-muted-foreground" />;
    if (rank === 3) return <Award className="h-5 w-5 text-chart-4" />;
    return null;
  };

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return "bg-chart-3/20 text-chart-3";
    if (rank === 2) return "bg-muted text-muted-foreground";
    if (rank === 3) return "bg-chart-4/20 text-chart-4";
    return "bg-secondary text-secondary-foreground";
  };

  return (
    <div className="rounded-md border" data-testid="table-leaderboard">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">Rank</TableHead>
            <TableHead>Authority</TableHead>
            <TableHead>Region</TableHead>
            <TableHead className="text-right">Issues Resolved</TableHead>
            <TableHead className="text-right">Avg Time</TableHead>
            <TableHead className="text-right">Rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((authority) => (
            <TableRow key={authority.id} data-testid={`row-authority-${authority.rank}`}>
              <TableCell>
                <div className="flex items-center gap-2">
                  {getRankIcon(authority.rank)}
                  <Badge className={getRankBadgeColor(authority.rank)}>
                    #{authority.rank}
                  </Badge>
                </div>
              </TableCell>
              <TableCell className="font-medium" data-testid="text-authority-name">
                {authority.name}
              </TableCell>
              <TableCell data-testid="text-region">{authority.region}</TableCell>
              <TableCell className="text-right font-mono" data-testid="text-issues-resolved">
                {authority.issuesResolved}
              </TableCell>
              <TableCell className="text-right font-mono" data-testid="text-avg-time">
                {authority.avgResolutionTime}
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="secondary" data-testid="text-rating">
                  ⭐ {authority.rating.toFixed(1)}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
