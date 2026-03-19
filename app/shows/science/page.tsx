import type { Metadata } from "next";
import { ShowPageTemplate } from "@/components/sections/ShowPageTemplate";
import { scienceShow } from "@/lib/showsData";

export const metadata: Metadata = {
  title: scienceShow.metaTitle,
  description: scienceShow.metaDescription,
  alternates: { canonical: "https://oklahomaschoolshows.com/shows/science" },
  openGraph: {
    title: scienceShow.metaTitle,
    description: scienceShow.metaDescription,
    url: "https://oklahomaschoolshows.com/shows/science",
  },
};

export default function ScienceShowPage() {
  return <ShowPageTemplate show={scienceShow} />;
}
