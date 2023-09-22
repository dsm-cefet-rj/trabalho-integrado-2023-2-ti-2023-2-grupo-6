import React, { useState } from "react";
import db from "../../server/database/db.json";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppointmentPainel = () => {
  const teacherId =
    Number(window.location.href.charAt(window.location.href.length - 1)) - 1;

  function formatarData(dataStr) {
    const data = new Date(dataStr);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const formatter = new Intl.DateTimeFormat("pt-BR", options);
    return formatter.format(data);
  }

  const [formData, setFormData] = useState({
    horario: "", 
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Consulta marcada com sucesso!");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Agende sua aula</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          📗
        </span>
      </div>

      <div className="mt-[30px] text-center">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Horários Disponíveis:
        </p>

        <ul className="mt-3 flex flex-col items-center">
          {db.teachers[teacherId].availableHours.map((e) => (
            <li className="flex justify-between mb-2" key={e}>
              {formatarData(e)}
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="text-center mt-4 rounded-md">
          <label className="text-headingColor font-bold text-[16px] leading-7">
            Seu horário:
            <select
              onChange={handleChange}
              value={formData.horario}
              name="horario"
              className="text-headingColor font-semibold text-[12px] leading-7 px-4 py-3 focus:outline-none cursor-pointer ml-2 border-primaryColor"
            >
              {db.teachers[teacherId].availableHours.map((e) => (
                <option value={e} key={e}>
                  {formatarData(e)}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button className="mt-4 btn px-2 w-full rounded-md hover:bg-green-900">
          Marque sua aula
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default AppointmentPainel;