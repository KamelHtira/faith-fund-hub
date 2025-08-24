import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Donate from "./pages/Donate";
import PaymentSuccess from "./pages/PaymentSuccess";

// Public Pages
import HadithPage from "./pages/HadithPage";
import PrayerTimesPage from "./pages/PrayerTimesPage";
import FastingTipsPage from "./pages/FastingTipsPage";
import Islam101Page from "./pages/Islam101Page";
import DonationsListPage from "./pages/DonationsListPage";
import DonationDetailPage from "./pages/DonationDetailPage";
import CalendarPage from "./pages/CalendarPage";
import OpportunitiesListPage from "./pages/OpportunitiesListPage";
import OpportunityDetailPage from "./pages/OpportunityDetailPage";
import StoriesListPage from "./pages/StoriesListPage";
import StoryDetailPage from "./pages/StoryDetailPage";

// Admin Pages
import DonationsListAdminPage from "./pages/admin/DonationsListAdminPage";
import DonationFormPage from "./pages/admin/DonationFormPage";
import MyDonationsPage from "./pages/admin/MyDonationsPage";
import CalendarPageAdmin from "./pages/admin/CalendarPageAdmin";
import EventFormPage from "./pages/admin/EventFormPage";
import OpportunitiesListAdminPage from "./pages/admin/OpportunitiesListAdminPage";
import OpportunityFormPage from "./pages/admin/OpportunityFormPage";
import StoriesListAdminPage from "./pages/admin/StoriesListAdminPage";
import StoryFormPage from "./pages/admin/StoryFormPage";
import ProfilePage from "./pages/admin/ProfilePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/hadith" element={<HadithPage />} />
          <Route path="/prayer-times" element={<PrayerTimesPage />} />
          <Route path="/fasting-tips" element={<FastingTipsPage />} />
          <Route path="/islam-101" element={<Islam101Page />} />
          <Route path="/donations" element={<DonationsListPage />} />
          <Route path="/donations/:id" element={<DonationDetailPage />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/opportunities" element={<OpportunitiesListPage />} />
          <Route path="/opportunities/:id" element={<OpportunityDetailPage />} />
          <Route path="/stories" element={<StoriesListPage />} />
          <Route path="/stories/:id" element={<StoryDetailPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/profile" element={<ProfilePage />} />
          
          {/* Admin Donations */}
          <Route path="/admin/donations" element={<DonationsListAdminPage />} />
          <Route path="/admin/donations/new" element={<DonationFormPage />} />
          <Route path="/admin/donations/edit/:id" element={<DonationFormPage />} />
          <Route path="/admin/my-donations" element={<MyDonationsPage />} />
          
          {/* Admin Calendar */}
          <Route path="/admin/calendar" element={<CalendarPageAdmin />} />
          <Route path="/admin/events/new" element={<EventFormPage />} />
          <Route path="/admin/events/edit/:id" element={<EventFormPage />} />
          
          {/* Admin Opportunities */}
          <Route path="/admin/opportunities" element={<OpportunitiesListAdminPage />} />
          <Route path="/admin/opportunities/new" element={<OpportunityFormPage />} />
          <Route path="/admin/opportunities/edit/:id" element={<OpportunityFormPage />} />
          
          {/* Admin Stories */}
          <Route path="/admin/stories" element={<StoriesListAdminPage />} />
          <Route path="/admin/stories/new" element={<StoryFormPage />} />
          <Route path="/admin/stories/edit/:id" element={<StoryFormPage />} />
          
          {/* 404 Catch All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
