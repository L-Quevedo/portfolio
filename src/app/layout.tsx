import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { personal } from "@/lib/data";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} — ${personal.role}`,
    template: `%s — ${personal.name}`,
  },
  description: personal.tagline,
  keywords: [
    "Lucas Quevedo",
    "Lucas M. Quevedo",
    "Desarrollador Python",
    "FastAPI",
    "QA Tester",
    "Analista de Calidad",
    "Data Analytics",
    "SQL",
    "Portfolio",
    "UTN",
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    title: `${personal.name} — ${personal.role}`,
    description: personal.tagline,
    siteName: personal.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.role}`,
    description: personal.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07080b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${mono.variable} ${display.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-bg text-fg font-sans antialiased selection:bg-accent/30">
        {children}
      </body>
    </html>
  );
}
