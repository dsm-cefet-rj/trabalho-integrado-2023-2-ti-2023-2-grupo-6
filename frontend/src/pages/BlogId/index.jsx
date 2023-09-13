import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../../assets/data/blog";
import Tag from "../../components/BlogList/Tag";
import EmptyList from "../../components/BlogList/EmptyList";
import "./styles.css";
import { Link } from "react-router-dom";

const BlogId = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className="blog-goBack" to="/blog">
        <span> &#8592;</span> <span>Voltar</span>
      </Link>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Publicado em: {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Tag label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <p className="blog-desc">{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default BlogId;
