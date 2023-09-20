import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/thunks/userThunks";
import { toast } from "react-toastify";
import {
  selectUserThunksError,
  selectUserThunksStatus,
} from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const status = useSelector(selectUserThunksStatus);
  const error = useSelector(selectUserThunksError);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

  useEffect(() => {
    if (status === "success") {
      toast.success("Login realizado com sucesso");
      navigate("/");
    } else if (error) {
      console.error(error);
      toast.error("Ocorreu um erro");
    }
  }, [status, error, navigate]);

  return (
    <form className="py-4 md:py-0" onSubmit={handleLoginEvent}>
      <div className="mb-5">
        <input
          type="email"
          placeholder="Digite seu Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border-b border-solid border-[#103d0561] focus:outline-none
focus:border-b-primaryColor text-[14px] leading-[2.25] text-headingColor placeholder:text-textColor
rounded-md cursor-pointer"
        />
      </div>

      <div className="mb-5 relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Digite sua Senha"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-b border-solid border-[#103d0561] focus:outline-none
    focus:border-b-primaryColor text-[14px] leading-[2.25] text-headingColor placeholder:text-textColor
    rounded-md cursor-pointer"
        />
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
        >
          {showPassword ? (
            <AiOutlineEye className="text-[#103d0561]" />
          ) : (
            <AiOutlineEyeInvisible className="text-[#103d0561]" />
          )}
        </div>
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
