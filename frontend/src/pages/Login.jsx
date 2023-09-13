import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const handleInputChange = e =>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  return <section className="px-5 lg:px-0">

    <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
      <h3 className="text-headingColor text-[26px] leading-9 font-bold mb-10 text-center">
        Olá! <span className="text-primaryColor">Bem vindo</span> de Volta 🎉
      </h3>

      <form className="py-4 md:py-0">
        <div className="mb-5">
          <input 
          type="email" 
          placeholder="Entre com seu email" 
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
          placeholder="Senha" 
          name="password" 
          value={formData.password} 
          onChange={handleInputChange} 
          className="w-full px-4 py-3 border-b border-solid border-[#103d0561] focus:outline-none
          focus:border-b-primaryColor text-[14px] leading-[2.25] text-headingColor placeholder:text-textColor
          rounded-md cursor-pointer"
          />
        </div>
        

        <div className="mt-7 align-items:center">
          <button type="submit" 
          className="w-full bg-primaryColor text-white text-[14px] leading-[20px] rounded-lg text-center px-4 py-3">
            Login
          </button>
        </div>

        <p className="mt-5 text-textColor text-center">
          Não tem uma conta? 
          <Link to='/register' className="text-primaryColor font-medium ml-1">Registre-se</Link>
        </p>

      </form>
    </div>
  </section>
};

export default Login;
