"use client";

import { MessageCircle, ChevronRight } from "lucide-react";

export default function FloatingCtaButton() {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none pb-4 px-4 flex justify-center">
            <div className="w-full max-w-2xl flex justify-center md:justify-end">
                <a
                    href="https://line.me/R/ti/p/@081xssun?ts=09232319&oat_content=url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto group flex flex-col items-center justify-center w-full max-w-sm md:max-w-md cursor-pointer drop-shadow-2xl animate-bounce"
                    style={{ animationDuration: "2.5s" }}
                >
                    {/* 上部バッジ（ピンク） */}
                    <div className="relative mb-2">
                        <div className="bg-rose-50/95 backdrop-blur-sm border-2 border-rose-200 text-rose-600 text-xs md:text-sm font-black px-6 py-1.5 rounded-full shadow-md flex items-center gap-1">
                            <span className="text-rose-400">\</span>
                            相談無料・24時間受付中
                            <span className="text-rose-400">/</span>
                        </div>
                        {/* 下三角 */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-transparent border-t-rose-200"></div>
                    </div>

                    {/* メインボタン（LINEグリーン） */}
                    <div className="w-full bg-[#06C755] transition-all duration-300 transform rounded-2xl shadow-xl p-1 border-b-4 border-[#048b3b] hover:border-b-[1px] hover:translate-y-[3px]">
                        <div className="w-full h-full rounded-xl flex flex-col items-center justify-center py-3 md:py-4 px-2 relative overflow-hidden bg-gradient-to-b from-white/20 to-transparent">
                            {/* キラッと光るエフェクト */}
                            <div className="absolute inset-0 w-12 h-full bg-white/30 skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-in-out_infinite] -translate-x-32" />

                            <div className="flex items-center gap-2 mb-0.5 z-10">
                                <img src="/pic/icon/line_logo.jpg" alt="LINE" className="w-7 h-7 md:w-9 md:h-9 rounded-[8px] object-contain shadow-sm" />
                                <span className="text-white text-lg md:text-xl font-extrabold tracking-wide drop-shadow-sm">
                                    LINEで今すぐ相談
                                </span>
                                <ChevronRight className="w-5 h-5 text-white opacity-80" />
                            </div>
                            <p className="text-green-50 text-[10px] md:text-xs font-bold opacity-90 z-10">
                                匿名OK / 自宅からスマホで完結
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
