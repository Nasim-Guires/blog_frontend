import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getBlogs = async () => {
  const res = await API.get("/blogs");
  return res.data;
};

// export const getBlogById = async (id) => {
//   const res = await API.get(`/blogs/${id}`);
//   return res.data;
// };

export const createBlog = async (blog) => {
  const res = await API.post("/blogs", blog);
  return res.data;
};

export const getBlogBySlug = async (categorySlug, slug) => {
  const res = await API.get(`/blogs/${categorySlug}/${slug}`);
  return res.data;
};

export const getCategories = async () => {
  const res = await API.get("/categories");
  return res.data.data;
};
