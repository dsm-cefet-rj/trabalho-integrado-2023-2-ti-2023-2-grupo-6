import { useEffect, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { register, reset } from "../../../features/auth/authSlice";
import Spinner from "../Spinner/Spinner";

const TeacherForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profilePicture: "",
    gender: "",
    role: "TEACHER",
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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/login");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(register(formData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <h3 className="text-headingColor text-[26px] leading-9 font-bold mb-10 text-center">
        Bem-Vindo, <span className="text-primaryColor">Professor!</span>
      </h3>
      <form onSubmit={onSubmit}>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Digite seu Nome Completo"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b border-solid border-[#103d0561] focus:outline-none
  focus:border-b-primaryColor text-[14px] leading-[2.25] text-headingColor placeholder:text-textColor
  rounded-md cursor-pointer"
            required
            autoComplete="name"
          />
        </div>

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
            className="w-full px-4 py-3 border-b border-solid border-[#103d0561] focus:outline-none
      focus:border-b-primaryColor text-[14px] leading-[2.25] text-headingColor
      placeholder:text-textColor rounded-md cursor-pointer"
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

        <div className="mb-5">
          <input
            type="text"
            placeholder="URL da Imagem de Perfil"
            name="profilePicture"
            value={formData.profilePicture}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b border-solid border-[#103d0561] focus:outline-none
            focus:border-b-primaryColor text-[14px] leading-[2.25] text-headingColor
            placeholder:text-textColor rounded-md cursor-pointer"
            required
          />
        </div>

        <div className="mb-5">
          <label className="text-headingColor font-bold text-[16px] leading-7">
            Gênero:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="text-headingColor font-semibold text-[15px] leading-7 px-4
        py-3 focus:outline-none cursor-pointer ml-2"
              required
            >
              <option value="" disabled>
                Selecione um motivo
              </option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Prefiro Não dizer</option>
            </select>
          </label>
        </div>

        {/* Submit button */}
        <div className="mt-7 align-items:center">
          <button
            type="submit"
            className="w-full bg-primaryColor text-white text-[14px] leading-[20px] rounded-lg text-center px-4 py-3"
          >
            Criar Conta
          </button>
        </div>

        <p className="mt-5 text-textColor text-center">
          Já tem uma conta?
          <Link to="/login" className="text-primaryColor font-medium ml-1">
            Login
          </Link>
        </p>
      </form>
    </>
  );
};

export default TeacherForm;
