import { CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UpcomingEvents() {
  return (
    <div className="space-y-4">
      <div className="rounded-md border p-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h4 className="font-medium">IYF World Camp Registration</h4>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarIcon className="mr-1 h-4 w-4" />
              <span>June 15, 2025</span>
            </div>
          </div>
          <Button size="sm">Register</Button>
        </div>
      </div>
      
      <div className="rounded-md border p-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h4 className="font-medium">Mind Education Seminar</h4>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarIcon className="mr-1 h-4 w-4" />
              <span>May 22-23, 2025</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-4 w-4" />
              <span>9:00 AM - 4:00 PM</span>
            </div>
          </div>
          <Button size="sm" variant="outline">More Info</Button>
        </div>
      </div>
      
      <div className="rounded-md border p-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h4 className="font-medium">Bible Study Final Exam</h4>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarIcon className="mr-1 h-4 w-4" />
              <span>May 10, 2025</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-4 w-4" />
              <span>10:00 AM - 12:00 PM</span>
            </div>
          </div>
          <Button size="sm" variant="secondary">Prepare</Button>
        </div>
      </div>
    </div>
  );
}