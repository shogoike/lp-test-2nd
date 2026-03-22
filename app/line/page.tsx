"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function LineRedirect() {
  const lineUrl = "https://line.me/R/ti/p/@081xssun?ts=09232319&oat_content=url";

  useEffect(() => {
    // Google Ads コンバージョンを発火してからリダイレクト
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-17871482472/7dHSCKn8gIwcEOjc5MlC",
        value: 1.0,
        currency: "JPY",
        event_callback: () => {
          window.location.href = lineUrl;
        },
      });
      // コールバックが呼ばれない場合のフォールバック
      setTimeout(() => {
        window.location.href = lineUrl;
      }, 2000);
    } else {
      // gtagが読み込まれていない場合はそのままリダイレクト
      setTimeout(() => {
        window.location.href = lineUrl;
      }, 1000);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black font-sans">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl text-center max-w-sm w-full mx-4 border border-gray-700">
        <div className="w-16 h-16 border-4 border-gray-600 border-t-green-500 rounded-full animate-spin mx-auto mb-6" />
        <h2 className="text-xl font-bold text-white mb-2">LINE画面へ移動中です</h2>
        <p className="text-gray-400 text-sm mb-6">
          数秒経っても自動で切り替わらない場合は、<br />
          下のボタンを押してください。
        </p>
        <a 
          href={lineUrl}
          className="inline-flex items-center justify-center bg-[#06C755] text-white font-bold py-3 px-8 rounded-full shadow hover:bg-[#05b34c] transition duration-300 w-full"
        >
          LINEを開く
        </a>
      </div>
    </div>
  );
}
