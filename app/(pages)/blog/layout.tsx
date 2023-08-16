import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog Layout",
};

/**
 * The folder (pages), in parenthesis will be omitted from the URL.
 */
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pageLayout">{children}</div>;
}
