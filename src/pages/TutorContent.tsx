import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  Upload,
  FileText,
  Video,
  Image,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Download,
  Eye,
  Share2,
  Trash2,
  Link,
  Users,
  FolderOpen,
  File
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const content = [
  { id: 1, title: "React Component Patterns", type: "PDF", size: "2.4 MB", downloads: 45, shared: ["Alex Johnson", "Emma Wilson"], date: "Dec 5, 2024", category: "React" },
  { id: 2, title: "TypeScript Fundamentals", type: "Video", size: "156 MB", views: 128, shared: ["All Students"], date: "Dec 3, 2024", category: "TypeScript" },
  { id: 3, title: "Advanced CSS Techniques", type: "PDF", size: "3.2 MB", downloads: 32, shared: ["Emma Wilson"], date: "Nov 28, 2024", category: "CSS" },
  { id: 4, title: "Node.js Best Practices", type: "PDF", size: "2.8 MB", downloads: 28, shared: ["James Lee"], date: "Nov 20, 2024", category: "Node.js" },
  { id: 5, title: "React Hooks Workshop", type: "Video", size: "210 MB", views: 85, shared: ["Alex Johnson"], date: "Nov 15, 2024", category: "React" },
  { id: 6, title: "API Design Guide", type: "PDF", size: "1.5 MB", downloads: 19, shared: ["All Students"], date: "Nov 10, 2024", category: "API" },
];

const categories = ["All", "React", "TypeScript", "CSS", "Node.js", "API"];
const students = ["All Students", "Alex Johnson", "Emma Wilson", "James Lee", "Sofia Martinez"];

const getFileIcon = (type: string) => {
  switch (type) {
    case 'PDF':
      return <FileText className="w-5 h-5 text-destructive" />;
    case 'Video':
      return <Video className="w-5 h-5 text-primary" />;
    case 'Image':
      return <Image className="w-5 h-5 text-success" />;
    default:
      return <File className="w-5 h-5 text-muted-foreground" />;
  }
};

const TutorContent = () => {
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<typeof content[0] | null>(null);

  const totalSize = content.reduce((sum, c) => {
    const size = parseFloat(c.size);
    return sum + (c.size.includes('MB') ? size : size / 1000);
  }, 0);

  return (
    <DashboardLayout userType="tutor" userName="Sarah Chen">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-slide-up">
          <div>
            <h1 className="text-3xl font-bold mb-2">Content Management</h1>
            <p className="text-muted-foreground">Upload and share resources with your students</p>
          </div>
          <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="hero">
                <Upload className="w-4 h-4 mr-2" />
                Upload Content
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Upload New Content</DialogTitle>
                <DialogDescription>
                  Share resources, recordings, or notes with your students.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
                  <p className="text-sm font-medium mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground">PDF, MP4, or images up to 500MB</p>
                </div>
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input placeholder="e.g., React Hooks Complete Guide" />
                </div>
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.filter(c => c !== 'All').map((cat) => (
                        <SelectItem key={cat} value={cat.toLowerCase()}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Description (Optional)</Label>
                  <Textarea placeholder="Brief description of the content..." />
                </div>
                <div className="space-y-2">
                  <Label>Share With</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select students" />
                    </SelectTrigger>
                    <SelectContent>
                      {students.map((student) => (
                        <SelectItem key={student} value={student.toLowerCase().replace(' ', '-')}>{student}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full" onClick={() => setUploadDialogOpen(false)}>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Content
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <FolderOpen className="w-5 h-5 text-primary" />
            </div>
            <div className="text-2xl font-bold">{content.length}</div>
            <div className="text-sm text-muted-foreground">Total Files</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-3">
              <FileText className="w-5 h-5 text-destructive" />
            </div>
            <div className="text-2xl font-bold">{content.filter(c => c.type === 'PDF').length}</div>
            <div className="text-sm text-muted-foreground">Documents</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-3">
              <Video className="w-5 h-5 text-primary" />
            </div>
            <div className="text-2xl font-bold">{content.filter(c => c.type === 'Video').length}</div>
            <div className="text-sm text-muted-foreground">Videos</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-5 shadow-soft">
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center mb-3">
              <Download className="w-5 h-5 text-success" />
            </div>
            <div className="text-2xl font-bold">{content.reduce((sum, c) => sum + (c.downloads || c.views || 0), 0)}</div>
            <div className="text-sm text-muted-foreground">Total Downloads</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search content..." className="pl-10" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat.toLowerCase()}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="pdf">PDF</SelectItem>
              <SelectItem value="video">Video</SelectItem>
              <SelectItem value="image">Image</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {content.map((item) => (
            <div key={item.id} className="bg-card rounded-xl border border-border shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300">
              {/* Preview Area */}
              <div className={`h-32 flex items-center justify-center ${
                item.type === 'Video' ? 'bg-primary/10' : item.type === 'PDF' ? 'bg-destructive/5' : 'bg-muted'
              }`}>
                {item.type === 'Video' ? (
                  <div className="w-16 h-16 rounded-full bg-card shadow-soft flex items-center justify-center">
                    <Video className="w-8 h-8 text-primary" />
                  </div>
                ) : (
                  <FileText className="w-12 h-12 text-muted-foreground" />
                )}
              </div>

              {/* Content Details */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getFileIcon(item.type)}
                    <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem><Eye className="w-4 h-4 mr-2" />Preview</DropdownMenuItem>
                      <DropdownMenuItem><Download className="w-4 h-4 mr-2" />Download</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => {
                        setSelectedContent(item);
                        setShareDialogOpen(true);
                      }}><Share2 className="w-4 h-4 mr-2" />Share</DropdownMenuItem>
                      <DropdownMenuItem><Link className="w-4 h-4 mr-2" />Copy Link</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive"><Trash2 className="w-4 h-4 mr-2" />Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <h3 className="font-semibold mb-1 truncate">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.type} • {item.size}</p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{item.shared.length === 1 && item.shared[0] === 'All Students' ? 'All' : item.shared.length}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    {item.downloads !== undefined ? (
                      <>
                        <Download className="w-4 h-4" />
                        <span>{item.downloads}</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4" />
                        <span>{item.views}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Add New Card */}
          <div 
            className="bg-muted/30 rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center p-8 min-h-[280px] cursor-pointer hover:border-primary/50 transition-colors"
            onClick={() => setUploadDialogOpen(true)}
          >
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
              <Plus className="w-6 h-6 text-muted-foreground" />
            </div>
            <p className="font-medium text-muted-foreground">Add New Content</p>
          </div>
        </div>

        {/* Share Dialog */}
        <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Share Content</DialogTitle>
              <DialogDescription>
                Choose which students can access this content.
              </DialogDescription>
            </DialogHeader>
            {selectedContent && (
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  {getFileIcon(selectedContent.type)}
                  <div>
                    <div className="font-medium text-sm">{selectedContent.title}</div>
                    <div className="text-xs text-muted-foreground">{selectedContent.type} • {selectedContent.size}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Share with</Label>
                  {students.map((student) => (
                    <div key={student} className="flex items-center gap-3 p-2 hover:bg-muted/30 rounded-lg">
                      <Checkbox id={student} defaultChecked={selectedContent.shared.includes(student)} />
                      <label htmlFor={student} className="flex-1 cursor-pointer">
                        <div className="text-sm font-medium">{student}</div>
                      </label>
                    </div>
                  ))}
                </div>

                <Button className="w-full" onClick={() => setShareDialogOpen(false)}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Update Sharing
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default TutorContent;
