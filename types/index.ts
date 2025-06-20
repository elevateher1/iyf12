export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "teacher" | "student" | "parent";
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  progress?: number;
  totalLessons?: number;
  completedLessons?: number;
  schedule?: string;
  image?: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  badge?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  important?: boolean;
  new?: boolean;
  sender?: User;
}

export interface Attendance {
  id: string;
  courseId: string;
  courseName: string;
  date: string;
  status: "present" | "absent" | "excused";
}

export interface Grade {
  id: string;
  courseId: string;
  courseName: string;
  type: "exam" | "assignment" | "project" | "participation";
  title: string;
  score: number;
  maxScore: number;
  date: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: "sermon" | "devotional" | "study-guide" | "mind-education" | "music" | "prayer";
  url: string;
}