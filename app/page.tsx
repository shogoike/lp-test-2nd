import Image from "next/image";
import { images } from "@/lib/images";
import Link from "next/link";
import CtaButton from "@/app/components/CtaButton";
import FloatingCtaButton from "@/app/components/FloatingCtaButton";

// LPの表示順序（ここを入れ替えるだけでLP構成が変わる）
export type SectionType = "hero_view" | "kyokan" | "price" | "ansin" | "erabareruriyuu" | "cta";

const defaultLayout: SectionType[] = [
  "hero_view",
  "cta",
  "kyokan",
  "cta",
  "price",
  "cta",
  "ansin",
  "cta",
  "erabareruriyuu",
  "cta"
];

const priceFirstLayout: SectionType[] = [
  "price",
  "cta",
  "hero_view",
  "cta",
  "kyokan",
  "cta",
  "ansin",
  "cta",
  "erabareruriyuu",
  "cta"
];

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // A/B test layout variants
  const layoutParam = (searchParams.layout as string) || "default";
  const layoutConfig = layoutParam === "price" ? priceFirstLayout : defaultLayout;

  // Safe checks against out of bound indices
  const getSafeImage = (category: keyof typeof images, index: number) => {
    const list = images[category];
    if (!list || list.length === 0) return null;
    return list[index % list.length];
  };

  // URLから各カテゴリのインデックスを取得
  const indices = {
    hero_view: parseInt((searchParams.hero as string) || "0", 10),
    kyokan: parseInt((searchParams.kyokan as string) || "0", 10),
    ansin: parseInt((searchParams.ansin as string) || "0", 10),
    erabareruriyuu: parseInt((searchParams.erabareruriyuu as string) || "0", 10),
    price: parseInt((searchParams.price as string) || "0", 10),
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start pb-24 font-sans bg-pink-50">
      <div className="w-full max-w-2xl mx-auto shadow-2xl bg-white flex flex-col items-stretch relative">

        {/* 動的配列による画像とボタンのレンダー */}
        {layoutConfig.map((section, idx) => {
          if (section === "cta") {
            return <CtaButton key={`cta-${idx}`} />;
          }

          // 画像セクションの場合
          const imageFileName = getSafeImage(section, indices[section]);
          if (!imageFileName) return null;

          return (
            <img
              key={`${section}-${idx}`}
              src={`/pic/${section}/${imageFileName}`}
              alt={section}
              className="w-full h-auto block"
              style={{ display: "block" }} // 意図せぬ余白を防ぐ
            />
          );
        })}

        {/* 運営者情報（フッター） */}
        <div className="w-full p-8 mt-12 bg-white text-gray-800 text-sm border-t border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-center">運営者情報</h2>
          <table className="w-full border-collapse mb-8 text-left">
            <tbody>
              <tr className="border-b">
                <th className="py-3 px-4 bg-gray-100 font-semibold w-1/3">会社名</th>
                <td className="py-3 px-4">株式会社8seAls</td>
              </tr>
              <tr className="border-b">
                <th className="py-3 px-4 bg-gray-100 font-semibold">代表者</th>
                <td className="py-3 px-4">代表取締役 池末知史</td>
              </tr>
              <tr className="border-b">
                <th className="py-3 px-4 bg-gray-100 font-semibold">所在地</th>
                <td className="py-3 px-4">〒273-0137<br />千葉県鎌ケ谷市道野辺本町2丁目26-1 コスモ鎌ヶ谷602</td>
              </tr>
              <tr className="border-b">
                <th className="py-3 px-4 bg-gray-100 font-semibold">電話番号</th>
                <td className="py-3 px-4">080-2501-0289<br /><span className="text-xs text-gray-500">受付時間：10:00～17:00土日祝を除く</span></td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col items-center gap-4 text-primary">
            <Link href="/tokushoho" className="text-blue-600 hover:underline">特定商取引法に基づく表記</Link>
            <Link href="/privacy" className="text-blue-600 hover:underline">プライバシーポリシー</Link>
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">© 2025 by 8seAls All Rights Reserved.</p>
        </div>
      </div>

      {/* Sticky LINE Button / CTR */}
      <FloatingCtaButton />
    </main>
  );
}
