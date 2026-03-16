import type { Metadata } from "next";
import { HeroSection }          from "@/components/sections/HeroSection";
import { TrustBar }             from "@/components/sections/TrustBar";
import { ShowGrid }             from "@/components/sections/ShowGrid";
import { TestimonialsSection }  from "@/components/sections/TestimonialsSection";
import { VideoSection }         from "@/components/sections/VideoSection";
import { GuaranteeSection }     from "@/components/sections/GuaranteeSection";
import { FinalCTA }             from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Funky Monkey Magic | Oklahoma School Assembly Shows",
  description:
    "Educational magic assembly shows that captivate students AND meet curriculum goals. " +
    "Serving Oklahoma, Texas, Arkansas, Kansas & Missouri. 100% money-back guarantee.",
  alternates: {
    canonical: "https://oklahomeschoolshows.com",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ShowGrid />
      <TestimonialsSection />
      <VideoSection />
      <GuaranteeSection />
      <FinalCTA />
    </>
  );
}
