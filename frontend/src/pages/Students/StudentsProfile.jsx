import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudentsDetails } from "../../features/student/studentSlice";

const StudentsProfile = () => {
  const studentId = localStorage.getItem("id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentsDetails(studentId));
  }, [dispatch, studentId]);

  const { selectedStudent, status, isError } = useSelector(
    (state) => state.student
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
            <div className="flex items-center gap-5">
              <figure className="max-w-[300px] max-h-[300px]">
                <img
                  src={selectedStudent?.profilePicture}
                  alt=""
                  className="w-[200px] h-[200px] object-cover mb-2 rounded-full shadow-2xl"
                />
                <p className="text-center mt-5">Aluno</p>
              </figure>

              <div className=" ml-8 mb-6 ">
                <h3 className="text-headingColor text-[26px] leading-9 mt-3 font-bold mb-5">
                  {selectedStudent?.name}
                </h3>
                <h2 className="pt-9 pb-1">
                  <strong className="text-headingColor">Email:</strong>{" "}
                  {selectedStudent?.email}
                </h2>
                <h2>
                  <strong className="text-headingColor">Gênero:</strong>{" "}
                  {selectedStudent?.sex}
                </h2>
              </div>
            </div>
            <div className="">
              <div className="mt-[30px] border-b border-solid border-[#0066ff34]">
                <h3
                  className={
                    "py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold"
                  }
                >
                  Aulas Marcadas
                </h3>
              </div>
              {/* <div>
                <ul className="pt-4 md:p-5">
                  {db.appointments.map((appointment) =>
                    appointment.studentId == studentId ? (
                      <li
                        key={appointment.id}
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]"
                      >
                        <div>
                          <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                            Data - Horário: {formatarData(appointment.date)}
                          </span>
                          <p className="text-[15px] leading-6 font-medium text-textColor">
                            <strong>Professor: </strong>{" "}
                            {teacherIdToNameMap[appointment.teacherId]}
                          </p>
                        </div>
                        <p className="text-[15px] leading-5 font-medium text-textColor">
                          <strong>Email - Professor: </strong>{" "}
                          {teacherIdToEmailMap[appointment.teacherId]}
                        </p>
                      </li>
                    ) : null
                  )}
                </ul>
              </div> */}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default StudentsProfile;
