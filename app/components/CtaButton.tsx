"use client";

import { MessageCircle, ChevronRight } from "lucide-react";

export default function CtaButton() {
    return (
        <div className="w-full flex justify-center bg-white py-6 md:py-8 px-4">
            <a
                href="https://line.me/R/ti/p/@081xssun?ts=09232319&oat_content=url"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center w-full max-w-md cursor-pointer relative z-10 scale-[0.95] md:scale-100"
            >
                {/* チョコザップ風 上部バッジ（黄色＋赤文字など目立つ色） */}
                <div className="relative -mb-1 w-full px-2 z-20">
                    <div className="bg-yellow-400 border-2 border-yellow-500 text-red-700 text-[13px] md:text-base font-black px-4 py-2 rounded-t-xl shadow-md flex items-center justify-center gap-1 animate-bounce" style={{ animationDuration: "2s" }}>
                        ＼ スマホで最短1分！ ／ 相談無料・24時間受付中
                    </div>
                </div>

                {/* メインボタン（LINEグリーン） */}
                <div className="w-full bg-[#06C755] hover:bg-[#05b34c] transition-all duration-300 transform group-hover:scale-[1.02] active:scale-95 rounded-b-xl rounded-t-sm shadow-[0_8px_0_#048b3b] hover:shadow-[0_4px_0_#048b3b] hover:translate-y-1 p-1">
                    <div className="bg-gradient-to-b from-white/30 to-transparent w-full h-full rounded-lg flex flex-col items-center justify-center py-4 px-2 relative overflow-hidden">
                        {/* キラッと光るエフェクト */}
                        <div className="absolute inset-0 w-[200%] h-full bg-white/30 skew-x-[-20deg] animate-[shine_2s_ease-in-out_infinite] -translate-x-full" />

                        <div className="flex items-center gap-3 mb-1 z-10">
                            <img src="/pic/icon/line_logo.jpg" alt="LINE" className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-contain shadow-sm border-2 border-white" />
                            <span className="text-white text-2xl md:text-3xl font-black tracking-widest drop-shadow-md">
                                今すぐLINE相談
                            </span>
                            <ChevronRight className="w-8 h-8 text-white font-black" />
                        </div>
                        <p className="text-yellow-200 text-sm md:text-base font-bold opacity-100 z-10 mt-1 drop-shadow-sm">
                            匿名OK！出社の必要はありません！
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
}
