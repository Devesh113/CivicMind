import { IssueCard } from "../IssueCard";

// Placeholder image
const heroImage = "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop";

export default function IssueCardExample() {
  return (
    <div className="p-4 max-w-sm">
      <IssueCard
        id="1"
        imageUrl={heroImage}
        type="pothole"
        severity="high"
        status="in-progress"
        location="Main Street, Downtown Area"
        reportedAt={new Date(Date.now() - 2 * 60 * 60 * 1000)}
        duplicateCount={5}
        onView={() => console.log("View details clicked")}
      />
    </div>
  );
}
