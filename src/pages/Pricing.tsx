import { Code2, Check, ChevronRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const pricingTiers = [
  {
    code: "WEBF15D",
    name: "Web Fundamentals",
    price: "R 120.00",
    description: "HTML, CSS, and JavaScript basics",
    features: [
      "Web development fundamentals",
      "Responsive design principles",
      "JavaScript essentials",
      "Live coding sessions",
      "Code review and feedback",
    ],
  },
  {
    code: "PPBF15D / PPB115D",
    name: "Programming Principles",
    price: "R 150.00",
    description: "Core programming concepts",
    features: [
      "Programming fundamentals",
      "Problem-solving techniques",
      "Data structures basics",
      "Live mentoring sessions",
      "Weekly assignments",
    ],
  },
  {
    code: "DTP216D / OOP216D / DBP316D",
    name: "Advanced Programming",
    price: "R 130.00",
    description: "OOP, Design Patterns, Databases",
    features: [
      "Object-oriented programming",
      "Design patterns",
      "Database fundamentals",
      "Project-based learning",
      "One-on-one code reviews",
    ],
  },
  {
    code: "INT316D",
    name: "Integration & APIs",
    price: "R 150.00",
    description: "System integration and APIs",
    features: [
      "API design and implementation",
      "System integration",
      "Microservices concepts",
      "Real-world projects",
      "Advanced mentoring",
    ],
  },
];

const packages = [
  {
    name: "Package 1: OOP/DTP Bundle",
    price: "R 220.00",
    modules: ["OOP216D", "DTP216D"],
    savings: "R 40.00",
    highlight: false,
    features: [
      "Both advanced programming modules",
      "Combined learning path",
      "Coordinated project work",
      "Package mentoring sessions",
    ],
  },
  {
    name: "Package 2: INT/DBP Bundle",
    price: "R 230.00",
    modules: ["INT316D", "DBP316D"],
    savings: "R 50.00",
    highlight: true,
    features: [
      "Integration and database modules",
      "Advanced system design",
      "Real-world projects",
      "Expert-led sessions",
    ],
  },
];

const Pricing = () => {
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
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link to="/pricing" className="text-sm text-primary font-medium">
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
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transparent <span className="text-secondary">Pricing</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Affordable, flexible pricing options for every learning path. Choose individual modules or save with our bundles.
            </p>
          </div>

          {/* Individual Modules */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-4 text-center">Module Pricing</h2>
            <p className="text-muted-foreground text-center mb-12">
              Choose individual modules based on your learning goals
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingTiers.map((tier) => (
                <Card
                  key={tier.code}
                  className="p-6 border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg flex flex-col"
                >
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-primary mb-1">
                      {tier.code}
                    </p>
                    <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {tier.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="text-3xl font-bold mb-2">{tier.price}</div>
                    <p className="text-xs text-muted-foreground">per semester</p>
                  </div>

                  <div className="space-y-3 mb-6 flex-1">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full" asChild>
                    <Link to="/signup">Enroll</Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Bundles Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">Bundles & Packages</h2>
            <p className="text-muted-foreground text-center mb-12">
              Save more by combining modules. Perfect for comprehensive learning.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {packages.map((pkg, idx) => (
                <Card
                  key={idx}
                  className={`p-8 border transition-all ${
                    pkg.highlight
                      ? "border-primary/50 bg-primary/5 ring-2 ring-primary/20"
                      : "border-border/50"
                  } hover:shadow-lg`}
                >
                  {pkg.highlight && (
                    <div className="mb-4">
                      <Badge className="bg-primary text-primary-foreground">
                        <Zap className="w-3 h-3 mr-1" />
                        Best Value
                      </Badge>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>

                  <div className="space-y-2 mb-6">
                    <div className="text-4xl font-bold">{pkg.price}</div>
                    <div className="text-sm text-green-600 font-semibold">
                      Save {pkg.savings} vs individual pricing
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Includes: {pkg.modules.join(", ")}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full"
                    variant={pkg.highlight ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/signup">Get Bundle</Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* One-on-One Section */}
          <Card className="p-8 md:p-12 border border-secondary/50 bg-secondary/5 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Premium One-on-One Tutoring
                </h2>
                <p className="text-muted-foreground mb-6">
                  Get personalized guidance tailored to your specific learning needs. Our expert tutors provide focused mentorship for accelerated learning.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Customized learning plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Direct access to expert tutors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Flexible scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Priority project reviews</span>
                  </li>
                </ul>

                <Button asChild>
                  <Link to="/contact">
                    Inquire Now
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold mb-2">R 220.00</div>
                <p className="text-muted-foreground mb-6">per session</p>
                <p className="text-sm text-muted-foreground">
                  Inbox 0763824437 for enquiry and booking
                </p>
              </div>
            </div>
          </Card>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

            <div className="space-y-4 max-w-3xl mx-auto">
              <Card className="p-6 border border-border/50">
                <h3 className="font-bold mb-2">When does Semester 1 start?</h3>
                <p className="text-sm text-muted-foreground">
                  Enroll now to secure your spot. Classes begin as per the semester schedule.
                </p>
              </Card>

              <Card className="p-6 border border-border/50">
                <h3 className="font-bold mb-2">Can I combine multiple modules?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! You can choose individual modules or take advantage of our bundle packages for additional savings.
                </p>
              </Card>

              <Card className="p-6 border border-border/50">
                <h3 className="font-bold mb-2">Is there a refund policy?</h3>
                <p className="text-sm text-muted-foreground">
                  Contact our support team at 0763824437 to discuss refund policies and terms.
                </p>
              </Card>

              <Card className="p-6 border border-border/50">
                <h3 className="font-bold mb-2">Do you offer payment plans?</h3>
                <p className="text-sm text-muted-foreground">
                  WhatsApp us for inquiries about payment plan options and availability.
                </p>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="p-8 md:p-12 border border-primary/50 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Start Your Programming Journey
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose your module, enroll today, and begin learning with our expert tutors
            </p>
            <Button size="lg" asChild>
              <Link to="/signup">
                Enroll Now
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
