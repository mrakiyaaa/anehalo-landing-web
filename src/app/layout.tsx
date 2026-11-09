import type { Metadata, Viewport } from "next";
import { Figtree, Fredoka } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

// adjustFontFallback is off so missing glyphs (like the ← → keys) fall back to Segoe UI, as in the design.
const fredoka = Fredoka({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-fredoka", display: "swap", adjustFontFallback: false });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-figtree", display: "swap", adjustFontFallback: false });

const title = "Anehalo – Instant notes for Windows";
const description = "Press Ctrl Alt N and start typing. Anehalo saves every note as a plain Markdown file on your PC.";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  authors: [{ name: site.authorName, url: site.authorUrl }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Anehalo: Notes that save themselves." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Runs before first paint so a saved theme never flashes the wrong colors.
const themeScript = `try{var t=localStorage.getItem('anehalo-site-theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${figtree.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
