import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bias Injection Simulator",
  description: "A Bias Weaponization Lab for ML Fairness Stress-Testing",
};

import HolographicBackground from "@/components/HolographicBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased overflow-hidden bg-transparent">
        <HolographicBackground />
        <div className="relative z-10 w-full h-full overflow-y-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
