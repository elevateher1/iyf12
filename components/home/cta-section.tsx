import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-primary">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-primary/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
            <svg
              className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/4 translate-y-1/4 text-primary-foreground/10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
              <path d="M12 8v4l3 3 1-1-2.5-2.5V8z" />
            </svg>
            <GraduationCap className="absolute left-0 top-0 -translate-x-1/4 -translate-y-1/4 h-80 w-80 text-primary-foreground/5" />
          </div>
          
          <div className="relative px-6 py-20 sm:px-12 sm:py-28 md:px-20">
            <div className="mx-auto max-w-2xl text-center text-primary-foreground">
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
                Begin Your Journey with IYF
              </h2>
              <p className="mb-10 text-lg text-primary-foreground/90 sm:text-xl">
                Discover a community dedicated to spiritual growth, 
                educational excellence, and global connection. Join our programs
                and events to develop your mind, heart, and skills.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 justify-center">
                <Link href="/register">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                    Register Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}