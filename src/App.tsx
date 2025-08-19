
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Manufacturing from "./pages/Manufacturing";
import RnD from "./pages/RnD";
import Export from "./pages/Export";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminBlogManagement from "./pages/AdminBlogManagement";
import AdminBlogForm from "./pages/AdminBlogForm";
import AdminCareerManagement from "./pages/AdminCareerManagement";
import AdminCareerForm from "./pages/AdminCareerForm";
import AntiDiabetic from "./pages/AntiDiabetic";
import CardiacCare from "./pages/CardiacCare";
import NeuroCare from "./pages/NeuroCare";
import OtherTherapy from "./pages/OtherTherapy";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/rnd" element={<RnD />} />
          <Route path="/products/anti-diabetic" element={<AntiDiabetic />} />
          <Route path="/products/cardiac-care" element={<CardiacCare />} />
          <Route path="/products/neuro-care" element={<NeuroCare />} />
          <Route path="/products/other-therapy" element={<OtherTherapy />} />
          <Route path="/export" element={<Export />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/blog" element={<AdminBlogManagement />} />
          <Route path="/admin/blog/create" element={<AdminBlogForm />} />
          <Route path="/admin/blog/edit/:id" element={<AdminBlogForm />} />
          <Route path="/admin/career" element={<AdminCareerManagement />} />
          <Route path="/admin/career/create" element={<AdminCareerForm />} />
          <Route path="/admin/career/edit/:id" element={<AdminCareerForm />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
