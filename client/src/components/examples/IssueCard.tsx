import { IssueCard } from "../IssueCard";
import heroImage from "@assets/generated_images/pothole_in_road_surface.png";

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
