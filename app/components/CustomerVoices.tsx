import React from "react";
import { Star, User, Quote } from "lucide-react";

const reviews = [
  { id: 21, age: "20代後半", tenure: "3年目", text: "一番不安だった引き継ぎも、園との間に入って調整してもらえました。必要な書類の郵送方法まで教えていただき、出勤せずに全て完了。引き継ぎを理由に引き止められていたので、本当に助かりました。" },
  { id: 1, age: "20代前半", tenure: "1年目", text: "毎日怒鳴られて限界でした。LINE相談した翌日には代わりに園長へ伝えてもらえ、本当に家から出ずに辞められました。感謝しかないです。" },
  { id: 2, age: "20代後半", tenure: "4年目", text: "持ち帰り残業が当たり前で体調を崩しました。辞めたいと言っても『人手不足なのに』と引き止められ困っていましたが、代行を使ったらスムーズでした。" },
  { id: 3, age: "30代前半", tenure: "7年目", text: "お局先生との人間関係で精神的に参っていました。自分で言う勇気が出ず利用しましたが、あっという間に手続きが終わり、もっと早く使えばよかったです。" },
  { id: 4, age: "20代前半", tenure: "2年目", text: "即日対応していただき、次の日から行かなくて済みました！保護者対応のストレスから解放されて、今はとてもよく眠れます。" },
  { id: 5, age: "40代", tenure: "10年以上", text: "主任という立場で自分から辞めると言えませんでした。代行業者ということで不安はありましたが、プロの対応で円満に退職できました。" },
  { id: 6, age: "20代後半", tenure: "3年目", text: "ボーナスをもらってから辞めたかったのですが、タイミングが難しく相談。しっかりと希望通りに進めていただき、有休も消化できました。" },
  { id: 7, age: "30代後半", tenure: "5年目", text: "『退職届は直接持ってこい』と言われる厳しい園でしたが、一切顔を合わせることなく退職を認めてもらえました。本当に14,800円の価値があります。" },
  { id: 8, age: "20代前半", tenure: "1年目", text: "入職して半年ですが、聞いていた条件と違いすぎて毎日泣いていました。怒られるのが怖かったですが、代わりに全て伝えてくれて救われました。" },
  { id: 9, age: "30代前半", tenure: "6年目", text: "行事前で絶対に辞められない雰囲気でしたが、限界で利用しました。園側への配慮もしつつ、私の意思をしっかり通してくれました。" },
  { id: 10, age: "20代後半", tenure: "2年目", text: "親身になってLINEで何度も相談に乗ってくれました。深夜に連絡したのに翌朝すぐに対応してくれて、その日に辞められました。" },
  { id: 11, age: "40代", tenure: "パート", text: "パートなのに休みが取れず、サービス残業ばかりでした。自分で言うと角が立つと思い依頼しましたが、すっきりと辞められました。" },
  { id: 12, age: "20代前半", tenure: "新卒", text: "初めての社会人で右も左も分からず、ただただ毎日が恐怖でした。優しく退職の仕組みを教えていただき、安心して任せられました。" },
  { id: 13, age: "30代後半", tenure: "8年目", text: "引き継ぎ資料だけ郵送で送り、あとは全てお任せ。こんなに簡単にストレスなく辞められるなら、何ヶ月も悩む必要ありませんでした。" },
  { id: 14, age: "20代後半", tenure: "4年目", text: "追加費用が本当に一切かかりませんでした。他社と比べて安いので不安でしたが、対応は非常に丁寧でスピーディーでした。" },
  { id: 15, age: "30代前半", tenure: "主任", text: "責任ある立場での退職代行利用は悩みましたが、限界でした。結果的にトラブルもなく、園の文句も直接聞かずに済みました。" },
  { id: 16, age: "20代前半", tenure: "3年目", text: "『訴えるぞ』と脅すような園長で怯えていましたが、法律に則った毅然とした対応をしていただき、園長もすぐに引き下がったようです。" },
  { id: 17, age: "20代後半", tenure: "5年目", text: "寮に入っていたので退寮の手続きなどが不安でしたが、退居日の調整の意思伝達までサポートしていただき助かりました。" },
  { id: 18, age: "30代前半", tenure: "6年目", text: "残業代が未払いだったのですが、退職の意思伝達時に未払いについての確認も代わりにしていただき、無事に解決へ向かいました。" },
  { id: 19, age: "40代", tenure: "9年目", text: "園の独特なルールのせいで辞めさせてもらえなかった同僚を見ていたので利用。プロが間に入るとこうもあっさり退職できるのかと驚きでした。" },
  { id: 20, age: "20代前半", tenure: "1年目", text: "とにかくもう明日の朝、園の門をくぐりたくなかった。夜中に決意して申し込み、朝には完了報告が来て本当に泣いて喜びました。" },
];

export default function CustomerVoices() {
  return (
    <section className="w-full bg-pink-50 py-12 overflow-hidden border-y border-pink-100 mt-4 mb-4">
      <div className="max-w-2xl mx-auto px-4 mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-2 flex items-center justify-center gap-2">
          ご利用いただいた<span className="text-pink-500">保育士さん</span>の声
        </h2>
        <p className="text-gray-600 font-bold text-[13px] md:text-sm">
          実際に当サービスを利用して、<br className="md:hidden" />つらい現状から解放された方々です！
        </p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto">
        <div 
          className="flex overflow-x-auto gap-4 px-4 pb-8 pt-4 snap-x snap-mandatory" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            div::-webkit-scrollbar { display: none; }
          `}} />
          
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="flex-shrink-0 w-[280px] md:w-[320px] bg-pink-50/80 rounded-2xl p-5 shadow-md snap-center relative border border-pink-100 flex flex-col"
            >
              <Quote className="absolute top-4 right-4 text-pink-50 w-12 h-12 -z-10" />
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-800 text-sm font-medium leading-relaxed mb-4 flex-grow">
                「{review.text}」
              </p>
              
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100 mt-auto">
                <div className="bg-pink-100 p-2 rounded-full">
                  <User className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm">{review.age}</p>
                  <p className="text-gray-500 text-xs">経験年数: {review.tenure}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-pink-50 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-pink-50 to-transparent pointer-events-none" />
        
        <p className="text-center text-xs text-pink-500 font-bold -mt-2">
          ← 横にスワイプして{reviews.length}件のレビューを見る →
        </p>
      </div>
    </section>
  );
}
