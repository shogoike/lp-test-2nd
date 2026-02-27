"use client";

import { ShieldCheck, Clock, Smartphone, MessageCircle, AlertTriangle, CheckCircle2, ThumbsUp } from "lucide-react";

export default function BentoSection() {
    return (
        <section className="w-full max-w-2xl mx-auto px-4 py-12 bg-[#F8FAFC]">
            <div className="mb-10 text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
                    退職の<span className="text-blue-600">「どうしよう…」</span>を<br className="md:hidden" />
                    すべて解決します
                </h2>
                <p className="mt-3 text-sm text-gray-500 font-medium">スマホひとつで、明日から自由な生活へ。</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 auto-rows-[minmax(120px,auto)]">

                {/* 1. 権威授与 (上部フル幅) */}
                <div className="col-span-2 md:col-span-6 bg-gradient-to-br from-rose-600 to-pink-500 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden flex flex-col justify-center">
                    <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
                        <ShieldCheck size={120} />
                    </div>
                    <div className="relative z-10 flex items-center gap-4">
                        <div className="bg-white/20 p-3 rounded-full">
                            <ShieldCheck className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <p className="text-pink-100 text-sm font-bold tracking-wider mb-1">AUTHORITY</p>
                            <h3 className="text-xl md:text-2xl font-black">弁護士監修で確実な退職</h3>
                            <p className="text-sm mt-1 text-pink-50 opacity-95 leading-relaxed">
                                法的に守られた適正なプロセスで手続きを進めるため、<br className="hidden md:block" />トラブルのリスクを極限まで減らします。
                            </p>
                        </div>
                    </div>
                </div>




                {/* 6. 利用者の声 (最下部フル幅) */}
                <div className="col-span-2 md:col-span-6 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
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
