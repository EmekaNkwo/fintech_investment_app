"use client";
import { AppSidebar } from "@/components/Navbar/app-sidebar";
import { SiteHeader } from "@/components/Topbar/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  useEffect(() => {
    const accessToken = sessionStorage.getItem("trvyeAccessToken"); // Check for accessToken
    if (!accessToken) {
      router.push("/");
    }
  }, [router]);
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
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
