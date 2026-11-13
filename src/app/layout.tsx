import type { Metadata, Viewport } from "next";
import { geistSans, jetbrainsMono, spaceGrotesk } from "./fonts";
import { profile } from "@/data/content";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kabir1299.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name} — ${profile.role}`, template: `%s — ${profile.name}` },
  description: `${profile.tagline} ${profile.oneLiner}`,
  keywords: ["Java Backend Engineer", "Spring Boot", "Apache Kafka", "Distributed Systems", "Software Engineer", profile.name],
  authors: [{ name: profile.name }],
  creator: profile.name,
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
  openGraph: {
    type: "website", url: siteUrl, title: `${profile.name} — ${profile.role}`,
    description: profile.tagline, siteName: profile.name,
    images: [{ url: "/og.png", width: 1200, height: 627, alt: `${profile.name} — ${profile.role}` }],
  },
  twitter: { card: "summary_large_image", title: `${profile.name} — ${profile.role}`, description: profile.tagline, images: ["/og.png"] },
};

export const viewport: Viewport = {
  width: "device-width", initialScale: 1, themeColor: "#07090f", colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${spaceGrotesk.variable} ${geistSans.variable} ${jetbrainsMono.variable}`}><body>{children}</body></html>;
}
