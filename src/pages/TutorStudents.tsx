import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  Users,
  Search,
  Filter,
  MoreVertical,
  Mail,
  MessageSquare,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Plus,
  DollarSign,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const students = [
  { 
    id: 1, 
    name: "Alex Johnson", 
    email: "alex@example.com",
    avatar: "AJ",
    sessions: 12, 
    lastSession: "Today", 
    status: "active",
    paymentStatus: "paid",
    progress: 78,
    topics: ["React", "TypeScript"],
    enrolled: "Sep 1, 2024",
    totalPaid: 588
  },
  { 
    id: 2, 
    name: "Emma Wilson", 
    email: "emma@example.com",
    avatar: "EW",
    sessions: 8, 
    lastSession: "Yesterday", 
    status: "active",
    paymentStatus: "paid",
    progress: 65,
    topics: ["CSS", "HTML"],
    enrolled: "Oct 15, 2024",
    totalPaid: 392
  },
  { 
    id: 3, 
    name: "James Lee", 
    email: "james@example.com",
    avatar: "JL",
    sessions: 15, 
    lastSession: "Dec 5", 
    status: "active",
    paymentStatus: "pending",
    progress: 92,
    topics: ["Node.js", "Express"],
    enrolled: "Aug 20, 2024",
    totalPaid: 735
  },
  { 
    id: 4, 
    name: "Sofia Martinez", 
    email: "sofia@example.com",
    avatar: "SM",
    sessions: 3, 
    lastSession: "Dec 1", 
    status: "pending",
    paymentStatus: "overdue",
    progress: 25,
    topics: ["JavaScript"],
    enrolled: "Nov 28, 2024",
    totalPaid: 98
  },
  { 
    id: 5, 
    name: "David Kim", 
    email: "david@example.com",
    avatar: "DK",
    sessions: 6, 
    lastSession: "Nov 28", 
    status: "inactive",
    paymentStatus: "paid",
    progress: 45,
    topics: ["React", "Redux"],
    enrolled: "Oct 5, 2024",
    totalPaid: 294
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return <Badge className="bg-success/10 text-success border-success/20"><CheckCircle2 className="w-3 h-3 mr-1" />Active</Badge>;
    case 'pending':
      return <Badge className="bg-warning/10 text-warning border-warning/20"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
    case 'inactive':
      return <Badge variant="secondary"><AlertCircle className="w-3 h-3 mr-1" />Inactive</Badge>;
    default:
      return null;
  }
};

const getPaymentBadge = (status: string) => {
  switch (status) {
    case 'paid':
      return <Badge className="bg-success/10 text-success border-success/20">Paid</Badge>;
    case 'pending':
      return <Badge className="bg-warning/10 text-warning border-warning/20">Pending</Badge>;
    case 'overdue':
      return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Overdue</Badge>;
    default:
      return null;
  }
};

const TutorStudents = () => {
  return (
    <DashboardLayout userType="tutor" userName="Sarah Chen">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-slide-up">
          <div>
            <h1 className="text-3xl font-bold mb-2">Student Management</h1>
            <p className="text-muted-foreground">Track your enrolled students, payments, and progress</p>
          </div>
          <Button variant="hero">
            <Plus className="w-4 h-4 mr-2" />
            Add Student
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <TrendingUp className="w-4 h-4 text-success" />
            </div>
            <div className="text-2xl font-bold">{students.length}</div>
            <div className="text-sm text-muted-foreground">Total Students</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
            </div>
            <div className="text-2xl font-bold">{students.filter(s => s.status === 'active').length}</div>
            <div className="text-sm text-muted-foreground">Active</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-warning" />
              </div>
            </div>
            <div className="text-2xl font-bold">{students.filter(s => s.paymentStatus !== 'paid').length}</div>
            <div className="text-sm text-muted-foreground">Pending Payments</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="text-2xl font-bold">72%</div>
            <div className="text-sm text-muted-foreground">Avg. Progress</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search students..." className="pl-10" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Payment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Payments</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Students Table */}
        <div className="bg-card rounded-xl border border-border shadow-soft overflow-hidden animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">Student</th>
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">Status</th>
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">Sessions</th>
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">Payment</th>
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">Progress</th>
                  <th className="text-left text-sm font-medium text-muted-foreground p-4">Topics</th>
                  <th className="text-right text-sm font-medium text-muted-foreground p-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full gradient-sky flex items-center justify-center text-primary-foreground font-semibold text-sm">
                          {student.avatar}
                        </div>
                        <div>
                          <div className="font-medium">{student.name}</div>
                          <div className="text-sm text-muted-foreground">{student.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">{getStatusBadge(student.status)}</td>
                    <td className="p-4">
                      <div className="font-medium">{student.sessions}</div>
                      <div className="text-xs text-muted-foreground">Last: {student.lastSession}</div>
                    </td>
                    <td className="p-4">
                      {getPaymentBadge(student.paymentStatus)}
                      <div className="text-xs text-muted-foreground mt-1">${student.totalPaid} total</div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Progress value={student.progress} className="h-2 w-20" />
                        <span className="text-sm font-medium">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-1">
                        {student.topics.map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">{topic}</Badge>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon">
                          <Mail className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Schedule Session</DropdownMenuItem>
                            <DropdownMenuItem>View Payment History</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Remove Student</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Student Cards (Mobile/Alternative View) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:hidden">
          {students.map((student) => (
            <div key={student.id} className="bg-card rounded-xl border border-border shadow-soft p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full gradient-sky flex items-center justify-center text-primary-foreground font-semibold">
                  {student.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{student.name}</div>
                  <div className="text-sm text-muted-foreground">{student.sessions} sessions</div>
                </div>
                {getStatusBadge(student.status)}
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Progress</span>
                  <div className="flex items-center gap-2">
                    <Progress value={student.progress} className="h-2 w-16" />
                    <span className="text-sm font-medium">{student.progress}%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Payment</span>
                  {getPaymentBadge(student.paymentStatus)}
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4" size="sm">
                View Details
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TutorStudents;
