import Head from "next/head";
import Layout from "../../components/layout/index";
import Link from "next/link";

export default function Post({ categoriess }) {
  return (
    <Layout>
      <div className=" pb-36 w-full px-6 md:w-3/5 mx-auto my-5     ">
        <Head>
          <title>分类</title>
        </Head>
        <div className="flex flex-wrap justify-center">
          {categoriess.map((category, i) => (
            <div
              key={i}
              className=" w-48 m-2 overflow-hidden rounded-lg shadow bg-white "
            >
              <div className=" flex items-center justify-between leading-tight p-2 md:p-4">
                <Link href={`/categories/${category.id}`}>
                  <a className="text-lg " href="#">
                    {category.title}
                  </a>
                </Link>
                <p className=" text-lg text-gray-400">{category.articles}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

import { getCategoriesData } from "../../lib/api/categories/index";

export async function getServerSideProps() {
  const categoriess = await getCategoriesData();
  return {
    props: {
      categoriess,
    },
  };
}
