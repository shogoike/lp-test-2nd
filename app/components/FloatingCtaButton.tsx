"use client";

import { ChevronRight } from "lucide-react";
import { handleLineClick } from "@/lib/lineConversion";

export default function FloatingCtaButton({ text = "無料で話をする" }: { text?: string }) {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center pb-4 px-4 pointer-events-none">
            <a
                href="#"
                onClick={handleLineClick}
                className="pointer-events-auto cursor-pointer flex flex-col items-center"
                data-cta="floating"
                data-cta-text={text}
            >
                <div className="text-[10px] font-black px-3 py-0.5 rounded-t-lg -mb-px" style={{ background: "#06C755", color: "#FFFFFF" }}>
                    LINEからの申し込みで5,000円OFF
                </div>
                <div className="bg-gray-900 rounded-full shadow-lg flex items-center justify-center py-3 px-6 gap-2">
                    <img src="/pic/icon/line_logo.jpg" alt="LINE" className="w-6 h-6 rounded-md object-contain" />
                    <span className="text-white text-sm font-black tracking-wide drop-shadow-md">
                        {text}
                    </span>
                    <ChevronRight className="w-4 h-4 text-white" />
                </div>
            </a>
        </div>
    );
}
