import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  Calendar, 
  Clock, 
  CreditCard, 
  BookOpen, 
  TrendingUp,
  Video,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  FileText,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const upcomingSessions = [
  {
    id: 1,
    tutor: "Sarah Chen",
    topic: "React Hooks Deep Dive",
    date: "Today",
    time: "3:00 PM",
    status: "upcoming"
  },
  {
    id: 2,
    tutor: "Michael Park",
    topic: "TypeScript Generics",
    date: "Tomorrow",
    time: "10:00 AM",
    status: "upcoming"
  },
  {
    id: 3,
    tutor: "Sarah Chen",
    topic: "State Management Patterns",
    date: "Dec 12",
    time: "2:00 PM",
    status: "scheduled"
  }
];

const recentMaterials = [
  { id: 1, title: "React Component Patterns", type: "PDF", progress: 75 },
  { id: 2, title: "Advanced CSS Techniques", type: "Video", progress: 45 },
  { id: 3, title: "Node.js Best Practices", type: "PDF", progress: 20 },
];

const paymentStatus = {
  currentPlan: "Pro Monthly",
  nextPayment: "Dec 15, 2024",
  amount: "$49.00",
  status: "active"
};

const StudentDashboard = () => {
  return (
    <DashboardLayout userType="student" userName="Alex Johnson">
      <div className="space-y-8">
        {/* Header */}
        <div className="animate-slide-up">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Alex!</h1>
          <p className="text-muted-foreground">Here's your learning overview for today.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {[
            { icon: Calendar, label: "Sessions This Week", value: "3", color: "bg-accent" },
            { icon: Clock, label: "Hours Learned", value: "12.5", color: "bg-primary/10" },
            { icon: TrendingUp, label: "Progress", value: "78%", color: "bg-success/10" },
            { icon: BookOpen, label: "Materials", value: "8", color: "bg-secondary/10" },
          ].map((stat, i) => (
            <div key={i} className="bg-card rounded-xl p-5 border border-border shadow-soft">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Upcoming Sessions */}
          <div className="lg:col-span-2 bg-card rounded-xl border border-border shadow-soft animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="p-5 border-b border-border flex items-center justify-between">
              <h2 className="font-semibold text-lg">Upcoming Sessions</h2>
              <Button variant="ghost" size="sm">
                View All
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="divide-y divide-border">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="p-5 flex items-center gap-4 hover:bg-muted/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl gradient-sky flex items-center justify-center text-primary-foreground font-semibold">
                    {session.tutor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{session.topic}</div>
                    <div className="text-sm text-muted-foreground">with {session.tutor}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{session.date}</div>
                    <div className="text-sm text-muted-foreground">{session.time}</div>
                  </div>
                  {session.status === 'upcoming' ? (
                    <Button size="sm">
                      <Video className="w-4 h-4 mr-1" />
                      Join
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm">Details</Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Payment Status */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-card rounded-xl border border-border shadow-soft p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg">Payment Status</h2>
                <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Active
                </Badge>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Current Plan</span>
                  <span className="font-medium">{paymentStatus.currentPlan}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Next Payment</span>
                  <span className="font-medium">{paymentStatus.nextPayment}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-muted-foreground">Amount</span>
                  <span className="font-semibold text-lg">{paymentStatus.amount}</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <CreditCard className="w-4 h-4 mr-2" />
                Manage Subscription
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="bg-accent/30 rounded-xl p-5 border border-accent/50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Session Reminder</h3>
                  <p className="text-sm text-muted-foreground">Your next session starts in 2 hours. Make sure to prepare your questions!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Materials */}
        <div className="bg-card rounded-xl border border-border shadow-soft animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="p-5 border-b border-border flex items-center justify-between">
            <h2 className="font-semibold text-lg">Recent Materials</h2>
            <Button variant="ghost" size="sm">
              View Library
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {recentMaterials.map((material) => (
              <div key={material.id} className="p-5 hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    {material.type === 'PDF' ? (
                      <FileText className="w-5 h-5 text-primary" />
                    ) : (
                      <Play className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <Badge variant="secondary" className="text-xs">{material.type}</Badge>
                </div>
                <h3 className="font-medium mb-3">{material.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{material.progress}%</span>
                  </div>
                  <Progress value={material.progress} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
