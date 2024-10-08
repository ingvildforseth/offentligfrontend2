import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Offentlig frontend",
  description: "Offentlig frontend-nettverket sin nettside",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
