"use client";

import { ChevronRight } from "lucide-react";
import { handleLineClick } from "@/lib/lineConversion";

export default function CtaButton({ text = "今すぐLINE相談" }: { text?: string }) {
    return (
        <div className="w-full flex justify-center py-4 md:py-6 px-4">
            <a
                href="#"
                onClick={handleLineClick}
                className="group cursor-pointer"
                data-cta="inline"
                data-cta-text={text}
            >
                <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform group-hover:scale-[1.02] active:scale-95">
                    <div className="text-[10px] font-black text-center py-1 px-4" style={{ background: "#06C755", color: "#FFFFFF" }}>
                        LINEからの申し込みで5,000円OFF
                    </div>
                    <div className="flex items-center justify-center py-2.5 px-6 gap-2">
                        <img src="/pic/icon/line_logo.jpg" alt="LINE" className="w-6 h-6 rounded-md object-contain" />
                        <span className="text-white text-sm font-black tracking-wide drop-shadow-md">
                            {text}
                        </span>
                        <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                </div>
            </a>
        </div>
    );
}
