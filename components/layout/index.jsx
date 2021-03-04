import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import scrollTo from "../../lib/scroll";
import useScrollTop from "../../hooks/usScrollTop";
export default function Layout({ children }) {
  const isHidden = useScrollTop();
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
      </Head>

      <div className=" layout  flex flex-col min-h-screen ">
        <div id="backTop"></div>
        <Header></Header>
        <main className=" flex-1">{children}</main>
        {isHidden ? (
          <a
            className="cursor-pointer w-8 h-8 mr-3 mb-2  fixed right-0 bottom-0"
            onClick={() => {
              scrollTo("body", false);
            }}
          >
            <img src="/images/ui/top.svg" alt="" />
          </a>
        ) : (
          <></>
        )}
        <Footer></Footer>
      </div>
      <style jsx>{`
        .layout {
          background-color: #eff3f5;
        }
      `}</style>
    </div>
  );
}
