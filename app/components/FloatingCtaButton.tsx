"use client";

import { MessageCircle, ChevronRight } from "lucide-react";

export default function FloatingCtaButton({ text = "LINEで今すぐ相談" }: { text?: string }) {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none flex justify-center pb-2">
            <div className="w-full md:max-w-md flex justify-center px-4">
                <a
                    href="/line"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto group flex items-center justify-center w-full max-w-[240px] cursor-pointer drop-shadow-xl"
                >
                    {/* コンパクトなバナー型ボタン */}
                    <div className="w-full bg-[#06C755] hover:bg-[#05b34c] transition-all duration-300 rounded-full p-0.5 shadow-lg">
                        <div className="w-full h-full flex items-center justify-center py-2 px-3 relative overflow-hidden bg-gradient-to-b from-white/20 to-transparent rounded-full gap-2">
                            <img src="/pic/icon/line_logo.jpg" alt="LINE" className="w-6 h-6 rounded-md object-contain border border-white/50" />
                            <span className="text-white text-sm font-black tracking-wide drop-shadow-md">
                                {text}
                            </span>
                            <ChevronRight className="w-4 h-4 text-white" />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
