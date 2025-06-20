"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, LineChart, Line } from "recharts";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { UpcomingEvents } from "@/components/dashboard/upcoming-events";
import { RecentAnnouncements } from "@/components/dashboard/recent-announcements";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Clock, 
  GraduationCap,
  Award,
  ArrowUpRight,
  FileCheck,
  CalendarRange,
} from "lucide-react";

// Sample data
const attendanceData = [
  { month: 'Jan', attendance: 95 },
  { month: 'Feb', attendance: 90 },
  { month: 'Mar', attendance: 98 },
  { month: 'Apr', attendance: 92 },
  { month: 'May', attendance: 96 },
  { month: 'Jun', attendance: 88 },
];

const coursePerformanceData = [
  { course: 'Bible Study', score: 85 },
  { course: 'Mind Lecture', score: 92 },
  { course: 'Leadership', score: 78 },
  { course: 'Character', score: 88 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-4 md:p-8">
        <div className="grid gap-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back, John! Here's what's happening with your education journey.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">Student</p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:w-[600px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="courses">My Courses</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4</div>
                    <p className="text-xs text-muted-foreground">+1 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">92.5%</div>
                    <p className="text-xs text-muted-foreground">+2.5% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Next Event</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Jun 15</div>
                    <p className="text-xs text-muted-foreground">World Camp Registration</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Achievements</CardTitle>
                    <Award className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">Certificates earned</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Attendance Overview</CardTitle>
                    <CardDescription>Your 6-month attendance record</CardDescription>
                  </CardHeader>
                  <CardContent className="px-2">
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={attendanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="attendance" 
                          stroke="hsl(var(--chart-1))" 
                          activeDot={{ r: 8 }} 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Course Performance</CardTitle>
                    <CardDescription>Your scores across current courses</CardDescription>
                  </CardHeader>
                  <CardContent className="px-2">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={coursePerformanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="course" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Bar dataKey="score" fill="hsl(var(--chart-2))" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-full md:col-span-3">
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Register for upcoming camps and activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UpcomingEvents />
                  </CardContent>
                </Card>
                <Card className="col-span-full md:col-span-4">
                  <CardHeader>
                    <CardTitle>Recent Announcements</CardTitle>
                    <CardDescription>Latest updates from your courses and IYF</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentAnnouncements />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="courses" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="flex flex-col">
                  <CardHeader className="pb-2">
                    <CardTitle>Mind Education</CardTitle>
                    <CardDescription>Prof. Sarah Johnson</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="flex items-center mb-2">
                      <FileCheck className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Progress: 12/15 lessons</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <CalendarRange className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Tue, Thu • 4:00-5:30 PM</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      Learn principles of mental discipline, focus, and emotional intelligence from biblical teachings.
                    </p>
                    <Button className="mt-auto">Continue Course</Button>
                  </CardContent>
                </Card>
                
                <Card className="flex flex-col">
                  <CardHeader className="pb-2">
                    <CardTitle>Bible Study: Proverbs</CardTitle>
                    <CardDescription>Pastor Michael Chen</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="flex items-center mb-2">
                      <FileCheck className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Progress: 8/12 lessons</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <CalendarRange className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Mon, Wed • 6:00-7:30 PM</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      Deep dive into the wisdom of Proverbs and its application in modern life.
                    </p>
                    <Button className="mt-auto">Continue Course</Button>
                  </CardContent>
                </Card>
                
                <Card className="flex flex-col">
                  <CardHeader className="pb-2">
                    <CardTitle>Leadership Fundamentals</CardTitle>
                    <CardDescription>Dr. James Wilson</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="flex items-center mb-2">
                      <FileCheck className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Progress: 6/10 lessons</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <CalendarRange className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Fri • 5:00-7:00 PM</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      Learn core leadership skills based on biblical principles and servant leadership.
                    </p>
                    <Button className="mt-auto">Continue Course</Button>
                  </CardContent>
                </Card>
                
                <Card className="flex flex-col">
                  <CardHeader className="pb-2">
                    <CardTitle>Character Development</CardTitle>
                    <CardDescription>Dr. Emily Rodriguez</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="flex items-center mb-2">
                      <FileCheck className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Progress: 9/15 lessons</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <CalendarRange className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Tue, Thu • 7:00-8:30 PM</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      Explore character formation through spiritual disciplines and biblical reflection.
                    </p>
                    <Button className="mt-auto">Continue Course</Button>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Available Courses</CardTitle>
                  <CardDescription>Explore new courses to enroll in</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="border-dashed border-2">
                    <CardHeader className="pb-2">
                      <CardTitle>Advanced Bible Hermeneutics</CardTitle>
                      <CardDescription>Dr. Thomas Greene</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Learn advanced principles of biblical interpretation and exegesis.
                      </p>
                      <Button variant="outline" className="w-full">Enroll</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-dashed border-2">
                    <CardHeader className="pb-2">
                      <CardTitle>World Mission Preparation</CardTitle>
                      <CardDescription>Pastor Lisa Kim</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Prepare for international mission work with cultural and spiritual training.
                      </p>
                      <Button variant="outline" className="w-full">Enroll</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-dashed border-2">
                    <CardHeader className="pb-2">
                      <CardTitle>Spiritual Disciplines</CardTitle>
                      <CardDescription>Rev. David Anderson</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Practice prayer, meditation, fasting, and other spiritual disciplines.
                      </p>
                      <Button variant="outline" className="w-full">Enroll</Button>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>IYF World Camps and Forums</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="rounded-lg border overflow-hidden">
                      <div className="relative h-48 bg-muted">
                        <img 
                          src="https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg" 
                          alt="World Camp" 
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                          Registration Open
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">IYF World Camp 2025</h3>
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>June 15-22, 2025</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Users className="h-4 w-4 mr-2" />
                          <span>Expected: 500+ youths from 30+ countries</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Join us for a week of spiritual growth, cultural exchange, and mind education at our annual World Camp.
                        </p>
                        <Button className="w-full">Register Now</Button>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border overflow-hidden">
                      <div className="relative h-48 bg-muted">
                        <img 
                          src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg" 
                          alt="Leadership Forum" 
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
                          Coming Soon
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Youth Leadership Forum</h3>
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>August 5-7, 2025</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Users className="h-4 w-4 mr-2" />
                          <span>Limited to 200 participants</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Develop your leadership skills through workshops, guest speakers, and hands-on activities focused on spiritual leadership.
                        </p>
                        <Button variant="outline" className="w-full">Notify Me When Registration Opens</Button>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border overflow-hidden">
                      <div className="relative h-48 bg-muted">
                        <img 
                          src="https://images.pexels.com/photos/7944187/pexels-photo-7944187.jpeg" 
                          alt="Volunteer Project" 
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                          Ongoing
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Community Outreach Project</h3>
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>Every Saturday</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Users className="h-4 w-4 mr-2" />
                          <span>Unlimited volunteers needed</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Serve the local community through various outreach programs including food drives, mentoring, and cleanup projects.
                        </p>
                        <Button className="w-full">Join as Volunteer</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="resources" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Spiritual Resources</CardTitle>
                  <CardDescription>Access sermons, devotionals, and study materials</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <CardTitle>Sermon Library</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-sm text-muted-foreground mb-4 flex-1">
                          Access recordings and transcripts of sermons from IYF pastors and guest speakers.
                        </p>
                        <Button variant="outline" className="mt-auto">Browse Sermons</Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <CardTitle>Daily Devotionals</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-sm text-muted-foreground mb-4 flex-1">
                          Daily readings and reflections to guide your spiritual growth journey.
                        </p>
                        <Button variant="outline" className="mt-auto">View Devotionals</Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <CardTitle>Bible Study Guides</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-sm text-muted-foreground mb-4 flex-1">
                          Downloadable study guides and worksheets for individual or group Bible study.
                        </p>
                        <Button variant="outline" className="mt-auto">Download Guides</Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <CardTitle>Mind Education Materials</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-sm text-muted-foreground mb-4 flex-1">
                          Books, articles, and worksheets focused on mind education principles.
                        </p>
                        <Button variant="outline" className="mt-auto">Browse Materials</Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <CardTitle>Worship Music</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-sm text-muted-foreground mb-4 flex-1">
                          Collection of worship songs and music used in IYF services and events.
                        </p>
                        <Button variant="outline" className="mt-auto">Listen Now</Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <CardTitle>Prayer Resources</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-sm text-muted-foreground mb-4 flex-1">
                          Guides for personal and group prayer, including prayer journals and prompts.
                        </p>
                        <Button variant="outline" className="mt-auto">Access Resources</Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}