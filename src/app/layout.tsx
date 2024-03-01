import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";

import { Toaster } from "@/components/ui/sonner";
import { Toolbar } from "@/components/toolbar/toolbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cody Hoffman",
  description: "Welcome to my personal site, let's chat!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toolbar />
          <Analytics />
          <SpeedInsights />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
