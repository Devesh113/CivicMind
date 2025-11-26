import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Eye, ThumbsUp } from "lucide-react";
import { format } from "date-fns";

type IssueType = "garbage" | "pothole" | "streetlight" | "drainage" | "fire" | "other";
type IssueSeverity = "low" | "medium" | "high" | "emergency";
type IssueStatus = "pending" | "acknowledged" | "in-progress" | "resolved";

interface IssueCardProps {
  id: string;
  imageUrl: string;
  type: IssueType;
  severity: IssueSeverity;
  status: IssueStatus;
  location: string;
  reportedAt: Date;
  duplicateCount?: number;
  onView?: () => void;
}

const typeLabels: Record<IssueType, string> = {
  garbage: "Garbage",
  pothole: "Pothole",
  streetlight: "Streetlight",
  drainage: "Drainage",
  fire: "🔥 Fire Emergency",
  other: "Other",
};

const statusColors: Record<IssueStatus, string> = {
  pending: "bg-muted text-muted-foreground",
  acknowledged: "bg-chart-2/20 text-chart-2",
  "in-progress": "bg-chart-3/20 text-chart-3",
  resolved: "bg-primary/20 text-primary",
};

const severityColors: Record<IssueSeverity, string> = {
  low: "bg-chart-2/20 text-chart-2",
  medium: "bg-chart-3/20 text-chart-3",
  high: "bg-destructive/20 text-destructive",
  emergency: "bg-destructive text-destructive-foreground animate-pulse",
};

export function IssueCard({
  imageUrl,
  type,
  severity,
  status,
  location,
  reportedAt,
  duplicateCount = 0,
  onView,
}: IssueCardProps) {
  const isEmergency = type === "fire" || severity === "emergency";
  
  return (
    <Card className={`overflow-hidden hover-elevate ${isEmergency ? "border-destructive border-2" : ""}`} data-testid={`card-issue-${type}`}>
      <div className="aspect-[4/3] relative overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={`${type} issue`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <Badge className={severityColors[severity]} data-testid={`badge-severity-${severity}`}>
            {severity}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="secondary" data-testid={`badge-type-${type}`}>
              {typeLabels[type]}
            </Badge>
            <Badge className={statusColors[status]} data-testid={`badge-status-${status}`}>
              {status.replace("-", " ")}
            </Badge>
          </div>
        </div>

        <div className="flex items-start gap-2 text-sm text-muted-foreground mb-2">
          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span className="line-clamp-1" data-testid="text-location">{location}</span>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span data-testid="text-reported-time">{format(reportedAt, "MMM d, h:mm a")}</span>
          </div>
          {duplicateCount > 0 && (
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-3 w-3" />
              <span data-testid="text-duplicate-count">{duplicateCount} confirmed</span>
            </div>
          )}
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={onView}
          data-testid="button-view-details"
        >
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
