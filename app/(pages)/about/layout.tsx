import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Layout",
};

/**
 * The folder (pages), in parenthesis will be omitted from the URL.
 */
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pageLayout">{children}</div>;
}
