"use client";

import { ThumbsUp } from "lucide-react";

export default function BentoSection() {
    return (
        <section className="w-full max-w-2xl mx-auto px-4 py-8 bg-white">
            <div className="grid grid-cols-1 gap-4">

                {/* 利用者の声 */}
                <div className="col-span-1 bg-pink-50/50 border border-pink-100 rounded-3xl p-6 shadow-sm">
                    <div className="flex items-center gap-2 text-indigo-500 mb-6 justify-center">
                        <ThumbsUp className="w-5 h-5" />
                        <h3 className="font-bold tracking-widest text-sm">VOICE</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-2xl relative">
                            <div className="w-3 h-3 bg-gray-50 absolute -top-1 left-6 transform rotate-45"></div>
                            <p className="text-sm text-gray-700 leading-relaxed font-medium">「絶対に辞めさせない」と言われていた園長にも交渉していただき、無事退職できました！</p>
                            <p className="text-xs text-gray-400 mt-3 text-right">20代 保育士 女性</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-2xl relative">
                            <div className="w-3 h-3 bg-gray-50 absolute -top-1 left-6 transform rotate-45"></div>
                            <p className="text-sm text-gray-700 leading-relaxed font-medium">LINEで相談した翌日から本当に出社しなくて良くなり、心がスッと軽くなりました。</p>
                            <p className="text-xs text-gray-400 mt-3 text-right">30代 保育士 女性</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
