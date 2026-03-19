import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marczbochscholarship.com"),
  verification: { google: "vF24QsTR-qaZLkJe4yaJTxYjCW35brS5hz16Hn-wjq0" },
  title: {
    default: "Marc Zboch Academic Scholarship | $1,000 College Scholarship",
    template: "%s | Marc Zboch Academic Scholarship",
  },
  description:
    "Apply for the Marc Zboch Academic Scholarship, a $1,000 award open to any U.S. college or university student. No GPA, major, or demographic requirements.",
  keywords: [
    "Marc Zboch Scholarship",
    "college scholarship",
    "academic scholarship",
    "scholarship application",
    "$1000 scholarship",
    "essay scholarship",
    "U.S. college scholarship",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Marc Zboch Academic Scholarship",
    title: "Marc Zboch Academic Scholarship | $1,000 College Scholarship",
    description:
      "Apply for the Marc Zboch Academic Scholarship, a $1,000 award open to any U.S. college or university student. No GPA, major, or demographic requirements.",
    url: "https://marczbochscholarship.com",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Marc Zboch Academic Scholarship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marc Zboch Academic Scholarship | $1,000 College Scholarship",
    description:
      "Apply for the Marc Zboch Academic Scholarship, a $1,000 award open to any U.S. college or university student.",
    images: ["/images/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#1e3a5f",
  },
  alternates: {
    canonical: "https://marczbochscholarship.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Marc Zboch Academic Scholarship",
              url: "https://marczbochscholarship.com",
              description:
                "A $1,000 scholarship awarded to a U.S. college or university student who demonstrates a commitment to helping others through personal sacrifice.",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
