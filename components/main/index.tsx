"use client";

import { useState } from "react";

export default function Main({
  children,
  nav,
}: {
  children: React.ReactNode;
  nav: React.ReactNode;
}) {
  const [isAsideCollapsed, setIsAsideCollapsed] = useState(false);

  return (
    <main className="flex-1 flex overflow-y-hidden">
      <aside
        className={`bg-gray-200 p-4 relative transition-all duration-300 ease-in-out ${
          isAsideCollapsed
            ? "w-0 flex-shrink-0 animate-out slide-out-to-left"
            : "min-w-[300px] w-3/10 animate-in slide-in-from-left"
        }`}
      >
        <nav className={`sticky top-4 ${isAsideCollapsed ? "hidden" : ""}`}>
          {nav}
        </nav>
        <button
          className={`absolute top-1/2 right-[-.9rem] transform -translate-y-1/2 dark:bg-yellow-300 bg-gray-300 text-black rounded-full w-7 h-7 flex items-center justify-center`}
          onClick={() => setIsAsideCollapsed(!isAsideCollapsed)}
        >
          {isAsideCollapsed ? "⇨" : "⇦"}
        </button>
      </aside>
      <section className="p-4 flex-grow">{children}</section>
    </main>
  );
}
