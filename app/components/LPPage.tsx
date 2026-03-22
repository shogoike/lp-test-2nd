import { images } from "@/lib/images";
import Link from "next/link";
import CtaButton from "@/app/components/CtaButton";
import FloatingCtaButton from "@/app/components/FloatingCtaButton";
import QASection from "@/app/components/QASection";
import CustomerVoices from "@/app/components/CustomerVoices";

export type SectionType = "hero_view" | "kyokan" | "voices" | "price" | "ansin" | "erabareruriyuu" | "cta";

const sectionAltText: Record<string, string> = {
  hero_view: "保育士専門退職代行アスヤメ メインビジュアル",
  kyokan: "保育士さんのよくあるお悩み",
  price: "退職代行アスヤメの料金プラン",
  ansin: "安心サポート体制のご案内",
  erabareruriyuu: "アスヤメが選ばれる理由",
};

const defaultLayout: SectionType[] = [
  "hero_view",
  "voices",
  "kyokan",
  "cta",
  "price",
  "ansin",
  "cta",
  "erabareruriyuu"
];

const priceFirstLayout: SectionType[] = [
  "price",
  "voices",
  "kyokan",
  "hero_view",
  "ansin",
  "cta",
  "erabareruriyuu"
];

export default function LPPage({
  layoutType = "default",
  searchParams = {},
  ctaText,
}: {
  layoutType?: "default" | "price";
  searchParams?: { [key: string]: string | string[] | undefined };
  ctaText?: string;
}) {
  const layoutConfig = layoutType === "price" ? priceFirstLayout : defaultLayout;

  const getSafeImage = (category: keyof typeof images, index: number) => {
    const list = images[category];
    if (!list || list.length === 0) return null;
    return list[index % list.length];
  };

  const indices = {
    hero_view: parseInt((searchParams?.hero as string) || "0", 10),
    kyokan: parseInt((searchParams?.kyokan as string) || "0", 10),
    ansin: parseInt((searchParams?.ansin as string) || "0", 10),
    erabareruriyuu: parseInt((searchParams?.erabareruriyuu as string) || "0", 10),
    price: parseInt((searchParams?.price as string) || "0", 10),
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start font-sans bg-pink-50">
      <div className="w-full max-w-2xl mx-auto shadow-2xl flex flex-col items-stretch relative overflow-hidden" style={{ background: "rgba(255,255,255,0.85)" }}>
        {/* 背景画像 */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/pic/bg-plant.jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.3, filter: "saturate(0.4) brightness(1.1) sepia(0.3) hue-rotate(310deg)" }}
          />
        </div>
        
        {/* ヘッダー（ロゴ/アイコン） */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-pink-100 py-3 flex justify-center items-center shadow-sm">
          <Link href="https://lp-test-2nd.vercel.app/" className="hover:opacity-80 transition-opacity">
            <img src="/pic/icon/1_2x.avif" alt="Logo" className="h-8 md:h-10 w-auto object-contain" />
          </Link>
        </header>

        {/* コンテンツ（背景画像の上に表示） */}
        <div className="relative z-10">
        {/* 動的配列によるコンポーネントと画像のレンダー */}
        {layoutConfig.map((section, idx) => {
          if (section === "cta") {
            return <CtaButton key={`cta-${idx}`} text={ctaText} />;
          }
          if (section === "voices") {
            return <CustomerVoices key={`voices-${idx}`} />;
          }

          // 画像セクションの場合
          const imageFileName = getSafeImage(section as keyof typeof images, indices[section as keyof typeof indices]);
          if (!imageFileName) return null;

          if (section === "hero_view") {
            return (
              <div key={`${section}-${idx}`}>
                <a href="/line" target="_blank" rel="noopener noreferrer">
                  <img
                    src={`/pic/${section}/${imageFileName}`}
                    alt={sectionAltText[section] || section}
                    className="w-full h-auto block cursor-pointer"
                    style={{ display: "block" }}
                  />
                </a>
                {/* 流れるテキスト */}
                <div className="overflow-hidden bg-pink-50 py-4">
                  <div
                    className="flex whitespace-nowrap"
                    style={{
                      animation: "marquee 10s linear infinite",
                    }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <span
                        key={i}
                        className="text-3xl md:text-5xl tracking-wider mx-8 shrink-0"
                        style={{
                          fontFamily: '"Hiragino Kaku Gothic ProN", "Hiragino Sans", "Noto Sans JP", sans-serif',
                          fontWeight: 300,
                          color: "transparent",
                          WebkitTextStroke: "1px rgba(236, 72, 153, 0.3)",
                        }}
                      >
                        すべての保育士を
                        <span
                          style={{
                            fontWeight: 900,
                            color: "rgb(236, 72, 153)",
                            WebkitTextStroke: "0px",
                          }}
                        >
                          退職のストレス
                        </span>
                        から解放。
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          return (
            <img
              key={`${section}-${idx}`}
              src={`/pic/${section}/${imageFileName}`}
              alt={sectionAltText[section] || section}
              className="w-full h-auto block"
              style={{ display: "block" }}
            />
          );
        })}

        {/* よくある質問 (Q&A) */}
        <QASection />

        {/* 最後のCTAボタン */}
        <CtaButton text={ctaText} />

        {/* 運営者情報（フッター） */}
        <div className="w-full p-8 mt-12 bg-pink-50 text-gray-800 text-sm border-t border-pink-100">
          <h2 className="text-xl font-bold mb-4 text-center">運営者情報</h2>
          <table className="w-full border-collapse mb-8 text-left bg-white rounded-lg overflow-hidden shadow-sm">
            <tbody>
              <tr className="border-b border-pink-50">
                <th className="py-3 px-4 bg-pink-100/50 font-semibold w-1/3 text-pink-900">会社名</th>
                <td className="py-3 px-4 text-gray-700">株式会社8seAls</td>
              </tr>
              <tr className="border-b border-pink-50">
                <th className="py-3 px-4 bg-pink-100/50 font-semibold text-pink-900">代表者</th>
                <td className="py-3 px-4 text-gray-700">代表取締役 池末知史</td>
              </tr>
              <tr className="border-b border-pink-50">
                <th className="py-3 px-4 bg-pink-100/50 font-semibold text-pink-900">所在地</th>
                <td className="py-3 px-4 text-gray-700">〒273-0137<br />千葉県鎌ケ谷市道野辺本町2丁目26-1 コスモ鎌ヶ谷602</td>
              </tr>
              <tr className="border-b border-pink-50">
                <th className="py-3 px-4 bg-pink-100/50 font-semibold text-pink-900">電話番号</th>
                <td className="py-3 px-4 text-gray-700">080-2501-0289<br /><span className="text-xs text-pink-400">受付時間：10:00～17:00土日祝を除く</span></td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col items-center gap-4 text-primary">
            <Link href="/pricing" className="text-pink-600 hover:text-pink-500 hover:underline transition-colors font-medium">料金について</Link>
            <Link href="/tokushoho" className="text-pink-600 hover:text-pink-500 hover:underline transition-colors font-medium">特定商取引法に基づく表記</Link>
            <Link href="/privacy" className="text-pink-600 hover:text-pink-500 hover:underline transition-colors font-medium">プライバシーポリシー</Link>
          </div>
          <p className="text-center text-xs text-pink-300 mt-8">© 2025 by 8seAls All Rights Reserved.</p>
        </div>
        </div>{/* /relative z-10 */}
      </div>

      {/* Sticky LINE Button / CTR */}
      <FloatingCtaButton text={ctaText} />
    </main>
  );
}
