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
    <>
      <section>
        <div className="px-4 mx-auto max-w-screen-md mt-[50px] mb-[70px] h-[100%]">
          <h2 className="heading text-center">Trilhas de Conhecimento</h2>
          <p className="mb-8 lg:mb-16 text-center font-light text__para">
            O lugar ideal que irá te ajudar a alcançar resultados excelentes no
            campo que mais importa para você!
          </p>
        </div>
      </section>
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
    </>
  );
};

export default Blog;
