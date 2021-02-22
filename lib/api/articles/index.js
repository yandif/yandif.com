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
  articleList: "articles",
};

/**
 * @description 获取所有文章数据
 */
export async function getSortedPostsData() {
  const { data } = await axios.get(URL.articleList);

  marked.setOptions({
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });
  const allPostsData = data.map((post) => {
    post.content = marked(post.content);
    return post;
  });

  return allPostsData;
}

/**
 * @description 根据id获取文章数据
 * @param {*} id  文章id
 */
export async function getPostsDataById(id) {
  const { data } = await axios.get(URL.articleList + "/" + id);
  data.content = marked(data.content);
  const { title, content, created_at, updated_at, cover } = data;
  return {
    id,
    title,
    content,
    date: dayjs(created_at).format("YYYY-MM-DD HH:mm"),
    update: dayjs(updated_at).format("YYYY-MM-DD HH:mm"),
    cover: cover.url,
  };
}
/**
 * @description 根据所有文章数据生成文章路径
 */
export async function getAllPostIds() {
  const allPostsData = await getSortedPostsData();

  return allPostsData.map((post) => {
    return {
      params: {
        id: "" + post.id,
      },
    };
  });
}
