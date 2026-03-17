import { Metadata } from "next";
import { getStateData } from "@/lib/serviceAreaData";
import ServiceAreaTemplate from "@/components/sections/ServiceAreaTemplate";

const state = getStateData("texas")!;

export const metadata: Metadata = {
  title: state.seoTitle,
  description: state.seoDescription,
};

export default function TexasPage() {
  return <ServiceAreaTemplate state={state} />;
}
