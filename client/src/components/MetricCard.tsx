import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  subtitle?: string;
}

export function MetricCard({ title, value, icon: Icon, trend, subtitle }: MetricCardProps) {
  return (
    <Card data-testid={`card-metric-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          {trend && (
            <div
              className={`flex items-center gap-1 text-sm ${
                trend.isPositive ? "text-primary" : "text-destructive"
              }`}
            >
              {trend.isPositive ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span data-testid="text-trend">{Math.abs(trend.value)}%</span>
            </div>
          )}
        </div>
        <div className="text-3xl font-bold mb-1" data-testid="text-value">{value}</div>
        <div className="text-sm font-medium text-foreground mb-1" data-testid="text-title">{title}</div>
        {subtitle && (
          <div className="text-xs text-muted-foreground" data-testid="text-subtitle">{subtitle}</div>
        )}
      </CardContent>
    </Card>
  );
}
