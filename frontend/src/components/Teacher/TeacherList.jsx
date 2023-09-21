/* eslint-disable react/prop-types */
import TeacherCard from "./TeacherCard";
import { useEffect, useState } from "react";
import { getTeachers } from "../../features/teacher/teacherService";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    getTeachers().then((res) => {
      setTeachers(res.data || []);
    });
  });
  return (
    <div className="grid lg:grid-cols-[repeat(3,1fr)] gap-12 md:grid-cols-[repeat(2,1fr)] grid-cols-[repeat(1,1fr)]">
      {teachers.map((teacher) => (
        <TeacherCard teacher={teacher} key={teacher.id} />
      ))}
    </div>
  );
};

export default TeacherList;
