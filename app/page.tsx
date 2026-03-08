import LPPage from "@/app/components/LPPage";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const layoutParam = (searchParams.layout as string) || "default";
  return <LPPage layoutType={layoutParam as any} searchParams={searchParams} />;
}
