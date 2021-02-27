import Head from "next/head";
import Layout from "../../components/layout/index";
import Link from "next/link";
import dayjs from "dayjs";
export default function Post({ postData }) {
  const articles = postData;

  articles.sort((a, b) => {
    if (dayjs(a.date) > dayjs(b.date)) {
      return -1;
    }
    if (dayjs(a.date) < dayjs(b.date)) {
      return 1;
    }
    return 0;
  });

  const dateMap = [];
  articles.map((article) => {
    let { date, ...oths } = article;
    date = dayjs(date, "YYYY-MM-DD");
    let year = date.year();

    for (let i = 0; i < dateMap.length; i++) {
      let item = dateMap[i];
      if (item.year == year) {
        item.articles.push({
          date: date.format("MM-DD"),
          ...oths,
        });
        return article;
      }
    }

    dateMap.push({
      year,
      articles: [
        {
          date: date.format("MM-DD"),
          ...oths,
        },
      ],
    });
    return article;
  });

  return (
    <>
      <Layout>
        <div className=" pb-36 w-full md:w-3/5 mx-auto my-5  px-5 bg-white  shadow py-10">
          <Head>
            <title>归档</title>
          </Head>
          <article>
            <h1 className="w-full text-center text-4xl font-bold">归档</h1>
            <div className="w-full text-center p-5 text-lg text-gray-400">
              共{articles.length}篇文章
            </div>
            {dateMap.map((item) => {
              return (
                <div key={item.year}>
                  <div className=" text-xl font-bold  md:ml-32 my-6">
                    {item.year}
                  </div>
                  {item.articles.map((article) => {
                    return (
                      <div
                        key={article.id}
                        className="flex md:mx-44 ml-1  pb-5"
                      >
                        <span className=" w-2/12 h-7 break-words block text-lg text-gray-400 mr-5">
                          {article.date}
                        </span>
                        <Link href={`/articles/${article.id}`}>
                          <a className="w-10/12  text-xl font-bold flex-grow ">
                            {article.title}
                          </a>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </article>
        </div>
      </Layout>
    </>
  );
}

import { getSortedPostsData } from "../../lib/api/articles/index";

export async function getStaticProps() {
  const postData = await getSortedPostsData(0, 1000);
  return {
    props: {
      postData,
    },
  };
}
