import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../features/contact/contactSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md mt-[50px] mb-[70px] h-[100%]">
        <h2 className="heading text-center">Lista de Contatos!</h2>
        <p className="mb-8 lg:mb-16 text-center font-light text__para">
          Veja todos os contatos feitos para nossa equipe! 😛
        </p>

        {contacts ? (
          <ul className="pt-4 md:p-5 ">
            {contacts.map((contact) => (
              <li
                key={contact.id}
                className="flex flex-col sm:flex-row sm:justify-between md:gap-5 mb-[30px] shadow-lg rounded-[5px] p-4 bg-[#cff0b4] "
              >
                <div className="flex flex-col gap-2 sm:gap-4 ">
                  <span className="text-irisBlueColor text-[15px] leading-6 font-semibold break-words">
                    Email: {contact.email}
                  </span>
                  <p className="text-[16px] leading-6 font-medium text-textColor break-words">
                    <strong>Assunto:</strong> {contact.content}
                  </p>
                </div>
                <p className="text-[14px] leading-5 font-medium text-textColor break-words">
                  <strong>Mensagem:</strong> {contact.message}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Carregando contatos...</p>
        )}
      </div>
    </section>
  );
};

export default ContactList;
