import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Code2, 
  LayoutDashboard, 
  Calendar, 
  CreditCard, 
  BookOpen, 
  Settings, 
  LogOut,
  ChevronLeft,
  Users,
  FileText,
  CheckSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
  userType: 'student' | 'tutor';
  userName: string;
}

const studentNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/student" },
  { icon: Calendar, label: "Sessions", path: "/student/sessions" },
  { icon: CreditCard, label: "Payments", path: "/student/payments" },
  { icon: BookOpen, label: "Materials", path: "/student/materials" },
  { icon: Settings, label: "Settings", path: "/student/settings" },
];

const tutorNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/tutor" },
  { icon: Calendar, label: "Schedule", path: "/tutor/schedule" },
  { icon: Users, label: "Students", path: "/tutor/students" },
  { icon: FileText, label: "Content", path: "/tutor/content" },
  { icon: CheckSquare, label: "Payments", path: "/tutor/payments" },
  { icon: Settings, label: "Settings", path: "/tutor/settings" },
];

export function DashboardLayout({ children, userType, userName }: DashboardLayoutProps) {
  const location = useLocation();
  const navItems = userType === 'student' ? studentNavItems : tutorNavItems;

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col shrink-0">
        <div className="p-4 border-b border-border">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg gradient-sky flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">BryteCode</span>
          </Link>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive 
                        ? "bg-accent text-accent-foreground" 
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full gradient-sky flex items-center justify-center text-primary-foreground font-semibold">
              {userName.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">{userName}</div>
              <div className="text-xs text-muted-foreground capitalize">{userType}</div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground" asChild>
            <Link to="/">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Link>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Button variant="ghost" size="sm" className="mb-4 text-muted-foreground" asChild>
            <Link to="/">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Home
            </Link>
          </Button>
          {children}
        </div>
      </main>
    </div>
  );
}
