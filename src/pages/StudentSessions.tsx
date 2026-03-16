import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  Video, 
  Clock, 
  Calendar,
  ExternalLink,
  User,
  ChevronRight,
  Filter,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sessions = [
  {
    id: 1,
    tutor: "Sarah Chen",
    topic: "React Hooks Deep Dive",
    description: "Understanding useState, useEffect, and custom hooks with practical examples",
    date: "Dec 9, 2024",
    time: "3:00 PM - 4:00 PM",
    status: "live",
    meetingLink: "https://meet.example.com/abc123"
  },
  {
    id: 2,
    tutor: "Michael Park",
    topic: "TypeScript Generics",
    description: "Master generic types, constraints, and utility types",
    date: "Dec 10, 2024",
    time: "10:00 AM - 11:00 AM",
    status: "upcoming",
    meetingLink: "https://meet.example.com/def456"
  },
  {
    id: 3,
    tutor: "Sarah Chen",
    topic: "State Management Patterns",
    description: "Redux, Zustand, and Context API comparison",
    date: "Dec 12, 2024",
    time: "2:00 PM - 3:00 PM",
    status: "scheduled",
    meetingLink: null
  },
  {
    id: 4,
    tutor: "Lisa Wang",
    topic: "Testing React Applications",
    description: "Unit testing with Jest and React Testing Library",
    date: "Dec 15, 2024",
    time: "4:00 PM - 5:00 PM",
    status: "scheduled",
    meetingLink: null
  },
  {
    id: 5,
    tutor: "Michael Park",
    topic: "API Design Best Practices",
    description: "RESTful design principles and error handling",
    date: "Dec 18, 2024",
    time: "11:00 AM - 12:00 PM",
    status: "scheduled",
    meetingLink: null
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'live':
      return <Badge className="bg-destructive/10 text-destructive border-destructive/20 animate-pulse">● Live Now</Badge>;
    case 'upcoming':
      return <Badge className="bg-success/10 text-success border-success/20">Upcoming</Badge>;
    default:
      return <Badge variant="secondary">Scheduled</Badge>;
  }
};

const StudentSessions = () => {
  return (
    <DashboardLayout userType="student" userName="Alex Johnson">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-slide-up">
          <div>
            <h1 className="text-3xl font-bold mb-2">Upcoming Sessions</h1>
            <p className="text-muted-foreground">Manage your scheduled learning sessions</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search sessions..." className="pl-10 w-64" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sessions</SelectItem>
                <SelectItem value="live">Live Now</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Sessions List */}
        <div className="space-y-4">
          {sessions.map((session, index) => (
            <div 
              key={session.id} 
              className={`bg-card rounded-xl border shadow-soft p-6 hover:shadow-medium transition-all duration-300 animate-slide-up ${
                session.status === 'live' ? 'border-destructive/30 ring-2 ring-destructive/10' : 'border-border'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Tutor Avatar */}
                <div className="flex items-center gap-4 lg:w-1/4">
                  <div className="w-12 h-12 rounded-xl gradient-sky flex items-center justify-center text-primary-foreground font-semibold shrink-0">
                    {session.tutor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium">{session.tutor}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <User className="w-3 h-3" />
                      Instructor
                    </div>
                  </div>
                </div>

                {/* Session Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{session.topic}</h3>
                    {getStatusBadge(session.status)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{session.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {session.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {session.time}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 lg:w-auto">
                  {session.status === 'live' ? (
                    <Button variant="hero" className="w-full lg:w-auto">
                      <Video className="w-4 h-4 mr-2" />
                      Join Now
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  ) : session.meetingLink ? (
                    <Button className="w-full lg:w-auto">
                      <Video className="w-4 h-4 mr-2" />
                      Join Session
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full lg:w-auto">
                      View Details
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Session Stats */}
        <div className="grid md:grid-cols-3 gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="text-3xl font-bold text-primary">5</div>
            <div className="text-sm text-muted-foreground">Upcoming Sessions</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="text-3xl font-bold text-primary">12</div>
            <div className="text-sm text-muted-foreground">Completed This Month</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="text-3xl font-bold text-primary">24</div>
            <div className="text-sm text-muted-foreground">Total Hours Learned</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentSessions;
