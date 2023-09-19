/* eslint-disable react/jsx-key, no-unused-vars  */

import { teachers } from "../../assets/data/teachers";
import TeacherCard from "./TeacherCard";

const TeacherList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </div>
  );
};

export default TeacherList;
