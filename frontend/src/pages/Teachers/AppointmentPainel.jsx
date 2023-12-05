import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatarData } from "../../common/functions";
import { useParams } from "react-router-dom";
import { createAppointment } from "../../features/appointment/appointmentSlice";
import { getAvailableHoursByTeacher } from "../../features/teacher/teacherSlice";

const AppointmentPainel = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const teacherId = id;
  const studentId = localStorage.getItem("id");

  const [formData, setFormData] = useState({
    selectedHour: "",
  });

  const availableHours = useSelector(
    (state) => state?.teacher?.availableHours || []
  );

  console.log(availableHours);

  useEffect(() => {
    dispatch(getAvailableHoursByTeacher(teacherId));
  }, [dispatch, teacherId]);

  const fetchTeacherData = async () => {
    try {
      await dispatch(
        createAppointment({
          teacherId,
          studentId,
          schedule: formData.selectedHour,
        })
      );

      toast.success("Horário marcado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar compromisso:", error);
      toast.error("Erro ao marcar o horário. Tente novamente mais tarde.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const selectedHour = formData.selectedHour;

    if (!selectedHour) {
      toast.error("Selecione uma hora");
      return;
    }

    await fetchTeacherData();
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
          {availableHours.map((e) => (
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
              value={formData.selectedHour}
              name="selectedHour"
              className="text-headingColor font-semibold text-[12px] leading-7 px-4 py-3 focus:outline-none cursor-pointer ml-2 border-primaryColor"
            >
              <option value="" selected disabled hidden>
                Escolha um horário
              </option>
              {availableHours.map((e) => (
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
