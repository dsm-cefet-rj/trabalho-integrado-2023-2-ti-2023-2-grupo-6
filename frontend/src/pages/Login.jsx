import bgRegister from "../assets/images/login/bg.svg";

import LoginForm from "../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <section className="px-5 py-20 xl:px-0 ">
      <div className="max-w-[1150px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Login */}
          <div className="w-full max-w-[570px] mx-auto p-10 rounded-lg border shadow-xl md:p-10 md:my-[140px] ">
            <h3 className="text-headingColor text-[26px] leading-9 font-bold mb-10 text-center">
              Olá! <span className="text-primaryColor">Bem vindo</span> de Volta
              🎉
            </h3>

            <LoginForm />
          </div>

          {/* Photo */}
          <div className="hidden lg:block rounded-lg ml-[80px] mt-[80px]">
            <figure className="rounded-lg">
              <img src={bgRegister} alt="" className="w-full rounded-lg" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
