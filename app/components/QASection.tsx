"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type QA = {
  q: string;
  a: string;
};

const qaList: QA[] = [
  {
    q: "上司や会社に直接連絡する必要はありますか？",
    a: "いいえ。依頼者様から直接連絡する必要はありません。すべて当サービスが代行いたしますのでご安心ください。"
  },
  {
    q: "アルバイトや契約社員でも利用できますか？",
    a: "正社員以外の雇用形態でもご利用いただけます。パート、アルバイト、契約社員、派遣社員など幅広く対応しています。"
  },
  {
    q: "会社から連絡がきたらどうすればいいですか？",
    a: "基本的に会社からの連絡対応も代行します。万が一直接連絡が入った場合でも、あらかじめお伝えする対応方法に従っていただければ大丈夫です。"
  },
  {
    q: "退職代行で辞められないケースはないのでしょうか？",
    a: "基本的に、どのような状況であっても退職は可能です。法律上、労働者には退職の自由が認められているため、会社が一方的に退職を拒否することはできません。万が一、会社側から強い引き止めや不当な要求があった場合でも、当社が間に入り速やかに対応いたしますのでご安心ください。"
  },
  {
    q: "上司に引き止められて辞められない場合でも大丈夫ですか？",
    a: "大丈夫です。ご本人の意思を尊重し、会社に対して退職の意思を代わりに伝えますので、引き止めのストレスを感じる必要はありません。"
  },
  {
    q: "料金はいつ支払うのですか？",
    a: "ご契約時にお支払いをお願いしております。お支払い方法は銀行振込・クレジットカードなどからお選びいただけます。"
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
