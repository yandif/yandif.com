import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import scrollTo from "../../lib/scroll";
import useScrollTop from "../../hooks/usScrollTop";
export default function Layout({ children }) {
  let flag = useScrollTop(700);
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
        <Header></Header>
        <main className=" flex-1">{children}</main>
        {flag == false ? (
          <a
            className="cursor-pointer w-8 h-8 mr-3 mb-2  fixed right-0 bottom-0"
            onClick={() => {
              scrollTo("body", false);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="30" fill="#1e6a9c" />
              <path fill="#fff" d="M48 30.3L32 15 16 30.3h10.6V49h10.3V30.3z" />
            </svg>
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
