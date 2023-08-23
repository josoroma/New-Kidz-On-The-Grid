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
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-black text-yellow-500 flex-grow p-4 pb-0">
          {analytics}
        </div>
        <div className="bg-black text-yellow-500 flex-grow p-4 pb-0">
          {projects}
        </div>
      </div>
    </div>
  );
}
