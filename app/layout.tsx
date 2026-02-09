import type { Metadata } from "next";
import "./globals.css";
import KillSwitch from "@/components/security/KillSwitch";

export const metadata: Metadata = {
  title: "AlSolved x Fermento Birra | Tech Demo",
  description: "Secure Digital Publishing & Event Management Demo. Powered by AlSolved.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Sans Flex - Same as antigravity.google */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-google-sans">
        {children}
        <KillSwitch />
      </body>
    </html>
  );
}
