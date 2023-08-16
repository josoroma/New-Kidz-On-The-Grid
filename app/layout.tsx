import "./globals.css";

import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Main from "@/components/Main";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

/**
 * The top-most layout is called the Root Layout.
 * This required layout is shared across all pages in an application.
 * Root layouts must contain html and body tags.
 *
 * Each parent layout wraps child layouts below it using the React children prop.
 *
 * Layouts are Server Components by default but can be set to a Client Component.
 *
 * Layouts can fetch data.
 *
 * By using Suspense, you get the benefits of:
 *
 * 1. Streaming Server Rendering - Progressively rendering HTML
 *    from the server to the client.
 *
 * 2. Selective Hydration - React prioritizes what components to
 *    make interactive first based on user interaction.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} rootLayout`}>
        <Header />
        <Main nav={<Nav />}>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
