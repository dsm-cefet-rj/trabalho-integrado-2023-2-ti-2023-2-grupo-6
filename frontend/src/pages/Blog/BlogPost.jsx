import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogPosts } from "../../server/database/db.json";
import Tag from "../../components/BlogList/Tag";
import EmptyList from "../../components/BlogList/EmptyList";
import { Link } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogPosts.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <>
      <Link
        className="no-underline text-[0.8rem] text-[#a9a9a9] font-medium block ml-2.5 mt-2.5 mb-8"
        to="/blog"
      >
        <span> &#8592;</span> <span>Voltar</span>
      </Link>
      {blog ? (
        <div className="max-w-[700px] mx-auto my-0">
          <header className="text-center">
            <p className="text-[0.8rem] text-[#a9a9a9] font-medium">
              Publicado em: {blog.createdAt}
            </p>
            <h1 className="heading text-[32px]">{blog.title}</h1>
            <div className="flex justify-center">
              <div className="m-4">
                <Tag label={blog.category} />
              </div>
            </div>
          </header>
          <img src={blog.cover} alt="cover" className="w-full" />
          <p className="mt-6 p-4">{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default BlogPost;
