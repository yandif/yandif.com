import { getSortedPostsData } from "../../../lib/api/articles/index";
export default async (req, res) => {
  let { _start } = req.query;
  const data = await getSortedPostsData(_start);

  res.status(200).json(data);
};
