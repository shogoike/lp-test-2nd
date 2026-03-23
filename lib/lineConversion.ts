const LINE_URL = "https://line.me/R/ti/p/@081xssun?ts=09232319&oat_content=url";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function handleLineClick(e: React.MouseEvent) {
  e.preventDefault();

  // コンバージョン発火（非同期、結果を待たない）
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-17871482472/7dHSCKn8gIwcEOjc5MlC",
      value: 1.0,
      currency: "JPY",
    });
  }

  // 現在のページからLINEに遷移（新しいタブは開かない）
  window.location.href = LINE_URL;
}

export { LINE_URL };
