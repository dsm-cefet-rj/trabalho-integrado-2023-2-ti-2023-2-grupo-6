import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createUser } from "../../../store/thunks/userThunks";
import {
  selectUserThunksError,
  selectUserThunksStatus,
  setStatus,
} from "../../../store/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import avatar from "../../../assets/images/signup/avatar.jpg";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profilePicture: "",
    gender: "Masculino",
    role: "STUDENT",
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(selectUserThunksStatus);
  const error = useSelector(selectUserThunksError);

  useEffect(() => {
    if (status === "saved") {
      toast.success("Usuário foi cadastrado com sucesso");
      navigate("/login");
      dispatch(setStatus("loaded"));
    } else if (error) {
      console.error(error);
      toast.error("Ocorreu um erro");
      dispatch(setStatus("loaded"));
    }
  }, [status, error, navigate, dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profilePicture: file });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Campo obrigatório";
    }

    if (!formData.email) {
      newErrors.email = "Campo obrigatório";
    }

    if (!formData.password) {
      newErrors.password = "Campo obrigatório";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission
      dispatch(createUser(formData));
    }
  };

  return (
    <>
      <h3 className="text-headingColor text-[26px] leading-9 font-bold mb-10 text-center">
        Bem-Vindo, <span className="text-primaryColor">Aluno!</span>
      </h3>
      <form onSubmit={submitHandler}>
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
          />
          {errors.name && (
            <div className="text-red-500 text-[14px]">{errors.name}</div>
          )}
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
          />
          {errors.email && (
            <div className="text-red-500 text-[14px]">{errors.email}</div>
          )}
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
          />
          {errors.password && (
            <div className="text-red-500 text-[14px]">{errors.password}</div>
          )}
          <div
            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
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

        {/* Photo upload */}
        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <figure
              className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor
            flex items-center justify-center"
            >
              <img
                src={
                  formData.profilePicture
                    ? URL.createObjectURL(formData.profilePicture)
                    : avatar
                }
                alt=""
                className="w-full rounded-full"
              />
            </figure>
            <div className="relative w-[160px] h-[50px]">
              <input
                type="file"
                name="photo"
                id="customFile"
                onChange={handleFileChange}
                accept=".jpg, .png"
                className="absolute top-0 left-0 opacity-0 h-full w-full cursor-pointer"
              />
              <label
                htmlFor="customFile"
                className="absolute top-0 left-0 flex h-full w-[100px]
                items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden
                bg-primaryColor text-white font-semibold rounded-lg truncate cursor-pointer"
              >
                Enviar foto
              </label>
            </div>
          </div>

          <div>
            <label className="text-headingColor font-bold text-[16px] leading-7">
              Gênero:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="text-headingColor font-semibold text-[15px] leading-7 px-4
                  py-3 focus:outline-none cursor-pointer ml-2"
              >
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Prefiro Não dizer</option>
              </select>
            </label>
          </div>
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

export default StudentForm;
