import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="description" content="博客" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1, maximum-scale=1,user-scalable=no"
        />
        <title>首页</title>
        <script>
          {`var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?8e956c33973b09ff9b7bfe4b86ee0f73";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
`}
        </script>
      </Head>

      <div className=" bg-gray-100  flex flex-col min-h-screen ">
        <Header></Header>
        <main className=" flex-1">{children}</main>
        <Footer></Footer>
      </div>
    </div>
  );
}
