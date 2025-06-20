"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Calendar, Users } from "lucide-react";

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg",
    "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg",
    "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/50" />
            <img
              src={image}
              alt={`IYF Hero ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center text-white py-20">
        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Nurturing Young Minds <br className="hidden sm:inline" />
          Through Faith and Education
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl">
          International Youth Fellowship School provides comprehensive spiritual
          and educational development for youth through Mind Education, Bible studies,
          and character-building programs.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link href="/register">
            <Button size="lg" className="group">
              Join Our Community
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/courses">
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur hover:bg-white/20">
              Explore Courses
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col items-center rounded-lg bg-white/10 p-6 backdrop-blur transition-all hover:bg-white/15">
            <BookOpen className="mb-4 h-10 w-10" />
            <h3 className="text-2xl font-bold">20+</h3>
            <p>Courses & Programs</p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-white/10 p-6 backdrop-blur transition-all hover:bg-white/15">
            <Calendar className="mb-4 h-10 w-10" />
            <h3 className="text-2xl font-bold">30+</h3>
            <p>Annual Events</p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-white/10 p-6 backdrop-blur transition-all hover:bg-white/15">
            <Users className="mb-4 h-10 w-10" />
            <h3 className="text-2xl font-bold">10,000+</h3>
            <p>Global Students</p>
          </div>
        </div>
      </div>
      
      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-auto" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            fill="hsl(var(--background))"
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            fill="hsl(var(--background))"
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path
            fill="hsl(var(--background))"
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}