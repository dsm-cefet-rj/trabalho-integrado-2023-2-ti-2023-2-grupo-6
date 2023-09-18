//import React from "react";
import { Link } from "react-router-dom";
import bgRegister from "../assets/images/signup/bgRegister.svg";
import avatar from "../assets/images/signup/avatar.jpg";
import { useState } from "react";
const Signup = () => {
  //const [selectedFile, setSelectedFile] = useState(null);
  //const [previewUrl, setPreviewUrl] = useState('');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
    genero: "",
    role: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <section className="px-5 py-3 xl:px-0">
      <div className="max-w-[1150px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block rounded-lg mr-[80px] mt-[80px]">
            <figure className="rounded-l-lg">
              <img src={bgRegister} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          <div className="rouded-l-lg lg:l-16 py-10">
            <h3 className="text-headingColor text-[26px] leading-9 font-bold mb-10 text-center">
              Crie sua <span className="text-primaryColor">Conta!</span>
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

              <div className="mb-5 flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-headingColor font-bold text-[16px] leading-7"
                >
                  Você é um:
                  <select
                    name="role"
                    value={formData.role}
                    className="text-headingColor font-semibold text-[15px] leading-7 px-4
            py-3 focus:outline-none cursor-pointer"
                  >
                    <option value="aluno">Aluno</option>
                    <option value="professor">Professor</option>
                  </select>
                </label>

                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Gênero:
                  <select
                    name="genero"
                    value={formData.genero}
                    className="text-headingColor font-semibold text-[15px] leading-7 px-4
            py-3 focus:outline-none cursor-pointer"
                  >
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Prefiro não dizer</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure
                  className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor
          flex items-center justify-center"
                >
                  <img src={avatar} alt="" className="w-full rounded-full" />
                </figure>

                <div className="relative w-[160px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileChange}
                    accept=".jpg, .png"
                    className=" absolute top-0 left-0 opacity-0 h-full w-full cursor-pointer"
                  />

                  <label
                    htmlFor="customFile"
                    className=" absolute top-0 left-0 flex h-full w-[100px]
            items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden
            bg-primaryColor text-white font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Enviar foto
                  </label>
                </div>
              </div>
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
                <Link
                  to="/login"
                  className="text-primaryColor font-medium ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
