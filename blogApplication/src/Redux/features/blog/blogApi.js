import axios from "../../../utils/axios";

export const getBlog = async (id) => {
  const response = await axios.get(`/blogs/${id}`);
  return await response?.data;
};

export const getBlogLikes = async (blog) => {
  const response = await axios.patch(`/blogs/${blog.id}`, {
    likes: blog?.likes + 1,
  });
  return await response?.data;
};

export const getBlogIsSavedToggled = async (blog) => {
  const response = await axios.patch(`/blogs/${blog.id}`, {
    isSaved: !blog?.isSaved,
  });
  return await response?.data;
};
