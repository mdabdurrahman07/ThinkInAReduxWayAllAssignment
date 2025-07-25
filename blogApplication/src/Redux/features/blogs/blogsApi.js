import axios from "../../../utils/axios";

export const getBlogs = async ({ filter, sort }) => {
  let query = "";
  if (filter === "saved") {
    query += `?isSaved=true`;
  }
  if (sort === "newest") {
    query += `${query ? "&" : "?"}_sort=createdAt&_order=desc`;
  } else if (sort === "most_liked") {
    query += `${query ? "&" : "?"}_sort=likes&_order=desc`;
  }
  const response = await axios.get(`/blogs/${query}`);
  return await response?.data;
};
