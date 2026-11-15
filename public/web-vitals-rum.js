/* Web Vitals RUM. Loaded from the document head. No cookies. */
const RUM_COLLECTOR = "https://rum-collector.leaderint.workers.dev";
const WEB_VITALS_SRC = "https://web-vitals-script.leaderint.workers.dev";
const SITE_ID = 19828;

function generatePageviewID() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 20; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

const pageviewID = generatePageviewID();

function sendToAnalytics(metric) {
  if (metric.navigationType != "back-forward-cache") {
    const data = {
      ...metric,
      page_path: window.location.pathname,
      user_agent: navigator.userAgent,
      pageview_id: pageviewID,
      site_id: SITE_ID,
    };

    const body = JSON.stringify(data);

    (navigator.sendBeacon && navigator.sendBeacon(RUM_COLLECTOR, body)) ||
      fetch(RUM_COLLECTOR, { body, method: "POST", keepalive: true });
  }
}

(function () {
  var script = document.createElement("script");
  script.src = WEB_VITALS_SRC;
  script.onload = function () {
    webVitals.onCLS(sendToAnalytics);
    webVitals.onINP(sendToAnalytics);
    webVitals.onLCP(sendToAnalytics);
    webVitals.onTTFB(sendToAnalytics);
  };
  document.head.appendChild(script);
})();
