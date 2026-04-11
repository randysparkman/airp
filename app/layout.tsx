import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The WorkPath Assessment",
  description: "AI Readiness Assessment — scenario-based evaluation of how you would use artificial intelligence in a work setting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
