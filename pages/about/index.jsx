import Layout from "../../components/layout/index";
import Head from "next/head";
import * as marked from "marked";

export default function Category() {
  let about = `
  ### 个人介绍

  我是一名在校生，同时也是一名热爱前端开发的 "程序员"，非常欢迎你来访问我的博客。
  
  <br/>

  ### 博客介绍
  
   在学习前端时在一些大佬的博客里学到了很多，于是也想拥有一个自己的博客，奈何技术不够一直拖着，经过漫长的学习终于开发了这个博客网站。
  
  下面是使用的一些技术：
  
  * 前端：[React ](https://zh-hans.reactjs.org/)+ [Tailwind CSS](https://tailwindcss.com/)，使用  [Next.js](https://www.nextjs.cn/) 进行服务端渲染。
  
  * 后端：[strapi](https://strapi.io/)
  
  * 存储：使用 [mongoDB](https://www.mongodb.com/) 数据库存储
  
  * 部署：前端使用 [Vercel](https://vercel.com/) 进行持续集成，后端部署在 [阿里云](https://www.aliyun.com/1111/new?userCode=geot2ydb)
  
  \n\n
  
  <br/>

  ### 联系方式
  
 *  E-Mail：yandif@foxmail.com
 *  GitHub：https://github.com/yandif

 \n\n


  ### 免责声明

  本博客主要记录学习和生活，如果内容有侵犯您的个人版权，决非恶意，请您通过邮箱联系我及时删除。





  `;
  about = marked(about);
  return (
    <Layout>
      <Head>
        <title>关于</title>
      </Head>
      <div className=" p-10  w-full md:w-3/5 mx-auto my-5  bg-white  shadow ">
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: about }}
        />
      </div>
    </Layout>
  );
}
