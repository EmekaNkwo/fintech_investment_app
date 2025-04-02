import { AppSidebar } from "@/components/Navbar/app-sidebar";

import { SiteHeader } from "@/components/Topbar/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Dashboard from "@/components/Dashboard";

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <Dashboard />
      </SidebarInset>
    </SidebarProvider>
  );
}
