import { Code2, BookOpen, Users, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const modulesList = [
  {
    code: "WEBF15D",
    name: "Web Fundamentals",
    description: "Master HTML, CSS, and JavaScript basics for web development",
    icon: Code2,
  },
  {
    code: "PPBF15D / PPB115D",
    name: "Programming Principles",
    description: "Learn programming fundamentals and problem-solving techniques",
    icon: BookOpen,
  },
  {
    code: "DTP216D / OOP216D / DBP316D",
    name: "Advanced Programming",
    description: "Explore object-oriented programming, design patterns, and databases",
    icon: Award,
  },
  {
    code: "INT316D",
    name: "Integration & APIs",
    description: "Build scalable applications with APIs and system integration",
    icon: Code2,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg gradient-sky flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">BryteCode</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/services"
              className="text-sm text-primary font-medium"
            >
              Services
            </Link>
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/50 text-accent-foreground text-sm mb-6">
              <Award className="w-4 h-4" />
              <span>Semester 1 Enrollment Open</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Our <span className="text-secondary">Programming</span> Services
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Master programming from fundamentals to advanced topics with personalized guidance from industry experts.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="p-8 md:p-12 mb-16 border border-border/50 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                At <span className="font-semibold text-foreground">BryteCode</span>, we're dedicated to helping students master various programming modules, from fundamentals to advanced topics.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                With personalized guidance and support, we empower learners to overcome challenges and achieve their coding goals. We're passionate about illuminating the path to programming excellence, one module at a time.
              </p>
            </div>
          </Card>

          {/* Modules Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Available Modules</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {modulesList.map((module) => {
                const Icon = module.icon;
                return (
                  <Card
                    key={module.code}
                    className="p-8 border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-primary mb-1">
                          {module.code}
                        </p>
                        <h3 className="text-xl font-bold">{module.name}</h3>
                      </div>

                      <p className="text-muted-foreground">{module.description}</p>

                      <Button variant="outline" className="w-full mt-6" asChild>
                        <Link to="/pricing">
                          View Pricing
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Why Choose BryteCode */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 border border-border/50 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Expert Tutors</h3>
              <p className="text-sm text-muted-foreground">
                Learn from experienced developers and industry professionals
              </p>
            </Card>

            <Card className="p-6 border border-border/50 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Comprehensive Content</h3>
              <p className="text-sm text-muted-foreground">
                Curated materials covering fundamentals through advanced concepts
              </p>
            </Card>

            <Card className="p-6 border border-border/50 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Personalized Learning</h3>
              <p className="text-sm text-muted-foreground">
                Get guidance tailored to your pace and learning style
              </p>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="p-8 md:p-12 border border-primary/50 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Master Programming?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Enroll in Semester 1 today and start your journey to programming excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/signup">
                  Enroll Now
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
