import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBlogPosts,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
} from "../../../features/blog/blogSlice";
import { formatarData } from "../../../common/functions";

const MyBlog = () => {
  const dispatch = useDispatch();
  const blogPosts = useSelector((state) => Object.values(state.blog.entities));
  const [newPost, setNewPost] = useState({
    createdAt: "",
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
    // Obtém a data atual
    const currentDate = formatarData(new Date());
    const newPostData = {
      ...newPost,
      createdAt: currentDate,
    };

    dispatch(createBlogPost(newPostData)).then(() => {
      dispatch(getBlogPosts()); // Atualiza a lista após a criação
    });
    setNewPost({
      cover: "",
      title: "",
      category: "",
      description: "",
    });
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
      <h1 className="heading text-[30px] text-center">Postagens do Blog</h1>
      <p className="mb-8 lg:mb-8 text-center font-light text__para">
        Adicione abaixo uma nova Postagem!
      </p>
      <div className="mb-4">
        <div>
          <label htmlFor="cover" className="form__label">
            Url da imagem:
          </label>
          <input
            type="text"
            placeholder="Digite a URL da sua imagem"
            name="cover"
            value={newPost.cover}
            onChange={(e) => setNewPost({ ...newPost, cover: e.target.value })}
            className="form-input mt-1"
            required
          />
        </div>

        <div className="my-3">
          <label htmlFor="title" className="form__label">
            Titulo do Post:
          </label>
          <input
            name="title"
            type="text"
            placeholder="Digite o titulo do seu Post"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            className="form-input mt-1"
            maxLength={100}
            title="Digite até 100 caracteres"
            required
          />
        </div>

        <div className="my-3">
          <label htmlFor="category" className="form__label">
            Categoria do Post:
          </label>
          <input
            name="category"
            type="text"
            placeholder="Digite em qual categoria encontra-se seu Post"
            value={newPost.category}
            onChange={(e) =>
              setNewPost({ ...newPost, category: e.target.value })
            }
            className="form-input mt-1"
            maxLength={50}
            title="Digite até 50 caracteres"
            required
          />
        </div>
        <div className="my-3">
          <label htmlFor="description" className="form__label">
            Descrição do Post:
          </label>
          <textarea
            name="description"
            placeholder="Escreva mais sobre o que você tem a ensinar"
            value={newPost.description}
            onChange={(e) =>
              setNewPost({ ...newPost, description: e.target.value })
            }
            className="form-input mt-1"
            maxLength={1500}
            title="Digite até 1500 caracteres"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleCreatePost}
            className="btn text-white px-4 py-2 mt-4 rounded hover:bg-green-900"
          >
            Criar novo Post
          </button>
        </div>
      </div>
      <div>
        <div className="mt-[30px] border-b border-solid border-green-900 mb-5">
          <h3
            className={
              "py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold"
            }
          >
            Lista de Postagens
          </h3>
        </div>
        <ul>
          {blogPosts.map((post) => (
            <li key={post.id} className="mb-4">
              <img
                src={post.cover}
                alt="Cover"
                className="w-32 h-32 object-cover rounded"
              />
              <strong className="text-lg font-semibold block mt-2">
                <span className="text-primaryColor">Titulo:</span> {post.title}
              </strong>
              <div className=" bg-gradient-to-r from-[#f4a442] to-[#cc750b] text-[0.7rem] text-white w-fit capitalize px-2 py-[0.3rem] rounded-[5px] my-2">
                {post.category}
              </div>

              <div>
                <strong className="text-primaryColor">Descrição:</strong>
                <p className="mt-2">{post.description}</p>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="btn text-primaryColor bg-white border border-primaryColor px-2 py-1 mt-2  rounded hover:bg-primaryColor hover:text-white"
                >
                  Deletar Postagem
                </button>
                <button
                  onClick={() => setEditPost(post)}
                  className="btn text-white px-2 py-1 mt-2 ml-2 rounded hover:bg-green-900"
                >
                  Editar Postagem
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {editPost && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-3">Editando Postagem</h2>
          <div>
            <label htmlFor="cover" className="form__label">
              Url da imagem:
            </label>
            <input
              type="text"
              placeholder="Digite a URL da sua imagem"
              name="cover"
              value={editPost.cover}
              onChange={(e) =>
                setEditPost({ ...editPost, cover: e.target.value })
              }
              className="form-input mt-1"
            />
          </div>

          <div className="my-3">
            <label htmlFor="title" className="form__label">
              Titulo do Post:
            </label>
            <input
              name="title"
              type="text"
              placeholder="Digite o titulo do seu Post"
              value={editPost.title}
              onChange={(e) =>
                setEditPost({ ...editPost, title: e.target.value })
              }
              className="form-input mt-1"
              maxLength={100}
              title="Digite até 100 caracteres"
            />
          </div>

          <div className="my-3">
            <label htmlFor="category" className="form__label">
              Categoria do Post:
            </label>
            <input
              name="category"
              type="text"
              placeholder="Digite em qual categoria encontra-se seu Post"
              value={editPost.category}
              onChange={(e) =>
                setEditPost({ ...editPost, category: e.target.value })
              }
              className="form-input mt-1"
              maxLength={50}
              title="Digite até 50 caracteres"
            />
          </div>

          <div className="my-3">
            <label htmlFor="description" className="form__label">
              Descrição do Post:
            </label>
            <textarea
              name="description"
              placeholder="Escreva mais sobre o que você tem a ensinar"
              value={editPost.description}
              onChange={(e) =>
                setEditPost({ ...editPost, description: e.target.value })
              }
              className="form-input mt-1"
              maxLength={1500}
              title="Digite até 1500 caracteres"
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleUpdatePost}
              className="btn text-white px-2 py-1 mt-2 ml-2 rounded hover:bg-green-900"
            >
              Salvar Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBlog;
