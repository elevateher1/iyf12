"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  Users,
  FileText,
  Award,
  Heart,
  Settings,
  Bell,
} from "lucide-react";

interface DashboardNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    tab: "overview",
  },
  {
    title: "My Courses",
    href: "/dashboard/courses",
    icon: BookOpen,
    tab: "courses",
  },
  {
    title: "Events",
    href: "/dashboard/events",
    icon: Calendar,
    tab: "events",
  },
  {
    title: "Grades",
    href: "/dashboard/grades",
    icon: Award,
    tab: "grades",
  },
  {
    title: "Attendance",
    href: "/dashboard/attendance",
    icon: FileText,
    tab: "attendance",
  },
  {
    title: "Resources",
    href: "/dashboard/resources",
    icon: Heart,
    tab: "resources",
  },
  {
    title: "Community",
    href: "/dashboard/community",
    icon: Users,
    tab: "community",
  },
];

export function DashboardNav({ activeTab, setActiveTab }: DashboardNavProps) {
  return (
    <div className="hidden border-r bg-card md:block md:w-64">
      <div className="flex h-full flex-col gap-2 p-4">
        <div className="flex items-center gap-2 px-4 py-2">
          <BookOpen className="h-6 w-6" />
          <span className="text-xl font-bold">IYF School</span>
        </div>
        <div className="flex flex-1 flex-col gap-1 py-4">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(item.tab);
              }}
              className={cn(
                "flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
                activeTab === item.tab
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-1 border-t py-4">
          <Link
            href="/dashboard/notifications"
            className="flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-medium hover:bg-muted"
          >
            <Bell className="h-5 w-5" />
            Notifications
            <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              3
            </span>
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-medium hover:bg-muted"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
}