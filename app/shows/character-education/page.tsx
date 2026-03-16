import type { Metadata } from "next";
import { ShowPageTemplate } from "@/components/sections/ShowPageTemplate";
import { characterShow } from "@/lib/showsData";

export const metadata: Metadata = {
  title: characterShow.metaTitle,
  description: characterShow.metaDescription,
  alternates: { canonical: "https://oklahomeschoolshows.com/shows/character-education" },
  openGraph: {
    title: characterShow.metaTitle,
    description: characterShow.metaDescription,
    url: "https://oklahomeschoolshows.com/shows/character-education",
  },
};

export default function CharacterShowPage() {
  return <ShowPageTemplate show={characterShow} />;
}
