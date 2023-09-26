import { useState } from "react";
import bgRegister from "../assets/images/signup/bgRegister.svg";
import StudentForm from "../components/RegisterForm/StudentForm/StudentForm";
import TeacherForm from "../components/RegisterForm/TeacherForm/TeacherForm";

const Signup = () => {
  const [selectedForm, setSelectedForm] = useState(null);

  const handleFormSelect = (formType) => {
    setSelectedForm(formType);
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
            {selectedForm ? (
              selectedForm === "student" ? (
                <StudentForm />
              ) : (
                <TeacherForm />
              )
            ) : (
              <>
                <h2 className="text-headingColor text-[26px] leading-9 font-bold mb-10 text-center">
                  Você é um?
                </h2>
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => handleFormSelect("student")}
                    className="btn btn-primary mb-2"
                  >
                    Aluno
                  </button>
                  <button
                    onClick={() => handleFormSelect("teacher")}
                    className="btn btn-primary"
                  >
                    Professor
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
