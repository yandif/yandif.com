import Layout from "../components/layout/index.jsx";
import { getSortedPostsData, getPostsCount } from "../lib/api/articles/index";
import Link from "next/link";
import { useState } from "react";
export default function Home({ allPostsData, count }) {
  let index = 0;
  const page = 10;
  const [PostsDatas, setPostsData] = useState(
    allPostsData.slice(index, index + page)
  );
  const [loading, setLoading] = useState(false);

  async function loadMore() {
    setLoading(true);
    index += page;
    setTimeout(() => {
      setPostsData([...PostsDatas, ...allPostsData.slice(index, index + page)]);
      setLoading(false);
    }, 300);
  }
  function More() {
    if (loading) {
      return <p className="text-2xl">loading ...</p>;
    }

    if (PostsDatas.length < count) {
      return (
        <a className=" cursor-pointer text-2xl" onClick={loadMore}>
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
  const allPostsData = await getSortedPostsData(0, 1000);
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
  let time = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
  let tag = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
      <line x1="7" y1="7" x2="7.01" y2="7"></line>
    </svg>
  );
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
          {time}
          <span className="item-text"> {article.date}</span>
        </div>
        {article.categories.length >= 1 ? (
          <div className="categories">
            {tag}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
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
