"use client";

import { ChevronRight } from "lucide-react";

export default function FloatingCtaButton({ text = "LINEで今すぐ相談" }: { text?: string }) {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center pb-3 px-4 pointer-events-none">
            <a
                href="/line"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto flex items-center justify-center max-w-[200px] cursor-pointer"
                data-cta="floating"
                data-cta-text={text}
            >
                <div className="bg-gray-900 rounded-full p-0.5 shadow-lg">
                    <div className="flex items-center justify-center py-1.5 px-3 bg-gradient-to-b from-white/10 to-transparent rounded-full gap-1.5">
                        <img src="/pic/icon/line_logo.jpg" alt="LINE" className="w-5 h-5 rounded-md object-contain border border-white/50" />
                        <span className="text-white text-xs font-black tracking-wide drop-shadow-md">
                            {text}
                        </span>
                        <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                </div>
            </a>
        </div>
    );
}
