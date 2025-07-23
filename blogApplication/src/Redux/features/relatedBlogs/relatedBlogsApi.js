import axiosInstance from "../../../utils/axios";

export const getRelatedBlogs = async ({ tags, id }) => {
  const limit = 2;
  let queryString = "";

if (tags.length > 0) {
  const tagQuery = tags.map((tag) => `tags_like=${tag}`).join("&");
  queryString = `${tagQuery}&id_ne=${id}&_limit=${limit}`;
} else {
  queryString = `id_ne=${id}&_limit=${limit}`;
}

  const response = await axiosInstance.get(`/blogs/?${queryString}`);

  return await response?.data;
};
