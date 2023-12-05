import { Link } from "react-router-dom";
import db from "../../server/database/db.json";
import TeachersAvailableHours from "../../components/Teacher/TeachersAvailableHours";
import { formatarData } from "../../common/functions";
import BlogItem from "../../components/BlogList/BlogItem";
import { useSelector } from "react-redux";
import { selectAllBlogPosts } from "../../features/blog/blogSlice";

const TeachersProfile = () => {
  const url = window.location.href;
  const partesDaURL = url.split("/");
  const numeroStr = partesDaURL.pop();
  const teacherId = parseInt(numeroStr) - 1;

  const teacherIdForAppointments = teacherId + 1;

  const studentIdToNameMap = {};
  db.users.forEach((user) => {
    if (user.role === "STUDENT") {
      studentIdToNameMap[user.id] = user.name;
    }
  });

  const studentIdToEmailMap = {};
  db.users.forEach((user) => {
    if (user.role === "STUDENT") {
      studentIdToEmailMap[user.id] = user.email;
    }
  });

  const blogPosts = useSelector(selectAllBlogPosts);
  const teacherBlogPosts = blogPosts.filter(
    (post) => post.authorId === teacherId
  );

  return (
    <section>
      <Link
        className="no-underline text-[0.8rem] text-[#a9a9a9] font-medium block ml-2.5 mt-2.5 mb-8"
        to="/"
      >
        <span> &#8592;</span> <span>Voltar</span>
      </Link>
      <div className="max-w-[1200px] px-5 mx-auto">
        <div className="max-w-[1000px] items-center ">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5 justify-between">
              <div className="flex">
                <figure className="max-w-[300px] max-h-[300px]">
                  <img
                    src={db.users[teacherId].profilePicture}
                    alt=""
                    className="w-[200px] h-[200px] object-cover mb-2 rounded-full shadow-2xl"
                  />
                  <p className="text-center mt-5">Professor</p>
                </figure>

                <div className="flex justify-between items-center gap-10">
                  <div className="ml-8 items-center">
                    <h3 className="text-headingColor text-[22px] leading-9 font-bold">
                      {db.users[teacherId].name}
                    </h3>
                    <h2 className="pt-9 pb-1">
                      <strong className="text-headingColor">Email:</strong>{" "}
                      {db.users[teacherId].email}{" "}
                    </h2>
                    <h2>
                      <strong className="text-headingColor">Gênero:</strong>{" "}
                      {db.users[teacherId].gender}
                    </h2>
                  </div>
                </div>
              </div>

              {Number(localStorage.getItem("id")) ==
              Number(teacherIdForAppointments) ? (
                <TeachersAvailableHours />
              ) : (
                <div></div>
              )}
            </div>

            <div className="flex flex-col">
              <div className="mt-[30px] border-b border-solid border-green-900">
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
                  {db.appointments.map((appointment) =>
                    appointment.teacherId === teacherIdForAppointments ? (
                      <li
                        key={appointment.id}
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]"
                      >
                        <div>
                          <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                            Data - Horário: {formatarData(appointment.date)}
                          </span>
                          <p className="text-[15px] leading-6 font-medium text-textColor">
                            <strong>Aluno: </strong>
                            {studentIdToNameMap[appointment.studentId]}
                          </p>
                        </div>
                        <p className="text-[15px] leading-5 font-medium text-textColor">
                          <strong>Email - Aluno: </strong>
                          {studentIdToEmailMap[appointment.studentId]}
                        </p>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>

              <div className="flex flex-wrap justify-center">
                {teacherBlogPosts.map((post) => (
                  <BlogItem key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersProfile;
