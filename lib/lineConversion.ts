const LINE_URL = "https://line.me/R/ti/p/@081xssun?ts=09232319&oat_content=url";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function handleLineClick(e: React.MouseEvent) {
  e.preventDefault();

  // クリック直後にウィンドウを開く（ポップアップブロック回避）
  const newWindow = window.open("about:blank", "_blank");

  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-17871482472/7dHSCKn8gIwcEOjc5MlC",
      value: 1.0,
      currency: "JPY",
    });
  }

  // コンバージョン発火後にURLをセット
  if (newWindow) {
    newWindow.location.href = LINE_URL;
  } else {
    // ブロックされた場合のフォールバック
    window.location.href = LINE_URL;
  }
}

export { LINE_URL };
