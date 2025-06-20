import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function RecentAnnouncements() {
  return (
    <div className="space-y-4">
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <Bell className="mr-2 h-4 w-4 text-primary" />
            <h4 className="font-medium">New Course Available</h4>
          </div>
          <Badge variant="outline" className="text-xs">New</Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          A new course on "Advanced Bible Hermeneutics" is now available for enrollment. 
          Limited spots available.
        </p>
        <div className="mt-2 text-xs text-muted-foreground">2 hours ago</div>
      </div>
      
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <Bell className="mr-2 h-4 w-4 text-primary" />
            <h4 className="font-medium">Mind Education Assignment Due</h4>
          </div>
          <Badge variant="outline" className="text-xs bg-destructive/10 text-destructive">Important</Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Reminder: Your reflection essay for Mind Education is due this Friday.
        </p>
        <div className="mt-2 text-xs text-muted-foreground">Yesterday</div>
      </div>
      
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <Bell className="mr-2 h-4 w-4 text-primary" />
            <h4 className="font-medium">World Camp Early Bird Registration</h4>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Early bird registration for the 2025 World Camp is now open with a 15% discount for the first 100 participants.
        </p>
        <div className="mt-2 text-xs text-muted-foreground">3 days ago</div>
      </div>
      
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <Bell className="mr-2 h-4 w-4 text-primary" />
            <h4 className="font-medium">Community Service Opportunity</h4>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Join us this Saturday for a community cleanup event. All students are encouraged to participate.
        </p>
        <div className="mt-2 text-xs text-muted-foreground">1 week ago</div>
      </div>
    </div>
  );
}