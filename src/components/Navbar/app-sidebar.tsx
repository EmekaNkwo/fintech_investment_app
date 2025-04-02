"use client";
import { ComponentProps } from "react";
import { IconInnerShadowTop } from "@tabler/icons-react";

import { NavMain } from "@/components/Navbar/nav-main";
import { NavSecondary } from "@/components/Navbar/nav-secondary";
import { NavUser } from "@/components/Navbar/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useActiveSidebarItem } from "@/hooks/useActiveSidebarItem";
import { sidebarData } from "@/shared/data";

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const activeItem = useActiveSidebarItem(sidebarData.navMain);

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Tryve.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.navMain} activeItem={activeItem?.title} />
        <NavSecondary items={sidebarData.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
