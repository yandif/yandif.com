import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export const siteTitle = "Yandif";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="description" content="博客" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <title>首页</title>
      </Head>

      <div className=" flex flex-col min-h-screen bg-gray-100">
        <Header></Header>
        <main className=" flex-1">{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
}
