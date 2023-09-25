/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTeacher } from "../../features/teacher/teacherSlice";

const EditModal = ({ teacher, onClose }) => {
  const dispatch = useDispatch();
  const initialTeacher = teacher || {
    specialization: "",
    resume: "",
    description: "",
  };

  const [editedTeacher, setEditedTeacher] = useState(initialTeacher);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTeacher({ ...editedTeacher, [name]: value });
  };

  const handleSaveClick = () => {
    dispatch(updateTeacher(editedTeacher)).then(() => {
      onClose();
    });
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md mt-[50px] mb-[70px] h-[100%]">
        <h3 className="heading text-[30px] text-center">
          Editar Informações do Professor
        </h3>
        <p className="mb-8 lg:mb-8 text-center font-light text__para">
          Adicione abaixo informações relacionadas ao seu perfil!
        </p>
        <form>
          <div>
            <label htmlFor="specialization" className="form__label">
              Especialização:
            </label>
            <input
              type="text"
              id="specialization"
              placeholder="Digite sua especialização"
              name="specialization"
              className="form-input mt-1"
              value={editedTeacher.specialization}
              onChange={handleInputChange}
              required
              autoComplete="specialization"
            />
          </div>
          <div className="my-5">
            <label htmlFor="resume" className="form__label">
              Resumo:
            </label>
            <input
              id="resume"
              name="resume"
              type="text"
              placeholder="Digite um resumo sobre você!"
              value={editedTeacher.resume}
              onChange={handleInputChange}
              className="form-input mt-1"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="description" className="form__label">
              Descrição:
            </label>
            <textarea
              id="description"
              rows="6"
              name="description"
              type="text"
              placeholder="Digite uma descrição sobre você!"
              value={editedTeacher.description}
              onChange={handleInputChange}
              className="form-input mt-1"
              required
            />
          </div>
        </form>
        <div className="flex justify-center items-center space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button
            onClick={onClose}
            className="btn text-primaryColor bg-white border border-primaryColor"
          >
            Cancelar
          </button>
          <button onClick={handleSaveClick} className="btn">
            Salvar
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditModal;
