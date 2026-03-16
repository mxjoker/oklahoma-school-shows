import type { Metadata } from "next";
import { ShowPageTemplate } from "@/components/sections/ShowPageTemplate";
import { mathShow } from "@/lib/showsData";

export const metadata: Metadata = {
  title: mathShow.metaTitle,
  description: mathShow.metaDescription,
  alternates: { canonical: "https://oklahomeschoolshows.com/shows/math" },
  openGraph: {
    title: mathShow.metaTitle,
    description: mathShow.metaDescription,
    url: "https://oklahomeschoolshows.com/shows/math",
  },
};

export default function MathShowPage() {
  return <ShowPageTemplate show={mathShow} />;
}
