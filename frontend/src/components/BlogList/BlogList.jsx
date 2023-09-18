/* eslint-disable react/prop-types */
import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => (
  <div className="grid lg:grid-cols-[repeat(3,1fr)] gap-12 md:grid-cols-[repeat(2,1fr)] grid-cols-[repeat(1,1fr)]">
    {blogs.map((blog) => (
      <BlogItem blog={blog} key={blog.id} />
    ))}
  </div>
);

export default BlogList;
