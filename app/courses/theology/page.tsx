"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Clock, GraduationCap, Users } from "lucide-react";

export default function TheologyCoursePage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Theology Program</h1>
        <p className="text-xl text-muted-foreground">
          Deepen your understanding of biblical principles and theological concepts through comprehensive study and practical application.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Duration</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2 Years</div>
            <p className="text-xs text-muted-foreground">Full program completion</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses</CardTitle>
            <Book className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Core subjects</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">250+</div>
            <p className="text-xs text-muted-foreground">Currently enrolled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certification</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Yes</div>
            <p className="text-xs text-muted-foreground">Accredited program</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="instructors">Instructors</TabsTrigger>
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Program Overview</CardTitle>
              <CardDescription>
                Comprehensive theological education combining academic excellence with practical ministry
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Our Theology program provides a thorough understanding of biblical studies,
                systematic theology, church history, and practical ministry skills. Students
                will engage with both classical and contemporary theological perspectives
                while developing their own understanding of faith and ministry.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Program Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>In-depth Bible study and interpretation</li>
                      <li>Systematic theology and doctrine</li>
                      <li>Church history and traditions</li>
                      <li>Practical ministry training</li>
                      <li>Cross-cultural ministry preparation</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Career Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Pastor or Minister</li>
                      <li>Missionary</li>
                      <li>Religious Education Teacher</li>
                      <li>Youth Minister</li>
                      <li>Chaplain</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="curriculum" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Program Curriculum</CardTitle>
              <CardDescription>Core courses and electives over four semesters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Year 1</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Introduction to Biblical Studies</li>
                      <li>Old Testament Survey</li>
                      <li>New Testament Survey</li>
                      <li>Christian Doctrine</li>
                      <li>Church History I</li>
                      <li>Biblical Languages: Hebrew</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Year 2</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Systematic Theology</li>
                      <li>Biblical Interpretation</li>
                      <li>Pastoral Ministry</li>
                      <li>World Religions</li>
                      <li>Church History II</li>
                      <li>Biblical Languages: Greek</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="instructors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Our Faculty</CardTitle>
              <CardDescription>Learn from experienced theologians and practitioners</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Dr. Sarah Johnson</CardTitle>
                    <CardDescription>Biblical Studies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Ph.D. in Biblical Studies with 15 years of teaching experience.
                      Specializes in Old Testament interpretation and Hebrew.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Dr. Michael Chen</CardTitle>
                    <CardDescription>Systematic Theology</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Th.D. in Systematic Theology. Published author and conference speaker
                      with expertise in contemporary theological issues.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Rev. David Anderson</CardTitle>
                    <CardDescription>Pastoral Ministry</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      20+ years of pastoral experience. Focuses on practical ministry
                      training and spiritual formation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="requirements" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Admission Requirements</CardTitle>
              <CardDescription>Prerequisites and application process</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Academic Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>High school diploma or equivalent</li>
                      <li>Minimum GPA of 2.5</li>
                      <li>Basic understanding of Bible and Christianity</li>
                      <li>English proficiency (for international students)</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Required Documents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Completed application form</li>
                      <li>Official transcripts</li>
                      <li>Two letters of recommendation</li>
                      <li>Statement of faith</li>
                      <li>Personal essay</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-center">
        <Button size="lg" className="w-full md:w-auto">
          Apply Now
        </Button>
      </div>
    </div>
  );
}