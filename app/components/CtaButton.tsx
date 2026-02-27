"use client";

import { MessageCircle, ChevronRight } from "lucide-react";

export default function CtaButton() {
    return (
        <div className="w-full flex justify-center my-10 md:my-12 px-4">
            <a
                href="https://line.me/R/ti/p/@081xssun?ts=09232319&oat_content=url"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center w-full max-w-md cursor-pointer"
            >
                {/* 上部バッジ（ピンク） */}
                <div className="relative mb-3">
                    <div className="bg-rose-50/90 backdrop-blur-sm border border-rose-200 text-rose-600 text-xs md:text-sm font-bold px-6 py-2 rounded-full shadow-sm flex items-center gap-1">
                        <span className="text-rose-400">\</span>
                        相談無料・24時間受付中
                        <span className="text-rose-400">/</span>
                    </div>
                    {/* 下三角（吹き出しのしっぽ風） */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-transparent border-t-rose-200"></div>
                </div>

                {/* メインボタン（LINEグリーン） */}
                <div className="w-full bg-[#06C755] hover:bg-[#05b34c] transition-all duration-300 transform group-hover:scale-[1.02] active:scale-95 rounded-2xl shadow-lg hover:shadow-xl p-1">
                    <div className="bg-gradient-to-b from-white/20 to-transparent w-full h-full rounded-xl flex flex-col items-center justify-center py-4 px-2 relative overflow-hidden">
                        {/* キラッと光るエフェクト */}
                        <div className="absolute inset-0 w-12 h-full bg-white/20 skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-in-out_infinite] -translate-x-32" />

                        <div className="flex items-center gap-2 mb-1 z-10">
                            <img src="/pic/icon/line_logo.jpg" alt="LINE" className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-contain shadow-sm" />
                            <span className="text-white text-xl md:text-2xl font-extrabold tracking-wide">
                                今すぐLINEで無料相談
                            </span>
                            <ChevronRight className="w-6 h-6 text-white opacity-80" />
                        </div>
                        <p className="text-green-50 text-xs md:text-sm font-bold opacity-90 z-10">
                            匿名OK / スマホから最短1分で完了
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
}
