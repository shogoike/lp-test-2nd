import LPPage from "@/app/components/LPPage";

export default function Main22Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <LPPage layoutType="price" ctaText="無料で話をしてみる" searchParams={searchParams} />;
}
