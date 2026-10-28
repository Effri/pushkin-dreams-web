(() => {
  async function start() {
    try {
      const { MARKETING_DOMAINS } = await import('./marketing-domains.js');
      if (!MARKETING_DOMAINS.includes(window.location.hostname)) return;
      if (localStorage.getItem('cookieConsent') !== 'accepted' && localStorage.getItem('cookieConsentAccepted') !== 'true') return;
    } catch { return; }
    if (window.__pushkinSalesNinjaStarted) return;
    window.__pushkinSalesNinjaStarted = true;
    for (const [rel, href, as] of [
      ["preconnect", "https://api.sales-ninja.me", ""],
      ["preload", "https://cdn.sales-ninja.me/userBundle.js", "script"]
    ]) {
      const link = document.createElement("link");
      link.rel = rel;
      link.href = href;
      if (as) link.as = as;
      document.head.appendChild(link);
    }
    !function(n,e,t,r,a,s){function i(n,r){var a=e.createElement(t),s=e.getElementsByTagName(t)[0];a.async=1,a.charset="UTF-8",a.src=n,a.onerror=r,s.parentNode.insertBefore(a,s)}n.SalesNinja=["init","start","onPersonalization","onProductRecommendations","registerCartUpdate","reachGoal"].reduce(function(e,t){return e[t]=function(){var e=Array.prototype.slice.call(arguments);e.unshift(t),n[r].apply(0,e)},e},{k:r,ready:!1}),n[r]=function(){var e,t,a=new Promise(function(n,r){e=n,t=r});return(n[r].r=n[r].r||[]).push({s:e,f:t}),(n[r].c=n[r].c||[]).push(arguments),a},i(a,function(){i(s)})}(window,document,"script","ninja","https://cdn.sales-ninja.me/userBundle.js","https://bundle.sales-ninja.me/userBundle.js");
    window.ninja("init", "fcc94c3c-47c7-4006-bd8e-66d79dff48c1");
    window.ninja("start");
  }
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, {once: true});
  window.addEventListener("pushkin:cookie-unlock", start);
})();
