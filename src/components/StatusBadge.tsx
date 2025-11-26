import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, AlertCircle, Loader2 } from "lucide-react";

type Status = "pending" | "acknowledged" | "in-progress" | "resolved";

interface StatusBadgeProps {
  status: Status;
  showIcon?: boolean;
}

const statusConfig: Record<Status, { label: string; className: string; icon: any }> = {
  pending: {
    label: "Pending",
    className: "bg-muted text-muted-foreground",
    icon: Clock,
  },
  acknowledged: {
    label: "Acknowledged",
    className: "bg-chart-2/20 text-chart-2",
    icon: AlertCircle,
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-chart-3/20 text-chart-3",
    icon: Loader2,
  },
  resolved: {
    label: "Resolved",
    className: "bg-primary/20 text-primary",
    icon: CheckCircle2,
  },
};

export function StatusBadge({ status, showIcon = false }: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Badge className={config.className} data-testid={`badge-status-${status}`}>
      {showIcon && <Icon className="h-3 w-3 mr-1" />}
      {config.label}
    </Badge>
  );
}
