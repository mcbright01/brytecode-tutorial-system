import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  Calendar, 
  Clock, 
  DollarSign, 
  Users,
  TrendingUp,
  Plus,
  ChevronRight,
  CheckCircle2,
  XCircle,
  FileText,
  Video,
  MoreVertical
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const todaySessions = [
  {
    id: 1,
    student: "Alex Johnson",
    topic: "React Hooks Deep Dive",
    time: "3:00 PM - 4:00 PM",
    status: "upcoming"
  },
  {
    id: 2,
    student: "Emma Wilson",
    topic: "CSS Grid Layouts",
    time: "5:00 PM - 6:00 PM",
    status: "upcoming"
  }
];

const students = [
  { id: 1, name: "Alex Johnson", sessions: 12, lastSession: "Today", status: "active" },
  { id: 2, name: "Emma Wilson", sessions: 8, lastSession: "Yesterday", status: "active" },
  { id: 3, name: "James Lee", sessions: 15, lastSession: "Dec 5", status: "active" },
  { id: 4, name: "Sofia Martinez", sessions: 3, lastSession: "Dec 1", status: "pending" },
];

const pendingPayments = [
  { id: 1, student: "Alex Johnson", amount: 120, sessions: 3, status: "pending" },
  { id: 2, student: "Emma Wilson", amount: 80, sessions: 2, status: "pending" },
];

const contentItems = [
  { id: 1, title: "React Component Patterns", type: "PDF", downloads: 45 },
  { id: 2, title: "TypeScript Fundamentals", type: "Video", views: 128 },
  { id: 3, title: "Advanced CSS Techniques", type: "PDF", downloads: 32 },
];

const TutorDashboard = () => {
  return (
    <DashboardLayout userType="tutor" userName="Sarah Chen">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between animate-slide-up">
          <div>
            <h1 className="text-3xl font-bold mb-2">Good afternoon, Sarah!</h1>
            <p className="text-muted-foreground">You have 2 sessions scheduled for today.</p>
          </div>
          <Button variant="hero">
            <Plus className="w-4 h-4 mr-2" />
            New Session
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {[
            { icon: Users, label: "Active Students", value: "24", change: "+3 this month" },
            { icon: Calendar, label: "Sessions This Week", value: "18", change: "6 remaining" },
            { icon: DollarSign, label: "Earnings This Month", value: "$2,450", change: "+12% vs last" },
            { icon: Clock, label: "Hours Taught", value: "42", change: "This month" },
          ].map((stat, i) => (
            <div key={i} className="bg-card rounded-xl p-5 border border-border shadow-soft">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <TrendingUp className="w-4 h-4 text-success" />
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
              <div className="text-xs text-success mt-1">{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-xl border border-border shadow-soft animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="p-5 border-b border-border flex items-center justify-between">
                <h2 className="font-semibold text-lg">Today's Schedule</h2>
                <Button variant="ghost" size="sm">
                  View Calendar
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <div className="divide-y divide-border">
                {todaySessions.map((session) => (
                  <div key={session.id} className="p-5 flex items-center gap-4 hover:bg-muted/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-accent-foreground font-semibold">
                      {session.student.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium">{session.topic}</div>
                      <div className="text-sm text-muted-foreground">with {session.student}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{session.time}</div>
                      <Badge variant="outline" className="mt-1 bg-accent/30 text-accent-foreground border-accent/50">
                        Upcoming
                      </Badge>
                    </div>
                    <Button size="sm">Start</Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Management */}
            <div className="bg-card rounded-xl border border-border shadow-soft animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="p-5 border-b border-border flex items-center justify-between">
                <h2 className="font-semibold text-lg">Your Students</h2>
                <Button variant="ghost" size="sm">
                  View All
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left text-sm font-medium text-muted-foreground p-4">Student</th>
                      <th className="text-left text-sm font-medium text-muted-foreground p-4">Sessions</th>
                      <th className="text-left text-sm font-medium text-muted-foreground p-4">Last Session</th>
                      <th className="text-left text-sm font-medium text-muted-foreground p-4">Status</th>
                      <th className="text-right text-sm font-medium text-muted-foreground p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {students.map((student) => (
                      <tr key={student.id} className="hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">
                              {student.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="font-medium">{student.name}</span>
                          </div>
                        </td>
                        <td className="p-4 text-muted-foreground">{student.sessions}</td>
                        <td className="p-4 text-muted-foreground">{student.lastSession}</td>
                        <td className="p-4">
                          <Badge 
                            variant="outline" 
                            className={student.status === 'active' 
                              ? 'bg-success/10 text-success border-success/20' 
                              : 'bg-warning/10 text-warning border-warning/20'
                            }
                          >
                            {student.status === 'active' ? (
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                            ) : (
                              <Clock className="w-3 h-3 mr-1" />
                            )}
                            {student.status}
                          </Badge>
                        </td>
                        <td className="p-4 text-right">
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Payment Tracking */}
            <div className="bg-card rounded-xl border border-border shadow-soft animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="p-5 border-b border-border flex items-center justify-between">
                <h2 className="font-semibold text-lg">Pending Payments</h2>
                <Badge variant="secondary">{pendingPayments.length}</Badge>
              </div>
              <div className="divide-y divide-border">
                {pendingPayments.map((payment) => (
                  <div key={payment.id} className="p-4 hover:bg-muted/30 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{payment.student}</span>
                      <span className="font-semibold text-lg">${payment.amount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{payment.sessions} sessions</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="h-7 text-destructive hover:text-destructive">
                          <XCircle className="w-3 h-3 mr-1" />
                          Decline
                        </Button>
                        <Button size="sm" variant="success" className="h-7">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Verify
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-border">
                <Button variant="outline" className="w-full" size="sm">
                  View All Payments
                </Button>
              </div>
            </div>

            {/* Content Management */}
            <div className="bg-card rounded-xl border border-border shadow-soft animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="p-5 border-b border-border flex items-center justify-between">
                <h2 className="font-semibold text-lg">Your Content</h2>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-1" />
                  Add
                </Button>
              </div>
              <div className="divide-y divide-border">
                {contentItems.map((item) => (
                  <div key={item.id} className="p-4 flex items-center gap-3 hover:bg-muted/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      {item.type === 'PDF' ? (
                        <FileText className="w-5 h-5 text-primary" />
                      ) : (
                        <Video className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{item.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {item.type === 'PDF' ? `${item.downloads} downloads` : `${item.views} views`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TutorDashboard;
