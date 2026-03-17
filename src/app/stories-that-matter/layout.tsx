import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories That Matter | Featured Finalist Essays",
  description:
    "Read inspiring stories from past Marc Zboch Academic Scholarship finalists who demonstrated extraordinary sacrifice and compassion for others.",
  openGraph: {
    title: "Stories That Matter | Marc Zboch Academic Scholarship",
    description:
      "Read inspiring stories from past scholarship finalists who demonstrated extraordinary sacrifice and compassion.",
    url: "https://marczbochscholarship.com/stories-that-matter",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Stories That Matter - Marc Zboch Academic Scholarship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories That Matter | Marc Zboch Academic Scholarship",
    description:
      "Read inspiring stories from past scholarship finalists who demonstrated extraordinary sacrifice and compassion.",
    images: ["/images/og-default.png"],
  },
  alternates: {
    canonical: "https://marczbochscholarship.com/stories-that-matter",
  },
};

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
