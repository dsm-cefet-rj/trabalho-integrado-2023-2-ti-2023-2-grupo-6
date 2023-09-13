/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./styles.css";
import Tag from "../Tag";

const BlogItem = ({
  blog: {
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
  },
}) => {
  return (
    <Link className="blogItem-link" to={`/blog/${id}`}>
      <div className="blogItem-wrap">
        <img className="blogItem-cover" src={cover} alt="cover" />
        <Tag label={category} />
        <h3>{title}</h3>
        <p className="blogItem-desc">{description}</p>
        <footer>
          <div className="blogItem-author">
            <img src={authorAvatar} alt="avatar" />
            <div>
              <h6>{authorName}</h6>
              <p>{createdAt}</p>
            </div>
          </div>
          <span>➝</span>
        </footer>
      </div>
    </Link>
  );
};

export default BlogItem;
