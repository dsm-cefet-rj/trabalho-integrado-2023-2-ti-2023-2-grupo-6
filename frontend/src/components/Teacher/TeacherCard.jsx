/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Tag from "../BlogList/Tag";

const TeacherCard = ({
  teacher: {
    id,
    user: { name, profilePicture },
    specialization,
    totalStudents,
  },
}) => {
  return (
    <Link className="no-underline text-inherit" to={`/professores/${id}`}>
      <div className="flex flex-col">
        <img
          className="w-full h-[250px] object-cover mb-2 rounded-[20px]"
          src={profilePicture}
          alt="photo"
        />
        <Tag label={specialization} />
        <h3 className=" flex-1 mt-2 mb-4 mx-0">{name}</h3>
        <p className="relative max-h-[50px] overflow-hidden text-[0.8rem] text-[#a9a9a9] pr-[0.6rem] before:absolute before:right-0 before:bottom-0 before:content-['...']">
          {totalStudents} estudantes
        </p>
      </div>
    </Link>
  );
};

export default TeacherCard;
