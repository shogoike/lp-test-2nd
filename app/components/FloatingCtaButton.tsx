"use client";

import { ChevronRight } from "lucide-react";
import { handleLineClick } from "@/lib/lineConversion";

export default function FloatingCtaButton({ text = "無料で話をする" }: { text?: string }) {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center pb-3 px-4 pointer-events-none">
            <a
                href="#"
                onClick={handleLineClick}
                className="pointer-events-auto flex items-center justify-center max-w-[200px] cursor-pointer"
                data-cta="floating"
                data-cta-text={text}
            >
                <div className="bg-gray-900 rounded-full shadow-lg flex items-center justify-center py-2 px-4 gap-1.5">
                    <img src="/pic/icon/line_logo.jpg" alt="LINE" className="w-5 h-5 rounded-md object-contain" />
                    <span className="text-white text-xs font-black tracking-wide drop-shadow-md">
                        {text}
                    </span>
                    <ChevronRight className="w-3 h-3 text-white" />
                </div>
            </a>
        </div>
    );
}
