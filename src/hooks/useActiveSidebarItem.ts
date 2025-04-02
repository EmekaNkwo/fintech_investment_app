"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export interface NavItem {
  title: string;
  url: string;
  icon?: React.ComponentType;
  items?: NavItem[];
}

export function findCurrentSidebarItem(
  navItems: NavItem[],
  currentPath: string
): NavItem | null {
  let bestMatch: NavItem | null = null;

  for (const item of navItems) {
    // Exact match always wins
    if (item.url === currentPath) {
      return item;
    }
  }

  return bestMatch;
}

export function useActiveSidebarItem(navItems: NavItem[]): NavItem | null {
  const pathname = usePathname();

  return useMemo(() => {
    return findCurrentSidebarItem(navItems, pathname);
  }, [navItems, pathname]);
}
