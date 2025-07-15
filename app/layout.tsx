import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Life SQ - Network Requests Analysis",
  description: "",
  generator: "",
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
