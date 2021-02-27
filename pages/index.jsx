import Layout from "../components/layout/index.jsx";
import { getSortedPostsData, getPostsCount } from "../lib/api/articles/index";
import Link from "next/link";
import { useState } from "react";
export default function Home({ allPostsData, count }) {
  const [PostsDatas, setPostsData] = useState(allPostsData);
  const [loading, setLoading] = useState(false);

  async function loadMore() {
    setLoading(true);
    setPostsData([
      ...PostsDatas,
      ...(await fetch(
        `https://yandif.com/api/articles?_start=${PostsDatas.length}`
      ).then((v) => v.json())),
    ]);
    setLoading(false);
  }
  function More() {
    if (loading) {
      return <p className="text-2xl">loading ...</p>;
    }

    if (PostsDatas.length < count) {
      return (
        <a className=" text-2xl" onClick={loadMore}>
          加载更多
        </a>
      );
    }
  }

  return (
    <div>
      <Layout>
        <article className=" w-full md:w-1/2 mx-auto my-2  px-5   py-10">
          <ArticleList articles={PostsDatas} />
          <div className="text-center">{More()}</div>
        </article>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  const count = await getPostsCount();
  return {
    props: {
      allPostsData,
      count,
    },
  };
}

function ArticleList({ articles }) {
  return (
    <>
      {articles.map((article) => (
        <AritcleCard key={article.id.toString()} article={article} />
      ))}
    </>
  );
}

function AritcleCard({ article }) {
  return (
    <section className="article shadow">
      <div className="title">
        <Link href={`/articles/${article.id}`}>
          <a>{article.title}</a>
        </Link>
      </div>

      <div className="description">{article.description}</div>

      <div className="meta">
        <div className="time">
          <img src="/images/ui/date.svg" alt="" />
          <span className="item-text"> {article.date}</span>
        </div>
        {article.categories.length >= 1 ? (
          <div className="categories">
            <img src="/images/ui/tag.svg" alt="" />
            {article.categories.map((category) => {
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

      <style jsx>{`
        .article {
          background: white;
          padding: 14px 24px;
          margin: 0 0 18px 0;
          border-radius: 10px;
          font-weight: 700;
        }
        .title {
          margin: 24px 0;
          font-size: 24px;
          line-height: 1.5;
        }

        a {
          color: #1e6a9c;
        }

        .description {
          font-size: 18px;
          line-height: 1.95em;
          letter-spacing: 0.6px;
          color: #666;
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
    </section>
  );
}
