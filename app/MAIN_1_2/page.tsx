import LPPage from "@/app/components/LPPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Main12Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <LPPage layoutType="default" ctaText="無料で話をしてみる" searchParams={searchParams} />;
}
