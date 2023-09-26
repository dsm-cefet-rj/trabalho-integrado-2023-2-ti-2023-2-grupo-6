import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBlogPosts,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
} from "../../../features/blog/blogSlice";

const MyBlog = () => {
  const dispatch = useDispatch();
  const blogPosts = useSelector((state) => Object.values(state.blog.entities));
  const [newPost, setNewPost] = useState({
    cover: "",
    title: "",
    category: "",
    description: "",
  });
  const [editPost, setEditPost] = useState(null);

  useEffect(() => {
    dispatch(getBlogPosts());
  }, [dispatch]);

  const handleCreatePost = () => {
    dispatch(createBlogPost(newPost)).then(() => {
      dispatch(getBlogPosts()); // Atualiza a lista após a criação
    });
    setNewPost({ cover: "", title: "", category: "", description: "" });
  };

  const handleUpdatePost = () => {
    if (editPost) {
      dispatch(updateBlogPost(editPost)).then(() => {
        dispatch(getBlogPosts()); // Atualiza a lista após a atualização
      });
      setEditPost(null);
    }
  };

  const handleDeletePost = (id) => {
    dispatch(deleteBlogPost(id)).then(() => {
      dispatch(getBlogPosts()); // Atualiza a lista após a exclusão
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Postagens do Blog</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Crie uma Nova Postagem</h2>
        <input
          type="text"
          placeholder="Cover URL"
          value={newPost.cover}
          onChange={(e) => setNewPost({ ...newPost, cover: e.target.value })}
          className="w-full p-2 rounded border mb-2 "
        />
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          className="w-full p-2 rounded border break-words"
          maxLength={100}
        />
        <input
          type="text"
          placeholder="Category"
          value={newPost.category}
          onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
          className="w-full p-2 mt-2 rounded border break-words"
          maxLength={50}
        />
        <textarea
          placeholder="Description"
          value={newPost.description}
          onChange={(e) =>
            setNewPost({ ...newPost, description: e.target.value })
          }
          className="w-full p-2 mt-2 rounded border break-words"
          maxLength={1500}
        />
        <button
          onClick={handleCreatePost}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
        >
          Create
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Blog Posts List</h2>
        <ul>
          {blogPosts.map((post) => (
            <li key={post.id} className="mb-4">
              <img
                src={post.cover}
                alt="Cover"
                className="w-32 h-32 object-cover rounded"
              />
              <strong className="text-lg font-semibold block mt-2">
                {post.title} ({post.category})
              </strong>
              <p className="mt-2">{post.description}</p>
              <button
                onClick={() => setEditPost(post)}
                className="bg-blue-500 text-white px-2 py-1 mt-2 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeletePost(post.id)}
                className="bg-red-500 text-white px-2 py-1 mt-2 ml-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      {editPost && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Edit Post</h2>
          <input
            type="text"
            placeholder="Cover URL"
            value={editPost.cover}
            onChange={(e) =>
              setEditPost({ ...editPost, cover: e.target.value })
            }
            className="w-full p-2 rounded border mb-2"
          />
          <input
            type="text"
            placeholder="Title"
            value={editPost.title}
            onChange={(e) =>
              setEditPost({ ...editPost, title: e.target.value })
            }
            className="w-full p-2 rounded border"
          />
          <input
            type="text"
            placeholder="Category"
            value={editPost.category}
            onChange={(e) =>
              setEditPost({ ...editPost, category: e.target.value })
            }
            className="w-full p-2 mt-2 rounded border"
          />
          <textarea
            placeholder="Description"
            value={editPost.description}
            onChange={(e) =>
              setEditPost({ ...editPost, description: e.target.value })
            }
            className="w-full p-2 mt-2 rounded border"
          />
          <button
            onClick={handleUpdatePost}
            className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default MyBlog;
