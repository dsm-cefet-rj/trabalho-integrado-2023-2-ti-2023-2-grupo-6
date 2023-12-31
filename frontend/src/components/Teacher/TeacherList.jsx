/* eslint-disable react/prop-types */
import TeacherCard from "./TeacherCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTeachers,
  selectAllTeachers,
} from "../../features/teacher/teacherSlice";

const TeacherList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectAllTeachers);
  console.log("Professores: ", teachers);

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  return (
    <div className="grid lg:grid-cols-[repeat(3,1fr)] gap-12 md:grid-cols-[repeat(2,1fr)] grid-cols-[repeat(1,1fr)]">
      {teachers.map((teacher) => (
        <TeacherCard key={teacher._id} teacher={teacher} />
      ))}
    </div>
  );
};

export default TeacherList;
