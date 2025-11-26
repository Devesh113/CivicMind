import { MetricCard } from "../MetricCard";
import { CheckCircle2 } from "lucide-react";

export default function MetricCardExample() {
  return (
    <div className="p-4 max-w-sm">
      <MetricCard
        title="Issues Resolved"
        value="1,247"
        icon={CheckCircle2}
        trend={{ value: 12, isPositive: true }}
        subtitle="This month"
      />
    </div>
  );
}
