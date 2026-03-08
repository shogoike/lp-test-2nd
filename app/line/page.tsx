"use client";

import { useEffect } from "react";

export default function LineRedirect() {
  const lineUrl = "https://line.me/R/ti/p/@081xssun?ts=09232319&oat_content=url";

  useEffect(() => {
    // コンバージョンタグ（Google Analytics, Meta Pixelなど）を発火させる場合は、
    // ここ（リダイレクト前）に記述すると確実です。
    // 例: window.gtag('event', 'conversion', {...});

    // 1秒後に自動的にLINEアプリ・画面へ遷移
    const timer = setTimeout(() => {
      window.location.href = lineUrl;
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm w-full mx-4 border border-pink-100">
        <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin mx-auto mb-6" />
        <h2 className="text-xl font-bold text-gray-800 mb-2">LINE画面へ移動中です</h2>
        <p className="text-gray-500 text-sm mb-6">
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
