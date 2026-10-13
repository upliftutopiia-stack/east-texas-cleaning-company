import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "East Texas Cleaning Company LLC | Website Concept",
  description:
    "Independent website concept for East Texas Cleaning Company LLC in the Longview, Texas area. Contact the business directly for services and availability.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}