import Head from "next/head";
import Layout from "../../components/layout/index";
import Link from "next/link";
import scrollTo from "../../lib/scroll";
import { useEffect } from "react";
export default function Post({ postData }) {
  useEffect(() => {
    postData.heading.toc.map((v) => {
      document.querySelector(`#toc-${v.id}`).addEventListener("click", () => {
        scrollTo(`#toc-${v.id}`, false);
      });
    });
  }, [true]);
  return (
    <Layout>
      <Head>
        <title>文章 | {postData.title}</title>
      </Head>
      {/* TOC start */}
      <div className="mb-16 h-screen overflow-y-auto fixed right-0 hidden md:block md:w-1/5">
        <div className=" h-3/4 overflow-y-auto mb-6 mx-8 p-3 mt-8 ">
          <div className="w-full pl- text-center mb-4 text-lg">文章目录</div>
          <div className="pt-2">
            {postData.heading.toc.map((v, i) => {
              return (
                <a
                  key={i}
                  className={
                    "block text-black cursor-pointer" +
                    " my-1" +
                    ` pl-${v.tag * 2} toc-h${v.tag}` +
                    (v.tag == postData.heading.maxTitle ? " text-lg" : "")
                  }
                  onClick={() => {
                    scrollTo(`#toc-${v.id}`, false);
                  }}
                >
                  {v.text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {/* TOC end */}
      <div className=" cu bg-white w-full md:w-3/5 mx-auto my-5  px-8   py-10">
        <article>
          <div className="title">{postData.title}</div>
          <div className="meta mb-9">
            <div className="time">
              <img src="/images/ui/date.svg" alt="" />
              <span className="item-text"> {postData.date}</span>
            </div>
            {postData.categories.length >= 1 ? (
              <div className="categories">
                <img src="/images/ui/tag.svg" alt="" />
                {postData.categories.map((category) => {
                  return (
                    <Link
                      key={category.id.toString()}
                      href={`/categories/${category.id}`}
                    >
                      <a className="item-text">{category.title}</a>
                    </Link>
                  );
                })}
              </div>
            ) : (
              ""
            )}

            {/* <div className="reading">
          <img src="/images/ui/eye.svg" alt="" />
          <span className="item-text">…</span>
        </div> */}
          </div>
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: postData.content }}
          />
        </article>
      </div>
      <style jsx>{`
        .title {
          margin: 24px 0;
          font-size: 32px;
          line-height: 1.5;
          font-weight: 600;
        }

        .meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
        .time,
        .categories,
        .tags,
        .reading {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          padding: 18px 10px 24px 0;
        }

        .item-text {
          padding: 1px 2px 0 6px;
        }
        .toc-h1 {
          font-size: 18px;
        }
        .toc-h2 {
          font-size: 16px;
        }
        .toc-h3 {
          font-size: 14px;
        }
        .toc-h4 {
          font-size: 12px;
        }
        .toc-h5 {
          font-size: 10px;
        }
        .toc-h6 {
          font-size: 8px;
        }
      `}</style>
    </Layout>
  );
}

import { getPostDataById, getAllPostIds } from "../../lib/api/articles/index";

export async function getStaticProps({ params }) {
  const postData = await getPostDataById(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
