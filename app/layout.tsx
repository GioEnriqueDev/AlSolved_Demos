import type { Metadata } from "next";
import "./globals.css";
import KillSwitch from "@/components/security/KillSwitch";

import DemoBadge from "@/components/platform/DemoBadge";

export const metadata: Metadata = {
  title: "AlSolved x Fermento Birra | Case Study Showcase",
  description: "Advanced Tech Demo & Case Studies Collection. Powered by AlSolved.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        {/* Google Sans Flex - Same as antigravity.google */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Google AdSense Global Script */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890"
          crossOrigin="anonymous"></script>
      </head>
      <body className="antialiased font-google-sans">
        <DemoBadge />
        {children}
        <KillSwitch />
      </body>
    </html>
  );
}
