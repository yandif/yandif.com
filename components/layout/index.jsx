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
      </Head>

      <div className=" layout  flex flex-col min-h-screen ">
        <Header></Header>
        <main className=" flex-1">{children}</main>
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
