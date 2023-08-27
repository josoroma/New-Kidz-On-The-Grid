"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Main({
  children,
  nav,
}: {
  children: React.ReactNode;
  nav: React.ReactNode;
}) {
  const [isAsideCollapsed, setIsAsideCollapsed] = useState(false);

  // Check for window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setIsAsideCollapsed(true);
      } else {
        setIsAsideCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once initially

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main
      className={`flex h-full overflow-y-hidden ${
        isAsideCollapsed ? "w-full" : ""
      }`}
    >
      <aside
        className={`bg-background relative transition-all duration-300 ease-in-out ${
          isAsideCollapsed
            ? "animate-out slide-out-to-left p-2.5"
            : "animate-in slide-in-from-left bg-gray-200 p-4 flex-shrink-0 w-[285px]"
        }`}
      >
        <nav className={`${isAsideCollapsed ? "hidden" : ""}`}>{nav}</nav>
        <Button
          className={`absolute top-1/2 right-[-.9rem] transform rounded-full w-7 h-7 flex items-center justify-center p-0 m-0`}
          onClick={() => setIsAsideCollapsed(!isAsideCollapsed)}
        >
          {isAsideCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </aside>
      <section className={`flex-grow ${isAsideCollapsed ? "p-4 px-8" : "p-2"}`}>
        {children}
      </section>
    </main>
  );
}
