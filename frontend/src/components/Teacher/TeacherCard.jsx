/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Tag from "../BlogList/Tag";
import { selectTeacherById } from "../../features/teacher/teacherSlice";
import { useSelector } from "react-redux";

const TeacherCard = ({ teacher }) => {
  // Use useSelector para obter os dados do professor do estado do Redux
  const teacherData = useSelector((state) =>
    selectTeacherById(state, teacher._id)
  );

  if (!teacherData) {
    // Trate o caso em que o professor não foi encontrado
    return null;
  }

  const { _id, resume, specialization } = teacherData;

  return (
    <Link className="no-underline text-inherit" to={`/teachers/${_id}`}>
      <div className="flex flex-col">
        <img
          className="w-full h-[250px] object-cover mb-2 rounded-[20px]"
          src={teacher?.profilePicture}
          alt="photo"
        />
        <Tag label={specialization} />
        <h3 className="flex-1 mt-2 mb-4 mx-0">{teacher?.name}</h3>
        <p className="relative max-h-[60px] overflow-hidden text-[0.8rem] text-[#a9a9a9] pr-[0.6rem] before:absolute before:right-0 before:bottom-0 before:content-['...']">
          {resume}
        </p>
      </div>
    </Link>
  );
};

export default TeacherCard;
