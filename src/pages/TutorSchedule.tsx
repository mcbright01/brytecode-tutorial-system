import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  Calendar,
  Clock,
  Plus,
  ChevronLeft,
  ChevronRight,
  Video,
  User,
  MoreVertical,
  X,
  Check,
  Edit
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];

const scheduledSessions = [
  { id: 1, student: "Alex Johnson", topic: "React Hooks", day: 0, time: "3:00 PM", duration: 60, status: "confirmed" },
  { id: 2, student: "Emma Wilson", topic: "CSS Grid", day: 0, time: "5:00 PM", duration: 60, status: "confirmed" },
  { id: 3, student: "James Lee", topic: "TypeScript", day: 1, time: "10:00 AM", duration: 60, status: "pending" },
  { id: 4, student: "Sofia Martinez", topic: "Node.js", day: 2, time: "2:00 PM", duration: 60, status: "confirmed" },
  { id: 5, student: "Alex Johnson", topic: "Testing", day: 3, time: "4:00 PM", duration: 60, status: "confirmed" },
  { id: 6, student: "Emma Wilson", topic: "API Design", day: 4, time: "11:00 AM", duration: 60, status: "pending" },
];

const pendingBookings = [
  { id: 1, student: "New Student", requestedDate: "Dec 12, 2024", requestedTime: "2:00 PM", topic: "JavaScript Basics" },
  { id: 2, student: "David Kim", requestedDate: "Dec 14, 2024", requestedTime: "10:00 AM", topic: "React Introduction" },
];

const TutorSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dialogOpen, setDialogOpen] = useState(false);

  const getDatesForWeek = () => {
    const dates = [];
    const startOfWeek = new Date(selectedDate);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
    startOfWeek.setDate(diff);
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const weekDates = getDatesForWeek();

  return (
    <DashboardLayout userType="tutor" userName="Sarah Chen">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-slide-up">
          <div>
            <h1 className="text-3xl font-bold mb-2">Session Schedule</h1>
            <p className="text-muted-foreground">Manage your teaching schedule and bookings</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="hero">
                <Plus className="w-4 h-4 mr-2" />
                New Session
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Schedule New Session</DialogTitle>
                <DialogDescription>
                  Create a new tutoring session with a student.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label>Student</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select student" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alex">Alex Johnson</SelectItem>
                      <SelectItem value="emma">Emma Wilson</SelectItem>
                      <SelectItem value="james">James Lee</SelectItem>
                      <SelectItem value="sofia">Sofia Martinez</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Topic</Label>
                  <Input placeholder="e.g., React Hooks Deep Dive" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Duration</Label>
                  <Select defaultValue="60">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="90">1.5 hours</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Notes (Optional)</Label>
                  <Textarea placeholder="Add any notes for this session..." />
                </div>
                <Button className="w-full" onClick={() => setDialogOpen(false)}>
                  Schedule Session
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Calendar View */}
          <div className="lg:col-span-3 space-y-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {/* Week Navigation */}
            <div className="bg-card rounded-xl border border-border shadow-soft p-4">
              <div className="flex items-center justify-between mb-4">
                <Button variant="ghost" size="icon">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <h2 className="font-semibold text-lg">
                  {weekDates[0]?.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h2>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Week Grid */}
              <div className="grid grid-cols-7 gap-2">
                {weekDays.map((day, index) => (
                  <div key={day} className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">{day}</div>
                    <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-sm font-medium ${
                      index === 0 ? 'bg-primary text-primary-foreground' : 'hover:bg-muted cursor-pointer'
                    }`}>
                      {weekDates[index]?.getDate()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sessions Grid */}
            <div className="bg-card rounded-xl border border-border shadow-soft overflow-hidden">
              <div className="overflow-x-auto">
                <div className="min-w-[800px]">
                  {/* Header */}
                  <div className="grid grid-cols-8 border-b border-border bg-muted/30">
                    <div className="p-3 text-sm font-medium text-muted-foreground">Time</div>
                    {weekDays.map((day, i) => (
                      <div key={day} className="p-3 text-sm font-medium text-center">
                        {day} {weekDates[i]?.getDate()}
                      </div>
                    ))}
                  </div>

                  {/* Time Slots */}
                  {timeSlots.slice(0, 6).map((time) => (
                    <div key={time} className="grid grid-cols-8 border-b border-border last:border-0">
                      <div className="p-3 text-sm text-muted-foreground">{time}</div>
                      {weekDays.map((_, dayIndex) => {
                        const session = scheduledSessions.find(s => s.day === dayIndex && s.time === time);
                        return (
                          <div key={dayIndex} className="p-2 min-h-[80px]">
                            {session && (
                              <div className={`rounded-lg p-2 text-sm h-full ${
                                session.status === 'confirmed' 
                                  ? 'bg-accent text-accent-foreground' 
                                  : 'bg-warning/10 border border-warning/30'
                              }`}>
                                <div className="font-medium truncate">{session.topic}</div>
                                <div className="text-xs opacity-70 truncate">{session.student}</div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Today's Sessions List */}
            <div className="bg-card rounded-xl border border-border shadow-soft">
              <div className="p-5 border-b border-border">
                <h2 className="font-semibold text-lg">Today's Sessions</h2>
              </div>
              <div className="divide-y divide-border">
                {scheduledSessions.filter(s => s.day === 0).map((session) => (
                  <div key={session.id} className="p-4 flex items-center gap-4 hover:bg-muted/30 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-semibold text-sm">
                      {session.student.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{session.topic}</div>
                      <div className="text-sm text-muted-foreground">with {session.student}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{session.time}</div>
                      <div className="text-xs text-muted-foreground">{session.duration} min</div>
                    </div>
                    <Button size="sm">
                      <Video className="w-4 h-4 mr-2" />
                      Start
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem><Edit className="w-4 h-4 mr-2" /> Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive"><X className="w-4 h-4 mr-2" /> Cancel</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pending Bookings */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card rounded-xl border border-border shadow-soft">
              <div className="p-5 border-b border-border flex items-center justify-between">
                <h2 className="font-semibold text-lg">Booking Requests</h2>
                <Badge variant="secondary">{pendingBookings.length}</Badge>
              </div>
              <div className="divide-y divide-border">
                {pendingBookings.map((booking) => (
                  <div key={booking.id} className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">
                        {booking.student.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{booking.student}</div>
                        <div className="text-xs text-muted-foreground">{booking.topic}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      {booking.requestedDate}
                      <Clock className="w-4 h-4 ml-2" />
                      {booking.requestedTime}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Check className="w-4 h-4 mr-1" />
                        Accept
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <X className="w-4 h-4 mr-1" />
                        Decline
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-accent/30 rounded-xl p-5 border border-accent/50">
              <h3 className="font-medium mb-4">This Week</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Sessions</span>
                  <span className="font-semibold">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Hours Scheduled</span>
                  <span className="font-semibold">18h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Pending Requests</span>
                  <span className="font-semibold">{pendingBookings.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TutorSchedule;
