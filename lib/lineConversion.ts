const LINE_URL = "https://line.me/R/ti/p/@081xssun?ts=09232319&oat_content=url";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function handleLineClick(e: React.MouseEvent) {
  e.preventDefault();

  if (typeof window.gtag === "function") {
    let opened = false;
    window.gtag("event", "conversion", {
      send_to: "AW-17871482472/7dHSCKn8gIwcEOjc5MlC",
      value: 1.0,
      currency: "JPY",
      event_callback: () => {
        if (!opened) {
          opened = true;
          window.open(LINE_URL, "_blank");
        }
      },
    });
    // コールバックが呼ばれない場合のフォールバック
    setTimeout(() => {
      if (!opened) {
        opened = true;
        window.open(LINE_URL, "_blank");
      }
    }, 2000);
  } else {
    window.open(LINE_URL, "_blank");
  }
}

export { LINE_URL };
