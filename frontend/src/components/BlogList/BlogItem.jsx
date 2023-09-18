/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Tag from "./Tag";

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
    <Link className="no-underline text-inherit" to={`/blog/${id}`}>
      <div className="flex flex-col">
        <img
          className="w-full h-[250px] object-cover mb-2 rounded-[20px]"
          src={cover}
          alt="cover"
        />
        <Tag label={category} />
        <h3 className=" flex-1 mt-2 mb-4 mx-0">{title}</h3>
        <p className="relative max-h-[50px] overflow-hidden text-[0.8rem] text-[#a9a9a9] pr-[0.6rem] before:absolute before:right-0 before:bottom-0 before:content-['...']">
          {description}
        </p>
        <footer className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img
              src={authorAvatar}
              alt="avatar"
              className="w-10 h-10 object-cover mr-2 rounded-[50%]"
            />
            <div>
              <h6>{authorName}</h6>
              <p className="text-[0.6rem] text-[#a9a9a9] font-semibold">
                {createdAt}
              </p>
            </div>
          </div>
          <span>➝</span>
        </footer>
      </div>
    </Link>
  );
};

export default BlogItem;
