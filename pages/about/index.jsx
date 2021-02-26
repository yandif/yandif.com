import Layout from "../../components/layout/index";
import Head from "next/head";
export default function Category() {
  return (
    <Layout>
      <Head>
        <title>关于</title>
      </Head>
      <div className=" pb-36  w-full md:w-3/5 mx-auto my-5  px-5 bg-white  shadow py-10">
        <div className="w-full text-center text-7xl font-blod h-96 pt-48">
          Yo!
        </div>
      </div>
    </Layout>
  );
}
