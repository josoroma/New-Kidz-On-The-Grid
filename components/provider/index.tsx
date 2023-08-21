"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toggle } from "@/components/toggle";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Toggle className="absolute top-2 right-6 z-10" />
    </NextThemesProvider>
  );
}
