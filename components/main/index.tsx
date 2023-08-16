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
        className={`bg-gray-200 p-4 relative ${
          isAsideCollapsed ? "w-0 flex-shrink-0" : "min-w-[300px] w-3/10"
        }`}
      >
        <nav className={`sticky top-4 ${isAsideCollapsed ? "hidden" : ""}`}>
          {nav}
        </nav>
        <button
          className="absolute top-1/2 right-[-.9rem] transform -translate-y-1/2 bg-yellow-300 text-black rounded-full w-7 h-7 flex items-center justify-center"
          onClick={() => setIsAsideCollapsed(!isAsideCollapsed)}
        >
          {isAsideCollapsed ? "⇨" : "⇦"}
        </button>
      </aside>
      <section className="bg-yellow-300 p-4 text-black flex-grow">
        {children}
      </section>
    </main>
  );
}
