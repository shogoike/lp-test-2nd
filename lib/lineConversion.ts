const LINE_URL = "https://line.me/R/ti/p/@081xssun?ts=09232319&oat_content=url";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function handleLineClick(e: React.MouseEvent) {
  e.preventDefault();

  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-17871482472/7dHSCKn8gIwcEOjc5MlC",
      value: 1.0,
      currency: "JPY",
      event_callback: () => {
        window.open(LINE_URL, "_blank");
      },
    });
    // フォールバック
    setTimeout(() => {
      window.open(LINE_URL, "_blank");
    }, 2000);
  } else {
    window.open(LINE_URL, "_blank");
  }
}

export { LINE_URL };
