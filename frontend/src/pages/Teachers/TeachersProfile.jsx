import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTeachersDetails } from "../../features/teacher/teacherSlice";
import TeachersAvailableHours from "../../components/Teacher/TeachersAvailableHours";

const TeacherProfile = () => {
  const teacherId = localStorage.getItem("id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachersDetails(teacherId));
  }, [dispatch, teacherId]);

  const { selectedTeacher, status, isError } = useSelector(
    (state) => state.teacher
  );

  if (status === "loading") {
    return <p>Carregando...</p>;
  }

  if (isError) {
    return <p>Ocorreu um erro ao carregar os dados do estudante: {isError}</p>;
  }

  return (
    <section>
      <Link
        className="no-underline text-[0.8rem] text-[#a9a9a9] font-medium block ml-2.5 mt-2.5 mb-8"
        to="/"
      >
        <span> &#8592;</span> <span>Voltar</span>
      </Link>
      <div className="max-w-[1200px] px-5 mx-auto">
        <div className="max-w-[1000px] items-center">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5 justify-between">
              <div className="flex">
                <figure className="max-w-[300px] max-h-[300px]">
                  <img
                    src={selectedTeacher?.profilePicture}
                    alt=""
                    className="w-[200px] h-[200px] object-cover mb-2 rounded-full shadow-2xl"
                  />
                  <p className="text-center mt-5">Professor</p>
                </figure>

                <div className="flex justify-between items-center gap-10">
                  <div className="ml-8 items-center">
                    <h3 className="text-headingColor text-[22px] leading-9 font-bold">
                      {selectedTeacher?.name}
                    </h3>
                    <h2 className="pt-9 pb-1">
                      <strong className="text-headingColor">Email:</strong>{" "}
                      {selectedTeacher?.email}{" "}
                    </h2>
                    <h2>
                      <strong className="text-headingColor">Gênero:</strong>{" "}
                      {selectedTeacher?.sex}
                    </h2>
                  </div>
                </div>
              </div>

              <TeachersAvailableHours />
            </div>

            <div className="flex flex-col">
              <div className="mt-[30px] border-b border-solid border-[#0066ff34]">
                <h3
                  className={
                    "py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold"
                  }
                >
                  Agenda de Aulas Marcadas
                </h3>
              </div>
              <div>
                <ul className="pt-4 md:p-5">
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                      <span className="text-irisBlueColor text-[15px] leading-6 font-semibold"></span>
                      <p className="text-[15px] leading-6 font-medium text-textColor">
                        <strong>Aluno: </strong>
                      </p>
                    </div>
                    <p className="text-[15px] leading-5 font-medium text-textColor">
                      <strong>Email - Aluno: </strong>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherProfile;
