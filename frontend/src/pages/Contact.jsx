const Contact = () => {
  return <section>
    <div className="px-4 mx-auto max-w-screen-md mt-[50px] mb-[70px] h-[100%]">
      <h2 className="heading text-center">Entre em contato conosco!</h2>
        <p className="mb-8 lg:mb-16 text-center font-light text__para">Tá com dificuldade em algum assunto e quer sanar
        todas as suas dúvidas?
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="" className="form__label">
            Seu Email
            </label>
            <input 
            type="email" 
            id="email"
            placeholder="exemplo@email.com"
            className="form-input mt-1"
            />
          </div>
          <div>
            <label htmlFor="assunto" className="form__label">
              Assunto
            </label>
            <input 
            type="text" 
            id="assunto"
            placeholder="Qual assunto você deseja escrever?"
            className="form-input mt-1"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Sua mensagem
            </label>
            <textarea 
            rows="6"
            type="text" 
            id="assunto"
            placeholder="Como podemos ajudar?"
            className="form-input mt-1"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">Enviar</button>
        </form>
    </div>
  </section>;
};

export default Contact;
