import LPPage from "@/app/components/LPPage";

export default function Mail1Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <LPPage layoutType="default" searchParams={searchParams} />;
}
