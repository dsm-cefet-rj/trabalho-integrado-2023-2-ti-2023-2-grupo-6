import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateAvailableHours } from "../../features/teacher/teacherSlice";
import { formatarData } from "../../common/functions";

const TeachersAvailableHours = () => {
  const [formData, setFormData] = useState({ availableHours: [] });
  const dispatch = useDispatch();

  // Armazena o ID do professor no localStorage com a chave 'id'
  const id = localStorage.getItem("id"); // Corrigido o nome da chave

  function SaveNewHour(e) {
    e.preventDefault();
    if (id) {
      dispatch(
        updateAvailableHours({
          id: id,
          availability: [formData.availableHours],
        })
      )
        .then(() => {
          // Sucesso: exibe um toast de sucesso
          toast.success(
            `Horário disponibilizado com sucesso para ${formatarData(
              formData.availableHours
            )}`
          );
          setFormData({ availableHours: "" });
        })
        .catch((error) => {
          // Erro: exibe um toast de erro com a mensagem de erro
          toast.error("Erro ao disponibilizar horário: " + error.message);
        });
    } else {
      console.error("ID do professor não encontrado no localStorage.");
    }
  }

  const handleChange = (e) => {
    setFormData({ availableHours: e.target.value });
  };

  return (
    <>
      <div className="text-center h-[250px] w-[250px] shadow-md text-[20px] rounded-lg p-3">
        <h1 className="text-headingColor text-[20px] leading-9 font-bold">
          Disponibilize um horário
        </h1>
        <form onSubmit={SaveNewHour} className="mt-4 flex flex-col gap-1">
          <input
            onChange={handleChange}
            value={formData.availableHours}
            className="border text-[16px] "
            type="datetime-local"
          ></input>
          <button
            type="submit"
            className=" btn my-2 flex justify-center items-center w-full text-[14px]  rounded-md hover:bg-green-900"
          >
            Disponibilizar
          </button>
          <p className=" text-[10px] font-bold text-red-700">
            Observação: A data só será salva apenas uma vez.
          </p>
        </form>
      </div>
    </>
  );
};

export default TeachersAvailableHours;
