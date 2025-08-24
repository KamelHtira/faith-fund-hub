import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Heart, 
  Calendar, 
  Users, 
  BookOpen, 
  User,
  LogOut,
  Plus,
  List,
  Settings
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/useAuth";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    url: "/admin/profile", 
    icon: User,
  }
];

const donationItems = [
  {
    title: "View All Donations",
    url: "/admin/donations",
    icon: List,
  },
  {
    title: "Create Donation",
    url: "/admin/donations/new",
    icon: Plus,
  },
  {
    title: "My Donations",
    url: "/admin/my-donations",
    icon: Heart,
  }
];

const calendarItems = [
  {
    title: "Manage Calendar",
    url: "/admin/calendar",
    icon: Calendar,
  },
  {
    title: "Create Event",
    url: "/admin/events/new",
    icon: Plus,
  }
];

const opportunityItems = [
  {
    title: "Manage Opportunities",
    url: "/admin/opportunities",
    icon: Users,
  },
  {
    title: "Create Opportunity",
    url: "/admin/opportunities/new",
    icon: Plus,
  }
];

const storyItems = [
  {
    title: "Manage Stories",
    url: "/admin/stories",
    icon: BookOpen,
  },
  {
    title: "Create Story",
    url: "/admin/stories/new",
    icon: Plus,
  }
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const { logout } = useAuth();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted/50";

  const isGroupActive = (items: typeof navigationItems) => 
    items.some(item => isActive(item.url));

  return (
    <Sidebar className={state === "collapsed" ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Donations Management */}
        <SidebarGroup>
          <SidebarGroupLabel>Donations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {donationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Calendar Management */}
        <SidebarGroup>
          <SidebarGroupLabel>Calendar</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {calendarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Opportunities Management */}
        <SidebarGroup>
          <SidebarGroupLabel>Opportunities</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {opportunityItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Stories Management */}
        <SidebarGroup>
          <SidebarGroupLabel>Stories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {storyItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={logout}>
                  <LogOut className="h-4 w-4" />
                  {state !== "collapsed" && <span>Logout</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}