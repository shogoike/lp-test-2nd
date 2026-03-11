import React from "react";
import Image from "next/image";
import { CheckCircle2, AlertTriangle, Sparkles, Clock, ThumbsUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-pink-50 overflow-hidden pb-8">
      {/* 最上部アイキャッチリボン */}
      <div className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 text-white text-center py-2 px-4 shadow-md w-full z-10 relative">
        <p className="font-bold text-sm md:text-base tracking-wide flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          「明日からもう行きたくない…」保育士さんの限界、引き受けます！
          <Sparkles className="w-4 h-4 text-yellow-300" />
        </p>
      </div>

      <div className="px-4 pt-6 pb-2 flex flex-col items-center">
        {/* メインコピーエリア */}
        <div className="text-center mb-6 w-full relative z-20">
          <div className="inline-block bg-red-600 text-white text-xs md:text-sm font-black px-4 py-1.5 rounded-full mb-3 shadow-sm transform -rotate-2">
            園長・保護者への連絡は一切不要！
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-snug mb-3 drop-shadow-sm">
            <span className="text-pink-600 block mb-1">ストレスゼロ</span> で、
            <br />
            最短当日に退職完了！
          </h1>
          <p className="text-gray-700 font-bold text-sm md:text-base">
            引き継ぎも有休消化も、すべて丸投げでOKです。
          </p>
        </div>

        {/* コスパ＆期間限定フック（ドンキホーテPOP風） */}
        <div className="w-full bg-yellow-100 border-4 border-yellow-400 rounded-2xl p-4 md:p-6 mb-6 shadow-xl relative mt-2 z-20 max-w-sm mx-auto">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white font-black px-4 md:px-6 py-2 rounded-full shadow-md whitespace-nowrap text-[12px] md:text-sm border-2 border-white animate-pulse">
            ＼ 辞めるなら『学期末の今』が最大のチャンス！ ／
          </div>
          
          <div className="text-center mt-4">
            <p className="text-gray-800 font-bold text-[12px] md:text-sm mb-1">
              業界随一の安さ！追加費用は<span className="text-red-600 underline decoration-red-600 decoration-2 underline-offset-2 font-black">1円もかかりません</span>
            </p>
            <div className="flex items-end justify-center gap-1 text-red-600 mb-2">
              <span className="font-black text-lg md:text-xl mb-1">一律</span>
              <span className="font-black text-5xl md:text-6xl tracking-tighter drop-shadow-md">14,800</span>
              <span className="font-black text-xl md:text-2xl mb-1">円</span>
              <span className="font-bold text-sm md:text-base mb-1 text-gray-600 ml-1">(税込)</span>
            </div>
            
            <div className="bg-white rounded-lg p-3 inline-block mt-2 border border-yellow-200 shadow-sm w-full text-left">
              <p className="text-green-700 font-bold text-[13px] md:text-sm flex items-start gap-2 mb-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> 
                <span>今すぐLINEで無料相談・匿名OK！</span>
              </p>
              <p className="text-green-700 font-bold text-[13px] md:text-sm flex items-start gap-2 mb-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> 
                <span>引継ぎ丸投げ・有休消化もサポート</span>
              </p>
              <p className="text-green-700 font-bold text-[13px] md:text-sm flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" /> 
                <span>利用者満足度 トップクラスの実績</span>
              </p>
            </div>
          </div>
        </div>

        {/* CTA直前の一押し */}
        <p className="text-center text-[12px] md:text-sm font-bold text-gray-700 bg-white/90 py-2.5 px-4 rounded-full shadow-sm mb-[-1.5rem] mt-2 z-10 relative border-b-2 border-pink-200">
          「私でも本当に辞められる？」まずは無料相談で確かめてください！
        </p>

      </div>
    </section>
  );
}
