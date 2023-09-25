import { Link } from "react-router-dom";
import db from "../../server/database/db.json";
import TeachersAvailableHours from "../../components/Teacher/TeachersAvailableHours";

const TeachersProfile = () => {
  // formatar data
  function formatarData(data) {
    const dataObj = new Date(data);
    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = obterNomeDoMes(dataObj.getMonth());
    const ano = dataObj.getFullYear();
    const horas = String(dataObj.getHours()).padStart(2, '0');
    const minutos = String(dataObj.getMinutes()).padStart(2, '0');
  
    return `${dia} de ${mes} - ${ano} às ${horas}:${minutos}`;
  }
  // para a funçao do formato de data
  function obterNomeDoMes(indice) {
    const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return meses[indice];
  }
  

  const url = window.location.href;
  const partesDaURL = url.split("/");
  const numeroStr = partesDaURL.pop();
  const teacherId = parseInt(numeroStr) - 1;

  const teacherIdForAppointments = teacherId + 1;
  console.log(teacherIdForAppointments)

  //const studentId = localStorage.getItem('id')

  //mapeia o studentId para o nome para usar na renderização do componente de lista
  const studentIdToNameMap = {};
  db.users.forEach((user) => {
    if (user.role === 'STUDENT') {
      studentIdToNameMap[user.id] = user.name;
    }
  });
    //mapeia o studentId para o email para usar na renderização do componente de lista
  const studentIdToEmailMap = {};
  db.users.forEach((user) => {
  if (user.role === 'STUDENT') {
    studentIdToEmailMap[user.id] = user.email;
  }
});

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

              {Number(localStorage.getItem("id")) == Number(teacherIdForAppointments) ? (
                <TeachersAvailableHours />
              ) : (
                <div></div>
              )}
            </div>
            <div className="">
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
                  {db.appointments.map((appointment) => (
                    appointment.teacherId === teacherIdForAppointments ? (
                      <li key={appointment.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div>
                          <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                            Data - Horário: {formatarData(appointment.date)}
                          </span>
                          <p className="text-[15px] leading-6 font-medium text-textColor">
                          <strong>Aluno: </strong>{studentIdToNameMap[appointment.studentId]}
                          </p>
                        </div>
                        <p className="text-[15px] leading-5 font-medium text-textColor">
                        <strong>Email - Aluno: </strong>{studentIdToEmailMap[appointment.studentId]}
                        </p>
                      </li>
                    ) : null
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default TeachersProfile;
