/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Tag from "../BlogList/Tag";
import { selectTeacherById } from "../../features/teacher/teacherSlice";
import { useSelector } from "react-redux";

const TeacherCard = ({ teacher }) => {
  // Use useSelector para obter os dados do professor do estado do Redux
  const teacherData = useSelector((state) =>
    selectTeacherById(state, teacher.id)
  );
  console.log(teacherData);

  if (!teacherData) {
    // Trate o caso em que o professor não foi encontrado
    return null;
  }

  const { id, user, resume, specialization } = teacherData;

  return (
    <Link className="no-underline text-inherit" to={`/teachers/${id}`}>
      <div className="flex flex-col">
        <img
          className="w-full h-[250px] object-cover mb-2 rounded-[20px]"
          src={user.profilePicture}
          alt="photo"
        />
        <Tag label={specialization} />
        <h3 className="flex-1 mt-2 mb-4 mx-0">{user.name}</h3>
        <p className="relative max-h-[60px] overflow-hidden text-[0.8rem] text-[#a9a9a9] pr-[0.6rem] before:absolute before:right-0 before:bottom-0 before:content-['...']">
          {resume}
        </p>
      </div>
    </Link>
  );
};

export default TeacherCard;
