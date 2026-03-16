import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import StudentDashboard from "./pages/StudentDashboard";
import StudentSessions from "./pages/StudentSessions";
import StudentPayments from "./pages/StudentPayments";
import StudentMaterials from "./pages/StudentMaterials";
import TutorDashboard from "./pages/TutorDashboard";
import TutorSchedule from "./pages/TutorSchedule";
import TutorStudents from "./pages/TutorStudents";
import TutorContent from "./pages/TutorContent";
import TutorPayments from "./pages/TutorPayments";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          {/* Student Routes */}
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/sessions" element={<StudentSessions />} />
          <Route path="/student/payments" element={<StudentPayments />} />
          <Route path="/student/materials" element={<StudentMaterials />} />
          {/* Tutor Routes */}
          <Route path="/tutor" element={<TutorDashboard />} />
          <Route path="/tutor/schedule" element={<TutorSchedule />} />
          <Route path="/tutor/students" element={<TutorStudents />} />
          <Route path="/tutor/content" element={<TutorContent />} />
          <Route path="/tutor/payments" element={<TutorPayments />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
