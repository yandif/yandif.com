import Head from "next/head";
import Layout from "../../components/layout/index";
import Link from "next/link";
export default function Post({ postData }) {
  return (
    <Layout>
      <div className=" w-full md:w-3/5 mx-auto my-5  px-5   py-10">
        <Head>
          <title>文章 | {postData.title}</title>
        </Head>
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
