import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/thunks/userThunks";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userCredentials = {
      email: formData.email,
      password: formData.password,
    };
    dispatch(login(userCredentials));
  };
  return (
    <form className="py-4 md:py-0" onSubmit={handleLoginEvent}>
      <div className="mb-5">
        <input
          type="email"
          placeholder="Digite seu Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-b border-solid border-[#103d0561] focus:outline-none
focus:border-b-primaryColor text-[14px] leading-[2.25] text-headingColor placeholder:text-textColor
rounded-md cursor-pointer"
        />
      </div>

      <div className="mb-5">
        <input
          type="password"
          placeholder="Digite sua Senha"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-b border-solid border-[#103d0561] focus:outline-none
focus:border-b-primaryColor text-[14px] leading-[2.25] text-headingColor placeholder:text-textColor
rounded-md cursor-pointer"
        />
      </div>

      <div className="mt-7 align-items:center">
        <button
          type="submit"
          className="w-full bg-primaryColor text-white text-[14px] leading-[20px] rounded-lg text-center px-4 py-3"
        >
          Login
        </button>
      </div>

      <p className="mt-5 text-textColor text-center">
        Não tem uma conta?
        <Link to="/register" className="text-primaryColor font-medium ml-1">
          Registre-se
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
