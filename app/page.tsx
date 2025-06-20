import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { EventsSection } from "@/components/home/events-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <EventsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}