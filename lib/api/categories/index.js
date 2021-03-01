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
    const { id, title, articles } = post;
    return {
      id,
      title,
      articles: articles.length,
    };
  });

  return allCategoriesData;
}

export async function getCategoryDataById(id) {
  const { data } = await axios.get(URL.list + "/" + id);
  const { title, articles } = data;
  return {
    id,
    title,
    articles: articles.map((article) => {
      const { id, title, createdAt } = article;
      return {
        id,
        title,
        date: dayjs(createdAt).format("YYYY-MM-DD"),
      };
    }),
  };
}

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
