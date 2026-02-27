"use client";

export default function CtaButton() {
    return (
        <div className="w-full flex justify-center my-8 md:my-10 px-4">
            <a
                href="https://line.me/R/ti/p/@081xssun?ts=09232319&oat_content=url"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-[1.02] active:scale-95 flex flex-col items-center justify-center filter drop-shadow-md w-full max-w-sm"
            >
                <img
                    src="/pic/icon/1_2x.avif"
                    alt="LINEで無料相談"
                    className="w-full h-auto object-contain rounded-xl"
                />
                <p className="text-xs font-bold text-rose-600 mt-2 bg-rose-50 px-4 py-1.5 rounded-full shadow-sm animate-pulse">
                    ＼ 相談無料・24時間受付中 ／
                </p>
            </a>
        </div>
    );
}
