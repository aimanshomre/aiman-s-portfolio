import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ThemeProvider } from "@/components/site/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aiman Shomre - Full-Stack & DevOps Engineer",
  description: "Personal portfolio of Aiman Shomre, a Full-Stack & DevOps Engineer based in Israel. Building reliable full-stack apps with pragmatic DevOps.",
  keywords: ["Full-Stack Developer", "DevOps Engineer", "React", "Next.js", "TypeScript", "Israel"],
  authors: [{ name: "Aiman Shomre" }],
  creator: "Aiman Shomre",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aimanshomre.dev",
    title: "Aiman Shomre - Full-Stack & DevOps Engineer",
    description: "Personal portfolio of Aiman Shomre, a Full-Stack & DevOps Engineer based in Israel.",
    siteName: "Aiman Shomre Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aiman Shomre - Full-Stack & DevOps Engineer",
    description: "Personal portfolio of Aiman Shomre, a Full-Stack & DevOps Engineer based in Israel.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
