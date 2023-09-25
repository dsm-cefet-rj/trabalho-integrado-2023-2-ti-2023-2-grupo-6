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
    <div className="edit-modal">
      <h2>Editar Informações do Professor</h2>
      <form>
        <div className="form-group">
          <label htmlFor="specialization">Especialização:</label>
          <input
            type="text"
            id="specialization"
            placeholder="Digite sua especialização"
            name="specialization"
            value={editedTeacher.specialization}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b border-solid border-[#103d0561] focus:outline-none
  focus:border-b-primaryColor text-[14px] leading-[2.25] text-headingColor placeholder:text-textColor
  rounded-md cursor-pointer"
            required
            autoComplete="specialization"
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Resumo:</label>
          <textarea
            id="resume"
            name="resume"
            value={editedTeacher.resume}
            placeholder="Digite um resumo sobre você!"
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-solid border-[#103d0561] focus:outline-none
            focus:border-primaryColor text-[14px] leading-[2.25] text-headingColor placeholder:text-textColor
            rounded-md cursor-pointer"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            name="description"
            value={editedTeacher.description}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-solid border-[#103d0561] focus:outline-none
            focus:border-primaryColor text-[14px] leading-[2.25] text-headingColor placeholder:text-textColor
            rounded-md cursor-pointer"
          />
        </div>
      </form>
      <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
        <button onClick={handleSaveClick} className="btn">
          Salvar
        </button>
        <button onClick={onClose} className="btn">
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default EditModal;
