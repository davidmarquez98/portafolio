import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Marquez | Software Engineer",
  description:
    "Professional portfolio for David Marquez, Software Engineer and Full Stack Developer specialized in secure, scalable fintech and banking applications."
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
