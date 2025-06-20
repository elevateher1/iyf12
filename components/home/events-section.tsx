"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Calendar, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "IYF World Camp 2025",
    description: "A week of spiritual growth, cultural exchange, and mind education",
    image: "https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg",
    date: "June 15-22, 2025",
    location: "Seoul, South Korea",
    badge: "Featured",
  },
  {
    id: 2,
    title: "Youth Leadership Forum",
    description: "Develop leadership skills through workshops and activities",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
    date: "August 5-7, 2025",
    location: "New York, USA",
    badge: "Registration Open",
  },
  {
    id: 3,
    title: "Mind Education Seminar",
    description: "Learn advanced mind education principles from expert facilitators",
    image: "https://images.pexels.com/photos/8422601/pexels-photo-8422601.jpeg",
    date: "September 12-13, 2025",
    location: "Online",
    badge: "Coming Soon",
  },
  {
    id: 4,
    title: "Community Volunteer Project",
    description: "Serve the local community through various outreach programs",
    image: "https://images.pexels.com/photos/7944187/pexels-photo-7944187.jpeg",
    date: "Every Saturday",
    location: "Various Locations",
    badge: "Ongoing",
  },
  {
    id: 5,
    title: "Bible Conference",
    description: "Deep dive into scripture with renowned biblical scholars",
    image: "https://images.pexels.com/photos/5752601/pexels-photo-5752601.jpeg",
    date: "November 18-20, 2025",
    location: "London, UK",
    badge: "New",
  },
];

export function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(events.length - (isMobile() ? 1 : 3), 0);
  const containerRef = useRef<HTMLDivElement>(null);

  function isMobile() {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  }

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex((prev) => Math.min(prev, Math.max(events.length - (isMobile() ? 1 : 3), 0)));
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [events.length]);

  const scroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex(Math.max(currentIndex - 1, 0));
    } else {
      setCurrentIndex(Math.min(currentIndex + 1, maxIndex));
    }
  };

  return (
    <section className="bg-muted/30 py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 sm:text-4xl">Upcoming Events</h2>
            <p className="text-muted-foreground max-w-2xl">
              Join us for transformative experiences through our World Camps, forums, 
              and community service opportunities.
            </p>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              disabled={currentIndex === 0}
              className="transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              disabled={currentIndex >= maxIndex}
              className="transition-all"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            ref={containerRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / (isMobile() ? 1 : 3))}%)` }}
          >
            {events.map((event) => (
              <Card 
                key={event.id} 
                className="flex-shrink-0 w-full md:w-[calc(33.33%-1rem)] md:mr-4 overflow-hidden transition-all hover:shadow-md"
              >
                <div className="relative h-48 bg-muted">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="object-cover w-full h-full"
                  />
                  {event.badge && (
                    <div className="absolute top-4 right-4">
                      <Badge>{event.badge}</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {event.description}
                  </p>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Link href="/events">
            <Button>
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}