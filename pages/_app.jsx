import "tailwindcss/tailwind.css";
import "../styles/marked.css";
import "../styles/highlight.css";
import "../styles/common.css";
import Head from "next/head";
import { Router } from "next/router";

Router.events.on("routeChangeComplete", (url) => {
  try {
    window._hmt.push(["_trackPageview", url]);
  } catch (e) {}
});

export default function App({ Component, pageProps }) {
  const getAnalyticsTag = () => {
    return {
      __html: `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?8e956c33973b09ff9b7bfe4b86ee0f73";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
      (function() {
        var google = document.createElement("script");
        google.src = "https://www.googletagmanager.com/gtag/js?id=G-LBVTY5GPW3";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(google, s);
      })();

      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-LBVTY5GPW3');
      `,
    };
  };

  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={getAnalyticsTag()} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
