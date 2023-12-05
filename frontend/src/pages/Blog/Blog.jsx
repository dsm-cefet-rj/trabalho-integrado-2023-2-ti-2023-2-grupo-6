import SearchBar from "../../components/SearchBar/";
import BlogList from "../../components/BlogList/BlogList";
import EmptyList from "../../components/BlogList/EmptyList";
import { blogPosts } from "../../server/database/db.json";
import { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const localStorageRole = localStorage.getItem("role");
  const isTeacher = localStorageRole == "TEACHER";

  const [blogs, setBlogs] = useState(blogPosts);
  const [searchKey, setSearchKey] = useState("");

  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allBlogs = blogPosts;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogPosts);
    setSearchKey("");
  };

  return (
    <>
      <section>
        <div className="px-4 mx-auto max-w-screen-md mt-[50px] h-[100%]">
          <h2 className="heading text-center">
            [Em construção] Trilhas de Conhecimento
          </h2>
          <p className="text-center font-light text__para">
            O lugar ideal que irá te ajudar a alcançar resultados excelentes no
            campo que mais importa para você!
          </p>
        </div>
      </section>

      <div className="max-w-[1140px] w-[95%] mx-auto my-0 px-0 py-4">
        <div className="flex flex-col justify-center">
          {!isTeacher ? (
            <div className="flex justify-center">
              <div className="shadow-xl mt-[10px] p-4 max-w-[300px] text-center text-primaryColor rounded-lg font-bold">
                <span className="text-orangeColor">Entre</span> ou{" "}
                <span className="text-orangeColor">Registre-se</span> como{" "}
                <span className="text-orangeColor">Professor</span> para
                adicionar um Post!
              </div>
            </div>
          ) : (
            <Link to="/blog/myBlog" className="flex justify-center">
              <button className="flex justify-center btn w-[250px] h-[50px] rounded-[5px] border-[none] outline-none">
                Meus Posts
              </button>
            </Link>
          )}

          {/* Search Bar */}
          <SearchBar
            value={searchKey}
            clearSearch={handleClearSearch}
            formSubmit={handleSearchBar}
            handleSearchKey={(e) => setSearchKey(e.target.value)}
          />
        </div>

        {/* Blog List & Empty View */}
        {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
      </div>
    </>
  );
};

export default Blog;
