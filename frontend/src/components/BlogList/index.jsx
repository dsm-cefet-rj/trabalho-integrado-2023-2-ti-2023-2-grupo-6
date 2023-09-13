/* eslint-disable react/prop-types */
import BlogItem from "./BlogItem";
import "./styles.css";

const BlogList = ({ blogs }) => (
  <div className="blogList-wrap">
    {blogs.map((blog) => (
      <BlogItem blog={blog} key={blog.id} />
    ))}
  </div>
);

export default BlogList;
