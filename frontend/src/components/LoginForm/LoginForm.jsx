import { useEffect, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";
import Spinner from "../RegisterForm/Spinner/Spinner";
import db from "../../server/database/db.json";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = (event) => {
    event.preventDefault();
    setShowPassword((show) => !show);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(formData.email, formData.password);
    await authenticate(formData.email, formData.password);

    dispatch(login(formData));
  };

  //Autenticação via login
  async function authenticate(email, password) {
    if (!email || !password) {
      console.log("Preencha todos os campos");
      return;
    }
    let achou = false;
    db.users.forEach((e) => {
      if (e.email == email && e.password == password) {
        achou = true;
        localStorage.setItem("id", e.id);
        navigate("/teachers");
      }
    });
    if (achou == false) {
      console.log("Algum dado não está correto, preencha novamente");
    }
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <form className="py-4 md:py-0" onSubmit={onSubmit}>
      <div className="mb-5">
        <input
          type="email"
          placeholder="Digite seu Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-b border-solid border-[#103d0561] focus:outline-none focus:border-b-primaryColor text-[14px] leading-[2.25] text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
          required
          autoComplete="email"
        />
      </div>

      <div className="mb-5 relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Digite sua Senha"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-b border-solid border-[#103d0561] focus:outline-none focus:border-b-primaryColor text-[14px] leading-[2.25] text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
          required
          autoComplete="current-password"
        />

        <div
          className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
          onClick={handleTogglePasswordVisibility}
        >
          {showPassword ? (
            <AiOutlineEye className="text-[#103d0561]" />
          ) : (
            <AiOutlineEyeInvisible className="text-[#103d0561]" />
          )}
        </div>
      </div>

      {/* Submit button */}
      <div className="mt-7 align-items:center">
        <button
          type="submit"
          className="w-full bg-primaryColor text-white text-[14px] leading-[20px] rounded-lg text-center px-4 py-3"
        >
          Entrar
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
