"use client";

import { MessageCircle, ChevronRight } from "lucide-react";

export default function CtaButton({ text = "今すぐLINE相談" }: { text?: string }) {
    return (
        <div className="w-full flex justify-center bg-pink-50/50 py-4 md:py-6 px-4">
            <a
                href="/line"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center w-full max-w-[220px] md:max-w-[260px] cursor-pointer relative z-10 mx-auto"
            >
                {/* 上部バッジ */}
                <div className="relative -mb-1 w-full px-2 z-20">
                    <div className="bg-yellow-400 border-2 border-yellow-500 text-red-700 text-[10px] md:text-xs font-black px-2 py-1 rounded-t-xl shadow-md flex items-center justify-center gap-1 leading-tight">
                        <span>相談無料・24時間受付中</span>
                    </div>
                </div>

                {/* メインボタン（LINEグリーン） */}
                <div className="w-full bg-[#06C755] hover:bg-[#05b34c] transition-all duration-300 transform group-hover:scale-[1.02] active:scale-95 rounded-b-xl rounded-t-sm shadow-[0_4px_0_#048b3b] hover:shadow-[0_2px_0_#048b3b] hover:translate-y-0.5 p-1">
                    <div className="bg-gradient-to-b from-white/30 to-transparent w-full h-full rounded-lg flex items-center justify-center py-2 px-2 relative overflow-hidden gap-2">
                        <img src="/pic/icon/line_logo.jpg" alt="LINE" className="w-6 h-6 md:w-7 md:h-7 rounded-md object-contain shadow-sm border border-white" />
                        <span className="text-white text-base md:text-lg font-black tracking-wide drop-shadow-md">
                            {text}
                        </span>
                        <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                </div>
            </a>
        </div>
    );
}
