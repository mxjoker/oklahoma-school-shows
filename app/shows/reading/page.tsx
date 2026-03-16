import type { Metadata } from "next";
import { ShowPageTemplate } from "@/components/sections/ShowPageTemplate";
import { readingShow } from "@/lib/showsData";

export const metadata: Metadata = {
  title: readingShow.metaTitle,
  description: readingShow.metaDescription,
  alternates: { canonical: "https://oklahomeschoolshows.com/shows/reading" },
  openGraph: {
    title: readingShow.metaTitle,
    description: readingShow.metaDescription,
    url: "https://oklahomeschoolshows.com/shows/reading",
  },
};

export default function ReadingShowPage() {
  return <ShowPageTemplate show={readingShow} />;
}
