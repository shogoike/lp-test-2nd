"use client";

import { MessageCircle, ChevronRight } from "lucide-react";

export default function FloatingCtaButton() {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none flex justify-center pb-2">
            <div className="w-full md:max-w-md flex justify-center px-4">
                <a
                    href="https://line.me/R/ti/p/@081xssun?ts=09232319&oat_content=url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto group flex flex-col items-center justify-center w-full max-w-[300px] cursor-pointer drop-shadow-2xl animate-bounce"
                    style={{ animationDuration: "2.5s" }}
                >
                    {/* 上部バッジ（ピンクから黄色に変更して目立たせる） */}
                    <div className="relative -mb-1 w-full px-2 z-20">
                        <div className="bg-yellow-400 border-2 border-yellow-500 text-red-700 text-[11px] md:text-xs font-black px-4 py-1.5 rounded-t-2xl shadow-[0_-4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center gap-1 mx-auto max-w-[260px]">
                            ＼ スマホで最短1分！ ／ 相談無料・24時間受付中
                        </div>
                    </div>

                    {/* メインボタン（LINEグリーン） */}
                    <div className="w-full bg-[#06C755] hover:bg-[#05b34c] transition-all duration-300 transform shadow-[0_-5px_15px_rgba(0,0,0,0.2)] p-1 rounded-xl border-t-2 border-green-400">
                        <div className="w-full h-full flex flex-col items-center justify-center py-2 md:py-2.5 px-2 relative overflow-hidden bg-gradient-to-b from-white/30 to-transparent rounded-lg">
                            {/* キラッと光るエフェクト */}
                            <div className="absolute inset-0 w-[200%] h-full bg-white/30 skew-x-[-20deg] animate-[shine_2s_ease-in-out_infinite] -translate-x-full" />

                            <div className="flex items-center gap-2 mb-0.5 z-10">
                                <img src="/pic/icon/line_logo.jpg" alt="LINE" className="w-7 h-7 md:w-8 md:h-8 rounded-[6px] object-contain shadow-sm border border-white" />
                                <span className="text-white text-lg md:text-xl font-black tracking-widest drop-shadow-md">
                                    LINEで今すぐ相談
                                </span>
                                <ChevronRight className="w-5 h-5 text-white font-black" />
                            </div>
                            <p className="text-yellow-200 text-[10px] md:text-xs font-bold opacity-100 z-10 mt-0.5 drop-shadow-sm">
                                匿名OK！自宅からスマホで完結
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
