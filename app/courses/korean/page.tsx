"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, FileText, Users, Video } from "lucide-react";

export default function KoreanCoursePage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Korean Language</h1>
        <p className="text-muted-foreground">
          Master Korean language and culture through comprehensive instruction
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="lessons">Lessons</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Course Progress</CardTitle>
                <CardDescription>Track your learning journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Overall Progress</span>
                      <span className="text-sm text-muted-foreground">40%</span>
                    </div>
                    <Progress value={40} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">12 weeks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">24 video lessons</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">8 assignments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">30 students</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Course Information</CardTitle>
                <CardDescription>Essential details about the course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Instructor</h4>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Ms. Ji-eun Kim</p>
                        <p className="text-sm text-muted-foreground">Korean Language Specialist</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Schedule</h4>
                    <p className="text-sm text-muted-foreground">Mondays & Wednesdays, 2:00 PM - 4:00 PM</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Level</h4>
                    <p className="text-sm text-muted-foreground">
                      Beginner (No prior knowledge required)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="lessons">
          <Card>
            <CardHeader>
              <CardTitle>Course Lessons</CardTitle>
              <CardDescription>Access your learning materials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "Korean Alphabet (Hangul)",
                  "Basic Greetings and Introductions",
                  "Numbers and Counting",
                  "Daily Conversations",
                  "Grammar Fundamentals",
                ].map((lesson, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        {index + 1}
                      </div>
                      <span className="font-medium">{lesson}</span>
                    </div>
                    <Button variant="outline">Start Lesson</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Course Resources</CardTitle>
              <CardDescription>Additional materials for your studies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "Korean Alphabet Practice Sheets.pdf",
                  "Common Phrases Guide.pdf",
                  "Korean Culture Notes.pdf",
                  "Vocabulary Lists.xlsx",
                  "Grammar Reference Guide.pdf",
                ].map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <span>{resource}</span>
                    </div>
                    <Button variant="outline">Download</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="discussions">
          <Card>
            <CardHeader>
              <CardTitle>Course Discussions</CardTitle>
              <CardDescription>Engage with your peers and instructor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No discussions yet</p>
                  <Button className="mt-4">Start a Discussion</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}