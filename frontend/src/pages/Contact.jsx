import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendContactMessage } from "../features/contact/contactSlice";
import { toast } from "react-toastify";

const Contact = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      email,
      content,
      message,
    };

    try {
      await dispatch(sendContactMessage(contactData));
      setEmail("");
      setContent("");
      setMessage("");
    } catch (error) {
      toast.error("Erro ao enviar mensagem de contato:", error);
    }
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md mt-[50px] mb-[70px] h-[100%]">
        <h2 className="heading text-center">Entre em contato conosco!</h2>
        <p className="mb-8 lg:mb-16 text-center font-light text__para">
          Está com dificuldade em algum assunto e quer sanar todas as suas
          dúvidas?
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Digite seu Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="exemplo@email.com"
              className="form-input mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div title="Mínimo 10 caracteres">
            <label htmlFor="assunto" className="form__label">
              Digite o Assunto
            </label>
            <input
              type="text"
              id="assunto"
              placeholder="Qual assunto você deseja escrever? Escreva no mínimo 10 caracteres."
              className="form-input mt-1"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="sm:col-span-2" title="Mínimo 10 caracteres">
            <label htmlFor="mensagem" className="form__label">
              Digite sua Mensagem
            </label>
            <textarea
              rows="6"
              type="text"
              id="mensagem"
              placeholder="Como podemos ajudar? Escreva no mínimo 10 caracteres."
              className="form-input mt-1"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
