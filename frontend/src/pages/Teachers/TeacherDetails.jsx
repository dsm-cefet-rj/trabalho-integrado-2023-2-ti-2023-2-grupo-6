import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTeachersDetails,
  selectTeacherById,
} from "../../features/teacher/teacherSlice";
import { Link, useParams } from "react-router-dom";
import AppointmentPainel from "./AppointmentPainel";
import Tag from "../../components/BlogList/Tag";
import db from "../../server/database/db.json";

const TeacherDetails = () => {
  const localStorageId = Number(localStorage.getItem("id"));
  const isTeacher = db.users[localStorageId - 1]?.role == "TEACHER";

  const { id } = useParams();

  const dispatch = useDispatch();
  const selectedTeacher = useSelector((state) => selectTeacherById(state, id));

  useEffect(() => {
    if (id && !selectedTeacher) {
      dispatch(getTeachersDetails(id));
    }
  }, [dispatch, id, selectedTeacher]);

  if (!selectedTeacher) {
    return <div>Carregando...</div>;
  }

  return (
    <section>
      <Link
        className="no-underline text-[0.8rem] text-[#a9a9a9] font-medium block ml-2.5 mt-2.5 mb-8"
        to="/teachers"
      >
        <span> &#8592;</span> <span>Voltar</span>
      </Link>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2 ">
            <div className="flex items-center gap-5">
              <figure className="max-w-[300px] max-h-[300px]">
                <img
                  src={selectedTeacher.user.profilePicture}
                  alt=""
                  className="w-full h-[200px] object-cover mb-2 rounded-[20px]"
                />
              </figure>

              <div>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  {selectedTeacher.user.name}
                </h3>
                <Tag label={selectedTeacher.specialization} />

                <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px] break-words">
                  {selectedTeacher.resume}
                </p>
              </div>
            </div>
            <div className="">
              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <h3
                  className={
                    "py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold"
                  }
                >
                  Descubra mais sobre {selectedTeacher.user.name}
                </h3>
              </div>
              <p className="text__para text-[14px] leading-6 break-words">
                {selectedTeacher.description}
              </p>

              <div className="mt-[30px] border-b border-solid border-[#0066ff34]">
                <h3
                  className={
                    "py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold"
                  }
                >
                  Formação
                </h3>
              </div>
              <div>
                <ul className="pt-4 md:p-5">
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                      <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                        07-04-2010 - 13-09-2014
                      </span>
                      <p className="text-[16px] leading-6 font-medium text-textColor">
                        Técnico
                      </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                      Centro Federal de Educação Tecnológica Celso Suckow da
                      Fonseca, RJ
                    </p>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                      <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                        07-04-2010 - 13-09-2014
                      </span>
                      <p className="text-[16px] leading-6 font-medium text-textColor">
                        Aluno
                      </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                      Universidade do Estado do Rio de Janeiro
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mt-[30px] border-b border-solid border-[#0066ff34]">
                <h3
                  className={
                    "py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold"
                  }
                >
                  Experiencia
                </h3>
              </div>
              <div>
                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                  <li className="p-4 rounded bg-[#c8f1ce]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                      07-04-2010 - 13-09-2014
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                      Monitor
                    </p>

                    <p className="text-[14px] leading-5 font-medium text-textColor">
                      Centro Federal de Educação Tecnológica Celso Suckow da
                      Fonseca, RJ
                    </p>
                  </li>
                  <li className="p-4 rounded bg-[#c8f1ce]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                      07-04-2010 - 13-09-2014
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                      Professor
                    </p>

                    <p className="text-[14px] leading-5 font-medium text-textColor">
                      Universidade Federal Fluminense, RJ
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            {!isTeacher ? (
              <AppointmentPainel />
            ) : (
              <div className="shadow-2xl mt-[40px] p-4 max-w-[300px] text-center text-primaryColor rounded-lg font-bold">
                <span className="text-orangeColor">Entre</span> ou{" "}
                <span className="text-orangeColor">Registre-se</span> como{" "}
                <span className="text-orangeColor">Aluno</span> para agendar uma
                aula com outro Professor!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherDetails;
