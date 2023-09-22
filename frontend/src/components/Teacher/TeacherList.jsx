/* eslint-disable react/prop-types */
import TeacherCard from "./TeacherCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTeachers,
  selectAllTeachers,
} from "../../features/teacher/teacherSlice";
// import { getTeachers } from "../../features/teacher/teacherService";

const TeacherList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectAllTeachers);

  useEffect(() => {
    console.log("Disparando ação getTeachers");
    dispatch(getTeachers());
  }, [dispatch]);

  return (
    <div className="grid lg:grid-cols-[repeat(3,1fr)] gap-12 md:grid-cols-[repeat(2,1fr)] grid-cols-[repeat(1,1fr)]">
      {teachers.map((teacher) => (
        <TeacherCard teacher={teacher} key={teacher.id} />
      ))}
    </div>
  );
};

export default TeacherList;
