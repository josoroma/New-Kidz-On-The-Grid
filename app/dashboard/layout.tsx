import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Layout",
};

export default function DashboardLayout({
  children,
  analytics,
  projects,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  projects: React.ReactNode;
}) {
  return (
    <div className="custom-dashboard-page-layout">
      {children}
      {/* Parallel Routing */}
      <div className="flex space-x-6">
        {" "}
        {/* Updated from grid to flex */}
        <div className="dark:bg-gray-800 bg-black text-yellow-500 flex-grow p-4">
          {analytics}
        </div>
        <div className="dark:bg-gray-800 bg-black text-yellow-500 flex-grow p-4">
          {projects}
        </div>
      </div>
    </div>
  );
}
