import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Bonheur_Royale } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const bonheurRoyale = Bonheur_Royale({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// thumbnail provided by next.js
export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name }],
  creator: site.name,
  metadataBase: new URL(site.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    siteName: site.name,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
    images: [site.ogImage],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${bonheurRoyale.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
