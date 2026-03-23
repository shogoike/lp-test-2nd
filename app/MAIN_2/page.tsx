import LPPage from "@/app/components/LPPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Main2Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <LPPage layoutType="price" searchParams={{ ...searchParams, hero: "2", price: "1" }} darkTheme customLayout={["hero_view", "voices", "qa", "cta", "roadmap", "kyokan", "ansin", "cta", "erabareruriyuu"]} />;
}
