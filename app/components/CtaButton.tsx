"use client";

import { ChevronRight } from "lucide-react";
import { handleLineClick } from "@/lib/lineConversion";

export default function CtaButton({ text = "今すぐLINE相談" }: { text?: string }) {
    return (
        <div className="w-full flex justify-center bg-pink-50/50 py-4 md:py-6 px-4">
            <a
                href="#"
                onClick={handleLineClick}
                className="group flex flex-col items-center justify-center w-full max-w-[220px] md:max-w-[260px] cursor-pointer relative z-10 mx-auto"
                data-cta="inline"
                data-cta-text={text}
            >
                {/* 上部バッジ */}
                <div className="relative -mb-1 w-full px-2 z-20">
                    <div className="bg-yellow-400 border-2 border-yellow-500 text-red-700 text-[10px] md:text-xs font-black px-2 py-1 rounded-t-xl shadow-md flex items-center justify-center gap-1 leading-tight">
                        <span>LINEからの申し込みで5,000円OFF</span>
                    </div>
                </div>

                {/* メインボタン（黒） */}
                <div className="w-full bg-gray-900 hover:bg-gray-800 transition-all duration-300 transform group-hover:scale-[1.02] active:scale-95 rounded-b-xl rounded-t-sm shadow-[0_4px_0_#1a1a1a] hover:shadow-[0_2px_0_#1a1a1a] hover:translate-y-0.5 p-1">
                    <div className="bg-gradient-to-b from-white/10 to-transparent w-full h-full rounded-lg flex items-center justify-center py-2 px-2 relative overflow-hidden gap-2">
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
