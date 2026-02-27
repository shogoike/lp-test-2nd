"use client";

import { Check } from "lucide-react";

export default function AnxietyListSection() {
    const anxieties = [
        {
            title: "人手不足で辞められない",
            desc: "人手不足はあなたの責任ではありません",
        },
        {
            title: "子どもが気がかりで決断できない",
            desc: "あなたが心身共に健康であることが何より大切です",
        },
        {
            title: "「辞めたい」と言い出せない",
            desc: "退職の意思は私たちが代わりにお伝えします\n園とのやり取りはすべてお任せください",
        },
        {
            title: "残業・持ち帰り業務が減らない",
            desc: "長時間労働から抜け出す選択肢があります",
        },
        {
            title: "職場の人間関係がうまくいかない",
            desc: "あなたが悪いわけではありません\n環境を変えるという選択もあります",
        },
        {
            title: "年度途中で辞められないと思っている",
            desc: "年度途中でも退職は可能です",
        },
    ];

    return (
        <section className="w-full bg-white px-4 md:px-8 py-16 relative border-y-8 border-gray-100/50">
            {/* Title Area */}
            <div className="text-center mb-12">
                <p className="text-rose-400 font-bold text-lg md:text-xl tracking-wider mb-3">
                    保育士だからこそ
                </p>
                <div className="bg-rose-100 inline-block w-full py-6 md:py-8 relative">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug">
                        こんなお悩み<br />
                        ありませんか？
                    </h2>
                </div>
            </div>

            {/* List Area */}
            <div className="space-y-8 max-w-lg mx-auto pl-2">
                {anxieties.map((item, index) => (
                    <div key={index} className="flex gap-4 md:gap-5 items-start">
                        {/* Check Icon */}
                        <div className="shrink-0 mt-1 relative">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-rose-200 flex items-center justify-center border border-gray-800 shadow-sm">
                                <Check className="w-7 h-7 md:w-8 md:h-8 text-gray-800" strokeWidth={1.5} />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="pt-1">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 leading-tight tracking-tight">
                                {item.title}
                            </h3>
                            <div className="bg-rose-100/80 inline-block px-4 py-2 rounded-xl">
                                <p className="text-sm md:text-base text-gray-800 font-bold whitespace-pre-wrap leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
