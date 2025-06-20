"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Book,
  Music,
  Camera,
  Code,
  Globe,
  Dumbbell,
  Car,
  Scissors,
  Video,
  Wrench,
  Languages,
  Monitor,
  Brain,
  GraduationCap,
  MessageSquare,
  Newspaper,
  Cross,
  Palette,
  ShoppingBag,
  Network,
  Lightbulb,
} from "lucide-react";

const courseCategories = [
  {
    title: "Languages",
    description: "Master new languages and cultures",
    courses: [
      { name: "Korean", icon: Languages, href: "/courses/korean" },
      { name: "Chinese", icon: Languages, href: "/courses/chinese" },
      { name: "French", icon: Languages, href: "/courses/french" },
      { name: "English", icon: Languages, href: "/courses/english" },
      { name: "Sign Language", icon: Languages, href: "/courses/sign-language" },
    ]
  },
  {
    title: "Arts & Performance",
    description: "Express yourself through various art forms",
    courses: [
      { name: "Taekwondo", icon: Dumbbell, href: "/courses/taekwondo" },
      { name: "Dance", icon: Music, href: "/courses/dance" },
      { name: "Art and Music", icon: Palette, href: "/courses/art-music" },
    ]
  },
  {
    title: "Sports & Recreation",
    description: "Stay active and develop teamwork skills",
    courses: [
      { name: "Football", icon: Dumbbell, href: "/courses/football" },
    ]
  },
  {
    title: "Technology & Design",
    description: "Build digital skills for the modern world",
    courses: [
      { name: "UX Design", icon: Lightbulb, href: "/courses/ux-design" },
      { name: "Graphics Design", icon: Palette, href: "/courses/graphics-design" },
      { name: "Computer Programming", icon: Code, href: "/courses/programming" },
      { name: "Computer Packages", icon: Monitor, href: "/courses/computer-packages" },
      { name: "Digital Marketing", icon: MessageSquare, href: "/courses/digital-marketing" },
      { name: "Video Editing", icon: Video, href: "/courses/video-editing" },
      { name: "Networking", icon: Network, href: "/courses/networking" },
    ]
  },
  {
    title: "Vocational Skills",
    description: "Learn practical trade skills",
    courses: [
      { name: "Automotive Repair", icon: Car, href: "/courses/automotive" },
      { name: "Beauty & Hairdressing", icon: Scissors, href: "/courses/beauty" },
      { name: "Electrical Installation", icon: Wrench, href: "/courses/electrical" },
      { name: "Plumbing", icon: Wrench, href: "/courses/plumbing" },
      { name: "Welding", icon: Wrench, href: "/courses/welding" },
      { name: "Fashion and Design", icon: ShoppingBag, href: "/courses/fashion" },
      { name: "Camera Operation", icon: Camera, href: "/courses/camera" },
      { name: "Catering", icon: Book, href: "/courses/catering" },
    ]
  },
  {
    title: "Education & Development",
    description: "Grow personally and professionally",
    courses: [
      { name: "Mindset Education", icon: Brain, href: "/courses/mindset" },
      { name: "Education", icon: GraduationCap, href: "/courses/education" },
      { name: "Theology", icon: Cross, href: "/courses/theology" },
      { name: "News Production", icon: Newspaper, href: "/courses/news" },
    ]
  },
];

export default function CoursesPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-2">Our Courses</h1>
      <p className="text-xl text-muted-foreground mb-10">
        Discover a wide range of courses designed to develop your skills and knowledge
      </p>

      <div className="space-y-10">
        {courseCategories.map((category, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.courses.map((course, courseIndex) => (
                <Link key={courseIndex} href={course.href}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <course.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{course.name}</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}