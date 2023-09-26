// BlogList.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBlogPosts,
  selectAllBlogPosts,
} from "../../features/blog/blogSlice";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const dispatch = useDispatch();
  const blogPosts = useSelector(selectAllBlogPosts);

  useEffect(() => {
    // Fetch blog posts when the component mounts
    dispatch(getBlogPosts());
  }, [dispatch]);

  return (
    <div className="grid lg:grid-cols-[repeat(3,1fr)] gap-12 md:grid-cols-[repeat(2,1fr)] grid-cols-[repeat(1,1fr)]">
      {blogPosts.map((blogPost) => (
        <BlogItem blog={blogPost} key={blogPost.id} />
      ))}
    </div>
  );
};

export default BlogList;
