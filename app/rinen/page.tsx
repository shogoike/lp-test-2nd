import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "私たちの思い｜保育士専門退職代行アスヤメ",
  description: "保育の現場だからこそ辞めにくい。その苦しさを軽く扱わない。保育士専門の退職代行アスヤメが大切にしている理念をお伝えします。",
};

export default function RinenPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start font-sans bg-pink-50">
      <div className="w-full max-w-2xl mx-auto shadow-2xl bg-white flex flex-col items-stretch">
        {/* ヘッダー */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-pink-100 py-3 flex justify-center items-center shadow-sm">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img src="/pic/icon/1_2x.avif" alt="Logo" className="h-8 md:h-10 w-auto object-contain" />
          </Link>
        </header>

        {/* ヒーロー */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 px-6 py-16 md:py-24 text-center">
          <p className="text-pink-300 text-sm font-bold tracking-widest mb-4">OUR PHILOSOPHY</p>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-relaxed mb-4">
            私たちの思い
          </h1>
          <div className="w-16 h-0.5 bg-pink-400 mx-auto" />
        </div>

        {/* 本文 */}
        <article className="px-6 md:px-10 py-12 md:py-16">
          <div className="space-y-12 text-gray-800 leading-[2] text-[15px] md:text-base">

            <section>
              <p className="font-bold text-lg md:text-xl text-gray-900 leading-relaxed mb-4">
                保育の仕事は、仕事だからつらいんじゃない。<br />
                保育の現場だからこそ、つらくなることがある。
              </p>
              <div className="space-y-4 text-gray-700">
                <p>
                  人が足りない。<br />
                  休みたいと言いにくい。<br />
                  辞めたいと口にした瞬間、空気が変わる。
                </p>
                <p>
                  子どものこと、クラスのこと、行事のこと、保護者対応のこと。<br />
                  自分ひとりの退職では済まないように感じてしまう。
                </p>
              </div>
            </section>

            <div className="w-12 h-px bg-pink-200 mx-auto" />

            <section>
              <p className="font-bold text-lg md:text-xl text-gray-900 leading-relaxed mb-4">
                保育士さんが辞められないのは、弱いからではありません。<br />
                むしろ逆です。
              </p>
              <div className="space-y-4 text-gray-700">
                <p>
                  責任感がある人ほど、最後まで抱え込んでしまう。<br />
                  周りを見て、自分を後回しにして、限界が来ても「もう少しだけ」と踏ん張ってしまう。
                </p>
                <p>
                  この業界には、そうやって頑張る人ほど苦しくなる空気があります。
                </p>
              </div>
            </section>

            <div className="w-12 h-px bg-pink-200 mx-auto" />

            <section>
              <div className="space-y-4 text-gray-700">
                <p>
                  私たちは、その苦しさをただの退職の悩みだとは思っていません。
                </p>
                <p>
                  保育の現場には、保育の現場にしかない辞めにくさがある。<br />
                  その前提を知らないまま、ありきたりな言葉で背中を押しても、救いにはならないと思っています。
                </p>
              </div>
            </section>

            <div className="w-12 h-px bg-pink-200 mx-auto" />

            <section>
              <p className="font-bold text-lg md:text-xl text-gray-900 leading-relaxed mb-4">
                本当に必要なのは、<br />
                「頑張って辞めましょう」ではなく、<br />
                辞めるまでの重たすぎる負担を、本人の代わりに引き受けることです。
              </p>
              <div className="space-y-4 text-gray-700">
                <p>
                  園に何をどう伝えるか。<br />
                  引き継ぎをどうするか。<br />
                  園長から何を言われるか。<br />
                  途中で辞められるのか。<br />
                  もう連絡を取りたくないのに、どこまで自分で対応しなければいけないのか。
                </p>
                <p>
                  保育士さんが苦しいのは、辞める決断そのものより、<br />
                  そのあとに続くやり取りや空気や圧力が見えてしまうからです。
                </p>
                <p className="font-bold text-gray-900">
                  だから私たちは、そこを支えるためにこのサービスをつくりました。
                </p>
              </div>
            </section>

            <div className="w-12 h-px bg-pink-200 mx-auto" />

            <section className="bg-pink-50/60 rounded-2xl p-6 md:p-8 border border-pink-100">
              <div className="space-y-4 text-gray-800">
                <p>
                  これ以上、園とのやり取りで心を削られなくていい。
                </p>
                <p>
                  これ以上、引き継ぎや連絡のことを一人で背負わなくていい。
                </p>
                <p>
                  学期の途中でも、周りに何を思われるかで人生を止めなくていい。
                </p>
                <p className="font-bold text-pink-700 text-lg pt-2">
                  あなたが今必要なのは、<br />
                  「もう少し頑張ること」ではなく、<br />
                  安心して終われる道があると知ることだと思っています。
                </p>
              </div>
            </section>

            <div className="w-12 h-px bg-pink-200 mx-auto" />

            <section>
              <div className="space-y-4 text-gray-700">
                <p>
                  辞めたいのに辞められない。<br />
                  その苦しさを、私たちは軽く扱いません。
                </p>
                <p>
                  保育の現場のしんどさをわかっているからこそ、<br />
                  ただ励ますのではなく、現実に抜け出せる形で支えたい。
                </p>
                <p className="font-bold text-gray-900 text-lg md:text-xl leading-relaxed pt-4">
                  あなたがこれ以上、自分をすり減らしながら耐え続けなくていいように。<br />
                  そのために、私たちはここにいます。
                </p>
              </div>
            </section>

          </div>
        </article>

        {/* フッターリンク */}
        <div className="px-6 pb-12 text-center">
          <Link
            href="/"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md"
          >
            トップページに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
