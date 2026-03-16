import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  FileText, 
  Video, 
  Download, 
  Play,
  Search,
  Filter,
  Clock,
  BookOpen,
  File,
  ExternalLink,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const resources = [
  { id: 1, title: "React Component Patterns", type: "PDF", size: "2.4 MB", tutor: "Sarah Chen", date: "Dec 5, 2024", progress: 75 },
  { id: 2, title: "TypeScript Cheat Sheet", type: "PDF", size: "1.1 MB", tutor: "Michael Park", date: "Dec 3, 2024", progress: 100 },
  { id: 3, title: "CSS Grid Complete Guide", type: "PDF", size: "3.2 MB", tutor: "Lisa Wang", date: "Nov 28, 2024", progress: 45 },
  { id: 4, title: "Node.js Best Practices", type: "PDF", size: "2.8 MB", tutor: "Sarah Chen", date: "Nov 20, 2024", progress: 20 },
];

const recordings = [
  { id: 1, title: "React Hooks Deep Dive", duration: "58:23", tutor: "Sarah Chen", date: "Dec 5, 2024", watched: 85 },
  { id: 2, title: "TypeScript Generics Workshop", duration: "1:12:45", tutor: "Michael Park", date: "Dec 1, 2024", watched: 100 },
  { id: 3, title: "State Management Comparison", duration: "45:30", tutor: "Sarah Chen", date: "Nov 25, 2024", watched: 60 },
  { id: 4, title: "Testing React Apps", duration: "52:10", tutor: "Lisa Wang", date: "Nov 18, 2024", watched: 0 },
];

const notes = [
  { id: 1, title: "React Advanced Patterns Notes", content: "Key concepts from the session including render props, HOCs, and compound components...", date: "Dec 5, 2024", starred: true },
  { id: 2, title: "TypeScript Tips & Tricks", content: "Utility types, conditional types, and mapped types explained with examples...", date: "Dec 1, 2024", starred: true },
  { id: 3, title: "CSS Layout Strategies", content: "When to use Flexbox vs Grid, common patterns and gotchas...", date: "Nov 28, 2024", starred: false },
  { id: 4, title: "API Design Principles", content: "RESTful conventions, error handling, and versioning strategies...", date: "Nov 15, 2024", starred: false },
];

const StudentMaterials = () => {
  return (
    <DashboardLayout userType="student" userName="Alex Johnson">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-slide-up">
          <div>
            <h1 className="text-3xl font-bold mb-2">Course Materials</h1>
            <p className="text-muted-foreground">Access your learning resources, recordings, and notes</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search materials..." className="pl-10 w-64" />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div className="text-2xl font-bold">{resources.length}</div>
            <div className="text-sm text-muted-foreground">Resources</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-3">
              <Video className="w-5 h-5 text-primary" />
            </div>
            <div className="text-2xl font-bold">{recordings.length}</div>
            <div className="text-sm text-muted-foreground">Recordings</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center mb-3">
              <BookOpen className="w-5 h-5 text-success" />
            </div>
            <div className="text-2xl font-bold">{notes.length}</div>
            <div className="text-sm text-muted-foreground">Notes</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-warning" />
            </div>
            <div className="text-2xl font-bold">3h 48m</div>
            <div className="text-sm text-muted-foreground">Watch Time</div>
          </div>
        </div>

        {/* Tabs Content */}
        <Tabs defaultValue="resources" className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-between mb-4">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="resources" className="data-[state=active]:bg-card">
                <FileText className="w-4 h-4 mr-2" />
                Resources
              </TabsTrigger>
              <TabsTrigger value="recordings" className="data-[state=active]:bg-card">
                <Video className="w-4 h-4 mr-2" />
                Recordings
              </TabsTrigger>
              <TabsTrigger value="notes" className="data-[state=active]:bg-card">
                <BookOpen className="w-4 h-4 mr-2" />
                Notes
              </TabsTrigger>
            </TabsList>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tutors</SelectItem>
                <SelectItem value="sarah">Sarah Chen</SelectItem>
                <SelectItem value="michael">Michael Park</SelectItem>
                <SelectItem value="lisa">Lisa Wang</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Resources Tab */}
          <TabsContent value="resources">
            <div className="bg-card rounded-xl border border-border shadow-soft">
              <div className="divide-y divide-border">
                {resources.map((resource, index) => (
                  <div 
                    key={resource.id} 
                    className="p-5 flex items-center gap-4 hover:bg-muted/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <File className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium mb-1">{resource.title}</div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{resource.type} • {resource.size}</span>
                        <span>by {resource.tutor}</span>
                        <span>{resource.date}</span>
                      </div>
                      {resource.progress < 100 && (
                        <div className="mt-2 flex items-center gap-2">
                          <Progress value={resource.progress} className="h-1.5 flex-1 max-w-32" />
                          <span className="text-xs text-muted-foreground">{resource.progress}%</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Recordings Tab */}
          <TabsContent value="recordings">
            <div className="grid md:grid-cols-2 gap-4">
              {recordings.map((recording) => (
                <div 
                  key={recording.id} 
                  className="bg-card rounded-xl border border-border shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative flex items-center justify-center">
                    <Button size="lg" className="rounded-full w-16 h-16">
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                    <div className="absolute bottom-3 right-3 bg-foreground/80 text-background px-2 py-1 rounded text-sm font-medium">
                      {recording.duration}
                    </div>
                    {recording.watched > 0 && recording.watched < 100 && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                        <div className="h-full bg-primary" style={{ width: `${recording.watched}%` }} />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">{recording.title}</h3>
                        <p className="text-sm text-muted-foreground">by {recording.tutor} • {recording.date}</p>
                      </div>
                      {recording.watched === 100 ? (
                        <Badge className="bg-success/10 text-success border-success/20">Completed</Badge>
                      ) : recording.watched > 0 ? (
                        <Badge variant="secondary">{recording.watched}% watched</Badge>
                      ) : (
                        <Badge variant="outline">New</Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Notes Tab */}
          <TabsContent value="notes">
            <div className="grid md:grid-cols-2 gap-4">
              {notes.map((note) => (
                <div 
                  key={note.id} 
                  className="bg-card rounded-xl border border-border shadow-soft p-5 hover:shadow-medium transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold">{note.title}</h3>
                    <Button variant="ghost" size="icon" className={note.starred ? "text-warning" : "text-muted-foreground"}>
                      <Star className={`w-4 h-4 ${note.starred ? "fill-warning" : ""}`} />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{note.content}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{note.date}</span>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default StudentMaterials;
