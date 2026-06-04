import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteSettings } from "@/data";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { cn, getTheme } from "@/utils/theme";

// Configure our premium fonts
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

// Dynamically generate OpenGraph Metadata for WhatsApp/Social sharing
export const metadata: Metadata = {
  title: siteSettings.seo.title,
  description: siteSettings.seo.description,
  openGraph: {
    title: siteSettings.seo.title,
    description: siteSettings.seo.description,
    url: "https://your-custom-domain.com", // Replace on actual deployment
    siteName: siteSettings.seo.title,
    images: [
      {
        url: siteSettings.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Wedding Invitation Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Pull the active theme configuration
  const theme = getTheme(siteSettings.theme);

  return (
    <html lang={siteSettings.defaultLanguage}>
      <body
        className={cn(
          inter.variable,
          playfair.variable,
          theme.background,
          theme.textPrimary,
          // Base styles for clean rendering and selection colors
          "antialiased selection:bg-rose-200 selection:text-rose-900 overflow-x-hidden"
        )}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}