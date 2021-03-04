import axios from "../../http/axios";
import * as hljs from "highlight.js";
import * as marked from "marked";
import dayjs from "dayjs";

const URL = {
  articleList: "articles",
};

export async function getSortedPostsData(start = 0, limit = 10) {
  const { data } = await axios.get(
    `${URL.articleList}?_start=${start}&_limit=${limit}&_sort=createdAt:DESC`
  );

  const allPostsData = data.map((post) => {
    const { id, title, description, createdAt, categories } = post;
    return {
      id,
      title,
      description: description || "",
      date: dayjs(createdAt).format("YYYY-MM-DD"),
      categories: categories.map((category) => {
        return {
          id: category.id,
          title: category.title,
        };
      }),
    };
  });

  return allPostsData;
}

/**
 * @description 根据id获取文章数据
 * @param {*} id  文章id
 */
export async function getPostDataById(id) {
  const { data } = await axios.get(URL.articleList + "/" + id);

  let renderer = new marked.Renderer();
  const heading = { maxTitle: 0, anchor: 0, toc: [] };
  renderer.heading = function (text, level, raw) {
    if (level < heading.maxTitle) {
      heading.maxTitle = level;
    }
    heading.anchor += 1;

    heading.toc.push({
      id: heading.anchor,
      tag: level,
      text: text,
    });
    return `<h${level} id="toc-${heading.anchor}"><a style="color:black;text-decoration:none;cursor:pointer;" >${text}</a></h${level}>`;
  };

  renderer.link = function (href, title, text) {
    return `<a href=${href} title=${title} target="_blank">${text}</a>`;
  };

  marked.setOptions({
    renderer,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });

  data.content = marked(data.content);

  const { title, content, createdAt, updatedAt, categories } = data;
  return {
    heading,
    id,
    title,
    content,
    categories,
    date: dayjs(createdAt).format("YYYY-MM-DD"),
    update: dayjs(updatedAt).format("YYYY-MM-DD"),
  };
}
/**
 * @description 根据所有文章数据生成文章路径
 */
export async function getAllPostIds() {
  const allPostsData = await getSortedPostsData(0, 1000);

  return allPostsData.map((post) => {
    return {
      params: {
        id: "" + post.id,
      },
    };
  });
}

export async function getPostsCount() {
  const { data } = await axios.get(`${URL.articleList}/count`);
  return data;
}
