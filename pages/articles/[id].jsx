import Head from "next/head";
import Layout from "../../components/layout/index";

export default function Post({ postData }) {
  return (
    <>
      <Layout>
        <div className=" w-full md:w-3/5 mx-auto my-5  px-5 bg-white shadow py-10">
          <Head>
            <title>{postData.title}</title>
          </Head>
          <article>
            <h1>{postData.title}</h1>
            <div>{postData.date}</div>
            <div
              className="markdown-body"
              dangerouslySetInnerHTML={{ __html: postData.content }}
            />
          </article>
        </div>
      </Layout>
    </>
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
