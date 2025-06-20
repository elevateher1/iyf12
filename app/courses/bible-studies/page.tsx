'use client';

import { Card } from "@/components/ui/card";
import { Dribbble as Bible } from "lucide-react";

export default function BibleStudiesPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-3 mb-6">
        <Bible className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Bible Studies</h1>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-3">Old Testament Survey</h2>
          <p className="text-muted-foreground">
            Explore the rich history and teachings of the Old Testament through comprehensive study materials.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-3">New Testament Foundations</h2>
          <p className="text-muted-foreground">
            Discover the life of Jesus and early church history through in-depth New Testament studies.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-3">Biblical Theology</h2>
          <p className="text-muted-foreground">
            Understand key theological concepts and themes that run throughout Scripture.
          </p>
        </Card>
      </div>
    </div>
  );
}