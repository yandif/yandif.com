import axios from "../../http/axios";
import * as hljs from "highlight.js";
import * as marked from "marked";
import dayjs from "dayjs";

marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
});

const URL = {
  list: "categories",
};

export async function getCategoriesData() {
  const { data } = await axios.get(URL.list);

  const allCategoriesData = data.map((post) => {
    const { id, title, description, articles } = post;
    return {
      id,
      title,
      description,
      articles: articles.length,
    };
  });

  return allCategoriesData;
}

export async function getCategoryDataById(id) {
  const { data } = await axios.get(URL.list + "/" + id);
  const { title, description, articles } = data;
  return {
    id,
    title,
    description,
    articles: articles.map((article) => {
      const { id, title, created_at } = article;
      return {
        id,
        title,
        date: dayjs(created_at).format("YYYY-MM-DD"),
      };
    }),
  };
}
/**
 * @description 根据所有文章数据生成文章路径
 */
export async function getAllPostIds() {
  const allPostsData = await getCategoriesData();

  return allPostsData.map((post) => {
    return {
      params: {
        id: "" + post.id,
      },
    };
  });
}
