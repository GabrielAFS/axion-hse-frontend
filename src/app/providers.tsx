"use client";

import { SidebarProvider } from "@/components/Layouts/sidebar/sidebar-context";
import { EmployerProvider } from "@/hooks/use-employers";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <SidebarProvider>
        <EmployerProvider>{children}</EmployerProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
