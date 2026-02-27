"use client";

import { MessageCircle, ChevronRight } from "lucide-react";

export default function FloatingCtaButton() {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none flex justify-center">
            <div className="w-full md:max-w-2xl flex justify-center">
                <a
                    href="https://line.me/R/ti/p/@081xssun?ts=09232319&oat_content=url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto group flex flex-col items-center justify-center w-full cursor-pointer drop-shadow-2xl animate-bounce"
                    style={{ animationDuration: "2.5s" }}
                >
                    {/* 上部バッジ（ピンクから黄色に変更して目立たせる） */}
                    <div className="relative -mb-1 w-full px-2 z-20">
                        <div className="bg-yellow-400 border-2 border-yellow-500 text-red-700 text-[13px] md:text-sm font-black px-6 py-2 rounded-t-2xl shadow-[0_-4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center gap-1 mx-auto max-w-xs md:max-w-sm">
                            ＼ スマホで最短1分！ ／ 相談無料・24時間受付中
                        </div>
                    </div>

                    {/* メインボタン（LINEグリーン） */}
                    <div className="w-full bg-[#06C755] hover:bg-[#05b34c] transition-all duration-300 transform shadow-[0_-5px_15px_rgba(0,0,0,0.2)] p-1 border-t-2 border-green-400">
                        <div className="w-full h-full flex flex-col items-center justify-center py-3 md:py-4 px-2 relative overflow-hidden bg-gradient-to-b from-white/30 to-transparent">
                            {/* キラッと光るエフェクト */}
                            <div className="absolute inset-0 w-[200%] h-full bg-white/30 skew-x-[-20deg] animate-[shine_2s_ease-in-out_infinite] -translate-x-full" />

                            <div className="flex items-center gap-3 mb-0.5 z-10">
                                <img src="/pic/icon/line_logo.jpg" alt="LINE" className="w-9 h-9 md:w-11 md:h-11 rounded-[8px] object-contain shadow-sm border border-white" />
                                <span className="text-white text-xl md:text-2xl font-black tracking-widest drop-shadow-md">
                                    LINEで今すぐ相談
                                </span>
                                <ChevronRight className="w-6 h-6 text-white font-black" />
                            </div>
                            <p className="text-yellow-200 text-xs md:text-sm font-bold opacity-100 z-10 mt-1 drop-shadow-sm">
                                匿名OK！自宅からスマホで完結
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
