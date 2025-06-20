"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "The Mind Education program completely transformed how I approach challenges. I've grown not just spiritually but also in my mental resilience.",
    name: "Sarah Kim",
    role: "Student, South Korea",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
  },
  {
    id: 2,
    quote: "Participating in IYF World Camp was life-changing. I made friends from across the globe while deepening my faith and understanding of different cultures.",
    name: "Michael Johnson",
    role: "Student, United States",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    id: 3,
    quote: "The leadership training equipped me with practical skills I use daily. The mentorship from experienced facilitators was invaluable to my growth.",
    name: "Elena Martinez",
    role: "Youth Leader, Mexico",
    avatar: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg"
  },
  {
    id: 4,
    quote: "As a parent, I've seen remarkable growth in my daughter's character and confidence since she joined IYF. The community is supportive and nurturing.",
    name: "David Chen",
    role: "Parent, Canada",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    id: 5,
    quote: "The Bible study courses have given me a deeper understanding of scripture and how to apply its teachings in my daily life and relationships.",
    name: "Grace Okafor",
    role: "Student, Nigeria",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="container py-20">
      <div className="mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold sm:text-4xl mb-4">Student Testimonials</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hear from our community about how IYF School has impacted their lives through education, spiritual growth, and global connections.
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <QuoteIcon className="absolute -top-10 left-0 h-16 w-16 text-primary/10" strokeWidth={1} />
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="flex-shrink-0 w-full border-none shadow-none bg-transparent">
                <CardContent className="px-0 py-4 text-center">
                  <blockquote className="mb-8">
                    <p className="text-xl italic md:text-2xl">"{testimonial.quote}"</p>
                  </blockquote>
                  <div className="flex flex-col items-center">
                    <Avatar className="h-16 w-16 mb-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="outline"
              size="icon"
              className={`h-2.5 w-2.5 rounded-full p-0 ${
                index === activeIndex ? "bg-primary" : "bg-muted"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </Button>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center gap-4">
          <Button
            variant="outline"
            onClick={prev}
            className="rounded-full h-10 w-10 p-0"
            aria-label="Previous testimonial"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
          
          <Button
            variant="outline"
            onClick={next}
            className="rounded-full h-10 w-10 p-0"
            aria-label="Next testimonial"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}