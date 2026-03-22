import type { Metadata } from "next";
import { Noto_Sans_JP, Outfit } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "保育士専門退職代行アスヤメ｜一律14,800円・即日対応",
  description: "保育士さん専用の退職代行サービス。園への連絡不要、最短即日退職。一律14,800円、追加費用なし。弁護士監修で安心。",
  metadataBase: new URL("https://lp-test-2nd.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "保育士専門退職代行アスヤメ｜一律14,800円・即日対応",
    description: "園への連絡不要、最短即日退職。保育士さん専用の退職代行サービス。弁護士監修・追加費用なし。",
    url: "https://lp-test-2nd.vercel.app",
    siteName: "退職代行アスヤメ",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "保育士専門退職代行アスヤメ",
    description: "園への連絡不要、最短即日退職。一律14,800円・追加費用なし。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17871482472"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17871482472');
          `}
        </Script>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WJJXPHR9');
          `}
        </Script>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vsfdu2epyn");
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "退職代行アスヤメ",
                "description": "保育士さん専用の退職代行サービス",
                "url": "https://lp-test-2nd.vercel.app",
                "telephone": "080-2501-0289",
                "address": {
                  "@type": "PostalAddress",
                  "postalCode": "273-0137",
                  "addressRegion": "千葉県",
                  "addressLocality": "鎌ケ谷市",
                  "streetAddress": "道野辺本町2丁目26-1 コスモ鎌ヶ谷602"
                },
                "priceRange": "¥14,800"
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  { "@type": "Question", "name": "子どもたちのことが心配です。私が辞めたら迷惑がかかりませんか？", "acceptedAnswer": { "@type": "Answer", "text": "ご安心ください。職員配置や引き継ぎ体制を整えるのは施設側の責任です。あなたが無理を続けて心身を壊してしまう前に、離れる選択をすることも決して無責任ではありません。" } },
                  { "@type": "Question", "name": "担任を持っているので、途中で辞めるのは無責任でしょうか？", "acceptedAnswer": { "@type": "Answer", "text": "担任だから辞めてはいけない、ということはありません。限界を超えた状態で働き続ける方が、結果として子どもたちにもご自身にも負担が大きくなることがあります。" } },
                  { "@type": "Question", "name": "学期の途中で辞めても大丈夫ですか？", "acceptedAnswer": { "@type": "Answer", "text": "はい、学期の途中でも退職の相談は可能です。体調不良や精神的な限界がある場合は、無理を優先すべきではありません。" } },
                  { "@type": "Question", "name": "人手不足なのに辞めていいのでしょうか？", "acceptedAnswer": { "@type": "Answer", "text": "人手不足を理由に、辞める権利まで我慢する必要はありません。人員確保は事業者側の責任です。" } },
                  { "@type": "Question", "name": "本当に退職できますか？", "acceptedAnswer": { "@type": "Answer", "text": "状況によって進め方は異なりますが、多くの方が退職へ進んでいます。まずは今の状況を整理するだけでも気持ちは軽くなります。" } }
                ]
              }
            ])
          }}
        />
      </head>
      <body
        className={`${notoSansJP.variable} ${outfit.variable} font-sans antialiased bg-pink-50`}
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJJXPHR9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
