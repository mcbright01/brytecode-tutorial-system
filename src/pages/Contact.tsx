import { Code2, Phone, MessageCircle, Mail, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    contact: "0763824437",
    description: "Main support line",
    color: "bg-blue-500/10",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp - Mcbright",
    contact: "0763824437",
    description: "Quick inquiries",
    color: "bg-green-500/10",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp - Terry T",
    contact: "0716669966",
    description: "Tutor consultation",
    color: "bg-green-500/10",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp - London",
    contact: "0766362237",
    description: "Module inquiries",
    color: "bg-green-500/10",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp - Maleka",
    contact: "0766778427",
    description: "Enrollment support",
    color: "bg-green-500/10",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success",
        description: "Message sent! We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

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
            <Link
              to="/pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link to="/contact" className="text-sm text-primary font-medium">
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
              Get in <span className="text-secondary">Touch</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have questions about our services? Want to become a byteCoder or inquire about one-on-one tutoring? We're here to help.
            </p>
          </div>

          {/* Quick Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              const isWhatsApp = method.title.startsWith("WhatsApp");
              const href = isWhatsApp
                ? `https://wa.me/${method.contact.replace(/\D/g, "")}`
                : `tel:${method.contact}`;

              return (
                <a
                  key={idx}
                  href={href}
                  target={isWhatsApp ? "_blank" : undefined}
                  rel={isWhatsApp ? "noopener noreferrer" : undefined}
                >
                  <Card className={`p-4 border border-border/50 hover:border-primary/50 transition-all cursor-pointer hover:shadow-lg h-full ${method.color}`}>
                    <div className="flex flex-col items-center text-center">
                      <Icon className="w-6 h-6 mb-2 text-primary" />
                      <h3 className="font-semibold text-sm mb-1">{method.title}</h3>
                      <p className="text-xs font-mono text-primary mb-1">
                        {method.contact}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <Card className="p-8 border border-border/50 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1 space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1 space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="0763824437"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Enrollment inquiry, tutor application, etc."
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            {/* Info Section */}
            <div className="space-y-6">
              {/* Interested in Teaching */}
              <Card className="p-8 border border-secondary/50 bg-secondary/5">
                <h3 className="text-xl font-bold mb-3">
                  Interested in Teaching?
                </h3>
                <p className="text-muted-foreground mb-6">
                  We're always looking for passionate programmers to join our team as tutors. Share your experience and expertise with our students.
                </p>
                <Button
                  asChild
                  className="w-full"
                >
                  <a href="https://wa.me/27763824437">
                    Apply as Tutor
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </Card>

              {/* Semester Info */}
              <Card className="p-8 border border-primary/50 bg-primary/5">
                <h3 className="text-xl font-bold mb-3">
                  Semester 1 Enrollment
                </h3>
                <p className="text-muted-foreground mb-4">
                  Enroll now to secure your spot for Semester 1. Limited seats available for each module.
                </p>
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>Available now</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Online & in-person options</span>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                >
                  <Link to="/signup">
                    Enroll Now
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </Card>

              {/* Quick Tips */}
              <Card className="p-8 border border-border/50">
                <h3 className="text-xl font-bold mb-4">Quick Tips</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Best time to reach us: 9 AM - 5 PM (Weekdays)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>WhatsApp for fastest response</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>One-on-one requires advance booking</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Contact a specific team member for personalized support</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Testimonial CTA */}
          <Card className="p-8 md:p-12 border border-primary/50 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't wait to begin your programming journey. Enroll today and secure your spot in Semester 1.
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

export default Contact;
