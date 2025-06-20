import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Book, Award, Users, Heart, Globe } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="container py-20">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Our Educational Approach</h2>
        <p className="text-muted-foreground">
          IYF School combines spiritual wisdom, mind education principles, and practical skills to develop well-rounded youth leaders.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="transition-all hover:shadow-lg">
          <CardHeader className="space-y-1">
            <div className="mb-2 h-12 w-12 rounded-lg bg-primary/10 p-2 text-primary">
              <Brain className="h-8 w-8" />
            </div>
            <CardTitle>Mind Education</CardTitle>
            <CardDescription>
              Our core philosophy focusing on training the mind
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Mind education teaches principles of mental discipline, emotional intelligence, and focused awareness based on biblical teachings and practical wisdom.
            </p>
          </CardContent>
        </Card>
        
        <Card className="transition-all hover:shadow-lg">
          <CardHeader className="space-y-1">
            <div className="mb-2 h-12 w-12 rounded-lg bg-primary/10 p-2 text-primary">
              <Book className="h-8 w-8" />
            </div>
            <CardTitle>Bible Studies</CardTitle>
            <CardDescription>
              In-depth exploration of scripture and application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our Bible studies go beyond surface reading to help students understand context, meaning, and modern application of Biblical principles.
            </p>
          </CardContent>
        </Card>
        
        <Card className="transition-all hover:shadow-lg">
          <CardHeader className="space-y-1">
            <div className="mb-2 h-12 w-12 rounded-lg bg-primary/10 p-2 text-primary">
              <Award className="h-8 w-8" />
            </div>
            <CardTitle>Leadership Training</CardTitle>
            <CardDescription>
              Developing the next generation of servant leaders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Leadership programs that equip youth with practical skills, confidence, and a heart for service through mentorship and hands-on experience.
            </p>
          </CardContent>
        </Card>
        
        <Card className="transition-all hover:shadow-lg">
          <CardHeader className="space-y-1">
            <div className="mb-2 h-12 w-12 rounded-lg bg-primary/10 p-2 text-primary">
              <Heart className="h-8 w-8" />
            </div>
            <CardTitle>Character Formation</CardTitle>
            <CardDescription>
              Building integrity, compassion, and resilience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Structured programs designed to develop strong moral character through spiritual disciplines, reflection, and community service.
            </p>
          </CardContent>
        </Card>
        
        <Card className="transition-all hover:shadow-lg">
          <CardHeader className="space-y-1">
            <div className="mb-2 h-12 w-12 rounded-lg bg-primary/10 p-2 text-primary">
              <Globe className="h-8 w-8" />
            </div>
            <CardTitle>Cultural Exchange</CardTitle>
            <CardDescription>
              Broadening horizons through global interactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              International programs that connect youth from different cultures to share experiences, perspectives, and build lasting friendships.
            </p>
          </CardContent>
        </Card>
        
        <Card className="transition-all hover:shadow-lg">
          <CardHeader className="space-y-1">
            <div className="mb-2 h-12 w-12 rounded-lg bg-primary/10 p-2 text-primary">
              <Users className="h-8 w-8" />
            </div>
            <CardTitle>Community Service</CardTitle>
            <CardDescription>
              Putting faith into action through volunteer work
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Structured volunteer opportunities that allow youth to serve their communities while developing compassion and practical skills.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}