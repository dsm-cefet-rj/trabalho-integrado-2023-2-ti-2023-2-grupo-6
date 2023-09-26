// blogService.js
import axios from "axios";

const API_URL = "http://localhost:3000";

const getBlogPosts = async () => {
  return await axios.get(API_URL + "/blogPosts");
};

const getTBlogPostsDetails = async (id) => {
  return await axios.get(API_URL + `/blogPosts/${id}?_expand=teacher`);
};

export const createBlogPost = async (blogPost) => {
  return await axios.post(API_URL + "/blogPosts", blogPost);
};

export const updateBlogPost = async (blogPost) => {
  const { id, title, category, description } = blogPost;

  if (!id) {
    throw new Error("ID da postagem não especificado.");
  }

  const updatedBlogPost = {
    title,
    category,
    description,
  };

  return await axios.patch(API_URL + `/blogPosts/${id}`, updatedBlogPost);
};

export const deleteBlogPost = async (id) => {
  return await axios.delete(API_URL + `/blogPosts/${id}`);
};

const blogService = {
  getBlogPosts,
  getTBlogPostsDetails,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
};

export default blogService;
