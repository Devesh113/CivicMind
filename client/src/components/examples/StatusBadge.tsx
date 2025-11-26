import { StatusBadge } from "../StatusBadge";

export default function StatusBadgeExample() {
  return (
    <div className="p-4 flex gap-2 flex-wrap">
      <StatusBadge status="pending" showIcon />
      <StatusBadge status="acknowledged" showIcon />
      <StatusBadge status="in-progress" showIcon />
      <StatusBadge status="resolved" showIcon />
    </div>
  );
}
