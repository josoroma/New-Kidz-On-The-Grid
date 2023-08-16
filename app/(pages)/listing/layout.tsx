import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listing",
  description: "Listing Layout",
};

/**
 * The folder (pages), in parenthesis will be omitted from the URL.
 */
export default function ListingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pageLayout">{children}</div>;
}
