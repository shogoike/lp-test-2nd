"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type QA = {
  q: string;
  a: string;
};

const qaList: QA[] = [
  {
    q: "子どもたちのことが心配です。私が辞めたら迷惑がかかりませんか？",
    a: "ご安心ください。そう感じてしまうのは、あなたが本気で子どもたちと向き合ってきた証拠です。でも、子どもたちを大切に思う気持ちと、あなた自身が限界まで我慢し続けることは別の問題です。保育の現場は、本来ひとりの自己犠牲で成り立つものではありません。職員配置や引き継ぎ体制を整えるのは施設側の責任です。あなたが無理を続けて心身を壊してしまう前に、離れる選択をすることも決して無責任ではありません。"
  },
  {
    q: "担任を持っているので、途中で辞めるのは無責任でしょうか？",
    a: "担任だから辞めてはいけない、ということはありません。責任感が強い方ほど、「最後までやらないと」と抱え込みがちですが、限界を超えた状態で働き続ける方が、結果として子どもたちにもご自身にも負担が大きくなることがあります。大切なのは、あなた一人で全部を背負わないことです。退職に関する連絡ややり取りは、できるだけあなたの負担が少ない形で進められるようサポートします。"
  },
  {
    q: "学期の途中で辞めても大丈夫ですか？",
    a: "はい、学期の途中でも退職の相談は可能です。「年度末までいないといけない」「学期の区切りまで辞められない」と言われることがありますが、つらい状況を我慢し続けなければならないわけではありません。特に、体調不良や精神的な限界がある場合は、無理を優先すべきではありません。区切りを理由に引き止められても、あなたの生活と健康の方が大切です。"
  },
  {
    q: "年度途中で辞めたら、子どもたちが傷ついてしまわないか不安です",
    a: "その不安を抱えるのは、とても自然なことです。ただ、子どもたちは大人が思っている以上に、周囲の体制や雰囲気の影響を受けます。先生自身がつらさを抱えながら無理に笑顔を作って働き続けることが、必ずしも子どもたちにとって良いとは限りません。安心できる環境を整えるのは園全体の役割です。あなた一人の責任ではありません。"
  },
  {
    q: "卒園式や発表会、行事前に辞めるのは申し訳ないです",
    a: "行事前は特に「今抜けたら大変になる」と感じやすいですよね。でも、その気持ちにつけ込むように、ずっと退職を先延ばしにされてしまうケースも少なくありません。行事・年度末・新学期・人手不足は、現場では常に何かしらあります。そのたびに我慢を続けていると、結局いつまでも辞められなくなってしまいます。あなたが限界を迎えているなら、タイミングよりも、まず自分を守ることを優先してください。"
  },
  {
    q: "子どもたちに直接お別れが言えないのがつらいです",
    a: "とてもつらいですよね。本当はきちんと挨拶したい、最後まで見届けたいと思う方は多いです。ただ、現場との関係性や精神的負担によっては、無理に出勤することでさらに傷ついてしまう場合もあります。あなたの安全と心の安定を優先しながら、どう進めるのが一番負担が少ないかを一緒に考えます。"
  },
  {
    q: "保護者にどう思われるか不安です",
    a: "保護者のことまで考えてしまうのも、保育士さんらしい優しさです。ですが、退職に関する説明や対応は本来施設側が行うものです。あなたが必要以上に責任を感じる必要はありません。周囲からどう思われるかより、まずは今の環境であなた自身が限界になっていないかを大切にしてください。"
  },
  {
    q: "人手不足なのに辞めていいのでしょうか？",
    a: "人手不足を理由に、辞める権利まで我慢する必要はありません。人員確保は事業者側の責任であり、ひとりの職員が人生や健康を削って支える前提であってはいけません。「今辞められたら困る」と言われると苦しくなりますが、困る状態を放置してきた責任まで背負わなくて大丈夫です。"
  },
  {
    q: "迷惑をかけるのが怖くて、退職を言い出せません",
    a: "そのお気持ちはとてもよく分かります。保育士さんは普段から「周りを優先する」ことに慣れているので、自分のことを後回しにしてしまいがちです。でも、退職はわがままではなく、あなたの人生を守るための選択です。言い出しづらい、怖い、責められそう——そうした負担を減らすために退職代行があります。"
  },
  {
    q: "園長や主任に怒られそうで怖いです",
    a: "怒られるのが怖くて動けなくなってしまう方は本当に多いです。特に、これまで強い口調で引き止められたり、圧をかけられてきた方ほど、一人で連絡するのは大きな負担になります。そうした直接のやり取りを避けながら進めたい方のために、代行という選択肢があります。精神的な負担を減らし、落ち着いて次の一歩に進めるようサポートします。"
  },
  {
    q: "こんな理由で辞めてもいいのでしょうか？",
    a: "もちろんです。「人間関係がつらい」「体力的に限界」「給料に見合わない」「休めない」「行きたくない」こうした理由を、無理に立派な言葉に言い換える必要はありません。辞めたいと思うほど苦しい時点で、十分に相談する理由があります。"
  },
  {
    q: "本当に退職できますか？",
    a: "状況によって進め方は異なりますが、多くの方が“もう無理だ”という状態から退職へ進んでいます。一人で抱え込まず、まずは今の状況を整理するだけでも気持ちは軽くなります。「まだ依頼するか決めていない」「まず相談だけしたい」という段階でも大丈夫です。"
  }
];

export default function QASection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-slate-50 py-12 px-4 md:px-8 mt-4 border-t border-slate-200">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-8 text-slate-800 flex items-center justify-center gap-2">
          <span className="text-blue-600">Q&A</span> よくある質問
        </h2>
        
        <div className="flex flex-col gap-4">
          {qaList.map((qa, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleOpen(idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <div className="flex gap-3">
                    <span className="font-bold text-blue-600 text-lg md:text-xl">Q.</span>
                    <span className="font-bold text-slate-800 text-sm md:text-base">{qa.q}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`px-5 overflow-hidden transition-all duration-300 ease-in-out bg-blue-50/50 ${
                    isOpen ? "max-h-96 py-4 border-t border-slate-100" : "max-h-0 py-0"
                  }`}
                >
                  <div className="flex gap-3">
                    <span className="font-bold text-red-500 text-lg md:text-xl">A.</span>
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                      {qa.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
