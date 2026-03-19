import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

/* ─── Site Metadata ─────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://oklahomaschoolshows.com"),

  title: {
    default: "Funky Monkey Magic | Oklahoma School Assembly Shows",
    template: "%s | Funky Monkey Magic",
  },

  description:
    "Award-winning educational magic assembly shows for elementary schools in Oklahoma, Texas, Arkansas, Kansas & Missouri. Science, Reading, Math, Character Ed & Anti-Bullying programs. Book your show today!",

  keywords: [
    "school assembly Oklahoma",
    "educational magic show",
    "school magician Oklahoma City",
    "elementary school assembly programs",
    "magic assembly show Oklahoma",
    "school assembly performer",
    "Funky Monkey Magic",
    "Joe Coover magic",
    "science magic assembly",
    "reading assembly show",
    "anti-bullying assembly",
    "character education assembly",
  ],

  authors: [{ name: "Funky Monkey Magic / Joe Coover" }],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oklahomaschoolshows.com",
    siteName: "Funky Monkey Magic School Shows",
    title: "Funky Monkey Magic | Oklahoma School Assembly Shows",
    description:
      "Educational magic assembly shows that wow students AND meet curriculum goals. Serving OK, TX, AR, KS, MO. 100% money-back guarantee.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Funky Monkey Magic School Assembly Shows",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Funky Monkey Magic | Oklahoma School Assembly Shows",
    description:
      "Educational magic assembly shows for elementary schools. Serving OK, TX, AR, KS & MO.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#5B2D8E",
  width: "device-width",
  initialScale: 1,
};

/* ─── Root Layout ───────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Nunito:wght@400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6Y1Y2W28VG" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6Y1Y2W28VG');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Accessibility: skip to main */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-gold focus:text-brand-dark focus:rounded-xl focus:font-heading focus:font-bold"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
