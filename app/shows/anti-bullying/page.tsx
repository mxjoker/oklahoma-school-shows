import type { Metadata } from "next";
import { ShowPageTemplate } from "@/components/sections/ShowPageTemplate";
import { antibullyingShow } from "@/lib/showsData";

export const metadata: Metadata = {
  title: antibullyingShow.metaTitle,
  description: antibullyingShow.metaDescription,
  alternates: { canonical: "https://oklahomeschoolshows.com/shows/anti-bullying" },
  openGraph: {
    title: antibullyingShow.metaTitle,
    description: antibullyingShow.metaDescription,
    url: "https://oklahomeschoolshows.com/shows/anti-bullying",
  },
};

export default function AntiBullyingShowPage() {
  return <ShowPageTemplate show={antibullyingShow} />;
}
