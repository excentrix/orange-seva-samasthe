import type { Metadata } from "next";
import localFont from "next/font/local"; // Ensure this is being utilized correctly
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Orange Seva Samsthe",
  description:
    "Orange Seva Samsthe is a non-profit organization based in Bangalore, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/svg+xml"
        href="https://cdn.sanity.io/images/5d677rbl/production/a75708d1beaaac2f2384082d358f440896c3906a-715x710.png?fm=webp"
      />
      <body className={`font-hel antialiased`}>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
