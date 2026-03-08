import LPPage from "@/app/components/LPPage";

export default function Main2Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <LPPage layoutType="price" searchParams={searchParams} />;
}
