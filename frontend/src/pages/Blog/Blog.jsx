import SearchBar from "../../components/SearchBar/";
import BlogList from "../../components/BlogList/BlogList";
import EmptyList from "../../components/BlogList/EmptyList";
import { blogPosts } from "../../assets/data/db.json";
import { useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState(blogPosts);
  const [searchKey, setSearchKey] = useState("");

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogPosts;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogPosts);
    setSearchKey("");
  };

  return (
    <div className="max-w-[1140px] w-[95%] mx-auto my-0 px-0 py-4;">
      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Blog;
