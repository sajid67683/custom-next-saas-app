import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const Mavenpro = Maven_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-maven-pro",
});

export const metadata: Metadata = {
  title: "Custom Everything",
  description: "Custom Everything You Want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#624cf5" },
      }}
    >
      <html lang="en">
        <body className={cn("font-Mavenpro antialiased, Mavenpro.variable")}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
