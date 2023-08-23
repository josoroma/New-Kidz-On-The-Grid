"use client";

import { useState, useEffect } from "react";

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
      className={`grid h-full overflow-y-hidden ${
        isAsideCollapsed ? "grid-cols-[0px,1fr]" : "grid-cols-[285px,1fr]"
      }`}
    >
      <aside
        className={`bg-background relative transition-all duration-300 ease-in-out ${
          isAsideCollapsed
            ? "animate-out slide-out-to-left p-2.5"
            : "animate-in slide-in-from-left bg-gray-200 p-4"
        }`}
      >
        <nav className={`sticky top-4 ${isAsideCollapsed ? "hidden" : ""}`}>
          {nav}
        </nav>
        <button
          className={`absolute top-1/2 right-[-.9rem] transform -translate-y-1/2 dark:bg-yellow-300 bg-gray-300 text-black rounded-full w-7 h-7 grid place-items-center`}
          onClick={() => setIsAsideCollapsed(!isAsideCollapsed)}
        >
          {isAsideCollapsed ? "⇨" : "⇦"}
        </button>
      </aside>
      <section className={`${isAsideCollapsed ? "p-4 px-8" : "p-2"}`}>
        {children}
      </section>
    </main>
  );
}
