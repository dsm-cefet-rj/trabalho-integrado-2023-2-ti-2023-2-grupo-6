/* eslint-disable react/jsx-key, no-unused-vars  */
import TeacherCard from "./TeacherCard";

const TeacherList = (teachers) => {
  return (
    <div className="grid lg:grid-cols-[repeat(3,1fr)] gap-12 md:grid-cols-[repeat(2,1fr)] grid-cols-[repeat(1,1fr)]">
      {teachers.map((teacher) => (
        <TeacherCard teacher={teacher} key={teacher.id} />
      ))}
    </div>
  );
};

export default TeacherList;
